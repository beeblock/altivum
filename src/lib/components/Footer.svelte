<script>
  const navigation = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'The Standard' },
    { href: '#quote', label: 'Private Quote' }
  ];
  const legal = [
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Client Portal' }
  ];
</script>

<footer
  class="bg-surface-secondary w-full py-section-gap-mobile md:py-24 border-t border-surface-tertiary"
  id="contact"
>
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
      <div class="max-w-xs">
        <a href="#top" class="block mb-8" aria-label="ALTIVUM home">
          <img src="/altivum.svg" alt="ALTIVUM" class="h-10 w-auto" />
        </a>
        <p class="text-on-surface-variant font-body-md leading-relaxed">
          Defining the new standard for luxury cleaning services through meticulous attention and
          unparalleled hospitality.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-16">
        <div>
          <h6 class="font-label-caps text-label-caps text-on-surface mb-8 uppercase">Navigation</h6>
          <ul class="space-y-4">
            {#each navigation as link}
              <li>
                <a
                  class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-500"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        <div>
          <h6 class="font-label-caps text-label-caps text-on-surface mb-8 uppercase">Legal</h6>
          <ul class="space-y-4">
            {#each legal as link}
              <li>
                <a
                  class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-500"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1">
          <h6 class="font-label-caps text-label-caps text-on-surface mb-8 uppercase">
            Service Areas
          </h6>
          <p class="text-on-surface-variant font-body-md">
            Maryland<br />Washington DC<br />Virginia
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-surface-tertiary/20"
    >
      <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
        © 2026 ALTIVUM CLEANING SERVICES LLC. ALL RIGHTS RESERVED.
      </p>
      <p class="font-label-caps text-label-caps text-primary italic uppercase tracking-[0.3em]">
        Luxury is in the details.
      </p>
    </div>
  </div>
</footer>
