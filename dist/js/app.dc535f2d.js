(function(t){function e(e){for(var o,a,s=e[0],u=e[1],i=e[2],A=0,p=[];A<s.length;A++)a=s[A],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0803":function(t,e,n){},"0e6f":function(t,e,n){},"1d59":function(t,e,n){},"2dd2":function(t,e,n){"use strict";n("5645")},"34aa":function(t,e,n){"use strict";n("ad84")},4107:function(t,e,n){"use strict";n("568f")},"4d93":function(t,e){t.exports="data:image/jpeg;base64,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"},5645:function(t,e,n){},"568f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,r,a){var s=Object(o["u"])("nav-bar"),u=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(s),Object(o["g"])(u)],64)}var r=n("4d93"),a=n.n(r),s=Object(o["g"])("h1",{class:"logo"},"OneSpace",-1),u=Object(o["g"])("input",{placeholder:"Search User",class:"nav-search",type:"text"},null,-1),i={class:"user-profile"},l={key:1,src:a.a,alt:""};function A(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("header",null,[Object(o["g"])("nav",null,[s,c.user?(Object(o["p"])(),Object(o["d"])(o["a"],{key:0},[u,Object(o["g"])("div",i,[Object(o["g"])("div",{class:"user-profile__img-container",onClick:e[1]||(e[1]=function(){return c.toggleProfileDropdown&&c.toggleProfileDropdown.apply(c,arguments)})},[c.user.image?(Object(o["p"])(),Object(o["d"])("img",{key:0,src:"http://localhost:5000/uploads/images/"+c.user.image,alt:""},null,8,["src"])):(Object(o["p"])(),Object(o["d"])("img",l))]),Object(o["g"])("div",{class:["dropdown",{active:c.activeDropdown}]},[Object(o["g"])("div",{onClick:e[2]||(e[2]=function(){return c.handleLogout&&c.handleLogout.apply(c,arguments)})},"logout")],2)])],64)):Object(o["e"])("",!0)])])}var p=n("a1e9"),g=n("5c40"),d=n("5502"),b=n("bc3a"),j=n.n(b),m=j.a.create({baseURL:"http://localhost:5000/api"});m.defaults.withCredentials=!0;var O=m,f={register:function(t){return O.post("user/register",t)},login:function(t){return O.post("user/login",t)},logout:function(){return O.get("user/logout")},isLoggedin:function(){return O.get("user/is-loggedin")},getAllUsers:function(){return O.get("user/all")}},v=n("6c02"),h={name:"NavBar",setup:function(){var t=Object(d["b"])(),e=Object(v["c"])(),n=Object(p["j"])(!1),o=function(){f.logout().then((function(){t.commit("setUser",null),localStorage.removeItem("auth"),e.push("/login")}))},c=function(){n.value=!n.value},r=Object(g["d"])((function(){return t.state.user}));return console.log(r.value),{user:r,handleLogout:o,activeDropdown:n,toggleProfileDropdown:c}}};n("fe79");h.render=A;var w=h,y={name:"App",components:{NavBar:w},setup:function(){var t=Object(d["b"])(),e=Object(v["c"])();f.isLoggedin().then((function(n){n.data?(localStorage.setItem("auth",!0),t.commit("setUser",n.data),console.log(n)):(localStorage.removeItem("auth"),e.push("/login"))}))}};n("b4d8");y.render=c;var k=y,C=(n("b0c0"),{class:"form-container"}),P={class:"form"},E=Object(o["g"])("div",{class:"form__title"},"Register",-1),I=Object(o["f"])("login");function B(t,e,n,c,r,a){var s=Object(o["u"])("custom-input"),u=Object(o["u"])("custom-button"),i=Object(o["u"])("router-link");return Object(o["p"])(),Object(o["d"])("div",C,[Object(o["g"])("div",P,[E,Object(o["g"])("div",null,[Object(o["g"])(s,{type:"text",label:"username",value:c.form.name,"onUpdate:value":e[1]||(e[1]=function(t){return c.form.name=t})},null,8,["value"]),Object(o["g"])(s,{type:"email",label:"email",value:c.form.email,"onUpdate:value":e[2]||(e[2]=function(t){return c.form.email=t})},null,8,["value"]),Object(o["g"])(s,{type:"password",label:"password",value:c.form.password,"onUpdate:value":e[3]||(e[3]=function(t){return c.form.password=t})},null,8,["value"]),Object(o["g"])("input",{class:"custom-file-input",type:"file",name:"image",id:"",onChange:e[4]||(e[4]=function(){return c.handleImageUpload&&c.handleImageUpload.apply(c,arguments)})},null,32)]),Object(o["g"])(u,{text:"Register",onClick:c.handleClick},null,8,["onClick"]),Object(o["g"])(i,{to:"/login"},{default:Object(o["A"])((function(){return[I]})),_:1})])])}var M={class:"input-wrapper"},Q={class:"label"};function S(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",M,[Object(o["g"])("label",Q,Object(o["w"])(n.label),1),Object(o["g"])("input",{onClick:e[1]||(e[1]=function(e){return t.focus=!t.focus}),type:n.type,value:n.value,onInput:e[2]||(e[2]=function(e){return t.$emit("update:value",e.target.value)})},null,40,["type","value"])])}var D={name:"CustomInput",props:{label:String,value:String,type:String}};n("d6f9");D.render=S;var U=D,x=Object(o["C"])("data-v-585d1822"),z=x((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("button",null,Object(o["w"])(n.text),1)})),K={name:"CustomButton",props:{text:String}};n("4107");K.render=z,K.__scopeId="data-v-585d1822";var L=K,G={name:"Register",components:{CustomInput:U,CustomButton:L},setup:function(){var t=Object(v["c"])(),e=Object(d["b"])(),n=Object(o["r"])({name:"",email:"",image:"",password:""}),c=function(t){n.image=t.target.files[0],console.log(t.target.files)},r=function(){var o=new FormData;for(var c in n)o.append(c,n[c]);f.register(o).then((function(n){console.log(n),e.commit("setUser",n.data),localStorage.setItem("auth",!0),t.push("/")})).catch((function(t){return console.log(t)}))};return{form:n,handleClick:r,handleImageUpload:c}}};n("2dd2");G.render=B;var T=G,R={class:"form-container"},F={class:"form"},J=Object(o["g"])("div",{class:"form__title"},"LogIn",-1),N=Object(o["f"])("register");function H(t,e,n,c,r,a){var s=Object(o["u"])("custom-input"),u=Object(o["u"])("custom-button"),i=Object(o["u"])("router-link");return Object(o["p"])(),Object(o["d"])("div",R,[Object(o["g"])("div",F,[J,Object(o["g"])("div",null,[Object(o["g"])(s,{type:"email",label:"email",value:c.form.email,"onUpdate:value":e[1]||(e[1]=function(t){return c.form.email=t})},null,8,["value"]),Object(o["g"])(s,{type:"password",label:"password",value:c.form.password,"onUpdate:value":e[2]||(e[2]=function(t){return c.form.password=t})},null,8,["value"])]),Object(o["g"])(u,{text:"Login",onClick:c.handleClick},null,8,["onClick"]),Object(o["g"])(i,{to:"/register"},{default:Object(o["A"])((function(){return[N]})),_:1})])])}var q={components:{CustomInput:U,CustomButton:L},name:"LogIn",setup:function(){var t=Object(d["b"])(),e=Object(v["c"])(),n=Object(p["i"])({email:"",password:""}),o=function(){console.log("object"),f.login(n).then((function(n){console.log("result: "+n),localStorage.setItem("auth",!0),t.commit("setUser",n.data),e.push("/")})).catch((function(t){console.log(t)}))};return{handleClick:o,form:n}}};q.render=H;var Y=q,_={class:"main-conteiner"},W={class:"content"},V={class:"writer-container"},X={class:"writer-container__tools"};function Z(t,e,n,c,r,a){var s=Object(o["u"])("side-bar"),u=Object(o["u"])("emojy-svg"),i=Object(o["u"])("post");return Object(o["p"])(),Object(o["d"])("div",_,[Object(o["g"])(s),Object(o["g"])("div",W,[Object(o["g"])("div",V,[Object(o["B"])(Object(o["g"])("textarea",{rows:"3",placeholder:"What's in your mind?","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.newPost.content=t})},null,512),[[o["y"],c.newPost.content]]),Object(o["g"])("div",X,[Object(o["g"])("div",null,[Object(o["g"])(u)]),Object(o["g"])("div",{onClick:e[2]||(e[2]=function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)})},"POST")])]),(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(c.posts,(function(t){return Object(o["p"])(),Object(o["d"])(i,{key:t.id,post:t},null,8,["post"])})),128))])])}var $={getPosts:function(){return O.get("post/posts")},create:function(t){return O.post("post/create",t)},likePost:function(t){var e=t.userId,n=t.postId;return O.post("post/like",{userId:e,postId:n})},deletePost:function(t){var e=t.postId;return O.delete("post/delete/"+e,{random:"random"})}},tt=(n("caad"),n("2532"),{class:"post-container"}),et={class:"post"},nt={class:"img-container"},ot={key:1,src:a.a,alt:""},ct={class:"post_content_container"},rt={class:"post-author"},at={class:"post-content"},st={class:"post-reactions"},ut={class:"post-menu"},it={class:"date"},lt={key:0,class:"write-comment"},At={key:0};function pt(t,e,n,c,r,a){var s=Object(o["u"])("love-svg"),u=Object(o["u"])("reply-svg"),i=Object(o["u"])("comment");return Object(o["p"])(),Object(o["d"])("div",tt,[Object(o["g"])("div",null,[Object(o["g"])("div",et,[Object(o["g"])("div",nt,[n.post.author.image?(Object(o["p"])(),Object(o["d"])("img",{key:0,src:"http://localhost:5000/uploads/images/"+n.post.author.image,alt:""},null,8,["src"])):(Object(o["p"])(),Object(o["d"])("img",ot))]),Object(o["g"])("div",ct,[Object(o["g"])("div",rt,Object(o["w"])(n.post.author.name),1),Object(o["g"])("div",at,Object(o["w"])(n.post.content),1),Object(o["g"])("div",st,[Object(o["g"])("div",{class:["like",{liked:n.post.likes.includes(c.userId)}],onClick:e[1]||(e[1]=function(){return c.handleLike&&c.handleLike.apply(c,arguments)})},[Object(o["g"])(s),Object(o["f"])(" "+Object(o["w"])(n.post.likes.length),1)],2),n.post.comments?(Object(o["p"])(),Object(o["d"])("div",{key:0,class:"reply",onClick:e[2]||(e[2]=function(t){return c.reply=!c.reply})},[Object(o["g"])(u),Object(o["f"])(" "+Object(o["w"])(n.post.comments.length),1)])):Object(o["e"])("",!0)])]),Object(o["g"])("div",ut,[Object(o["g"])("img",{src:c.postMenuDropdown,alt:"",onClick:e[3]||(e[3]=function(t){return c.postMenuToggle=!c.postMenuToggle})},null,8,["src"]),Object(o["g"])("div",{class:["post-menu__dropdown",{show:c.postMenuToggle}]},[Object(o["g"])("li",{onClick:e[4]||(e[4]=function(){return c.deletePost&&c.deletePost.apply(c,arguments)})},"delete")],2),Object(o["g"])("div",it,Object(o["w"])(c.date),1)])]),c.reply?(Object(o["p"])(),Object(o["d"])("div",lt,[Object(o["B"])(Object(o["g"])("input",{type:"text",placeholder:"write a comment","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.content.content=t})},null,512),[[o["y"],c.content.content]]),Object(o["g"])("div",{class:"send-comment",onClick:e[6]||(e[6]=function(){return c.createComment&&c.createComment.apply(c,arguments)})}," SEND ")])):Object(o["e"])("",!0)]),c.reply?(Object(o["p"])(),Object(o["d"])("div",At,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(n.post.comments,(function(t){return Object(o["p"])(),Object(o["d"])(i,{comment:t,key:t.id},null,8,["comment"])})),128))])):Object(o["e"])("",!0)])}var gt={width:"20px",viewBox:"0 0 24 24",class:"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"},dt=Object(o["g"])("g",null,[Object(o["g"])("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"})],-1);function bt(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("svg",gt,[dt])}var jt={name:"LoveSvg"};jt.render=bt;var mt=jt,Ot={width:"20px",viewBox:"0 0 24 24",class:"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"},ft=Object(o["g"])("g",null,[Object(o["g"])("path",{d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"})],-1);function vt(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("svg",Ot,[ft])}var ht={name:"ReplySvg"};ht.render=vt;var wt=ht,yt={class:"comment-container"},kt={class:"comment"},Ct={class:"comment-author-avatar"},Pt={key:1,src:a.a,alt:""},Et={class:"comment-content-container"},It={class:"comment-author"},Bt={class:"comment"};function Mt(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",yt,[Object(o["g"])("div",kt,[Object(o["g"])("div",Ct,[n.comment.author.image?(Object(o["p"])(),Object(o["d"])("img",{key:0,src:"http://localhost:5000/uploads/images/"+n.comment.author.image,alt:""},null,8,["src"])):(Object(o["p"])(),Object(o["d"])("img",Pt))]),Object(o["g"])("div",Et,[Object(o["g"])("div",It,Object(o["w"])(n.comment.author.name),1),Object(o["g"])("div",Bt,Object(o["w"])(n.comment.content),1)])])])}var Qt={name:"Comment",props:{comment:Object}};n("c1d2");Qt.render=Mt;var St=Qt,Dt={create:function(t){return O.post("comment/create",t)}},Ut=n("bd79"),xt=n.n(Ut),zt={name:"Post",props:{post:Object},components:{ReplySvg:wt,LoveSvg:mt,Comment:St},setup:function(t){var e=Object(d["b"])(),n=Object(p["i"])({content:""}),o=function(){Dt.create({content:n.content,userId:e.state.user.id,postId:t.post.id}).then((function(t){console.log(t),e.commit("setComment",t.data),n.content=""})).catch((function(t){console.log(t)}))},c=function(){$.likePost({userId:e.state.user.id,postId:t.post.id}).then((function(n){e.commit("likePost",t.post.id),console.log(n)})).catch((function(t){console.log(t)}))},r=function(){var n=t.post.id;$.deletePost({postId:n}).then((function(t){console.log(t.data),e.commit("deletePost",n)})).catch((function(t){console.log(t)}))},a=Object(p["j"])(!1),s=Object(p["j"])(!1),u=Object(p["j"])(e.state.user.id);return{postMenuDropdown:xt.a,postMenuToggle:s,reply:a,createComment:o,content:n,handleLike:c,userId:u,date:new Date(t.post.createdAt).toLocaleDateString(),deletePost:r}}};n("fab4");zt.render=pt;var Kt=zt,Lt={class:"sidebar"};function Gt(t,e,n,c,r,a){var s=Object(o["u"])("mini-user");return Object(o["p"])(),Object(o["d"])("div",Lt,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(c.users,(function(t){return Object(o["p"])(),Object(o["d"])(s,{user:t,key:t.id},null,8,["user"])})),128))])}var Tt={class:"mini-user-container"},Rt={class:"img-container"},Ft={key:1,src:a.a,alt:""};function Jt(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",Tt,[Object(o["g"])("div",Rt,[n.user.image?(Object(o["p"])(),Object(o["d"])("img",{key:0,src:"http://localhost:5000/uploads/images/"+n.user.image,alt:""},null,8,["src"])):(Object(o["p"])(),Object(o["d"])("img",Ft))]),Object(o["g"])("div",null,Object(o["w"])(n.user.name),1)])}var Nt={props:{user:Object}};n("a39f");Nt.render=Jt;var Ht=Nt,qt={components:{MiniUser:Ht},name:"SideBar",setup:function(){var t=Object(p["j"])({});return f.getAllUsers().then((function(e){console.log(e),t.value=e.data})).catch((function(t){console.log(t)})),{users:t}}};n("e034");qt.render=Gt;var Yt=qt,_t={width:"20px",viewBox:"0 0 24 24",class:"r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"},Wt=Object(o["g"])("g",null,[Object(o["g"])("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"}),Object(o["g"])("path",{d:"M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"}),Object(o["g"])("circle",{cx:"14.738",cy:"9.458",r:"1.478"}),Object(o["g"])("circle",{cx:"9.262",cy:"9.458",r:"1.478"})],-1);function Vt(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("svg",_t,[Wt])}var Xt={name:"EmojySvg"};Xt.render=Vt;var Zt=Xt,$t={components:{SideBar:Yt,Post:Kt,EmojySvg:Zt},name:"Home",setup:function(){var t=Object(v["c"])(),e=Object(d["b"])(),n=Object(p["i"])({content:""}),o=Object(g["d"])((function(){return e.state.posts})),c=function(){f.logout().then((function(){localStorage.removeItem("auth"),t.push("/login")}))};$.getPosts().then((function(t){console.log(t),e.commit("setPosts",t.data)})).catch((function(t){console.log(t)}));var r=function(){$.create({content:n.content}).then((function(t){e.commit("addPost",t.data)})).catch((function(t){console.log(t)})),n.content=""};return{logout:c,newPost:n,handleSubmit:r,posts:o}}};n("34aa");$t.render=Z;var te=$t,ee=[{path:"/",component:te,name:"home",meta:{requiresAuth:!0}},{path:"/register",component:T,name:"register",meta:{notForAuthorized:!0}},{path:"/login",component:Y,name:"login",meta:{notForAuthorized:!0}}],ne=Object(v["a"])({history:Object(v["b"])(),routes:ee});ne.beforeEach((function(t,e,n){var o=localStorage.getItem("auth");t.meta.requiresAuth&&!o?n({name:"login"}):"login"!=t.name&&"register"!=t.name||!o?n():n({name:"home"})}));var oe=ne,ce=n("5530"),re=n("2909"),ae=(n("99af"),n("d81d"),n("a434"),n("4de4"),Object(d["a"])({state:function(){return{user:null,posts:[]}},mutations:{setUser:function(t,e){t.user=e},setPosts:function(t,e){t.posts=e},addPost:function(t,e){t.posts=[e].concat(Object(re["a"])(t.posts))},setComment:function(t,e){t.posts=t.posts.map((function(t){return t.id===e.post&&t.comments.unshift(e),t}))},likePost:function(t,e){t.posts=t.posts.map((function(n){if(n.id===e){if(n.likes.includes(t.user.id)){var o=n.likes.indexOf(t.user.id),c=Object(re["a"])(n.likes);return c.splice(o,1),Object(ce["a"])(Object(ce["a"])({},n),{},{likes:Object(re["a"])(c)})}return Object(ce["a"])(Object(ce["a"])({},n),{},{likes:[t.user.id].concat(Object(re["a"])(n.likes))})}return n}))},deletePost:function(t,e){t.posts=t.posts.filter((function(t){return t.id!==e}))}}})),se=ae,ue=Object(o["c"])(k);ue.use(oe),ue.use(se),ue.mount("#app")},"77df":function(t,e,n){},8751:function(t,e,n){},a39f:function(t,e,n){"use strict";n("0803")},ad84:function(t,e,n){},b4d8:function(t,e,n){"use strict";n("cec5")},bd79:function(t,e,n){t.exports=n.p+"img/postMenu.4f6832fc.svg"},c1d2:function(t,e,n){"use strict";n("77df")},cec5:function(t,e,n){},d6f9:function(t,e,n){"use strict";n("1d59")},e034:function(t,e,n){"use strict";n("f052")},f052:function(t,e,n){},fab4:function(t,e,n){"use strict";n("8751")},fe79:function(t,e,n){"use strict";n("0e6f")}});
//# sourceMappingURL=app.dc535f2d.js.map