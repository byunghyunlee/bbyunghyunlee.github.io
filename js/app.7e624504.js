(function(e){function t(t){for(var c,i,a=t[0],l=t[1],s=t[2],b=0,f=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ce7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("cf05"),r=n.n(o),i={class:"header"},a=Object(c["f"])("ul",{class:"header-button-left"},[Object(c["f"])("li",null,"Cancel")],-1),l={class:"header-button-right"},s=Object(c["f"])("img",{src:r.a,class:"logo"},null,-1),u={class:"footer"},b={class:"footer-button-plus"},f=Object(c["f"])("label",{for:"file",class:"input-plus"},"+",-1);function p(e,t,n,o,r,p){var d=Object(c["n"])("Container");return Object(c["i"])(),Object(c["c"])("div",null,[Object(c["f"])("div",i,[a,Object(c["f"])("ul",l,[1==r.step?(Object(c["i"])(),Object(c["c"])("li",{key:0,onClick:t[1]||(t[1]=function(e){return r.step++})},"Next")):Object(c["d"])("",!0),2==r.step?(Object(c["i"])(),Object(c["c"])("li",{key:1,onClick:t[2]||(t[2]=function(){return p.publish&&p.publish.apply(p,arguments)})},"발행")):Object(c["d"])("",!0)]),s]),Object(c["f"])(d,{onWrite:t[3]||(t[3]=function(e){return r.작성한글=e}),"이미지":r.이미지,"게시물":r.게시물,step:r.step},null,8,["이미지","게시물","step"]),Object(c["f"])("button",{onClick:t[4]||(t[4]=function(){return p.more&&p.more.apply(p,arguments)})},"더보기"),Object(c["f"])("div",u,[Object(c["f"])("ul",b,[Object(c["f"])("input",{onChange:t[5]||(t[5]=function(){return p.upload&&p.upload.apply(p,arguments)}),type:"file",id:"file",class:"inputfile"},null,32),f])])])}var d=n("5530"),j=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{key:0}),O={key:1},m={class:"filters"},g={key:2},h={class:"write"},v={key:3};function y(e,t,n,o,r,i){var a=Object(c["n"])("Post"),l=Object(c["n"])("FilterBox"),s=Object(c["n"])("MyPage");return Object(c["i"])(),Object(c["c"])("div",null,[0==n.step?(Object(c["i"])(),Object(c["c"])("div",j,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(n.게시물,(function(e,t){return Object(c["i"])(),Object(c["c"])(a,{"게시물":n.게시물[t],key:t},null,8,["게시물"])})),128))])):Object(c["d"])("",!0),1==n.step?(Object(c["i"])(),Object(c["c"])("div",O,[Object(c["f"])("div",{class:[r.선택한필터,"upload-image"],style:"background-image:url(".concat(n.이미지,")")},null,6),Object(c["f"])("div",m,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(r.필터들,(function(e){return Object(c["i"])(),Object(c["c"])(l,{"필터":e,"이미지":n.이미지,key:e},{default:Object(c["q"])((function(){return[Object(c["f"])("span",null,Object(c["o"])(e),1)]})),_:1},8,["필터","이미지"])})),128))])])):Object(c["d"])("",!0),2==n.step?(Object(c["i"])(),Object(c["c"])("div",g,[Object(c["f"])("div",{class:[r.선택한필터,"upload-image"],style:"background-image:url(".concat(n.이미지,")")},null,6),Object(c["f"])("div",h,[Object(c["f"])("textarea",{onInput:t[1]||(t[1]=function(t){return e.$emit("write",t.target.value)}),class:"write-box"},"write!",32)])])):Object(c["d"])("",!0),3==n.step?(Object(c["i"])(),Object(c["c"])("div",v,[Object(c["f"])(s)])):Object(c["d"])("",!0)])}n("a9e3"),n("4de4");var k={class:"post"},w={class:"post-header"},x=Object(c["f"])("div",{class:"profile"},null,-1),M={class:"profile-name"},I={class:"post-content"},P=Object(c["f"])("p",{class:"date"},"May 15",-1);function C(e,t,n,o,r,i){return Object(c["i"])(),Object(c["c"])("div",k,[Object(c["f"])("div",w,[x,Object(c["f"])("span",M,Object(c["o"])(n.게시물.name),1)]),Object(c["f"])("div",{onClick:t[1]||(t[1]=function(t){return e.$store.commit("좋아요")}),class:[n.게시물.filter,"post-body"],style:{backgroundImage:" url(".concat(n.게시물.postImage,")")}},null,6),Object(c["f"])("div",I,[Object(c["f"])("p",null,Object(c["o"])(e.$store.state.likes)+" Likes",1),Object(c["f"])("p",null,[Object(c["f"])("strong",null,Object(c["o"])(n.게시물.name),1),Object(c["e"])(" "+Object(c["o"])(n.게시물.content),1)]),P])])}var S={props:{"게시물":Object}};n("a237");S.render=C;var _=S;function $(e,t,n,o,r,i){return Object(c["i"])(),Object(c["c"])("div",{onClick:t[1]||(t[1]=function(){return i.fire&&i.fire.apply(i,arguments)}),class:n.필터+" filter-item",style:"background-image:url(".concat(n.이미지,")")},[Object(c["m"])(e.$slots,"default")],6)}var A={name:"filterbox",methods:{fire:function(){this.emitter.emit("박스클릭함",this.필터)}},props:{"이미지":String,"필터":String}};n("778d");A.render=$;var J=A,L=(n("ac1f"),n("841c"),{style:{padding:"10px"}}),B=Object(c["f"])("h4",null,"팔로워",-1),D={class:"profile-name"};function F(e,t,n,o,r,i){return Object(c["i"])(),Object(c["c"])("div",L,[B,Object(c["f"])("input",{placeholder:"🔍",onInput:t[1]||(t[1]=function(t){return e.search(t.target.value)})},null,32),(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(o.follower,(function(e,t){return Object(c["i"])(),Object(c["c"])("div",{class:"post-header",key:t},[Object(c["f"])("div",{class:"profile",style:"background-image:url(".concat(e.image,")")},null,4),Object(c["f"])("span",D,Object(c["o"])(e.name),1)])})),128))])}var H=n("bc3a"),K=n.n(H),N={name:"mypage",setup:function(){var e=Object(c["k"])([]);return Object(c["h"])((function(){K.a.get("/follower.json").then((function(t){e.value=t.data}))})),K.a.get("/follower.json").then((function(t){e.value=t.data})),{follower:e}},data:function(){}};N.render=F;var R=N,T={data:function(){return{"필터들":["aden","_1977","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"],"선택한필터":""}},mounted:function(){var e=this;this.emiiter.on("박스클릭함",(function(t){e.선택한필터=t}))},components:{Post:_,FilterBox:J,MyPage:R},props:{"게시물":Array,step:Number,"이미지":String}};n("9242");T.render=y;var U=T,q=[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 😫",filter:"perpetua"},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}],W=n("5502");K.a.post();var z={name:"App",data:function(){return{step:0,"게시물":q,"이미지":"","작성한글":"","선택한필터":""}},mounted:function(){var e=this;this.emiiter.on("박스클릭함",(function(t){e.선택한필터=t}))},components:{Container:U},computed:Object(d["a"])({name:function(){return this.$store.state.name}},Object(W["c"])(["name","age","likes"])),methods:Object(d["a"])(Object(d["a"])({},Object(W["b"])(["steMore","좋아요"])),{},{publish:function(){var e={name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:this.이미지,likes:36,date:"May 15",liked:!1,content:this.작성한글,filter:this.선택한필터};this.게시물.unshift(e),this.step=0},more:function(){var e=this;K.a.get("https://codingapple1.github.io/vue/more0.json").then((function(t){e.게시물.push(t.data)}))},upload:function(e){var t=e.target.files,n=URL.createObjectURL(t[0]);console.log(n),this.이미지=n,this.step++}})};n("63da");z.render=p;var E=z,G=(n("7b17"),n("ab8b"),n("14b7")),Q=Object(W["a"])({state:function(){return{name:"kim",age:20,likes:30,"좋아요눌렀니":!1,more:{}}},mutations:{setMore:function(e,t){e.more=t},"좋아요":function(e){0==e.좋아요눌렀니?(e.likes++,e.좋아요눌렀니=!0):(e.likes--,e.좋아요눌렀니=!1)},"이름변경":function(e){e.name="park"}},actions:{getData:function(e){K.a.get("https://codingapple1.github.io/vue/more0.json").then((function(t){console.log(t.data),e.commit("setMore",t.data)}))}}}),V=Q,X=Object(G["a"])(),Y=Object(c["b"])(E);Y.config.globalProperties.emitter=X,Y.use(V).mount("#app")},"63da":function(e,t,n){"use strict";n("8c72")},"778d":function(e,t,n){"use strict";n("933b")},"8c72":function(e,t,n){},9242:function(e,t,n){"use strict";n("ae67")},"933b":function(e,t,n){},a237:function(e,t,n){"use strict";n("1ce7")},ae67:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.7e624504.js.map