(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},23:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){e.exports=n(68)},46:function(e,t,n){},56:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(11),c=n.n(r),o=(n(46),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),p=n(8),d=function(e){return l.a.createElement(p.Link,{to:e.name,smooth:!0,duration:1e3},l.a.createElement("li",null,e.name))},b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={time:new Date},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState({time:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("span",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"center",padding:"20px"}},this.state.time.toLocaleTimeString())}}]),t}(a.Component),h=(n(56),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navigation",style:{color:this.props.color}},l.a.createElement("ul",null,l.a.createElement(d,{name:"About"}),l.a.createElement(d,{name:"Skills"}),l.a.createElement(b,null)))}}]),t}(a.Component)),E=n(17),f=n(7),v=f.section,g=function(e){return l.a.createElement(E.Shake,{h:5,v:5,r:3,dur:300,int:10,max:100,fixed:!0,fixedStop:!1,freez:!1},l.a.createElement("h1",null,v[0].title))},j=n(0),O=n(13),y=(n(23),f.section,function(e){return l.a.createElement("div",{className:"down1 upanimation"},l.a.createElement(p.Link,{to:"About",smooth:!0,duration:1e3},l.a.createElement(j.b.Provider,{value:{size:"3em"}},l.a.createElement("div",null,l.a.createElement(O.a,null)))))}),C=n(37),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.section;return l.a.createElement("div",{className:"social-icon"},Object.values(e[0].links).map(function(e){return l.a.createElement(E.ShakeLittle,null,l.a.createElement(C.SocialIcon,{url:e}))}))}}]),t}(a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.section;return l.a.createElement("div",{className:"first-section full-page",style:{backgroundColor:this.props.bgColor,color:this.props.color}},l.a.createElement(g,null),l.a.createElement("h3",null,e[0].subtitle),l.a.createElement(k,null),l.a.createElement(y,null))}}]),t}(a.Component),S=(n(34),f.section,function(e){return l.a.createElement("div",{className:"down2 upanimation"},l.a.createElement(p.Link,{to:"Skills",smooth:!0,offset:50,duration:1e3},l.a.createElement(j.b.Provider,{value:{size:"3em"}},l.a.createElement("div",null,l.a.createElement(O.a,null)))))}),N=(n(66),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.section;return l.a.createElement("div",{className:"second-section full-page",style:{backgroundColor:this.props.bgColor,color:this.props.color}},l.a.createElement("h2",null,e[1].title),l.a.createElement("p",{className:"second-content"},e[1].content),l.a.createElement(S,null))}}]),t}(a.Component)),x=(n(12),n(9)),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"third-content"},l.a.createElement("div",{className:"upanimation"},l.a.createElement(j.b.Provider,{value:{size:"5em"}},l.a.createElement("div",null,l.a.createElement(x.c,null))),l.a.createElement("p",{style:{}},"JAVA SCRIPT")))}}]),t}(a.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"third-content"},l.a.createElement("div",{className:"upanimation"},l.a.createElement(j.b.Provider,{value:{size:"5em"}},l.a.createElement("div",null,l.a.createElement(x.b,null))),l.a.createElement("p",{style:{paddingLeft:"15px"}},"HTML")))}}]),t}(a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"third-content"},l.a.createElement("div",{className:"upanimation"},l.a.createElement(j.b.Provider,{value:{size:"5em"}},l.a.createElement("div",null,l.a.createElement(x.a,null))),l.a.createElement("p",{style:{paddingLeft:"20px"}},"CSS")))}}]),t}(a.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"third-content"},l.a.createElement("div",{className:"upanimation"},l.a.createElement(j.b.Provider,{value:{size:"5em"}},l.a.createElement("div",null,l.a.createElement(x.e,null))),l.a.createElement("p",{style:{paddingLeft:"10px"}},"REACT")))}}]),t}(a.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"third-content"},l.a.createElement("div",{className:"upanimation"},l.a.createElement(j.b.Provider,{value:{size:"5em"}},l.a.createElement("div",null,l.a.createElement(x.d,null))),l.a.createElement("p",null,"JQUERY")))}}]),t}(a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"scrollToTop",value:function(){p.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this,t=f.section;return l.a.createElement("div",{className:"third-section full-page",style:{backgroundColor:this.props.bgColor,color:this.props.color}},l.a.createElement("div",null,l.a.createElement("h2",null,t[2].title)),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(z,null)),l.a.createElement("td",null,l.a.createElement(T,null)),l.a.createElement("td",null,l.a.createElement(L,null)),l.a.createElement("td",null,l.a.createElement(A,null)),l.a.createElement("td",null,l.a.createElement(P,null)))),l.a.createElement("div",{className:"up upanimation"},l.a.createElement(j.b.Provider,{value:{size:"3em"}},l.a.createElement("div",null,l.a.createElement(O.b,{onClick:function(){return e.scrollToTop()}})))))}}]),t}(a.Component),I=n(38),D=n.n(I),J=n(39),R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={bgColor:"lightblue",color:"darkslateblue"},n.changeColor=function(){"lightblue"===n.state.bgColor&&n.setState({bgColor:"cadetblue",color:"blanchedalmond"}),"cadetblue"===n.state.bgColor&&n.setState({bgColor:"bisque",color:"purple"}),"bisque"===n.state.bgColor&&n.setState({bgColor:"forestgreen",color:"darkorange"}),"forestgreen"===n.state.bgColor&&n.setState({bgColor:"lightcoral",color:"beige"}),"lightcoral"===n.state.bgColor&&n.setState({bgColor:"lightblue",color:"darkslateblue"})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){f.section;return l.a.createElement("div",null,l.a.createElement(h,{color:this.state.color}),l.a.createElement(j.b.Provider,{value:{color:"purple",size:"7em",className:"theme-icon"}},l.a.createElement("div",{onClick:this.changeColor},l.a.createElement(J.a,null))),l.a.createElement(D.a,null),l.a.createElement(w,{bgColor:this.state.bgColor,color:this.state.color}),l.a.createElement(p.Element,{name:"About",className:"element"},l.a.createElement(N,{bgColor:this.state.bgColor,color:this.state.color})),l.a.createElement(p.Element,{name:"Skills",className:"element"},l.a.createElement(_,{bgColor:this.state.bgColor,color:this.state.color})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={section:[{title:"Hello, I'm M.J !",subtitle:"Web Developer | Open Source ",links:{pinterest:"https://www.pinterest.com",twitter:"https://twitter.com","plus.google":"https://plus.google.com",instagram:"https://www.instagram.com"},down:"/images/iconfinder_down.png"},{title:"About",content:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",down:"/images/iconfinder_down.png"},{title:"Skills",content:[{img:"/images/iconfinder_html5.png",caption:"HTML"},{img:"/images/iconfinder_css.png",caption:"CSS"},{img:"/images/iconfinder_javascript.png",caption:"Java Script"},{img:"/images/iconfinder_jquery.png",caption:"jQuery"},{img:"/images/iconfinder_react.png",caption:"React"}],up:"/images/iconfinder_up.png"},{themeIcon:"/images/iconfinder_preferences.png"}]}}},[[41,1,2]]]);
//# sourceMappingURL=main.1209a504.chunk.js.map