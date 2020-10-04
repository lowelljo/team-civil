(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(11),u=a(59),i=a(55),m=function(e){var t=e.setTooltipContent;return r.a.createElement("div",{style:{margin:"auto",width:"90%",marginTop:"0vh",position:"absolute"}},r.a.createElement(i.ComposableMap,{projection:"geoEqualEarth","data-tip":"",projectionConfig:{scale:170}},r.a.createElement(i.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(i.Geography,{key:e.rsmKey,geography:e,stroke:"#FFF",strokeWidth:.5,onMouseEnter:function(){var a=e.properties.NAME;t("".concat(a))},onMouseLeave:function(){t("")},style:{default:{fill:"#bbd4bb",outline:"none"},hover:{fill:"#5a6e5a",outline:"none"},pressed:{fill:"#abd6ab",outline:"none"}}})}))}))))},s=a(155),p=a(178),d=a(157),E=a(159),b=a(160),f=a(158),h=a(80),y=a.n(h),g=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function v(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(y.a,null)),r.a.createElement(E.a,{variant:"h6",className:e.title},"News"),r.a.createElement(b.a,{color:"inherit"},"Login"))))}var O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(m,{setTooltipContent:c}),r.a.createElement(u.a,null,a))},j=a(38),C=a(39),_=a(42),k=a(40),S=a(161),w=a(164),N=a(165),T=a(166),D=a(22),x=a(30),R=a(56),M=a.n(R),Y=function(){return function(e){e(A()),M.a.get("/api/countries").then((function(t){return e({type:"GET_COUNTRY",payload:t.data})}))}},A=function(){return{type:"ITEMS_LOADING"}},G=a(162),L=a(163),B=function(e){Object(_.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDeleteClick=function(t){e.props.deleteCountry(t)},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.getCountry()}},{key:"render",value:function(){var e=this,t=this.props.country.countries,a=this.props.country.loading;return r.a.createElement(S.a,null,a?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(G.a,{color:"light"},r.a.createElement("span",{style:{fontSize:24,display:"inline-block",marginRight:20}},"Loading"),r.a.createElement(L.a,{color:"primary"}))):r.a.createElement(w.a,null,r.a.createElement(D.TransitionGroup,{className:"country-list"},t.map((function(t){var a=t._id,n=t.name;return r.a.createElement(D.CSSTransition,{key:a,timeout:500,classNames:"fade"},r.a.createElement(N.a,null,n,r.a.createElement("div",{style:{float:"right"}},r.a.createElement(T.a,{className:"remove-btn",color:"warning",size:"sm"},"edit"),r.a.createElement(T.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"delete"))))})))))}}]),a}(n.Component),U=Object(x.b)((function(e){return{country:e.country}}),{getCountry:Y,deleteCountry:function(e){return function(t){M.a.delete("/api/countries/".concat(e)).then((function(a){return t({type:"DELETE_COUNTRY",payload:e})}))}}})(B),F=a(177),I=a(167),z=a(168),W=a(169),J=a(170),q=a(171),K=a(172),P=Object(x.b)((function(e){return{country:e.country}}),{addCountry:function(e){return function(t){M.a.post("/api/countries",e).then((function(e){return t({type:"ADD_COUNTRY",payload:e.data})}))}}})((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),m=i[0],s=i[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),E=d[0],b=d[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),y=h[0],g=h[1],v=Object(n.useState)(!0),O=Object(l.a)(v,2),j=O[0],C=O[1],_=Object(n.useState)(""),k=Object(l.a)(_,2),S=k[0],w=k[1],N=Object(n.useState)(!0),D=Object(l.a)(N,2),x=D[0],R=D[1],M=Object(n.useState)(""),Y=Object(l.a)(M,2),A=Y[0],G=Y[1],L=Object(n.useState)(!0),B=Object(l.a)(L,2),U=B[0],P=B[1],$=Object(n.useState)(""),H=Object(l.a)($,2),Q=H[0],V=H[1],X=Object(n.useState)(""),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(0),ne=Object(l.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)(0),le=Object(l.a)(oe,2),ue=le[0],ie=le[1],me=Object(n.useState)([]),se=Object(l.a)(me,2),pe=se[0],de=se[1],Ee=function(){o(!c)};return r.a.createElement("div",null,r.a.createElement(T.a,{color:"success",style:{marginBottom:"2rem"},onClick:Ee},"Add Country"),r.a.createElement(F.a,{isOpen:c,toggle:Ee},r.a.createElement(I.a,{toggle:Ee},"Create New Country"),r.a.createElement(z.a,null,r.a.createElement(W.a,{onSubmit:function(t){t.preventDefault();var a={name:m,code:E,population:y,millenium_dec:[{ratified:j,year:S}],freedom_speech:[{present:x,restrictions:A}],freedom_media:[{present:U,restrictions:Q,year:ee}],rwb_ranking:re,rwb_score:ue,sources:[pe]};e.addCountry(a),Ee()}},r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"name"},"Country"),r.a.createElement(K.a,{type:"text",name:"name",id:"name",placeholder:"Name",onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(K.a,{type:"text",name:"code",id:"code",placeholder:"Country Code",onChange:function(e){return b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(K.a,{type:"number",name:"population",id:"population",placeholder:"Population",onChange:function(e){return g(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"md_rat"},"Millenium Declaration"),r.a.createElement(K.a,{type:"select",name:"md_rat",id:"md_rat",onChange:function(e){return C(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(K.a,{type:"number",name:"md_year",id:"md_year",placeholder:"Year",onChange:function(e){return w(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"free_speech"},"Freedom of Speech"),r.a.createElement(K.a,{type:"select",name:"free_speech",id:"free_speech",onChange:function(e){return R(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(K.a,{type:"text",name:"fs_restrictions",id:"fs_restrictions",placeholder:"Restrictions",onChange:function(e){return G(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"free_media"},"Freedom of Media"),r.a.createElement(K.a,{type:"select",name:"free_media",id:"free_media",onChange:function(e){return P(e.target.value)}},r.a.createElement("option",{value:!0,selected:!0},"Yes"),r.a.createElement("option",{value:!1},"No")),r.a.createElement("br",null),r.a.createElement(K.a,{type:"text",name:"fm_restrictions",id:"fm_restrictions",placeholder:"Restrictions",onChange:function(e){return V(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(K.a,{type:"number",name:"fm_year",id:"fm_year",placeholder:"Year",onChange:function(e){return te(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"rwb_rank"},"Reporters Without Borders"),r.a.createElement(K.a,{type:"number",name:"rwb_rank",id:"rwb_rank",placeholder:"Ranking",onChange:function(e){return ce(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(K.a,{type:"number",min:"0.00",step:"0.001",max:"1000.00",name:"rwb_index",id:"rwb_index",placeholder:"Score",onChange:function(e){return ie(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(q.a,{for:"sources"},"Sources"),r.a.createElement(K.a,{type:"textarea",name:"sources",id:"sources",placeholder:"List links separated by commma",onChange:function(e){return de(e.target.value)}})),r.a.createElement(T.a,{color:"success",style:{marginTop:"2rem"},block:!0},"Save")))))})),$=a(173),H=a(174),Q=a(175),V=a(176),X=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement($.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(S.a,null,r.a.createElement(H.a,{href:"/admin"},"Admin Dashboard"),r.a.createElement(Q.a,{onClick:function(){return c(!a)}}),r.a.createElement(V.a,{isOpen:a,navbar:!0}))))},Z=function(e){Object(_.a)(a,e);var t=Object(k.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(S.a,null,r.a.createElement(P,null),r.a.createElement(U,null)))}}]),a}(n.Component),ee=function(e){Object(_.a)(a,e);var t=Object(k.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.getCountry()}},{key:"render",value:function(){var e=this.props.country.countries.map((function(e){var t=e.name;return r.a.createElement("p",null,t)}));return r.a.createElement("div",null,e)}}]),a}(n.Component),te=Object(x.b)((function(e){return{country:e.country}}),{getCountry:Y})(ee),ae=a(31),ne=a(82),re=a(84),ce=a(26),oe={countries:[],loading:!1},le=Object(ae.c)({country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTRY":return Object(ce.a)(Object(ce.a)({},e),{},{countries:t.payload,loading:!1});case"DELETE_COUNTRY":return Object(ce.a)(Object(ce.a)({},e),{},{countries:e.countries.filter((function(e){return e._id!==t.payload}))});case"ADD_COUNTRY":return Object(ce.a)(Object(ce.a)({},e),{},{countries:[t.payload].concat(Object(re.a)(e.countries))});case"ITEMS_LOADING":return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});default:return e}}}),ue=[ne.a],ie=Object(ae.e)(le,{},Object(ae.d)(ae.a.apply(void 0,ue))),me=(a(127),a(83)),se=a(10);a(79);var pe=function(){return r.a.createElement(x.a,{store:ie},r.a.createElement(me.a,{basename:""},r.a.createElement("main",null,r.a.createElement(se.c,null,r.a.createElement(se.a,{path:"/",component:O,exact:!0}),r.a.createElement(se.a,{path:"/admin",component:Z}),r.a.createElement(se.a,{path:"/deleteme",component:te})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){},93:function(e,t,a){e.exports=a(131)}},[[93,1,2]]]);
//# sourceMappingURL=main.4b4ff307.chunk.js.map