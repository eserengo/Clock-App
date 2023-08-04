<template v-cloak>
  <p>IN {{ setCity }}, {{ setCountry }}</p>
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
        throw new Error(error);
      };
    },
  },
  computed: {
    setCity() {
      return this.locationData.city && this.locationData.city.toString().toUpperCase();
    },
    setCountry() {
      return this.locationData.country && this.locationData.country.toString().toUpperCase();
    },
  },
  created() {
    this.getData();
  },
};
</script>