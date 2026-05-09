<script>
  const trustPoints = [
    {
      icon: 'verified_user',
      title: 'Licensed & Insured',
      description: 'Comprehensive coverage to protect your property and our professionals.'
    },
    {
      icon: 'lock',
      title: 'Discretion & Privacy',
      description: 'Strict non-disclosure protocols to ensure your private life stays private.'
    },
    {
      icon: 'shield_person',
      title: 'Background Checked',
      description: 'Every team member undergoes rigorous vetting and security screening.'
    }
  ];
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-surface-secondary">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
          Peace of Mind
        </span>
        <h2 class="font-headline-md text-headline-md mb-12">Confidence Built Into Every Visit</h2>
        <div class="space-y-8">
          {#each trustPoints as point}
            <div class="flex gap-6 items-start">
              <span
                class="material-symbols-outlined text-accent-silver"
                style="font-variation-settings: 'FILL' 1;"
              >
                {point.icon}
              </span>
              <div>
                <h5 class="font-label-caps text-label-caps uppercase mb-2">{point.title}</h5>
                <p class="text-on-surface-variant text-sm">{point.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
