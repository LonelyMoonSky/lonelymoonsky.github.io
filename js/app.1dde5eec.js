(function(t){function s(s){for(var i,r,u=s[0],o=s[1],c=s[2],h=0,m=[];h<u.length;h++)r=u[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(s);while(m.length)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,u=1;u<e.length;u++){var o=e[u];0!==a[o]&&(i=!1)}i&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var i={},a={app:0},n=[];function r(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)r.d(e,i,function(s){return t[s]}.bind(null,i));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=s,u=u.slice();for(var c=0;c<u.length;c++)s(u[c]);var l=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"000f":function(t,s,e){"use strict";var i=e("6396"),a=e.n(i);a.a},"034f":function(t,s,e){"use strict";var i=e("85ec"),a=e.n(i);a.a},"0c1e":function(t,s,e){"use strict";var i=e("6085"),a=e.n(i);a.a},"45cb":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("a026"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("home")],1)},n=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{staticClass:"top"},[e("addition",{staticClass:"add"}),e("subtraction",{staticClass:"sub"}),e("multiplication",{staticClass:"mul"}),e("division",{staticClass:"div"})],1),e("div",{staticClass:"bottom"},[e("change")],1)])},u=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"addition"},[e("div",{staticClass:"text"},[t._v("加")]),e("formula",{attrs:{firstNum:t.firstNum,message:t.message}})],1)},c=[],l=e("5530"),h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"formula"},t._l(t.message,(function(t,s){return e("formula-item",{key:s,attrs:{message:t}})})),1)},m=[],f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"item"},[e("div",{staticClass:"left"},[e("span",[t._v(t._s(t.message.firstNum))]),e("span",[t._v(t._s(t.message.symbol))]),e("span",[t._v(t._s(t.message.lastNum))]),e("span",[t._v("=")])]),e("div",{staticClass:"right"},[e("span",{on:{click:function(s){return t.resClick(t.message)}}},[t._v(t._s(t.result))])])])},d=[],g=e("2f62"),p={name:"",props:{message:{type:Object,default:function(){return{}}}},computed:Object(l["a"])({},Object(g["b"])(["getterDigit"])),watch:{getterDigit:function(t){this.change()}},data:function(){return{result:"查看答案"}},created:function(){},methods:{resClick:function(t){this.result=t.result},change:function(){this.result="查看答案"}}},v=p,b=(e("c553"),e("2877")),N=Object(b["a"])(v,f,d,!1,null,"37653a65",null),_=N.exports,w={name:"",components:{FormulaItem:_},props:{message:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){},computed:{},watch:{},methods:{}},y=w,O=Object(b["a"])(y,h,m,!1,null,"4a52b1c0",null),j=O.exports,C={name:"",components:{Formula:j},data:function(){return{firstNum:[],lastNum:[],symbol:"+",result:[],message:[]}},computed:Object(l["a"])({},Object(g["b"])(["getterDigit"])),watch:{getterDigit:function(t){this.change()}},created:function(){this.change()},methods:{change:function(){this.firstNum=[],this.lastNum=[],this.result=[];for(var t=0;t<10;t++)this.firstNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.lastNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.result[t]=this.firstNum[t]+this.lastNum[t];this.message=[];for(var s=0;s<10;s++){var e={};e.id=s,e.firstNum=this.firstNum[s],e.lastNum=this.lastNum[s],e.result=this.result[s],e.symbol=this.symbol,this.message.push(e)}}}},S=C,M=(e("6370"),Object(b["a"])(S,o,c,!1,null,"b7aa5b0a",null)),x=M.exports,$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subtraction"},[e("div",{staticClass:"text"},[t._v("减")]),e("formula",{attrs:{firstNum:t.firstNum,message:t.message}})],1)},k=[],D={name:"",components:{Formula:j},data:function(){return{firstNum:[],lastNum:[],symbol:"-",result:[],message:[]}},created:function(){this.change()},computed:Object(l["a"])({},Object(g["b"])(["getterDigit"])),watch:{getterDigit:function(t){this.change()}},methods:{change:function(){this.firstNum=[],this.lastNum=[],this.result=[];for(var t=0;t<10;t++){var s=0,e=0;s=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.lastNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,e=s+this.lastNum[t],this.firstNum[t]=e,this.result[t]=s}this.message=[];for(var i=0;i<10;i++){var a={};a.id=i,a.firstNum=this.firstNum[i],a.lastNum=this.lastNum[i],a.result=this.result[i],a.symbol=this.symbol,this.message.push(a)}}}},E=D,P=(e("cbd2"),Object(b["a"])(E,$,k,!1,null,"1dc4b4b9",null)),F=P.exports,A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"addition"},[e("div",{staticClass:"text"},[t._v("乘")]),e("formula",{attrs:{firstNum:t.firstNum,message:t.message}})],1)},T=[],J={name:"",components:{Formula:j},data:function(){return{firstNum:[],lastNum:[],symbol:"×",result:[],message:[]}},computed:Object(l["a"])({},Object(g["b"])(["getterDigit"])),watch:{getterDigit:function(t){this.change()}},created:function(){this.change()},methods:{change:function(){this.firstNum=[],this.lastNum=[],this.result=[];for(var t=0;t<10;t++)this.firstNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.lastNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.result[t]=this.firstNum[t]*this.lastNum[t];this.message=[];for(var s=0;s<10;s++){var e={};e.id=s,e.firstNum=this.firstNum[s],e.lastNum=this.lastNum[s],e.result=this.result[s],e.symbol=this.symbol,this.message.push(e)}}}},H=J,I=(e("e241"),Object(b["a"])(H,A,T,!1,null,"0492816e",null)),q=I.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subtraction"},[e("div",{staticClass:"text"},[t._v("除")]),e("formula",{attrs:{firstNum:t.firstNum,message:t.message}})],1)},B=[],G={name:"",components:{Formula:j},data:function(){return{firstNum:[],lastNum:[],symbol:"÷",result:[],message:[]}},created:function(){this.change()},computed:Object(l["a"])({},Object(g["b"])(["getterDigit"])),watch:{getterDigit:function(t){this.change()}},methods:{change:function(){this.firstNum=[],this.lastNum=[],this.result=[];for(var t=0;t<10;t++){var s=0,e=0;s=Math.floor(Math.random()*(this.$store.state.digit-1))+1,this.lastNum[t]=Math.floor(Math.random()*(this.$store.state.digit-1))+1,e=s*this.lastNum[t],this.firstNum[t]=e,this.result[t]=s}this.message=[];for(var i=0;i<10;i++){var a={};a.id=i,a.firstNum=this.firstNum[i],a.lastNum=this.lastNum[i],a.result=this.result[i],a.symbol=this.symbol,this.message.push(a)}}}},K=G,L=(e("bd62"),Object(b["a"])(K,z,B,!1,null,"cfd687e4",null)),Q=L.exports,R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"change"},[e("div",{class:{one:t.isShow1},on:{click:function(s){return t.click(10)}}},[t._v(" 一位数的加减乘除 ")]),e("div",{class:{one:t.isShow2},on:{click:function(s){return t.click(100)}}},[t._v(" 两位数的加减乘除 ")]),e("div",{class:{one:t.isShow3},on:{click:function(s){return t.click(1e3)}}},[t._v(" 三位数的加减乘除 ")])])},U=[],V={name:"",data:function(){return{isShow1:!1,isShow2:!0,isShow3:!1}},methods:{click:function(t){this.$store.dispatch("change",t),10===t?(this.isShow1=!0,this.isShow2=!1,this.isShow3=!1):100===t?(this.isShow1=!1,this.isShow2=!0,this.isShow3=!1):(this.isShow1=!1,this.isShow2=!1,this.isShow3=!0)}}},W=V,X=(e("0c1e"),Object(b["a"])(W,R,U,!1,null,"c6b89e6c",null)),Y=X.exports,Z={name:"",components:{Addition:x,Subtraction:F,Multiplication:q,Division:Q,Change:Y},data:function(){return{}},computed:{},watch:{},methods:{}},tt=Z,st=(e("000f"),Object(b["a"])(tt,r,u,!1,null,"64d21af2",null)),et=st.exports,it={name:"App",components:{Home:et}},at=it,nt=(e("034f"),Object(b["a"])(at,a,n,!1,null,null,null)),rt=nt.exports,ut=e("8c4f");i["a"].use(ut["a"]);var ot=[],ct=new ut["a"]({base:"",routes:ot}),lt=ct;i["a"].use(g["a"]);var ht=new g["a"].Store({state:{digit:100},mutations:{change:function(t,s){t.digit=s}},actions:{change:function(t,s){t.commit("change",s)}},modules:{},getters:{getterDigit:function(t){return t.digit}}}),mt=ht;i["a"].config.productionTip=!1,new i["a"]({router:lt,store:mt,render:function(t){return t(rt)}}).$mount("#app")},6085:function(t,s,e){},6370:function(t,s,e){"use strict";var i=e("45cb"),a=e.n(i);a.a},6396:function(t,s,e){},8252:function(t,s,e){},"85ec":function(t,s,e){},"9de9":function(t,s,e){},bd62:function(t,s,e){"use strict";var i=e("9de9"),a=e.n(i);a.a},c553:function(t,s,e){"use strict";var i=e("da1f"),a=e.n(i);a.a},cb5d:function(t,s,e){},cbd2:function(t,s,e){"use strict";var i=e("8252"),a=e.n(i);a.a},da1f:function(t,s,e){},e241:function(t,s,e){"use strict";var i=e("cb5d"),a=e.n(i);a.a}});
//# sourceMappingURL=app.1dde5eec.js.map