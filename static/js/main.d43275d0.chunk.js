(this["webpackJsonploading-indicator"]=this["webpackJsonploading-indicator"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),i=s.n(n),c=s(8),o=s.n(c),a=(s(14),s(2)),l=s(3),d=s(4),j=s(6),h=s(5),u=(s(15),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).state={radius:r.props.size,circumference:112*Math.PI,offset:112*Math.PI},r}return Object(l.a)(s,[{key:"render",value:function(e){var t=this.props,s=t.progress,n=t.size,i=void 0===n?60:n,c=t.strokeWidth,o=void 0===c?4:c,a=t.outerStroke,l=void 0===a?"#FF0000":a,d=t.innerStroke,j=void 0===d?"#00FF00":d,h=t.fill,u=void 0===h?"#FFFFFF":h,b=t.fontSize,g=void 0===b?25:b,f=2*(this.props.size-2*o)*Math.PI,v=f-s/100*f;return console.log(v),Object(r.jsx)("div",{className:"loader-component",children:Object(r.jsxs)("div",{className:"loader-circle-container",style:{width:2*i,height:2*i},children:[Object(r.jsxs)("svg",{className:"loader",height:2*i,width:2*i,children:[Object(r.jsx)("circle",{className:"loader-outer-circle",strokeWidth:o+2,fill:u,stroke:l,r:i-2*o,cx:i,cy:i}),Object(r.jsx)("circle",{className:"loader-inner-circle",strokeWidth:o-2,fill:"transparent",strokeDasharray:"".concat(f," ").concat(f),strokeDashoffset:v,stroke:j,r:i-2*o,cx:i,cy:i})]}),Object(r.jsx)("div",{className:"loader-progress",children:Object(r.jsxs)("span",{style:{fontSize:g},children:[s,"%"]})})]})})}}]),s}(n.Component)),b=(s(16),void 0),g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).startLoading=function(){r.setState({isProgressing:!0}),r.state.isProgressing||(b=setInterval((function(){r.setState({progress:r.state.progress+1},(function(){100==r.state.progress&&clearInterval(b)}))}),100))},r.pauseLoading=function(){r.setState({isProgressing:!1}),b&&clearInterval(b)},r.state={progress:0,isProgressing:!1},r.startLoading=r.startLoading.bind(Object(d.a)(r)),r}return Object(l.a)(s,[{key:"render",value:function(){return console.log(this.state.progress),Object(r.jsx)("div",{className:"home-container",children:Object(r.jsxs)("div",{className:"content-container",children:[Object(r.jsx)(u,{progress:this.state.progress,size:80,strokeWidth:10,outerStroke:"#ddfff8",innerStroke:"#02C39A",fill:"#FFFFFF",fontSize:30}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("div",{className:"btn",onClick:this.startLoading,children:"Start"}),Object(r.jsx)("div",{className:"btn",onClick:this.pauseLoading,children:"Pause"})]})]})})}}]),s}(n.Component);var f=function(){return Object(r.jsx)(g,{})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d43275d0.chunk.js.map