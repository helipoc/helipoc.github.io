(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(20),i=n.n(c),s=n(32),o=n(48),r=n(73),u=n(91),d=n(90),l=n(16);var j=function(e){var t=e.todos,n=e.handl,c="animate__fadeInUp",i=Object(a.useState)(Object(s.a)(t).map((function(e){return"animate__animated ".concat(c)}))),r=Object(o.a)(i,2),u=r[0],j=r[1];return Object(a.useEffect)((function(){j(Object(s.a)(t).map((function(e){return"animate__animated ".concat(c)})))}),[t]),Object(l.jsx)("div",{style:{width:"50%"},children:Object(l.jsx)(d.a,{hoverable:!0,children:Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",font:"25px arial, sans-serif"},children:t.map((function(e,a){return Object(l.jsxs)("div",{style:{display:"flex",width:"100%"},className:u[a],children:[Object(l.jsx)("p",{children:e}),Object(l.jsx)("i",{className:"fas fa-check-circle",style:{marginLeft:"auto",color:"green"},onClick:function(){return function(e){j(Object(s.a)(t).map((function(t,n){return e==n?"animate__animated animate__fadeOutRight":"animate__animated ".concat(c)}))),setTimeout((function(){return n(e)}),500)}(a)}})]},a)}))})})})};var f=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),d=Object(o.a)(i,2),f=d[0],m=d[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("todos");e&&e.length>0&&c(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("center",{children:[Object(l.jsx)("div",{style:{marginTop:"5em",marginBottom:"3em",width:"50%"},children:Object(l.jsx)(u.a,{placeholder:"Add Task ... ",onKeyDown:function(e){if("Enter"==e.key){if(""==f)return void r.a.error({message:"Task field is empty ",duration:2});c((function(e){return[].concat(Object(s.a)(e),[f])})),m(""),r.a.success({message:"Added Task !",duration:2})}},onChange:function(e){return m(e.target.value)},value:f})}),Object(l.jsx)("br",{}),n.length>0?Object(l.jsx)(j,{todos:n,handl:function(e){c((function(t){return Object(s.a)(t).filter((function(t,n){return n!=e}))})),r.a.info({message:"Task Done !",duration:2})}}):Object(l.jsxs)("div",{className:"animate__animated animate__zoomIn",children:[Object(l.jsx)("img",{src:"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif",width:"300",height:"300"}),Object(l.jsx)("br",{}),Object(l.jsx)("b",{style:{fontFamily:"monospace"},children:"Your Tasks list is empty !"})]})]})})};n(86),n(87);i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.e748f6c4.chunk.js.map