import{Z as ye,$ as xe,r as p,a0 as U,a1 as q,a2 as Y,a3 as N,a4 as ge,b as ie,a5 as X,j as l,a6 as H,a7 as K,X as Pe,h as ve,a8 as oe,J as Ie,a9 as we,aa as be,ab as D,ac as je,ad as V,ae as Se,af as _e,ag as ke,ah as Ee,ai as Ce,aj as Te,ak as Re,al as De,am as $e,an as ze,ao as Le,ap as le,aq as Me,ar as T,i as O,as as A,at as W,k as L,l as de,H as Ne,S as J,T as k,m as Z,o as M,au as ue,av as Oe,aw as Ae,ax as Be,ay as Ve,az as We,D as ee,F as te,aA as Fe,aB as Ge,aC as ne,aD as Q,aE as He,aF as Ke,aG as Je,aH as Ue,aI as ce,aJ as qe,aK as Ye,aL as Qe,aM as Xe,aN as Ze,aO as $,aP as et,aQ as tt,aR as nt,aS as at}from"./sanity-76bfbdb2.js";function rt(){return ye(function(e,n){var t,o=!1;e.subscribe(xe(n,function(s){var i=t;t=s,o&&n.next([i,s]),o=!0}))})}const st=[];function it(e){const{children:n,flatIndex:t,index:o,params:s,payload:i,siblingIndex:a}=e,{navigate:r,navigateIntent:d,resolvePathFromState:y}=U(),u=q(),{panes:m,expand:f}=Te(),c=p.useMemo(()=>(u==null?void 0:u.panes)||st,[u==null?void 0:u.panes]),h=p.useMemo(()=>m==null?void 0:m[m.length-2],[m]),g=o-1,b=p.useCallback(x=>{const v=c[g]||[],w=v[a],E=x(v,w),fe=[...c.slice(0,g),E,...c.slice(g+1)];return{...u||{},panes:fe}},[g,c,u,a]),I=p.useCallback(x=>{const v=b(x);return setTimeout(()=>r(v),0),v},[b,r]),S=p.useCallback(x=>{const v=b((w,E)=>[...w.slice(0,a),{...E,params:x},...w.slice(a+1)]);return y(v)},[b,y,a]),_=p.useCallback(x=>{I((v,w)=>[...v.slice(0,a),{...w,payload:x},...v.slice(a+1)])},[I,a]),P=p.useCallback(x=>{I((v,w)=>[...v.slice(0,a),{...w,params:x},...v.slice(a+1)])},[I,a]),j=p.useCallback(({id:x,parentRefPath:v,type:w,template:E})=>{r({panes:[...c.slice(0,g+1),[{id:x,params:{template:E.id,parentRefPath:Re(v),type:w},payload:E.params}]]})},[g,r,c]),C=p.useMemo(()=>({index:t,groupIndex:g,siblingIndex:a,payload:i,params:s,hasGroupSiblings:c[g]?c[g].length>1:!1,groupLength:c[g]?c[g].length:0,routerPanesState:c,ChildLink:De,BackLink:t?$e:void 0,ReferenceChildLink:ze,handleEditReference:j,ParameterizedLink:Le,replaceCurrent:(x={})=>{I(()=>[{id:x.id||"",payload:x.payload,params:x.params||{}}])},closeCurrent:()=>{I((x,v)=>x.length>1?x.filter(w=>w!==v):x)},closeCurrentAndAfter:(x=!0)=>{x&&h&&f(h.element),r({panes:[...c.slice(0,g)]},{replace:!0})},duplicateCurrent:x=>{I((v,w)=>{const E={...w,payload:(x==null?void 0:x.payload)||w.payload,params:(x==null?void 0:x.params)||w.params};return[...v.slice(0,a),E,...v.slice(a)]})},setView:x=>{const v=le(s,"view");return P(x?{...v,view:x}:v)},setParams:P,setPayload:_,createPathWithParams:S,navigateIntent:d}),[t,g,a,i,s,c,j,P,_,S,d,I,h,r,f]);return l.jsx(Me.Provider,{value:C,children:n})}var ot=Object.defineProperty,lt=(e,n,t)=>n in e?ot(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,F=(e,n,t)=>lt(e,typeof n!="symbol"?n+"":n,t);class R extends Error{constructor({message:n,context:t,helpId:o,cause:s}){super(n),F(this,"cause"),F(this,"context"),F(this,"helpId"),this.name="PaneResolutionError",this.context=t,this.helpId=o,this.cause=s}}const ae=new WeakMap;function B(e){const n=ae.get(e);if(n)return n;const t=tt();return ae.set(e,t),t}const dt=e=>!!e&&typeof(e==null?void 0:e.then)=="function",ut=e=>Y(e)?typeof e.serialize=="function":!1,ct=e=>(n,t,o)=>{try{return e(n,t,o)}catch(s){throw s instanceof R?s:new R({message:typeof(s==null?void 0:s.message)=="string"?s.message:"",context:t,cause:s})}},pt=e=>(...n)=>e(...n).pipe(nt(1),at());function pe(e){const n=ct(pt(e((t,o,s)=>{if(!t)throw new R({message:"Pane returned no child",context:o,helpId:"structure-item-returned-no-child"});return dt(t)||Xe(t)?Ze(t).pipe(Q(i=>n(i,o,s))):ut(t)?n(t.serialize(o),o,s):typeof t=="function"?n(t(o.id,o),o,s):$(t)})));return n}const re=new WeakMap;function he(e,n){const t=re.get(e)||new Map;if(t){const i=t.get(n);if(i)return i}const o=e[n];if(typeof o!="function")throw new Error(`Expected property \`${n}\` to be a function but got ${typeof o} instead.`);const s=o.bind(e);return t.set(n,s),re.set(e,t),s}async function ht(e){const n=new Map,t=pe(a=>(r,d,y)=>{const u=r&&`${B(r)}-${d.path.join("__")}`,m=u&&n.get(u);if(m)return m;const f=a(r,d,y);return u&&n.set(u,f),f}),o=[[{id:`__edit__${e.params.id}`,params:{...le(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function s({currentId:a,flatIndex:r,intent:d,params:y,parent:u,path:m,payload:f,unresolvedPane:c,levelIndex:h,structureContext:g}){var b;if(!c)return[];const{id:I,type:S,..._}=y,P=await ce(t(c,{id:a,splitIndex:0,parent:u,path:m,index:r,params:{},payload:void 0,structureContext:g},r));return P.type==="document"&&P.id===I?[{panes:[...m.slice(0,m.length-1).map(j=>[{id:j}]),[{id:I,params:_,payload:f}]],depthIndex:m.length,levelIndex:h}]:(b=P.canHandleIntent)!=null&&b.call(P,d,y,{pane:P,index:r})||P.type==="documentList"&&P.schemaTypeName===S&&P.options.filter==="_type == $type"?[{panes:[...m.map(j=>[{id:j}]),[{id:y.id,params:_,payload:f}]],depthIndex:m.length,levelIndex:h}]:P.type==="list"&&P.child&&P.items?(await Promise.all(P.items.map((j,C)=>j.type==="divider"?Promise.resolve([]):s({currentId:j._id||j.id,flatIndex:r+1,intent:d,params:y,parent:P,path:[...m,j.id],payload:f,unresolvedPane:typeof P.child=="function"?he(P,"child"):P.child,levelIndex:C,structureContext:g})))).flat():[]}const i=(await s({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,r)=>a.depthIndex===r.depthIndex?a.levelIndex-r.levelIndex:a.depthIndex-r.depthIndex)[0];return i?i.panes:o}const mt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:o,payload:s,structureContext:{resolveDocumentNode:i}}=n,{type:a,template:r}=o;if(!a)throw new Error(`Document type for document with ID ${t} was not provided in the router params.`);let d=i({schemaType:a,documentId:t}).id("editor");return r&&(d=d.initialValueTemplate(r,s)),d.serialize()};function ft(e){var n,t;return`contextHash(${JSON.stringify({id:e.id,parentId:parent&&B(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path})})`}const se=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?B(e.paneNode):null};return`metaHash(${JSON.stringify(n)})`};function z({unresolvedPane:e,flattenedRouterPanes:n,parent:t,path:o,resolvePane:s,structureContext:i}){const[a,...r]=n,d=r[0],y={id:a.routerPaneSibling.id,splitIndex:a.siblingIndex,parent:t,path:[...o,a.routerPaneSibling.id],index:a.flatIndex,params:a.routerPaneSibling.params||{},payload:a.routerPaneSibling.payload,structureContext:i};try{return s(e,y,a.flatIndex).pipe(Q(u=>{const m={type:"resolvedMeta",...a,paneNode:u,path:y.path},f=r.map((h,g)=>({type:"loading",path:[...y.path,...r.slice(g).map((b,I)=>`[${h.flatIndex+I}]`)],paneNode:null,...h}));if(!r.length)return $([m]);let c;return d!=null&&d.routerPaneSibling.id.startsWith("__edit__")?c=z({unresolvedPane:mt,flattenedRouterPanes:r,parent:t,path:y.path,resolvePane:s,structureContext:i}):a.groupIndex===(d==null?void 0:d.groupIndex)?c=z({unresolvedPane:e,flattenedRouterPanes:r,parent:t,path:o,resolvePane:s,structureContext:i}):c=z({unresolvedPane:typeof u.child=="function"?he(u,"child"):u.child,flattenedRouterPanes:r,parent:u,path:y.path,resolvePane:s,structureContext:i}),et($([m,...f]),c.pipe(T(h=>[m,...h])))}))}catch(u){if(u instanceof R&&(u.context&&console.warn(`Pane resolution error at index ${u.context.index}${u.context.splitIndex>0?` for split pane index ${u.context.splitIndex}`:""}: ${u.message}${u.helpId?` - see ${ue(u.helpId)}`:""}`,u),u.helpId==="structure-item-returned-no-child"))return $([]);throw u}}function yt({routerPanesStream:e,rootPaneNode:n,initialCacheState:t={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>Ke},structureContext:o}){return e.pipe(T(s=>[[{id:"root"}],...s]),T(s=>s.flatMap((i,a)=>i.map((r,d)=>({routerPaneSibling:r,groupIndex:a,siblingIndex:d}))).map((i,a)=>({...i,flatIndex:a}))),Ge([]),rt(),T(([s,i])=>{for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(!K(r,d))return{flattenedRouterPanes:i,diffIndex:a}}return{flattenedRouterPanes:i,diffIndex:i.length}}),ne((s,i)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:r}=s,{flattenedRouterPanes:d,diffIndex:y}=i,u=a.slice(0,y+1),m=a.slice(y+1),f=new Set(u.flatMap(h=>Array.from(h))),c=m.flatMap(h=>Array.from(h)).filter(h=>!f.has(h));for(const h of c)r.delete(h);return{flattenedRouterPanes:d,cacheKeysByFlatIndex:a,resolvedPaneCache:r,resolvePane:pe(h=>(g,b,I)=>{const S=g&&`${B(g)}-${ft(b)}`,_=S&&r.get(S);if(_)return _;const P=h(g,b,I);if(!S)return P;const j=a[I]||new Set;return j.add(S),a[I]=j,r.set(S,P),P})}},t),Q(({flattenedRouterPanes:s,resolvePane:i})=>z({unresolvedPane:n,flattenedRouterPanes:s,parent:null,path:[],resolvePane:i,structureContext:o}))).pipe(ne((s,i)=>i.map((a,r)=>{const d=s[r];return!d||a.type!=="loading"?a:d.routerPaneSibling.id===a.routerPaneSibling.id?d:a}),[]),He((s,i)=>{if(s.length!==i.length)return!1;for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(se(r)!==se(d))return!1}return!0}))}function xt(){const e=p.useMemo(()=>new Je(1),[]),n=p.useMemo(()=>e.asObservable().pipe(T(o=>(o==null?void 0:o.panes)||[])),[e]),{state:t}=U();return p.useEffect(()=>{e.next(t)},[t,e]),n}function gt(){const[e,n]=p.useState();if(e)throw e;const{structureContext:t,rootPaneNode:o}=N(),[s,i]=p.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),a=xt();return p.useEffect(()=>{const r=yt({rootPaneNode:o,routerPanesStream:a,structureContext:t}).pipe(T(d=>{const y=d.reduce((f,c)=>{const h=f[c.groupIndex]||[];return h[c.siblingIndex]=c.routerPaneSibling,f[c.groupIndex]=h,f},[]),u=y.length,m=d.map(f=>{var c;const{groupIndex:h,flatIndex:g,siblingIndex:b,routerPaneSibling:I,path:S}=f,_=I.id,P=y[h+1];return{active:h===u-2,childItemId:(c=P==null?void 0:P[0].id)!=null?c:null,index:g,itemId:I.id,groupIndex:h,key:`${f.type==="loading"?"unknown":f.paneNode.id}-${_}-${b}`,pane:f.type==="loading"?D:f.paneNode,params:I.params||{},path:S.join(";"),payload:I.payload,selected:g===d.length-1,siblingIndex:b}});return{paneDataItems:m,routerPanes:y,resolvedPanes:m.map(f=>f.pane)}})).subscribe({next:d=>i(d),error:d=>n(d)});return()=>r.unsubscribe()},[o,a,t]),s}async function Pt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:Ue(),type:t};if(n&&!t){const o=await ce(e.resolveTypeForDocument(n));return{id:n,type:o}}throw new R({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const vt={},It=p.memo(function(){const{navigate:e}=U(),n=q(p.useCallback(r=>{const d=typeof r.intent=="string"?r.intent:void 0;return d?{intent:d,params:Y(r.params)?r.params:vt,payload:r.payload}:void 0},[])),{rootPaneNode:t,structureContext:o}=N(),s=ge(),[i,a]=p.useState(null);if(i)throw i;return p.useEffect(()=>{if(n){const{intent:r,params:d,payload:y}=n;let u=!1;async function m(){const{id:f,type:c}=await Pt(s,typeof d.id=="string"?d.id:void 0,typeof d.type=="string"?d.type:void 0);if(u)return;const h=await ht({intent:r,params:{...d,id:f,type:c},payload:y,rootPaneNode:t,structureContext:o});u||e({panes:h},{replace:!0})}return m().catch(a),()=>{u=!0}}},[s,n,e,t,o]),null}),wt=ie.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;function bt(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`,"g")," (")}function jt({error:e}){if(!(e instanceof R))throw e;const{cause:n}=e,{t}=O(A),o=(n==null?void 0:n.stack)||e.stack,s=o&&!(n instanceof W)&&!e.message.includes("Module build failed:"),i=n instanceof W?n.path:[],a=n instanceof W&&n.helpId||e.helpId,r=p.useCallback(()=>{window.location.reload()},[]);return l.jsx(L,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:l.jsxs(de,{children:[l.jsx(Ne,{as:"h2",children:t("structure-error.header.text")}),l.jsxs(L,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[i.length>0&&l.jsxs(J,{space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.structure-path.label")}),l.jsx(Z,{children:i.slice(1).map((d,y)=>l.jsx(wt,{children:d},`${d}-${y}`))})]}),l.jsxs(J,{marginTop:4,space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.error.label")}),l.jsx(Z,{children:s?bt(o):e.message})]}),a&&l.jsx(M,{marginTop:4,children:l.jsx(k,{children:l.jsx("a",{href:ue(a),rel:"noopener noreferrer",target:"_blank",children:t("structure-error.docs-link.text")})})}),l.jsx(M,{marginTop:4,children:l.jsx(Oe,{text:t("structure-error.reload-button.text"),icon:Ae,tone:"primary",onClick:r})})]})]})})}function St(e){const{isSelected:n,pane:t,paneKey:o}=e,s=Y(t)&&t.type||null,{t:i}=O(A);return l.jsxs(Be,{id:o,selected:n,children:[l.jsx(Ve,{title:i("panes.unknown-pane-type.title")}),l.jsx(We,{children:l.jsx(M,{padding:4,children:typeof s=="string"?l.jsx(k,{as:"p",muted:!0,children:l.jsx(ee,{t:i,i18nKey:"panes.unknown-pane-type.unknown-type.text",values:{type:s}})}):l.jsx(k,{as:"p",muted:!0,children:l.jsx(ee,{t:i,i18nKey:"panes.unknown-pane-type.missing-type.text"})})})})]})}const _t={component:p.lazy(()=>X(()=>import("./index-a2d2d283.js"),["static/index-a2d2d283.js","static/sanity-76bfbdb2.js"])),document:p.lazy(()=>Promise.resolve().then(function(){return Mt})),documentList:p.lazy(()=>Promise.resolve().then(function(){return Nt})),list:p.lazy(()=>X(()=>import("./index2-52e06893.js"),["static/index2-52e06893.js","static/sanity-76bfbdb2.js"]))},kt=p.memo(function(e){const{active:n,childItemId:t,groupIndex:o,index:s,itemId:i,pane:a,paneKey:r,params:d,payload:y,path:u,selected:m,siblingIndex:f}=e,c=_t[a.type]||St;return l.jsx(it,{flatIndex:s,index:o,params:d,payload:y,siblingIndex:f,children:l.jsx(p.Suspense,{fallback:l.jsx(H,{paneKey:r,path:u,selected:m}),children:l.jsx(c,{childItemId:t||"",index:s,itemId:i,isActive:n,isSelected:m,paneKey:r,pane:a})})})},({params:e={},payload:n=null,...t},{params:o={},payload:s=null,...i})=>{if(!K(e,o)||!K(n,s))return!1;const a=new Set([...Object.keys(t),...Object.keys(i)]);for(const r of a)if(t[r]!==i[r])return!1;return!0});function Et(){const{t:e}=O(A);return l.jsx(L,{height:"fill",children:l.jsx(te,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:l.jsx(de,{width:0,children:l.jsx(L,{padding:4,radius:2,shadow:1,tone:"caution",children:l.jsxs(te,{children:[l.jsx(M,{children:l.jsx(k,{size:1,children:l.jsx(Fe,{})})}),l.jsxs(J,{flex:1,marginLeft:3,space:3,children:[l.jsx(k,{as:"h1",size:1,weight:"medium",children:e("no-document-types-screen.title")}),l.jsx(k,{as:"p",muted:!0,size:1,children:e("no-document-types-screen.subtitle")}),l.jsx(k,{as:"p",muted:!0,size:1,children:l.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:e("no-document-types-screen.link-text")})})]})]})})})})})}const Ct=e=>{const{documentId:n,documentType:t}=e,o=qe(n,t),s=oe(),{t:i}=O(A),a=!(o!=null&&o.published)&&!(o!=null&&o.draft),r=(o==null?void 0:o.draft)||(o==null?void 0:o.published),d=s.get(t),{value:y,isLoading:u}=Ye({enabled:!0,schemaType:d,value:r}),m=a?i("browser-document-title.new-document",{schemaType:(d==null?void 0:d.title)||(d==null?void 0:d.name)}):(y==null?void 0:y.title)||i("browser-document-title.untitled-document"),f=o.ready&&!u,c=me(m);return p.useEffect(()=>{f&&(document.title=c)},[m,f,c]),null},G=e=>{const{title:n}=e,t=me(n);return p.useEffect(()=>{document.title=t},[t,n]),null},Tt=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return Dt(t)?l.jsx(G,{}):Rt(t)?t!=null&&t.title?l.jsx(G,{title:t.title}):l.jsx(Ct,{documentId:t.options.id,documentType:t.options.type}):l.jsx(G,{title:t==null?void 0:t.title})};function me(e){const n=N().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function Rt(e){return e!==D&&e.type==="document"}function Dt(e){return e===D}const $t=ie(Qe)`
  min-height: 100%;
  min-width: 320px;
`,zt=Pe("mod+s"),Lt=p.memo(function({onPaneChange:e}){var n;const{push:t}=ve(),o=oe(),{layoutCollapsed:s,setLayoutCollapsed:i}=N(),{paneDataItems:a,resolvedPanes:r}=gt(),d=q(p.useCallback(h=>typeof h.intent=="string",[])),{sanity:{media:y}}=Ie(),[u,m]=p.useState(null),f=p.useCallback(()=>i(!0),[i]),c=p.useCallback(()=>i(!1),[i]);return p.useEffect(()=>{r.length&&e(r)},[e,r]),p.useEffect(()=>{const h=g=>{zt(g)&&(g.preventDefault(),t({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]),(n=o._original)!=null&&n.types.some(we)?l.jsxs(be,{element:u||null,children:[l.jsxs($t,{flex:1,height:s?void 0:"fill",minWidth:y[1],onCollapse:f,onExpand:c,children:[a.map(({active:h,childItemId:g,groupIndex:b,itemId:I,key:S,pane:_,index:P,params:j,path:C,payload:x,siblingIndex:v,selected:w})=>l.jsx(p.Fragment,{children:_===D?l.jsx(H,{paneKey:S,path:C,selected:w}):l.jsx(kt,{active:h,groupIndex:b,index:P,pane:_,childItemId:g,itemId:I,paneKey:S,params:j,payload:x,path:C,selected:w,siblingIndex:v})},`${_===D?"loading":_.type}-${P}`)),a.length<=1&&d&&l.jsx(H,{paneKey:"intent-resolver"})]}),l.jsx(Tt,{resolvedPanes:r}),l.jsx("div",{"data-portal":"",ref:m})]}):l.jsx(Et,{})});function At({tool:{options:e}}){const{unstable_sources:n}=je(),[t]=n,{source:o,defaultDocumentNode:s,structure:i}=e||{};p.useEffect(()=>(V([]),()=>V([])),[]);const[{error:a},r]=p.useState({error:null});return a?l.jsx(jt,{error:a}):l.jsx(Se,{onCatch:r,children:l.jsx(_e,{name:o||t.name,children:l.jsxs(ke,{defaultDocumentNode:s,structure:i,children:[l.jsx(Lt,{onPaneChange:V}),l.jsx(It,{})]})})})}var Mt=Object.freeze({__proto__:null,default:Ee}),Nt=Object.freeze({__proto__:null,default:Ce});export{At as default};
