<template>
  <div class="change">
    <div :class="{one: isShow1}" @click="click(10)">
      一位数的加减乘除
    </div>
    <div :class="{one: isShow2}" @click="click(100)">
      两位数的加减乘除
    </div>
    <div :class="{one: isShow3}" @click="click(1000)">
      三位数的加减乘除
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isShow1: false,
      isShow2: true,
      isShow3: false
    };
  },
  methods: {
    click(count){
      this.$store.dispatch('change',count)
      if(count === 10){
        this.isShow1 = true
        this.isShow2 = false
        this.isShow3 = false
      } else if (count === 100){
        this.isShow1 = false
        this.isShow2 = true
        this.isShow3 = false
      } else {
        this.isShow1 = false
        this.isShow2 = false
        this.isShow3 = true
      }
    }
  }
}

</script>

<style scoped>
  .change {
    display: flex;
    justify-content: space-around;
    text-align: center;
    height: 60px;
    line-height: 60px;
    margin-top: 20px;
  }

  .change div {
    flex: 1;
    margin: 0 50px;
    background-color: skyblue;
    border-radius: 10px;
    font-weight: 800;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;
  }

  .change div:hover {
    color: #000;
  }

  .change .one {
    color: green;
    background-color: #fff;
  }
</style>