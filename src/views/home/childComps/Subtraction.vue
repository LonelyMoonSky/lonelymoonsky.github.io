<template>
  <div class="subtraction">
    <div class="text">减</div>
    <formula :firstNum="firstNum" :message="message"/>
  </div>
</template>

<script>
import Formula from 'components/content/formula/Formula'
import {mapGetters} from 'vuex'

export default {
  name: '',
  components: {
    Formula
  },
  data() {
    return {
      firstNum: [],
      lastNum: [],
      symbol: '-',
      result: [],
      message: []
    };
  },
  created() {
      this.change()
  },
  computed: {
    ...mapGetters(['getterDigit'])
  },
  watch: {
    getterDigit(message) {
      this.change()
    }
  },
  methods: {
    change() {
      this.firstNum = []
      this.lastNum = []
      this.result = []
      for (let i = 0; i < 10; i++) {
        let num = 0
        let res = 0
        num = Math.floor(Math.random() * (this.$store.state.digit - 1)) + 1
        this.lastNum[i] = Math.floor(Math.random() * (this.$store.state.digit - 1)) + 1
        res = num + this.lastNum[i]
        this.firstNum[i] = res
        this.result[i] = num
      }

      this.message = []
      for( let i = 0; i < 10; i++) {
      const obj = {};
      obj.id = i;
      obj.firstNum = this.firstNum[i]
      obj.lastNum = this.lastNum[i]
      obj.result = this.result[i]
      obj.symbol = this.symbol
      this.message.push(obj)
    }
    }
  },
};
</script>

<style scoped>
  .text {
    height: 100px;
    line-height: 100px;
    font-weight: 800;
    font-size: 46px;
    color: red;
  }
</style>
