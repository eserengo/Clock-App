<template v-cloak>
  <section>
    <p>{{ setTime }}</p>
    <Location />
  </section>
  <section v-show="show">
    <ul>
      <li>
        <p>CURRENT TIMEZONE</p>
        <p>{{ setTimezone }}</p>
      </li>
      <li>
        <p>DAY OF WEEK</p>
        <p>{{ setDayOfWeek }}</p>
      </li>
      <li>
        <p>DAY OF YEAR</p>
        <p>{{ setDayOfYear }}</p>
      </li>
      <li>
        <p>WEEK NUMBER</p>
        <p>{{ setWeekNumber }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import Location from './Location.vue';

export default {
  name: "Time",
  props: ["modelValue", "show"],
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
        throw new Error(error);
      };
    },
  },
  computed: {
    setTime() {
      return this.timeData.datetime && this.timeData.datetime.toString().substring(11, 16);
    },
    setValue() {
      return this.$emit(
        "update:modelValue",
        this.setTime
        && this.setTime.substring(0, 2) > 6
        && this.setTime.substring(0, 2) < 18
      );
    },
    setTimezone() {
      return this.timeData.timezone && this.timeData.timezone.toString();
    },
    setDayOfWeek() {
      return this.timeData.day_of_week && this.timeData.day_of_week.toString();
    },
    setDayOfYear() {
      return this.timeData.day_of_year && this.timeData.day_of_year.toString();
    },
    setWeekNumber() {
      return this.timeData.week_number && this.timeData.week_number.toString()
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    setInterval(this.getData(), 60000);
  },
  updated() {
    this.setValue;
  },
};
</script>
