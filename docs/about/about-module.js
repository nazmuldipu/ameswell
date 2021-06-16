"use strict";var i=class extends HTMLElement{static loadCSS(e){return new Promise((s,o)=>{let t=[...document.styleSheets].find(r=>r.href===e);if(t)s(t);else{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.onload=function(){s(r)},r.href=e,document.getElementsByTagName("head")[0].insertAdjacentElement("beforeend",r)}})}constructor(e){super();this._moduleMap=new Map;for(let s of e)this._registerModule(s)}connectedCallback(){for(let e of this._moduleMap.values())e.observer.observe(this)}_registerModule(e){e.observer=new a(e.type,e.observerConfig,this._onLoad.bind(this,e.id)),this._moduleMap.set(e.id,e)}async _onLoad(e){let s=this._moduleMap.get(e);if(s){s.observer.destroy();let o=[];if(s.stylePaths){let t=await Promise.all(s.stylePaths.map(r=>i.loadCSS(r)));Array.prototype.push.apply(o,t)}if(s.behaviorPath){let t=await import(s.behaviorPath);o.push(t),s.mod=t}return s.results=o,s}return this}},c=i,a=class{constructor(e,s,o){switch(this.type=e,e){case"IntersectionObserver":this._observer=new IntersectionObserver(o,s);break;default:break}}unobserve(e){switch(this.type){case"IntersectionObserver":this._observer.unobserve(e);break;default:break}}observe(e){switch(this.type){case"IntersectionObserver":this._observer.observe(e);break;default:break}}destroy(){switch(this.type){case"IntersectionObserver":this._observer.disconnect();break;default:break}}};"use strict";var n=class extends c{constructor(){super([{id:"swiper",behaviorPath:"../lib/swiper.js",stylePaths:["https://unpkg.com/swiper/swiper-bundle.min.css"],type:"IntersectionObserver",observerConfig:{rootMargin:"400px"}}])}_onLoad(e,s,o){s.some(t=>t.isIntersecting)&&super._onLoad(e).then(({mod:t})=>{var r;t.Swiper&&(this.swiperInstance=new t.Swiper((r=this.getElementsByClassName("swiper-container"))==null?void 0:r[0],t.defaultConfig))})}},b=n;customElements.define("media-carousel",n);"use strict";