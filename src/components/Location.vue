<template v-cloak>
  <p class="uppercase">in {{ setCity }}, {{ setCountry }}</p>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
      locationData: [],
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("http://ip-api.com/json/?fields=country,countryCode,city");
        const json = await res.json();
        this.locationData = json;
      } catch (error) {
        this.locationData.push(error);
      };
    },
  },
  computed: {
    setCity() {
      return this.locationData.city
        ? this.locationData.city
        : this.locationData;
    },
    setCountry() {
      return this.locationData.country && this.locationData.country;
    },
  },
  created() {
    this.getData();
  },
};
</script>