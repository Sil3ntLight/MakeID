(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{187:function(e,n,t){"use strict";t.r(n);var a=t(5),l=t(0),o=t.n(l);class r extends l.Component{constructor(){super(...arguments),Object(a.a)(this,"handleChange",e=>{let n=e.target.value;this.props.onChange(n)})}render(){const e=this.props,n=e.filter,t=e.innerRef,a=e.value;return n?o.a.createElement("select",{onChange:this.handleChange,ref:t,value:a},o.a.createElement("option",{value:"true"},"Checked"),o.a.createElement("option",{value:"false"},"Unchecked"),o.a.createElement("option",{value:"null"},"Not set")):null}}n.default=r}}]);