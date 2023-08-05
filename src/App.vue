<template v-cloak>
  <main
    :class="[ greeting ? 'daytime' : 'nighttime' ]"
    class="text-light">
    <Quotes :show="details" />
    <section>
      <span v-if="greeting">
        <img src="./assets/images/icon-sun.svg" alt="sun icon" />
        GOOD DAY, IT"S CURRENTLY
      </span>
      <span v-else>
        <img src="./assets/images/icon-moon.svg" alt="moon icon" />
        GOOD NIGHT, IT"S CURRENTLY
      </span>
    </section>
    <Time v-model="greeting" :show="details" />
    <span>
      <button type="button" class="btn" v-if="details" @click="toggle" >
        LESS
        <img src="./assets/images/chevron-up-icon.svg" alt="chevron up icon" />
      </button>
      <button type="button" class="btn" v-else @click="toggle" >
        MORE
        <img src="./assets/images/chevron-down-icon.svg" alt="chevron down icon" />
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
