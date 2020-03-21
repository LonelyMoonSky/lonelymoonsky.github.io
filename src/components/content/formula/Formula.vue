<template>
  <div class="formula">
    <formula-item v-for="(item, index) in message" :key="index" :message="item"/>
  </div>
</template>

<script>
import FormulaItem from "./FormulaItem"

export default {
  name: '',
  components:{
    FormulaItem
  },
  props: {
    message: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  created() {
    
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
