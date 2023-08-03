<template v-cloak>
  <section v-show="!show">
    <p>{{ setContent }}</p>
    <p>{{ setAuthor }}</p>
    <img src="../assets/images/icon-refresh.svg" alt="refresh icon" class="icon" @click="getData" />
  </section>
</template>

<script>
export default {
  name: "Quotes",
  props: ["show"],
  data() {
    return {
      fetchedData: [],
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("https://api.quotable.io/random/");
        const json = await res.json();
        this.fetchedData = json;
      } catch (error) {
        throw new Error(error);
      };
    },
  },
  computed: {
    setContent() {
      return this.fetchedData.content && this.fetchedData.content.toString();
    },
    setAuthor() {
      return this.fetchedData.author && this.fetchedData.author.toString();
    },
  },
  created() {
    this.getData();
  },
};
</script>