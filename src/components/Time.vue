<template v-cloak>
  <section>
    <p class="text-6xl font-bold my-4">
      {{ setTime }}
      <span class="text-sm font-normal" v-if="!this.timeData.error">BST</span>
    </p>
    <Location />
  </section>
  <aside
    v-if="!this.timeData.error"
    v-show="show"
    :class="[modelValue ? 'bg-medium text-dark' : 'bg-dark text-light']"
    class="opacity-90 absolute bottom-0 inset-x-0 px-4 py-8"
    >
    <ul class="sm:flex sm:flex-row sm:items-center sm:justify-around">
      <div>
        <li class="my-2">
          <p class="text-xs uppercase">current timezone</p>
          <p class="font-bold">{{ setTimezone }}</p>
        </li>
        <li class="my-2">
          <p class="text-xs uppercase">day of week</p>
          <p class="font-bold">{{ setDayOfWeek }}</p>
        </li>
      </div>
      <div>
        <li class="my-2">
          <p class="text-xs uppercase">day of year</p>
          <p class="font-bold">{{ setDayOfYear }}</p>
        </li>
        <li class="my-2">
          <p class="text-xs uppercase">week number</p>
          <p class="font-bold">{{ setWeekNumber }}</p>
        </li>
      </div>
    </ul>
  </aside>
</template>

<script>
import Location from './Location.vue';

export default {
  name: "Time",
  props: {
    modelValue: { Boolean },
    show: { Boolean } 
  },
  emits: ["update:modelValue"],
  components: {
    Location,
  },
  data() {
    return {
      timeData: [],
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("http://worldtimeapi.org/api/ip");
        const json = await res.json();
        this.timeData = json;
      } catch (error) {
        this.timeData.push(error);
      };
    },
  },
  computed: {
    setTime() {
      return this.timeData.datetime 
        ? this.timeData.datetime.substring(11, 16)
        : this.timeData.error;
    },
    setValue() {
      return !this.timeData.error
        && this.$emit(
          "update:modelValue",
          this.setTime
          && this.setTime.substring(0, 2) > 6
          && this.setTime.substring(0, 2) < 18
      );
    },
    setTimezone() {
      return this.timeData.timezone && this.timeData.timezone;
    },
    setDayOfWeek() {
      return this.timeData.day_of_week && this.timeData.day_of_week;
    },
    setDayOfYear() {
      return this.timeData.day_of_year && this.timeData.day_of_year;
    },
    setWeekNumber() {
      return this.timeData.week_number && this.timeData.week_number;
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    setInterval(() => {
      this.getData()
    }, 60000);
  },
  updated() {
    this.setValue;
  },
};
</script>
