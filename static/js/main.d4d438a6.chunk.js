(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),r=a.n(s),c=a(13),l=a.n(c),i=(a(24),a(14)),o=a(15),d=a(18),j=a(17),u=(a(25),a(3));var h=function(){var e,t;return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",(e={className:"display-4"},Object(u.a)(e,"className","text-center"),Object(u.a)(e,"children","Fluid jumbotron"),e)),Object(n.jsx)("p",(t={className:"lead"},Object(u.a)(t,"className","text-center"),Object(u.a)(t,"children","This is a modified jumbotron that occupies the entire horizontal space of its parent."),t))]})})};a(26);var m=function(e){return Object(n.jsx)("div",{className:"tableData mt-5",children:Object(n.jsxs)("table",{className:"table table-dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsxs)("th",{className:"hover",children:["Name ",Object(n.jsx)("i",{className:"fas fa-sort",onClick:e.sortByName})]}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Phone"})]})}),Object(n.jsx)("tbody",{className:"body",children:e.results.map((function(e){return Object(n.jsxs)("tr",{className:"tableInfo",children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{className:"photo",src:e.picture.medium,alt:"employee"})}),Object(n.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone})]},e.login.uuid)}))})]})})},b=a(16),p=a.n(b),f=function(){return p.a.get("https://randomuser.me/api/?results=50&nat=us")};var O=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("form",{className:"form",children:Object(n.jsx)("input",{name:"search",onChange:e.handleInputChange,type:"text",placeholder:"Search By Name"})})})},x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={employeeData:[],filteredEmployee:[],search:""},e.sortByName=function(){var t=e.state.filteredEmployee;if("ascend"===e.state.order){var a=t.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({filteredEmployee:a,order:"descend"})}else{var n=t.sort((function(e,t){return e.name.last>t.name.last?-1:1}));e.setState({filteredEmployee:n,order:"ascend"})}},e.handleInputChange=function(t){e.setState({search:t.target.value});var a=t.target.value;e.setState({filterEmployee:e.state.employeeData.filter((function(e){return e.name.last.includes(a.toLowerCase())>-1}))})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({employeeData:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsx)(O,{employee:this.state.filteredEmployee,handleInputChange:this.handleInputChange}),Object(n.jsx)(m,{results:this.state.employeeData,sortByName:this.sortByName})]})}}]),a}(s.Component);a(44);l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d4d438a6.chunk.js.map