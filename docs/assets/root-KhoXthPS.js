import{u as r,a as i,L as c,w as l,b as d}from"./useFruit-C5K6qqnY.js";import{l as s,M as u,L as p,S as h,n as m,O as x,o as g}from"./chunk-IR6S3I6Y-DC0prOOs.js";function f({children:o}){const{fruit:e,setFruitByPathname:n}=r(),{loadingStatus:t,setLoadingStatus:a}=i(n);return s.jsxs(c.Provider,{value:[t,a],children:[s.jsx("div",{className:"loadingWrapper"+(t==="complete"?" loadingEnd":""),children:s.jsx("div",{className:"loading"+(t==="complete"?" loadingEnd":""),style:{background:e.color},children:e.emoji})}),s.jsx("div",{className:t==="complete"?"":"loadingHidden",children:o})]})}const S=()=>[{rel:"stylesheet",href:"https://unpkg.com/sanitize.css"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"}];function w({children:o}){return s.jsxs("html",{lang:"en",children:[s.jsxs("head",{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.jsx(u,{}),s.jsx(p,{})]}),s.jsxs("body",{children:[s.jsx(f,{children:o}),s.jsx(h,{}),s.jsx(m,{})]})]})}const E=l(function(){return s.jsx(x,{})}),L=d(function({error:e}){let n="Oops!",t="An unexpected error occurred.",a;return g(e)&&(n=e.status===404?"404":"Error",t=e.status===404?"The requested page could not be found.":e.statusText||t),s.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[s.jsx("h1",{children:n}),s.jsx("p",{children:t}),a]})});export{L as ErrorBoundary,w as Layout,E as default,S as links};
