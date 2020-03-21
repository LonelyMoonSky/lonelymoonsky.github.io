<template>
  <div class="item">
    <div class="left">
      <span>{{message.firstNum}}</span>
    <span>{{message.symbol}}</span>
    <span>{{message.lastNum}}</span>
    <span>=</span>
    </div>
    <div class="right">
      <span @click="resClick(message)">{{result}}</span>
    </div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: '',
  props: {
    message: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['getterDigit'])
  },
  watch: {
    getterDigit(message) {
      this.change()
    }
  },
  data() {
    return {
      result: '查看答案',
    };
  },
  created() {
  },
  methods: {
    resClick(msg) {
      this.result = msg.result
    },
    change() {
      this.result = '查看答案'
    }
  },
};
</script>

<style scoped>
  .item {
    height: 60px;
    background-color: #eee;
    border-radius: 10px;
    margin: 10px;
    text-align: right;
    padding-right: 10%;
    line-height: 60px;
    font-size: 28px;
    display: flex;
    transition: all 0.4s;
  }

  .item:hover {
    background-color: silver;
  }

  .left {
    flex: 1;
  }
  
  .right {
    background-color: pink;
    border-radius: 8px;
    font-weight: 600;
    width: 150px;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s;
  }

  .right:hover {
    background-color: maroon;
    color: #fff;
  }

  span {
    margin: 0 2px;
  }
</style>
