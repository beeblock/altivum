<script>
  let fullName = '';
  let phone = '';
  let email = '';
  let propertyType = 'Residential Estate';
  let squareFootage = '';
  let message = '';

  function handleSubmit() {
    console.log({ fullName, phone, email, propertyType, squareFootage, message });
  }
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-surface-tertiary" id="quote">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
          Engagement
        </span>
        <h2 class="font-headline-md text-headline-md mb-8">Your Space Deserves Better.</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Experience what premium cleaning should feel like. Fill out the form below to receive a
          bespoke quote tailored to your property.
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4 text-on-surface">
            <span class="material-symbols-outlined text-primary">location_on</span>
            <span class="font-body-md">Maryland | Washington DC | Virginia</span>
          </div>
          <div class="flex items-center gap-4 text-on-surface">
            <span class="material-symbols-outlined text-primary">mail</span>
            <span class="font-body-md">contact@altivumservices.com</span>
          </div>
        </div>
      </div>
      <form on:submit|preventDefault={handleSubmit} class="space-y-8 bg-background p-12 border border-white/5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="font-label-caps text-[10px] uppercase text-outline" for="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              bind:value={fullName}
              type="text"
              placeholder="E.G. ALEXANDER STERLING"
              class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface placeholder-on-surface-variant/30"
            />
          </div>
          <div class="space-y-2">
            <label class="font-label-caps text-[10px] uppercase text-outline" for="phone">
              Phone Number
            </label>
            <input
              id="phone"
              bind:value={phone}
              type="tel"
              placeholder="+1 (555) 000-0000"
              class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface placeholder-on-surface-variant/30"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label class="font-label-caps text-[10px] uppercase text-outline" for="email">
            Email Address
          </label>
          <input
            id="email"
            bind:value={email}
            type="email"
            placeholder="CLIENT@DOMAIN.COM"
            class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface placeholder-on-surface-variant/30"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="font-label-caps text-[10px] uppercase text-outline" for="propertyType">
              Property Type
            </label>
            <select
              id="propertyType"
              bind:value={propertyType}
              class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface appearance-none"
            >
              <option class="bg-surface-tertiary">Residential Estate</option>
              <option class="bg-surface-tertiary">Luxury Condo</option>
              <option class="bg-surface-tertiary">Airbnb / Short-Term</option>
              <option class="bg-surface-tertiary">Commercial Office</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="font-label-caps text-[10px] uppercase text-outline" for="sqft">
              Square Footage
            </label>
            <input
              id="sqft"
              bind:value={squareFootage}
              type="text"
              placeholder="E.G. 4,500 SQ FT"
              class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface placeholder-on-surface-variant/30"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label class="font-label-caps text-[10px] uppercase text-outline" for="message">
            Message / Special Requests
          </label>
          <textarea
            id="message"
            bind:value={message}
            rows="4"
            placeholder="TELL US ABOUT YOUR REQUIREMENTS..."
            class="w-full bg-transparent border-b border-surface-tertiary focus:border-primary focus:ring-0 transition-colors py-2 text-on-surface placeholder-on-surface-variant/30"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps uppercase hover:bg-accent-champagne transition-all duration-300 tracking-widest"
        >
          Request Your Private Quote
        </button>
      </form>
    </div>
  </div>
</section>
