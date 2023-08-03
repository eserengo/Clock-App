<template v-cloak>
  <p>IN {{ setCity }}, {{ setCountry }}</p>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
      fetchedData: [],
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("http://ip-api.com/json/?fields=country,countryCode,city");
        const json = await res.json();
        this.fetchedData = json;
      } catch (error) {
        throw new Error(error);
      };
    },
  },
  computed: {
    setCity() {
      return this.fetchedData.city && this.fetchedData.city.toString().toUpperCase();
    },
    setCountry() {
      return this.fetchedData.country && this.fetchedData.country.toString().toUpperCase();
    },
  },
  created() {
    this.getData();
  },
};
</script>