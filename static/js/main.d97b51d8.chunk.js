(this.webpackJsonpbookresort=this.webpackJsonpbookresort||[]).push([[0],{137:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(55),a=c.n(s),i=c(4),o=(c(68),c(2)),l=(c(69),c(0));function j(e){var t=e.children,c=e.hero;return Object(l.jsx)("header",{className:c,children:t})}function m(e){var t=e.children,c=e.title,r=e.subtitle;return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("h1",{children:c}),Object(l.jsx)("div",{}),Object(l.jsx)("p",{children:r}),t]})}var b=c(11),u=c(12),d=c(14),h=c(13);function O(e){var t=e.title;return Object(l.jsxs)("div",{className:"section-title",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsx)("div",{})]})}var p=c(15),x=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={services:[{icon:Object(l.jsx)(p.c,{}),title:"free Cocktails",info:"access free cocktails as a complementry of your service"},{icon:Object(l.jsx)(p.d,{}),title:"Hiking direction",info:"access free cocktails as a complementry of your service"},{icon:Object(l.jsx)(p.e,{}),title:"shuttle van",info:"Use complementry shuttle van with booking for reach our selected destinations"},{icon:Object(l.jsx)(p.b,{}),title:"free beer",info:"access free beer as a complementry of your service"}]},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("section",{className:"services",children:[Object(l.jsx)(O,{title:"services"}),Object(l.jsx)("div",{className:"services-center",children:this.state.services.map((function(e,t){return Object(l.jsxs)("article",{className:"service",children:[Object(l.jsx)("span",{children:e.icon}),Object(l.jsx)("h6",{children:e.title}),Object(l.jsx)("p",{children:e.info})]},t)}))})]})}}]),c}(r.Component),f=c(18),v=c(23),g=c(19),y=c.n(g),N=c(16),k=c(56),C=(c.p,c.p,c.p,c.p,c.p+"static/media/room-1.05b90599.jpeg"),z=(c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c(57)),R=Object(z.createClient)({space:"c3luhxtbp5vh",accessToken:"rI5V9pwewefXmdXtiKaN6T7IF1Ni3tSOazRW4kyKNG8"}),S=n.a.createContext(),w=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:(!0).slug,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1},e.getData=Object(k.a)(y.a.mark((function t(){var c,r,n,s,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.getEntries({content_type:"resort",order:"sys.createdAt"});case 3:c=t.sent,r=e.formateData(c.items),n=r.filter((function(e){return!0===e.featured})),s=Math.max.apply(Math,Object(N.a)(r.map((function(e){return e.price})))),a=Math.max.apply(Math,Object(N.a)(r.map((function(e){return e.size})))),e.setState({rooms:r,featuredRooms:n,sortedRooms:r,loading:!1,price:s,maxPrice:s,maxSize:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.getRoom=function(t){return Object(N.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var c=t.target,r="checkbox"===c.type?c.checked:c.value,n=t.target.name;e.setState(Object(v.a)({},n,r),e.filerRooms)},e.filerRooms=function(){var t=e.state,c=t.rooms,r=t.type,n=t.capacity,s=t.price,a=t.minSize,i=t.maxSize,o=t.breakfast,l=t.pets,j=Object(N.a)(c);n=parseInt(n),s=parseInt(s),"all"!=r&&(j=j.filter((function(e){return e.type===r}))),1!=n&&(j=j.filter((function(e){return e.capacity>=n}))),j=(j=j.filter((function(e){return e.price<=s}))).filter((function(e){return e.size>=a&&e.size<=i})),o&&(j=j.filter((function(e){return!0===e.breakfast}))),l&&(j=j.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:j})},e}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formateData",value:function(e){return e.map((function(e){var t=e.sys.id,c=e.fields.images.map((function(e){return e.fields.file.url}));return Object(f.a)(Object(f.a)({},e.fields),{},{images:c,id:t})}))}},{key:"render",value:function(){return Object(l.jsx)(S.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),c}(r.Component),F=S.Consumer;var P=c.p+"static/media/loading-arrow.dd29210f.gif";function T(){return Object(l.jsxs)("div",{className:"loading",children:[Object(l.jsx)("h4",{children:" Rooms Data Loading...."}),Object(l.jsx)("img",{src:P})]})}function D(e){var t=e.room,c=t.name,r=t.slug,n=t.images,s=t.price;return Object(l.jsxs)("article",{className:"room",children:[Object(l.jsxs)("div",{className:"img-container",children:[Object(l.jsx)("img",{src:n[0]||C,alt:"single room"}),Object(l.jsxs)("div",{className:"price-top",children:[Object(l.jsxs)("h6",{children:["$",s,"   "]}),Object(l.jsx)("p",{children:" Per night "})]}),Object(l.jsx)(i.b,{to:"/rooms/".concat(r),className:"btn-primary  room-link",children:"Features"})]}),Object(l.jsx)("p",{className:"room-info",children:c})]})}var M=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=this.context,t=e.loading,c=e.featuredRooms;return c=c.map((function(e){return Object(l.jsx)(D,{room:e},e.id)})),Object(l.jsxs)("section",{className:"featured-rooms",children:[Object(l.jsx)(O,{title:"featured rooms"}),Object(l.jsx)("div",{className:"featured-rooms-center",children:t?Object(l.jsx)(T,{}):c})]})}}]),c}(r.Component);function I(){return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(j,{children:Object(l.jsx)(m,{title:"Luxurious    rooms",subtitle:"delux rooms starting at $299",children:Object(l.jsx)(i.b,{to:"/rooms",className:"btn-primary",children:"our rooms"})})}),Object(l.jsx)(x,{}),Object(l.jsx)(M,{})]})}M.contextType=S,j.defaultProps={hero:"defaultHero"};var A=function(e,t){return Object(N.a)(new Set(e.map((function(e){return e[t]}))))};function B(e){var t=e.rooms,c=Object(r.useContext)(S),n=c.handleChange,s=c.type,a=c.capacity,i=c.price,o=c.minPrice,j=c.maxPrice,m=c.minSize,b=c.maxSize,u=(c.breakfast,c.pets,A(t,"type"));u=(u=["all"].concat(Object(N.a)(u))).map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}));var d=A(t,"capacity");return d=d.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)})),Object(l.jsxs)("section",{className:"filter-container",children:[Object(l.jsx)(O,{title:"search rooms"}),Object(l.jsxs)("form",{className:"filter-form",children:[Object(l.jsxs)("div",{htmlFor:"form-group",children:[Object(l.jsx)("label",{htmlFor:"type",children:"Room Type"}),Object(l.jsx)("select",{name:"type",id:"type",value:s,className:"form-control",onChange:n,children:u})]}),Object(l.jsxs)("div",{htmlFor:"form-group",children:[Object(l.jsx)("label",{htmlFor:"capacity",children:"Guest"}),Object(l.jsx)("select",{name:"capacity",id:"capacity",value:a,className:"form-control",onChange:n,children:d})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("lable",{htmlFor:"price",children:["Room Price $",i]}),Object(l.jsx)("input",{type:"range",name:"price",min:o,max:j,id:"price",value:i,onChange:n,className:"form-control"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("lable",{className:"size",children:"Room Size"}),Object(l.jsxs)("div",{className:"size-inputs",children:[Object(l.jsx)("input",{type:"number",name:"minSize",id:"size",value:m,onChange:n,className:"size-input"}),Object(l.jsx)("input",{type:"number",name:"maxSize",id:"size",value:b,onChange:n,className:"size-input"})]})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("div",{className:"single-extra",children:[Object(l.jsx)("input",{type:"checkbox",name:"breakfast",id:"breakfast",onChange:n}),Object(l.jsx)("lable",{htmlFor:"breakfast",children:" Breakfast"})]}),Object(l.jsxs)("div",{className:"single-extra",children:[Object(l.jsx)("input",{type:"checkbox",name:"pets",id:"pets",onChange:n}),Object(l.jsx)("lable",{htmlFor:"pets",children:" Pets"})]})]})]})]})}function H(e){var t=e.rooms;return 0===t.length?Object(l.jsx)("div",{className:"empty-search",children:Object(l.jsx)("h3",{children:" Unfortunately no rooms matched with serach parameter"})}):Object(l.jsx)("section",{className:"roomslist",children:Object(l.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(l.jsx)(D,{room:e},e.id)}))})})}var $,E=($=function(e){var t=e.context,c=t.loading,r=t.sortedRooms,s=t.rooms;return c?Object(l.jsx)(T,{}):Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(B,{rooms:s}),Object(l.jsx)(H,{rooms:r})]})},function(e){return Object(l.jsx)(F,{children:function(t){return Object(l.jsx)($,Object(f.a)(Object(f.a)({},e),{},{context:t}))}})});function G(){return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(j,{hero:"roomsHero",children:Object(l.jsx)(m,{title:"our rooms",children:Object(l.jsx)(i.b,{to:"/",className:"btn-primary",children:"return home"})})}),Object(l.jsx)(E,{})]})}var J,K=c(63),L=c(59),U=c(33).a.header(J||(J=Object(L.a)(["\n    min-height: 60vh;\n    background: url(",") center/cover no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    "])),(function(e){return e.img})),X=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var r;return Object(b.a)(this,c),(r=t.call(this,e)).state={slug:r.props.match.params.slug,defaultBcg:C},r}return Object(u.a)(c,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("h3",{children:" no such room could be found"}),Object(l.jsx)(i.b,{to:"/rooms",className:"btn-primary",children:"back to rooms"})]});var t=e.name,c=e.description,r=e.capacity,s=e.size,a=e.price,o=e.extras,j=e.breakfast,b=e.pets,u=e.images,d=Object(K.a)(u);d[0],d.slice(1);return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(U,{img:u[0],children:Object(l.jsx)(m,{title:"".concat(t," room"),children:Object(l.jsx)(i.b,{to:"/rooms",className:"btn-primary",children:"back to rooms"})})}),Object(l.jsxs)("section",{className:"single-room",children:[Object(l.jsx)("div",{className:"single-room-images",children:u.map((function(e,c){return Object(l.jsx)("img",{src:e,alt:t},c)}))}),Object(l.jsxs)("div",{className:"single-room-info",children:[Object(l.jsxs)("article",{className:"desc",children:[Object(l.jsx)("h3",{children:"details"}),Object(l.jsx)("p",{children:c})]}),Object(l.jsxs)("article",{className:"info",children:[Object(l.jsx)("h3",{children:"info"}),Object(l.jsxs)("h6",{children:["Price: $",a]}),Object(l.jsxs)("h6",{children:["Size: ",s," SQFT"]}),Object(l.jsxs)("h6",{children:["Max Capacity : ","".concat(r,r>1?" people":"  person")," "]}),Object(l.jsxs)("h6",{children:[" ",b?"pets allowed":"No pets allowed"]}),Object(l.jsxs)("h6",{children:["Breakfast :",j&&"free breakfast included"]})]})]})]}),Object(l.jsxs)("section",{className:"room-extras",children:[Object(l.jsx)("h6",{children:" extras "}),Object(l.jsx)("ul",{className:"extras",children:o.map((function(e,t){return Object(l.jsxs)("li",{children:[" -",e]},t)}))})]})]})}}]),c}(r.Component);function Q(){return Object(l.jsx)(j,{children:Object(l.jsx)(m,{title:"404",subtitle:"page not found",children:Object(l.jsx)(i.b,{to:"/",className:"btn-primary",children:" return home"})})})}X.contextType=S;var V=c.p+"static/media/logo.87947b58.svg",W=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"nav-center",children:[Object(l.jsxs)("div",{className:"nav-header",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("img",{src:V,alt:"logo"})}),Object(l.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(l.jsx)(p.a,{className:"nav-icon"})})]}),Object(l.jsxs)("ul",{className:this.state.isOpen?"nav-links  show-nav":"nav-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/rooms",children:"Rooms"})})]})]})})}}]),c}(r.Component);var _=function(){return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(W,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:I}),Object(l.jsx)(o.a,{exact:!0,path:"/rooms",component:G}),Object(l.jsx)(o.a,{exact:!0,path:"/rooms/:slug",component:X}),Object(l.jsx)(o.a,{component:Q})]})]})};a.a.render(Object(l.jsx)(w,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(_,{})})}),document.getElementById("root"))},34:function(e,t){},68:function(e,t,c){},69:function(e,t,c){},99:function(e,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.d97b51d8.chunk.js.map