(()=>{var v=Object.defineProperty,O=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var z=(n,a,t)=>a in n?v(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,T=(n,a)=>{for(var t in a||(a={}))q.call(a,t)&&z(n,t,a[t]);if(F)for(var t of F(a))G.call(a,t)&&z(n,t,a[t]);return n},A=(n,a)=>O(n,W(a)),J=n=>v(n,"__esModule",{value:!0});var K=(n,a)=>{J(n);for(var t in a)v(n,t,{get:a[t],enumerable:!0})};var P={};K(P,{default:()=>$});var{applyCSS:Q}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.ts"],U='*{margin:0;padding:0;border:none;outline:none;font:inherit;font-size:100%;vertical-align:baseline;background:transparent}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:16px}.form-group>input[type=text]{display:inline-block;margin-top:.4rem}.btn{padding:.8rem 1rem .7rem;border:.2rem solid #4d4d4d;cursor:pointer;text-transform:capitalize}.btn.toggle-btn{border-width:1px;border-color:#d3d3d3}.btn.toggle-btn[aria-pressed=true]{text-decoration:underline;border-color:#4d4d4d}.btn__danger{color:#fff;background-color:#ca3c3c;border-color:#bd2130}.btn__filter{border-color:#d3d3d3}.btn__primary{color:#fff;background-color:#000}.btn-group{display:flex;justify-content:space-between}.btn-group>*{flex:1 1 49%}.btn-group>*+*{margin-left:.8rem}.label-wrapper{margin:0;flex:0 0 100%;text-align:center}.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);white-space:nowrap}[class*=stack]>*{margin-top:0;margin-bottom:0}.stack-small>*+*{margin-top:1.25rem}.stack-large>*+*{margin-top:2.5rem}@media screen and (min-width: 550px){.stack-small>*+*{margin-top:1.4rem}.stack-large>*+*{margin-top:2.8rem}}.stack-exception{margin-top:1.2rem}.todoapp{background:#fff;margin:2rem 0 4rem;padding:1rem;position:relative;box-shadow:0 2px 4px #0003,0 2.5rem 5rem #0000001a}@media screen and (min-width: 550px){.todoapp{padding:4rem}}.todoapp>*{max-width:50rem;margin-left:auto;margin-right:auto}.todoapp>form{max-width:100%}.todoapp>h1{display:block;max-width:100%;text-align:center;margin:0 0 1rem}.label__lg{line-height:1.01567;font-weight:300;padding:.8rem;margin-bottom:1rem;text-align:center}.input__lg{padding:2rem;border:2px solid #000}.input__lg:focus{border-color:#4d4d4d;box-shadow:inset 0 0 0 2px}[class*=__lg]{display:inline-block;width:100%;font-size:1.9rem}[class*=__lg]:not(:last-child){margin-bottom:1rem}@media screen and (min-width: 620px){[class*=__lg]{font-size:2.4rem}}.filters{width:100%;margin:unset auto}.todo{display:flex;flex-direction:row;flex-wrap:wrap}.todo>*{flex:0 0 100%}.todo-text{width:100%;min-height:4.4rem;padding:.4rem .8rem;border:2px solid #565656}.todo-text:focus{box-shadow:inset 0 0 0 2px}.c-cb{box-sizing:border-box;font-family:Arial,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400;font-size:1.6rem;line-height:1.25;display:block;position:relative;min-height:44px;padding-left:40px;clear:left}.c-cb>label:before,.c-cb>input[type=checkbox]{box-sizing:border-box;top:-2px;left:-2px;width:44px;height:44px}.c-cb>input[type=checkbox]{-webkit-font-smoothing:antialiased;cursor:pointer;position:absolute;z-index:1;margin:0;opacity:0}.c-cb>label{font-size:inherit;font-family:inherit;line-height:inherit;display:inline-block;margin-bottom:0;padding:8px 15px 5px;cursor:pointer;touch-action:manipulation}.c-cb>label:before{content:"";position:absolute;border:2px solid currentColor;background:transparent}.c-cb>input[type=checkbox]:focus+label:before{border-width:4px;outline:3px dashed #228bec}.c-cb>label:after{box-sizing:content-box;content:"";position:absolute;top:11px;left:9px;width:18px;height:7px;transform:rotate(-45deg);border:solid;border-width:0 0 5px 5px;border-top-color:transparent;opacity:0;background:transparent}.c-cb>input[type=checkbox]:checked+label:after{opacity:1}';Q("/style/react_todo_list_beginning.css",{css:U});var{default:o,useEffect:R,useRef:L,useState:j}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function C({name:n="Eat",completed:a=!1,id:t="todo-0",toggleTaskCompleted:u,deleteTask:b,editTask:c}){let[d,i]=j(!1),[p,g]=j(""),f=L(null),m=L(null);function S(e){g(e.target.value)}function y(e){e.preventDefault(),c(t,p),g(""),i(!1)}function h(e){var r;let l=L();return R(()=>{l.current=e}),(r=l.current)!=null?r:!1}let _=h(d);R(()=>{var e;!_&&d&&f.current.focus(),_&&!d&&((e=m==null?void 0:m.current)==null||e.focus())},[_,d]);let w=o.createElement("form",{className:"stack-small",onSubmit:y},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"todo-label",htmlFor:t},"New name for ",n),o.createElement("input",{id:t,className:"todo-text",type:"text",value:p,onChange:S,ref:f})),o.createElement("div",{className:"btn-group"},o.createElement("button",{type:"button",className:"btn todo-cancel",onClick:()=>i(!1)},"Cancel",o.createElement("span",{className:"visually-hidden"},"renaming ",n)),o.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",o.createElement("span",{className:"visually-hidden"},"new name for ",n)))),k=o.createElement("div",{className:"stack-small"},o.createElement("div",{className:"c-cb"},o.createElement("input",{id:t,type:"checkbox",defaultChecked:a,onChange:()=>u(t)}),o.createElement("label",{className:"todo-label",htmlFor:t},n)),o.createElement("div",{className:"btn-group"},o.createElement("button",{type:"button",className:"btn",onClick:()=>i(!0),ref:m},"Edit ",o.createElement("span",{className:"visually-hidden"},n)),o.createElement("button",{type:"button",className:"btn btn__danger",onClick:()=>b(t)},"Delete ",o.createElement("span",{className:"visually-hidden"},n))));return o.createElement("li",{className:"todo"},d?w:k)}var{default:x,useState:V}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function H({addTask:n}){let[a,t]=V("new task");function u(c){c.preventDefault(),n(a),t("")}function b(c){t(c.target.value)}return x.createElement("form",{onSubmit:u},x.createElement("h2",{className:"label-wrapper"},x.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),x.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:b,key:"new-todo-input"}),x.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))}var{default:E}=__ALEPH__.pack["https://esm.sh/react@17.0.2"];function X({name:n,isPressed:a,setFilter:t}){return E.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":a,onClick:()=>t(n)},E.createElement("span",{className:"visually-hidden"},"Show"),E.createElement("span",null,n),E.createElement("span",{className:"visually-hidden"},"tasks"))}var M=X;var{default:Y}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Head.ts"],{default:Z}=__ALEPH__.pack["https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/StyleLink.ts"],{default:s,useEffect:D,useRef:I,useState:B}=__ALEPH__.pack["https://esm.sh/react@17.0.2"],{nanoid:ee}=__ALEPH__.pack["https://deno.land/x/nanoid@v3.0.0/mod.ts"];function $({pageProps:n}){function a(e){var r;let l=I();return D(()=>{l.current=e}),(r=l.current)!=null?r:0}let t=I(null);function u(e){let l=i.map(r=>e===r.id?A(T({},r),{completed:!r.completed}):r);p(l)}function b(e){let l=i.filter(r=>e!==r.id);p(l)}function c(e,l){let r=i.map(N=>e===N.id?A(T({},N),{name:l}):N);p(r)}let d=[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat"}],[i,p]=B(d),g={All:()=>!0,Active:e=>!e.completed,Completed:e=>{var l;return(l=e.completed)!=null?l:!1}},[f,m]=B("All"),y=Object.keys(g).map(e=>s.createElement(M,{key:e,name:e,isPressed:e===f,setFilter:m})),h=i.filter(g[f]).map(e=>s.createElement(C,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:u,deleteTask:b,editTask:c})),_=h.length!==1?"tasks":"task",w=`${h.length} ${_} remaining`,k=a(i.length);return D(()=>{i.length-k==-1&&t.current.focus()},[i.length,k]),s.createElement("div",{className:"todoapp stack-large"},s.createElement(Y,null,s.createElement("title",null,"TodoMatic"),s.createElement(Z,{rel:"stylesheet",href:"/style/react_todo_list_beginning.css"})),s.createElement("h1",null,"TodoMatic"),s.createElement(H,{addTask:e=>{let l={id:"todo-"+ee(),name:e};p([...i,l])}}),s.createElement("div",{className:"filters btn-group stack-exception"},y),s.createElement("h2",{id:"list-heading",tabIndex:-1,ref:t},w),s.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},h))}__ALEPH__.pack["/pages/react_todo_list_beginning.tsx"]=P;})();
