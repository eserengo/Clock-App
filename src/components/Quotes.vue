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
      quotesData: [],
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("https://api.quotable.io/random/");
        const json = await res.json();
        this.quotesData = json;
      } catch (error) {
        throw new Error(error);
      };
    },
  },
  computed: {
    setContent() {
      return this.quotesData.content && this.quotesData.content.toString();
    },
    setAuthor() {
      return this.quotesData.author && this.quotesData.author.toString();
    },
  },
  created() {
    this.getData();
  },
};
</script>