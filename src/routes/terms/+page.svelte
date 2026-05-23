<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
  import ContactWidget from '$lib/components/ContactWidget.svelte';
</script>

<svelte:head>
  <title>Terms &amp; Conditions — Altivum Cleaning Services</title>
  <meta name="description" content="Terms and Conditions for Altivum Cleaning Services." />
</svelte:head>

<div id="top"></div>
<Header />

<main class="bg-background">
  <section class="pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
    <div class="max-w-3xl mx-auto px-grid-margin">
      <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
        Legal
      </span>
      <h1 class="font-headline-md text-headline-md mb-6">Terms &amp; Conditions</h1>
      <p class="font-body-md text-on-surface-variant mb-16">Effective Date: May 16, 2026</p>

      <div class="space-y-12 text-on-surface-variant font-body-md leading-relaxed">
        <div>
          <p>
            To ensure a smooth experience with our services, we strongly recommend all customers
            read the customer guidance provided below. This document outlines important details
            about our processes, policies, and expectations, and helps you make the most of our
            offerings.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Privacy</h2>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. Text messaging originator opt-in data and consent will not be
            disclosed to any third parties. For full details, please review our
            <a href="/privacy" class="text-primary underline">Privacy Policy</a>.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">General Terms</h2>
          <ul class="space-y-3 list-disc list-inside">
            <li>All appointments are subject to availability and confirmation by Altivum Cleaning Services.</li>
            <li>Payment is due upon completion of service unless other arrangements have been made in writing.</li>
            <li>Clients must provide property access at the scheduled appointment time.</li>
            <li>Changes or cancellations require at least 24 hours advance notice.</li>
            <li>Re-scheduling within the cancellation window may incur a fee.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Service Scope</h2>
          <p>
            Service scope, deliverables, and pricing are defined per booking. Altivum reserves the
            right to decline or discontinue service when the property condition presents a safety
            risk to our staff, or falls outside the agreed scope of work.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Satisfaction</h2>
          <p>
            If any aspect of your service does not meet your expectations, notify us within 24
            hours of completion and we will return to address the affected areas at no additional
            cost.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Liability</h2>
          <p>
            Altivum carries general liability insurance. Claims for damage must be reported within
            48 hours of service. We are not liable for pre-existing damage, ordinary wear and tear,
            or items not secured prior to service.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Changes to These Terms</h2>
          <p>
            Altivum may update these Terms and Conditions from time to time. Updated versions will
            be posted on this page with a revised effective date.
          </p>
        </div>

        <div>
          <h2 class="font-headline-sm text-2xl text-on-surface mb-4">Contact</h2>
          <p>
            Questions about these terms? Email us at
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
