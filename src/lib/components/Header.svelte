<script>
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#quote', label: 'Private Quote' },
    { href: '#contact', label: 'Contact' }
  ];

  let mobileOpen = false;

  function toggle() {
    mobileOpen = !mobileOpen;
  }

  function close() {
    mobileOpen = false;
  }
</script>

<header class="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-surface-tertiary">
  <div class="max-w-page mx-auto px-grid-margin flex justify-between items-center h-32">
    <a
      href="#top"
      on:click={close}
      class="flex items-center transition-opacity duration-300 hover:opacity-80"
      aria-label="ALTIVUM home"
    >
      <img src="/altivum.svg" alt="ALTIVUM" class="h-8 w-auto" />
    </a>
    <nav class="hidden md:flex gap-10 items-center">
      {#each navLinks as link}
        <a
          class="font-label-caps text-label-caps text-on-surface-variant hover:text-accent-champagne transition-all duration-500 ease-in-out"
          href={link.href}
        >
          {link.label}
        </a>
      {/each}
      <a
        class="ml-4 bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps hover:bg-accent-champagne transition-all duration-300"
        href="#quote"
      >
        Request Quote
      </a>
    </nav>
    <button
      type="button"
      class="md:hidden text-primary"
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={mobileOpen}
      aria-controls="mobile-nav"
      on:click={toggle}
    >
      <span class="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
    </button>
  </div>

  <nav
    id="mobile-nav"
    class="md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out border-t border-surface-tertiary {mobileOpen ? 'max-h-96' : 'max-h-0 border-t-transparent'}"
  >
    <div class="flex flex-col px-grid-margin py-6 gap-2 bg-background/95 backdrop-blur-md">
      {#each navLinks as link}
        <a
          class="font-label-caps text-label-caps text-on-surface-variant hover:text-accent-champagne transition-colors py-3 uppercase"
          href={link.href}
          on:click={close}
        >
          {link.label}
        </a>
      {/each}
      <a
        class="mt-4 bg-primary text-on-primary text-center py-4 font-label-caps text-label-caps hover:bg-accent-champagne transition-all duration-300"
        href="#quote"
        on:click={close}
      >
        Request Quote
      </a>
    </div>
  </nav>
</header>
