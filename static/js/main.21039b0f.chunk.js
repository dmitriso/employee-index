(this["webpackJsonpemployee-index"]=this["webpackJsonpemployee-index"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(2),a=n(12),c=n.n(a),o=n(13),l=n(14),i=n(17),d=n(16),h=n(15),u=n.n(h),m=function(){return u.a.get("https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,email,dob")};var j=function(e){return Object(s.jsx)("form",{className:"container",children:Object(s.jsxs)("div",{className:"form-group text-center",children:[Object(s.jsx)("h1",{className:"card",children:"Employee-Index"}),Object(s.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search For An Employee",id:"search"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"}),Object(s.jsx)("button",{onClick:e.handleSortByAgeAscend,className:"btn btn-primary",children:"Sort By Youngest"}),Object(s.jsx)("button",{onClick:e.handleSortByAgeDescend,className:"btn btn-primary",children:"Sort By Oldest"})]})})},b=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],results:[],filteredEmployees:[],search:""},e.searchEmployees=function(){m().then((function(t){return e.setState({employees:t.data.results,results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,s=e.state.employees.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(n.toLowerCase())||-1!==e.name.last.toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredEmployees:s,search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({employees:e.state.filteredEmployees,results:e.state.employees}),console.log(e.state.search)},e.handleSortByAgeDescend=function(t){t.preventDefault();var n=e.state.employees.sort((function(e,t){return t.dob.age-e.dob.age}));e.setState({filteredEmployees:n,employees:n})},e.handleSortByAgeAscend=function(t){t.preventDefault();var n=e.state.employees.sort((function(e,t){return e.dob.age-t.dob.age}));e.setState({filteredEmployees:n,employees:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(j,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleSortByAgeAscend:this.handleSortByAgeAscend,handleSortByAgeDescend:this.handleSortByAgeDescend}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{className:"table table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"D.O.B."})]})}),Object(s.jsx)("tbody",{children:this.state.employees.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.medium,alt:"Employee"})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob.date.substring(0,10)})]})}))})]})})]})}}]),n}(r.Component);var p=function(){return Object(s.jsx)(b,{})};n(41);c.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.21039b0f.chunk.js.map