(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengxinxi/detail"],{"3ec0":function(e,t,n){},"67e0":function(e,t,n){"use strict";n.r(t);var a=n("7cc5"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},"7cc5":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,s,i){try{var u=e[s](i),c=u.value}catch(o){return void n(o)}u.done?t(c):Promise.resolve(c).then(a,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function u(e){s(i,a,r,u,c,"next",e)}function c(e){s(i,a,r,u,c,"throw",e)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var e=this.count;return null!=e&&""!=e&&(e=e>60&&e<3600?parseInt(e/60)+"分钟"+parseInt(60*(parseFloat(e/60)-parseInt(e/60)))+"秒":e>=3600&&e<86400?parseInt(e/3600)+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":e>=86400?parseInt(e/3600/24)+"天"+parseInt(24*(parseFloat(e/3600/24)-parseInt(e/3600/24)))+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":parseInt(e)+"秒"),e}},onLoad:function(e){var t=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.id=e.id,e.userid&&(t.userid=e.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(t){var n=this;return i(a.default.mark((function t(){var r,s,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.init(),r=e.getStorageSync("nowTable"),t.next=4,n.$api.session(r);case 4:s=t.sent,n.user=s.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getStoreup(),i=e.getStorageSync("discusskechengxinxiCleanType"),i&&(e.removeStorageSync("discusskechengxinxiCleanType"),n.mescroll.num=1,n.upCallback(n.mescroll));case 10:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{onPayTap:function(){e.setStorageSync("paytable","kechengxinxi"),e.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var e=this;return i(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:1,limit:1,refid:e.id,tablename:"kechengxinxi",userid:e.user.id,type:1},t.next=3,e.$api.list("storeup",n);case 3:r=t.sent,e.storeupFlag=r.data.list.length;case 5:case"end":return t.stop()}}),t)})))()},shoucang:function(){var t=this;return i(a.default.mark((function n(){var r,s,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,s={page:1,limit:1,refid:r.detail.id,tablename:"kechengxinxi",userid:r.user.id,type:1},n.next=4,r.$api.list("storeup",s);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return c=u.data.list[0].id,e.showModal({title:"提示",content:"是否取消",success:function(){var e=i(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.del("storeup",JSON.stringify([c]));case 3:r.$utils.msg("取消成功"),r.getStoreup();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否收藏",success:function(){var e=i(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.kechengmingcheng,picture:r.swiperList[0],refid:r.detail.id,tablename:"kechengxinxi"});case 3:r.$utils.msg("收藏成功"),r.getStoreup();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(t,n,a,r,s){if("是"!=n||"是"==this.detail.sfsh){if(e.setStorageSync("crossTable","kechengxinxi"),e.setStorageSync("crossObj",this.detail),e.setStorageSync("statusColumnName",a),e.setStorageSync("statusColumnValue",s),e.setStorageSync("tips",r),""!=a&&!a.startsWith("[")){var i=e.getStorageSync("crossObj");for(var u in i)if(u==a&&i[u]==s)return void this.$utils.msg(r)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var e=this;return i(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.info("kechengxinxi",e.id);case 2:n=t.sent,e.detail=n.data,e.swiperList=e.detail.kechengfengmian?e.detail.kechengfengmian.split(","):[],e.detail.kechengneirong=e.detail.kechengneirong.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t)})))()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return i(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("discusskechengxinxi",{page:e.num,limit:10,refid:t.id});case 2:r=n.sent,1==e.num&&(t.commentList=[]),t.commentList=t.commentList.concat(r.data.list),0==r.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var n=this;t=n.$base.url+t,e.downloadFile({url:t,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var e=this;return i(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$utils.jump("../discusskechengxinxi/add-or-update?refid=".concat(e.id));case 1:case"end":return t.stop()}}),t)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var e=this;return i(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.detail.sfsh){t.next=3;break}return e.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(e.detail.shhf){t.next=6;break}return e.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==e.detail.sfsh&&(e.detail.sfsh="是"),"不通过"==e.detail.sfsh&&(e.detail.sfsh="否"),t.next=10,e.$api.update("kechengxinxi",e.detail);case 10:e.$utils.msg("审核成功"),e.$refs.popup.close();case 12:case"end":return t.stop()}}),t)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(e){console.log(this.detail),this.sfshIndex=e.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};t.default=u}).call(this,n("543d")["default"])},c517:function(e,t,n){"use strict";(function(e){n("b20b");a(n("66fd"));var t=a(n("f6d1"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},dd0b:function(e,t,n){"use strict";var a=n("3ec0"),r=n.n(a);r.a},f21a:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"4830"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"cfce"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.isAuth("kechengxinxi","购买")),a=e.isAuthFront("kechengxinxi","购买"),r=e.isAuth("kechengxinxi","审核"),s=e.isAuthFront("kechengxinxi","审核");e.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:r,m3:s}})},s=[]},f6d1:function(e,t,n){"use strict";n.r(t);var a=n("f21a"),r=n("67e0");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("dd0b");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=c.exports}},[["c517","common/runtime","common/vendor"]]]);