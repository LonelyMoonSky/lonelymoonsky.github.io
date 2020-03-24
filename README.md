# math-project
[在线预览](https://www.math40.xyz/).
## 项目简介
这是一个可以在页面上随机生成40道数学算术题的小项目。  

这个项目的初衷来源于我舅舅的小孩。因为今年疫情的影响，小孩子们都没有开学。某一天，我看到我外公在给他们小孩子出数学题，因为他们读三年级了，所以我外公给他们出的题目是两位数的除法，有时候也有三位数的除法。  
但是这些题目都是我外公头一天晚上先算出来，然后第二天再让他们做。我外公已经年级大了，而且我也学了Vue.js，所以，我就想做个自动出题的网页，让我外公晚上能多休息休息，而且也正好可以锻炼一下自己的能力！
## 项目改进
这个项目的代码量我觉得太大了，还是有很多重复的代码，虽然我是按照组件化开发的思想来写代码的，但是我觉得应该还可以把代码更加简化！  
后续有时间，我会再更新这个项目，主要是优化代码！
## 项目收获
虽然这个项目看起来很简单，逻辑也不是很复杂，我从零开始写这个项目，用了一个上午的时间，虽然用的时间不长，但是还是碰到了一些困难。  

因为在这个项目中，我用到了**Vuex**的技术，在这个项目里，组件需要监听**Vuex**里面**State**的数据改变，只要数据一改变，组件就需要执行**methods**里面的定义好的函数，但是我还是第一次遇到这种情况，我在网上查找了很多资料，才把监听这个事情搞定。  
其实并不复杂，但是我开始写代码的时候，思维逻辑有时候会莫名奇妙的被困住，但是最终还是解决了这个问题！
## 项目展示
![image](https://github.com/LonelyMoonSky/math-project/blob/master/public/1.PNG)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
