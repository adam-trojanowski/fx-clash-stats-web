if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const u=e=>i(e,l),o={module:{uri:l},exports:t,require:u};s[l]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(r(...e),t)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AssetListPage-85266dec.js",revision:null},{url:"assets/formatting-d84f22f4.js",revision:null},{url:"assets/index-13e273e8.js",revision:null},{url:"assets/index-295d4d8a.js",revision:null},{url:"assets/index-5f6cc7da.js",revision:null},{url:"assets/index-64e650a4.js",revision:null},{url:"assets/index-bd1b710a.css",revision:null},{url:"assets/useDrivers-a78d86e7.js",revision:null},{url:"assets/useSuspensions-15881cf8.js",revision:null},{url:"assets/vendor-07f2838d.js",revision:null},{url:"index.html",revision:"6fb11fdf22644b57e0da7ba8164d2c11"},{url:"registerSW.js",revision:"bede18e1c08fda45c6997c468f7e6a37"},{url:"manifest.webmanifest",revision:"420ec31bd9e404ba75df219d6bb60ba9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
