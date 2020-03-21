<template>
  <div class="home">
    <div class="top">
      <addition class="add"/>
    <subtraction class="sub"/>
    <multiplication class="mul"/>
    <division class="div"/>
    </div>
    <div class="bottom">
      <change/>
    </div>
  </div>
</template>

<script>
import Addition from "./childComps/Addition"
import Subtraction from "./childComps/Subtraction"
import Multiplication from "./childComps/Multiplication"
import Division from "./childComps/Division"
import Change from "./childComps/Change"

export default {
  name: '',
  components: {
    Addition,
    Subtraction,
    Multiplication,
    Division,
    Change
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 20px;
  }

  .add, .sub, .mul, .div {
    flex: 1;
  }
</style>
