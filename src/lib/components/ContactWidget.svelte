<script>
  import { onMount } from 'svelte';

  // TODO: replace with Altivum's actual phone + social URLs
  const phone = '(571) 239-0110';
  const phoneHref = 'tel:+15712390110';
  const facebookUrl = 'https://facebook.com/';
  const instagramUrl = 'https://www.instagram.com/altivumservices/';

  let open = false;
  let visible = false;

  onMount(() => {
    const onScroll = () => {
      visible = window.scrollY > 400;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const onKey = (e) => {
      if (e.key === 'Escape') open = false;
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  });
</script>

<div
  class="fixed bottom-8 right-28 z-50 transition-all duration-500
         {visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}"
>
  {#if open}
    <div
      class="absolute bottom-full right-0 mb-4 w-[320px] bg-background border border-white/10 shadow-2xl p-8"
      role="dialog"
      aria-label="Contact options"
    >
      <button
        type="button"
        on:click={() => (open = false)}
        aria-label="Close"
        class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>

      <h3 class="font-headline-sm text-2xl text-on-surface mb-2">Let's Get in Touch.</h3>
      <p class="font-body-md text-on-surface-variant mb-6">
        Questions or ready to book? Reach us instantly.
      </p>

      <div class="flex items-center gap-4 mb-6">
        <a
          href={phoneHref}
          aria-label="Call us"
          class="w-12 h-12 flex items-center justify-center border border-white/10 text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span class="material-symbols-outlined">call</span>
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="w-12 h-12 flex items-center justify-center border border-white/10 text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="w-12 h-12 flex items-center justify-center border border-white/10 text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04C2.81 8.5 2.8 8.85 2.8 12s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.43 3.43 0 0 0-.83-1.27 3.43 3.43 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.04a1.14 1.14 0 1 1 0 2.29 1.14 1.14 0 0 1 0-2.29z" />
          </svg>
        </a>
      </div>

      <a
        href={phoneHref}
        class="w-full bg-primary text-on-primary py-4 px-6 font-label-caps text-label-caps uppercase tracking-widest hover:bg-accent-champagne transition-colors flex items-center justify-center gap-3"
      >
        <span class="material-symbols-outlined text-[22px]">call</span>
        <span class="flex flex-col items-center leading-tight text-center">
          <span>Call Now</span>
          <span class="text-[13px] tracking-wider normal-case mt-0.5">{phone}</span>
        </span>
      </a>
    </div>
  {/if}

  <button
    type="button"
    on:click={() => (open = !open)}
    aria-label="Contact us"
    aria-expanded={open}
    class="inline-flex items-center gap-3 bg-primary text-on-primary px-6 h-14 font-label-caps text-label-caps uppercase tracking-widest border border-white/10 shadow-lg hover:bg-accent-champagne transition-colors"
  >
    <span class="material-symbols-outlined text-[20px]">chat</span>
    <span>Contact Us</span>
  </button>
</div>
