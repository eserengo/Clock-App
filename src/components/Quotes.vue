<template v-cloak>
  <section v-show="!show" class="relative">
    <p class="pe-12 pb-4">{{ setContent }}</p>
    <p class="font-bold" v-show="!this.quotesData.error">{{ setAuthor }}</p>
    <img
      src="../assets/images/icon-refresh.svg"
      alt="refresh icon"
      class="absolute top-1 right-0 cursor-pointer"
      @click="getData" />
  </section>
</template>

<script>
export default {
  name: "Quotes",
  props: {
    show: { Boolean } 
  },
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
        this.quotesData.push(error);
      };
    },
  },
  computed: {
    setContent() {
      return this.quotesData.content
        ? this.quotesData.content
        : this.quotesData.statusMessage;
    },
    setAuthor() {
      return this.quotesData.author && this.quotesData.author;
    },
  },
  created() {
    this.getData();
  },
};
</script>