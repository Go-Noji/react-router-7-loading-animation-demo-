import{u as l,a as d,L as u,w as p,b as m}from"./useFruit-CCpqhF7l.js";import{l as t,M as h,L as x,S as g,n as f,O as j,o as y}from"./chunk-IR6S3I6Y-DC0prOOs.js";function w({children:o}){const{fruit:e,setFruitByPathname:n}=l(),{loadingStatus:s,setLoadingStatus:a,setAnimationEnd:r}=d(async i=>{await new Promise(c=>setTimeout(c,Math.floor(Math.random()*500))),n(i)});return t.jsxs(u.Provider,{value:[s,a],children:[t.jsx("div",{className:"loadingWrapper"+(s==="complete"?" loadingEnd":""),children:t.jsx("div",{className:"loading"+(s==="complete"?" loadingEnd":""),style:{background:e.color},onAnimationEnd:()=>r(!0),children:e.emoji})}),t.jsx("div",{className:s==="complete"?"":"loadingHidden",children:o})]})}const L=()=>[{rel:"stylesheet",href:"https://unpkg.com/sanitize.css"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"}];function v({children:o}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(h,{}),t.jsx(x,{})]}),t.jsxs("body",{children:[t.jsx(w,{children:o}),t.jsx(g,{}),t.jsx(f,{})]})]})}const P=p(function(){return t.jsx(j,{})}),k=m(function({error:e}){let n="Oops!",s="An unexpected error occurred.",a;return y(e)&&(n=e.status===404?"404":"Error",s=e.status===404?"The requested page could not be found.":e.statusText||s),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:n}),t.jsx("p",{children:s}),a]})});export{k as ErrorBoundary,v as Layout,P as default,L as links};
