(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),s=a.n(r),c=a(13),l=a.n(c),o=(a(24),a(14)),i=a(15),d=a(18),j=a(17),m=(a(25),a(3));var u=function(){var e,t;return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",(e={className:"display-4"},Object(m.a)(e,"className","text-center"),Object(m.a)(e,"children","Employee Directory"),e)),Object(n.jsx)("p",(t={className:"lead"},Object(m.a)(t,"className","text-center"),Object(m.a)(t,"children","Start by searching for an employee ny name!"),t))]})})};a(26);var h=function(e){return Object(n.jsx)("div",{className:"tableData mt-5",children:Object(n.jsxs)("table",{className:"table table-dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsxs)("th",{className:"hover",children:["Name ",Object(n.jsx)("i",{className:"fas fa-sort",onClick:e.sortByName})]}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Phone"})]})}),Object(n.jsx)("tbody",{className:"body",children:e.results.map((function(e){return Object(n.jsxs)("tr",{className:"tableInfo",children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{className:"photo",src:e.picture.medium,alt:"employee"})}),Object(n.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.phone})]},e.login.uuid)}))})]})})},b=a(16),p=a.n(b),f=function(){return p.a.get("https://randomuser.me/api/?results=50&nat=us")};var O=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("form",{className:"form",children:Object(n.jsx)("input",{name:"employee",onChange:e.handleInputChange,type:"text",placeholder:"Search By Name"})})})},y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employeeData:[],filteredEmployee:[],search:"",order:"ascend"},e.sortByName=function(){var t=e.state.filteredEmployee;if("ascend"===e.state.order){var a=t.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({filteredEmployee:a,order:"descend"})}else{var n=t.sort((function(e,t){return e.name.last>t.name.last?-1:1}));e.setState({filteredEmployee:n,order:"ascend"})}},e.handleInputChange=function(t){console.log(t.target.value);var a=e.state.employeeData,n=t.target.value;e.setState({filteredEmployee:a.filter((function(e){return-1!==Object.values(e).join("").toLocaleLowerCase().indexOf(n.toLowerCase())}))})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({employeeData:t.data.results,filteredEmployee:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsx)(O,{employee:this.state.employeeData,handleInputChange:this.handleInputChange}),Object(n.jsx)(h,{results:this.state.filteredEmployee,sortByName:this.sortByName})]})}}]),a}(r.Component);a(44);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1f039c5a.chunk.js.map