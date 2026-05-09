<script>
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    const onScroll = () => {
      visible = window.scrollY > 400;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<button
  type="button"
  on:click={scrollToTop}
  aria-label="Scroll to top"
  class="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center
         bg-primary text-on-primary border border-white/10 shadow-lg
         hover:bg-accent-champagne transition-all duration-500
         {visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}"
>
  <span class="material-symbols-outlined">arrow_upward</span>
</button>
