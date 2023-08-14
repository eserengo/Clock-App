<template v-cloak>
  <main
    :class="[ greeting ? 'daytime' : 'nighttime' ]"
    class="relative text-light min-h-screen min-w-custom p-6 sm:py-12 sm:px-20 md:py-16 md:px-40">
    <Quotes :show="details" />
    <section class="mt-8 sm:mt-16 md:mt-24">
      <span v-if="greeting" class="uppercase">
        <img
          src="./assets/images/icon-sun.svg"
          alt="sun icon"
          class="inline"
        />
        good day, it's currently
      </span>
      <span v-else class="uppercase">
        <img
          src="./assets/images/icon-moon.svg"
          alt="moon icon"
          class="inline"
        />
        good night, it's currently
      </span>
    </section>
    <Time v-model="greeting" :show="details" />
    <span>
      <button
        type="button"
        class="text-medium text-xs inline bg-light rounded-3xl p-1 ps-4 mt-8"
        v-if="details"
        @click="toggle"
      >
        LESS
        <img
          src="./assets/images/chevron-up-icon.svg"
          alt="chevron up icon"
          class="inline w-6 bg-dark rounded-xl p-1.5 ms-3"
        />
      </button>
      <button
        type="button"
        class="text-medium text-xs inline bg-light rounded-3xl p-1 ps-4 mt-8"
        v-else
        @click="toggle"
      >
        MORE
        <img
          src="./assets/images/chevron-down-icon.svg"
          alt="chevron down icon"
          class="inline w-6 bg-dark rounded-xl p-1.5 ms-3"
        />
      </button>
    </span>
  </main>
</template>

<script>
import Time from "./components/Time.vue"
import Quotes from "./components/Quotes.vue";

export default {
  name: "App",
  data() {
    return {
      greeting: false,
      details: false,
    };
  },
  components: {
    Time,
    Quotes,
  },
  methods: {
    toggle() {
      this.details = !this.details;
    },
  },
}
</script>
