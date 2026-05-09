<script>
  const services = [
    {
      title: 'Residential Luxury',
      description:
        'Premium home cleaning designed for clients who value detail, consistency, and presentation.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCgT-GURw2Hvdck8oo8L1neknk8Psf1sBnPpaBL1hnUX2hbFxXKgbNKTzoofOht_YYlhdsro0Nfrr4_MNjoXreoOCFeGD06YjNKRxEVl4ZGo9C8F7WcBIlWz9wb1sHW3SM6Ck9zkKM57nsLxFgSKbu3h1WDba3jNV_jOXX0bR6O02Rk4X4jizvH63IX8v-9pQbaMK59y054LN-MgmFdAkW35-fHQG92ygioHzoyx8N5THT9i2txUIhpyoI1EjYNh26yHbkyf-lntlQ'
    },
    {
      title: 'Deep Cleaning',
      description:
        'A complete reset for spaces that require a higher level of attention and precision.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCx4X5d6ha9U2-M7zV9MjOcpizAbGq54mPE5LIKS3szaIX5ggggMzPzqtaNRz9MuwT810dygJUmBD8HmRDZdBBiUIZ0DjEd7clqG1w9fy2MG0PqUg78eM2Zpxlw3OcCGcINpp-3X8h_AzRfFog35T9i3IkpAfaodrV0Q0DmpOwOEhFS0EOOo_i4vzT5YCA9iJTqtlo5d3KiRrTn5C-tdKGJ3qjWOlQSvQ_IeXd2cKlEdEv4CZ1ceEYJbKDMCMJinv_Zo1GbfV_2VCM'
    },
    {
      title: 'Airbnb Turnover',
      description:
        'Guest-ready cleaning with hotel-level presentation and consistent turnaround standards.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Qc555Hztwequ0Y2J8WBl3nEZ1YrEyN6JZLU4dRGm7zmXUuQQtM05qj9dOoFMx-jSvYpyiHqhE3Og7QlxFdS_XF9ftOqeM6ZaM1U1mkRRKfHpzQgosNKXoTStBEq_quPqnPGKPEvRNX4SDr3WusAQzP6bVYd5TbcGlWuBA4xYwIuu_HgWDBeZpwg8ExR-sU61T33zA5_qGPv0kfjiPVJSf0i_1AoLeOp4F0k-leoVVWXuorc3Q70JVdpKOhQB8smALLSfyJVTxm4'
    },
    {
      title: 'Move-In / Out',
      description: 'Detailed cleaning for transitions, relocations, and property preparation.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBBy8H7tmnI24Uh55_ax0itUyJYzTomFjALvvGvT8h3pNJ_kWU0kKE58PvPNMAMCEws9V7smZmHodGs-uOrNdJCyFtHGCXl7cFHB7hk94te-6s6zmJRcaio_VhbLF8Iw_V9XZsfDRSR0GWRN-pzqE5bx8Lxlaa--4uzhxDn-o0I6_JkgYolp91DKFZsUyFEGDzvqSE91PRi_SkAZYFYGSgwBB3M63NTrGm05REE9ZLdFR3XpCPf3cYZD4np43E9hca19cWvONblSO4'
    },
    {
      title: 'Executive Office',
      description: 'Premium cleaning solutions for offices and professional environments.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA0hg1n42XS1fxiUGdEfcApIkUTRCArCYwCLYKV2NBcq4qtAHRJzDUNy7rk9KMPRtf7eOppM3kSDrkLRHAdZYNeKDUOms8Cop1NuSL1E26PaNGT-Qa5wox_DyYKieZS7zitzGk8aDMYjHtUsuVHG1cyJzB9_-2plBVYcev4WYYgePhqIgwg_yGUKy0Ohc8GpUE2AeP8014Pl8QH7pCMBZ_oZH1fECyLDZCeZZ5mo4-3cmauDfjFSRrswcwG9zOTx9Jw3bobgXx_j-U'
    },
    {
      title: 'Post-Construction',
      description: 'Detailed final cleaning designed to prepare spaces for presentation and use.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDxhG7JGvXprjwiv3sxas3BeUK_m42myU-gqB7mnD3p4DwgvZfXO2iqZyom-o_y-F8vFMhIdyZg41xnaTAUG2mU-lpPK45bdyngnScEhnwH-gbg6H-_aOz4YZYj72t9LlpyoRoL680urVxXZo1VP7yWI3BUTB9i4B2lCAqahiclIcFX_whV13BpM1HUUaGYihMXAoXRk2P29nHkenVHYE2HuvUam4vHHrBXbc1FSfxTTaPnP-hBgOoXlfdPfDWIrIacvfoB576Im_E'
    }
  ];
</script>

<section class="py-section-gap-mobile md:py-section-gap-desktop bg-surface-secondary" id="services">
  <div class="max-w-page mx-auto px-grid-margin">
    <div class="mb-20">
      <span class="font-label-caps text-label-caps text-primary tracking-widest mb-6 block uppercase">
        Our Portfolio
      </span>
      <h2 class="font-headline-md text-headline-md">Curated Premium Services</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
      {#each services as service}
        <div class="matte-card group overflow-hidden">
          <div class="h-64 overflow-hidden">
            <img
              alt={service.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={service.image}
            />
          </div>
          <div class="p-10">
            <h3 class="font-headline-md text-2xl mb-4">{service.title}</h3>
            <p class="text-on-surface-variant font-body-md mb-6">{service.description}</p>
            <a
              class="font-label-caps text-label-caps text-primary hover:text-accent-champagne transition-colors flex items-center gap-2"
              href="#quote"
            >
              Explore Service <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
