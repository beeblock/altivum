import { fail } from '@sveltejs/kit';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from '$env/static/private';

const MIN_FILL_MS = 2000;

function clean(v, max = 2000) {
  return String(v ?? '').trim().slice(0, max);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

function row(label, value) {
  if (!value) return '';
  return `<tr><td style="padding:6px 12px;color:#888;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 12px">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`;
}

export const actions = {
  default: async ({ request, getClientAddress }) => {
    const data = await request.formData();

    // Honeypot
    if (clean(data.get('website'))) return { success: true };

    // Time trap
    const startedAt = Number(data.get('startedAt') || 0);
    if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) return { success: true };

    const values = {
      firstName: clean(data.get('firstName'), 80),
      lastName: clean(data.get('lastName'), 80),
      email: clean(data.get('email'), 200),
      phone: clean(data.get('phone'), 40),
      streetAddress: clean(data.get('streetAddress'), 200),
      city: clean(data.get('city'), 100),
      state: clean(data.get('state'), 4),
      zip: clean(data.get('zip'), 12),
      serviceType: clean(data.get('serviceType'), 80),
      frequency: clean(data.get('frequency'), 40),
      bedrooms: clean(data.get('bedrooms'), 20),
      bathrooms: clean(data.get('bathrooms'), 20),
      propertySize: clean(data.get('propertySize'), 40),
      preferredDate: clean(data.get('preferredDate'), 20),
      preferredTime: clean(data.get('preferredTime'), 40),
      instructions: clean(data.get('instructions'), 5000),
      pets: data.getAll('pets').map((v) => clean(v, 20)).filter((v) => ['Dog', 'Cat'].includes(v)),
      smsOptIn: clean(data.get('smsOptIn'), 4)
    };

    const errors = {};
    if (!values.firstName) errors.firstName = 'Required';
    if (!values.lastName) errors.lastName = 'Required';
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Valid email required';
    if (!values.phone) errors.phone = 'Required';
    if (!values.streetAddress) errors.streetAddress = 'Required';
    if (!values.city) errors.city = 'Required';
    if (!['MD', 'VA', 'DC'].includes(values.state)) errors.state = 'Select a state';
    if (!values.zip || !/^\d{5}(-\d{4})?$/.test(values.zip)) errors.zip = 'Valid ZIP required';
    if (!values.serviceType) errors.serviceType = 'Required';
    if (!values.frequency) errors.frequency = 'Required';
    if (!values.bedrooms) errors.bedrooms = 'Required';
    if (!values.bathrooms) errors.bathrooms = 'Required';
    if (!values.propertySize) errors.propertySize = 'Required';
    if (!values.preferredDate) errors.preferredDate = 'Required';
    if (!['YES', 'NO'].includes(values.smsOptIn)) errors.smsOptIn = 'Required';

    if (Object.keys(errors).length) {
      return fail(400, { errors, values });
    }

    const ip = getClientAddress();
    const fullName = `${values.firstName} ${values.lastName}`;
    const subject = `New booking request — ${fullName}`;
    const html = `
      <h2 style="font-family:sans-serif">New booking request</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tbody>
          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Personal</td></tr>
          ${row('Name', fullName)}
          ${row('Email', values.email)}
          ${row('Phone', values.phone)}

          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Service address</td></tr>
          ${row('Street', values.streetAddress)}
          ${row('City', values.city)}
          ${row('State', values.state)}
          ${row('ZIP', values.zip)}

          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Service details</td></tr>
          ${row('Service type', values.serviceType)}
          ${row('Frequency', values.frequency)}
          ${row('Bedrooms', values.bedrooms)}
          ${row('Bathrooms', values.bathrooms)}
          ${row('Property size', values.propertySize + ' sq ft')}

          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Scheduling</td></tr>
          ${row('Preferred date', values.preferredDate)}
          ${row('Preferred time', values.preferredTime || 'Any Time')}

          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Additional</td></tr>
          ${row('Pets in home', values.pets.length ? values.pets.join(', ') : 'None')}
          ${row('Special instructions', values.instructions || '—')}

          <tr><td colspan="2" style="padding-top:16px;font-weight:bold;color:#666;text-transform:uppercase;letter-spacing:1px;font-size:11px">Consent</td></tr>
          ${row('SMS opt-in', values.smsOptIn)}
        </tbody>
      </table>
      <hr style="margin-top:24px">
      <p style="color:#888;font-size:12px;font-family:sans-serif">Submitted from ${escapeHtml(ip)}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: values.email,
        subject,
        html
      })
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend error', res.status, detail);
      return fail(502, {
        formError: 'Could not send your request. Please try again or email us directly.',
        values
      });
    }

    return { success: true };
  }
};
