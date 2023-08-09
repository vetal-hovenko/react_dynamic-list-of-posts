(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),a=c(3),i=c(1),r=(c(17),c(18),c(19),c(4)),o=c.n(r),l="https://mate.academy/students-api";function d(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),d(300).then((function(){return fetch(l+e,n)})).then((function(e){return e.json()}))}var j,u,b=function(e){return m(e)},h=function(e,t){return m(e,"POST",t)},O=function(e){return m(e,"DELETE")},f=(j="/users",b(j)).then((function(e){return e})).catch((function(){throw new Error("Unable to get users")})),x=c(0),v=function(e){var t=e.posts,c=e.selectedPost,n=e.setSelectedPost,s=e.setComments,a=e.setIsCommentLoading,i=e.setCommentsError,r=function(e){var t;n(e),a(!0),(t=e.id,b("/comments?postId=".concat(t))).then((function(e){s(e)})).catch((function(){return i(!0)})).finally((function(){return a(!1)})),c&&c.id===e.id&&(n(null),s(null))};return Object(x.jsxs)("div",{"data-cy":"PostsList",children:[Object(x.jsx)("p",{className:"title",children:"Posts:"}),Object(x.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{className:"has-background-link-light",children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:" "})]})}),Object(x.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.title,s=t===(null===c||void 0===c?void 0:c.id);return Object(x.jsxs)("tr",{"data-cy":"Post",children:[Object(x.jsx)("td",{"data-cy":"PostId",children:t}),Object(x.jsx)("td",{"data-cy":"PostTitle",children:n}),Object(x.jsx)("td",{className:"has-text-right is-vcentered",children:Object(x.jsx)("button",{type:"button","data-cy":"PostButton",className:"button ".concat(s?"is-link":"is-light"),onClick:function(){return r(e)},children:s?"Close":"Open"})})]},t)}))})]})]})},N=(c(21),function(){return Object(x.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(x.jsx)("div",{className:"Loader__content"})})}),p=c(12),y=c(2),g=c(11),E=c.n(g);!function(e){e.NAME="name",e.EMAIL="email",e.BODY="body"}(u||(u={}));var C=function(e){var t=e.setComments,c=e.selectedPost,n=Object(i.useState)({name:"",email:"",body:""}),s=Object(a.a)(n,2),r=s[0],l=s[1],d=Object(i.useState)({nameError:!1,emailError:!1,bodyError:!1}),m=Object(a.a)(d,2),j=m[0],b=m[1],O=Object(i.useState)(!1),f=Object(a.a)(O,2),v=f[0],N=f[1],g=Object(i.useCallback)((function(e,t){switch(t){case u.NAME:l((function(t){return Object(y.a)(Object(y.a)({},t),{},{name:e.target.value})})),b((function(e){return Object(y.a)(Object(y.a)({},e),{},{nameError:!1})}));break;case u.EMAIL:l((function(t){return Object(y.a)(Object(y.a)({},t),{},{email:e.target.value})})),b((function(e){return Object(y.a)(Object(y.a)({},e),{},{emailError:!1})}));break;case u.BODY:l((function(t){return Object(y.a)(Object(y.a)({},t),{},{body:e.target.value})})),b((function(e){return Object(y.a)(Object(y.a)({},e),{},{bodyError:!1})}))}}),[]),C=r.name,S=r.email,P=r.body,w=j.nameError,k=j.emailError,L=j.bodyError,I=Object(i.useCallback)((function(e){e.preventDefault();var n,s,a=""!==C.replace(/\s/g,""),i=E()(S),r=""!==P.replace(/\s/g,"");if(a||b((function(e){return Object(y.a)(Object(y.a)({},e),{},{nameError:!0})})),i||b((function(e){return Object(y.a)(Object(y.a)({},e),{},{emailError:!0})})),r||b((function(e){return Object(y.a)(Object(y.a)({},e),{},{bodyError:!0})})),a&&i&&r&&c){N(!0);var o={id:0,postId:c.id,name:C,email:S,body:P};(n=c.id,s=o,h("/comments?postId=".concat(n),s)).then((function(e){t((function(t){return[].concat(Object(p.a)(t),[e])}))})).catch((function(){throw new Error("Failed to create comment")})).finally((function(){N(!1),l({name:"",email:"",body:""})}))}}),[C,S,P,c]),F=Object(i.useCallback)((function(){l({name:"",email:"",body:""}),b({nameError:!1,emailError:!1,bodyError:!1})}),[]);return Object(x.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){return I(e)},onReset:function(){return F()},children:[Object(x.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(x.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(x.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(x.jsx)("input",{value:C,onChange:function(e){return g(e,u.NAME)},type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:"input ".concat(o()({"is-danger":w}))}),Object(x.jsx)("span",{className:"icon is-small is-left",children:Object(x.jsx)("i",{className:"fas fa-user"})}),w&&Object(x.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(x.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(x.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(x.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(x.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(x.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(x.jsx)("input",{value:S,onChange:function(e){return g(e,u.EMAIL)},type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:"input ".concat(o()({"is-danger":k}))}),Object(x.jsx)("span",{className:"icon is-small is-left",children:Object(x.jsx)("i",{className:"fas fa-envelope"})}),k&&Object(x.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(x.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),k&&Object(x.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(x.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(x.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(x.jsx)("div",{className:"control",children:Object(x.jsx)("textarea",{value:P,onChange:function(e){return g(e,u.BODY)},id:"comment-body",name:"body",placeholder:"Type comment here",className:"textarea ".concat(o()({"is-danger":L}))})}),L&&Object(x.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(x.jsxs)("div",{className:"field is-grouped",children:[Object(x.jsx)("div",{className:"control",children:Object(x.jsx)("button",{type:"submit",className:"button is-link ".concat(o()({"is-loading":v})),children:"Add"})}),Object(x.jsx)("div",{className:"control",children:Object(x.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},S=function(e){var t=e.selectedPost,c=e.comments,n=e.isCommentLoading,s=e.setComments,r=e.commentsError,o=Object(i.useState)(!1),l=Object(a.a)(o,2),d=l[0],m=l[1];Object(i.useEffect)((function(){m(!1)}),[t]);var j=function(e){if(c){var t=c.filter((function(t){return t.id!==e}));s(t)}!function(e){O("/comments/".concat(e))}(e)};return Object(x.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(x.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(x.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(x.jsx)("div",{className:"block",children:n?Object(x.jsx)(N,{}):Object(x.jsxs)(x.Fragment,{children:[r&&Object(x.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===(null===c||void 0===c?void 0:c.length)?Object(x.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:"title is-4",children:"Comments:"}),null===c||void 0===c?void 0:c.map((function(e){var t=e.id,c=e.name,n=e.body,s=e.email;return Object(x.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(x.jsxs)("div",{className:"message-header",children:[Object(x.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:c}),Object(x.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return j(t)},children:"delete button"})]}),Object(x.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:n})]},t)}))]}),!r&&!d&&Object(x.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return m(!0)},children:"Write a comment"})]})}),d&&Object(x.jsx)(C,{selectedPost:t,setComments:s})]})})},P=function(e){var t=e.selectedUser,c=e.setSelectedUser,n=e.setPosts,s=e.setIsLoading,r=e.setPostsLoadingError,l=e.setSelectedPost,d=Object(i.useState)(!1),m=Object(a.a)(d,2),j=m[0],u=m[1],h=Object(i.useState)([]),O=Object(a.a)(h,2),v=O[0],N=O[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){f.then((function(e){N(e)}))}),[]),Object(i.useEffect)((function(){var e=function(e){p.current&&!p.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]);var y=function(e){var t;c(e),u(!1),s(!0),n(null),l(null),(t=e.id,b("/posts?userId=".concat(t))).then((function(e){n(e)})).catch((function(){return r(!0)})).finally((function(){return s(!1)}))};return Object(x.jsxs)("div",{ref:p,"data-cy":"UserSelector",className:"dropdown ".concat(o()({"is-active":j})),children:[Object(x.jsx)("div",{className:"dropdown-trigger",children:Object(x.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return u(!j)},children:[Object(x.jsx)("span",{children:(null===t||void 0===t?void 0:t.name)||"Choose a user"}),Object(x.jsx)("span",{className:"icon is-small",children:Object(x.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(x.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(x.jsx)("div",{className:"dropdown-content",children:v.map((function(e){return Object(x.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item ".concat(o()({"is-active":e.id===(null===t||void 0===t?void 0:t.id)})),onClick:function(){return y(e)},children:e.name},e.id)}))})})]})},w=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(null),r=Object(a.a)(s,2),l=r[0],d=r[1],m=Object(i.useState)(!1),j=Object(a.a)(m,2),u=j[0],b=j[1],h=Object(i.useState)(null),O=Object(a.a)(h,2),f=O[0],p=O[1],y=Object(i.useState)(null),g=Object(a.a)(y,2),E=g[0],C=g[1],w=Object(i.useState)(!1),k=Object(a.a)(w,2),L=k[0],I=k[1],F=Object(i.useState)(!1),M=Object(a.a)(F,2),T=M[0],A=M[1],B=Object(i.useState)(!1),D=Object(a.a)(B,2),U=D[0],Y=D[1];return Object(x.jsx)("main",{className:"section",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"tile is-ancestor",children:[Object(x.jsx)("div",{className:"tile is-parent",children:Object(x.jsxs)("div",{className:"tile is-child box is-success",children:[Object(x.jsx)("div",{className:"block",children:Object(x.jsx)(P,{selectedUser:c,setSelectedUser:n,setPosts:d,setIsLoading:b,setPostsLoadingError:A,setSelectedPost:p})}),Object(x.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!c&&Object(x.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),u&&Object(x.jsx)(N,{}),T&&Object(x.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),l&&0===l.length&&Object(x.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),l&&l.length>0&&Object(x.jsx)(v,{posts:l,selectedPost:f,setSelectedPost:p,setComments:C,setIsCommentLoading:I,setCommentsError:Y})]})]})}),Object(x.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":f}),children:Object(x.jsx)("div",{className:"tile is-child box is-success ",children:f&&Object(x.jsx)(S,{selectedPost:f,comments:E,setComments:C,isCommentLoading:L,commentsError:U})})})]})})})};s.a.render(Object(x.jsx)(w,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7a4fc15a.chunk.js.map