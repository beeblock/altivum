<script>
  const testimonials = [
    {
      quote:
        'ALTIVUM is on another level. The attention to detail, professionalism, and presentation are unmatched.',
      author: '— Residential Client, DC',
      featured: true
    },
    {
      quote:
        'Our Airbnb turnovers have never been better. Guests always comment on how clean and fresh the space feels.',
      author: '— Portfolio Manager, Maryland',
      featured: false
    },
    {
      quote:
        'Finally, a cleaning company that treats our home with the respect and standards we expect.',
      author: '— Private Estate Owner, Virginia',
      featured: false
    }
  ];
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-background">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="text-center mb-20">
      <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
        The Feedback
      </span>
      <h2 class="font-headline-md text-headline-md">Trusted by Clients Who Expect Excellence</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as t}
        <div
          class="p-12 matte-card italic"
          class:border-l-4={t.featured}
          class:border-l-accent-champagne={t.featured}
        >
          <p class="font-body-lg text-lg mb-8 text-on-surface">"{t.quote}"</p>
          <span class="font-label-caps text-label-caps uppercase text-primary">{t.author}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
