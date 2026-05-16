<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';

  export let form = undefined;

  let startedAt = 0;
  let submitting = false;
  onMount(() => { startedAt = Date.now(); });

  $: values = form?.values ?? {};
  $: errors = form?.errors ?? {};
  $: success = form?.success === true;

  $: if (typeof document !== 'undefined' && errors && Object.keys(errors).length) {
    queueMicrotask(() => {
      const firstKey = Object.keys(errors)[0];
      const el = document.getElementById(firstKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus({ preventScroll: true });
      }
    });
  }

  const inputBase =
    'w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 outline-none transition-colors py-2 text-on-surface placeholder-on-surface-variant/30';
  const labelBase = 'font-label-caps text-[10px] uppercase tracking-widest text-outline block';
  const sectionTitle = 'font-label-caps text-label-caps text-primary tracking-widest uppercase mb-6 block';
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-surface-tertiary" id="quote">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
          Engagement
        </span>
        <h2 class="font-headline-md text-headline-md mb-8">Book Your Service.</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Experience what premium cleaning should feel like. Tell us about your space and we'll be in
          touch within 24 hours to confirm your appointment.
        </p>
        <div class="space-y-6">
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-on-surface">
            {#each [
              'Rockville, MD',
              'Gaithersburg, MD',
              'Silver Spring, MD',
              'Bethesda, MD',
              'Potomac, MD',
              'Germantown, MD',
              'Frederick, MD',
              'Damascus, MD',
              'McLean, VA',
              'Fairfax, VA',
              'Georgetown, DC',
              'The Wharf, DC',
              'Dupont Circle, DC'
            ] as place}
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <span class="font-body-md">{place}</span>
              </li>
            {/each}
          </ul>
          <div class="flex items-center gap-4 text-on-surface pt-4">
            <span class="material-symbols-outlined text-primary">mail</span>
            <span class="font-body-md">contact@altivumservices.com</span>
          </div>
        </div>
      </div>

      {#if success}
        <div class="bg-background p-12 border border-white/5 flex flex-col justify-center">
          <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
            Received
          </span>
          <h3 class="font-headline-md text-headline-md mb-6">Thank you.</h3>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Your booking request has been delivered. We'll contact you within 24 hours to confirm your appointment.
          </p>
        </div>
      {:else}
        <form
          method="POST"
          novalidate
          use:enhance={() => {
            submitting = true;
            return async ({ update }) => {
              await update();
              submitting = false;
            };
          }}
          class="bg-background p-8 md:p-12 border border-white/5 space-y-12"
        >
          <input type="hidden" name="startedAt" value={startedAt} />
          <div aria-hidden="true" style="position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden">
            <label>Website<input type="text" name="website" tabindex="-1" autocomplete="off" /></label>
          </div>

          <!-- Personal Information -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Personal Information</legend>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="firstName">First Name *</label>
                <input id="firstName" name="firstName" type="text" required value={values.firstName ?? ''} class={inputBase} />
                {#if errors.firstName}<p class="text-xs text-red-400">{errors.firstName}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="lastName">Last Name *</label>
                <input id="lastName" name="lastName" type="text" required value={values.lastName ?? ''} class={inputBase} />
                {#if errors.lastName}<p class="text-xs text-red-400">{errors.lastName}</p>{/if}
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="email">Email Address *</label>
                <input id="email" name="email" type="email" required value={values.email ?? ''} placeholder="client@domain.com" class={inputBase} />
                {#if errors.email}<p class="text-xs text-red-400">{errors.email}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="phone">Phone Number *</label>
                <input id="phone" name="phone" type="tel" required value={values.phone ?? ''} placeholder="240-891-2155" class={inputBase} />
                {#if errors.phone}<p class="text-xs text-red-400">{errors.phone}</p>{/if}
              </div>
            </div>
          </fieldset>

          <!-- Service Address -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Service Address</legend>
            <div class="space-y-2">
              <label class={labelBase} for="streetAddress">Street Address *</label>
              <input id="streetAddress" name="streetAddress" type="text" required value={values.streetAddress ?? ''} class={inputBase} />
              {#if errors.streetAddress}<p class="text-xs text-red-400">{errors.streetAddress}</p>{/if}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="city">City *</label>
                <input id="city" name="city" type="text" required value={values.city ?? ''} class={inputBase} />
                {#if errors.city}<p class="text-xs text-red-400">{errors.city}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="state">State *</label>
                <select id="state" name="state" required value={values.state ?? ''} class="{inputBase} appearance-none">
                  <option value="" class="bg-surface-tertiary">Select State</option>
                  <option value="MD" class="bg-surface-tertiary">Maryland</option>
                  <option value="VA" class="bg-surface-tertiary">Virginia</option>
                  <option value="DC" class="bg-surface-tertiary">Washington DC</option>
                </select>
                {#if errors.state}<p class="text-xs text-red-400">{errors.state}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="zip">ZIP Code *</label>
                <input id="zip" name="zip" type="text" required inputmode="numeric" value={values.zip ?? ''} class={inputBase} />
                {#if errors.zip}<p class="text-xs text-red-400">{errors.zip}</p>{/if}
              </div>
            </div>
          </fieldset>

          <!-- Service Details -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Service Details</legend>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="serviceType">Service Type *</label>
                <select id="serviceType" name="serviceType" required value={values.serviceType ?? ''} class="{inputBase} appearance-none">
                  <option value="" class="bg-surface-tertiary">Select Service</option>
                  <option class="bg-surface-tertiary">Residential Estate</option>
                  <option class="bg-surface-tertiary">Luxury Condo</option>
                  <option class="bg-surface-tertiary">Airbnb / Short-Term</option>
                  <option class="bg-surface-tertiary">Commercial Office</option>
                  <option class="bg-surface-tertiary">Deep Clean</option>
                  <option class="bg-surface-tertiary">Move-In / Move-Out</option>
                </select>
                {#if errors.serviceType}<p class="text-xs text-red-400">{errors.serviceType}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="frequency">Frequency *</label>
                <select id="frequency" name="frequency" required value={values.frequency ?? 'One Time'} class="{inputBase} appearance-none">
                  <option class="bg-surface-tertiary">One Time</option>
                  <option class="bg-surface-tertiary">Weekly</option>
                  <option class="bg-surface-tertiary">Bi-Weekly</option>
                  <option class="bg-surface-tertiary">Monthly</option>
                </select>
                {#if errors.frequency}<p class="text-xs text-red-400">{errors.frequency}</p>{/if}
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="bedrooms">Number of Bedrooms *</label>
                <select id="bedrooms" name="bedrooms" required value={values.bedrooms ?? ''} class="{inputBase} appearance-none">
                  <option value="" class="bg-surface-tertiary">Select Bedrooms</option>
                  <option class="bg-surface-tertiary">Studio</option>
                  <option class="bg-surface-tertiary">1</option>
                  <option class="bg-surface-tertiary">2</option>
                  <option class="bg-surface-tertiary">3</option>
                  <option class="bg-surface-tertiary">4</option>
                  <option class="bg-surface-tertiary">5</option>
                  <option class="bg-surface-tertiary">6+</option>
                </select>
                {#if errors.bedrooms}<p class="text-xs text-red-400">{errors.bedrooms}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="bathrooms">Number of Bathrooms *</label>
                <select id="bathrooms" name="bathrooms" required value={values.bathrooms ?? ''} class="{inputBase} appearance-none">
                  <option value="" class="bg-surface-tertiary">Select Bathrooms</option>
                  <option class="bg-surface-tertiary">1</option>
                  <option class="bg-surface-tertiary">1.5</option>
                  <option class="bg-surface-tertiary">2</option>
                  <option class="bg-surface-tertiary">2.5</option>
                  <option class="bg-surface-tertiary">3</option>
                  <option class="bg-surface-tertiary">3.5</option>
                  <option class="bg-surface-tertiary">4+</option>
                </select>
                {#if errors.bathrooms}<p class="text-xs text-red-400">{errors.bathrooms}</p>{/if}
              </div>
            </div>
            <div class="space-y-2">
              <label class={labelBase} for="propertySize">How large is the property? *</label>
              <input id="propertySize" name="propertySize" type="text" required inputmode="numeric" value={values.propertySize ?? ''} placeholder="Enter property size in square feet" class={inputBase} />
              {#if errors.propertySize}<p class="text-xs text-red-400">{errors.propertySize}</p>{/if}
            </div>
          </fieldset>

          <!-- Scheduling -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Scheduling</legend>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class={labelBase} for="preferredDate">Preferred Date *</label>
                <input id="preferredDate" name="preferredDate" type="date" required value={values.preferredDate ?? ''} class="{inputBase} [color-scheme:dark]" />
                {#if errors.preferredDate}<p class="text-xs text-red-400">{errors.preferredDate}</p>{/if}
              </div>
              <div class="space-y-2">
                <label class={labelBase} for="preferredTime">Preferred Time</label>
                <select id="preferredTime" name="preferredTime" value={values.preferredTime ?? 'Any Time'} class="{inputBase} appearance-none">
                  <option class="bg-surface-tertiary">Any Time</option>
                  <option class="bg-surface-tertiary">Morning (8AM – 12PM)</option>
                  <option class="bg-surface-tertiary">Afternoon (12PM – 5PM)</option>
                  <option class="bg-surface-tertiary">Evening (5PM – 8PM)</option>
                </select>
              </div>
            </div>
          </fieldset>

          <!-- Additional Information -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Additional Information</legend>
            <div class="space-y-2">
              <label class={labelBase} for="instructions">Special Instructions or Requests</label>
              <textarea
                id="instructions"
                name="instructions"
                rows="4"
                value={values.instructions ?? ''}
                placeholder="Please let us know about any specific cleaning requirements, access instructions, pets, or other important details..."
                class={inputBase}
              ></textarea>
            </div>
            <div class="space-y-3">
              <span class={labelBase}>Pets in the Home</span>
              <div class="flex flex-col sm:flex-row gap-4">
                <label class="flex items-center gap-3 cursor-pointer text-on-surface">
                  <input
                    type="checkbox"
                    name="pets"
                    value="Dog"
                    checked={(values.pets ?? []).includes('Dog')}
                    class="w-4 h-4 accent-primary bg-transparent"
                  />
                  <span class="font-body-md">Dog</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer text-on-surface">
                  <input
                    type="checkbox"
                    name="pets"
                    value="Cat"
                    checked={(values.pets ?? []).includes('Cat')}
                    class="w-4 h-4 accent-primary bg-transparent"
                  />
                  <span class="font-body-md">Cat</span>
                </label>
              </div>
            </div>
          </fieldset>

          <!-- Consent & Terms -->
          <fieldset class="space-y-6">
            <legend class={sectionTitle}>Consent & Terms</legend>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              By clicking "Submit" I agree to receive emails, text messages, and phone calls from
              Altivum Services LLC. I also agree to the Terms of Use and Privacy Policy linked below.
              Reply STOP to opt out and HELP for help. Message &amp; data rates may apply. Message
              frequency varies. No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. All other categories exclude text messaging
              originator opt-in data and consent; this information will not be shared with any third
              parties.
            </p>

            <div class="space-y-3">
              <span class={labelBase}>Text Message Opt-in *</span>
              <div class="flex flex-col sm:flex-row gap-4">
                <label class="flex items-center gap-3 cursor-pointer text-on-surface">
                  <input type="radio" name="smsOptIn" value="YES" checked={values.smsOptIn === 'YES'} required class="w-4 h-4 accent-primary" />
                  <span class="font-body-md">YES — opt in to texts</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer text-on-surface">
                  <input type="radio" name="smsOptIn" value="NO" checked={values.smsOptIn === 'NO'} class="w-4 h-4 accent-primary" />
                  <span class="font-body-md">NO — no texts</span>
                </label>
              </div>
              {#if errors.smsOptIn}<p class="text-xs text-red-400">{errors.smsOptIn}</p>{/if}
            </div>

            <div class="flex flex-col sm:flex-row gap-6 text-xs text-on-surface-variant">
              <a href="/privacy" class="underline hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" class="underline hover:text-primary transition-colors">Terms &amp; Conditions</a>
            </div>
          </fieldset>

          {#if form?.formError}
            <p class="text-sm text-red-400">{form.formError}</p>
          {/if}

          <button
            type="submit"
            disabled={submitting}
            class="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase hover:bg-accent-champagne transition-all duration-300 tracking-widest disabled:opacity-50"
          >
            {submitting ? 'Sending…' : 'Submit'}
          </button>

          <p class="text-xs text-on-surface-variant text-center">
            We'll contact you within 24 hours to confirm your appointment.
          </p>
        </form>
      {/if}
    </div>
  </div>
</section>
