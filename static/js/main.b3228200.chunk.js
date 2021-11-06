(this.webpackJsonpblogcontroller=this.webpackJsonpblogcontroller||[]).push([[0],{19:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(12),i=c.n(a),o=c(2),r=(c(19),c(5)),l=c(0),j=function(e){return Object(l.jsxs)("div",{className:"singlePost",children:[Object(l.jsx)("div",{className:"titleSection",children:e.data.title}),Object(l.jsx)("div",{className:"textSection",children:e.data.text}),Object(l.jsxs)("div",{className:"bottomRow",children:[Object(l.jsxs)("div",{children:["Created: ",e.data.date_formatted]}),Object(l.jsxs)("div",{className:"rightSide bottom",children:[Object(l.jsx)("div",{children:e.data.published?"Published":"Hidden"}),Object(l.jsx)(r.b,{to:"/post/"+e.data._id,children:Object(l.jsx)("span",{children:"View Post"})})]})]})]})},d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(o.a)(a,2),r=i[0],d=i[1];return Object(n.useEffect)((function(){d(!0),fetch("https://dcblogapi.herokuapp.com/api/post",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){s(e),d(!1)})).catch((function(e){throw new Error("Failed to fetch api")}))}),[]),r?Object(l.jsx)("div",{children:"Loading"}):Object(l.jsx)("div",{children:0===c.length?Object(l.jsx)("div",{children:"No posts found"}):c.map((function(e){return Object(l.jsx)(j,{data:e})}))})},b=c(3),u=function(){return Object(l.jsxs)("div",{className:"navBar",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("div",{children:"Blog Controller"})}),Object(l.jsxs)("div",{className:"navSection",children:[Object(l.jsx)(r.b,{className:"navLink",to:"/",children:Object(l.jsx)("span",{children:"Posts"})}),Object(l.jsx)(r.b,{className:"navLink",to:"/create",children:Object(l.jsx)("span",{children:"Create Post"})}),Object(l.jsx)(r.b,{className:"navLink",to:"/login",children:Object(l.jsx)("span",{children:"Login"})})]})]})},h=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),c=Object(n.useState)(!1),s=Object(o.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)([]),j=Object(o.a)(r,2),d=j[0],u=j[1],h=Object(n.useState)(""),m=Object(o.a)(h,2),O=m[0],p=m[1];return Object(n.useEffect)((function(){""!==O&&i(!0)}),[O]),a?Object(l.jsx)(b.a,{to:"/post/".concat(O)}):Object(l.jsxs)("div",{className:"formContainer",children:[Object(l.jsx)("div",{className:"errorContainer",children:d.map((function(e){return Object(l.jsx)("div",{children:e.msg})}))}),Object(l.jsxs)("form",{className:"submitForm",type:"submit",children:[Object(l.jsx)("div",{className:"title",children:"Create Post"}),Object(l.jsx)("label",{htmlFor:"title",children:"Title"}),Object(l.jsx)("input",{ref:e,type:"text",id:"title",name:"title"}),Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{ref:t,className:"textArea",type:"text",id:"text",name:"text"}),Object(l.jsx)("button",{className:"createBtn",onClick:function(c){c.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.current.value,text:t.current.value})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?u(e.errors):p(e._id)})).catch((function(e){throw new Error(e)}))},type:"submit",children:"Submit"})]})]})},m=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),j=Object(o.a)(i,2),d=j[0],b=j[1],u=Object(n.useState)([]),h=Object(o.a)(u,2),m=h[0],O=h[1],p=Object(n.useState)(!0),x=Object(o.a)(p,2),f=x[0],v=x[1],g=Object(n.useRef)(null),N=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id),{credentials:"include"}),c=fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id,"/comment"),{credentials:"include"});Promise.all([t,c]).then((function(e){var t=Object(o.a)(e,2),c=t[0],n=t[1];return Promise.all([c.json(),n.json()])})).then((function(e){v(!1),e[0].errors?O(e[0].errors):(a(e[0]),b(e[1]))})).catch((function(e){console.log(e)}))}),[]);return f?Object(l.jsx)("div",{children:"Loading"}):0!==m.length?Object(l.jsx)("div",{children:m}):Object(l.jsxs)("div",{className:"viewContainer",children:[Object(l.jsxs)("div",{className:"viewPost",children:[Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsx)("div",{className:"viewTitle",children:s.title}),Object(l.jsx)("div",{className:"viewText",children:s.text})]}),Object(l.jsxs)("div",{className:"viewBottom",children:[Object(l.jsxs)("div",{className:"viewDate",children:["Created: ",s.date_formatted]}),Object(l.jsxs)("div",{className:"viewLinks",children:[Object(l.jsx)(r.b,{to:"/post/".concat(e.match.params.id,"/delete"),children:Object(l.jsx)("span",{children:"Delete Post"})}),Object(l.jsx)(r.b,{to:"/post/".concat(e.match.params.id,"/update"),children:Object(l.jsx)("span",{children:"Update Post"})})]})]})]}),Object(l.jsxs)("div",{className:"viewFormContainer",children:[Object(l.jsx)("div",{className:"commentTag",children:"Create Comment"}),Object(l.jsxs)("form",{className:"createComment",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{ref:g,id:"name",name:"name"}),Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{ref:N,id:"text",name:"text"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id,"/comment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g.current.value,text:N.current.value,id:e.match.params.id})}).then((function(e){return e.json()})).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))},children:"Submit Comment"})]})]}),Object(l.jsxs)("div",{className:"commentSection",children:[Object(l.jsx)("div",{className:"commentTag",children:"Comments"}),d.map((function(t,c){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsxs)("div",{className:"commentHead",children:[Object(l.jsx)("div",{className:"commentName",children:t.name}),Object(l.jsxs)("div",{className:"commentDate",children:["Submitted: ",t.date_formatted]})]}),Object(l.jsx)("div",{className:"commentText",children:t.text}),Object(l.jsx)(r.b,{to:"/post/".concat(e.match.params.id,"/comment/").concat(t._id),children:Object(l.jsx)("span",{className:"commentRight",children:"Delete Comment"})})]},"comment".concat(c))}))]})]})},O=function(e){console.log(e);var t=Object(n.useRef)(null),c=Object(n.useRef)(null),s=Object(n.useState)([]),a=Object(o.a)(s,2),i=a[0],r=a[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),u=d[0],h=d[1],m=Object(n.useState)(!1),O=Object(o.a)(m,2),p=O[0],x=O[1];return Object(n.useEffect)((function(){u&&setTimeout((function(){x(!0),e.changeAuth()}),2e3)}),[u]),p||e.auth?Object(l.jsx)(b.a,{to:"/"}):Object(l.jsxs)("form",{className:"loginForm",type:"submit",children:[Object(l.jsx)("div",{className:"successSection",children:u?Object(l.jsx)("div",{children:"Login successful, Redirecting shortly"}):Object(l.jsx)(l.Fragment,{})}),Object(l.jsx)("div",{className:"errorSection",children:i.map((function(e){return Object(l.jsx)("div",{children:e.msg})}))}),Object(l.jsxs)("div",{className:"inputWrapper",children:[Object(l.jsx)("div",{children:"Login"}),Object(l.jsxs)("div",{className:"inputSection",children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{ref:t,id:"username",name:"username"})]}),Object(l.jsxs)("div",{className:"inputSection",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{ref:c,id:"password",name:"password"})]}),Object(l.jsx)("button",{className:"submitBtn",onClick:function(e){e.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.current.value,password:c.current.value})}).then((function(e){return e.json()})).then((function(e){e.errors?r(e.errors):(r([]),h(!0))})).catch((function(e){console.log(e)}))},children:"Submit"})]})]})},p=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)({}),r=Object(o.a)(i,2),j=(r[0],r[1]),d=Object(n.useState)(!1),u=Object(o.a)(d,2),h=u[0],m=u[1],O=Object(n.useState)(!1),p=Object(o.a)(O,2),x=p[0],f=p[1];Object(n.useEffect)((function(){fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id,"/comment/").concat(e.match.params.commentId),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.errors?j(e.errors):a(e)})).catch((function(e){console.log(e)}))}),[]);return x?Object(l.jsx)(b.a,{to:"/post/".concat(e.match.params.id)}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:s.name}),Object(l.jsx)("div",{children:s.text}),Object(l.jsx)("button",{onClick:function(){m(!0)},children:"Delete this comment?"}),h?Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id,"/comment/").concat(e.match.params.commentId),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log(e),f(!0)})).catch((function(e){console.log(e)}))},children:"Confirm"}),Object(l.jsx)("button",{onClick:function(){m(!1)},children:"Cancel"})]}):Object(l.jsx)(l.Fragment,{})]})},x=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),j=(r[0],r[1],Object(n.useState)(!0)),d=Object(o.a)(j,2),u=d[0],h=d[1],m=Object(n.useState)(!1),O=Object(o.a)(m,2),p=O[0],x=O[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=v[0],N=v[1];Object(n.useEffect)((function(){fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e),h(!1)})).catch((function(e){console.log(e)}))}),[]);return u?Object(l.jsx)("div",{children:"Loading"}):g?Object(l.jsx)(b.a,{to:"/"}):Object(l.jsxs)("div",{className:"DeletePost",children:[Object(l.jsxs)("div",{className:"viewPost",children:[Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsx)("div",{className:"viewTitle",children:s.title}),Object(l.jsx)("div",{className:"viewText",children:s.text})]}),Object(l.jsx)("div",{className:"viewBottom",children:Object(l.jsxs)("div",{className:"viewDate",children:["Published: ",s.date]})})]}),Object(l.jsxs)("div",{className:"deleteSection",children:[Object(l.jsx)("button",{onClick:function(){x(!0)},children:"Delete this comment?"}),p?Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log(e),N(!0)})).catch((function(e){console.log(e)}))},children:"Confirm"}),Object(l.jsx)("button",{onClick:function(){x(!1)},children:"Cancel"})]}):Object(l.jsx)(l.Fragment,{})]})]})},f=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),j=(r[0],r[1],Object(n.useState)(!0)),d=Object(o.a)(j,2),u=(d[0],d[1]),h=Object(n.useState)(!1),m=Object(o.a)(h,2),O=m[0],p=m[1],x=Object(n.useRef)(null),f=Object(n.useRef)(null),v=Object(n.useRef)(null);Object(n.useEffect)((function(){fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){a(e),u(!1)})).catch((function(e){console.log(e)}))}),[]);return O?Object(l.jsx)(b.a,{to:"/post/".concat(e.match.params.id)}):Object(l.jsx)("div",{className:"formContainer",children:Object(l.jsxs)("form",{className:"submitForm",type:"submit",children:[Object(l.jsx)("div",{className:"title",children:"Update Post"}),Object(l.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(l.jsx)("input",{ref:x,type:"text",id:"title",name:"title",defaultValue:s.title}),Object(l.jsx)("label",{htmlFor:"text",children:"Text: "}),Object(l.jsx)("textarea",{ref:f,className:"textArea",type:"text",id:"text",name:"text",defaultValue:s.text}),Object(l.jsxs)("div",{className:"checker",children:[Object(l.jsx)("label",{htmlFor:"checkBox",children:"Publish: "}),Object(l.jsx)("input",{ref:v,type:"checkbox",id:"checkBox",defaultChecked:s.published})]}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),fetch("https://dcblogapi.herokuapp.com/api/post/".concat(e.match.params.id),{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:x.current.value,text:f.current.value,published:v.current.checked})}).then((function(e){return e.json()})).then((function(e){console.log(e),p(!0)})).catch((function(e){console.log(e)}))},children:"Update post"})]})})};var v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://dcblogapi.herokuapp.com/api",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.authorized&&s(!0)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{exact:!0,path:"/",component:d}),Object(l.jsx)(b.b,{exact:!0,path:"/create",component:h}),Object(l.jsx)(b.b,{exact:!0,path:"/post/:id",component:m}),Object(l.jsx)(b.b,{exact:!0,path:"/login",children:Object(l.jsx)(O,{changeAuth:function(){c||s(!0)},auth:c})}),Object(l.jsx)(b.b,{exact:!0,path:"/post/:id/comment/:commentId",component:p}),";",Object(l.jsx)(b.b,{exact:!0,path:"/post/:id/delete",component:x}),Object(l.jsx)(b.b,{exact:!0,path:"/post/:id/update",component:f})]})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b3228200.chunk.js.map