<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import History from '$lib/components/History.svelte';
  import WhyChoose from '$lib/components/WhyChoose.svelte';
  import Trust from '$lib/components/Trust.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import QuoteForm from '$lib/components/QuoteForm.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
  import ContactWidget from '$lib/components/ContactWidget.svelte';

  export let form;
</script>

<div id="top"></div>
<Header />
<main>
  <Hero />
  <About />
  <History />
  <Services />
  <WhyChoose />
  <Trust />
  <Testimonials />
  <QuoteForm {form} />
</main>
<Footer />
<ContactWidget />
<ScrollToTop />
