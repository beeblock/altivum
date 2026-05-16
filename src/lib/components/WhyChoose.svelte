<script>
  const differentiators = [
    {
      icon: 'dry_cleaning',
      title: 'The Altivum standard',
      description: 'Exceptional handling of your most precious belongings and delicate surfaces.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Precision Detail',
      description: 'We find what others miss, ensuring every corner and crevice is flawless.'
    },
    {
      icon: 'schedule',
      title: 'Punctuality',
      description: 'Your time is your most valuable asset. We arrive exactly as promised.'
    },
    {
      icon: 'loyalty',
      title: 'Signature Fragrance',
      description: 'A bespoke scent profile that defines your space after every visit.'
    }
  ];
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-background">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div class="max-w-xl">
        <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
          The Distinction
        </span>
        <h2 class="font-headline-md text-headline-md">Why Clients Choose ALTIVUM</h2>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">
        An uncompromising approach to cleanliness that sets a new industry benchmark.
      </p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-surface-tertiary pt-12">
      {#each differentiators as item}
        <div class="space-y-4">
          <span class="text-accent-champagne material-symbols-outlined text-4xl">{item.icon}</span>
          <h4 class="font-label-caps text-label-caps uppercase tracking-wider">{item.title}</h4>
          <p class="text-on-surface-variant text-sm">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
