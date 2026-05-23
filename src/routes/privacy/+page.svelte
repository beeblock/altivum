<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
  import ContactWidget from '$lib/components/ContactWidget.svelte';
</script>

<svelte:head>
  <title>Privacy Policy — Altivum Cleaning Services</title>
  <meta name="description" content="Privacy Policy for Altivum Cleaning Services." />
</svelte:head>

<div id="top"></div>
<Header />

<main class="bg-background">
  <section class="pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
    <div class="max-w-3xl mx-auto px-grid-margin">
      <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
        Legal
      </span>
      <h1 class="font-headline-md text-headline-md mb-6">Privacy Policy</h1>
      <p class="font-body-md text-on-surface-variant mb-16">Effective Date: May 16, 2026</p>

      <div class="space-y-12 text-on-surface-variant font-body-md leading-relaxed">
        <div>
          <p>
            Altivum Cleaning Services (&ldquo;Altivum,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains what
            information we collect, how we use it, and the choices available to you.
          </p>
          <ul class="mt-6 space-y-2">
            <li><strong class="text-on-surface">Website:</strong> altivumservices.com</li>
            <li><strong class="text-on-surface">Email:</strong> contact@altivumservices.com</li>
            <li><strong class="text-on-surface">Service Area:</strong> Maryland, Virginia, Washington DC</li>
          </ul>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Information Collection</h2>
          <p>
            We collect non-personally identifying information such as browser type, language
            preference, and referring site, along with personally identifying details (name, email,
            phone number, service address, and service preferences) that you provide when you
            request a quote, book a service, or contact us.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">SMS Terms and Conditions</h2>
          <p>
            By opting into text messaging, you consent to receive communications from Altivum
            Services LLC related to your bookings, appointments, and service updates. You may
            opt out at any time by replying <strong class="text-on-surface">STOP</strong>, or
            reply <strong class="text-on-surface">HELP</strong> for assistance. Message and data
            rates may apply. Message frequency varies. Support is available at
            contact@altivumservices.com.
          </p>
          <p class="mt-4">
            <strong class="text-on-surface">No mobile information will be shared with third
            parties or affiliates for marketing or promotional purposes.</strong>
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Use of Information</h2>
          <p>
            Your personal information will not be shared, rented, or sold to third parties for
            marketing purposes. Text messaging opt-in data and consent information remain
            confidential and are not shared with third parties under any circumstances.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Cookies</h2>
          <p>
            Our site uses cookies to remember preferences, track usage, and deliver personalized
            content. You may disable cookies in your browser settings, but some features of the
            site may not function properly.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Security</h2>
          <p>
            We implement commercially reasonable measures to protect your information. However, no
            method of electronic storage or transmission is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the
            privacy practices or content of those sites.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Remarketing</h2>
          <p>
            We may use Google Ads and similar remarketing services. You can adjust your Google Ad
            Preferences at any time to opt out.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Disclosure of Information</h2>
          <p>
            We disclose information only to employees, contractors, or affiliates who need it to
            process requests or provide services, unless disclosure is required by law.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Revised versions will be posted on this
            page with an updated effective date. Please review regularly.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Contact</h2>
          <p>
            Questions about this Privacy Policy? Email us at
            <a href="mailto:contact@altivumservices.com" class="text-primary underline">contact@altivumservices.com</a>.
          </p>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-surface-tertiary">
        <a href="/" class="font-label-caps text-label-caps text-primary uppercase tracking-widest hover:text-accent-champagne transition-colors">
          ← Back to Home
        </a>
      </div>
    </div>
  </section>
</main>

<Footer />
<ContactWidget />
<ScrollToTop />
