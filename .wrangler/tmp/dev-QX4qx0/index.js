var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a4, b3) => (typeof require !== "undefined" ? require : a4)[b3]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var __esm = (fn3, res) => function __init() {
  return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-rpL399/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-rpL399/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .output/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  ".output/server/chunks/_/error-500.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = (t4) => function({ messages: e7 }) {
      var t5, r3 = "";
      return r3 + "<!DOCTYPE html><html data-critters-container><head><title>" + (null == (t5 = e7.statusCode) ? "" : t5) + " - " + (null == (t5 = e7.statusMessage) ? "" : t5) + " | " + (null == (t5 = e7.appName) ? "" : t5) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();<\/script></head><body class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight"></div><div class="max-w-520px text-center"><h1 class="text-8xl sm:text-10xl font-medium mb-8">` + (null == (t5 = e7.statusCode) ? "" : t5) + '</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight">' + (null == (t5 = e7.description) ? "" : t5) + "</p></div></body></html>";
    }({ messages: { ...e, ...t4 } });
  }
});

// .output/server/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  ".output/server/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e2 = { "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CYfgvDxD.js", name: "error-404", src: "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-404.BWs3xBTp.css": { file: "error-404.BWs3xBTp.css", resourceType: "style", prefetch: true, preload: true }, "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BjQW-vpJ.js", name: "error-500", src: "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/entry.js"], css: [] }, "error-500.BlZ2VsS_.css": { file: "error-500.BlZ2VsS_.css", resourceType: "style", prefetch: true, preload: true }, "../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "dDRrCq-r.js", name: "entry", src: "../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue", "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"], css: ["entry.Ds4GbboV.css"], _globalCSS: true }, "entry.Ds4GbboV.css": { file: "entry.Ds4GbboV.css", resourceType: "style", prefetch: true, preload: true } };
  }
});

// .output/server/chunks/build/entry-styles.Ivv6XQtn.mjs
var entry_styles_Ivv6XQtn_exports = {};
__export(entry_styles_Ivv6XQtn_exports, {
  default: () => a
});
var a;
var init_entry_styles_Ivv6XQtn = __esm({
  ".output/server/chunks/build/entry-styles.Ivv6XQtn.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    a = ["@media (prefers-color-scheme:light){.get-started-gradient-border[data-v-c170d279]{background:linear-gradient(90deg,#fff,#fff),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da)}.gradient-border-modules[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#f7d14c,rgba(247,209,76,.6),hsla(0,0%,100%,.8),#f7d14c)}.gradient-border-examples[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#8deaff,rgba(141,234,255,.6),hsla(0,0%,100%,.8),#8deaff)}.gradient-border-documentation[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#00dc82,rgba(0,220,130,.6),hsla(0,0%,100%,.8),#00dc82)}}@media (prefers-color-scheme:dark){.get-started-gradient-border[data-v-c170d279]{background:linear-gradient(90deg,#18181b,#18181b),linear-gradient(90deg,#00dc82,#1de0b1,#36e4da)}.gradient-border-modules[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#f7d14c,#a38108,hsla(0,0%,100%,.3),#a38108)}.gradient-border-examples[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#8deaff,#008aa9,hsla(0,0%,100%,.3),#008aa9)}.gradient-border-documentation[data-v-c170d279]{background:linear-gradient(var(--gradient-angle),#00dc82,#003f25,hsla(0,0%,100%,.2),#003f25)}}.get-started-gradient-border[data-v-c170d279]{background-clip:padding-box,border-box;background-origin:padding-box,border-box;border-color:transparent;border-radius:12px;border-width:1px}.get-started-gradient-border[data-v-c170d279]:hover>:is(.get-started-gradient-left,.get-started-gradient-right){opacity:.2}.get-started-gradient-left[data-v-c170d279],.get-started-gradient-right[data-v-c170d279]{opacity:0}.gradient-border[data-v-c170d279]{border-radius:12px;left:0;opacity:0;position:absolute;top:0;transform:translate(-1px,-1px);width:calc(100% + 2px);z-index:-1}.gradient-border-rect[data-v-c170d279]{height:calc(100% + 2px)}@media (min-width:1024px){.gradient-border-rect[data-v-c170d279]{height:calc(100% + 1px)}}.gradient-border-square[data-v-c170d279]{height:calc(100% + 2px)}.modules-gradient-right[data-v-c170d279]{opacity:0}.documentation-container:hover>.gradient-border[data-v-c170d279],.examples-container:hover>.gradient-border[data-v-c170d279],.modules-container:hover>.gradient-border[data-v-c170d279]{animation:gradient-rotate 5s linear 0s infinite reverse;opacity:1;transition:all .3s linear}.examples-container:hover>.examples-gradient-right[data-v-c170d279],.modules-container:hover>.modules-gradient-right[data-v-c170d279]{opacity:.2}.examples-gradient-right[data-v-c170d279]{opacity:0}.documentation-image-color-dark[data-v-c170d279],.documentation-image-color-light[data-v-c170d279],.examples-image-color-dark[data-v-c170d279],.examples-image-color-light[data-v-c170d279],.modules-image-color-dark[data-v-c170d279],.modules-image-color-light[data-v-c170d279]{display:none}@media (prefers-color-scheme:light){.modules-image-light[data-v-c170d279]{display:block}.modules-container:hover>a>.modules-image-light[data-v-c170d279],.modules-image-dark[data-v-c170d279]{display:none}.examples-image-light[data-v-c170d279],.modules-container:hover>a>.modules-image-color-light[data-v-c170d279]{display:block}.examples-container:hover>a>.examples-image-light[data-v-c170d279],.examples-image-dark[data-v-c170d279]{display:none}.documentation-image-light[data-v-c170d279],.examples-container:hover>a>.examples-image-color-light[data-v-c170d279]{display:block}.documentation-container:hover>a>div>.documentation-image-light[data-v-c170d279],.documentation-image-dark[data-v-c170d279]{display:none}.documentation-container:hover>a>div>.documentation-image-color-light[data-v-c170d279]{display:block}}@media (prefers-color-scheme:dark){.modules-image-dark[data-v-c170d279]{display:block}.modules-image-light[data-v-c170d279]{display:none}.modules-container:hover>a>.modules-image-color-dark[data-v-c170d279]{display:block}.modules-container:hover>a>.modules-image-dark[data-v-c170d279]{display:none}.examples-image-dark[data-v-c170d279]{display:block}.examples-image-light[data-v-c170d279]{display:none}.examples-container:hover>a>.examples-image-color-dark[data-v-c170d279]{display:block}.examples-container:hover>a>.examples-image-dark[data-v-c170d279]{display:none}.documentation-image-dark[data-v-c170d279]{display:block}.documentation-image-light[data-v-c170d279]{display:none}.documentation-container:hover>a>div>.documentation-image-color-dark[data-v-c170d279]{display:block}.documentation-container:hover>a>div>.documentation-image-dark[data-v-c170d279]{display:none}}.sr-only[data-v-c170d279]{height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.absolute[data-v-c170d279],.sr-only[data-v-c170d279]{position:absolute}.relative[data-v-c170d279]{position:relative}.inset-x-0[data-v-c170d279]{left:0;right:0}.inset-y-0[data-v-c170d279]{bottom:0;top:0}.-top-\\[58px\\][data-v-c170d279]{top:-58px}.-top-3[data-v-c170d279]{top:-.75rem}.left-0[data-v-c170d279]{left:0}.right-0[data-v-c170d279]{right:0}.z-1[data-v-c170d279]{z-index:1}.z-10[data-v-c170d279]{z-index:10}.order-last[data-v-c170d279]{order:9999}.grid[data-v-c170d279]{display:grid}.col-span-2[data-v-c170d279]{grid-column:span 2/span 2}.row-span-2[data-v-c170d279]{grid-row:span 2/span 2}.grid-cols-2[data-v-c170d279]{grid-template-columns:repeat(2,minmax(0,1fr))}.mx-auto[data-v-c170d279]{margin-left:auto;margin-right:auto}.mb-2[data-v-c170d279]{margin-bottom:.5rem}.hidden[data-v-c170d279]{display:none}.h-\\[70px\\][data-v-c170d279]{height:70px}.h-32[data-v-c170d279]{height:8rem}.max-w-\\[960px\\][data-v-c170d279]{max-width:960px}.min-h-screen[data-v-c170d279]{min-height:100vh}.w-\\[20\\%\\][data-v-c170d279]{width:20%}.w-full[data-v-c170d279]{width:100%}.flex[data-v-c170d279]{display:flex}.flex-1[data-v-c170d279]{flex:1 1 0%}.flex-col[data-v-c170d279]{flex-direction:column}.flex-col-reverse[data-v-c170d279]{flex-direction:column-reverse}.place-content-center[data-v-c170d279]{place-content:center}.items-center[data-v-c170d279]{align-items:center}.justify-end[data-v-c170d279]{justify-content:flex-end}.justify-center[data-v-c170d279]{justify-content:center}.gap-3[data-v-c170d279]{gap:.75rem}.gap-6[data-v-c170d279]{gap:1.5rem}.gap-x-4[data-v-c170d279]{-moz-column-gap:1rem;column-gap:1rem}.gap-y-16[data-v-c170d279]{row-gap:4rem}.gap-y-2[data-v-c170d279]{row-gap:.5rem}.gap-y-4[data-v-c170d279]{row-gap:1rem}.border[data-v-c170d279]{border-width:1px}.border-t[data-v-c170d279]{border-top-width:1px}.border-gray-200[data-v-c170d279]{--un-border-opacity:1;border-color:rgb(224 224 224/var(--un-border-opacity))}.hover\\:border-transparent[data-v-c170d279]:hover{border-color:transparent}.rounded[data-v-c170d279]{border-radius:.25rem}.rounded-xl[data-v-c170d279]{border-radius:.75rem}.bg-gray-100[data-v-c170d279]{--un-bg-opacity:1;background-color:rgb(238 238 238/var(--un-bg-opacity))}.bg-white[data-v-c170d279]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.from-blue-400[data-v-c170d279]{--un-gradient-from-position:0%;--un-gradient-from:rgb(96 165 250/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(96,165,250,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.from-green-400[data-v-c170d279]{--un-gradient-from-position:0%;--un-gradient-from:rgb(55 233 144/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(55,233,144,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.from-yellow-400[data-v-c170d279]{--un-gradient-from-position:0%;--un-gradient-from:rgb(250 204 21/var(--un-from-opacity,1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgba(250,204,21,0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)}.to-transparent[data-v-c170d279]{--un-gradient-to-position:100%;--un-gradient-to:transparent var(--un-gradient-to-position)}.bg-gradient-to-l[data-v-c170d279]{--un-gradient-shape:to left;--un-gradient:var(--un-gradient-shape),var(--un-gradient-stops)}.bg-gradient-to-l[data-v-c170d279],.bg-gradient-to-r[data-v-c170d279]{background-image:linear-gradient(var(--un-gradient))}.bg-gradient-to-r[data-v-c170d279]{--un-gradient-shape:to right;--un-gradient:var(--un-gradient-shape),var(--un-gradient-stops)}.p-1[data-v-c170d279]{padding:.25rem}.px-4[data-v-c170d279]{padding-left:1rem;padding-right:1rem}.px-5[data-v-c170d279]{padding-left:1.25rem;padding-right:1.25rem}.py-14[data-v-c170d279]{padding-bottom:3.5rem;padding-top:3.5rem}.py-6[data-v-c170d279]{padding-top:1.5rem}.pb-6[data-v-c170d279],.py-6[data-v-c170d279]{padding-bottom:1.5rem}.pt-\\[58px\\][data-v-c170d279]{padding-top:58px}.text-center[data-v-c170d279]{text-align:center}.text-2xl[data-v-c170d279]{font-size:1.5rem;line-height:2rem}.text-4xl[data-v-c170d279]{font-size:2.25rem;line-height:2.5rem}.text-sm[data-v-c170d279]{font-size:.875rem;line-height:1.25rem}.text-xl[data-v-c170d279]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-c170d279]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.text-gray-700[data-v-c170d279]{--un-text-opacity:1;color:rgb(66 66 66/var(--un-text-opacity))}.hover\\:text-black[data-v-c170d279]:hover{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-bold[data-v-c170d279]{font-weight:700}.font-semibold[data-v-c170d279]{font-weight:600}.font-mono[data-v-c170d279]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.antialiased[data-v-c170d279]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.focus-visible\\:ring-2[data-v-c170d279]:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.transition-opacity[data-v-c170d279]{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300[data-v-c170d279]{transition-duration:.3s}@media (prefers-color-scheme:dark){.dark\\:block[data-v-c170d279]{display:block}.dark\\:hidden[data-v-c170d279]{display:none}.dark\\:border-gray-900[data-v-c170d279]{--un-border-opacity:1;border-color:rgb(24 24 27/var(--un-border-opacity))}.dark\\:border-transparent[data-v-c170d279]{border-color:transparent}.dark\\:border-none[data-v-c170d279]{border-style:none}.dark\\:bg-black[data-v-c170d279]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-gray-900[data-v-c170d279]{--un-bg-opacity:1;background-color:rgb(24 24 27/var(--un-bg-opacity))}.dark\\:bg-white\\/10[data-v-c170d279]{background-color:#ffffff1a}.dark\\:text-gray-300[data-v-c170d279]{--un-text-opacity:1;color:rgb(189 189 189/var(--un-text-opacity))}.dark\\:hover\\:text-white[data-v-c170d279]:hover,.dark\\:text-white[data-v-c170d279]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:col-span-1[data-v-c170d279]{grid-column:span 1/span 1}.sm\\:h-34[data-v-c170d279]{height:8.5rem}.sm\\:min-h-\\[220px\\][data-v-c170d279]{min-height:220px}.sm\\:flex-row[data-v-c170d279]{flex-direction:row}.sm\\:justify-between[data-v-c170d279]{justify-content:space-between}.sm\\:px-28[data-v-c170d279]{padding-left:7rem;padding-right:7rem}.sm\\:px-6[data-v-c170d279]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-5xl[data-v-c170d279]{font-size:3rem;line-height:1}.sm\\:text-base[data-v-c170d279]{font-size:1rem;line-height:1.5rem}}@media (min-width:768px){.md\\:min-h-\\[180px\\][data-v-c170d279]{min-height:180px}}@media (min-width:1024px){.lg\\:order-none[data-v-c170d279]{order:0}.lg\\:col-span-10[data-v-c170d279]{grid-column:span 10/span 10}.lg\\:col-span-4[data-v-c170d279]{grid-column:span 4/span 4}.lg\\:col-span-6[data-v-c170d279]{grid-column:span 6/span 6}.lg\\:grid-cols-10[data-v-c170d279]{grid-template-columns:repeat(10,minmax(0,1fr))}.lg\\:min-h-min[data-v-c170d279]{min-height:-moz-min-content;min-height:min-content}.lg\\:flex-col[data-v-c170d279]{flex-direction:column}.lg\\:px-8[data-v-c170d279]{padding-left:2rem;padding-right:2rem}.lg\\:py-7[data-v-c170d279]{padding-bottom:1.75rem;padding-top:1.75rem}}"];
  }
});

// .output/server/chunks/build/error-404-styles.B9q4k8Dc.mjs
var error_404_styles_B9q4k8Dc_exports = {};
__export(error_404_styles_B9q4k8Dc_exports, {
  default: () => e3
});
var e3;
var init_error_404_styles_B9q4k8Dc = __esm({
  ".output/server/chunks/build/error-404-styles.B9q4k8Dc.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    e3 = ['.spotlight[data-v-bd6e1038]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-bd6e1038]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-bd6e1038]{background-color:hsla(0,0%,100%,.3)}.gradient-border[data-v-bd6e1038]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-bd6e1038]{background-color:hsla(0,0%,8%,.3)}.gradient-border[data-v-bd6e1038]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-bd6e1038]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-bd6e1038]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-bd6e1038]{position:fixed}.left-0[data-v-bd6e1038]{left:0}.right-0[data-v-bd6e1038]{right:0}.z-10[data-v-bd6e1038]{z-index:10}.z-20[data-v-bd6e1038]{z-index:20}.grid[data-v-bd6e1038]{display:grid}.mb-16[data-v-bd6e1038]{margin-bottom:4rem}.mb-8[data-v-bd6e1038]{margin-bottom:2rem}.max-w-520px[data-v-bd6e1038]{max-width:520px}.min-h-screen[data-v-bd6e1038]{min-height:100vh}.w-full[data-v-bd6e1038]{width:100%}.flex[data-v-bd6e1038]{display:flex}.cursor-pointer[data-v-bd6e1038]{cursor:pointer}.place-content-center[data-v-bd6e1038]{place-content:center}.items-center[data-v-bd6e1038]{align-items:center}.justify-center[data-v-bd6e1038]{justify-content:center}.overflow-hidden[data-v-bd6e1038]{overflow:hidden}.bg-white[data-v-bd6e1038]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-bd6e1038]{padding-left:1rem;padding-right:1rem}.px-8[data-v-bd6e1038]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bd6e1038]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-bd6e1038]{text-align:center}.text-8xl[data-v-bd6e1038]{font-size:6rem;line-height:1}.text-xl[data-v-bd6e1038]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-bd6e1038]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-bd6e1038]{font-weight:300}.font-medium[data-v-bd6e1038]{font-weight:500}.leading-tight[data-v-bd6e1038]{line-height:1.25}.font-sans[data-v-bd6e1038]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-bd6e1038]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-bd6e1038]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-bd6e1038]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-bd6e1038]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-bd6e1038]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-bd6e1038]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-bd6e1038]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bd6e1038]{font-size:1.25rem;line-height:1.75rem}}'];
  }
});

// .output/server/chunks/build/error-500-styles.ClAyCC6I.mjs
var error_500_styles_ClAyCC6I_exports = {};
__export(error_500_styles_ClAyCC6I_exports, {
  default: () => t
});
var t;
var init_error_500_styles_ClAyCC6I = __esm({
  ".output/server/chunks/build/error-500-styles.ClAyCC6I.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t = [".spotlight[data-v-478fb72d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-478fb72d]{position:fixed}.-bottom-1\\/2[data-v-478fb72d]{bottom:-50%}.left-0[data-v-478fb72d]{left:0}.right-0[data-v-478fb72d]{right:0}.grid[data-v-478fb72d]{display:grid}.mb-16[data-v-478fb72d]{margin-bottom:4rem}.mb-8[data-v-478fb72d]{margin-bottom:2rem}.h-1\\/2[data-v-478fb72d]{height:50%}.max-w-520px[data-v-478fb72d]{max-width:520px}.min-h-screen[data-v-478fb72d]{min-height:100vh}.place-content-center[data-v-478fb72d]{place-content:center}.overflow-hidden[data-v-478fb72d]{overflow:hidden}.bg-white[data-v-478fb72d]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-478fb72d]{padding-left:2rem;padding-right:2rem}.text-center[data-v-478fb72d]{text-align:center}.text-8xl[data-v-478fb72d]{font-size:6rem;line-height:1}.text-xl[data-v-478fb72d]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-478fb72d]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-478fb72d]{font-weight:300}.font-medium[data-v-478fb72d]{font-weight:500}.leading-tight[data-v-478fb72d]{line-height:1.25}.font-sans[data-v-478fb72d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-478fb72d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-478fb72d]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-478fb72d]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-478fb72d]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-478fb72d]{font-size:2.25rem;line-height:2.5rem}}"];
  }
});

// .output/server/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e4
});
var interopDefault, e4;
var init_styles = __esm({
  ".output/server/chunks/build/styles.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    interopDefault = (e7) => e7.default || e7 || [];
    e4 = { "../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/entry.js": () => Promise.resolve().then(() => (init_entry_styles_Ivv6XQtn(), entry_styles_Ivv6XQtn_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": () => Promise.resolve().then(() => (init_error_404_styles_B9q4k8Dc(), error_404_styles_B9q4k8Dc_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": () => Promise.resolve().then(() => (init_error_500_styles_ClAyCC6I(), error_500_styles_ClAyCC6I_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue": () => Promise.resolve().then(() => (init_entry_styles_Ivv6XQtn(), entry_styles_Ivv6XQtn_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bd6e1038&lang.css": () => Promise.resolve().then(() => (init_error_404_styles_B9q4k8Dc(), error_404_styles_B9q4k8Dc_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=478fb72d&lang.css": () => Promise.resolve().then(() => (init_error_500_styles_ClAyCC6I(), error_500_styles_ClAyCC6I_exports)).then(interopDefault), "../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue?vue&type=style&index=0&scoped=c170d279&lang.css": () => Promise.resolve().then(() => (init_entry_styles_Ivv6XQtn(), entry_styles_Ivv6XQtn_exports)).then(interopDefault) };
  }
});

// .output/server/chunks/build/multipart-parser-BaDqkqCr.mjs
var multipart_parser_BaDqkqCr_exports = {};
__export(multipart_parser_BaDqkqCr_exports, {
  toFormData: () => Z
});
import "__STATIC_CONTENT_MANIFEST";
function v(e7) {
  const t4 = e7.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!t4)
    return;
  const n4 = t4[2] || t4[3] || "";
  let a4 = n4.slice(n4.lastIndexOf("\\") + 1);
  return a4 = a4.replace(/%22/g, '"'), a4 = a4.replace(/&#(\d{4});/g, (e8, t5) => String.fromCharCode(t5)), a4;
}
async function Z(n4, a4) {
  if (!/multipart/i.test(a4))
    throw new TypeError("Failed to fetch");
  const r3 = a4.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!r3)
    throw new TypeError("no or bad content-type header, no multipart boundary");
  const o5 = new h(r3[1] || r3[2]);
  let i4, s3, d3, A4, l4, D3;
  const c2 = [], T3 = new ul(), _4 = E((e7) => {
    d3 += b3.decode(e7, { stream: true });
  }, "onPartData"), f2 = E((e7) => {
    c2.push(e7);
  }, "appendToFile"), u3 = E(() => {
    const e7 = new Zs(c2, D3, { type: l4 });
    T3.append(A4, e7);
  }, "appendFileToFormData"), R3 = E(() => {
    T3.append(A4, d3);
  }, "appendEntryToFormData"), b3 = new TextDecoder("utf-8");
  b3.decode(), o5.onPartBegin = function() {
    o5.onPartData = _4, o5.onPartEnd = R3, i4 = "", s3 = "", d3 = "", A4 = "", l4 = "", D3 = null, c2.length = 0;
  }, o5.onHeaderField = function(e7) {
    i4 += b3.decode(e7, { stream: true });
  }, o5.onHeaderValue = function(e7) {
    s3 += b3.decode(e7, { stream: true });
  }, o5.onHeaderEnd = function() {
    if (s3 += b3.decode(), i4 = i4.toLowerCase(), "content-disposition" === i4) {
      const e7 = s3.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      e7 && (A4 = e7[2] || e7[3] || ""), D3 = v(s3), D3 && (o5.onPartData = f2, o5.onPartEnd = u3);
    } else
      "content-type" === i4 && (l4 = s3);
    s3 = "", i4 = "";
  };
  for await (const e7 of n4)
    o5.write(e7);
  return o5.end(), T3;
}
var n, E, a2, r, o, i, s, d, A, l, h;
var init_multipart_parser_BaDqkqCr = __esm({
  ".output/server/chunks/build/multipart-parser-BaDqkqCr.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_runtime();
    init_renderer();
    n = Object.defineProperty;
    E = (e7, t4) => n(e7, "name", { value: t4, configurable: true });
    a2 = 0;
    r = { START_BOUNDARY: a2++, HEADER_FIELD_START: a2++, HEADER_FIELD: a2++, HEADER_VALUE_START: a2++, HEADER_VALUE: a2++, HEADER_VALUE_ALMOST_DONE: a2++, HEADERS_ALMOST_DONE: a2++, PART_DATA_START: a2++, PART_DATA: a2++, END: a2++ };
    o = 1;
    i = o;
    s = o *= 2;
    d = E((e7) => 32 | e7, "lower");
    A = E(() => {
    }, "noop");
    l = class {
      constructor(e7) {
        this.index = 0, this.flags = 0, this.onHeaderEnd = A, this.onHeaderField = A, this.onHeadersEnd = A, this.onHeaderValue = A, this.onPartBegin = A, this.onPartData = A, this.onPartEnd = A, this.boundaryChars = {}, e7 = "\r\n--" + e7;
        const t4 = new Uint8Array(e7.length);
        for (let n4 = 0; n4 < e7.length; n4++)
          t4[n4] = e7.charCodeAt(n4), this.boundaryChars[t4[n4]] = true;
        this.boundary = t4, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = r.START_BOUNDARY;
      }
      write(e7) {
        let t4 = 0;
        const n4 = e7.length;
        let a4 = this.index, { lookbehind: o5, boundary: A4, boundaryChars: l4, index: h4, state: D3, flags: c2 } = this;
        const T3 = this.boundary.length, _4 = T3 - 1, f2 = e7.length;
        let u3, R3;
        const b3 = E((e8) => {
          this[e8 + "Mark"] = t4;
        }, "mark"), H3 = E((e8) => {
          delete this[e8 + "Mark"];
        }, "clear"), p2 = E((e8, t5, n5, a5) => {
          (void 0 === t5 || t5 !== n5) && this[e8](a5 && a5.subarray(t5, n5));
        }, "callback"), P3 = E((n5, a5) => {
          const r3 = n5 + "Mark";
          r3 in this && (a5 ? (p2(n5, this[r3], t4, e7), delete this[r3]) : (p2(n5, this[r3], e7.length, e7), this[r3] = 0));
        }, "dataCallback");
        for (t4 = 0; t4 < n4; t4++)
          switch (u3 = e7[t4], D3) {
            case r.START_BOUNDARY:
              if (h4 === A4.length - 2) {
                if (45 === u3)
                  c2 |= s;
                else if (13 !== u3)
                  return;
                h4++;
                break;
              }
              if (h4 - 1 == A4.length - 2) {
                if (c2 & s && 45 === u3)
                  D3 = r.END, c2 = 0;
                else {
                  if (c2 & s || 10 !== u3)
                    return;
                  h4 = 0, p2("onPartBegin"), D3 = r.HEADER_FIELD_START;
                }
                break;
              }
              u3 !== A4[h4 + 2] && (h4 = -2), u3 === A4[h4 + 2] && h4++;
              break;
            case r.HEADER_FIELD_START:
              D3 = r.HEADER_FIELD, b3("onHeaderField"), h4 = 0;
            case r.HEADER_FIELD:
              if (13 === u3) {
                H3("onHeaderField"), D3 = r.HEADERS_ALMOST_DONE;
                break;
              }
              if (h4++, 45 === u3)
                break;
              if (58 === u3) {
                if (1 === h4)
                  return;
                P3("onHeaderField", true), D3 = r.HEADER_VALUE_START;
                break;
              }
              if (R3 = d(u3), R3 < 97 || R3 > 122)
                return;
              break;
            case r.HEADER_VALUE_START:
              if (32 === u3)
                break;
              b3("onHeaderValue"), D3 = r.HEADER_VALUE;
            case r.HEADER_VALUE:
              13 === u3 && (P3("onHeaderValue", true), p2("onHeaderEnd"), D3 = r.HEADER_VALUE_ALMOST_DONE);
              break;
            case r.HEADER_VALUE_ALMOST_DONE:
              if (10 !== u3)
                return;
              D3 = r.HEADER_FIELD_START;
              break;
            case r.HEADERS_ALMOST_DONE:
              if (10 !== u3)
                return;
              p2("onHeadersEnd"), D3 = r.PART_DATA_START;
              break;
            case r.PART_DATA_START:
              D3 = r.PART_DATA, b3("onPartData");
            case r.PART_DATA:
              if (a4 = h4, 0 === h4) {
                for (t4 += _4; t4 < f2 && !(e7[t4] in l4); )
                  t4 += T3;
                t4 -= _4, u3 = e7[t4];
              }
              if (h4 < A4.length)
                A4[h4] === u3 ? (0 === h4 && P3("onPartData", true), h4++) : h4 = 0;
              else if (h4 === A4.length)
                h4++, 13 === u3 ? c2 |= i : 45 === u3 ? c2 |= s : h4 = 0;
              else if (h4 - 1 === A4.length)
                if (c2 & i) {
                  if (h4 = 0, 10 === u3) {
                    c2 &= ~i, p2("onPartEnd"), p2("onPartBegin"), D3 = r.HEADER_FIELD_START;
                    break;
                  }
                } else
                  c2 & s && 45 === u3 ? (p2("onPartEnd"), D3 = r.END, c2 = 0) : h4 = 0;
              if (h4 > 0)
                o5[h4 - 1] = u3;
              else if (a4 > 0) {
                const e8 = new Uint8Array(o5.buffer, o5.byteOffset, o5.byteLength);
                p2("onPartData", 0, a4, e8), a4 = 0, b3("onPartData"), t4--;
              }
              break;
            case r.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${D3}`);
          }
        P3("onHeaderField"), P3("onHeaderValue"), P3("onPartData"), this.index = h4, this.state = D3, this.flags = c2;
      }
      end() {
        if (this.state === r.HEADER_FIELD_START && 0 === this.index || this.state === r.PART_DATA && this.index === this.boundary.length)
          this.onPartEnd();
        else if (this.state !== r.END)
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
      }
    };
    E(l, "MultipartParser");
    h = l;
    E(v, "_fileName"), E(Z, "toFormData");
  }
});

// .output/server/chunks/build/error-404-B4mXw__Z.mjs
var error_404_B4mXw_Z_exports = {};
__export(error_404_B4mXw_Z_exports, {
  default: () => _
});
import "__STATIC_CONTENT_MANIFEST";
function defineNuxtLink(e7) {
  const t4 = e7.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(t5, a4) {
    if (!t5 || "append" !== e7.trailingSlash && "remove" !== e7.trailingSlash)
      return t5;
    if ("string" == typeof t5)
      return applyTrailingSlashBehavior(t5, e7.trailingSlash);
    const r3 = "path" in t5 && void 0 !== t5.path ? t5.path : a4(t5).path;
    return { ...t5, name: void 0, path: applyTrailingSlashBehavior(r3, e7.trailingSlash) };
  }
  return defineComponent({ name: t4, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, setup(t5, { slots: u3 }) {
    const d3 = useRouter(), p2 = useRuntimeConfig(), c2 = computed(() => resolveTrailingSlashBehavior(t5.to || t5.href || "", d3.resolve)), f2 = computed(() => "string" == typeof c2.value && hasProtocol(c2.value, { acceptRelative: true })), v4 = computed(() => t5.target && "_self" !== t5.target), h4 = computed(() => !!t5.external || (!!v4.value || "object" != typeof c2.value && ("" === c2.value || f2.value))), g2 = ref(false);
    return () => {
      var a4, r3, o5;
      if (!h4.value) {
        const a5 = { ref: void 0, to: c2.value, activeClass: t5.activeClass || e7.activeClass, exactActiveClass: t5.exactActiveClass || e7.exactActiveClass, replace: t5.replace, ariaCurrentValue: t5.ariaCurrentValue, custom: t5.custom };
        return t5.custom || (g2.value && (a5.class = t5.prefetchedClass || e7.prefetchedClass), a5.rel = t5.rel || void 0), h2(resolveComponent("RouterLink"), a5, u3.default);
      }
      const m3 = "object" == typeof c2.value ? null != (a4 = null == (r3 = d3.resolve(c2.value)) ? void 0 : r3.href) ? a4 : null : !c2.value || t5.external || f2.value ? c2.value || null : resolveTrailingSlashBehavior(joinURL(p2.app.baseURL, c2.value), d3.resolve), b3 = t5.target || null, x3 = ((...e8) => e8.find((e9) => void 0 !== e9))(t5.noRel ? "" : t5.rel, e7.externalRelAttribute, f2.value || v4.value ? "noopener noreferrer" : "") || null;
      if (t5.custom) {
        if (!u3.default)
          return null;
        const navigate = () => navigateTo(m3, { replace: t5.replace, external: t5.external });
        return u3.default({ href: m3, navigate, get route() {
          if (!m3)
            return;
          const e8 = parseURL(m3);
          return { path: e8.pathname, fullPath: e8.pathname, get query() {
            return parseQuery(e8.search);
          }, hash: e8.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: m3 };
        }, rel: x3, target: b3, isExternal: h4.value, isActive: false, isExactActive: false });
      }
      return h2("a", { ref: void 0, href: m3, rel: x3, target: b3 }, null == (o5 = u3.default) ? void 0 : o5.call(u3));
    };
  } });
}
function applyTrailingSlashBehavior(e7, t4) {
  const a4 = "append" === t4 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e7) && !e7.startsWith("http") ? e7 : a4(e7, true);
}
var w, q, N, _;
var init_error_404_B4mXw_Z = __esm({
  ".output/server/chunks/build/error-404-B4mXw__Z.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_renderer();
    init_runtime();
    w = defineNuxtLink({ componentName: "NuxtLink" });
    q = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e7) {
      const a4 = e7;
      return useHead({ title: `${a4.statusCode} - ${a4.statusMessage} | ${a4.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t4, a5, r3, n4) => {
        const i4 = w;
        a5(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, n4))} data-v-bd6e1038><div class="fixed left-0 right-0 spotlight z-10" data-v-bd6e1038></div><div class="max-w-520px text-center z-20" data-v-bd6e1038><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bd6e1038>${ssrInterpolate(e7.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bd6e1038>${ssrInterpolate(e7.description)}</p><div class="w-full flex items-center justify-center" data-v-bd6e1038>`), a5(ssrRenderComponent(i4, { to: "/", class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer" }, { default: withCtx((t5, a6, r4, n5) => {
          if (!a6)
            return [createTextVNode(toDisplayString(e7.backHome), 1)];
          a6(`${ssrInterpolate(e7.backHome)}`);
        }), _: 1 }, r3)), a5("</div></div></div>");
      };
    } };
    N = q.setup;
    q.setup = (e7, t4) => {
      const a4 = useSSRContext();
      return (a4.modules || (a4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"), N ? N(e7, t4) : void 0;
    };
    _ = _export_sfc(q, [["__scopeId", "data-v-bd6e1038"]]);
  }
});

// .output/server/chunks/build/error-500-cKofolYF.mjs
var error_500_cKofolYF_exports = {};
__export(error_500_cKofolYF_exports, {
  default: () => u
});
import "__STATIC_CONTENT_MANIFEST";
var o2, i2, u;
var init_error_500_cKofolYF = __esm({
  ".output/server/chunks/build/error-500-cKofolYF.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_server();
    init_renderer();
    init_runtime();
    o2 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e7) {
      const s3 = e7;
      return useHead({ title: `${s3.statusCode} - ${s3.statusMessage} | ${s3.appName}`, script: [], style: [{ children: '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t4, s4, o5, i4) => {
        s4(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, i4))} data-v-478fb72d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-478fb72d></div><div class="max-w-520px text-center" data-v-478fb72d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-478fb72d>${ssrInterpolate(e7.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-478fb72d>${ssrInterpolate(e7.description)}</p></div></div>`);
      };
    } };
    i2 = o2.setup;
    o2.setup = (e7, t4) => {
      const n4 = useSSRContext();
      return (n4.modules || (n4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"), i2 ? i2(e7, t4) : void 0;
    };
    u = _export_sfc(o2, [["__scopeId", "data-v-478fb72d"]]);
  }
});

// .output/server/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  O: () => Zs,
  _: () => _export_sfc,
  a: () => parseQuery,
  b: () => useRuntimeConfig,
  c: () => withoutTrailingSlash,
  d: () => useHead,
  default: () => entry$1,
  e: () => ul,
  h: () => hasProtocol,
  j: () => joinURL,
  n: () => navigateTo,
  p: () => parseURL,
  u: () => useRouter,
  w: () => withTrailingSlash
});
import "__STATIC_CONTENT_MANIFEST";
function getDefaultExportFromCjs(e7) {
  return e7 && e7.__esModule && Object.prototype.hasOwnProperty.call(e7, "default") ? e7.default : e7;
}
function _promisify(e7) {
  return e7[Sn] ? e7[Sn] : function(...r3) {
    return new Promise((o5, a4) => {
      try {
        e7.call(this, ...r3, (e8, r4) => {
          if (e8)
            return a4(e8);
          o5(r4);
        });
      } catch (e8) {
        a4(e8);
      }
    });
  };
}
function notImplementedAsync(e7) {
  const r3 = notImplemented(e7);
  return r3.__promisify__ = () => notImplemented(e7 + ".__promisify__"), r3.native = r3, r3;
}
function callbackify(e7) {
  const fnc = function(...r3) {
    const o5 = r3.pop();
    e7().catch((e8) => o5(e8)).then((e8) => o5(void 0, e8));
  };
  return fnc.__promisify__ = e7, fnc.native = fnc, fnc;
}
function f$1(e7) {
  return e7 && e7.__esModule && Object.prototype.hasOwnProperty.call(e7, "default") ? e7.default : e7;
}
function js(e7) {
  if (!/^data:/i.test(e7))
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  const r3 = (e7 = e7.replace(/\r?\n/g, "")).indexOf(",");
  if (-1 === r3 || r3 <= 4)
    throw new TypeError("malformed data: URI");
  const o5 = e7.substring(5, r3).split(";");
  let a4 = "", i4 = false;
  const s3 = o5[0] || "text/plain";
  let f2 = s3;
  for (let e8 = 1; e8 < o5.length; e8++)
    "base64" === o5[e8] ? i4 = true : o5[e8] && (f2 += `;${o5[e8]}`, 0 === o5[e8].indexOf("charset=") && (a4 = o5[e8].substring(8)));
  !o5[0] && !a4.length && (f2 += ";charset=US-ASCII", a4 = "US-ASCII");
  const p2 = i4 ? "base64" : "ascii", h4 = unescape(e7.substring(r3 + 1)), g2 = f.from(h4, p2);
  return g2.type = s3, g2.typeFull = f2, g2.charset = a4, g2;
}
function Ls() {
  return Hs || (Hs = 1, function(e7) {
    function u3() {
    }
    function l22(e8) {
      return "object" == typeof e8 && null !== e8 || "function" == typeof e8;
    }
    n2(u3, "noop"), n2(l22, "typeIsObject");
    const r3 = u3;
    function h22(e8, r4) {
      try {
        Object.defineProperty(e8, "name", { value: r4, configurable: true });
      } catch {
      }
    }
    n2(h22, "setFunctionName");
    const o5 = Promise, a4 = Promise.prototype.then, i4 = Promise.reject.bind(o5);
    function E4(e8) {
      return new o5(e8);
    }
    function T3(e8) {
      return E4((r4) => r4(e8));
    }
    function b3(e8) {
      return i4(e8);
    }
    function q4(e8, r4, o6) {
      return a4.call(e8, r4, o6);
    }
    function _4(e8, o6, a5) {
      q4(q4(e8, o6, a5), void 0, r3);
    }
    function V3(e8, r4) {
      _4(e8, r4);
    }
    function I3(e8, r4) {
      _4(e8, void 0, r4);
    }
    function F3(e8, r4, o6) {
      return q4(e8, r4, o6);
    }
    function Q3(e8) {
      q4(e8, void 0, r3);
    }
    n2(E4, "newPromise"), n2(T3, "promiseResolvedWith"), n2(b3, "promiseRejectedWith"), n2(q4, "PerformPromiseThen"), n2(_4, "uponPromise"), n2(V3, "uponFulfillment"), n2(I3, "uponRejection"), n2(F3, "transformPromiseWith"), n2(Q3, "setPromiseIsHandledToTrue");
    let s3 = n2((e8) => {
      if ("function" == typeof queueMicrotask)
        s3 = queueMicrotask;
      else {
        const e9 = T3(void 0);
        s3 = n2((r4) => q4(e9, r4), "_queueMicrotask");
      }
      return s3(e8);
    }, "_queueMicrotask");
    function z3(e8, r4, o6) {
      if ("function" != typeof e8)
        throw new TypeError("Argument is not a function");
      return Function.prototype.apply.call(e8, r4, o6);
    }
    function j3(e8, r4, o6) {
      try {
        return T3(z3(e8, r4, o6));
      } catch (e9) {
        return b3(e9);
      }
    }
    n2(z3, "reflectCall"), n2(j3, "promiseCall");
    const d3 = 16384, f2 = class {
      constructor() {
        this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
      }
      get length() {
        return this._size;
      }
      push(e8) {
        const r4 = this._back;
        let o6 = r4;
        r4._elements.length === d3 - 1 && (o6 = { _elements: [], _next: void 0 }), r4._elements.push(e8), o6 !== r4 && (this._back = o6, r4._next = o6), ++this._size;
      }
      shift() {
        const e8 = this._front;
        let r4 = e8;
        const o6 = this._cursor;
        let a5 = o6 + 1;
        const i5 = e8._elements, s4 = i5[o6];
        return a5 === d3 && (r4 = e8._next, a5 = 0), --this._size, this._cursor = a5, e8 !== r4 && (this._front = r4), i5[o6] = void 0, s4;
      }
      forEach(e8) {
        let r4 = this._cursor, o6 = this._front, a5 = o6._elements;
        for (; !(r4 === a5.length && void 0 === o6._next || r4 === a5.length && (o6 = o6._next, a5 = o6._elements, r4 = 0, 0 === a5.length)); )
          e8(a5[r4]), ++r4;
      }
      peek() {
        const e8 = this._front, r4 = this._cursor;
        return e8._elements[r4];
      }
    };
    n2(f2, "SimpleQueue");
    let p2 = f2;
    const h4 = Symbol("[[AbortSteps]]"), g2 = Symbol("[[ErrorSteps]]"), D3 = Symbol("[[CancelSteps]]"), v4 = Symbol("[[PullSteps]]"), w4 = Symbol("[[ReleaseSteps]]");
    function Yn(e8, r4) {
      e8._ownerReadableStream = r4, r4._reader = e8, "readable" === r4._state ? qr(e8) : "closed" === r4._state ? Li(e8) : Gn(e8, r4._storedError);
    }
    function Wr(e8, r4) {
      return ie3(e8._ownerReadableStream, r4);
    }
    function _e3(e8) {
      const r4 = e8._ownerReadableStream;
      "readable" === r4._state ? Or(e8, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : $i(e8, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), r4._readableStreamController[w4](), r4._reader = void 0, e8._ownerReadableStream = void 0;
    }
    function jt2(e8) {
      return new TypeError("Cannot " + e8 + " a stream using a released reader");
    }
    function qr(e8) {
      e8._closedPromise = E4((r4, o6) => {
        e8._closedPromise_resolve = r4, e8._closedPromise_reject = o6;
      });
    }
    function Gn(e8, r4) {
      qr(e8), Or(e8, r4);
    }
    function Li(e8) {
      qr(e8), Zn(e8);
    }
    function Or(e8, r4) {
      void 0 !== e8._closedPromise_reject && (Q3(e8._closedPromise), e8._closedPromise_reject(r4), e8._closedPromise_resolve = void 0, e8._closedPromise_reject = void 0);
    }
    function $i(e8, r4) {
      Gn(e8, r4);
    }
    function Zn(e8) {
      void 0 !== e8._closedPromise_resolve && (e8._closedPromise_resolve(void 0), e8._closedPromise_resolve = void 0, e8._closedPromise_reject = void 0);
    }
    n2(Yn, "ReadableStreamReaderGenericInitialize"), n2(Wr, "ReadableStreamReaderGenericCancel"), n2(_e3, "ReadableStreamReaderGenericRelease"), n2(jt2, "readerLockException"), n2(qr, "defaultReaderClosedPromiseInitialize"), n2(Gn, "defaultReaderClosedPromiseInitializeAsRejected"), n2(Li, "defaultReaderClosedPromiseInitializeAsResolved"), n2(Or, "defaultReaderClosedPromiseReject"), n2($i, "defaultReaderClosedPromiseResetToRejected"), n2(Zn, "defaultReaderClosedPromiseResolve");
    const S3 = Number.isFinite || function(e8) {
      return "number" == typeof e8 && isFinite(e8);
    }, A4 = Math.trunc || function(e8) {
      return e8 < 0 ? Math.ceil(e8) : Math.floor(e8);
    };
    function Mi(e8) {
      return "object" == typeof e8 || "function" == typeof e8;
    }
    function ue3(e8, r4) {
      if (void 0 !== e8 && !Mi(e8))
        throw new TypeError(`${r4} is not an object.`);
    }
    function Z4(e8, r4) {
      if ("function" != typeof e8)
        throw new TypeError(`${r4} is not a function.`);
    }
    function Ui(e8) {
      return "object" == typeof e8 && null !== e8 || "function" == typeof e8;
    }
    function Jn(e8, r4) {
      if (!Ui(e8))
        throw new TypeError(`${r4} is not an object.`);
    }
    function Se3(e8, r4, o6) {
      if (void 0 === e8)
        throw new TypeError(`Parameter ${r4} is required in '${o6}'.`);
    }
    function zr(e8, r4, o6) {
      if (void 0 === e8)
        throw new TypeError(`${r4} is required in '${o6}'.`);
    }
    function Ir(e8) {
      return Number(e8);
    }
    function Xn(e8) {
      return 0 === e8 ? 0 : e8;
    }
    function xi(e8) {
      return Xn(A4(e8));
    }
    function Fr(e8, r4) {
      const o6 = Number.MAX_SAFE_INTEGER;
      let a5 = Number(e8);
      if (a5 = Xn(a5), !S3(a5))
        throw new TypeError(`${r4} is not a finite number`);
      if (a5 = xi(a5), a5 < 0 || a5 > o6)
        throw new TypeError(`${r4} is outside the accepted range of 0 to ${o6}, inclusive`);
      return S3(a5) && 0 !== a5 ? a5 : 0;
    }
    function jr(e8, r4) {
      if (!We3(e8))
        throw new TypeError(`${r4} is not a ReadableStream.`);
    }
    function Qe3(e8) {
      return new M3(e8);
    }
    function eo(e8, r4) {
      e8._reader._readRequests.push(r4);
    }
    function Lr(e8, r4, o6) {
      const a5 = e8._reader._readRequests.shift();
      o6 ? a5._closeSteps() : a5._chunkSteps(r4);
    }
    function Lt2(e8) {
      return e8._reader._readRequests.length;
    }
    function to(e8) {
      const r4 = e8._reader;
      return !(void 0 === r4 || !Ee3(r4));
    }
    n2(Mi, "isDictionary"), n2(ue3, "assertDictionary"), n2(Z4, "assertFunction"), n2(Ui, "isObject"), n2(Jn, "assertObject"), n2(Se3, "assertRequiredArgument"), n2(zr, "assertRequiredField"), n2(Ir, "convertUnrestrictedDouble"), n2(Xn, "censorNegativeZero"), n2(xi, "integerPart"), n2(Fr, "convertUnsignedLongLongWithEnforceRange"), n2(jr, "assertReadableStream"), n2(Qe3, "AcquireReadableStreamDefaultReader"), n2(eo, "ReadableStreamAddReadRequest"), n2(Lr, "ReadableStreamFulfillReadRequest"), n2(Lt2, "ReadableStreamGetNumReadRequests"), n2(to, "ReadableStreamHasDefaultReader");
    const L3 = class {
      constructor(e8) {
        if (Se3(e8, 1, "ReadableStreamDefaultReader"), jr(e8, "First parameter"), qe3(e8))
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        Yn(this, e8), this._readRequests = new p2();
      }
      get closed() {
        return Ee3(this) ? this._closedPromise : b3($t2("closed"));
      }
      cancel(e8 = void 0) {
        return Ee3(this) ? void 0 === this._ownerReadableStream ? b3(jt2("cancel")) : Wr(this, e8) : b3($t2("cancel"));
      }
      read() {
        if (!Ee3(this))
          return b3($t2("read"));
        if (void 0 === this._ownerReadableStream)
          return b3(jt2("read from"));
        let e8, r4;
        const o6 = E4((o7, a5) => {
          e8 = o7, r4 = a5;
        });
        return mt2(this, { _chunkSteps: (r5) => e8({ value: r5, done: false }), _closeSteps: () => e8({ value: void 0, done: true }), _errorSteps: (e9) => r4(e9) }), o6;
      }
      releaseLock() {
        if (!Ee3(this))
          throw $t2("releaseLock");
        void 0 !== this._ownerReadableStream && Ni(this);
      }
    };
    n2(L3, "ReadableStreamDefaultReader");
    let M3 = L3;
    function Ee3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_readRequests")) && e8 instanceof M3;
    }
    function mt2(e8, r4) {
      const o6 = e8._ownerReadableStream;
      o6._disturbed = true, "closed" === o6._state ? r4._closeSteps() : "errored" === o6._state ? r4._errorSteps(o6._storedError) : o6._readableStreamController[v4](r4);
    }
    function Ni(e8) {
      _e3(e8), ro(e8, new TypeError("Reader was released"));
    }
    function ro(e8, r4) {
      const o6 = e8._readRequests;
      e8._readRequests = new p2(), o6.forEach((e9) => {
        e9._errorSteps(r4);
      });
    }
    function $t2(e8) {
      return new TypeError(`ReadableStreamDefaultReader.prototype.${e8} can only be used on a ReadableStreamDefaultReader`);
    }
    Object.defineProperties(M3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h22(M3.prototype.cancel, "cancel"), h22(M3.prototype.read, "read"), h22(M3.prototype.releaseLock, "releaseLock"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(M3.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true }), n2(Ee3, "IsReadableStreamDefaultReader"), n2(mt2, "ReadableStreamDefaultReaderRead"), n2(Ni, "ReadableStreamDefaultReaderRelease"), n2(ro, "ReadableStreamDefaultReaderErrorReadRequests"), n2($t2, "defaultReaderBrandCheckException");
    const B3 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
    }).prototype), U3 = class {
      constructor(e8, r4) {
        this._ongoingPromise = void 0, this._isFinished = false, this._reader = e8, this._preventCancel = r4;
      }
      next() {
        const e8 = n2(() => this._nextSteps(), "nextSteps");
        return this._ongoingPromise = this._ongoingPromise ? F3(this._ongoingPromise, e8, e8) : e8(), this._ongoingPromise;
      }
      return(e8) {
        const r4 = n2(() => this._returnSteps(e8), "returnSteps");
        return this._ongoingPromise ? F3(this._ongoingPromise, r4, r4) : r4();
      }
      _nextSteps() {
        if (this._isFinished)
          return Promise.resolve({ value: void 0, done: true });
        const e8 = this._reader;
        let r4, o6;
        const a5 = E4((e9, a6) => {
          r4 = e9, o6 = a6;
        });
        return mt2(e8, { _chunkSteps: (e9) => {
          this._ongoingPromise = void 0, s3(() => r4({ value: e9, done: false }));
        }, _closeSteps: () => {
          this._ongoingPromise = void 0, this._isFinished = true, _e3(e8), r4({ value: void 0, done: true });
        }, _errorSteps: (r5) => {
          this._ongoingPromise = void 0, this._isFinished = true, _e3(e8), o6(r5);
        } }), a5;
      }
      _returnSteps(e8) {
        if (this._isFinished)
          return Promise.resolve({ value: e8, done: true });
        this._isFinished = true;
        const r4 = this._reader;
        if (!this._preventCancel) {
          const o6 = Wr(r4, e8);
          return _e3(r4), F3(o6, () => ({ value: e8, done: true }));
        }
        return _e3(r4), T3({ value: e8, done: true });
      }
    };
    n2(U3, "ReadableStreamAsyncIteratorImpl");
    let H3 = U3;
    const $3 = { next() {
      return oo(this) ? this._asyncIteratorImpl.next() : b3(io("next"));
    }, return(e8) {
      return oo(this) ? this._asyncIteratorImpl.return(e8) : b3(io("return"));
    } };
    function Vi(e8, r4) {
      const o6 = Qe3(e8), a5 = new H3(o6, r4), i5 = Object.create($3);
      return i5._asyncIteratorImpl = a5, i5;
    }
    function oo(e8) {
      if (!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_asyncIteratorImpl"))
        return false;
      try {
        return e8._asyncIteratorImpl instanceof H3;
      } catch {
        return false;
      }
    }
    function io(e8) {
      return new TypeError(`ReadableStreamAsyncIterator.${e8} can only be used on a ReadableSteamAsyncIterator`);
    }
    Object.setPrototypeOf($3, B3), n2(Vi, "AcquireReadableStreamAsyncIterator"), n2(oo, "IsReadableStreamAsyncIterator"), n2(io, "streamAsyncIteratorBrandCheckException");
    const G3 = Number.isNaN || function(e8) {
      return e8 != e8;
    };
    var ee3, te3, re3;
    function yt2(e8) {
      return e8.slice();
    }
    function so(e8, r4, o6, a5, i5) {
      new Uint8Array(e8).set(new Uint8Array(o6, a5, i5), r4);
    }
    n2(yt2, "CreateArrayFromList"), n2(so, "CopyDataBlockBytes");
    let ne3 = n2((e8) => (ne3 = "function" == typeof e8.transfer ? n2((e9) => e9.transfer(), "TransferArrayBuffer") : "function" == typeof structuredClone ? n2((e9) => structuredClone(e9, { transfer: [e9] }), "TransferArrayBuffer") : n2((e9) => e9, "TransferArrayBuffer"), ne3(e8)), "TransferArrayBuffer"), se3 = n2((e8) => (se3 = "boolean" == typeof e8.detached ? n2((e9) => e9.detached, "IsDetachedBuffer") : n2((e9) => 0 === e9.byteLength, "IsDetachedBuffer"), se3(e8)), "IsDetachedBuffer");
    function lo(e8, r4, o6) {
      if (e8.slice)
        return e8.slice(r4, o6);
      const a5 = o6 - r4, i5 = new ArrayBuffer(a5);
      return so(i5, 0, e8, r4, a5), i5;
    }
    function Mt2(e8, r4) {
      const o6 = e8[r4];
      if (null != o6) {
        if ("function" != typeof o6)
          throw new TypeError(`${String(r4)} is not a function`);
        return o6;
      }
    }
    function Qi(e8) {
      const r4 = { [Symbol.iterator]: () => e8.iterator }, o6 = async function* () {
        return yield* r4;
      }();
      return { iterator: o6, nextMethod: o6.next, done: false };
    }
    n2(lo, "ArrayBufferSlice"), n2(Mt2, "GetMethod"), n2(Qi, "CreateAsyncFromSyncIterator");
    const le3 = null !== (re3 = null !== (ee3 = Symbol.asyncIterator) && void 0 !== ee3 ? ee3 : null === (te3 = Symbol.for) || void 0 === te3 ? void 0 : te3.call(Symbol, "Symbol.asyncIterator")) && void 0 !== re3 ? re3 : "@@asyncIterator";
    function uo(e8, r4 = "sync", o6) {
      if (void 0 === o6)
        if ("async" === r4) {
          if (void 0 === (o6 = Mt2(e8, le3)))
            return Qi(uo(e8, "sync", Mt2(e8, Symbol.iterator)));
        } else
          o6 = Mt2(e8, Symbol.iterator);
      if (void 0 === o6)
        throw new TypeError("The object is not iterable");
      const a5 = z3(o6, e8, []);
      if (!l22(a5))
        throw new TypeError("The iterator method must return an object");
      return { iterator: a5, nextMethod: a5.next, done: false };
    }
    function Yi(e8) {
      const r4 = z3(e8.nextMethod, e8.iterator, []);
      if (!l22(r4))
        throw new TypeError("The iterator.next() method must return an object");
      return r4;
    }
    function Gi(e8) {
      return !!e8.done;
    }
    function Zi(e8) {
      return e8.value;
    }
    function Ki(e8) {
      return !("number" != typeof e8 || G3(e8) || e8 < 0);
    }
    function fo(e8) {
      const r4 = lo(e8.buffer, e8.byteOffset, e8.byteOffset + e8.byteLength);
      return new Uint8Array(r4);
    }
    function xr(e8) {
      const r4 = e8._queue.shift();
      return e8._queueTotalSize -= r4.size, e8._queueTotalSize < 0 && (e8._queueTotalSize = 0), r4.value;
    }
    function Nr(e8, r4, o6) {
      if (!Ki(o6) || o6 === 1 / 0)
        throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
      e8._queue.push({ value: r4, size: o6 }), e8._queueTotalSize += o6;
    }
    function Ji(e8) {
      return e8._queue.peek().value;
    }
    function Be3(e8) {
      e8._queue = new p2(), e8._queueTotalSize = 0;
    }
    function co(e8) {
      return e8 === DataView;
    }
    function Xi(e8) {
      return co(e8.constructor);
    }
    function ea(e8) {
      return co(e8) ? 1 : e8.BYTES_PER_ELEMENT;
    }
    n2(uo, "GetIterator"), n2(Yi, "IteratorNext"), n2(Gi, "IteratorComplete"), n2(Zi, "IteratorValue"), n2(Ki, "IsNonNegativeNumber"), n2(fo, "CloneAsUint8Array"), n2(xr, "DequeueValue"), n2(Nr, "EnqueueValueWithSize"), n2(Ji, "PeekQueueValue"), n2(Be3, "ResetQueue"), n2(co, "isDataViewConstructor"), n2(Xi, "isDataView"), n2(ea, "arrayBufferViewElementSize");
    const ce3 = class {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get view() {
        if (!Hr(this))
          throw Zr("view");
        return this._view;
      }
      respond(e8) {
        if (!Hr(this))
          throw Zr("respond");
        if (Se3(e8, 1, "respond"), e8 = Fr(e8, "First parameter"), void 0 === this._associatedReadableByteStreamController)
          throw new TypeError("This BYOB request has been invalidated");
        if (se3(this._view.buffer))
          throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
        Ht2(this._associatedReadableByteStreamController, e8);
      }
      respondWithNewView(e8) {
        if (!Hr(this))
          throw Zr("respondWithNewView");
        if (Se3(e8, 1, "respondWithNewView"), !ArrayBuffer.isView(e8))
          throw new TypeError("You can only respond with array buffer views");
        if (void 0 === this._associatedReadableByteStreamController)
          throw new TypeError("This BYOB request has been invalidated");
        if (se3(e8.buffer))
          throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
        Vt2(this._associatedReadableByteStreamController, e8);
      }
    };
    n2(ce3, "ReadableStreamBYOBRequest");
    let de3 = ce3;
    Object.defineProperties(de3.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h22(de3.prototype.respond, "respond"), h22(de3.prototype.respondWithNewView, "respondWithNewView"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(de3.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
    const fe3 = class {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get byobRequest() {
        if (!ze3(this))
          throw _t2("byobRequest");
        return Gr(this);
      }
      get desiredSize() {
        if (!ze3(this))
          throw _t2("desiredSize");
        return Ro(this);
      }
      close() {
        if (!ze3(this))
          throw _t2("close");
        if (this._closeRequested)
          throw new TypeError("The stream has already been closed; do not close it again!");
        const e8 = this._controlledReadableByteStream._state;
        if ("readable" !== e8)
          throw new TypeError(`The stream (in ${e8} state) is not in the readable state and cannot be closed`);
        gt2(this);
      }
      enqueue(e8) {
        if (!ze3(this))
          throw _t2("enqueue");
        if (Se3(e8, 1, "enqueue"), !ArrayBuffer.isView(e8))
          throw new TypeError("chunk must be an array buffer view");
        if (0 === e8.byteLength)
          throw new TypeError("chunk must have non-zero byteLength");
        if (0 === e8.buffer.byteLength)
          throw new TypeError("chunk's buffer must have non-zero byteLength");
        if (this._closeRequested)
          throw new TypeError("stream is closed or draining");
        const r4 = this._controlledReadableByteStream._state;
        if ("readable" !== r4)
          throw new TypeError(`The stream (in ${r4} state) is not in the readable state and cannot be enqueued to`);
        Nt2(this, e8);
      }
      error(e8 = void 0) {
        if (!ze3(this))
          throw _t2("error");
        K3(this, e8);
      }
      [D3](e8) {
        ho(this), Be3(this);
        const r4 = this._cancelAlgorithm(e8);
        return xt2(this), r4;
      }
      [v4](e8) {
        const r4 = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0)
          return void wo(this, e8);
        const o6 = this._autoAllocateChunkSize;
        if (void 0 !== o6) {
          let r5;
          try {
            r5 = new ArrayBuffer(o6);
          } catch (r6) {
            return void e8._errorSteps(r6);
          }
          const a5 = { buffer: r5, bufferByteLength: o6, byteOffset: 0, byteLength: o6, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
          this._pendingPullIntos.push(a5);
        }
        eo(r4, e8), Ie3(this);
      }
      [w4]() {
        if (this._pendingPullIntos.length > 0) {
          const e8 = this._pendingPullIntos.peek();
          e8.readerType = "none", this._pendingPullIntos = new p2(), this._pendingPullIntos.push(e8);
        }
      }
    };
    n2(fe3, "ReadableByteStreamController");
    let pe3 = fe3;
    function ze3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_controlledReadableByteStream")) && e8 instanceof pe3;
    }
    function Hr(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_associatedReadableByteStreamController")) && e8 instanceof de3;
    }
    function Ie3(e8) {
      ia(e8) && (e8._pulling ? e8._pullAgain = true : (e8._pulling = true, _4(e8._pullAlgorithm(), () => (e8._pulling = false, e8._pullAgain && (e8._pullAgain = false, Ie3(e8)), null), (r4) => (K3(e8, r4), null))));
    }
    function ho(e8) {
      Qr(e8), e8._pendingPullIntos = new p2();
    }
    function Vr(e8, r4) {
      let o6 = false;
      "closed" === e8._state && (o6 = true);
      const a5 = po(r4);
      "default" === r4.readerType ? Lr(e8, a5, o6) : ca(e8, a5, o6);
    }
    function po(e8) {
      const r4 = e8.bytesFilled, o6 = e8.elementSize;
      return new e8.viewConstructor(e8.buffer, e8.byteOffset, r4 / o6);
    }
    function Ut2(e8, r4, o6, a5) {
      e8._queue.push({ buffer: r4, byteOffset: o6, byteLength: a5 }), e8._queueTotalSize += a5;
    }
    function bo(e8, r4, o6, a5) {
      let i5;
      try {
        i5 = lo(r4, o6, o6 + a5);
      } catch (r5) {
        throw K3(e8, r5), r5;
      }
      Ut2(e8, i5, 0, a5);
    }
    function mo(e8, r4) {
      r4.bytesFilled > 0 && bo(e8, r4.buffer, r4.byteOffset, r4.bytesFilled), Ye3(e8);
    }
    function yo(e8, r4) {
      const o6 = Math.min(e8._queueTotalSize, r4.byteLength - r4.bytesFilled), a5 = r4.bytesFilled + o6;
      let i5 = o6, s4 = false;
      const d4 = a5 - a5 % r4.elementSize;
      d4 >= r4.minimumFill && (i5 = d4 - r4.bytesFilled, s4 = true);
      const f3 = e8._queue;
      for (; i5 > 0; ) {
        const o7 = f3.peek(), a6 = Math.min(i5, o7.byteLength), s5 = r4.byteOffset + r4.bytesFilled;
        so(r4.buffer, s5, o7.buffer, o7.byteOffset, a6), o7.byteLength === a6 ? f3.shift() : (o7.byteOffset += a6, o7.byteLength -= a6), e8._queueTotalSize -= a6, go(e8, a6, r4), i5 -= a6;
      }
      return s4;
    }
    function go(e8, r4, o6) {
      o6.bytesFilled += r4;
    }
    function _o(e8) {
      0 === e8._queueTotalSize && e8._closeRequested ? (xt2(e8), Pt2(e8._controlledReadableByteStream)) : Ie3(e8);
    }
    function Qr(e8) {
      null !== e8._byobRequest && (e8._byobRequest._associatedReadableByteStreamController = void 0, e8._byobRequest._view = null, e8._byobRequest = null);
    }
    function Yr(e8) {
      for (; e8._pendingPullIntos.length > 0; ) {
        if (0 === e8._queueTotalSize)
          return;
        const r4 = e8._pendingPullIntos.peek();
        yo(e8, r4) && (Ye3(e8), Vr(e8._controlledReadableByteStream, r4));
      }
    }
    function ta(e8) {
      const r4 = e8._controlledReadableByteStream._reader;
      for (; r4._readRequests.length > 0; ) {
        if (0 === e8._queueTotalSize)
          return;
        wo(e8, r4._readRequests.shift());
      }
    }
    function ra(e8, r4, o6, a5) {
      const i5 = e8._controlledReadableByteStream, s4 = r4.constructor, d4 = ea(s4), { byteOffset: f3, byteLength: p3 } = r4, h5 = o6 * d4;
      let g3;
      try {
        g3 = ne3(r4.buffer);
      } catch (e9) {
        return void a5._errorSteps(e9);
      }
      const D4 = { buffer: g3, bufferByteLength: g3.byteLength, byteOffset: f3, byteLength: p3, bytesFilled: 0, minimumFill: h5, elementSize: d4, viewConstructor: s4, readerType: "byob" };
      if (e8._pendingPullIntos.length > 0)
        return e8._pendingPullIntos.push(D4), void Po(i5, a5);
      if ("closed" !== i5._state) {
        if (e8._queueTotalSize > 0) {
          if (yo(e8, D4)) {
            const r5 = po(D4);
            return _o(e8), void a5._chunkSteps(r5);
          }
          if (e8._closeRequested) {
            const r5 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            return K3(e8, r5), void a5._errorSteps(r5);
          }
        }
        e8._pendingPullIntos.push(D4), Po(i5, a5), Ie3(e8);
      } else {
        const e9 = new s4(D4.buffer, D4.byteOffset, 0);
        a5._closeSteps(e9);
      }
    }
    function na(e8, r4) {
      "none" === r4.readerType && Ye3(e8);
      const o6 = e8._controlledReadableByteStream;
      if (Kr(o6))
        for (; vo(o6) > 0; )
          Vr(o6, Ye3(e8));
    }
    function oa(e8, r4, o6) {
      if (go(e8, r4, o6), "none" === o6.readerType)
        return mo(e8, o6), void Yr(e8);
      if (o6.bytesFilled < o6.minimumFill)
        return;
      Ye3(e8);
      const a5 = o6.bytesFilled % o6.elementSize;
      if (a5 > 0) {
        const r5 = o6.byteOffset + o6.bytesFilled;
        bo(e8, o6.buffer, r5 - a5, a5);
      }
      o6.bytesFilled -= a5, Vr(e8._controlledReadableByteStream, o6), Yr(e8);
    }
    function So(e8, r4) {
      const o6 = e8._pendingPullIntos.peek();
      Qr(e8), "closed" === e8._controlledReadableByteStream._state ? na(e8, o6) : oa(e8, r4, o6), Ie3(e8);
    }
    function Ye3(e8) {
      return e8._pendingPullIntos.shift();
    }
    function ia(e8) {
      const r4 = e8._controlledReadableByteStream;
      return !("readable" !== r4._state || e8._closeRequested || !e8._started || !(to(r4) && Lt2(r4) > 0 || Kr(r4) && vo(r4) > 0 || Ro(e8) > 0));
    }
    function xt2(e8) {
      e8._pullAlgorithm = void 0, e8._cancelAlgorithm = void 0;
    }
    function gt2(e8) {
      const r4 = e8._controlledReadableByteStream;
      if (!e8._closeRequested && "readable" === r4._state) {
        if (e8._queueTotalSize > 0)
          return void (e8._closeRequested = true);
        if (e8._pendingPullIntos.length > 0) {
          const r5 = e8._pendingPullIntos.peek();
          if (r5.bytesFilled % r5.elementSize != 0) {
            const r6 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw K3(e8, r6), r6;
          }
        }
        xt2(e8), Pt2(r4);
      }
    }
    function Nt2(e8, r4) {
      const o6 = e8._controlledReadableByteStream;
      if (e8._closeRequested || "readable" !== o6._state)
        return;
      const { buffer: a5, byteOffset: i5, byteLength: s4 } = r4;
      if (se3(a5))
        throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
      const d4 = ne3(a5);
      if (e8._pendingPullIntos.length > 0) {
        const r5 = e8._pendingPullIntos.peek();
        if (se3(r5.buffer))
          throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
        Qr(e8), r5.buffer = ne3(r5.buffer), "none" === r5.readerType && mo(e8, r5);
      }
      to(o6) ? (ta(e8), 0 === Lt2(o6) ? Ut2(e8, d4, i5, s4) : (e8._pendingPullIntos.length > 0 && Ye3(e8), Lr(o6, new Uint8Array(d4, i5, s4), false))) : Kr(o6) ? (Ut2(e8, d4, i5, s4), Yr(e8)) : Ut2(e8, d4, i5, s4), Ie3(e8);
    }
    function K3(e8, r4) {
      const o6 = e8._controlledReadableByteStream;
      "readable" === o6._state && (ho(e8), Be3(e8), xt2(e8), Zo(o6, r4));
    }
    function wo(e8, r4) {
      const o6 = e8._queue.shift();
      e8._queueTotalSize -= o6.byteLength, _o(e8);
      const a5 = new Uint8Array(o6.buffer, o6.byteOffset, o6.byteLength);
      r4._chunkSteps(a5);
    }
    function Gr(e8) {
      if (null === e8._byobRequest && e8._pendingPullIntos.length > 0) {
        const r4 = e8._pendingPullIntos.peek(), o6 = new Uint8Array(r4.buffer, r4.byteOffset + r4.bytesFilled, r4.byteLength - r4.bytesFilled), a5 = Object.create(de3.prototype);
        sa(a5, e8, o6), e8._byobRequest = a5;
      }
      return e8._byobRequest;
    }
    function Ro(e8) {
      const r4 = e8._controlledReadableByteStream._state;
      return "errored" === r4 ? null : "closed" === r4 ? 0 : e8._strategyHWM - e8._queueTotalSize;
    }
    function Ht2(e8, r4) {
      const o6 = e8._pendingPullIntos.peek();
      if ("closed" === e8._controlledReadableByteStream._state) {
        if (0 !== r4)
          throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
      } else {
        if (0 === r4)
          throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
        if (o6.bytesFilled + r4 > o6.byteLength)
          throw new RangeError("bytesWritten out of range");
      }
      o6.buffer = ne3(o6.buffer), So(e8, r4);
    }
    function Vt2(e8, r4) {
      const o6 = e8._pendingPullIntos.peek();
      if ("closed" === e8._controlledReadableByteStream._state) {
        if (0 !== r4.byteLength)
          throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
      } else if (0 === r4.byteLength)
        throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
      if (o6.byteOffset + o6.bytesFilled !== r4.byteOffset)
        throw new RangeError("The region specified by view does not match byobRequest");
      if (o6.bufferByteLength !== r4.buffer.byteLength)
        throw new RangeError("The buffer of view has different capacity than byobRequest");
      if (o6.bytesFilled + r4.byteLength > o6.byteLength)
        throw new RangeError("The region specified by view is larger than byobRequest");
      const a5 = r4.byteLength;
      o6.buffer = ne3(r4.buffer), So(e8, a5);
    }
    function To(e8, r4, o6, a5, i5, s4, d4) {
      r4._controlledReadableByteStream = e8, r4._pullAgain = false, r4._pulling = false, r4._byobRequest = null, r4._queue = r4._queueTotalSize = void 0, Be3(r4), r4._closeRequested = false, r4._started = false, r4._strategyHWM = s4, r4._pullAlgorithm = a5, r4._cancelAlgorithm = i5, r4._autoAllocateChunkSize = d4, r4._pendingPullIntos = new p2(), e8._readableStreamController = r4, _4(T3(o6()), () => (r4._started = true, Ie3(r4), null), (e9) => (K3(r4, e9), null));
    }
    function aa(e8, r4, o6) {
      const a5 = Object.create(pe3.prototype);
      let i5, s4, d4;
      i5 = void 0 !== r4.start ? n2(() => r4.start(a5), "startAlgorithm") : n2(() => {
      }, "startAlgorithm"), s4 = void 0 !== r4.pull ? n2(() => r4.pull(a5), "pullAlgorithm") : n2(() => T3(void 0), "pullAlgorithm"), d4 = void 0 !== r4.cancel ? n2((e9) => r4.cancel(e9), "cancelAlgorithm") : n2(() => T3(void 0), "cancelAlgorithm");
      const f3 = r4.autoAllocateChunkSize;
      if (0 === f3)
        throw new TypeError("autoAllocateChunkSize must be greater than 0");
      To(e8, a5, i5, s4, d4, o6, f3);
    }
    function sa(e8, r4, o6) {
      e8._associatedReadableByteStreamController = r4, e8._view = o6;
    }
    function Zr(e8) {
      return new TypeError(`ReadableStreamBYOBRequest.prototype.${e8} can only be used on a ReadableStreamBYOBRequest`);
    }
    function _t2(e8) {
      return new TypeError(`ReadableByteStreamController.prototype.${e8} can only be used on a ReadableByteStreamController`);
    }
    function la(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.mode;
      return { mode: void 0 === o6 ? void 0 : ua(o6, `${r4} has member 'mode' that`) };
    }
    function ua(e8, r4) {
      if ("byob" != (e8 = `${e8}`))
        throw new TypeError(`${r4} '${e8}' is not a valid enumeration value for ReadableStreamReaderMode`);
      return e8;
    }
    function fa(e8, r4) {
      var o6;
      return ue3(e8, r4), { min: Fr(null !== (o6 = null == e8 ? void 0 : e8.min) && void 0 !== o6 ? o6 : 1, `${r4} has member 'min' that`) };
    }
    function Co(e8) {
      return new ye3(e8);
    }
    function Po(e8, r4) {
      e8._reader._readIntoRequests.push(r4);
    }
    function ca(e8, r4, o6) {
      const a5 = e8._reader._readIntoRequests.shift();
      o6 ? a5._closeSteps(r4) : a5._chunkSteps(r4);
    }
    function vo(e8) {
      return e8._reader._readIntoRequests.length;
    }
    function Kr(e8) {
      const r4 = e8._reader;
      return !(void 0 === r4 || !Fe3(r4));
    }
    Object.defineProperties(pe3.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h22(pe3.prototype.close, "close"), h22(pe3.prototype.enqueue, "enqueue"), h22(pe3.prototype.error, "error"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(pe3.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true }), n2(ze3, "IsReadableByteStreamController"), n2(Hr, "IsReadableStreamBYOBRequest"), n2(Ie3, "ReadableByteStreamControllerCallPullIfNeeded"), n2(ho, "ReadableByteStreamControllerClearPendingPullIntos"), n2(Vr, "ReadableByteStreamControllerCommitPullIntoDescriptor"), n2(po, "ReadableByteStreamControllerConvertPullIntoDescriptor"), n2(Ut2, "ReadableByteStreamControllerEnqueueChunkToQueue"), n2(bo, "ReadableByteStreamControllerEnqueueClonedChunkToQueue"), n2(mo, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue"), n2(yo, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue"), n2(go, "ReadableByteStreamControllerFillHeadPullIntoDescriptor"), n2(_o, "ReadableByteStreamControllerHandleQueueDrain"), n2(Qr, "ReadableByteStreamControllerInvalidateBYOBRequest"), n2(Yr, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue"), n2(ta, "ReadableByteStreamControllerProcessReadRequestsUsingQueue"), n2(ra, "ReadableByteStreamControllerPullInto"), n2(na, "ReadableByteStreamControllerRespondInClosedState"), n2(oa, "ReadableByteStreamControllerRespondInReadableState"), n2(So, "ReadableByteStreamControllerRespondInternal"), n2(Ye3, "ReadableByteStreamControllerShiftPendingPullInto"), n2(ia, "ReadableByteStreamControllerShouldCallPull"), n2(xt2, "ReadableByteStreamControllerClearAlgorithms"), n2(gt2, "ReadableByteStreamControllerClose"), n2(Nt2, "ReadableByteStreamControllerEnqueue"), n2(K3, "ReadableByteStreamControllerError"), n2(wo, "ReadableByteStreamControllerFillReadRequestFromQueue"), n2(Gr, "ReadableByteStreamControllerGetBYOBRequest"), n2(Ro, "ReadableByteStreamControllerGetDesiredSize"), n2(Ht2, "ReadableByteStreamControllerRespond"), n2(Vt2, "ReadableByteStreamControllerRespondWithNewView"), n2(To, "SetUpReadableByteStreamController"), n2(aa, "SetUpReadableByteStreamControllerFromUnderlyingSource"), n2(sa, "SetUpReadableStreamBYOBRequest"), n2(Zr, "byobRequestBrandCheckException"), n2(_t2, "byteStreamControllerBrandCheckException"), n2(la, "convertReaderOptions"), n2(ua, "convertReadableStreamReaderMode"), n2(fa, "convertByobReadOptions"), n2(Co, "AcquireReadableStreamBYOBReader"), n2(Po, "ReadableStreamAddReadIntoRequest"), n2(ca, "ReadableStreamFulfillReadIntoRequest"), n2(vo, "ReadableStreamGetNumReadIntoRequests"), n2(Kr, "ReadableStreamHasBYOBReader");
    const me3 = class {
      constructor(e8) {
        if (Se3(e8, 1, "ReadableStreamBYOBReader"), jr(e8, "First parameter"), qe3(e8))
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        if (!ze3(e8._readableStreamController))
          throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
        Yn(this, e8), this._readIntoRequests = new p2();
      }
      get closed() {
        return Fe3(this) ? this._closedPromise : b3(Qt2("closed"));
      }
      cancel(e8 = void 0) {
        return Fe3(this) ? void 0 === this._ownerReadableStream ? b3(jt2("cancel")) : Wr(this, e8) : b3(Qt2("cancel"));
      }
      read(e8, r4 = {}) {
        if (!Fe3(this))
          return b3(Qt2("read"));
        if (!ArrayBuffer.isView(e8))
          return b3(new TypeError("view must be an array buffer view"));
        if (0 === e8.byteLength)
          return b3(new TypeError("view must have non-zero byteLength"));
        if (0 === e8.buffer.byteLength)
          return b3(new TypeError("view's buffer must have non-zero byteLength"));
        if (se3(e8.buffer))
          return b3(new TypeError("view's buffer has been detached"));
        let o6;
        try {
          o6 = fa(r4, "options");
        } catch (e9) {
          return b3(e9);
        }
        const a5 = o6.min;
        if (0 === a5)
          return b3(new TypeError("options.min must be greater than 0"));
        if (Xi(e8)) {
          if (a5 > e8.byteLength)
            return b3(new RangeError("options.min must be less than or equal to view's byteLength"));
        } else if (a5 > e8.length)
          return b3(new RangeError("options.min must be less than or equal to view's length"));
        if (void 0 === this._ownerReadableStream)
          return b3(jt2("read from"));
        let i5, s4;
        const d4 = E4((e9, r5) => {
          i5 = e9, s4 = r5;
        });
        return Eo(this, e8, a5, { _chunkSteps: (e9) => i5({ value: e9, done: false }), _closeSteps: (e9) => i5({ value: e9, done: true }), _errorSteps: (e9) => s4(e9) }), d4;
      }
      releaseLock() {
        if (!Fe3(this))
          throw Qt2("releaseLock");
        void 0 !== this._ownerReadableStream && da(this);
      }
    };
    n2(me3, "ReadableStreamBYOBReader");
    let ye3 = me3;
    function Fe3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_readIntoRequests")) && e8 instanceof ye3;
    }
    function Eo(e8, r4, o6, a5) {
      const i5 = e8._ownerReadableStream;
      i5._disturbed = true, "errored" === i5._state ? a5._errorSteps(i5._storedError) : ra(i5._readableStreamController, r4, o6, a5);
    }
    function da(e8) {
      _e3(e8), Ao(e8, new TypeError("Reader was released"));
    }
    function Ao(e8, r4) {
      const o6 = e8._readIntoRequests;
      e8._readIntoRequests = new p2(), o6.forEach((e9) => {
        e9._errorSteps(r4);
      });
    }
    function Qt2(e8) {
      return new TypeError(`ReadableStreamBYOBReader.prototype.${e8} can only be used on a ReadableStreamBYOBReader`);
    }
    function St2(e8, r4) {
      const { highWaterMark: o6 } = e8;
      if (void 0 === o6)
        return r4;
      if (G3(o6) || o6 < 0)
        throw new RangeError("Invalid highWaterMark");
      return o6;
    }
    function Yt2(e8) {
      const { size: r4 } = e8;
      return r4 || (() => 1);
    }
    function Gt2(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.highWaterMark, a5 = null == e8 ? void 0 : e8.size;
      return { highWaterMark: void 0 === o6 ? void 0 : Ir(o6), size: void 0 === a5 ? void 0 : ha(a5, `${r4} has member 'size' that`) };
    }
    function ha(e8, r4) {
      return Z4(e8, r4), (r5) => Ir(e8(r5));
    }
    function pa(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.abort, a5 = null == e8 ? void 0 : e8.close, i5 = null == e8 ? void 0 : e8.start, s4 = null == e8 ? void 0 : e8.type, d4 = null == e8 ? void 0 : e8.write;
      return { abort: void 0 === o6 ? void 0 : ba(o6, e8, `${r4} has member 'abort' that`), close: void 0 === a5 ? void 0 : ma(a5, e8, `${r4} has member 'close' that`), start: void 0 === i5 ? void 0 : ya(i5, e8, `${r4} has member 'start' that`), write: void 0 === d4 ? void 0 : ga(d4, e8, `${r4} has member 'write' that`), type: s4 };
    }
    function ba(e8, r4, o6) {
      return Z4(e8, o6), (o7) => j3(e8, r4, [o7]);
    }
    function ma(e8, r4, o6) {
      return Z4(e8, o6), () => j3(e8, r4, []);
    }
    function ya(e8, r4, o6) {
      return Z4(e8, o6), (o7) => z3(e8, r4, [o7]);
    }
    function ga(e8, r4, o6) {
      return Z4(e8, o6), (o7, a5) => j3(e8, r4, [o7, a5]);
    }
    function Bo(e8, r4) {
      if (!Ge3(e8))
        throw new TypeError(`${r4} is not a WritableStream.`);
    }
    function _a2(e8) {
      if ("object" != typeof e8 || null === e8)
        return false;
      try {
        return "boolean" == typeof e8.aborted;
      } catch {
        return false;
      }
    }
    Object.defineProperties(ye3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h22(ye3.prototype.cancel, "cancel"), h22(ye3.prototype.read, "read"), h22(ye3.prototype.releaseLock, "releaseLock"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(ye3.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true }), n2(Fe3, "IsReadableStreamBYOBReader"), n2(Eo, "ReadableStreamBYOBReaderRead"), n2(da, "ReadableStreamBYOBReaderRelease"), n2(Ao, "ReadableStreamBYOBReaderErrorReadIntoRequests"), n2(Qt2, "byobReaderBrandCheckException"), n2(St2, "ExtractHighWaterMark"), n2(Yt2, "ExtractSizeAlgorithm"), n2(Gt2, "convertQueuingStrategy"), n2(ha, "convertQueuingStrategySize"), n2(pa, "convertUnderlyingSink"), n2(ba, "convertUnderlyingSinkAbortCallback"), n2(ma, "convertUnderlyingSinkCloseCallback"), n2(ya, "convertUnderlyingSinkStartCallback"), n2(ga, "convertUnderlyingSinkWriteCallback"), n2(Bo, "assertWritableStream"), n2(_a2, "isAbortSignal");
    const ge3 = "function" == typeof AbortController;
    function wa() {
      if (ge3)
        return new AbortController();
    }
    n2(wa, "createAbortController");
    const ve3 = class {
      constructor(e8 = {}, r4 = {}) {
        void 0 === e8 ? e8 = null : Jn(e8, "First parameter");
        const o6 = Gt2(r4, "Second parameter"), a5 = pa(e8, "First parameter");
        if (Wo(this), void 0 !== a5.type)
          throw new RangeError("Invalid type is specified");
        const i5 = Yt2(o6);
        Ia(this, a5, St2(o6, 1), i5);
      }
      get locked() {
        if (!Ge3(this))
          throw er("locked");
        return Ze3(this);
      }
      abort(e8 = void 0) {
        return Ge3(this) ? Ze3(this) ? b3(new TypeError("Cannot abort a stream that already has a writer")) : Zt2(this, e8) : b3(er("abort"));
      }
      close() {
        return Ge3(this) ? Ze3(this) ? b3(new TypeError("Cannot close a stream that already has a writer")) : he3(this) ? b3(new TypeError("Cannot close an already-closing stream")) : qo(this) : b3(er("close"));
      }
      getWriter() {
        if (!Ge3(this))
          throw er("getWriter");
        return ko(this);
      }
    };
    n2(ve3, "WritableStream");
    let we3 = ve3;
    function ko(e8) {
      return new xe4(e8);
    }
    function Ra(e8, r4, o6, a5, i5 = 1, s4 = () => 1) {
      const d4 = Object.create(we3.prototype);
      return Wo(d4), Lo(d4, Object.create(Me3.prototype), e8, r4, o6, a5, i5, s4), d4;
    }
    function Wo(e8) {
      e8._state = "writable", e8._storedError = void 0, e8._writer = void 0, e8._writableStreamController = void 0, e8._writeRequests = new p2(), e8._inFlightWriteRequest = void 0, e8._closeRequest = void 0, e8._inFlightCloseRequest = void 0, e8._pendingAbortRequest = void 0, e8._backpressure = false;
    }
    function Ge3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_writableStreamController")) && e8 instanceof we3;
    }
    function Ze3(e8) {
      return void 0 !== e8._writer;
    }
    function Zt2(e8, r4) {
      var o6;
      if ("closed" === e8._state || "errored" === e8._state)
        return T3(void 0);
      e8._writableStreamController._abortReason = r4, null === (o6 = e8._writableStreamController._abortController) || void 0 === o6 || o6.abort(r4);
      const a5 = e8._state;
      if ("closed" === a5 || "errored" === a5)
        return T3(void 0);
      if (void 0 !== e8._pendingAbortRequest)
        return e8._pendingAbortRequest._promise;
      let i5 = false;
      "erroring" === a5 && (i5 = true, r4 = void 0);
      const s4 = E4((o7, a6) => {
        e8._pendingAbortRequest = { _promise: void 0, _resolve: o7, _reject: a6, _reason: r4, _wasAlreadyErroring: i5 };
      });
      return e8._pendingAbortRequest._promise = s4, i5 || Xr(e8, r4), s4;
    }
    function qo(e8) {
      const r4 = e8._state;
      if ("closed" === r4 || "errored" === r4)
        return b3(new TypeError(`The stream (in ${r4} state) is not in the writable state and cannot be closed`));
      const o6 = E4((r5, o7) => {
        const a6 = { _resolve: r5, _reject: o7 };
        e8._closeRequest = a6;
      }), a5 = e8._writer;
      return void 0 !== a5 && e8._backpressure && "writable" === r4 && ln2(a5), Fa(e8._writableStreamController), o6;
    }
    function Ta(e8) {
      return E4((r4, o6) => {
        const a5 = { _resolve: r4, _reject: o6 };
        e8._writeRequests.push(a5);
      });
    }
    function Jr(e8, r4) {
      "writable" !== e8._state ? en2(e8) : Xr(e8, r4);
    }
    function Xr(e8, r4) {
      const o6 = e8._writableStreamController;
      e8._state = "erroring", e8._storedError = r4;
      const a5 = e8._writer;
      void 0 !== a5 && zo(a5, r4), !Aa(e8) && o6._started && en2(e8);
    }
    function en2(e8) {
      e8._state = "errored", e8._writableStreamController[g2]();
      const r4 = e8._storedError;
      if (e8._writeRequests.forEach((e9) => {
        e9._reject(r4);
      }), e8._writeRequests = new p2(), void 0 === e8._pendingAbortRequest)
        return void Kt2(e8);
      const o6 = e8._pendingAbortRequest;
      if (e8._pendingAbortRequest = void 0, o6._wasAlreadyErroring)
        return o6._reject(r4), void Kt2(e8);
      _4(e8._writableStreamController[h4](o6._reason), () => (o6._resolve(), Kt2(e8), null), (r5) => (o6._reject(r5), Kt2(e8), null));
    }
    function Ca(e8) {
      e8._inFlightWriteRequest._resolve(void 0), e8._inFlightWriteRequest = void 0;
    }
    function Pa(e8, r4) {
      e8._inFlightWriteRequest._reject(r4), e8._inFlightWriteRequest = void 0, Jr(e8, r4);
    }
    function va(e8) {
      e8._inFlightCloseRequest._resolve(void 0), e8._inFlightCloseRequest = void 0, "erroring" === e8._state && (e8._storedError = void 0, void 0 !== e8._pendingAbortRequest && (e8._pendingAbortRequest._resolve(), e8._pendingAbortRequest = void 0)), e8._state = "closed";
      const r4 = e8._writer;
      void 0 !== r4 && Uo(r4);
    }
    function Ea(e8, r4) {
      e8._inFlightCloseRequest._reject(r4), e8._inFlightCloseRequest = void 0, void 0 !== e8._pendingAbortRequest && (e8._pendingAbortRequest._reject(r4), e8._pendingAbortRequest = void 0), Jr(e8, r4);
    }
    function he3(e8) {
      return !(void 0 === e8._closeRequest && void 0 === e8._inFlightCloseRequest);
    }
    function Aa(e8) {
      return !(void 0 === e8._inFlightWriteRequest && void 0 === e8._inFlightCloseRequest);
    }
    function Ba(e8) {
      e8._inFlightCloseRequest = e8._closeRequest, e8._closeRequest = void 0;
    }
    function ka(e8) {
      e8._inFlightWriteRequest = e8._writeRequests.shift();
    }
    function Kt2(e8) {
      void 0 !== e8._closeRequest && (e8._closeRequest._reject(e8._storedError), e8._closeRequest = void 0);
      const r4 = e8._writer;
      void 0 !== r4 && an2(r4, e8._storedError);
    }
    function tn2(e8, r4) {
      const o6 = e8._writer;
      void 0 !== o6 && r4 !== e8._backpressure && (r4 ? xa(o6) : ln2(o6)), e8._backpressure = r4;
    }
    Object.defineProperties(we3.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h22(we3.prototype.abort, "abort"), h22(we3.prototype.close, "close"), h22(we3.prototype.getWriter, "getWriter"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(we3.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true }), n2(ko, "AcquireWritableStreamDefaultWriter"), n2(Ra, "CreateWritableStream"), n2(Wo, "InitializeWritableStream"), n2(Ge3, "IsWritableStream"), n2(Ze3, "IsWritableStreamLocked"), n2(Zt2, "WritableStreamAbort"), n2(qo, "WritableStreamClose"), n2(Ta, "WritableStreamAddWriteRequest"), n2(Jr, "WritableStreamDealWithRejection"), n2(Xr, "WritableStreamStartErroring"), n2(en2, "WritableStreamFinishErroring"), n2(Ca, "WritableStreamFinishInFlightWrite"), n2(Pa, "WritableStreamFinishInFlightWriteWithError"), n2(va, "WritableStreamFinishInFlightClose"), n2(Ea, "WritableStreamFinishInFlightCloseWithError"), n2(he3, "WritableStreamCloseQueuedOrInFlight"), n2(Aa, "WritableStreamHasOperationMarkedInFlight"), n2(Ba, "WritableStreamMarkCloseRequestInFlight"), n2(ka, "WritableStreamMarkFirstWriteRequestInFlight"), n2(Kt2, "WritableStreamRejectCloseAndClosedPromiseIfNeeded"), n2(tn2, "WritableStreamUpdateBackpressure");
    const Ae3 = class {
      constructor(e8) {
        if (Se3(e8, 1, "WritableStreamDefaultWriter"), Bo(e8, "First parameter"), Ze3(e8))
          throw new TypeError("This stream has already been locked for exclusive writing by another writer");
        this._ownerWritableStream = e8, e8._writer = this;
        const r4 = e8._state;
        if ("writable" === r4)
          !he3(e8) && e8._backpressure ? rr(this) : xo(this), tr(this);
        else if ("erroring" === r4)
          sn2(this, e8._storedError), tr(this);
        else if ("closed" === r4)
          xo(this), Ma(this);
        else {
          const r5 = e8._storedError;
          sn2(this, r5), Mo(this, r5);
        }
      }
      get closed() {
        return je3(this) ? this._closedPromise : b3(Le3("closed"));
      }
      get desiredSize() {
        if (!je3(this))
          throw Le3("desiredSize");
        if (void 0 === this._ownerWritableStream)
          throw Rt2("desiredSize");
        return za(this);
      }
      get ready() {
        return je3(this) ? this._readyPromise : b3(Le3("ready"));
      }
      abort(e8 = void 0) {
        return je3(this) ? void 0 === this._ownerWritableStream ? b3(Rt2("abort")) : Wa(this, e8) : b3(Le3("abort"));
      }
      close() {
        if (!je3(this))
          return b3(Le3("close"));
        const e8 = this._ownerWritableStream;
        return void 0 === e8 ? b3(Rt2("close")) : he3(e8) ? b3(new TypeError("Cannot close an already-closing stream")) : Oo(this);
      }
      releaseLock() {
        if (!je3(this))
          throw Le3("releaseLock");
        void 0 !== this._ownerWritableStream && Io(this);
      }
      write(e8 = void 0) {
        return je3(this) ? void 0 === this._ownerWritableStream ? b3(Rt2("write to")) : Fo(this, e8) : b3(Le3("write"));
      }
    };
    n2(Ae3, "WritableStreamDefaultWriter");
    let xe4 = Ae3;
    function je3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_ownerWritableStream")) && e8 instanceof xe4;
    }
    function Wa(e8, r4) {
      return Zt2(e8._ownerWritableStream, r4);
    }
    function Oo(e8) {
      return qo(e8._ownerWritableStream);
    }
    function qa(e8) {
      const r4 = e8._ownerWritableStream, o6 = r4._state;
      return he3(r4) || "closed" === o6 ? T3(void 0) : "errored" === o6 ? b3(r4._storedError) : Oo(e8);
    }
    function Oa(e8, r4) {
      "pending" === e8._closedPromiseState ? an2(e8, r4) : Ua(e8, r4);
    }
    function zo(e8, r4) {
      "pending" === e8._readyPromiseState ? No(e8, r4) : Na(e8, r4);
    }
    function za(e8) {
      const r4 = e8._ownerWritableStream, o6 = r4._state;
      return "errored" === o6 || "erroring" === o6 ? null : "closed" === o6 ? 0 : $o(r4._writableStreamController);
    }
    function Io(e8) {
      const r4 = e8._ownerWritableStream, o6 = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
      zo(e8, o6), Oa(e8, o6), r4._writer = void 0, e8._ownerWritableStream = void 0;
    }
    function Fo(e8, r4) {
      const o6 = e8._ownerWritableStream, a5 = o6._writableStreamController, i5 = ja(a5, r4);
      if (o6 !== e8._ownerWritableStream)
        return b3(Rt2("write to"));
      const s4 = o6._state;
      if ("errored" === s4)
        return b3(o6._storedError);
      if (he3(o6) || "closed" === s4)
        return b3(new TypeError("The stream is closing or closed and cannot be written to"));
      if ("erroring" === s4)
        return b3(o6._storedError);
      const d4 = Ta(o6);
      return La(a5, r4, i5), d4;
    }
    Object.defineProperties(xe4.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h22(xe4.prototype.abort, "abort"), h22(xe4.prototype.close, "close"), h22(xe4.prototype.releaseLock, "releaseLock"), h22(xe4.prototype.write, "write"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(xe4.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true }), n2(je3, "IsWritableStreamDefaultWriter"), n2(Wa, "WritableStreamDefaultWriterAbort"), n2(Oo, "WritableStreamDefaultWriterClose"), n2(qa, "WritableStreamDefaultWriterCloseWithErrorPropagation"), n2(Oa, "WritableStreamDefaultWriterEnsureClosedPromiseRejected"), n2(zo, "WritableStreamDefaultWriterEnsureReadyPromiseRejected"), n2(za, "WritableStreamDefaultWriterGetDesiredSize"), n2(Io, "WritableStreamDefaultWriterRelease"), n2(Fo, "WritableStreamDefaultWriterWrite");
    const Re3 = {}, ke3 = class {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get abortReason() {
        if (!rn2(this))
          throw on2("abortReason");
        return this._abortReason;
      }
      get signal() {
        if (!rn2(this))
          throw on2("signal");
        if (void 0 === this._abortController)
          throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
        return this._abortController.signal;
      }
      error(e8 = void 0) {
        if (!rn2(this))
          throw on2("error");
        "writable" === this._controlledWritableStream._state && Do(this, e8);
      }
      [h4](e8) {
        const r4 = this._abortAlgorithm(e8);
        return Jt2(this), r4;
      }
      [g2]() {
        Be3(this);
      }
    };
    n2(ke3, "WritableStreamDefaultController");
    let Me3 = ke3;
    function rn2(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_controlledWritableStream")) && e8 instanceof Me3;
    }
    function Lo(e8, r4, o6, a5, i5, s4, d4, f3) {
      r4._controlledWritableStream = e8, e8._writableStreamController = r4, r4._queue = void 0, r4._queueTotalSize = void 0, Be3(r4), r4._abortReason = void 0, r4._abortController = wa(), r4._started = false, r4._strategySizeAlgorithm = f3, r4._strategyHWM = d4, r4._writeAlgorithm = a5, r4._closeAlgorithm = i5, r4._abortAlgorithm = s4;
      const p3 = nn2(r4);
      tn2(e8, p3), _4(T3(o6()), () => (r4._started = true, Xt2(r4), null), (o7) => (r4._started = true, Jr(e8, o7), null));
    }
    function Ia(e8, r4, o6, a5) {
      const i5 = Object.create(Me3.prototype);
      let s4, d4, f3, p3;
      s4 = void 0 !== r4.start ? n2(() => r4.start(i5), "startAlgorithm") : n2(() => {
      }, "startAlgorithm"), d4 = void 0 !== r4.write ? n2((e9) => r4.write(e9, i5), "writeAlgorithm") : n2(() => T3(void 0), "writeAlgorithm"), f3 = void 0 !== r4.close ? n2(() => r4.close(), "closeAlgorithm") : n2(() => T3(void 0), "closeAlgorithm"), p3 = void 0 !== r4.abort ? n2((e9) => r4.abort(e9), "abortAlgorithm") : n2(() => T3(void 0), "abortAlgorithm"), Lo(e8, i5, s4, d4, f3, p3, o6, a5);
    }
    function Jt2(e8) {
      e8._writeAlgorithm = void 0, e8._closeAlgorithm = void 0, e8._abortAlgorithm = void 0, e8._strategySizeAlgorithm = void 0;
    }
    function Fa(e8) {
      Nr(e8, Re3, 0), Xt2(e8);
    }
    function ja(e8, r4) {
      try {
        return e8._strategySizeAlgorithm(r4);
      } catch (r5) {
        return wt2(e8, r5), 1;
      }
    }
    function $o(e8) {
      return e8._strategyHWM - e8._queueTotalSize;
    }
    function La(e8, r4, o6) {
      try {
        Nr(e8, r4, o6);
      } catch (r5) {
        return void wt2(e8, r5);
      }
      const a5 = e8._controlledWritableStream;
      he3(a5) || "writable" !== a5._state || tn2(a5, nn2(e8)), Xt2(e8);
    }
    function Xt2(e8) {
      const r4 = e8._controlledWritableStream;
      if (!e8._started || void 0 !== r4._inFlightWriteRequest)
        return;
      if ("erroring" === r4._state)
        return void en2(r4);
      if (0 === e8._queue.length)
        return;
      const o6 = Ji(e8);
      o6 === Re3 ? $a(e8) : Da(e8, o6);
    }
    function wt2(e8, r4) {
      "writable" === e8._controlledWritableStream._state && Do(e8, r4);
    }
    function $a(e8) {
      const r4 = e8._controlledWritableStream;
      Ba(r4), xr(e8);
      const o6 = e8._closeAlgorithm();
      Jt2(e8), _4(o6, () => (va(r4), null), (e9) => (Ea(r4, e9), null));
    }
    function Da(e8, r4) {
      const o6 = e8._controlledWritableStream;
      ka(o6), _4(e8._writeAlgorithm(r4), () => {
        Ca(o6);
        const r5 = o6._state;
        if (xr(e8), !he3(o6) && "writable" === r5) {
          const r6 = nn2(e8);
          tn2(o6, r6);
        }
        return Xt2(e8), null;
      }, (r5) => ("writable" === o6._state && Jt2(e8), Pa(o6, r5), null));
    }
    function nn2(e8) {
      return $o(e8) <= 0;
    }
    function Do(e8, r4) {
      const o6 = e8._controlledWritableStream;
      Jt2(e8), Xr(o6, r4);
    }
    function er(e8) {
      return new TypeError(`WritableStream.prototype.${e8} can only be used on a WritableStream`);
    }
    function on2(e8) {
      return new TypeError(`WritableStreamDefaultController.prototype.${e8} can only be used on a WritableStreamDefaultController`);
    }
    function Le3(e8) {
      return new TypeError(`WritableStreamDefaultWriter.prototype.${e8} can only be used on a WritableStreamDefaultWriter`);
    }
    function Rt2(e8) {
      return new TypeError("Cannot " + e8 + " a stream using a released writer");
    }
    function tr(e8) {
      e8._closedPromise = E4((r4, o6) => {
        e8._closedPromise_resolve = r4, e8._closedPromise_reject = o6, e8._closedPromiseState = "pending";
      });
    }
    function Mo(e8, r4) {
      tr(e8), an2(e8, r4);
    }
    function Ma(e8) {
      tr(e8), Uo(e8);
    }
    function an2(e8, r4) {
      void 0 !== e8._closedPromise_reject && (Q3(e8._closedPromise), e8._closedPromise_reject(r4), e8._closedPromise_resolve = void 0, e8._closedPromise_reject = void 0, e8._closedPromiseState = "rejected");
    }
    function Ua(e8, r4) {
      Mo(e8, r4);
    }
    function Uo(e8) {
      void 0 !== e8._closedPromise_resolve && (e8._closedPromise_resolve(void 0), e8._closedPromise_resolve = void 0, e8._closedPromise_reject = void 0, e8._closedPromiseState = "resolved");
    }
    function rr(e8) {
      e8._readyPromise = E4((r4, o6) => {
        e8._readyPromise_resolve = r4, e8._readyPromise_reject = o6;
      }), e8._readyPromiseState = "pending";
    }
    function sn2(e8, r4) {
      rr(e8), No(e8, r4);
    }
    function xo(e8) {
      rr(e8), ln2(e8);
    }
    function No(e8, r4) {
      void 0 !== e8._readyPromise_reject && (Q3(e8._readyPromise), e8._readyPromise_reject(r4), e8._readyPromise_resolve = void 0, e8._readyPromise_reject = void 0, e8._readyPromiseState = "rejected");
    }
    function xa(e8) {
      rr(e8);
    }
    function Na(e8, r4) {
      sn2(e8, r4);
    }
    function ln2(e8) {
      void 0 !== e8._readyPromise_resolve && (e8._readyPromise_resolve(void 0), e8._readyPromise_resolve = void 0, e8._readyPromise_reject = void 0, e8._readyPromiseState = "fulfilled");
    }
    function Ha() {
      return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof Wi < "u" ? Wi : void 0;
    }
    Object.defineProperties(Me3.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Me3.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true }), n2(rn2, "IsWritableStreamDefaultController"), n2(Lo, "SetUpWritableStreamDefaultController"), n2(Ia, "SetUpWritableStreamDefaultControllerFromUnderlyingSink"), n2(Jt2, "WritableStreamDefaultControllerClearAlgorithms"), n2(Fa, "WritableStreamDefaultControllerClose"), n2(ja, "WritableStreamDefaultControllerGetChunkSize"), n2($o, "WritableStreamDefaultControllerGetDesiredSize"), n2(La, "WritableStreamDefaultControllerWrite"), n2(Xt2, "WritableStreamDefaultControllerAdvanceQueueIfNeeded"), n2(wt2, "WritableStreamDefaultControllerErrorIfNeeded"), n2($a, "WritableStreamDefaultControllerProcessClose"), n2(Da, "WritableStreamDefaultControllerProcessWrite"), n2(nn2, "WritableStreamDefaultControllerGetBackpressure"), n2(Do, "WritableStreamDefaultControllerError"), n2(er, "streamBrandCheckException$2"), n2(on2, "defaultControllerBrandCheckException$2"), n2(Le3, "defaultWriterBrandCheckException"), n2(Rt2, "defaultWriterLockException"), n2(tr, "defaultWriterClosedPromiseInitialize"), n2(Mo, "defaultWriterClosedPromiseInitializeAsRejected"), n2(Ma, "defaultWriterClosedPromiseInitializeAsResolved"), n2(an2, "defaultWriterClosedPromiseReject"), n2(Ua, "defaultWriterClosedPromiseResetToRejected"), n2(Uo, "defaultWriterClosedPromiseResolve"), n2(rr, "defaultWriterReadyPromiseInitialize"), n2(sn2, "defaultWriterReadyPromiseInitializeAsRejected"), n2(xo, "defaultWriterReadyPromiseInitializeAsResolved"), n2(No, "defaultWriterReadyPromiseReject"), n2(xa, "defaultWriterReadyPromiseReset"), n2(Na, "defaultWriterReadyPromiseResetToRejected"), n2(ln2, "defaultWriterReadyPromiseResolve"), n2(Ha, "getGlobals");
    const Ue3 = Ha();
    function Va(e8) {
      if ("function" != typeof e8 && "object" != typeof e8 || "DOMException" !== e8.name)
        return false;
      try {
        return new e8(), true;
      } catch {
        return false;
      }
    }
    function Qa() {
      const e8 = null == Ue3 ? void 0 : Ue3.DOMException;
      return Va(e8) ? e8 : void 0;
    }
    function Ya() {
      const e8 = n2(function(e9, r4) {
        this.message = e9 || "", this.name = r4 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
      }, "DOMException");
      return h22(e8, "DOMException"), e8.prototype = Object.create(Error.prototype), Object.defineProperty(e8.prototype, "constructor", { value: e8, writable: true, configurable: true }), e8;
    }
    n2(Va, "isDOMExceptionConstructor"), n2(Qa, "getFromGlobal"), n2(Ya, "createPolyfill");
    const He3 = Qa() || Ya();
    function Ho(e8, r4, o6, a5, i5, s4) {
      const d4 = Qe3(e8), f3 = ko(r4);
      e8._disturbed = true;
      let p3 = false, h5 = T3(void 0);
      return E4((g3, D4) => {
        let v5;
        if (void 0 !== s4) {
          if (v5 = n2(() => {
            const o7 = void 0 !== s4.reason ? s4.reason : new He3("Aborted", "AbortError"), d5 = [];
            a5 || d5.push(() => "writable" === r4._state ? Zt2(r4, o7) : T3(void 0)), i5 || d5.push(() => "readable" === e8._state ? ie3(e8, o7) : T3(void 0)), N4(() => Promise.all(d5.map((e9) => e9())), true, o7);
          }, "abortAlgorithm"), s4.aborted)
            return void v5();
          s4.addEventListener("abort", v5);
        }
        function ae3() {
          return E4((e9, r5) => {
            function k3(o7) {
              o7 ? e9() : q4(nt3(), k3, r5);
            }
            n2(k3, "next"), k3(false);
          });
        }
        function nt3() {
          return p3 ? T3(true) : q4(f3._readyPromise, () => E4((e9, r5) => {
            mt2(d4, { _chunkSteps: (r6) => {
              h5 = q4(Fo(f3, r6), void 0, u3), e9(false);
            }, _closeSteps: () => e9(true), _errorSteps: r5 });
          }));
        }
        if (n2(ae3, "pipeLoop"), n2(nt3, "pipeStep"), Te3(e8, d4._closedPromise, (e9) => (a5 ? J3(true, e9) : N4(() => Zt2(r4, e9), true, e9), null)), Te3(r4, f3._closedPromise, (r5) => (i5 ? J3(true, r5) : N4(() => ie3(e8, r5), true, r5), null)), x3(e8, d4._closedPromise, () => (o6 ? J3() : N4(() => qa(f3)), null)), he3(r4) || "closed" === r4._state) {
          const r5 = new TypeError("the destination writable stream closed before all data could be piped to it");
          i5 ? J3(true, r5) : N4(() => ie3(e8, r5), true, r5);
        }
        function Oe3() {
          const e9 = h5;
          return q4(h5, () => e9 !== h5 ? Oe3() : void 0);
        }
        function Te3(e9, r5, o7) {
          "errored" === e9._state ? o7(e9._storedError) : I3(r5, o7);
        }
        function x3(e9, r5, o7) {
          "closed" === e9._state ? o7() : V3(r5, o7);
        }
        function N4(e9, o7, a6) {
          function Y3() {
            return _4(e9(), () => Ce3(o7, a6), (e10) => Ce3(true, e10)), null;
          }
          p3 || (p3 = true, "writable" !== r4._state || he3(r4) ? Y3() : V3(Oe3(), Y3), n2(Y3, "doTheRest"));
        }
        function J3(e9, o7) {
          p3 || (p3 = true, "writable" !== r4._state || he3(r4) ? Ce3(e9, o7) : V3(Oe3(), () => Ce3(e9, o7)));
        }
        function Ce3(e9, r5) {
          return Io(f3), _e3(d4), void 0 !== s4 && s4.removeEventListener("abort", v5), e9 ? D4(r5) : g3(void 0), null;
        }
        Q3(ae3()), n2(Oe3, "waitForWritesToFinish"), n2(Te3, "isOrBecomesErrored"), n2(x3, "isOrBecomesClosed"), n2(N4, "shutdownWithAction"), n2(J3, "shutdown"), n2(Ce3, "finalize");
      });
    }
    n2(Ho, "ReadableStreamPipeTo");
    const Ne3 = class {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!nr(this))
          throw ir("desiredSize");
        return fn3(this);
      }
      close() {
        if (!nr(this))
          throw ir("close");
        if (!Je3(this))
          throw new TypeError("The stream is not in a state that permits close");
        $e3(this);
      }
      enqueue(e8 = void 0) {
        if (!nr(this))
          throw ir("enqueue");
        if (!Je3(this))
          throw new TypeError("The stream is not in a state that permits enqueue");
        return Ke3(this, e8);
      }
      error(e8 = void 0) {
        if (!nr(this))
          throw ir("error");
        oe3(this, e8);
      }
      [D3](e8) {
        Be3(this);
        const r4 = this._cancelAlgorithm(e8);
        return or(this), r4;
      }
      [v4](e8) {
        const r4 = this._controlledReadableStream;
        if (this._queue.length > 0) {
          const o6 = xr(this);
          this._closeRequested && 0 === this._queue.length ? (or(this), Pt2(r4)) : Tt2(this), e8._chunkSteps(o6);
        } else
          eo(r4, e8), Tt2(this);
      }
      [w4]() {
      }
    };
    n2(Ne3, "ReadableStreamDefaultController");
    let Ve3 = Ne3;
    function nr(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_controlledReadableStream")) && e8 instanceof Ve3;
    }
    function Tt2(e8) {
      Vo(e8) && (e8._pulling ? e8._pullAgain = true : (e8._pulling = true, _4(e8._pullAlgorithm(), () => (e8._pulling = false, e8._pullAgain && (e8._pullAgain = false, Tt2(e8)), null), (r4) => (oe3(e8, r4), null))));
    }
    function Vo(e8) {
      const r4 = e8._controlledReadableStream;
      return !(!Je3(e8) || !e8._started || !(qe3(r4) && Lt2(r4) > 0 || fn3(e8) > 0));
    }
    function or(e8) {
      e8._pullAlgorithm = void 0, e8._cancelAlgorithm = void 0, e8._strategySizeAlgorithm = void 0;
    }
    function $e3(e8) {
      if (!Je3(e8))
        return;
      const r4 = e8._controlledReadableStream;
      e8._closeRequested = true, 0 === e8._queue.length && (or(e8), Pt2(r4));
    }
    function Ke3(e8, r4) {
      if (!Je3(e8))
        return;
      const o6 = e8._controlledReadableStream;
      if (qe3(o6) && Lt2(o6) > 0)
        Lr(o6, r4, false);
      else {
        let o7;
        try {
          o7 = e8._strategySizeAlgorithm(r4);
        } catch (r5) {
          throw oe3(e8, r5), r5;
        }
        try {
          Nr(e8, r4, o7);
        } catch (r5) {
          throw oe3(e8, r5), r5;
        }
      }
      Tt2(e8);
    }
    function oe3(e8, r4) {
      const o6 = e8._controlledReadableStream;
      "readable" === o6._state && (Be3(e8), or(e8), Zo(o6, r4));
    }
    function fn3(e8) {
      const r4 = e8._controlledReadableStream._state;
      return "errored" === r4 ? null : "closed" === r4 ? 0 : e8._strategyHWM - e8._queueTotalSize;
    }
    function Za(e8) {
      return !Vo(e8);
    }
    function Je3(e8) {
      const r4 = e8._controlledReadableStream._state;
      return !e8._closeRequested && "readable" === r4;
    }
    function Qo(e8, r4, o6, a5, i5, s4, d4) {
      r4._controlledReadableStream = e8, r4._queue = void 0, r4._queueTotalSize = void 0, Be3(r4), r4._started = false, r4._closeRequested = false, r4._pullAgain = false, r4._pulling = false, r4._strategySizeAlgorithm = d4, r4._strategyHWM = s4, r4._pullAlgorithm = a5, r4._cancelAlgorithm = i5, e8._readableStreamController = r4, _4(T3(o6()), () => (r4._started = true, Tt2(r4), null), (e9) => (oe3(r4, e9), null));
    }
    function Ka(e8, r4, o6, a5) {
      const i5 = Object.create(Ve3.prototype);
      let s4, d4, f3;
      s4 = void 0 !== r4.start ? n2(() => r4.start(i5), "startAlgorithm") : n2(() => {
      }, "startAlgorithm"), d4 = void 0 !== r4.pull ? n2(() => r4.pull(i5), "pullAlgorithm") : n2(() => T3(void 0), "pullAlgorithm"), f3 = void 0 !== r4.cancel ? n2((e9) => r4.cancel(e9), "cancelAlgorithm") : n2(() => T3(void 0), "cancelAlgorithm"), Qo(e8, i5, s4, d4, f3, o6, a5);
    }
    function ir(e8) {
      return new TypeError(`ReadableStreamDefaultController.prototype.${e8} can only be used on a ReadableStreamDefaultController`);
    }
    function Ja(e8, r4) {
      return ze3(e8._readableStreamController) ? es(e8) : Xa(e8);
    }
    function Xa(e8, r4) {
      const o6 = Qe3(e8);
      let a5, i5, d4, f3, p3, h5 = false, g3 = false, D4 = false, v5 = false;
      const w5 = E4((e9) => {
        p3 = e9;
      });
      function ae3() {
        return h5 ? (g3 = true, T3(void 0)) : (h5 = true, mt2(o6, { _chunkSteps: (e9) => {
          s3(() => {
            g3 = false;
            const r5 = e9, o7 = e9;
            D4 || Ke3(d4._readableStreamController, r5), v5 || Ke3(f3._readableStreamController, o7), h5 = false, g3 && ae3();
          });
        }, _closeSteps: () => {
          h5 = false, D4 || $e3(d4._readableStreamController), v5 || $e3(f3._readableStreamController), (!D4 || !v5) && p3(void 0);
        }, _errorSteps: () => {
          h5 = false;
        } }), T3(void 0));
      }
      function nt3(r5) {
        if (D4 = true, a5 = r5, v5) {
          const r6 = yt2([a5, i5]), o7 = ie3(e8, r6);
          p3(o7);
        }
        return w5;
      }
      function Oe3(r5) {
        if (v5 = true, i5 = r5, D4) {
          const r6 = yt2([a5, i5]), o7 = ie3(e8, r6);
          p3(o7);
        }
        return w5;
      }
      function Te3() {
      }
      return n2(ae3, "pullAlgorithm"), n2(nt3, "cancel1Algorithm"), n2(Oe3, "cancel2Algorithm"), n2(Te3, "startAlgorithm"), d4 = Ct2(Te3, ae3, nt3), f3 = Ct2(Te3, ae3, Oe3), I3(o6._closedPromise, (e9) => (oe3(d4._readableStreamController, e9), oe3(f3._readableStreamController, e9), (!D4 || !v5) && p3(void 0), null)), [d4, f3];
    }
    function es(e8) {
      let r4, o6, a5, i5, d4, f3 = Qe3(e8), p3 = false, h5 = false, g3 = false, D4 = false, v5 = false;
      const w5 = E4((e9) => {
        d4 = e9;
      });
      function ae3(e9) {
        I3(e9._closedPromise, (r5) => (e9 !== f3 || (K3(a5._readableStreamController, r5), K3(i5._readableStreamController, r5), (!D4 || !v5) && d4(void 0)), null));
      }
      function nt3() {
        Fe3(f3) && (_e3(f3), f3 = Qe3(e8), ae3(f3)), mt2(f3, { _chunkSteps: (r5) => {
          s3(() => {
            h5 = false, g3 = false;
            const o7 = r5;
            let s4 = r5;
            if (!D4 && !v5)
              try {
                s4 = fo(r5);
              } catch (r6) {
                return K3(a5._readableStreamController, r6), K3(i5._readableStreamController, r6), void d4(ie3(e8, r6));
              }
            D4 || Nt2(a5._readableStreamController, o7), v5 || Nt2(i5._readableStreamController, s4), p3 = false, h5 ? Te3() : g3 && x3();
          });
        }, _closeSteps: () => {
          p3 = false, D4 || gt2(a5._readableStreamController), v5 || gt2(i5._readableStreamController), a5._readableStreamController._pendingPullIntos.length > 0 && Ht2(a5._readableStreamController, 0), i5._readableStreamController._pendingPullIntos.length > 0 && Ht2(i5._readableStreamController, 0), (!D4 || !v5) && d4(void 0);
        }, _errorSteps: () => {
          p3 = false;
        } });
      }
      function Oe3(r5, o7) {
        Ee3(f3) && (_e3(f3), f3 = Co(e8), ae3(f3));
        const w6 = o7 ? i5 : a5, S4 = o7 ? a5 : i5;
        Eo(f3, r5, 1, { _chunkSteps: (r6) => {
          s3(() => {
            h5 = false, g3 = false;
            const a6 = o7 ? v5 : D4;
            if (o7 ? D4 : v5)
              a6 || Vt2(w6._readableStreamController, r6);
            else {
              let o8;
              try {
                o8 = fo(r6);
              } catch (r7) {
                return K3(w6._readableStreamController, r7), K3(S4._readableStreamController, r7), void d4(ie3(e8, r7));
              }
              a6 || Vt2(w6._readableStreamController, r6), Nt2(S4._readableStreamController, o8);
            }
            p3 = false, h5 ? Te3() : g3 && x3();
          });
        }, _closeSteps: (e9) => {
          p3 = false;
          const r6 = o7 ? v5 : D4, a6 = o7 ? D4 : v5;
          r6 || gt2(w6._readableStreamController), a6 || gt2(S4._readableStreamController), void 0 !== e9 && (r6 || Vt2(w6._readableStreamController, e9), !a6 && S4._readableStreamController._pendingPullIntos.length > 0 && Ht2(S4._readableStreamController, 0)), (!r6 || !a6) && d4(void 0);
        }, _errorSteps: () => {
          p3 = false;
        } });
      }
      function Te3() {
        if (p3)
          return h5 = true, T3(void 0);
        p3 = true;
        const e9 = Gr(a5._readableStreamController);
        return null === e9 ? nt3() : Oe3(e9._view, false), T3(void 0);
      }
      function x3() {
        if (p3)
          return g3 = true, T3(void 0);
        p3 = true;
        const e9 = Gr(i5._readableStreamController);
        return null === e9 ? nt3() : Oe3(e9._view, true), T3(void 0);
      }
      function N4(a6) {
        if (D4 = true, r4 = a6, v5) {
          const a7 = yt2([r4, o6]), i6 = ie3(e8, a7);
          d4(i6);
        }
        return w5;
      }
      function J3(a6) {
        if (v5 = true, o6 = a6, D4) {
          const a7 = yt2([r4, o6]), i6 = ie3(e8, a7);
          d4(i6);
        }
        return w5;
      }
      function Ce3() {
      }
      return n2(ae3, "forwardReaderError"), n2(nt3, "pullWithDefaultReader"), n2(Oe3, "pullWithBYOBReader"), n2(Te3, "pull1Algorithm"), n2(x3, "pull2Algorithm"), n2(N4, "cancel1Algorithm"), n2(J3, "cancel2Algorithm"), n2(Ce3, "startAlgorithm"), a5 = Go(Ce3, Te3, N4), i5 = Go(Ce3, x3, J3), ae3(f3), [a5, i5];
    }
    function ts(e8) {
      return l22(e8) && typeof e8.getReader < "u";
    }
    function rs(e8) {
      return ts(e8) ? os(e8.getReader()) : ns(e8);
    }
    function ns(e8) {
      let r4;
      const o6 = uo(e8, "async"), a5 = u3;
      function f22() {
        let e9;
        try {
          e9 = Yi(o6);
        } catch (e10) {
          return b3(e10);
        }
        return F3(T3(e9), (e10) => {
          if (!l22(e10))
            throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
          if (Gi(e10))
            $e3(r4._readableStreamController);
          else {
            const o7 = Zi(e10);
            Ke3(r4._readableStreamController, o7);
          }
        });
      }
      function c2(e9) {
        const r5 = o6.iterator;
        let a6, i5;
        try {
          a6 = Mt2(r5, "return");
        } catch (e10) {
          return b3(e10);
        }
        if (void 0 === a6)
          return T3(void 0);
        try {
          i5 = z3(a6, r5, [e9]);
        } catch (e10) {
          return b3(e10);
        }
        return F3(T3(i5), (e10) => {
          if (!l22(e10))
            throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
        });
      }
      return n2(f22, "pullAlgorithm"), n2(c2, "cancelAlgorithm"), r4 = Ct2(a5, f22, c2, 0), r4;
    }
    function os(e8) {
      let r4;
      const o6 = u3;
      function s22() {
        let o7;
        try {
          o7 = e8.read();
        } catch (e9) {
          return b3(e9);
        }
        return F3(o7, (e9) => {
          if (!l22(e9))
            throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
          if (e9.done)
            $e3(r4._readableStreamController);
          else {
            const o8 = e9.value;
            Ke3(r4._readableStreamController, o8);
          }
        });
      }
      function f22(r5) {
        try {
          return T3(e8.cancel(r5));
        } catch (e9) {
          return b3(e9);
        }
      }
      return n2(s22, "pullAlgorithm"), n2(f22, "cancelAlgorithm"), r4 = Ct2(o6, s22, f22, 0), r4;
    }
    function is(e8, r4) {
      ue3(e8, r4);
      const o6 = e8, a5 = null == o6 ? void 0 : o6.autoAllocateChunkSize, i5 = null == o6 ? void 0 : o6.cancel, s4 = null == o6 ? void 0 : o6.pull, d4 = null == o6 ? void 0 : o6.start, f3 = null == o6 ? void 0 : o6.type;
      return { autoAllocateChunkSize: void 0 === a5 ? void 0 : Fr(a5, `${r4} has member 'autoAllocateChunkSize' that`), cancel: void 0 === i5 ? void 0 : as(i5, o6, `${r4} has member 'cancel' that`), pull: void 0 === s4 ? void 0 : ss(s4, o6, `${r4} has member 'pull' that`), start: void 0 === d4 ? void 0 : ls(d4, o6, `${r4} has member 'start' that`), type: void 0 === f3 ? void 0 : us(f3, `${r4} has member 'type' that`) };
    }
    function as(e8, r4, o6) {
      return Z4(e8, o6), (o7) => j3(e8, r4, [o7]);
    }
    function ss(e8, r4, o6) {
      return Z4(e8, o6), (o7) => j3(e8, r4, [o7]);
    }
    function ls(e8, r4, o6) {
      return Z4(e8, o6), (o7) => z3(e8, r4, [o7]);
    }
    function us(e8, r4) {
      if ("bytes" != (e8 = `${e8}`))
        throw new TypeError(`${r4} '${e8}' is not a valid enumeration value for ReadableStreamType`);
      return e8;
    }
    function fs(e8, r4) {
      return ue3(e8, r4), { preventCancel: !!(null == e8 ? void 0 : e8.preventCancel) };
    }
    function Yo(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.preventAbort, a5 = null == e8 ? void 0 : e8.preventCancel, i5 = null == e8 ? void 0 : e8.preventClose, s4 = null == e8 ? void 0 : e8.signal;
      return void 0 !== s4 && cs(s4, `${r4} has member 'signal' that`), { preventAbort: !!o6, preventCancel: !!a5, preventClose: !!i5, signal: s4 };
    }
    function cs(e8, r4) {
      if (!_a2(e8))
        throw new TypeError(`${r4} is not an AbortSignal.`);
    }
    function ds(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.readable;
      zr(o6, "readable", "ReadableWritablePair"), jr(o6, `${r4} has member 'readable' that`);
      const a5 = null == e8 ? void 0 : e8.writable;
      return zr(a5, "writable", "ReadableWritablePair"), Bo(a5, `${r4} has member 'writable' that`), { readable: o6, writable: a5 };
    }
    Object.defineProperties(Ve3.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h22(Ve3.prototype.close, "close"), h22(Ve3.prototype.enqueue, "enqueue"), h22(Ve3.prototype.error, "error"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Ve3.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true }), n2(nr, "IsReadableStreamDefaultController"), n2(Tt2, "ReadableStreamDefaultControllerCallPullIfNeeded"), n2(Vo, "ReadableStreamDefaultControllerShouldCallPull"), n2(or, "ReadableStreamDefaultControllerClearAlgorithms"), n2($e3, "ReadableStreamDefaultControllerClose"), n2(Ke3, "ReadableStreamDefaultControllerEnqueue"), n2(oe3, "ReadableStreamDefaultControllerError"), n2(fn3, "ReadableStreamDefaultControllerGetDesiredSize"), n2(Za, "ReadableStreamDefaultControllerHasBackpressure"), n2(Je3, "ReadableStreamDefaultControllerCanCloseOrEnqueue"), n2(Qo, "SetUpReadableStreamDefaultController"), n2(Ka, "SetUpReadableStreamDefaultControllerFromUnderlyingSource"), n2(ir, "defaultControllerBrandCheckException$1"), n2(Ja, "ReadableStreamTee"), n2(Xa, "ReadableStreamDefaultTee"), n2(es, "ReadableByteStreamTee"), n2(ts, "isReadableStreamLike"), n2(rs, "ReadableStreamFrom"), n2(ns, "ReadableStreamFromIterable"), n2(os, "ReadableStreamFromDefaultReader"), n2(is, "convertUnderlyingDefaultOrByteSource"), n2(as, "convertUnderlyingSourceCancelCallback"), n2(ss, "convertUnderlyingSourcePullCallback"), n2(ls, "convertUnderlyingSourceStartCallback"), n2(us, "convertReadableStreamType"), n2(fs, "convertIteratorOptions"), n2(Yo, "convertPipeOptions"), n2(cs, "assertAbortSignal"), n2(ds, "convertReadableWritablePair");
    const Xe4 = class {
      constructor(e8 = {}, r4 = {}) {
        void 0 === e8 ? e8 = null : Jn(e8, "First parameter");
        const o6 = Gt2(r4, "Second parameter"), a5 = is(e8, "First parameter");
        if (cn2(this), "bytes" === a5.type) {
          if (void 0 !== o6.size)
            throw new RangeError("The strategy for a byte stream cannot have a size function");
          aa(this, a5, St2(o6, 0));
        } else {
          const e9 = Yt2(o6);
          Ka(this, a5, St2(o6, 1), e9);
        }
      }
      get locked() {
        if (!We3(this))
          throw De3("locked");
        return qe3(this);
      }
      cancel(e8 = void 0) {
        return We3(this) ? qe3(this) ? b3(new TypeError("Cannot cancel a stream that already has a reader")) : ie3(this, e8) : b3(De3("cancel"));
      }
      getReader(e8 = void 0) {
        if (!We3(this))
          throw De3("getReader");
        return void 0 === la(e8, "First parameter").mode ? Qe3(this) : Co(this);
      }
      pipeThrough(e8, r4 = {}) {
        if (!We3(this))
          throw De3("pipeThrough");
        Se3(e8, 1, "pipeThrough");
        const o6 = ds(e8, "First parameter"), a5 = Yo(r4, "Second parameter");
        if (qe3(this))
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
        if (Ze3(o6.writable))
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
        return Q3(Ho(this, o6.writable, a5.preventClose, a5.preventAbort, a5.preventCancel, a5.signal)), o6.readable;
      }
      pipeTo(e8, r4 = {}) {
        if (!We3(this))
          return b3(De3("pipeTo"));
        if (void 0 === e8)
          return b3("Parameter 1 is required in 'pipeTo'.");
        if (!Ge3(e8))
          return b3(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
        let o6;
        try {
          o6 = Yo(r4, "Second parameter");
        } catch (e9) {
          return b3(e9);
        }
        return qe3(this) ? b3(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ze3(e8) ? b3(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Ho(this, e8, o6.preventClose, o6.preventAbort, o6.preventCancel, o6.signal);
      }
      tee() {
        if (!We3(this))
          throw De3("tee");
        return yt2(Ja(this));
      }
      values(e8 = void 0) {
        if (!We3(this))
          throw De3("values");
        return Vi(this, fs(e8, "First parameter").preventCancel);
      }
      [le3](e8) {
        return this.values(e8);
      }
      static from(e8) {
        return rs(e8);
      }
    };
    n2(Xe4, "ReadableStream");
    let et4 = Xe4;
    function Ct2(e8, r4, o6, a5 = 1, i5 = () => 1) {
      const s4 = Object.create(et4.prototype);
      return cn2(s4), Qo(s4, Object.create(Ve3.prototype), e8, r4, o6, a5, i5), s4;
    }
    function Go(e8, r4, o6) {
      const a5 = Object.create(et4.prototype);
      return cn2(a5), To(a5, Object.create(pe3.prototype), e8, r4, o6, 0, void 0), a5;
    }
    function cn2(e8) {
      e8._state = "readable", e8._reader = void 0, e8._storedError = void 0, e8._disturbed = false;
    }
    function We3(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_readableStreamController")) && e8 instanceof et4;
    }
    function qe3(e8) {
      return void 0 !== e8._reader;
    }
    function ie3(e8, r4) {
      if (e8._disturbed = true, "closed" === e8._state)
        return T3(void 0);
      if ("errored" === e8._state)
        return b3(e8._storedError);
      Pt2(e8);
      const o6 = e8._reader;
      if (void 0 !== o6 && Fe3(o6)) {
        const e9 = o6._readIntoRequests;
        o6._readIntoRequests = new p2(), e9.forEach((e10) => {
          e10._closeSteps(void 0);
        });
      }
      return F3(e8._readableStreamController[D3](r4), u3);
    }
    function Pt2(e8) {
      e8._state = "closed";
      const r4 = e8._reader;
      if (void 0 !== r4 && (Zn(r4), Ee3(r4))) {
        const e9 = r4._readRequests;
        r4._readRequests = new p2(), e9.forEach((e10) => {
          e10._closeSteps();
        });
      }
    }
    function Zo(e8, r4) {
      e8._state = "errored", e8._storedError = r4;
      const o6 = e8._reader;
      void 0 !== o6 && (Or(o6, r4), Ee3(o6) ? ro(o6, r4) : Ao(o6, r4));
    }
    function De3(e8) {
      return new TypeError(`ReadableStream.prototype.${e8} can only be used on a ReadableStream`);
    }
    function Ko(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.highWaterMark;
      return zr(o6, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: Ir(o6) };
    }
    Object.defineProperties(et4, { from: { enumerable: true } }), Object.defineProperties(et4.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h22(et4.from, "from"), h22(et4.prototype.cancel, "cancel"), h22(et4.prototype.getReader, "getReader"), h22(et4.prototype.pipeThrough, "pipeThrough"), h22(et4.prototype.pipeTo, "pipeTo"), h22(et4.prototype.tee, "tee"), h22(et4.prototype.values, "values"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(et4.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(et4.prototype, le3, { value: et4.prototype.values, writable: true, configurable: true }), n2(Ct2, "CreateReadableStream"), n2(Go, "CreateReadableByteStream"), n2(cn2, "InitializeReadableStream"), n2(We3, "IsReadableStream"), n2(qe3, "IsReadableStreamLocked"), n2(ie3, "ReadableStreamCancel"), n2(Pt2, "ReadableStreamClose"), n2(Zo, "ReadableStreamError"), n2(De3, "streamBrandCheckException$1"), n2(Ko, "convertQueuingStrategyInit");
    const tt4 = n2((e8) => e8.byteLength, "byteLengthSizeFunction");
    h22(tt4, "size");
    const ot4 = class {
      constructor(e8) {
        Se3(e8, 1, "ByteLengthQueuingStrategy"), e8 = Ko(e8, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = e8.highWaterMark;
      }
      get highWaterMark() {
        if (!ei(this))
          throw Xo("highWaterMark");
        return this._byteLengthQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!ei(this))
          throw Xo("size");
        return tt4;
      }
    };
    n2(ot4, "ByteLengthQueuingStrategy");
    let at4 = ot4;
    function Xo(e8) {
      return new TypeError(`ByteLengthQueuingStrategy.prototype.${e8} can only be used on a ByteLengthQueuingStrategy`);
    }
    function ei(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_byteLengthQueuingStrategyHighWaterMark")) && e8 instanceof at4;
    }
    Object.defineProperties(at4.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(at4.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true }), n2(Xo, "byteLengthBrandCheckException"), n2(ei, "IsByteLengthQueuingStrategy");
    const it4 = n2(() => 1, "countSizeFunction");
    h22(it4, "size");
    const st4 = class {
      constructor(e8) {
        Se3(e8, 1, "CountQueuingStrategy"), e8 = Ko(e8, "First parameter"), this._countQueuingStrategyHighWaterMark = e8.highWaterMark;
      }
      get highWaterMark() {
        if (!ni(this))
          throw ri("highWaterMark");
        return this._countQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!ni(this))
          throw ri("size");
        return it4;
      }
    };
    n2(st4, "CountQueuingStrategy");
    let lt3 = st4;
    function ri(e8) {
      return new TypeError(`CountQueuingStrategy.prototype.${e8} can only be used on a CountQueuingStrategy`);
    }
    function ni(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_countQueuingStrategyHighWaterMark")) && e8 instanceof lt3;
    }
    function hs(e8, r4) {
      ue3(e8, r4);
      const o6 = null == e8 ? void 0 : e8.cancel, a5 = null == e8 ? void 0 : e8.flush, i5 = null == e8 ? void 0 : e8.readableType, s4 = null == e8 ? void 0 : e8.start, d4 = null == e8 ? void 0 : e8.transform, f3 = null == e8 ? void 0 : e8.writableType;
      return { cancel: void 0 === o6 ? void 0 : ys(o6, e8, `${r4} has member 'cancel' that`), flush: void 0 === a5 ? void 0 : ps(a5, e8, `${r4} has member 'flush' that`), readableType: i5, start: void 0 === s4 ? void 0 : bs(s4, e8, `${r4} has member 'start' that`), transform: void 0 === d4 ? void 0 : ms(d4, e8, `${r4} has member 'transform' that`), writableType: f3 };
    }
    function ps(e8, r4, o6) {
      return Z4(e8, o6), (o7) => j3(e8, r4, [o7]);
    }
    function bs(e8, r4, o6) {
      return Z4(e8, o6), (o7) => z3(e8, r4, [o7]);
    }
    function ms(e8, r4, o6) {
      return Z4(e8, o6), (o7, a5) => j3(e8, r4, [o7, a5]);
    }
    function ys(e8, r4, o6) {
      return Z4(e8, o6), (o7) => j3(e8, r4, [o7]);
    }
    Object.defineProperties(lt3.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(lt3.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true }), n2(ri, "countBrandCheckException"), n2(ni, "IsCountQueuingStrategy"), n2(hs, "convertTransformer"), n2(ps, "convertTransformerFlushCallback"), n2(bs, "convertTransformerStartCallback"), n2(ms, "convertTransformerTransformCallback"), n2(ys, "convertTransformerCancelCallback");
    const ut3 = class {
      constructor(e8 = {}, r4 = {}, o6 = {}) {
        void 0 === e8 && (e8 = null);
        const a5 = Gt2(r4, "Second parameter"), i5 = Gt2(o6, "Third parameter"), s4 = hs(e8, "First parameter");
        if (void 0 !== s4.readableType)
          throw new RangeError("Invalid readableType specified");
        if (void 0 !== s4.writableType)
          throw new RangeError("Invalid writableType specified");
        const d4 = St2(i5, 0), f3 = Yt2(i5), p3 = St2(a5, 1), h5 = Yt2(a5);
        let g3;
        gs(this, E4((e9) => {
          g3 = e9;
        }), p3, h5, d4, f3), Ss(this, s4), void 0 !== s4.start ? g3(s4.start(this._transformStreamController)) : g3(void 0);
      }
      get readable() {
        if (!oi(this))
          throw li("readable");
        return this._readable;
      }
      get writable() {
        if (!oi(this))
          throw li("writable");
        return this._writable;
      }
    };
    n2(ut3, "TransformStream");
    let dt3 = ut3;
    function gs(e8, r4, o6, a5, i5, s4) {
      function d22() {
        return r4;
      }
      function m3(r5) {
        return Ts(e8, r5);
      }
      function R3(r5) {
        return Cs(e8, r5);
      }
      function y3() {
        return Ps(e8);
      }
      function C3() {
        return vs(e8);
      }
      function P3(r5) {
        return Es(e8, r5);
      }
      n2(d22, "startAlgorithm"), n2(m3, "writeAlgorithm"), n2(R3, "abortAlgorithm"), n2(y3, "closeAlgorithm"), e8._writable = Ra(d22, m3, y3, R3, o6, a5), n2(C3, "pullAlgorithm"), n2(P3, "cancelAlgorithm"), e8._readable = Ct2(d22, C3, P3, i5, s4), e8._backpressure = void 0, e8._backpressureChangePromise = void 0, e8._backpressureChangePromise_resolve = void 0, ar(e8, true), e8._transformStreamController = void 0;
    }
    function oi(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_transformStreamController")) && e8 instanceof dt3;
    }
    function ii(e8, r4) {
      oe3(e8._readable._readableStreamController, r4), dn2(e8, r4);
    }
    function dn2(e8, r4) {
      lr(e8._transformStreamController), wt2(e8._writable._writableStreamController, r4), hn2(e8);
    }
    function hn2(e8) {
      e8._backpressure && ar(e8, false);
    }
    function ar(e8, r4) {
      void 0 !== e8._backpressureChangePromise && e8._backpressureChangePromise_resolve(), e8._backpressureChangePromise = E4((r5) => {
        e8._backpressureChangePromise_resolve = r5;
      }), e8._backpressure = r4;
    }
    Object.defineProperties(dt3.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(dt3.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true }), n2(gs, "InitializeTransformStream"), n2(oi, "IsTransformStream"), n2(ii, "TransformStreamError"), n2(dn2, "TransformStreamErrorWritableAndUnblockWrite"), n2(hn2, "TransformStreamUnblockWrite"), n2(ar, "TransformStreamSetBackpressure");
    const ft3 = class {
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!sr(this))
          throw ur("desiredSize");
        return fn3(this._controlledTransformStream._readable._readableStreamController);
      }
      enqueue(e8 = void 0) {
        if (!sr(this))
          throw ur("enqueue");
        ai(this, e8);
      }
      error(e8 = void 0) {
        if (!sr(this))
          throw ur("error");
        ws(this, e8);
      }
      terminate() {
        if (!sr(this))
          throw ur("terminate");
        Rs(this);
      }
    };
    n2(ft3, "TransformStreamDefaultController");
    let pt3 = ft3;
    function sr(e8) {
      return !(!l22(e8) || !Object.prototype.hasOwnProperty.call(e8, "_controlledTransformStream")) && e8 instanceof pt3;
    }
    function _s(e8, r4, o6, a5, i5) {
      r4._controlledTransformStream = e8, e8._transformStreamController = r4, r4._transformAlgorithm = o6, r4._flushAlgorithm = a5, r4._cancelAlgorithm = i5, r4._finishPromise = void 0, r4._finishPromise_resolve = void 0, r4._finishPromise_reject = void 0;
    }
    function Ss(e8, r4) {
      const o6 = Object.create(pt3.prototype);
      let a5, i5, s4;
      a5 = void 0 !== r4.transform ? n2((e9) => r4.transform(e9, o6), "transformAlgorithm") : n2((e9) => {
        try {
          return ai(o6, e9), T3(void 0);
        } catch (e10) {
          return b3(e10);
        }
      }, "transformAlgorithm"), i5 = void 0 !== r4.flush ? n2(() => r4.flush(o6), "flushAlgorithm") : n2(() => T3(void 0), "flushAlgorithm"), s4 = void 0 !== r4.cancel ? n2((e9) => r4.cancel(e9), "cancelAlgorithm") : n2(() => T3(void 0), "cancelAlgorithm"), _s(e8, o6, a5, i5, s4);
    }
    function lr(e8) {
      e8._transformAlgorithm = void 0, e8._flushAlgorithm = void 0, e8._cancelAlgorithm = void 0;
    }
    function ai(e8, r4) {
      const o6 = e8._controlledTransformStream, a5 = o6._readable._readableStreamController;
      if (!Je3(a5))
        throw new TypeError("Readable side is not in a state that permits enqueue");
      try {
        Ke3(a5, r4);
      } catch (e9) {
        throw dn2(o6, e9), o6._readable._storedError;
      }
      Za(a5) !== o6._backpressure && ar(o6, true);
    }
    function ws(e8, r4) {
      ii(e8._controlledTransformStream, r4);
    }
    function si(e8, r4) {
      return F3(e8._transformAlgorithm(r4), void 0, (r5) => {
        throw ii(e8._controlledTransformStream, r5), r5;
      });
    }
    function Rs(e8) {
      const r4 = e8._controlledTransformStream;
      $e3(r4._readable._readableStreamController), dn2(r4, new TypeError("TransformStream terminated"));
    }
    function Ts(e8, r4) {
      const o6 = e8._transformStreamController;
      return e8._backpressure ? F3(e8._backpressureChangePromise, () => {
        const a5 = e8._writable;
        if ("erroring" === a5._state)
          throw a5._storedError;
        return si(o6, r4);
      }) : si(o6, r4);
    }
    function Cs(e8, r4) {
      const o6 = e8._transformStreamController;
      if (void 0 !== o6._finishPromise)
        return o6._finishPromise;
      const a5 = e8._readable;
      o6._finishPromise = E4((e9, r5) => {
        o6._finishPromise_resolve = e9, o6._finishPromise_reject = r5;
      });
      const i5 = o6._cancelAlgorithm(r4);
      return lr(o6), _4(i5, () => ("errored" === a5._state ? rt3(o6, a5._storedError) : (oe3(a5._readableStreamController, r4), pn2(o6)), null), (e9) => (oe3(a5._readableStreamController, e9), rt3(o6, e9), null)), o6._finishPromise;
    }
    function Ps(e8) {
      const r4 = e8._transformStreamController;
      if (void 0 !== r4._finishPromise)
        return r4._finishPromise;
      const o6 = e8._readable;
      r4._finishPromise = E4((e9, o7) => {
        r4._finishPromise_resolve = e9, r4._finishPromise_reject = o7;
      });
      const a5 = r4._flushAlgorithm();
      return lr(r4), _4(a5, () => ("errored" === o6._state ? rt3(r4, o6._storedError) : ($e3(o6._readableStreamController), pn2(r4)), null), (e9) => (oe3(o6._readableStreamController, e9), rt3(r4, e9), null)), r4._finishPromise;
    }
    function vs(e8) {
      return ar(e8, false), e8._backpressureChangePromise;
    }
    function Es(e8, r4) {
      const o6 = e8._transformStreamController;
      if (void 0 !== o6._finishPromise)
        return o6._finishPromise;
      const a5 = e8._writable;
      o6._finishPromise = E4((e9, r5) => {
        o6._finishPromise_resolve = e9, o6._finishPromise_reject = r5;
      });
      const i5 = o6._cancelAlgorithm(r4);
      return lr(o6), _4(i5, () => ("errored" === a5._state ? rt3(o6, a5._storedError) : (wt2(a5._writableStreamController, r4), hn2(e8), pn2(o6)), null), (r5) => (wt2(a5._writableStreamController, r5), hn2(e8), rt3(o6, r5), null)), o6._finishPromise;
    }
    function ur(e8) {
      return new TypeError(`TransformStreamDefaultController.prototype.${e8} can only be used on a TransformStreamDefaultController`);
    }
    function pn2(e8) {
      void 0 !== e8._finishPromise_resolve && (e8._finishPromise_resolve(), e8._finishPromise_resolve = void 0, e8._finishPromise_reject = void 0);
    }
    function rt3(e8, r4) {
      void 0 !== e8._finishPromise_reject && (Q3(e8._finishPromise), e8._finishPromise_reject(r4), e8._finishPromise_resolve = void 0, e8._finishPromise_reject = void 0);
    }
    function li(e8) {
      return new TypeError(`TransformStream.prototype.${e8} can only be used on a TransformStream`);
    }
    Object.defineProperties(pt3.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h22(pt3.prototype.enqueue, "enqueue"), h22(pt3.prototype.error, "error"), h22(pt3.prototype.terminate, "terminate"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(pt3.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true }), n2(sr, "IsTransformStreamDefaultController"), n2(_s, "SetUpTransformStreamDefaultController"), n2(Ss, "SetUpTransformStreamDefaultControllerFromTransformer"), n2(lr, "TransformStreamDefaultControllerClearAlgorithms"), n2(ai, "TransformStreamDefaultControllerEnqueue"), n2(ws, "TransformStreamDefaultControllerError"), n2(si, "TransformStreamDefaultControllerPerformTransform"), n2(Rs, "TransformStreamDefaultControllerTerminate"), n2(Ts, "TransformStreamDefaultSinkWriteAlgorithm"), n2(Cs, "TransformStreamDefaultSinkAbortAlgorithm"), n2(Ps, "TransformStreamDefaultSinkCloseAlgorithm"), n2(vs, "TransformStreamDefaultSourcePullAlgorithm"), n2(Es, "TransformStreamDefaultSourceCancelAlgorithm"), n2(ur, "defaultControllerBrandCheckException"), n2(pn2, "defaultControllerFinishPromiseResolve"), n2(rt3, "defaultControllerFinishPromiseReject"), n2(li, "streamBrandCheckException"), e7.ByteLengthQueuingStrategy = at4, e7.CountQueuingStrategy = lt3, e7.ReadableByteStreamController = pe3, e7.ReadableStream = et4, e7.ReadableStreamBYOBReader = ye3, e7.ReadableStreamBYOBRequest = de3, e7.ReadableStreamDefaultController = Ve3, e7.ReadableStreamDefaultReader = M3, e7.TransformStream = dt3, e7.TransformStreamDefaultController = pt3, e7.WritableStream = we3, e7.WritableStreamDefaultController = Me3, e7.WritableStreamDefaultWriter = xe4;
  }(Ns.exports)), Ns.exports;
}
async function* qn(e7, r3 = true) {
  for (const o5 of e7)
    if ("stream" in o5)
      yield* o5.stream();
    else if (ArrayBuffer.isView(o5))
      if (r3) {
        let e8 = o5.byteOffset;
        const r4 = o5.byteOffset + o5.byteLength;
        for (; e8 !== r4; ) {
          const a4 = Math.min(r4 - e8, 65536), i4 = o5.buffer.slice(e8, e8 + a4);
          e8 += i4.byteLength, yield new Uint8Array(i4);
        }
      } else
        yield o5;
    else {
      let e8 = 0, r4 = o5;
      for (; e8 !== r4.size; ) {
        const o6 = await r4.slice(e8, Math.min(r4.size, e8 + 65536)).arrayBuffer();
        e8 += o6.byteLength, yield new Uint8Array(o6);
      }
    }
}
function Vs(e7, r3 = $s) {
  var o5 = `${Xs()}${Xs()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), a4 = [], i4 = `--${o5}\r
Content-Disposition: form-data; name="`;
  return e7.forEach((e8, r4) => "string" == typeof e8 ? a4.push(i4 + nl(r4) + `"\r
\r
${e8.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), "\r\n")}\r
`) : a4.push(i4 + nl(r4) + `"; filename="${nl(e8.name, 1)}"\r
Content-Type: ${e8.type || "application/octet-stream"}\r
\r
`, e8, "\r\n")), a4.push(`--${o5}--`), new r3(a4, { type: "multipart/form-data; boundary=" + o5 });
}
async function In(e7) {
  if (e7[Ll].disturbed)
    throw new TypeError(`body used already for: ${e7.url}`);
  if (e7[Ll].disturbed = true, e7[Ll].error)
    throw e7[Ll].error;
  const { body: r3 } = e7;
  if (null === r3)
    return f.alloc(0);
  if (!(r3 instanceof Cr))
    return f.alloc(0);
  const o5 = [];
  let a4 = 0;
  try {
    for await (const i4 of r3) {
      if (e7.size > 0 && a4 + i4.length > e7.size) {
        const o6 = new hl(`content size at ${e7.url} over limit: ${e7.size}`, "max-size");
        throw r3.destroy(o6), o6;
      }
      a4 += i4.length, o5.push(i4);
    }
  } catch (r4) {
    throw r4 instanceof fl ? r4 : new hl(`Invalid response body while trying to fetch ${e7.url}: ${r4.message}`, "system", r4);
  }
  if (true !== r3.readableEnded && true !== r3._readableState.ended)
    throw new hl(`Premature close of server response while trying to fetch ${e7.url}`);
  try {
    return o5.every((e8) => "string" == typeof e8) ? f.from(o5.join("")) : f.concat(o5, a4);
  } catch (r4) {
    throw new hl(`Could not create Buffer from response body for ${e7.url}: ${r4.message}`, "system", r4);
  }
}
function el(e7 = []) {
  return new Hl(e7.reduce((e8, r3, o5, a4) => (o5 % 2 == 0 && e8.push(a4.slice(o5, o5 + 2)), e8), []).filter(([e8, r3]) => {
    try {
      return Wl(e8), ql(e8, String(r3)), true;
    } catch {
      return false;
    }
  }));
}
function _i(e7, r3 = false) {
  return null == e7 || (e7 = new URL(e7), /^(about|blob|data):$/.test(e7.protocol)) ? "no-referrer" : (e7.username = "", e7.password = "", e7.hash = "", r3 && (e7.pathname = "", e7.search = ""), e7);
}
function ol(e7) {
  if (!Ql.has(e7))
    throw new TypeError(`Invalid referrerPolicy: ${e7}`);
  return e7;
}
function il(e7) {
  if (/^(http|ws)s:$/.test(e7.protocol))
    return true;
  const r3 = e7.host.replace(/(^\[)|(]$)/g, ""), o5 = isIP(r3);
  return !!(4 === o5 && /^127\./.test(r3) || 6 === o5 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(r3)) || "localhost" !== e7.host && !e7.host.endsWith(".localhost") && "file:" === e7.protocol;
}
function ct(e7) {
  return !(!/^about:(blank|srcdoc)$/.test(e7) && "data:" !== e7.protocol && !/^(blob|filesystem):$/.test(e7.protocol)) || il(e7);
}
function al(e7, { referrerURLCallback: r3, referrerOriginCallback: o5 } = {}) {
  if ("no-referrer" === e7.referrer || "" === e7.referrerPolicy)
    return null;
  const a4 = e7.referrerPolicy;
  if ("about:client" === e7.referrer)
    return "no-referrer";
  const i4 = e7.referrer;
  let s3 = _i(i4), d3 = _i(i4, true);
  s3.toString().length > 4096 && (s3 = d3), r3 && (s3 = r3(s3)), o5 && (d3 = o5(d3));
  const f2 = new URL(e7.url);
  switch (a4) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return d3;
    case "unsafe-url":
      return s3;
    case "strict-origin":
      return ct(s3) && !ct(f2) ? "no-referrer" : d3.toString();
    case "strict-origin-when-cross-origin":
      return s3.origin === f2.origin ? s3 : ct(s3) && !ct(f2) ? "no-referrer" : d3;
    case "same-origin":
      return s3.origin === f2.origin ? s3 : "no-referrer";
    case "origin-when-cross-origin":
      return s3.origin === f2.origin ? s3 : d3;
    case "no-referrer-when-downgrade":
      return ct(s3) && !ct(f2) ? "no-referrer" : s3;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${a4}`);
  }
}
function sl(e7) {
  const r3 = (e7.get("referrer-policy") || "").split(/[,\s]+/);
  let o5 = "";
  for (const e8 of r3)
    e8 && Ql.has(e8) && (o5 = e8);
  return o5;
}
async function Ti(e7, r3) {
  return new Promise((o5, a4) => {
    const i4 = new Xl(e7, r3), { parsedURL: s3, options: d3 } = ec(i4);
    if (!cc.has(s3.protocol))
      throw new TypeError(`node-fetch cannot load ${e7}. URL scheme "${s3.protocol.replace(/:$/, "")}" is not supported.`);
    if ("data:" === s3.protocol) {
      const e8 = js(i4.url), r4 = new Gl(e8, { headers: { "Content-Type": e8.typeFull } });
      return void o5(r4);
    }
    const p2 = ("https:" === s3.protocol ? kt : Et).request, { signal: h4 } = i4;
    let g2 = null;
    const D3 = n2(() => {
      const e8 = new rc("The operation was aborted.");
      a4(e8), i4.body && i4.body instanceof Cr.Readable && i4.body.destroy(e8), g2 && g2.body && g2.body.emit("error", e8);
    }, "abort");
    if (h4 && h4.aborted)
      return void D3();
    const v4 = n2(() => {
      D3(), S3();
    }, "abortAndFinalize"), w4 = p2(s3.toString(), d3);
    h4 && h4.addEventListener("abort", v4);
    const S3 = n2(() => {
      w4.abort(), h4 && h4.removeEventListener("abort", v4);
    }, "finalize");
    w4.on("error", (e8) => {
      a4(new hl(`request to ${i4.url} failed, reason: ${e8.message}`, "system", e8)), S3();
    }), yl(w4, (e8) => {
      g2 && g2.body && g2.body.destroy(e8);
    }), B.version < "v14" && w4.on("socket", (e8) => {
      let r4;
      e8.prependListener("end", () => {
        r4 = e8._eventsCount;
      }), e8.prependListener("close", (o6) => {
        if (g2 && r4 < e8._eventsCount && !o6) {
          const e9 = new Error("Premature close");
          e9.code = "ERR_STREAM_PREMATURE_CLOSE", g2.body.emit("error", e9);
        }
      });
    }), w4.on("response", (e8) => {
      w4.setTimeout(0);
      const s4 = el(e8.rawHeaders);
      if (Vl(e8.statusCode)) {
        const d5 = s4.get("Location");
        let f2 = null;
        try {
          f2 = null === d5 ? null : new URL(d5, i4.url);
        } catch {
          if ("manual" !== i4.redirect)
            return a4(new hl(`uri requested responds with an invalid redirect URL: ${d5}`, "invalid-redirect")), void S3();
        }
        switch (i4.redirect) {
          case "error":
            return a4(new hl(`uri requested responds with a redirect, redirect mode is set to error: ${i4.url}`, "no-redirect")), void S3();
          case "manual":
            break;
          case "follow": {
            if (null === f2)
              break;
            if (i4.counter >= i4.follow)
              return a4(new hl(`maximum redirect reached at: ${i4.url}`, "max-redirect")), void S3();
            const d6 = { headers: new Hl(i4.headers), follow: i4.follow, counter: i4.counter + 1, agent: i4.agent, compress: i4.compress, method: i4.method, body: Ml(i4), signal: i4.signal, size: i4.size, referrer: i4.referrer, referrerPolicy: i4.referrerPolicy };
            if (!Al(i4.url, f2) || !Fl(i4.url, f2))
              for (const e9 of ["authorization", "www-authenticate", "cookie", "cookie2"])
                d6.headers.delete(e9);
            if (303 !== e8.statusCode && i4.body && r3.body instanceof Cr.Readable)
              return a4(new hl("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), void S3();
            (303 === e8.statusCode || (301 === e8.statusCode || 302 === e8.statusCode) && "POST" === i4.method) && (d6.method = "GET", d6.body = void 0, d6.headers.delete("content-length"));
            const p4 = sl(s4);
            return p4 && (d6.referrerPolicy = p4), o5(Ti(new Xl(f2, d6))), void S3();
          }
          default:
            return a4(new TypeError(`Redirect option '${i4.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      h4 && e8.once("end", () => {
        h4.removeEventListener("abort", v4);
      });
      let d4 = zt(e8, new qt(), (e9) => {
        e9 && a4(e9);
      });
      B.version < "v12.10" && e8.on("aborted", v4);
      const p3 = { url: i4.url, status: e8.statusCode, statusText: e8.statusMessage, headers: s4, size: i4.size, counter: i4.counter, highWaterMark: i4.highWaterMark }, D4 = s4.get("Content-Encoding");
      if (!i4.compress || "HEAD" === i4.method || null === D4 || 204 === e8.statusCode || 304 === e8.statusCode)
        return g2 = new Gl(d4, p3), void o5(g2);
      const A4 = { flush: kt.Z_SYNC_FLUSH, finishFlush: kt.Z_SYNC_FLUSH };
      if ("gzip" === D4 || "x-gzip" === D4)
        return d4 = zt(d4, kt.createGunzip(A4), (e9) => {
          e9 && a4(e9);
        }), g2 = new Gl(d4, p3), void o5(g2);
      if ("deflate" === D4 || "x-deflate" === D4) {
        const r4 = zt(e8, new qt(), (e9) => {
          e9 && a4(e9);
        });
        return r4.once("data", (e9) => {
          d4 = 8 == (15 & e9[0]) ? zt(d4, kt.createInflate(), (e10) => {
            e10 && a4(e10);
          }) : zt(d4, kt.createInflateRaw(), (e10) => {
            e10 && a4(e10);
          }), g2 = new Gl(d4, p3), o5(g2);
        }), void r4.once("end", () => {
          g2 || (g2 = new Gl(d4, p3), o5(g2));
        });
      }
      if ("br" === D4)
        return d4 = zt(d4, kt.createBrotliDecompress(), (e9) => {
          e9 && a4(e9);
        }), g2 = new Gl(d4, p3), void o5(g2);
      g2 = new Gl(d4, p3), o5(g2);
    }), jl(w4, i4).catch(a4);
  });
}
function yl(e7, r3) {
  const o5 = f.from("0\r\n\r\n");
  let a4, i4 = false, s3 = false;
  e7.on("response", (e8) => {
    const { headers: r4 } = e8;
    i4 = "chunked" === r4["transfer-encoding"] && !r4["content-length"];
  }), e7.on("socket", (f2) => {
    const p2 = n2(() => {
      if (i4 && !s3) {
        const e8 = new Error("Premature close");
        e8.code = "ERR_STREAM_PREMATURE_CLOSE", r3(e8);
      }
    }, "onSocketClose"), h4 = n2((e8) => {
      s3 = 0 === f.compare(e8.slice(-5), o5), !s3 && a4 && (s3 = 0 === f.compare(a4.slice(-3), o5.slice(0, 3)) && 0 === f.compare(e8.slice(-2), o5.slice(3))), a4 = e8;
    }, "onData");
    f2.prependListener("close", p2), f2.on("data", h4), e7.on("close", () => {
      f2.removeListener("close", p2), f2.removeListener("data", h4);
    });
  });
}
function W(e7) {
  const r3 = uc.get(e7);
  return console.assert(null != r3, "'this' is expected an Event object, but got", e7), r3;
}
function Pi(e7) {
  null == e7.passiveListener ? e7.event.cancelable && (e7.canceled = true, "function" == typeof e7.event.preventDefault && e7.event.preventDefault()) : typeof console < "u" && "function" == typeof console.error && console.error("Unable to preventDefault inside passive event listener invocation.", e7.passiveListener);
}
function ht(e7, r3) {
  uc.set(this, { eventTarget: e7, event: r3, eventPhase: 2, currentTarget: e7, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: r3.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const o5 = Object.keys(r3);
  for (let e8 = 0; e8 < o5.length; ++e8) {
    const r4 = o5[e8];
    r4 in this || Object.defineProperty(this, r4, vi(r4));
  }
}
function vi(e7) {
  return { get() {
    return W(this).event[e7];
  }, set(r3) {
    W(this).event[e7] = r3;
  }, configurable: true, enumerable: true };
}
function gl(e7) {
  return { value() {
    const r3 = W(this).event;
    return r3[e7].apply(r3, arguments);
  }, configurable: true, enumerable: true };
}
function _l(e7, r3) {
  const o5 = Object.keys(r3);
  if (0 === o5.length)
    return e7;
  function u3(r4, o6) {
    e7.call(this, r4, o6);
  }
  n2(u3, "CustomEvent"), u3.prototype = Object.create(e7.prototype, { constructor: { value: u3, configurable: true, writable: true } });
  for (let a4 = 0; a4 < o5.length; ++a4) {
    const i4 = o5[a4];
    if (!(i4 in e7.prototype)) {
      const e8 = "function" == typeof Object.getOwnPropertyDescriptor(r3, i4).value;
      Object.defineProperty(u3.prototype, i4, e8 ? gl(i4) : vi(i4));
    }
  }
  return u3;
}
function Ei(e7) {
  if (null == e7 || e7 === Object.prototype)
    return ht;
  let r3 = dc.get(e7);
  return null == r3 && (r3 = _l(Ei(Object.getPrototypeOf(e7)), e7), dc.set(e7, r3)), r3;
}
function Sl(e7, r3) {
  return new (Ei(Object.getPrototypeOf(r3)))(e7, r3);
}
function wl(e7) {
  return W(e7).immediateStopped;
}
function Rl(e7, r3) {
  W(e7).eventPhase = r3;
}
function Tl(e7, r3) {
  W(e7).currentTarget = r3;
}
function Ai(e7, r3) {
  W(e7).passiveListener = r3;
}
function Rr(e7) {
  return null !== e7 && "object" == typeof e7;
}
function Bt(e7) {
  const r3 = fc.get(e7);
  if (null == r3)
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return r3;
}
function Cl(e7) {
  return { get() {
    let r3 = Bt(this).get(e7);
    for (; null != r3; ) {
      if (r3.listenerType === pc)
        return r3.listener;
      r3 = r3.next;
    }
    return null;
  }, set(r3) {
    "function" != typeof r3 && !Rr(r3) && (r3 = null);
    const o5 = Bt(this);
    let a4 = null, i4 = o5.get(e7);
    for (; null != i4; )
      i4.listenerType === pc ? null !== a4 ? a4.next = i4.next : null !== i4.next ? o5.set(e7, i4.next) : o5.delete(e7) : a4 = i4, i4 = i4.next;
    if (null !== r3) {
      const i5 = { listener: r3, listenerType: pc, passive: false, once: false, next: null };
      null === a4 ? o5.set(e7, i5) : a4.next = i5;
    }
  }, configurable: true, enumerable: true };
}
function qi(e7, r3) {
  Object.defineProperty(e7, `on${r3}`, Cl(r3));
}
function Oi(e7) {
  function o22() {
    Pe.call(this);
  }
  n2(o22, "CustomEventTarget"), o22.prototype = Object.create(Pe.prototype, { constructor: { value: o22, configurable: true, writable: true } });
  for (let r3 = 0; r3 < e7.length; ++r3)
    qi(o22.prototype, e7[r3]);
  return o22;
}
function Pe() {
  if (!(this instanceof Pe)) {
    if (1 === arguments.length && Array.isArray(arguments[0]))
      return Oi(arguments[0]);
    if (arguments.length > 0) {
      const e7 = new Array(arguments.length);
      for (let r3 = 0; r3 < arguments.length; ++r3)
        e7[r3] = arguments[r3];
      return Oi(e7);
    }
    throw new TypeError("Cannot call a class as a function");
  }
  fc.set(this, /* @__PURE__ */ new Map());
}
function Pl() {
  const e7 = Object.create(mc.prototype);
  return Pe.call(e7), yc.set(e7, false), e7;
}
function vl(e7) {
  false === yc.get(e7) && (yc.set(e7, true), e7.dispatchEvent({ type: "abort" }));
}
function Ii(e7) {
  const r3 = gc.get(e7);
  if (null == r3)
    throw new TypeError("Expected 'this' to be an 'AbortController' object, but got " + (null === e7 ? "null" : typeof e7));
  return r3;
}
function ji() {
  var e7, r3, o5;
  !(null == (r3 = null == (e7 = globalThis.process) ? void 0 : e7.versions) ? void 0 : r3.node) && !(null == (o5 = globalThis.process) ? void 0 : o5.env.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
function l2() {
  return !Ec && globalThis.fetch ? globalThis.fetch : Dc;
}
function jsonParseTransform(e7, r3) {
  if (!("__proto__" === e7 || "constructor" === e7 && r3 && "object" == typeof r3 && "prototype" in r3))
    return r3;
  !function(e8) {
    console.warn(`[destr] Dropping "${e8}" key to prevent prototype pollution.`);
  }(e7);
}
function destr(e7, r3 = {}) {
  if ("string" != typeof e7)
    return e7;
  const o5 = e7.trim();
  if ('"' === e7[0] && e7.endsWith('"') && !e7.includes("\\"))
    return o5.slice(1, -1);
  if (o5.length <= 9) {
    const e8 = o5.toLowerCase();
    if ("true" === e8)
      return true;
    if ("false" === e8)
      return false;
    if ("undefined" === e8)
      return;
    if ("null" === e8)
      return null;
    if ("nan" === e8)
      return Number.NaN;
    if ("infinity" === e8)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === e8)
      return Number.NEGATIVE_INFINITY;
  }
  if (!Lc.test(e7)) {
    if (r3.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e7;
  }
  try {
    if (Rc.test(e7) || Tc.test(e7)) {
      if (r3.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e7, jsonParseTransform);
    }
    return JSON.parse(e7);
  } catch (o6) {
    if (r3.strict)
      throw o6;
    return e7;
  }
}
function encodeQueryValue(e7) {
  return (r3 = "string" == typeof e7 ? e7 : JSON.stringify(e7), encodeURI("" + r3).replace(Wc, "|")).replace(Bc, "%2B").replace(qc, "+").replace(kc, "%23").replace(Pc, "%26").replace(jc, "`").replace(Ic, "^").replace(Oc, "%2F");
  var r3;
}
function encodeQueryKey(e7) {
  return encodeQueryValue(e7).replace(Mc, "%3D");
}
function decode(e7 = "") {
  try {
    return decodeURIComponent("" + e7);
  } catch {
    return "" + e7;
  }
}
function decodeQueryValue(e7) {
  return decode(e7.replace(Bc, " "));
}
function parseQuery(e7 = "") {
  const r3 = {};
  "?" === e7[0] && (e7 = e7.slice(1));
  for (const o5 of e7.split("&")) {
    const e8 = o5.match(/([^=]+)=?(.*)/) || [];
    if (e8.length < 2)
      continue;
    const a4 = decode(e8[1].replace(Bc, " "));
    if ("__proto__" === a4 || "constructor" === a4)
      continue;
    const i4 = decodeQueryValue(e8[2] || "");
    void 0 === r3[a4] ? r3[a4] = i4 : Array.isArray(r3[a4]) ? r3[a4].push(i4) : r3[a4] = [r3[a4], i4];
  }
  return r3;
}
function stringifyQuery(e7) {
  return Object.keys(e7).filter((r3) => void 0 !== e7[r3]).map((r3) => {
    return o5 = r3, "number" != typeof (a4 = e7[r3]) && "boolean" != typeof a4 || (a4 = String(a4)), a4 ? Array.isArray(a4) ? a4.map((e8) => `${encodeQueryKey(o5)}=${encodeQueryValue(e8)}`).join("&") : `${encodeQueryKey(o5)}=${encodeQueryValue(a4)}` : encodeQueryKey(o5);
    var o5, a4;
  }).filter(Boolean).join("&");
}
function hasProtocol(e7, r3 = {}) {
  return "boolean" == typeof r3 && (r3 = { acceptRelative: r3 }), r3.strict ? Uc.test(e7) : Hc.test(e7) || !!r3.acceptRelative && Nc.test(e7);
}
function hasTrailingSlash(e7 = "", r3) {
  return r3 ? zc.test(e7) : e7.endsWith("/");
}
function withoutTrailingSlash(e7 = "", r3) {
  if (!r3)
    return (hasTrailingSlash(e7) ? e7.slice(0, -1) : e7) || "/";
  if (!hasTrailingSlash(e7, true))
    return e7 || "/";
  let o5 = e7, a4 = "";
  const i4 = e7.indexOf("#");
  i4 >= 0 && (o5 = e7.slice(0, i4), a4 = e7.slice(i4));
  const [s3, ...d3] = o5.split("?");
  return ((s3.endsWith("/") ? s3.slice(0, -1) : s3) || "/") + (d3.length > 0 ? `?${d3.join("?")}` : "") + a4;
}
function withTrailingSlash(e7 = "", r3) {
  if (!r3)
    return e7.endsWith("/") ? e7 : e7 + "/";
  if (hasTrailingSlash(e7, true))
    return e7 || "/";
  let o5 = e7, a4 = "";
  const i4 = e7.indexOf("#");
  if (i4 >= 0 && (o5 = e7.slice(0, i4), a4 = e7.slice(i4), !o5))
    return a4;
  const [s3, ...d3] = o5.split("?");
  return s3 + "/" + (d3.length > 0 ? `?${d3.join("?")}` : "") + a4;
}
function withLeadingSlash(e7 = "") {
  return function(e8 = "") {
    return e8.startsWith("/");
  }(e7) ? e7 : "/" + e7;
}
function withQuery(e7, r3) {
  const o5 = parseURL(e7), a4 = { ...parseQuery(o5.search), ...r3 };
  return o5.search = stringifyQuery(a4), stringifyParsedURL(o5);
}
function joinURL(e7, ...r3) {
  let o5 = e7 || "";
  for (const e8 of r3.filter((e9) => function(e10) {
    return e10 && "/" !== e10;
  }(e9)))
    if (o5) {
      const r4 = e8.replace($c, "");
      o5 = withTrailingSlash(o5) + r4;
    } else
      o5 = e8;
  return o5;
}
function parseURL(e7 = "", r3) {
  const o5 = e7.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (o5) {
    const [, e8, r4 = ""] = o5;
    return { protocol: e8.toLowerCase(), pathname: r4, href: e8 + r4, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e7, { acceptRelative: true }))
    return r3 ? parseURL(r3 + e7) : parsePath(e7);
  const [, a4 = "", i4, s3 = ""] = e7.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, d3 = "", f2 = ""] = s3.match(/([^#/?]*)(.*)?/) || [], { pathname: p2, search: h4, hash: g2 } = parsePath(f2.replace(/\/(?=[A-Za-z]:)/, ""));
  return { protocol: a4.toLowerCase(), auth: i4 ? i4.slice(0, Math.max(0, i4.length - 1)) : "", host: d3, pathname: p2, search: h4, hash: g2, [Gc]: !a4 };
}
function parsePath(e7 = "") {
  const [r3 = "", o5 = "", a4 = ""] = (e7.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: r3, search: o5, hash: a4 };
}
function stringifyParsedURL(e7) {
  const r3 = e7.pathname || "", o5 = e7.search ? (e7.search.startsWith("?") ? "" : "?") + e7.search : "", a4 = e7.hash || "", i4 = e7.auth ? e7.auth + "@" : "", s3 = e7.host || "";
  return (e7.protocol || e7[Gc] ? (e7.protocol || "") + "//" : "") + i4 + s3 + r3 + o5 + a4;
}
function isPayloadMethod(e7 = "GET") {
  return Zc.has(e7.toUpperCase());
}
function mergeFetchOptions(e7, r3, o5 = globalThis.Headers) {
  const a4 = { ...r3, ...e7 };
  if ((null == r3 ? void 0 : r3.params) && (null == e7 ? void 0 : e7.params) && (a4.params = { ...null == r3 ? void 0 : r3.params, ...null == e7 ? void 0 : e7.params }), (null == r3 ? void 0 : r3.query) && (null == e7 ? void 0 : e7.query) && (a4.query = { ...null == r3 ? void 0 : r3.query, ...null == e7 ? void 0 : e7.query }), (null == r3 ? void 0 : r3.headers) && (null == e7 ? void 0 : e7.headers)) {
    a4.headers = new o5((null == r3 ? void 0 : r3.headers) || {});
    for (const [r4, i4] of new o5((null == e7 ? void 0 : e7.headers) || {}))
      a4.headers.set(r4, i4);
  }
  return a4;
}
function createNuxtApp(e7) {
  let r3 = 0;
  const o5 = { _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
    return "3.11.2";
  }, get vue() {
    return o5.vueApp.version;
  } }, payload: reactive({ data: {}, state: {}, once: /* @__PURE__ */ new Set(), _errors: {}, serverRendered: true }), static: { data: {} }, runWithContext: (e8) => o5._scope.run(() => function(e9, r4, o6) {
    const fn3 = () => r4();
    return e9.vueApp.runWithContext(() => tu.callAsync(e9, fn3));
  }(o5, e8)), isHydrating: false, deferHydration() {
    if (!o5.isHydrating)
      return () => {
      };
    r3++;
    let e8 = false;
    return () => {
      if (!e8)
        return e8 = true, r3--, 0 === r3 ? (o5.isHydrating = false, o5.callHook("app:suspense:resolve")) : void 0;
    };
  }, _asyncDataPromises: {}, _asyncData: {}, _payloadRevivers: {}, ...e7 };
  o5.hooks = createHooks(), o5.hook = o5.hooks.hook;
  {
    const contextCaller = async function(e8, r4) {
      for (const a5 of e8)
        await o5.runWithContext(() => a5(...r4));
    };
    o5.hooks.callHook = (e8, ...r4) => o5.hooks.callHookWith(contextCaller, e8, ...r4);
  }
  o5.callHook = o5.hooks.callHook, o5.provide = (e8, r4) => {
    const a5 = "$" + e8;
    defineGetter(o5, a5, r4), defineGetter(o5.vueApp.config.globalProperties, a5, r4);
  }, defineGetter(o5.vueApp, "$nuxt", o5), defineGetter(o5.vueApp.config.globalProperties, "$nuxt", o5), o5.ssrContext && (o5.ssrContext.nuxt = o5, o5.ssrContext._payloadReducers = {}, o5.payload.path = o5.ssrContext.url), o5.ssrContext = o5.ssrContext || {}, o5.ssrContext.payload && Object.assign(o5.payload, o5.ssrContext.payload), o5.ssrContext.payload = o5.payload, o5.ssrContext.config = { public: e7.ssrContext.runtimeConfig.public, app: e7.ssrContext.runtimeConfig.app };
  const a4 = e7.ssrContext.runtimeConfig;
  return o5.provide("config", a4), o5;
}
function defineNuxtPlugin(e7) {
  if ("function" == typeof e7)
    return e7;
  const r3 = e7._name || e7.name;
  return delete e7.name, Object.assign(e7.setup || (() => {
  }), e7, { [ru]: true, _name: r3 });
}
function tryUseNuxtApp() {
  var e7;
  let r3;
  return hasInjectionContext() && (r3 = null == (e7 = getCurrentInstance()) ? void 0 : e7.appContext.app.$nuxt), r3 = r3 || tu.tryUse(), r3 || null;
}
function useNuxtApp() {
  const e7 = tryUseNuxtApp();
  if (!e7)
    throw new Error("[nuxt] instance unavailable");
  return e7;
}
function useRuntimeConfig(e7) {
  return useNuxtApp().$config;
}
function defineGetter(e7, r3, o5) {
  Object.defineProperty(e7, r3, { get: () => o5 });
}
function defineNuxtRouteMiddleware(e7) {
  return e7;
}
function resolveUnrefHeadInput(e7, r3 = "") {
  if (e7 instanceof Promise)
    return e7;
  const o5 = "function" == typeof (a4 = e7) ? a4() : unref(a4);
  var a4;
  return e7 && o5 ? Array.isArray(o5) ? o5.map((e8) => resolveUnrefHeadInput(e8, r3)) : "object" == typeof o5 ? Object.fromEntries(Object.entries(o5).map(([e8, r4]) => "titleTemplate" === e8 || e8.startsWith("on") ? [e8, unref(r4)] : [e8, resolveUnrefHeadInput(r4, e8)])) : o5 : o5;
}
function useHead(e7, r3 = {}) {
  const o5 = r3.head || function() {
    if (su in iu)
      return iu[su]();
    const e8 = inject(au);
    return e8 || getActiveHead();
  }();
  if (o5)
    return o5.ssr ? o5.push(e7, r3) : function(e8, r4, o6 = {}) {
      const a4 = ref(false), i4 = ref({});
      watchEffect(() => {
        i4.value = a4.value ? {} : resolveUnrefHeadInput(r4);
      });
      const s3 = e8.push(i4.value, o6);
      return watch(i4, (e9) => {
        s3.patch(e9);
      }), getCurrentInstance(), s3;
    }(o5, e7, r3);
}
function isPlainObject(e7) {
  if (null === e7 || "object" != typeof e7)
    return false;
  const r3 = Object.getPrototypeOf(e7);
  return (null === r3 || r3 === Object.prototype || null === Object.getPrototypeOf(r3)) && (!(Symbol.iterator in e7) && (!(Symbol.toStringTag in e7) || "[object Module]" === Object.prototype.toString.call(e7)));
}
function _defu(e7, r3, o5 = ".", a4) {
  if (!isPlainObject(r3))
    return _defu(e7, {}, o5);
  const i4 = Object.assign({}, r3);
  for (const r4 in e7) {
    if ("__proto__" === r4 || "constructor" === r4)
      continue;
    const a5 = e7[r4];
    null != a5 && (Array.isArray(a5) && Array.isArray(i4[r4]) ? i4[r4] = [...a5, ...i4[r4]] : isPlainObject(a5) && isPlainObject(i4[r4]) ? i4[r4] = _defu(a5, i4[r4], (o5 ? `${o5}.` : "") + r4.toString()) : i4[r4] = a5);
  }
  return i4;
}
function getRouteFromPath(e7) {
  "object" == typeof e7 && (e7 = stringifyParsedURL({ pathname: e7.path || "", search: stringifyQuery(e7.query || {}), hash: e7.hash || "" }));
  const r3 = parseURL(e7.toString());
  return { path: r3.pathname, fullPath: e7, query: parseQuery(r3.search), hash: r3.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: e7 };
}
var Xe, et, tt, getContext, ot, at, fn$1, it, st, lt, ut, dt, ft, pt, bt, Dt, vt, Et, At, Ft, fn, kt, Ot, It, Wt, qt, zt, cr, dr, fr, pr, hr, mr, yr, br, gr, Cr, _r, Dr, vr, wr, Sr, Er, Ar, Tr, kr, Pr, Mr, Br, Ur, $r, no, ao, jo, Jo, un, mn, yn, bn, gn, Cn, _n, Dn, vn, wn, Sn, En, An, Fn, xn, isIP, Rn, Tn, Ln, kn, Pn, On, Mn, Bn, jn, Wn, Un, Hn, Nn, Vn, zn, $n, Qn, Kn, _a, Sa, Ga, ti, ci, ui, di, pi, hi, mi, yi, bi, gi, Ci, Di, wi, Si, Fi, basename, Ri, ki, Bi, Wi, Hi, zi, Ds, As, Fs, xs, ks, Os, Ms, Bs, Is, Ws, qs, Us, n2, fi, O, be, X, Hs, Ns, zs, $s, Gs, Zs, Qs, Ys, Js, Xs, tl, rl, nl, cl, ul, dl, fl, pl, hl, ml, bl, Dl, El, Al, Fl, xl, Ll, kl, Ol, Ml, Ks, Bl, Il, jl, Wl, ql, Ul, Hl, Nl, Vl, zl, $l, Gl, Zl, Ql, Yl, Kl, ll, Jl, Xl, ec, tc, rc, oc, nc, ac, ic, sc, lc, cc, uc, dc, fc, pc, hc, mc, yc, bc, gc, Cc, _c, Dc, vc, t2, wc, Sc, Ec, Ac, Fc, xc, Rc, Tc, Lc, kc, Pc, Oc, Mc, Bc, Ic, jc, Wc, qc, Uc, Hc, Nc, Vc, zc, $c, Gc, FetchError, Zc, Qc, Yc, Kc, Jc, Xc, eu, tu, ru, ou, useRouter, navigateTo, nu, useError, showError, createError2, au, iu, su, lu, defu, cu, uu, du, fu, pu, hu, mu, yu, _export_sfc, bu, gu, Cu, _u, Du, vu, wu, Su, Eu, Au, Fu, entry$1;
var init_server = __esm({
  ".output/server/chunks/build/server.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    init_renderer();
    Xe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    et = "__unctx__";
    tt = Xe[et] || (Xe[et] = function(e7 = {}) {
      const r3 = {};
      return { get: (o5, a4 = {}) => (r3[o5] || (r3[o5] = function(e8 = {}) {
        let r4, o6 = false;
        const checkConflict = (e9) => {
          if (r4 && r4 !== e9)
            throw new Error("Context conflict");
        };
        let a5;
        if (e8.asyncContext) {
          const r5 = e8.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          r5 ? a5 = new r5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a5 && void 0 === r4) {
            const e9 = a5.getStore();
            if (void 0 !== e9)
              return e9;
          }
          return r4;
        };
        return { use: () => {
          const e9 = _getCurrentInstance();
          if (void 0 === e9)
            throw new Error("Context is not available");
          return e9;
        }, tryUse: () => _getCurrentInstance(), set: (e9, a6) => {
          a6 || checkConflict(e9), r4 = e9, o6 = true;
        }, unset: () => {
          r4 = void 0, o6 = false;
        }, call: (e9, i4) => {
          checkConflict(e9), r4 = e9;
          try {
            return a5 ? a5.run(e9, i4) : i4();
          } finally {
            o6 || (r4 = void 0);
          }
        }, async callAsync(e9, i4) {
          r4 = e9;
          const onRestore = () => {
            r4 = e9;
          }, onLeave = () => r4 === e9 ? onRestore : void 0;
          at.add(onLeave);
          try {
            const s3 = a5 ? a5.run(e9, i4) : i4();
            return o6 || (r4 = void 0), await s3;
          } finally {
            at.delete(onLeave);
          }
        } };
      }({ ...e7, ...a4 })), r3[o5], r3[o5]) };
    }());
    getContext = (e7, r3 = {}) => tt.get(e7, r3);
    ot = "__unctx_async_handlers__";
    at = Xe[ot] || (Xe[ot] = /* @__PURE__ */ new Set());
    fn$1 = function() {
    };
    it = function createMock$1(e7, r3 = {}) {
      fn$1.prototype.name = e7;
      const o5 = {};
      return new Proxy(fn$1, { get: (a4, i4) => "caller" === i4 ? null : "__createMock__" === i4 ? createMock$1 : "__unenv__" === i4 || (i4 in r3 ? r3[i4] : o5[i4] = o5[i4] || createMock$1(`${e7}.${i4.toString()}`)), apply: (r4, o6, a4) => createMock$1(`${e7}()`), construct: (r4, o6, a4) => createMock$1(`[${e7}]`), enumerate: () => [] });
    }("mock");
    st = Object.freeze(Object.defineProperty({ __proto__: null, METHODS: ["ACL", "BIND", "CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LINK", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCALENDAR", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PRI", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REBIND", "REPORT", "SEARCH", "SOURCE", "SUBSCRIBE", "TRACE", "UNBIND", "UNLINK", "UNLOCK", "UNSUBSCRIBE"], STATUS_CODES: { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 103: "Early Hints", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a Teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Too Early", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" }, maxHeaderSize: 16384 }, Symbol.toStringTag, { value: "Module" }));
    lt = notImplemented("http.createServer");
    ut = notImplemented("http.request");
    dt = notImplemented("http.get");
    ft = it.__createMock__("http.Server");
    pt = it.__createMock__("http.OutgoingMessage");
    bt = it.__createMock__("http.ClientRequest");
    Dt = it.__createMock__("http.Agent");
    vt = new Dt();
    Et = { ...st, IncomingMessage, ServerResponse, createServer: lt, request: ut, get: dt, Server: ft, OutgoingMessage: pt, ClientRequest: bt, Agent: Dt, globalAgent: vt, validateHeaderName: notImplemented("http.validateHeaderName"), validateHeaderValue: notImplemented("http.validateHeaderValue"), setMaxIdleHTTPParsers: notImplemented("http.setMaxIdleHTTPParsers") };
    At = { exports: {} };
    Ft = At.exports;
    Object.defineProperty(Ft, "__esModule", { value: true });
    fn = function() {
    };
    At.exports = function createMock(e7, r3 = {}) {
      fn.prototype.name = e7;
      const o5 = {};
      return new Proxy(fn, { get: (a4, i4) => "caller" === i4 ? null : "__createMock__" === i4 ? createMock : "__unenv__" === i4 || (i4 in r3 ? r3[i4] : o5[i4] = o5[i4] || createMock(`${e7}.${i4.toString()}`)), apply: (r4, o6, a4) => createMock(`${e7}()`), construct: (r4, o6, a4) => createMock(`[${e7}]`), enumerate: () => [] });
    }("mock");
    kt = getDefaultExportFromCjs(At.exports);
    Ot = globalThis.Transform || class extends ye {
      __unenv__ = true;
      _transform(e7, r3, o5) {
      }
      _flush(e7) {
      }
    };
    It = { finished: notImplemented("stream.promises.finished"), pipeline: notImplemented("stream.promises.pipeline") };
    Wt = it.__createMock__("Stream");
    qt = it.__createMock__("PassThrough");
    zt = notImplemented("stream.pipeline");
    cr = notImplemented("stream.finished");
    dr = notImplemented("stream.addAbortSignal");
    fr = notImplemented("stream.isDisturbed");
    pr = notImplemented("stream.isReadable");
    hr = notImplemented("stream.compose");
    mr = notImplemented("stream.isErrored");
    yr = notImplemented("stream.destroy");
    br = notImplemented("stream._isUint8Array");
    gr = notImplemented("stream._uint8ArrayToBuffer");
    Cr = { Readable: pe, Writable: de, Duplex: ye, Transform: Ot, Stream: Wt, PassThrough: qt, pipeline: zt, finished: cr, addAbortSignal: dr, promises: It, isDisturbed: fr, isReadable: pr, compose: hr, _uint8ArrayToBuffer: gr, isErrored: mr, destroy: yr, _isUint8Array: br };
    _r = notImplemented("util.types.isExternal");
    Dr = notImplemented("util.types.isArgumentsObject");
    vr = notImplemented("util.types.isNativeError");
    wr = notImplemented("util.types.isAsyncFunction");
    Sr = notImplemented("util.types.isGeneratorFunction");
    Er = notImplemented("util.types.isGeneratorObject");
    Ar = notImplemented("util.types.isMapIterator");
    Tr = notImplemented("util.types.isSetIterator");
    kr = notImplemented("util.types.isProxy");
    Pr = notImplemented("util.types.isModuleNamespaceObject");
    Mr = notImplemented("util.types.isAnyArrayBuffer");
    Br = notImplemented("util.types.isBoxedPrimitive");
    Ur = notImplemented("util.types.isArrayBufferView");
    $r = notImplemented("util.types.isTypedArray");
    no = notImplemented("util.types.isUint8Array");
    ao = notImplemented("util.types.isUint8ClampedArray");
    jo = notImplemented("util.types.isUint16Array");
    Jo = notImplemented("util.types.isUint32Array");
    un = notImplemented("util.types.isInt8Array");
    mn = notImplemented("util.types.isInt16Array");
    yn = notImplemented("util.types.isInt32Array");
    bn = notImplemented("util.types.isFloat32Array");
    gn = notImplemented("util.types.isFloat64Array");
    Cn = notImplemented("util.types.isBigInt64Array");
    _n = notImplemented("util.types.isBigUint64Array");
    Dn = notImplemented("util.types.isKeyObject");
    vn = notImplemented("util.types.isCryptoKey");
    wn = Object.freeze(Object.defineProperty({ __proto__: null, isAnyArrayBuffer: Mr, isArgumentsObject: Dr, isArrayBuffer: (e7) => e7 instanceof ArrayBuffer, isArrayBufferView: Ur, isAsyncFunction: wr, isBigInt64Array: Cn, isBigIntObject: (e7) => e7 instanceof BigInt, isBigUint64Array: _n, isBooleanObject: (e7) => e7 instanceof Boolean, isBoxedPrimitive: Br, isCryptoKey: vn, isDataView: (e7) => e7 instanceof DataView, isDate: (e7) => e7 instanceof Date, isExternal: _r, isFloat32Array: bn, isFloat64Array: gn, isGeneratorFunction: Sr, isGeneratorObject: Er, isInt16Array: mn, isInt32Array: yn, isInt8Array: un, isKeyObject: Dn, isMap: (e7) => e7 instanceof Map, isMapIterator: Ar, isModuleNamespaceObject: Pr, isNativeError: vr, isNumberObject: (e7) => e7 instanceof Number, isPromise: (e7) => e7 instanceof Promise, isProxy: kr, isRegExp: (e7) => e7 instanceof RegExp, isSet: (e7) => e7 instanceof Set, isSetIterator: Tr, isSharedArrayBuffer: (e7) => e7 instanceof SharedArrayBuffer, isStringObject: (e7) => e7 instanceof String, isSymbolObject: (e7) => e7 instanceof Symbol, isTypedArray: $r, isUint16Array: jo, isUint32Array: Jo, isUint8Array: no, isUint8ClampedArray: ao, isWeakMap: (e7) => e7 instanceof WeakMap, isWeakSet: (e7) => e7 instanceof WeakSet }, Symbol.toStringTag, { value: "Module" }));
    Sn = Symbol("customPromisify");
    _promisify.custom = Sn;
    En = _promisify;
    notImplemented("util._errnoException"), notImplemented("util._exceptionWithHostPort"), notImplemented("util._extend"), notImplemented("util.aborted"), notImplemented("util.callbackify"), notImplemented("util.getSystemErrorMap"), notImplemented("util.getSystemErrorName"), notImplemented("util.toUSVString"), notImplemented("util.stripVTControlCharacters"), notImplemented("util.transferableAbortController"), notImplemented("util.transferableAbortSignal"), notImplemented("util.parseArgs");
    An = globalThis.URL;
    notImplemented("net.createServer"), notImplemented("net.connect"), notImplemented("net.createConnection"), notImplemented("net.getDefaultAutoSelectFamily"), notImplemented("net.setDefaultAutoSelectFamily"), notImplemented("net.getDefaultAutoSelectFamilyAttemptTimeout"), notImplemented("net.setDefaultAutoSelectFamilyAttemptTimeout");
    Fn = /^(?:\d{1,3}\.){3}\d{1,3}$/;
    xn = /^([\dA-Fa-f]{1,4}:){7}[\dA-Fa-f]{1,4}$/;
    isIP = (e7) => ((e8) => Fn.test(e8))(e7) ? 4 : ((e8) => xn.test(e8))(e7) ? 6 : 0;
    Rn = /* @__PURE__ */ Object.create({ UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, UV_DIRENT_UNKNOWN: 0, UV_DIRENT_FILE: 1, UV_DIRENT_DIR: 2, UV_DIRENT_LINK: 3, UV_DIRENT_FIFO: 4, UV_DIRENT_SOCKET: 5, UV_DIRENT_CHAR: 6, UV_DIRENT_BLOCK: 7, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 64, O_EXCL: 128, UV_FS_O_FILEMAP: 0, O_NOCTTY: 256, O_TRUNC: 512, O_APPEND: 1024, O_DIRECTORY: 65536, O_NOATIME: 262144, O_NOFOLLOW: 131072, O_SYNC: 1052672, O_DSYNC: 4096, O_DIRECT: 16384, O_NONBLOCK: 2048, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_COPYFILE_EXCL: 1, COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, COPYFILE_FICLONE_FORCE: 4 });
    Tn = notImplemented("fs.access");
    Ln = notImplemented("fs.copyFile");
    kn = notImplemented("fs.cp");
    Pn = notImplemented("fs.open");
    On = notImplemented("fs.opendir");
    Mn = notImplemented("fs.rename");
    Bn = notImplemented("fs.truncate");
    jn = notImplemented("fs.rm");
    Wn = notImplemented("fs.rmdir");
    Un = notImplemented("fs.mkdir");
    Hn = notImplemented("fs.readdir");
    Nn = notImplemented("fs.readlink");
    Vn = notImplemented("fs.symlink");
    zn = notImplemented("fs.lstat");
    $n = notImplemented("fs.stat");
    Qn = notImplemented("fs.link");
    Kn = notImplemented("fs.unlink");
    _a = notImplemented("fs.chmod");
    Sa = notImplemented("fs.lchmod");
    Ga = notImplemented("fs.lchown");
    ti = notImplemented("fs.chown");
    ci = notImplemented("fs.utimes");
    ui = notImplemented("fs.lutimes");
    di = notImplemented("fs.realpath");
    pi = notImplemented("fs.mkdtemp");
    hi = notImplemented("fs.writeFile");
    mi = notImplemented("fs.appendFile");
    yi = notImplemented("fs.readFile");
    bi = notImplemented("fs.watch");
    gi = notImplemented("fs.statfs");
    Ci = Object.freeze(Object.defineProperty({ __proto__: null, access: Tn, appendFile: mi, chmod: _a, chown: ti, constants: Rn, copyFile: Ln, cp: kn, default: {}, lchmod: Sa, lchown: Ga, link: Qn, lstat: zn, lutimes: ui, mkdir: Un, mkdtemp: pi, open: Pn, opendir: On, readFile: yi, readdir: Hn, readlink: Nn, realpath: di, rename: Mn, rm: jn, rmdir: Wn, stat: $n, statfs: gi, symlink: Vn, truncate: Bn, unlink: Kn, utimes: ci, watch: bi, writeFile: hi }, Symbol.toStringTag, { value: "Module" }));
    callbackify(Tn), callbackify(mi), callbackify(ti), callbackify(_a), callbackify(Ln), callbackify(kn), callbackify(Ga), callbackify(Sa), callbackify(Qn), callbackify(zn), callbackify(ui), callbackify(Un), callbackify(pi), callbackify(di), callbackify(Pn), callbackify(On), callbackify(Hn), callbackify(yi), callbackify(Nn), callbackify(Mn), callbackify(jn), callbackify(Wn), callbackify($n), callbackify(Vn), callbackify(Bn), callbackify(Kn), callbackify(ci), callbackify(hi), callbackify(gi), notImplementedAsync("fs.close");
    Di = notImplementedAsync("fs.createReadStream");
    notImplementedAsync("fs.createWriteStream"), notImplementedAsync("fs.exists"), notImplementedAsync("fs.fchown"), notImplementedAsync("fs.fchmod"), notImplementedAsync("fs.fdatasync"), notImplementedAsync("fs.fstat"), notImplementedAsync("fs.fsync"), notImplementedAsync("fs.ftruncate"), notImplementedAsync("fs.futimes"), notImplementedAsync("fs.lstatSync"), notImplementedAsync("fs.read"), notImplementedAsync("fs.readv"), notImplementedAsync("fs.realpathSync");
    wi = notImplementedAsync("fs.statSync");
    notImplementedAsync("fs.unwatchFile"), notImplementedAsync("fs.watch"), notImplementedAsync("fs.watchFile"), notImplementedAsync("fs.write"), notImplementedAsync("fs.writev"), notImplementedAsync("fs._toUnixTimestamp"), notImplementedAsync("fs.openAsBlob"), notImplemented("fs.appendFileSync"), notImplemented("fs.accessSync"), notImplemented("fs.chownSync"), notImplemented("fs.chmodSync"), notImplemented("fs.closeSync"), notImplemented("fs.copyFileSync"), notImplemented("fs.cpSync"), notImplemented("fs.fchownSync"), notImplemented("fs.fchmodSync"), notImplemented("fs.fdatasyncSync"), notImplemented("fs.fstatSync"), notImplemented("fs.fsyncSync"), notImplemented("fs.ftruncateSync"), notImplemented("fs.futimesSync"), notImplemented("fs.lchownSync"), notImplemented("fs.lchmodSync"), notImplemented("fs.linkSync"), notImplemented("fs.lutimesSync"), notImplemented("fs.mkdirSync"), notImplemented("fs.mkdtempSync"), notImplemented("fs.openSync"), notImplemented("fs.opendirSync"), notImplemented("fs.readdirSync"), notImplemented("fs.readSync"), notImplemented("fs.readvSync"), notImplemented("fs.readFileSync"), notImplemented("fs.readlinkSync"), notImplemented("fs.renameSync"), notImplemented("fs.rmSync"), notImplemented("fs.rmdirSync"), notImplemented("fs.symlinkSync"), notImplemented("fs.truncateSync"), notImplemented("fs.unlinkSync"), notImplemented("fs.utimesSync"), notImplemented("fs.writeFileSync"), notImplemented("fs.writeSync"), notImplemented("fs.writevSync"), notImplemented("fs.statfsSync");
    Si = Ci;
    Fi = /^[A-Za-z]:\//;
    basename = function(e7, r3) {
      const o5 = function(e8 = "") {
        return e8 ? e8.replace(/\\/g, "/").replace(Fi, (e9) => e9.toUpperCase()) : e8;
      }(e7).split("/").pop();
      return r3 && o5.endsWith(r3) ? o5.slice(0, -r3.length) : o5;
    };
    Bi = Object.defineProperty;
    Wi = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Bi(f$1, "name", { value: "getDefaultExportFromCjs", configurable: true });
    Us = Object.defineProperty;
    n2 = (e7, r3) => Us(e7, "name", { value: r3, configurable: true });
    fi = (e7, r3, o5) => {
      if (!r3.has(e7))
        throw TypeError("Cannot " + o5);
    };
    O = (e7, r3, o5) => (fi(e7, r3, "read from private field"), o5 ? o5.call(e7) : r3.get(e7));
    be = (e7, r3, o5) => {
      if (r3.has(e7))
        throw TypeError("Cannot add the same private member more than once");
      r3 instanceof WeakSet ? r3.add(e7) : r3.set(e7, o5);
    };
    X = (e7, r3, o5, a4) => (fi(e7, r3, "write to private field"), r3.set(e7, o5), o5);
    n2(js, "dataUriToBuffer");
    Ns = { exports: {} };
    n2(Ls, "requirePonyfill_es2018");
    if (!globalThis.ReadableStream)
      try {
        const e7 = __require("node:process"), { emitWarning: r3 } = e7;
        try {
          e7.emitWarning = () => {
          }, Object.assign(globalThis, __require("node:stream/web")), e7.emitWarning = r3;
        } catch (o5) {
          throw e7.emitWarning = r3, o5;
        }
      } catch {
        Object.assign(globalThis, Ls());
      }
    try {
      const { Blob: e7 } = __require("buffer");
      e7 && !e7.prototype.stream && (e7.prototype.stream = n2(function(e8) {
        let r3 = 0;
        const o5 = this;
        return new ReadableStream({ type: "bytes", async pull(e9) {
          const a4 = await o5.slice(r3, Math.min(o5.size, r3 + 65536)).arrayBuffer();
          r3 += a4.byteLength, e9.enqueue(new Uint8Array(a4)), r3 === o5.size && e9.close();
        } });
      }, "name"));
    } catch {
    }
    n2(qn, "toIterator");
    zs = (Fs = class {
      constructor(e7 = [], r3 = {}) {
        if (be(this, Hi, []), be(this, zi, ""), be(this, Ds, 0), be(this, As, "transparent"), "object" != typeof e7 || null === e7)
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        if ("function" != typeof e7[Symbol.iterator])
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        if ("object" != typeof r3 && "function" != typeof r3)
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        null === r3 && (r3 = {});
        const o5 = new TextEncoder();
        for (const r4 of e7) {
          let e8;
          e8 = ArrayBuffer.isView(r4) ? new Uint8Array(r4.buffer.slice(r4.byteOffset, r4.byteOffset + r4.byteLength)) : r4 instanceof ArrayBuffer ? new Uint8Array(r4.slice(0)) : r4 instanceof Fs ? r4 : o5.encode(`${r4}`), X(this, Ds, O(this, Ds) + (ArrayBuffer.isView(e8) ? e8.byteLength : e8.size)), O(this, Hi).push(e8);
        }
        X(this, As, `${void 0 === r3.endings ? "transparent" : r3.endings}`);
        const a4 = void 0 === r3.type ? "" : String(r3.type);
        X(this, zi, /^[\x20-\x7E]*$/.test(a4) ? a4 : "");
      }
      get size() {
        return O(this, Ds);
      }
      get type() {
        return O(this, zi);
      }
      async text() {
        const e7 = new TextDecoder();
        let r3 = "";
        for await (const o5 of qn(O(this, Hi), false))
          r3 += e7.decode(o5, { stream: true });
        return r3 += e7.decode(), r3;
      }
      async arrayBuffer() {
        const e7 = new Uint8Array(this.size);
        let r3 = 0;
        for await (const o5 of qn(O(this, Hi), false))
          e7.set(o5, r3), r3 += o5.length;
        return e7.buffer;
      }
      stream() {
        const e7 = qn(O(this, Hi), true);
        return new globalThis.ReadableStream({ type: "bytes", async pull(r3) {
          const o5 = await e7.next();
          o5.done ? r3.close() : r3.enqueue(o5.value);
        }, async cancel() {
          await e7.return();
        } });
      }
      slice(e7 = 0, r3 = this.size, o5 = "") {
        const { size: a4 } = this;
        let i4 = e7 < 0 ? Math.max(a4 + e7, 0) : Math.min(e7, a4), s3 = r3 < 0 ? Math.max(a4 + r3, 0) : Math.min(r3, a4);
        const d3 = Math.max(s3 - i4, 0), f2 = O(this, Hi), p2 = [];
        let h4 = 0;
        for (const e8 of f2) {
          if (h4 >= d3)
            break;
          const r4 = ArrayBuffer.isView(e8) ? e8.byteLength : e8.size;
          if (i4 && r4 <= i4)
            i4 -= r4, s3 -= r4;
          else {
            let o6;
            ArrayBuffer.isView(e8) ? (o6 = e8.subarray(i4, Math.min(r4, s3)), h4 += o6.byteLength) : (o6 = e8.slice(i4, Math.min(r4, s3)), h4 += o6.size), s3 -= r4, p2.push(o6), i4 = 0;
          }
        }
        const g2 = new Fs([], { type: String(o5).toLowerCase() });
        return X(g2, Ds, d3), X(g2, Hi, p2), g2;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](e7) {
        return e7 && "object" == typeof e7 && "function" == typeof e7.constructor && ("function" == typeof e7.stream || "function" == typeof e7.arrayBuffer) && /^(Blob|File)$/.test(e7[Symbol.toStringTag]);
      }
    }, Hi = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), n2(Fs, "Blob"), Fs);
    Object.defineProperties(zs.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
    $s = zs;
    Gs = (Os = class extends $s {
      constructor(e7, r3, o5 = {}) {
        if (arguments.length < 2)
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        super(e7, o5), be(this, xs, 0), be(this, ks, ""), null === o5 && (o5 = {});
        const a4 = void 0 === o5.lastModified ? Date.now() : Number(o5.lastModified);
        Number.isNaN(a4) || X(this, xs, a4), X(this, ks, String(r3));
      }
      get name() {
        return O(this, ks);
      }
      get lastModified() {
        return O(this, xs);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](e7) {
        return !!e7 && e7 instanceof $s && /^(File)$/.test(e7[Symbol.toStringTag]);
      }
    }, xs = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), n2(Os, "File"), Os);
    Zs = Gs;
    ({ toStringTag: Qs, iterator: Ys, hasInstance: Js } = Symbol);
    Xs = Math.random;
    tl = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    rl = n2((e7, r3, o5) => (e7 += "", /^(Blob|File)$/.test(r3 && r3[Qs]) ? [(o5 = void 0 !== o5 ? o5 + "" : "File" == r3[Qs] ? r3.name : "blob", e7), r3.name !== o5 || "blob" == r3[Qs] ? new Zs([r3], o5, r3) : r3] : [e7, r3 + ""]), "f");
    nl = n2((e7, r3) => (r3 ? e7 : e7.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1");
    cl = n2((e7, r3, o5) => {
      if (r3.length < o5)
        throw new TypeError(`Failed to execute '${e7}' on 'FormData': ${o5} arguments required, but only ${r3.length} present.`);
    }, "x");
    ul = (Bs = class {
      constructor(...e7) {
        if (be(this, Ms, []), e7.length)
          throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
      }
      get [Qs]() {
        return "FormData";
      }
      [Ys]() {
        return this.entries();
      }
      static [Js](e7) {
        return e7 && "object" == typeof e7 && "FormData" === e7[Qs] && !tl.some((r3) => "function" != typeof e7[r3]);
      }
      append(...e7) {
        cl("append", arguments, 2), O(this, Ms).push(rl(...e7));
      }
      delete(e7) {
        cl("delete", arguments, 1), e7 += "", X(this, Ms, O(this, Ms).filter(([r3]) => r3 !== e7));
      }
      get(e7) {
        cl("get", arguments, 1), e7 += "";
        for (var r3 = O(this, Ms), o5 = r3.length, a4 = 0; a4 < o5; a4++)
          if (r3[a4][0] === e7)
            return r3[a4][1];
        return null;
      }
      getAll(e7, r3) {
        return cl("getAll", arguments, 1), r3 = [], e7 += "", O(this, Ms).forEach((o5) => o5[0] === e7 && r3.push(o5[1])), r3;
      }
      has(e7) {
        return cl("has", arguments, 1), e7 += "", O(this, Ms).some((r3) => r3[0] === e7);
      }
      forEach(e7, r3) {
        for (var [o5, a4] of (cl("forEach", arguments, 1), this))
          e7.call(r3, a4, o5, this);
      }
      set(...e7) {
        cl("set", arguments, 2);
        var r3 = [], o5 = true;
        e7 = rl(...e7), O(this, Ms).forEach((a4) => {
          a4[0] === e7[0] ? o5 && (o5 = !r3.push(e7)) : r3.push(a4);
        }), o5 && r3.push(e7), X(this, Ms, r3);
      }
      *entries() {
        yield* O(this, Ms);
      }
      *keys() {
        for (var [e7] of this)
          yield e7;
      }
      *values() {
        for (var [, e7] of this)
          yield e7;
      }
    }, Ms = /* @__PURE__ */ new WeakMap(), n2(Bs, "FormData"), Bs);
    n2(Vs, "formDataToBlob");
    dl = class extends Error {
      constructor(e7, r3) {
        super(e7), Error.captureStackTrace(this, this.constructor), this.type = r3;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    n2(dl, "FetchBaseError");
    fl = dl;
    pl = class extends fl {
      constructor(e7, r3, o5) {
        super(e7, r3), o5 && (this.code = this.errno = o5.code, this.erroredSysCall = o5.syscall);
      }
    };
    n2(pl, "FetchError");
    hl = pl;
    ml = Symbol.toStringTag;
    bl = n2((e7) => "object" == typeof e7 && "function" == typeof e7.append && "function" == typeof e7.delete && "function" == typeof e7.get && "function" == typeof e7.getAll && "function" == typeof e7.has && "function" == typeof e7.set && "function" == typeof e7.sort && "URLSearchParams" === e7[ml], "isURLSearchParameters");
    Dl = n2((e7) => e7 && "object" == typeof e7 && "function" == typeof e7.arrayBuffer && "string" == typeof e7.type && "function" == typeof e7.stream && "function" == typeof e7.constructor && /^(Blob|File)$/.test(e7[ml]), "isBlob");
    El = n2((e7) => "object" == typeof e7 && ("AbortSignal" === e7[ml] || "EventTarget" === e7[ml]), "isAbortSignal");
    Al = n2((e7, r3) => {
      const o5 = new URL(r3).hostname, a4 = new URL(e7).hostname;
      return o5 === a4 || o5.endsWith(`.${a4}`);
    }, "isDomainOrSubdomain");
    Fl = n2((e7, r3) => new URL(r3).protocol === new URL(e7).protocol, "isSameProtocol");
    xl = En(Cr.pipeline);
    Ll = Symbol("Body internals");
    kl = class {
      constructor(e7, { size: r3 = 0 } = {}) {
        let o5 = null;
        null === e7 ? e7 = null : bl(e7) ? e7 = f.from(e7.toString()) : Dl(e7) || f.isBuffer(e7) || (wn.isAnyArrayBuffer(e7) ? e7 = f.from(e7) : ArrayBuffer.isView(e7) ? e7 = f.from(e7.buffer, e7.byteOffset, e7.byteLength) : e7 instanceof Cr || (e7 instanceof ul ? o5 = (e7 = Vs(e7)).type.split("=")[1] : e7 = f.from(String(e7))));
        let a4 = e7;
        f.isBuffer(e7) ? a4 = Cr.Readable.from(e7) : Dl(e7) && (a4 = Cr.Readable.from(e7.stream())), this[Ll] = { body: e7, stream: a4, boundary: o5, disturbed: false, error: null }, this.size = r3, e7 instanceof Cr && e7.on("error", (e8) => {
          const r4 = e8 instanceof fl ? e8 : new hl(`Invalid response body while trying to fetch ${this.url}: ${e8.message}`, "system", e8);
          this[Ll].error = r4;
        });
      }
      get body() {
        return this[Ll].stream;
      }
      get bodyUsed() {
        return this[Ll].disturbed;
      }
      async arrayBuffer() {
        const { buffer: e7, byteOffset: r3, byteLength: o5 } = await In(this);
        return e7.slice(r3, r3 + o5);
      }
      async formData() {
        const e7 = this.headers.get("content-type");
        if (e7.startsWith("application/x-www-form-urlencoded")) {
          const e8 = new ul(), r4 = new URLSearchParams(await this.text());
          for (const [o5, a4] of r4)
            e8.append(o5, a4);
          return e8;
        }
        const { toFormData: r3 } = await Promise.resolve().then(() => (init_multipart_parser_BaDqkqCr(), multipart_parser_BaDqkqCr_exports));
        return r3(this.body, e7);
      }
      async blob() {
        const e7 = this.headers && this.headers.get("content-type") || this[Ll].body && this[Ll].body.type || "", r3 = await this.arrayBuffer();
        return new $s([r3], { type: e7 });
      }
      async json() {
        const e7 = await this.text();
        return JSON.parse(e7);
      }
      async text() {
        const e7 = await In(this);
        return new TextDecoder().decode(e7);
      }
      buffer() {
        return In(this);
      }
    };
    n2(kl, "Body");
    Ol = kl;
    Ol.prototype.buffer = Ol.prototype.buffer, Object.defineProperties(Ol.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: () => {
    } } }), n2(In, "consumeBody");
    Ml = n2((e7, r3) => {
      let o5, a4, { body: i4 } = e7[Ll];
      if (e7.bodyUsed)
        throw new Error("cannot clone body after it is used");
      return i4 instanceof Cr && "function" != typeof i4.getBoundary && (o5 = new qt({ highWaterMark: r3 }), a4 = new qt({ highWaterMark: r3 }), i4.pipe(o5), i4.pipe(a4), e7[Ll].stream = o5, i4 = a4), i4;
    }, "clone");
    Ks = (e7) => e7.getBoundary();
    Bl = n2((e7, r3) => null === e7 ? null : "string" == typeof e7 ? "text/plain;charset=UTF-8" : bl(e7) ? "application/x-www-form-urlencoded;charset=UTF-8" : Dl(e7) ? e7.type || null : f.isBuffer(e7) || wn.isAnyArrayBuffer(e7) || ArrayBuffer.isView(e7) ? null : e7 instanceof ul ? `multipart/form-data; boundary=${r3[Ll].boundary}` : e7 && "function" == typeof e7.getBoundary ? `multipart/form-data;boundary=${Ks(e7)}` : e7 instanceof Cr ? null : "text/plain;charset=UTF-8", "extractContentType");
    Il = n2((e7) => {
      const { body: r3 } = e7[Ll];
      return null === r3 ? 0 : Dl(r3) ? r3.size : f.isBuffer(r3) ? r3.length : r3 && "function" == typeof r3.getLengthSync && r3.hasKnownLength && r3.hasKnownLength() ? r3.getLengthSync() : null;
    }, "getTotalBytes");
    jl = n2(async (e7, { body: r3 }) => {
      null === r3 ? e7.end() : await xl(r3, e7);
    }, "writeToStream");
    Wl = "function" == typeof Et.validateHeaderName ? Et.validateHeaderName : (e7) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e7)) {
        const r3 = new TypeError(`Header name must be a valid HTTP token [${e7}]`);
        throw Object.defineProperty(r3, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), r3;
      }
    };
    ql = "function" == typeof Et.validateHeaderValue ? Et.validateHeaderValue : (e7, r3) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(r3)) {
        const r4 = new TypeError(`Invalid character in header content ["${e7}"]`);
        throw Object.defineProperty(r4, "code", { value: "ERR_INVALID_CHAR" }), r4;
      }
    };
    Ul = class Pr2 extends URLSearchParams {
      constructor(e7) {
        let r3 = [];
        if (e7 instanceof Pr2) {
          const o5 = e7.raw();
          for (const [e8, a4] of Object.entries(o5))
            r3.push(...a4.map((r4) => [e8, r4]));
        } else if (null != e7) {
          if ("object" != typeof e7 || wn.isBoxedPrimitive(e7))
            throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
          {
            const o5 = e7[Symbol.iterator];
            if (null == o5)
              r3.push(...Object.entries(e7));
            else {
              if ("function" != typeof o5)
                throw new TypeError("Header pairs must be iterable");
              r3 = [...e7].map((e8) => {
                if ("object" != typeof e8 || wn.isBoxedPrimitive(e8))
                  throw new TypeError("Each header pair must be an iterable object");
                return [...e8];
              }).map((e8) => {
                if (2 !== e8.length)
                  throw new TypeError("Each header pair must be a name/value tuple");
                return [...e8];
              });
            }
          }
        }
        return r3 = r3.length > 0 ? r3.map(([e8, r4]) => (Wl(e8), ql(e8, String(r4)), [String(e8).toLowerCase(), String(r4)])) : void 0, super(r3), new Proxy(this, { get(e8, r4, o5) {
          switch (r4) {
            case "append":
            case "set":
              return (o6, a4) => (Wl(o6), ql(o6, String(a4)), URLSearchParams.prototype[r4].call(e8, String(o6).toLowerCase(), String(a4)));
            case "delete":
            case "has":
            case "getAll":
              return (o6) => (Wl(o6), URLSearchParams.prototype[r4].call(e8, String(o6).toLowerCase()));
            case "keys":
              return () => (e8.sort(), new Set(URLSearchParams.prototype.keys.call(e8)).keys());
            default:
              return Reflect.get(e8, r4, o5);
          }
        } });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(e7) {
        const r3 = this.getAll(e7);
        if (0 === r3.length)
          return null;
        let o5 = r3.join(", ");
        return /^content-encoding$/i.test(e7) && (o5 = o5.toLowerCase()), o5;
      }
      forEach(e7, r3 = void 0) {
        for (const o5 of this.keys())
          Reflect.apply(e7, r3, [this.get(o5), o5, this]);
      }
      *values() {
        for (const e7 of this.keys())
          yield this.get(e7);
      }
      *entries() {
        for (const e7 of this.keys())
          yield [e7, this.get(e7)];
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((e7, r3) => (e7[r3] = this.getAll(r3), e7), {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((e7, r3) => {
          const o5 = this.getAll(r3);
          return e7[r3] = "host" === r3 ? o5[0] : o5.length > 1 ? o5 : o5[0], e7;
        }, {});
      }
    };
    n2(Ul, "Headers");
    Hl = Ul;
    Object.defineProperties(Hl.prototype, ["get", "entries", "forEach", "values"].reduce((e7, r3) => (e7[r3] = { enumerable: true }, e7), {})), n2(el, "fromRawHeaders");
    Nl = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    Vl = n2((e7) => Nl.has(e7), "isRedirect");
    zl = Symbol("Response internals");
    $l = class xe2 extends Ol {
      constructor(e7 = null, r3 = {}) {
        super(e7, r3);
        const o5 = null != r3.status ? r3.status : 200, a4 = new Hl(r3.headers);
        if (null !== e7 && !a4.has("Content-Type")) {
          const r4 = Bl(e7, this);
          r4 && a4.append("Content-Type", r4);
        }
        this[zl] = { type: "default", url: r3.url, status: o5, statusText: r3.statusText || "", headers: a4, counter: r3.counter, highWaterMark: r3.highWaterMark };
      }
      get type() {
        return this[zl].type;
      }
      get url() {
        return this[zl].url || "";
      }
      get status() {
        return this[zl].status;
      }
      get ok() {
        return this[zl].status >= 200 && this[zl].status < 300;
      }
      get redirected() {
        return this[zl].counter > 0;
      }
      get statusText() {
        return this[zl].statusText;
      }
      get headers() {
        return this[zl].headers;
      }
      get highWaterMark() {
        return this[zl].highWaterMark;
      }
      clone() {
        return new xe2(Ml(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
      }
      static redirect(e7, r3 = 302) {
        if (!Vl(r3))
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        return new xe2(null, { headers: { location: new URL(e7).toString() }, status: r3 });
      }
      static error() {
        const e7 = new xe2(null, { status: 0, statusText: "" });
        return e7[zl].type = "error", e7;
      }
      static json(e7 = void 0, r3 = {}) {
        const o5 = JSON.stringify(e7);
        if (void 0 === o5)
          throw new TypeError("data is not JSON serializable");
        const a4 = new Hl(r3 && r3.headers);
        return a4.has("content-type") || a4.set("content-type", "application/json"), new xe2(o5, { ...r3, headers: a4 });
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    n2($l, "Response");
    Gl = $l;
    Object.defineProperties(Gl.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
    Zl = n2((e7) => {
      if (e7.search)
        return e7.search;
      const r3 = e7.href.length - 1, o5 = e7.hash || ("#" === e7.href[r3] ? "#" : "");
      return "?" === e7.href[r3 - o5.length] ? "?" : "";
    }, "getSearch");
    n2(_i, "stripURLForUseAsAReferrer");
    Ql = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]);
    n2(ol, "validateReferrerPolicy"), n2(il, "isOriginPotentiallyTrustworthy"), n2(ct, "isUrlPotentiallyTrustworthy"), n2(al, "determineRequestsReferrer"), n2(sl, "parseReferrerPolicyFromHeader");
    Yl = Symbol("Request internals");
    Kl = n2((e7) => "object" == typeof e7 && "object" == typeof e7[Yl], "isRequest");
    ll = () => {
    };
    Jl = class vr2 extends Ol {
      constructor(e7, r3 = {}) {
        let o5;
        if (Kl(e7) ? o5 = new URL(e7.url) : (o5 = new URL(e7), e7 = {}), "" !== o5.username || "" !== o5.password)
          throw new TypeError(`${o5} is an url with embedded credentials.`);
        let a4 = r3.method || e7.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(a4) && (a4 = a4.toUpperCase()), !Kl(r3) && "data" in r3 && ll(), (null != r3.body || Kl(e7) && null !== e7.body) && ("GET" === a4 || "HEAD" === a4))
          throw new TypeError("Request with GET/HEAD method cannot have body");
        const i4 = r3.body ? r3.body : Kl(e7) && null !== e7.body ? Ml(e7) : null;
        super(i4, { size: r3.size || e7.size || 0 });
        const s3 = new Hl(r3.headers || e7.headers || {});
        if (null !== i4 && !s3.has("Content-Type")) {
          const e8 = Bl(i4, this);
          e8 && s3.set("Content-Type", e8);
        }
        let d3 = Kl(e7) ? e7.signal : null;
        if ("signal" in r3 && (d3 = r3.signal), null != d3 && !El(d3))
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        let f2 = null == r3.referrer ? e7.referrer : r3.referrer;
        if ("" === f2)
          f2 = "no-referrer";
        else if (f2) {
          const e8 = new URL(f2);
          f2 = /^about:(\/\/)?client$/.test(e8) ? "client" : e8;
        } else
          f2 = void 0;
        this[Yl] = { method: a4, redirect: r3.redirect || e7.redirect || "follow", headers: s3, parsedURL: o5, signal: d3, referrer: f2 }, this.follow = void 0 === r3.follow ? void 0 === e7.follow ? 20 : e7.follow : r3.follow, this.compress = void 0 === r3.compress ? void 0 === e7.compress || e7.compress : r3.compress, this.counter = r3.counter || e7.counter || 0, this.agent = r3.agent || e7.agent, this.highWaterMark = r3.highWaterMark || e7.highWaterMark || 16384, this.insecureHTTPParser = r3.insecureHTTPParser || e7.insecureHTTPParser || false, this.referrerPolicy = r3.referrerPolicy || e7.referrerPolicy || "";
      }
      get method() {
        return this[Yl].method;
      }
      get url() {
        return function(e7, r3) {
          let o5;
          if ("string" == typeof e7)
            o5 = new An(e7);
          else {
            if (!(e7 instanceof An))
              throw new TypeError("format urlObject is not supported");
            o5 = e7;
          }
          return r3 && (false === r3.auth && (o5.username = "", o5.password = ""), false === r3.fragment && (o5.hash = ""), false === r3.search && (o5.search = "")), o5.toString();
        }(this[Yl].parsedURL);
      }
      get headers() {
        return this[Yl].headers;
      }
      get redirect() {
        return this[Yl].redirect;
      }
      get signal() {
        return this[Yl].signal;
      }
      get referrer() {
        return "no-referrer" === this[Yl].referrer ? "" : "client" === this[Yl].referrer ? "about:client" : this[Yl].referrer ? this[Yl].referrer.toString() : void 0;
      }
      get referrerPolicy() {
        return this[Yl].referrerPolicy;
      }
      set referrerPolicy(e7) {
        this[Yl].referrerPolicy = ol(e7);
      }
      clone() {
        return new vr2(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    n2(Jl, "Request");
    Xl = Jl;
    Object.defineProperties(Xl.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
    ec = n2((e7) => {
      const { parsedURL: r3 } = e7[Yl], o5 = new Hl(e7[Yl].headers);
      o5.has("Accept") || o5.set("Accept", "*/*");
      let a4 = null;
      if (null === e7.body && /^(post|put)$/i.test(e7.method) && (a4 = "0"), null !== e7.body) {
        const r4 = Il(e7);
        "number" == typeof r4 && !Number.isNaN(r4) && (a4 = String(r4));
      }
      a4 && o5.set("Content-Length", a4), "" === e7.referrerPolicy && (e7.referrerPolicy = "strict-origin-when-cross-origin"), e7.referrer && "no-referrer" !== e7.referrer ? e7[Yl].referrer = al(e7) : e7[Yl].referrer = "no-referrer", e7[Yl].referrer instanceof URL && o5.set("Referer", e7.referrer), o5.has("User-Agent") || o5.set("User-Agent", "node-fetch"), e7.compress && !o5.has("Accept-Encoding") && o5.set("Accept-Encoding", "gzip, deflate, br");
      let { agent: i4 } = e7;
      "function" == typeof i4 && (i4 = i4(r3));
      const s3 = Zl(r3);
      return { parsedURL: r3, options: { path: r3.pathname + s3, method: e7.method, headers: o5[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: e7.insecureHTTPParser, agent: i4 } };
    }, "getNodeRequestOptions");
    tc = class extends fl {
      constructor(e7, r3 = "aborted") {
        super(e7, r3);
      }
    };
    n2(tc, "AbortError");
    rc = tc;
    if (!globalThis.DOMException)
      try {
        const { MessageChannel: e7 } = __require("worker_threads"), r3 = new e7().port1, o5 = new ArrayBuffer();
        r3.postMessage(o5, [o5, o5]);
      } catch (e7) {
        "DOMException" === e7.constructor.name && (globalThis.DOMException = e7.constructor);
      }
    oc = f$1(globalThis.DOMException);
    ({ stat: nc } = Si);
    n2((e7, r3) => ac(wi(e7), e7, r3), "blobFromSync"), n2((e7, r3) => nc(e7).then((o5) => ac(o5, e7, r3)), "blobFrom"), n2((e7, r3) => nc(e7).then((o5) => ic(o5, e7, r3)), "fileFrom"), n2((e7, r3) => ic(wi(e7), e7, r3), "fileFromSync");
    ac = n2((e7, r3, o5 = "") => new $s([new lc({ path: r3, size: e7.size, lastModified: e7.mtimeMs, start: 0 })], { type: o5 }), "fromBlob");
    ic = n2((e7, r3, o5 = "") => new Zs([new lc({ path: r3, size: e7.size, lastModified: e7.mtimeMs, start: 0 })], basename(r3), { type: o5, lastModified: e7.mtimeMs }), "fromFile");
    sc = class Er2 {
      constructor(e7) {
        be(this, Is, void 0), be(this, Ws, void 0), X(this, Is, e7.path), X(this, Ws, e7.start), this.size = e7.size, this.lastModified = e7.lastModified;
      }
      slice(e7, r3) {
        return new Er2({ path: O(this, Is), lastModified: this.lastModified, size: r3 - e7, start: O(this, Ws) + e7 });
      }
      async *stream() {
        const { mtimeMs: e7 } = await nc(O(this, Is));
        if (e7 > this.lastModified)
          throw new oc("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        yield* Di(O(this, Is), { start: O(this, Ws), end: O(this, Ws) + this.size - 1 });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
    Is = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), n2(sc, "BlobDataItem");
    lc = sc;
    cc = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
    n2(Ti, "fetch$1"), n2(yl, "fixResponseChunkedTransferBadEnding");
    uc = /* @__PURE__ */ new WeakMap();
    dc = /* @__PURE__ */ new WeakMap();
    n2(W, "pd"), n2(Pi, "setCancelFlag"), n2(ht, "Event"), ht.prototype = { get type() {
      return W(this).event.type;
    }, get target() {
      return W(this).eventTarget;
    }, get currentTarget() {
      return W(this).currentTarget;
    }, composedPath() {
      const e7 = W(this).currentTarget;
      return null == e7 ? [] : [e7];
    }, get NONE() {
      return 0;
    }, get CAPTURING_PHASE() {
      return 1;
    }, get AT_TARGET() {
      return 2;
    }, get BUBBLING_PHASE() {
      return 3;
    }, get eventPhase() {
      return W(this).eventPhase;
    }, stopPropagation() {
      const e7 = W(this);
      e7.stopped = true, "function" == typeof e7.event.stopPropagation && e7.event.stopPropagation();
    }, stopImmediatePropagation() {
      const e7 = W(this);
      e7.stopped = true, e7.immediateStopped = true, "function" == typeof e7.event.stopImmediatePropagation && e7.event.stopImmediatePropagation();
    }, get bubbles() {
      return !!W(this).event.bubbles;
    }, get cancelable() {
      return !!W(this).event.cancelable;
    }, preventDefault() {
      Pi(W(this));
    }, get defaultPrevented() {
      return W(this).canceled;
    }, get composed() {
      return !!W(this).event.composed;
    }, get timeStamp() {
      return W(this).timeStamp;
    }, get srcElement() {
      return W(this).eventTarget;
    }, get cancelBubble() {
      return W(this).stopped;
    }, set cancelBubble(e7) {
      if (!e7)
        return;
      const r3 = W(this);
      r3.stopped = true, "boolean" == typeof r3.event.cancelBubble && (r3.event.cancelBubble = true);
    }, get returnValue() {
      return !W(this).canceled;
    }, set returnValue(e7) {
      e7 || Pi(W(this));
    }, initEvent() {
    } }, Object.defineProperty(ht.prototype, "constructor", { value: ht, configurable: true, writable: true }), n2(vi, "defineRedirectDescriptor"), n2(gl, "defineCallDescriptor"), n2(_l, "defineWrapper"), n2(Ei, "getWrapper"), n2(Sl, "wrapEvent"), n2(wl, "isStopped"), n2(Rl, "setEventPhase"), n2(Tl, "setCurrentTarget"), n2(Ai, "setPassiveListener");
    fc = /* @__PURE__ */ new WeakMap();
    pc = 3;
    n2(Rr, "isObject"), n2(Bt, "getListeners"), n2(Cl, "defineEventAttributeDescriptor"), n2(qi, "defineEventAttribute"), n2(Oi, "defineCustomEventTarget"), n2(Pe, "EventTarget"), Pe.prototype = { addEventListener(e7, r3, o5) {
      if (null == r3)
        return;
      if ("function" != typeof r3 && !Rr(r3))
        throw new TypeError("'listener' should be a function or an object.");
      const a4 = Bt(this), i4 = Rr(o5), s3 = (i4 ? o5.capture : o5) ? 1 : 2, d3 = { listener: r3, listenerType: s3, passive: i4 && !!o5.passive, once: i4 && !!o5.once, next: null };
      let f2 = a4.get(e7);
      if (void 0 === f2)
        return void a4.set(e7, d3);
      let p2 = null;
      for (; null != f2; ) {
        if (f2.listener === r3 && f2.listenerType === s3)
          return;
        p2 = f2, f2 = f2.next;
      }
      p2.next = d3;
    }, removeEventListener(e7, r3, o5) {
      if (null == r3)
        return;
      const a4 = Bt(this), i4 = (Rr(o5) ? o5.capture : o5) ? 1 : 2;
      let s3 = null, d3 = a4.get(e7);
      for (; null != d3; ) {
        if (d3.listener === r3 && d3.listenerType === i4)
          return void (null !== s3 ? s3.next = d3.next : null !== d3.next ? a4.set(e7, d3.next) : a4.delete(e7));
        s3 = d3, d3 = d3.next;
      }
    }, dispatchEvent(e7) {
      if (null == e7 || "string" != typeof e7.type)
        throw new TypeError('"event.type" should be a string.');
      const r3 = Bt(this), o5 = e7.type;
      let a4 = r3.get(o5);
      if (null == a4)
        return true;
      const i4 = Sl(this, e7);
      let s3 = null;
      for (; null != a4; ) {
        if (a4.once ? null !== s3 ? s3.next = a4.next : null !== a4.next ? r3.set(o5, a4.next) : r3.delete(o5) : s3 = a4, Ai(i4, a4.passive ? a4.listener : null), "function" == typeof a4.listener)
          try {
            a4.listener.call(this, i4);
          } catch (e8) {
            typeof console < "u" && "function" == typeof console.error && console.error(e8);
          }
        else
          a4.listenerType !== pc && "function" == typeof a4.listener.handleEvent && a4.listener.handleEvent(i4);
        if (wl(i4))
          break;
        a4 = a4.next;
      }
      return Ai(i4, null), Rl(i4, 0), Tl(i4, null), !i4.defaultPrevented;
    } }, Object.defineProperty(Pe.prototype, "constructor", { value: Pe, configurable: true, writable: true });
    hc = class extends Pe {
      constructor() {
        throw super(), new TypeError("AbortSignal cannot be constructed directly");
      }
      get aborted() {
        const e7 = yc.get(this);
        if ("boolean" != typeof e7)
          throw new TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + (null === this ? "null" : typeof this));
        return e7;
      }
    };
    n2(hc, "AbortSignal");
    mc = hc;
    qi(mc.prototype, "abort"), n2(Pl, "createAbortSignal"), n2(vl, "abortSignal");
    yc = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(mc.prototype, { aborted: { enumerable: true } }), "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag && Object.defineProperty(mc.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
    bc = (n2(qs = class {
      constructor() {
        gc.set(this, Pl());
      }
      get signal() {
        return Ii(this);
      }
      abort() {
        vl(Ii(this));
      }
    }, "AbortController"), qs);
    gc = /* @__PURE__ */ new WeakMap();
    n2(Ii, "getSignal"), Object.defineProperties(bc.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag && Object.defineProperty(bc.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
    Cc = Object.defineProperty;
    _c = n2((e7, r3) => Cc(e7, "name", { value: r3, configurable: true }), "e");
    Dc = Ti;
    ji(), n2(ji, "s"), _c(ji, "checkNodeEnvironment");
    vc = Object.defineProperty;
    t2 = (e7, r3) => vc(e7, "name", { value: r3, configurable: true });
    wc = Object.defineProperty;
    Sc = t2((e7, r3) => wc(e7, "name", { value: r3, configurable: true }), "e");
    Ec = !!(null == (ki = null == (Ri = globalThis.process) ? void 0 : Ri.env) ? void 0 : ki.FORCE_NODE_FETCH);
    t2(l2, "p"), Sc(l2, "_getFetch");
    Ac = l2();
    Fc = !Ec && globalThis.Headers || Hl;
    xc = !Ec && globalThis.AbortController || bc;
    Rc = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    Tc = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    Lc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    kc = /#/g;
    Pc = /&/g;
    Oc = /\//g;
    Mc = /=/g;
    Bc = /\+/g;
    Ic = /%5e/gi;
    jc = /%60/gi;
    Wc = /%7c/gi;
    qc = /%20/gi;
    Uc = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Hc = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Nc = /^([/\\]\s*){2,}[^/\\]/;
    Vc = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    zc = /\/$|\/\?|\/#/;
    $c = /^\.?\//;
    Gc = Symbol.for("ufo:protocolRelative");
    FetchError = class extends Error {
      constructor(e7, r3) {
        super(e7, r3), this.name = "FetchError", (null == r3 ? void 0 : r3.cause) && !this.cause && (this.cause = r3.cause);
      }
    };
    Zc = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    Qc = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    Yc = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    Kc = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    Jc = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Xc = function createFetch(e7 = {}) {
      const { fetch: r3 = globalThis.fetch, Headers: o5 = globalThis.Headers, AbortController: a4 = globalThis.AbortController } = e7;
      async function onError(e8) {
        const r4 = e8.error && "AbortError" === e8.error.name && !e8.options.timeout || false;
        if (false !== e8.options.retry && !r4) {
          let r5;
          r5 = "number" == typeof e8.options.retry ? e8.options.retry : isPayloadMethod(e8.options.method) ? 0 : 1;
          const o7 = e8.response && e8.response.status || 500;
          if (r5 > 0 && (Array.isArray(e8.options.retryStatusCodes) ? e8.options.retryStatusCodes.includes(o7) : Kc.has(o7))) {
            const o8 = e8.options.retryDelay || 0;
            return o8 > 0 && await new Promise((e9) => setTimeout(e9, o8)), $fetchRaw(e8.request, { ...e8.options, retry: r5 - 1 });
          }
        }
        const o6 = function(e9) {
          var r5, o7, a5, i4, s3;
          const d3 = (null == (r5 = e9.error) ? void 0 : r5.message) || (null == (o7 = e9.error) ? void 0 : o7.toString()) || "", f2 = (null == (a5 = e9.request) ? void 0 : a5.method) || (null == (i4 = e9.options) ? void 0 : i4.method) || "GET", p2 = (null == (s3 = e9.request) ? void 0 : s3.url) || String(e9.request) || "/", h4 = `[${f2}] ${JSON.stringify(p2)}`, g2 = e9.response ? `${e9.response.status} ${e9.response.statusText}` : "<no response>", D3 = new FetchError(`${h4}: ${g2}${d3 ? ` ${d3}` : ""}`, e9.error ? { cause: e9.error } : void 0);
          for (const r6 of ["request", "options", "response"])
            Object.defineProperty(D3, r6, { get: () => e9[r6] });
          for (const [r6, o8] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
            Object.defineProperty(D3, r6, { get: () => e9.response && e9.response[o8] });
          return D3;
        }(e8);
        throw Error.captureStackTrace && Error.captureStackTrace(o6, $fetchRaw), o6;
      }
      const $fetchRaw = async function(i4, s3 = {}) {
        var d3;
        const f2 = { request: i4, options: mergeFetchOptions(s3, e7.defaults, o5), response: void 0, error: void 0 };
        let p2;
        if (f2.options.method = null == (d3 = f2.options.method) ? void 0 : d3.toUpperCase(), f2.options.onRequest && await f2.options.onRequest(f2), "string" == typeof f2.request && (f2.options.baseURL && (f2.request = function(e8, r4) {
          if (!(o6 = r4) || "/" === o6 || hasProtocol(e8))
            return e8;
          var o6;
          const a5 = withoutTrailingSlash(r4);
          return e8.startsWith(a5) ? e8 : joinURL(a5, e8);
        }(f2.request, f2.options.baseURL)), (f2.options.query || f2.options.params) && (f2.request = withQuery(f2.request, { ...f2.options.params, ...f2.options.query }))), f2.options.body && isPayloadMethod(f2.options.method) && (!function(e8) {
          if (void 0 === e8)
            return false;
          const r4 = typeof e8;
          return "string" === r4 || "number" === r4 || "boolean" === r4 || null === r4 || "object" === r4 && (!!Array.isArray(e8) || !e8.buffer && (e8.constructor && "Object" === e8.constructor.name || "function" == typeof e8.toJSON));
        }(f2.options.body) ? ("pipeTo" in f2.options.body && "function" == typeof f2.options.body.pipeTo || "function" == typeof f2.options.body.pipe) && ("duplex" in f2.options || (f2.options.duplex = "half")) : (f2.options.body = "string" == typeof f2.options.body ? f2.options.body : JSON.stringify(f2.options.body), f2.options.headers = new o5(f2.options.headers || {}), f2.options.headers.has("content-type") || f2.options.headers.set("content-type", "application/json"), f2.options.headers.has("accept") || f2.options.headers.set("accept", "application/json"))), !f2.options.signal && f2.options.timeout) {
          const e8 = new a4();
          p2 = setTimeout(() => e8.abort(), f2.options.timeout), f2.options.signal = e8.signal;
        }
        try {
          f2.response = await r3(f2.request, f2.options);
        } catch (e8) {
          return f2.error = e8, f2.options.onRequestError && await f2.options.onRequestError(f2), await onError(f2);
        } finally {
          p2 && clearTimeout(p2);
        }
        if (f2.response.body && !Jc.has(f2.response.status) && "HEAD" !== f2.options.method) {
          const e8 = (f2.options.parseResponse ? "json" : f2.options.responseType) || function(e9 = "") {
            if (!e9)
              return "json";
            const r4 = e9.split(";").shift() || "";
            return Yc.test(r4) ? "json" : Qc.has(r4) || r4.startsWith("text/") ? "text" : "blob";
          }(f2.response.headers.get("content-type") || "");
          switch (e8) {
            case "json": {
              const e9 = await f2.response.text(), r4 = f2.options.parseResponse || destr;
              f2.response._data = r4(e9);
              break;
            }
            case "stream":
              f2.response._data = f2.response.body;
              break;
            default:
              f2.response._data = await f2.response[e8]();
          }
        }
        return f2.options.onResponse && await f2.options.onResponse(f2), !f2.options.ignoreResponseError && f2.response.status >= 400 && f2.response.status < 600 ? (f2.options.onResponseError && await f2.options.onResponseError(f2), await onError(f2)) : f2.response;
      }, $fetch2 = async function(e8, r4) {
        return (await $fetchRaw(e8, r4))._data;
      };
      return $fetch2.raw = $fetchRaw, $fetch2.native = (...e8) => r3(...e8), $fetch2.create = (r4 = {}) => createFetch({ ...e7, defaults: { ...e7.defaults, ...r4 } }), $fetch2;
    }({ fetch: globalThis.fetch || function() {
      if (!JSON.parse(B.env.FETCH_KEEP_ALIVE || "false"))
        return Ac;
      const e7 = { keepAlive: true }, r3 = new Et.Agent(e7), o5 = new kt.Agent(e7), a4 = { agent: (e8) => "http:" === e8.protocol ? r3 : o5 };
      return function(e8, r4) {
        return Ac(e8, { ...a4, ...r4 });
      };
    }(), Headers: globalThis.Headers || Fc, AbortController: globalThis.AbortController || xc });
    eu = Xc;
    globalThis.$fetch || (globalThis.$fetch = eu.create({ baseURL: baseURL() }));
    tu = getContext("nuxt-app", { asyncContext: false });
    ru = "__nuxt_plugin";
    ou = Symbol("route");
    useRouter = () => {
      var e7;
      return null == (e7 = useNuxtApp()) ? void 0 : e7.$router;
    };
    navigateTo = (e7, r3) => {
      e7 || (e7 = "/");
      const o5 = "string" == typeof e7 ? e7 : withQuery(e7.path || "/", e7.query || {}) + (e7.hash || ""), a4 = (null == r3 ? void 0 : r3.external) || hasProtocol(o5, { acceptRelative: true });
      if (a4) {
        if (!(null == r3 ? void 0 : r3.external))
          throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const e8 = parseURL(o5).protocol;
        if (e8 && function(e9) {
          return !!e9 && Vc.test(e9);
        }(e8))
          throw new Error(`Cannot navigate to a URL with '${e8}' protocol.`);
      }
      const i4 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware)
            return true;
        } catch {
          return false;
        }
        return false;
      })(), s3 = useRouter(), d3 = useNuxtApp();
      if (d3.ssrContext) {
        const f2 = "string" == typeof e7 || a4 ? o5 : s3.resolve(e7).fullPath || "/", h4 = a4 ? o5 : joinURL(useRuntimeConfig().app.baseURL, f2), redirect = async function(e8) {
          await d3.callHook("app:redirected");
          const o6 = h4.replace(/"/g, "%22");
          return d3.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == r3 ? void 0 : r3.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${o6}"></head></html>`, headers: { location: h4 } }, e8;
        };
        return !a4 && i4 ? (s3.afterEach((e8) => e8.fullPath === f2 ? redirect(false) : void 0), e7) : redirect(!i4 && void 0);
      }
      return a4 ? (d3._scope.stop(), (null == r3 ? void 0 : r3.replace) ? (void 0).replace(o5) : (void 0).href = o5, i4 ? !!d3.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == r3 ? void 0 : r3.replace) ? s3.replace(e7) : s3.push(e7);
    };
    nu = "__nuxt_error";
    useError = () => toRef(useNuxtApp().payload, "error");
    showError = (e7) => {
      const r3 = createError2(e7);
      try {
        const e8 = useError();
        0, e8.value = e8.value || r3;
      } catch {
        throw r3;
      }
      return r3;
    };
    createError2 = (e7) => {
      const r3 = createError(e7);
      return Object.defineProperty(r3, nu, { value: true, configurable: false, writable: false }), r3;
    };
    au = "usehead";
    iu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    su = "__unhead_injection_handler__";
    lu = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e7) {
      const r3 = e7.ssrContext.head;
      var o5;
      o5 = () => useNuxtApp().vueApp._context.provides.usehead, iu[su] = o5, e7.vueApp.use(r3);
    } });
    defu = (...e7) => e7.reduce((e8, r3) => _defu(e8, r3, ""), {});
    cu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    uu = "__unctx__";
    cu[uu] || (cu[uu] = function(e7 = {}) {
      const r3 = {};
      return { get: (o5, a4 = {}) => (r3[o5] || (r3[o5] = function(e8 = {}) {
        let r4, o6 = false;
        const checkConflict = (e9) => {
          if (r4 && r4 !== e9)
            throw new Error("Context conflict");
        };
        let a5;
        if (e8.asyncContext) {
          const r5 = e8.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          r5 ? a5 = new r5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = () => {
          if (a5 && void 0 === r4) {
            const e9 = a5.getStore();
            if (void 0 !== e9)
              return e9;
          }
          return r4;
        };
        return { use: () => {
          const e9 = _getCurrentInstance();
          if (void 0 === e9)
            throw new Error("Context is not available");
          return e9;
        }, tryUse: () => _getCurrentInstance(), set: (e9, a6) => {
          a6 || checkConflict(e9), r4 = e9, o6 = true;
        }, unset: () => {
          r4 = void 0, o6 = false;
        }, call: (e9, i4) => {
          checkConflict(e9), r4 = e9;
          try {
            return a5 ? a5.run(e9, i4) : i4();
          } finally {
            o6 || (r4 = void 0);
          }
        }, async callAsync(e9, i4) {
          r4 = e9;
          const onRestore = () => {
            r4 = e9;
          }, onLeave = () => r4 === e9 ? onRestore : void 0;
          fu.add(onLeave);
          try {
            const s3 = a5 ? a5.run(e9, i4) : i4();
            return o6 || (r4 = void 0), await s3;
          } finally {
            fu.delete(onLeave);
          }
        } };
      }({ ...e7, ...a4 })), r3[o5], r3[o5]) };
    }());
    du = "__unctx_async_handlers__";
    fu = cu[du] || (cu[du] = /* @__PURE__ */ new Set());
    pu = [defineNuxtRouteMiddleware(async (e7) => {
    })];
    hu = defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e7) {
      const r3 = e7.ssrContext.url, o5 = [], a4 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = (e8, r4) => (a4[e8].push(r4), () => a4[e8].splice(a4[e8].indexOf(r4), 1));
      useRuntimeConfig().app.baseURL;
      const i4 = reactive(getRouteFromPath(r3));
      async function handleNavigation(e8, r4) {
        try {
          const r5 = getRouteFromPath(e8);
          for (const e9 of a4["navigate:before"]) {
            const o6 = await e9(r5, i4);
            if (false === o6 || o6 instanceof Error)
              return;
            if ("string" == typeof o6 && o6.length)
              return handleNavigation(o6, true);
          }
          for (const e9 of a4["resolve:before"])
            await e9(r5, i4);
          Object.assign(i4, r5);
          for (const e9 of a4["navigate:after"])
            await e9(r5, i4);
        } catch (e9) {
          for (const r5 of a4.error)
            await r5(e9);
        }
      }
      const s3 = { currentRoute: computed(() => i4), isReady: () => Promise.resolve(), options: {}, install: () => Promise.resolve(), push: (e8) => handleNavigation(e8), replace: (e8) => handleNavigation(e8), back: () => (void 0).history.go(-1), go: (e8) => (void 0).history.go(e8), forward: () => (void 0).history.go(1), beforeResolve: (e8) => registerHook("resolve:before", e8), beforeEach: (e8) => registerHook("navigate:before", e8), afterEach: (e8) => registerHook("navigate:after", e8), onError: (e8) => registerHook("error", e8), resolve: getRouteFromPath, addRoute: (e8, r4) => {
        o5.push(r4);
      }, getRoutes: () => o5, hasRoute: (e8) => o5.some((r4) => r4.name === e8), removeRoute: (e8) => {
        const r4 = o5.findIndex((r5) => r5.name === e8);
        -1 !== r4 && o5.splice(r4, 1);
      } };
      e7.vueApp.component("RouterLink", defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: (e8, { slots: r4 }) => {
        const navigate = () => handleNavigation(e8.to, e8.replace);
        return () => {
          var o6;
          const a5 = s3.resolve(e8.to);
          return e8.custom ? null == (o6 = r4.default) ? void 0 : o6.call(r4, { href: e8.to, navigate, route: a5 }) : h2("a", { href: e8.to, onClick: (e9) => (e9.preventDefault(), navigate()) }, r4);
        };
      } })), e7._route = i4, e7._middleware = e7._middleware || { global: [], named: {} };
      const d3 = e7.payload.state._layout;
      return e7.hooks.hookOnce("app:created", async () => {
        s3.beforeEach(async (o6, a5) => {
          var i5;
          if (o6.meta = reactive(o6.meta || {}), e7.isHydrating && d3 && !isReadonly(o6.meta.layout) && (o6.meta.layout = d3), e7._processingMiddleware = true, !(null == (i5 = e7.ssrContext) ? void 0 : i5.islandContext)) {
            const i6 = /* @__PURE__ */ new Set([...pu, ...e7._middleware.global]);
            {
              const r4 = await e7.runWithContext(() => async function(e8) {
                {
                  const r5 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                  return defu({}, ...r5.matchAll(e8).reverse());
                }
              }(o6.path));
              if (r4.appMiddleware)
                for (const o7 in r4.appMiddleware) {
                  const a6 = e7._middleware.named[o7];
                  if (!a6)
                    return;
                  r4.appMiddleware[o7] ? i6.add(a6) : i6.delete(a6);
                }
            }
            for (const s4 of i6) {
              const i7 = await e7.runWithContext(() => s4(o6, a5));
              if (false === i7 || i7 instanceof Error) {
                const o7 = i7 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${r3}`, data: { path: r3 } });
                return delete e7._processingMiddleware, e7.runWithContext(() => showError(o7));
              }
              if (true !== i7 && (i7 || false === i7))
                return i7;
            }
          }
        }), s3.afterEach(() => {
          delete e7._processingMiddleware;
        }), await s3.replace(r3), function(e8, r4, o6 = {}) {
          return o6.trailingSlash || (e8 = withTrailingSlash(e8), r4 = withTrailingSlash(r4)), o6.leadingSlash || (e8 = withLeadingSlash(e8), r4 = withLeadingSlash(r4)), o6.encoding || (e8 = decode(e8), r4 = decode(r4)), e8 === r4;
        }(i4.fullPath, r3) || await e7.runWithContext(() => navigateTo(i4.fullPath));
      }), { provide: { route: i4, router: s3 } };
    } });
    mu = { NuxtError: (e7) => {
      return !!(r3 = e7) && "object" == typeof r3 && nu in r3 && e7.toJSON();
      var r3;
    }, EmptyShallowRef: (e7) => isRef(e7) && isShallow(e7) && !e7.value && ("bigint" == typeof e7.value ? "0n" : JSON.stringify(e7.value) || "_"), EmptyRef: (e7) => isRef(e7) && !e7.value && ("bigint" == typeof e7.value ? "0n" : JSON.stringify(e7.value) || "_"), ShallowRef: (e7) => isRef(e7) && isShallow(e7) && e7.value, ShallowReactive: (e7) => isReactive(e7) && isShallow(e7) && toRaw(e7), Ref: (e7) => isRef(e7) && e7.value, Reactive: (e7) => isReactive(e7) && toRaw(e7) };
    yu = [lu, hu, defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const o5 in mu)
        e7 = o5, r3 = mu[o5], useNuxtApp().ssrContext._payloadReducers[e7] = r3;
      var e7, r3;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    _export_sfc = (e7, r3) => {
      const o5 = e7.__vccOpts || e7;
      for (const [e8, a4] of r3)
        o5[e8] = a4;
      return o5;
    };
    bu = { __name: "welcome", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, title: { type: String, default: "Welcome to Nuxt!" }, readDocs: { type: String, default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework." }, followTwitter: { type: String, default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips." }, starGitHub: { type: String, default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source." } }, setup: (e7) => (useHead({ title: `${e7.title}`, script: [], style: [{ children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2,h3{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,h3,p{margin:0}ul{list-style:none;margin:0;padding:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }` }] }), (e8, r3, o5, a4) => {
      r3(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base" }, a4))} data-v-c170d279><div class="flex-1 flex flex-col gap-y-16 py-14" data-v-c170d279><div class="flex flex-col gap-y-4 items-center justify-center" data-v-c170d279><a href="https://nuxt.com" target="_blank" data-v-c170d279><svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c170d279><path d="M33.9869 41.2211H56.412C57.1243 41.2212 57.824 41.0336 58.4408 40.6772C59.0576 40.3209 59.5698 39.8083 59.9258 39.191C60.2818 38.5737 60.469 37.8736 60.4687 37.1609C60.4684 36.4482 60.2805 35.7482 59.924 35.1313L44.864 9.03129C44.508 8.41416 43.996 7.90168 43.3793 7.54537C42.7626 7.18906 42.063 7.00147 41.3509 7.00147C40.6387 7.00147 39.9391 7.18906 39.3225 7.54537C38.7058 7.90168 38.1937 8.41416 37.8377 9.03129L33.9869 15.7093L26.458 2.65061C26.1018 2.03354 25.5895 1.52113 24.9726 1.16489C24.3557 0.808639 23.656 0.621094 22.9438 0.621094C22.2316 0.621094 21.5318 0.808639 20.915 1.16489C20.2981 1.52113 19.7858 2.03354 19.4296 2.65061L0.689224 35.1313C0.332704 35.7482 0.144842 36.4482 0.144532 37.1609C0.144222 37.8736 0.331476 38.5737 0.687459 39.191C1.04344 39.8083 1.5556 40.3209 2.17243 40.6772C2.78925 41.0336 3.48899 41.2212 4.20126 41.2211H18.2778C23.8551 41.2211 27.9682 38.7699 30.7984 33.9876L37.6694 22.0813L41.3498 15.7093L52.3951 34.8492H37.6694L33.9869 41.2211ZM18.0484 34.8426L8.2247 34.8404L22.9504 9.32211L30.2979 22.0813L25.3784 30.6092C23.4989 33.7121 21.3637 34.8426 18.0484 34.8426Z" fill="#00DC82" data-v-c170d279></path></svg></a><h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center" data-v-c170d279>Welcome to Nuxt!</h1></div><div class="grid grid-cols-2 lg:grid-cols-10 gap-6 max-w-[960px] px-4" data-v-c170d279><div class="col-span-2 lg:col-span-10 relative get-started-gradient-border" data-v-c170d279><div class="get-started-gradient-left absolute left-0 inset-y-0 w-[20%] bg-gradient-to-r to-transparent from-green-400 rounded-xl z-1 transition-opacity duration-300" data-v-c170d279></div><div class="get-started-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-c170d279></div><div class="w-full absolute inset-x-0 flex justify-center -top-[58px]" data-v-c170d279><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%2318181B%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.696c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.133%203.02-5.266%205.71-6.152a1.312%201.312%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.624%202.624%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316Zm8.482%202.657L53%2063.561l10.205-10.205c1.28-1.28%204.2-4.724%203.543-9.105-4.38-.656-7.826%202.264-9.105%203.544L47.438%2057.999Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%20shape-rendering%3D%22geometricPrecision%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.107%22%20y2%3D%2258.107%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2724_4091%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2724_4091%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="hidden dark:block" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22105%22%20height%3D%22116%22%20fill%3D%22none%22%3E%3Cg%20filter%3D%22url(%23a)%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M17.203%2033.223%2046.9%2014.286a8.416%208.416%200%200%201%208.64-.18L87.38%2031.97c2.68%201.527%204.365%204.409%204.428%207.571l.191%2034.944c.063%203.151-1.491%206.104-4.091%207.776l-30.143%2019.383a8.417%208.417%200%200%201-8.75.251l-31.126-17.73C15.135%2082.595%2012.98%2079.6%2013%2076.35V40.828c.02-3.111%201.614-5.994%204.203-7.605Z%22%2F%3E%3Cpath%20stroke%3D%22url(%23b)%22%20stroke-width%3D%222%22%20d%3D%22M46.9%2014.286%2017.202%2033.223c-2.59%201.61-4.183%204.494-4.203%207.605V76.35m33.9-62.064a8.416%208.416%200%200%201%208.64-.18m-8.64.18a8.435%208.435%200%200%201%208.64-.18M13%2076.35c-.02%203.25%202.135%206.246%204.888%207.814M13%2076.35c-.02%203.233%202.136%206.247%204.888%207.814m0%200%2031.126%2017.731m0%200a8.417%208.417%200%200%200%208.75-.251m-8.75.251a8.438%208.438%200%200%200%208.75-.251m0%200%2030.143-19.383m0%200c2.598-1.67%204.154-4.627%204.091-7.776m-4.091%207.776c2.6-1.672%204.154-4.625%204.091-7.776m0%200-.19-34.944m0%200c-.064-3.162-1.75-6.044-4.43-7.571m4.43%207.571c-.063-3.147-1.75-6.045-4.43-7.571m0%200L55.54%2014.105%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M32%2037h42v42H32z%22%2F%3E%3Cpath%20fill%3D%22url(%23c)%22%20d%3D%22M48.669%2067.697c-.886%202.69-3.02%204.659-6.153%205.709-1.41.465-2.88.72-4.364.755a1.313%201.313%200%200%201-1.312-1.313c.035-1.484.29-2.954.754-4.364%201.05-3.134%203.02-5.266%205.71-6.152a1.314%201.314%200%201%201%20.836%202.477c-3.232%201.083-4.232%204.577-4.544%206.595%202.018-.311%205.512-1.312%206.595-4.544a1.313%201.313%200%200%201%202.477.837Zm16.39-12.486-1.46%201.477v10.057a2.657%202.657%200%200%201-.772%201.854l-5.316%205.3a2.559%202.559%200%200%201-1.853.77%202.413%202.413%200%200%201-.755-.115%202.626%202.626%200%200%201-1.821-2.001l-1.296-6.48-6.858-6.858-6.48-1.297a2.625%202.625%200%200%201-2.002-1.82%202.609%202.609%200%200%201%20.656-2.61l5.3-5.315a2.658%202.658%200%200%201%201.853-.771h10.057l1.477-1.46c4.692-4.692%209.499-4.561%2011.353-4.282a2.576%202.576%200%200%201%202.198%202.198c.28%201.854.41%206.661-4.282%2011.353Zm-26.103.132%206.185%201.23%206.546-6.546h-7.432l-5.299%205.316ZM47.438%2058%2053%2063.562l10.205-10.204c1.28-1.28%204.2-4.725%203.543-9.106-4.38-.656-7.826%202.264-9.105%203.544L47.438%2058Zm13.535%201.313-6.546%206.546%201.23%206.185%205.316-5.299v-7.432Z%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%2257.994%22%20x2%3D%2292%22%20y1%3D%2258%22%20y2%3D%2258%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%2255.197%22%20x2%3D%2269.453%22%20y1%3D%2258.108%22%20y2%3D%2258.108%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%231DE0B1%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2336E4DA%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22a%22%20width%3D%22104.897%22%20height%3D%22115.897%22%20x%3D%22.052%22%20y%3D%22.052%22%20color-interpolation-filters%3D%22sRGB%22%20filterUnits%3D%22userSpaceOnUse%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20result%3D%22hardAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%225.974%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2726_4054%22%2F%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2726_4054%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A" class="dark:hidden" data-v-c170d279></div><div class="flex flex-col rounded-xl items-center gap-y-4 pt-[58px] px-4 sm:px-28 pb-6 z-10" data-v-c170d279><h2 class="font-semibold text-2xl text-black dark:text-white" data-v-c170d279>Get started</h2><p class="mb-2 text-center" data-v-c170d279>Remove this welcome page by replacing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-c170d279>&lt;NuxtWelcome /&gt;</a> in <a href="https://nuxt.com/docs/guide/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-c170d279>app.vue</a> with your own code, or creating your own <span class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-c170d279>app.vue</span> if it doesn&#39;t exist.</p></div></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl modules-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-c170d279><div class="gradient-border gradient-border-modules gradient-border-rect" data-v-c170d279></div><div class="modules-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-yellow-400 rounded-xl z-1 transition-opacity duration-300" data-v-c170d279></div><a href="https://nuxt.com/modules" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 dark:border-none bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-c170d279><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2613_3853)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3853)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2552H17.8193C16.7585%2042.2552%2015.7411%2041.8337%2014.9909%2041.0836C14.2408%2040.3334%2013.8193%2039.316%2013.8193%2038.2552V24.9218C13.8193%2023.861%2014.2408%2022.8435%2014.9909%2022.0934C15.7411%2021.3433%2016.7585%2020.9218%2017.8193%2020.9218H19.1527C19.1751%2019.792%2019.5558%2018.6985%2020.2399%2017.7991C20.924%2016.8996%2021.8761%2016.2407%2022.9589%2015.9173C24.0416%2015.594%2025.1992%2015.6229%2026.2644%2016C27.3297%2016.377%2028.2477%2017.0827%2028.886%2018.0152C29.4839%2018.8674%2029.8094%2019.8808%2029.8193%2020.9218H33.8193C34.173%2020.9218%2034.5121%2021.0623%2034.7621%2021.3124C35.0122%2021.5624%2035.1527%2021.9015%2035.1527%2022.2552V26.2552C36.2825%2026.2776%2037.376%2026.6583%2038.2754%2027.3424C39.1749%2028.0265%2039.8338%2028.9786%2040.1572%2030.0613C40.4805%2031.1441%2040.4516%2032.3016%2040.0745%2033.3669C39.6975%2034.4322%2038.9918%2035.3502%2038.0593%2035.9885C37.2071%2036.5864%2036.1937%2036.9118%2035.1527%2036.9218V36.9218V40.9218C35.1527%2041.2755%2035.0122%2041.6146%2034.7621%2041.8646C34.5121%2042.1147%2034.173%2042.2552%2033.8193%2042.2552ZM17.8193%2023.5885C17.4657%2023.5885%2017.1266%2023.729%2016.8765%2023.979C16.6265%2024.2291%2016.486%2024.5682%2016.486%2024.9218V38.2552C16.486%2038.6088%2016.6265%2038.9479%2016.8765%2039.198C17.1266%2039.448%2017.4657%2039.5885%2017.8193%2039.5885H32.486V35.3485C32.4849%2035.1347%2032.5351%2034.9238%2032.6326%2034.7335C32.7301%2034.5432%2032.8718%2034.3792%2033.046%2034.2552C33.2196%2034.1313%2033.4204%2034.051%2033.6316%2034.0208C33.8427%2033.9907%2034.058%2034.0116%2034.2593%2034.0818C34.6393%2034.2368%2035.0532%2034.2901%2035.46%2034.2363C35.8669%2034.1825%2036.2527%2034.0236%2036.5793%2033.7752C36.9045%2033.5769%2037.1834%2033.3113%2037.3973%2032.9962C37.6111%2032.6811%2037.7551%2032.3239%2037.8193%2031.9485C37.8708%2031.5699%2037.8402%2031.1847%2037.7298%2030.8189C37.6194%2030.4532%2037.4317%2030.1154%2037.1793%2029.8285C36.8381%2029.414%2036.3734%2029.1193%2035.8529%2028.9874C35.3325%2028.8555%2034.7835%2028.8932%2034.286%2029.0952C34.0846%2029.1654%2033.8694%2029.1863%2033.6582%2029.1562C33.4471%2029.126%2033.2463%2029.0457%2033.0727%2028.9218C32.8985%2028.7978%2032.7567%2028.6338%2032.6593%2028.4435C32.5618%2028.2532%2032.5115%2028.0423%2032.5127%2027.8285V23.5885H28.246C28.0269%2023.6009%2027.8081%2023.559%2027.609%2023.4666C27.4099%2023.3742%2027.2368%2023.234%2027.1049%2023.0586C26.973%2022.8832%2026.8864%2022.6779%2026.8529%2022.461C26.8194%2022.2441%2026.8399%2022.0222%2026.9127%2021.8152C27.0677%2021.4352%2027.1209%2021.0213%2027.0671%2020.6145C27.0134%2020.2076%2026.8544%2019.8218%2026.606%2019.4952C26.4091%2019.1607%2026.1395%2018.8749%2025.8172%2018.6588C25.4948%2018.4427%2025.128%2018.3019%2024.7438%2018.2468C24.3597%2018.1917%2023.9681%2018.2238%2023.598%2018.3407C23.2279%2018.4575%2022.8889%2018.6561%2022.606%2018.9218C22.3433%2019.1824%2022.1377%2019.4948%2022.0023%2019.8391C21.8668%2020.1834%2021.8045%2020.5521%2021.8193%2020.9218C21.8224%2021.2277%2021.8812%2021.5304%2021.9927%2021.8152C22.0632%2022.0168%2022.0842%2022.2324%2022.054%2022.4438C22.0237%2022.6553%2021.9432%2022.8564%2021.819%2023.0302C21.6949%2023.204%2021.5308%2023.3454%2021.3406%2023.4426C21.1504%2023.5397%2020.9396%2023.5898%2020.726%2023.5885H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2613_3853)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3853%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3853%22%20x1%3D%2213.7453%22%20y1%3D%2221.3705%22%20x2%3D%2240.3876%22%20y2%3D%2235.7024%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2613_3853%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-light" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5204%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7337)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7337)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7337%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7337%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23F7D14C%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23A38108%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-color-dark" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2691_4389)%22%3E%0A%3Cpath%20d%3D%22M51.1519%2039.8821C51.154%2039.9844%2051.1527%2040.0863%2051.148%2040.1877C51.0782%2041.7091%2050.2566%2043.1165%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4389)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V36.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4204%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2691_4389)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4389%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4389%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2691_4389%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2257%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-light" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7175)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M33.8193%2042.2542H17.8193C16.7585%2042.2542%2015.7411%2041.8328%2014.9909%2041.0826C14.2408%2040.3325%2013.8193%2039.3151%2013.8193%2038.2542V24.9209C13.8193%2023.86%2014.2408%2022.8426%2014.9909%2022.0924C15.7411%2021.3423%2016.7585%2020.9209%2017.8193%2020.9209H19.1527C19.1751%2019.791%2019.5558%2018.6975%2020.2399%2017.7981C20.924%2016.8986%2021.8761%2016.2397%2022.9589%2015.9164C24.0416%2015.593%2025.1992%2015.6219%2026.2644%2015.999C27.3297%2016.376%2028.2477%2017.0817%2028.886%2018.0142C29.4839%2018.8664%2029.8094%2019.8799%2029.8193%2020.9209H33.8193C34.173%2020.9209%2034.5121%2021.0613%2034.7621%2021.3114C35.0122%2021.5614%2035.1527%2021.9006%2035.1527%2022.2542V26.2542C36.2825%2026.2766%2037.376%2026.6573%2038.2754%2027.3414C39.1749%2028.0255%2039.8338%2028.9776%2040.1572%2030.0604C40.4805%2031.1432%2040.4516%2032.3007%2040.0745%2033.366C39.6975%2034.4312%2038.9918%2035.3492%2038.0593%2035.9875C37.2071%2036.5854%2036.1937%2036.9109%2035.1527%2036.9209V40.9209C35.1527%2041.2745%2035.0122%2041.6136%2034.7621%2041.8637C34.5121%2042.1137%2034.173%2042.2542%2033.8193%2042.2542ZM17.8193%2023.5875C17.4657%2023.5875%2017.1266%2023.728%2016.8765%2023.978C16.6265%2024.2281%2016.486%2024.5672%2016.486%2024.9209V38.2542C16.486%2038.6078%2016.6265%2038.9469%2016.8765%2039.197C17.1266%2039.447%2017.4657%2039.5875%2017.8193%2039.5875H32.486V35.3475C32.4849%2035.1337%2032.5351%2034.9228%2032.6326%2034.7325C32.7301%2034.5422%2032.8718%2034.3782%2033.046%2034.2542C33.2196%2034.1304%2033.4205%2034.05%2033.6316%2034.0198C33.8427%2033.9897%2034.058%2034.0106%2034.2593%2034.0809C34.6393%2034.2359%2035.0532%2034.2891%2035.46%2034.2353C35.8669%2034.1816%2036.2527%2034.0226%2036.5793%2033.7742C36.9045%2033.5759%2037.1834%2033.3103%2037.3973%2032.9952C37.6111%2032.6801%2037.7551%2032.3229%2037.8193%2031.9475C37.8708%2031.5689%2037.8402%2031.1837%2037.7298%2030.8179C37.6194%2030.4522%2037.4317%2030.1144%2037.1793%2029.8275C36.8381%2029.413%2036.3734%2029.1183%2035.8529%2028.9864C35.3325%2028.8545%2034.7835%2028.8923%2034.286%2029.0942C34.0846%2029.1644%2033.8694%2029.1854%2033.6582%2029.1552C33.4471%2029.125%2033.2463%2029.0447%2033.0727%2028.9209C32.8985%2028.7969%2032.7567%2028.6328%2032.6593%2028.4425C32.5618%2028.2522%2032.5115%2028.0413%2032.5127%2027.8275V23.5875H28.246C28.0269%2023.5999%2027.8081%2023.5581%2027.609%2023.4656C27.4099%2023.3732%2027.2368%2023.233%2027.1049%2023.0576C26.973%2022.8822%2026.8864%2022.6769%2026.8529%2022.46C26.8194%2022.2431%2026.8399%2022.0213%2026.9127%2021.8142C27.0677%2021.4342%2027.1209%2021.0204%2027.0671%2020.6135C27.0134%2020.2066%2026.8544%2019.8208%2026.606%2019.4942C26.4091%2019.1597%2026.1395%2018.8739%2025.8172%2018.6578C25.4948%2018.4417%2025.128%2018.3009%2024.7438%2018.2458C24.3597%2018.1908%2023.9681%2018.2228%2023.598%2018.3397C23.2279%2018.4565%2022.8889%2018.6552%2022.606%2018.9209C22.3433%2019.1814%2022.1377%2019.4938%2022.0023%2019.8381C21.8668%2020.1824%2021.8045%2020.5512%2021.8193%2020.9209C21.8224%2021.2267%2021.8812%2021.5294%2021.9927%2021.8142C22.0632%2022.0158%2022.0842%2022.2314%2022.054%2022.4429C22.0237%2022.6543%2021.9432%2022.8554%2021.819%2023.0292C21.6949%2023.203%2021.5308%2023.3444%2021.3406%2023.4416C21.1504%2023.5388%2020.9396%2023.5888%2020.726%2023.5875H17.8193Z%22%20fill%3D%22url(%23paint1_linear_2595_7175)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7175%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7175%22%20x1%3D%2213.7453%22%20y1%3D%2221.3695%22%20x2%3D%2240.3876%22%20y2%3D%2235.7015%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="modules icon" class="modules-image-dark" data-v-c170d279><div class="flex flex-col space-y text-black dark:text-white" data-v-c170d279><h3 class="font-semibold text-xl" data-v-c170d279>Modules</h3><p class="text-gray-700 dark:text-gray-300" data-v-c170d279>Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.</p></div></a></div><div class="row-span-2 col-span-2 order-last lg:order-none lg:col-span-4 text-black dark:text-white documentation-container rounded-xl relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-c170d279><div class="gradient-border gradient-border-square gradient-border-documentation" data-v-c170d279></div><a href="https://nuxt.com/docs" target="_blank" class="rounded-xl flex lg:flex-col items-center justify-center gap-y-4 bg-white dark:bg-gray-900" data-v-c170d279><div class="py-6 lg:py-7 px-5 rounded-xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-y-2" data-v-c170d279><div class="flex flex-col space-y text-black dark:text-white" data-v-c170d279><h3 class="font-semibold text-xl" data-v-c170d279>Documentation</h3><p class="text-gray-700 dark:text-gray-300" data-v-c170d279>We highly recommend you take a look at the Nuxt documentation to level up.</p></div><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3947)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3947)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3947)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3947)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3947)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3947%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3947%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3947%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3947%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3947%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3947%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3947%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3947%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3947%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-light h-32 sm:h-34" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%2300DC82%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7273)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7273)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7273)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7273)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7273)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7273%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7273%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7273%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7273%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7273%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300DC82%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23003F25%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7273%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7273%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7273%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7273%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-color-dark h-32 sm:h-34" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%23E4E4E7%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Ccircle%20opacity%3D%220.7%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22%23A1A1AA%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2687_3977)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M222.151%20104.393C222.22%20107.764%20220.487%20110.944%20217.571%20112.75C217.567%20112.753%20217.563%20112.755%20217.559%20112.758L176.733%20137.956C173.748%20139.798%20169.96%20139.907%20166.89%20138.229L124.733%20115.18C121.469%20113.395%20119.131%20110.069%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C164.101%2027.8047%20164.101%2027.8047%20164.101%2027.8047C164.106%2027.8022%20164.11%2027.7997%20164.114%2027.7972C167.078%2026.0385%20170.793%2025.9632%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8377%20216.938%2050.8387%20216.94%2050.8397C219.935%2052.4801%20221.817%2055.5878%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393Z%22%20stroke%3D%22url(%23paint0_linear_2687_3977)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7997%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158V96.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646V97.7646Z%22%20fill%3D%22url(%23paint1_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2687_3977)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2687_3977)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2687_3977)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2687_3977%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.831373%200%200%200%200%200.831373%200%200%200%200%200.847059%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2687_3977%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2687_3977%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2687_3977%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2687_3977%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233F3F46%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2687_3977%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2687_3977%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2687_3977%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2687_3977%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-light h-32 sm:h-34" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22342%22%20height%3D%22165%22%20viewBox%3D%220%200%20342%20165%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M0.152832%20131.851H154.28%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M215.399%20107.359H349.153%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M0.152832%2077.2178L116.191%2077.2178%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.1528%20106.921L152.191%20106.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M202.153%2042.9209L317.305%2042.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2076.9209L345.305%2076.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M285.947%208.45605V166.979%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M252.602%2016.8311V107.36%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M171.153%2016.9209V107.45%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M218.153%2016.9209V43.4501%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.153%2016.9211L327.45%2016.9209%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M1.92432%2043.3086H148.163%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M122.392%2016.4209V55.3659%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M36.084%200.920898L36.084%20176.921%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Cpath%20d%3D%22M75.4448%2043.249V175.152%22%20stroke%3D%22%2327272A%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2275.4448%22%20cy%3D%2277.2178%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%2236.1528%22%20cy%3D%22131.85%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22285.947%22%20cy%3D%2242.9209%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Ccircle%20opacity%3D%220.14%22%20cx%3D%22252.602%22%20cy%3D%22107.359%22%20r%3D%223.5%22%20fill%3D%22white%22%2F%3E%0A%3Cg%20filter%3D%22url(%23filter0_d_2595_7193)%22%3E%0A%3Cpath%20d%3D%22M122.846%2050.7109L163.067%2026.0929C166.656%2023.9507%20171.117%2023.8611%20174.77%2025.8579L217.894%2049.0819C221.524%2051.0665%20223.807%2054.8133%20223.892%2058.9246L224.15%20104.352C224.235%20108.448%20222.13%20112.287%20218.609%20114.46L177.783%20139.658C174.174%20141.886%20169.638%20142.011%20165.931%20139.984L123.774%20116.935C120.045%20114.896%20117.125%20111.001%20117.153%20106.776L117.153%2060.5974C117.18%2056.5529%20119.338%2052.8048%20122.846%2050.7109Z%22%20fill%3D%22%2318181B%22%2F%3E%0A%3Cpath%20d%3D%22M123.871%2052.4282L123.881%2052.4225L123.89%2052.4167L164.101%2027.8047C167.083%2026.0291%20170.786%2025.9592%20173.81%2027.6128L173.81%2027.6128L173.821%2027.6188L216.934%2050.8367C216.936%2050.8376%20216.938%2050.8386%20216.939%2050.8395C219.938%2052.4814%20221.817%2055.5694%20221.892%2058.9515L222.15%20104.363L222.15%20104.378L222.151%20104.393C222.221%20107.772%20220.485%20110.952%20217.559%20112.758L176.733%20137.956C173.732%20139.808%20169.963%20139.909%20166.89%20138.229L124.733%20115.18C121.465%20113.393%20119.131%20110.089%20119.153%20106.79L119.153%20106.776L119.153%2060.6107C119.153%2060.6086%20119.153%2060.6065%20119.153%2060.6044C119.178%2057.2703%20120.958%2054.1669%20123.871%2052.4282Z%22%20stroke%3D%22url(%23paint0_linear_2595_7193)%22%20stroke-width%3D%224%22%2F%3E%0A%3C%2Fg%3E%0A%3Cpath%20d%3D%22M192.349%2096.9158L190.63%2090.5186L183.778%2064.9088C183.55%2064.0605%20182.994%2063.3375%20182.233%2062.8988C181.472%2062.4601%20180.568%2062.3416%20179.72%2062.5693L173.323%2064.2877L173.116%2064.3498C172.807%2063.945%20172.409%2063.6168%20171.953%2063.3906C171.497%2063.1644%20170.995%2063.0463%20170.486%2063.0455H163.861C163.279%2063.0471%20162.707%2063.2043%20162.205%2063.501C161.703%2063.2043%20161.132%2063.0471%20160.549%2063.0455H153.924C153.045%2063.0455%20152.203%2063.3945%20151.582%2064.0157C150.96%2064.6369%20150.611%2065.4795%20150.611%2066.358V99.483C150.611%20100.362%20150.96%20101.204%20151.582%20101.825C152.203%20102.447%20153.045%20102.796%20153.924%20102.796H160.549C161.132%20102.794%20161.703%20102.637%20162.205%20102.34C162.707%20102.637%20163.279%20102.794%20163.861%20102.796H170.486C171.365%20102.796%20172.207%20102.447%20172.829%20101.825C173.45%20101.204%20173.799%20100.362%20173.799%2099.483V78.8627L177.836%2093.9346L179.554%20100.332C179.742%20101.039%20180.158%20101.665%20180.739%20102.11C181.32%20102.556%20182.031%20102.797%20182.763%20102.796C183.049%20102.791%20183.334%20102.756%20183.612%20102.692L190.009%20100.974C190.43%20100.861%20190.824%20100.665%20191.169%20100.399C191.514%20100.132%20191.802%2099.7998%20192.018%2099.4209C192.238%2099.047%20192.381%2098.6325%20192.438%2098.2021C192.495%2097.7717%20192.465%2097.3342%20192.349%2096.9158ZM176.325%2075.4881L182.722%2073.7697L187.007%2089.7732L180.61%2091.4916L176.325%2075.4881ZM180.569%2065.7783L181.873%2070.5607L175.476%2072.2791L174.171%2067.4967L180.569%2065.7783ZM170.486%2066.358V91.2018H163.861V66.358H170.486ZM160.549%2066.358V71.3268H153.924V66.358H160.549ZM153.924%2099.483V74.6393H160.549V99.483H153.924ZM170.486%2099.483H163.861V94.5143H170.486V99.483ZM189.161%2097.7646L182.763%2099.483L181.459%2094.6799L187.877%2092.9615L189.161%2097.7646Z%22%20fill%3D%22url(%23paint1_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%222.15283%22%20y%3D%22-3.0791%22%20width%3D%22327%22%20height%3D%2223%22%20fill%3D%22url(%23paint2_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(1%200%200%20-1%202.15283%20166.921)%22%20fill%3D%22url(%23paint3_linear_2595_7193)%22%2F%3E%0A%3Crect%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22matrix(0%201%201%200%200.152832%20-17.0791)%22%20fill%3D%22url(%23paint4_linear_2595_7193)%22%2F%3E%0A%3Crect%20x%3D%22342.153%22%20y%3D%22-17.0791%22%20width%3D%22327%22%20height%3D%2225%22%20transform%3D%22rotate(90%20342.153%20-17.0791)%22%20fill%3D%22url(%23paint5_linear_2595_7193)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d_2595_7193%22%20x%3D%2286.1528%22%20y%3D%22-6.5791%22%20width%3D%22169%22%20height%3D%22179%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%2215.5%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.07%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2595_7193%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2595_7193%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7193%22%20x1%3D%22118.202%22%20y1%3D%2260.3042%22%20x2%3D%22223.159%22%20y2%3D%22113.509%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7193%22%20x1%3D%22150.495%22%20y1%3D%2271.0767%22%20x2%3D%22191.769%22%20y2%3D%2294.1139%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_2595_7193%22%20x1%3D%22165.653%22%20y1%3D%22-3.0791%22%20x2%3D%22166.153%22%20y2%3D%2219.9209%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_2595_7193%22%20x1%3D%22163.5%22%20y1%3D%22-2.30278e-07%22%20x2%3D%22164.091%22%20y2%3D%2224.9979%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_2595_7193%22%20x1%3D%22505.653%22%20y1%3D%22-17.0791%22%20x2%3D%22506.244%22%20y2%3D%227.91876%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2318181B%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2318181B%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_2595_7193%22%3E%0A%3Crect%20width%3D%22341%22%20height%3D%22164%22%20fill%3D%22white%22%20transform%3D%22translate(0.152832%200.920898)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="documentation icon" class="documentation-image-dark h-32 sm:h-34" data-v-c170d279></div></a></div><div class="lg:min-h-min sm:min-h-[220px] md:min-h-[180px] col-span-2 sm:col-span-1 lg:col-span-6 text-black dark:text-white rounded-xl examples-container relative items-center justify-center border border-gray-200 dark:border-transparent hover:border-transparent" data-v-c170d279><div class="gradient-border gradient-border-examples gradient-border-rect" data-v-c170d279></div><div class="examples-gradient-right absolute right-0 inset-y-0 w-[20%] bg-gradient-to-l to-transparent from-blue-400 rounded-xl z-1 transition-opacity duration-300" data-v-c170d279></div><a href="https://nuxt.com/docs/examples" target="_blank" class="py-6 px-5 rounded-xl flex items-center justify-center gap-x-4 bg-white dark:bg-gray-900 sm:min-h-[220px] md:min-h-[180px] lg:min-h-min" data-v-c170d279><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2613_3941)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2613_3941)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2613_3941%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2613_3941%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-light" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7426)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7426)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7426%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7426%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%238DEAFF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23008AA9%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-color-dark" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M49.1971%2043.7595C49.1113%2043.8209%2049.0231%2043.8796%2048.9325%2043.9357L29.0918%2056.2117C27.6504%2057.1035%2025.8212%2057.1564%2024.3387%2056.3439L3.85107%2045.1148C2.27157%2044.2491%201.14238%2042.6366%201.15291%2041.0494L1.15293%2041.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4169%201.73583%2026.2139%201.69824%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8136C50.0797%2014.6078%2050.9898%2016.1132%2051.026%2017.7438L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1834%2041.4138%2050.4491%2042.8635%2049.1971%2043.7595Z%22%20fill%3D%22white%22%20stroke%3D%22url(%23paint0_linear_2691_4397)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209V17.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2691_4397)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2691_4397%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2691_4397%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23D4D4D8%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-light" data-v-c170d279> <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2253%22%20height%3D%2258%22%20viewBox%3D%220%200%2053%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.43319%2014.5869L3.43322%2014.587L3.44269%2014.5812L22.9844%202.59084C24.4246%201.73116%2026.2124%201.69742%2027.6729%202.49791L27.6729%202.49792L27.6784%202.50094L48.6303%2013.8121C48.6313%2013.8126%2048.6322%2013.8131%2048.6331%2013.8137C50.0812%2014.6086%2050.9896%2016.1043%2051.026%2017.7437L51.1517%2039.8672L51.1517%2039.8746L51.1519%2039.8821C51.1856%2041.5203%2050.346%2043.0611%2048.9325%2043.9357L29.0918%2056.2117C27.6424%2057.1085%2025.8227%2057.1572%2024.3387%2056.3439L3.85107%2045.1148C2.26984%2044.2481%201.14232%2042.646%201.15293%2041.0494V41.0427L1.153%2018.552C1.15301%2018.5509%201.15302%2018.5499%201.15302%2018.5488C1.16485%2016.9324%202.02611%2015.4289%203.43319%2014.5869Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22url(%23paint0_linear_2595_7182)%22%20stroke-width%3D%222%22%2F%3E%0A%3Cpath%20d%3D%22M37.1528%2017.9209H15.1528C14.6224%2017.9209%2014.1137%2018.1316%2013.7386%2018.5067C13.3635%2018.8818%2013.1528%2019.3905%2013.1528%2019.9209V37.9209C13.1528%2038.4513%2013.3635%2038.96%2013.7386%2039.3351C14.1137%2039.7102%2014.6224%2039.9209%2015.1528%2039.9209H37.1528C37.6833%2039.9209%2038.192%2039.7102%2038.567%2039.3351C38.9421%2038.96%2039.1528%2038.4513%2039.1528%2037.9209V19.9209C39.1528%2019.3905%2038.9421%2018.8818%2038.567%2018.5067C38.192%2018.1316%2037.6833%2017.9209%2037.1528%2017.9209ZM15.1528%2019.9209H37.1528V24.9209H15.1528V19.9209ZM15.1528%2026.9209H22.1528V37.9209H15.1528V26.9209ZM37.1528%2037.9209H24.1528V26.9209H37.1528V37.9209Z%22%20fill%3D%22url(%23paint1_linear_2595_7182)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_2595_7182%22%20x1%3D%220.662695%22%20y1%3D%2218.4025%22%20x2%3D%2251.7209%22%20y2%3D%2244.2212%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint1_linear_2595_7182%22%20x1%3D%2213.0804%22%20y1%3D%2222.6224%22%20x2%3D%2237.028%22%20y2%3D%2237.847%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22white%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2371717A%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A" alt="examples icon" class="examples-image-dark" data-v-c170d279><div class="flex flex-col space-y text-black dark:text-white" data-v-c170d279><h3 class="font-semibold text-xl" data-v-c170d279>Examples</h3><p class="text-gray-700 dark:text-gray-300" data-v-c170d279>Explore different way of using Nuxt features and get inspired with our list of examples.</p></div></a></div></div></div><footer class="relative border-t bg-white dark:bg-black border-gray-200 dark:border-gray-900 w-full h-[70px] flex items-center" data-v-c170d279><div class="absolute inset-x-0 flex items-center justify-center -top-3" data-v-c170d279><a href="https://nuxt.com" target="_blank" data-v-c170d279><svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c170d279><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="white" class="dark:hidden" data-v-c170d279></ellipse><ellipse cx="34.6528" cy="10.4209" rx="34.5" ry="9.5" fill="black" class="hidden dark:block" data-v-c170d279></ellipse><path d="M36.0605 15.9209H42.6256C42.8341 15.9209 43.0389 15.8655 43.2195 15.7602C43.4001 15.6548 43.55 15.5033 43.6543 15.3209C43.7585 15.1384 43.8133 14.9315 43.8132 14.7208C43.8131 14.5102 43.7581 14.3033 43.6537 14.1209L39.2448 6.40667C39.1406 6.22427 38.9907 6.0728 38.8101 5.96748C38.6296 5.86217 38.4248 5.80672 38.2163 5.80672C38.0078 5.80672 37.803 5.86217 37.6225 5.96748C37.4419 6.0728 37.292 6.22427 37.1878 6.40667L36.0605 8.38048L33.8563 4.52076C33.752 4.33837 33.602 4.18692 33.4214 4.08163C33.2409 3.97633 33.036 3.9209 32.8275 3.9209C32.619 3.9209 32.4141 3.97633 32.2335 4.08163C32.053 4.18692 31.903 4.33837 31.7987 4.52076L26.3123 14.1209C26.2079 14.3033 26.1529 14.5102 26.1528 14.7208C26.1527 14.9315 26.2076 15.1384 26.3118 15.3209C26.416 15.5033 26.5659 15.6548 26.7465 15.7602C26.9271 15.8655 27.1319 15.9209 27.3405 15.9209H31.4615C33.0943 15.9209 34.2984 15.1964 35.127 13.7829L37.1385 10.2638L38.216 8.38048L41.4496 14.0376H37.1385L36.0605 15.9209ZM31.3943 14.0356L28.5184 14.035L32.8294 6.49263L34.9805 10.2638L33.5402 12.7844C32.99 13.7015 32.3649 14.0356 31.3943 14.0356Z" fill="#00DC82" data-v-c170d279></path></svg></a></div><div class="mx-auto sm:px-6 lg:px-8 px-4 w-full" data-v-c170d279><div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between" data-v-c170d279><div class="flex flex-col-reverse items-center gap-3 sm:flex-row" data-v-c170d279><span class="text-sm text-gray-700 dark:text-gray-300" data-v-c170d279>\xA9 2016-${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Nuxt - MIT License</span></div><ul class="flex items-center justify-end gap-3" data-v-c170d279><li data-v-c170d279><a href="https://chat.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-c170d279><span class="sr-only" data-v-c170d279>Nuxt Discord Server</span> <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c170d279><path d="M13.3705 1.07322C13.3663 1.06497 13.3594 1.05851 13.351 1.05499C12.3785 0.599487 11.3522 0.274675 10.2978 0.0886873C10.2882 0.0868693 10.2783 0.0881809 10.2695 0.0924354C10.2607 0.0966899 10.2534 0.103671 10.2487 0.112385C10.109 0.371315 9.98212 0.637279 9.86863 0.909263C8.73205 0.733138 7.57595 0.733138 6.43938 0.909263C6.32514 0.636589 6.19624 0.370559 6.05328 0.112385C6.04838 0.10386 6.04107 0.0970401 6.03232 0.0928132C6.02356 0.0885863 6.01377 0.0871486 6.0042 0.0886873C4.9497 0.274285 3.92333 0.599121 2.95092 1.05502C2.9426 1.05862 2.93558 1.06477 2.93082 1.07262C0.986197 4.03716 0.453491 6.92881 0.714819 9.78465C0.715554 9.79165 0.71766 9.79843 0.721013 9.80458C0.724365 9.81073 0.728896 9.81613 0.734334 9.82046C1.86667 10.6763 3.1332 11.3296 4.47988 11.7525C4.48937 11.7554 4.49949 11.7552 4.5089 11.7521C4.51831 11.7489 4.52655 11.7429 4.53251 11.7349C4.82175 11.3331 5.07803 10.9077 5.29876 10.4629C5.3018 10.4568 5.30353 10.4501 5.30384 10.4433C5.30416 10.4365 5.30305 10.4296 5.3006 10.4233C5.29814 10.4169 5.29439 10.4111 5.2896 10.4064C5.2848 10.4016 5.27906 10.3979 5.27277 10.3955C4.86862 10.2377 4.47736 10.0474 4.10266 9.82645C4.09586 9.82236 4.09014 9.81663 4.08602 9.80976C4.0819 9.80288 4.0795 9.79508 4.07903 9.78703C4.07856 9.77899 4.08004 9.77095 4.08334 9.76362C4.08664 9.7563 4.09166 9.74992 4.09794 9.74504C4.17657 9.68491 4.25524 9.62236 4.33032 9.55918C4.33699 9.55358 4.34506 9.54998 4.35362 9.5488C4.36218 9.54762 4.3709 9.54891 4.37879 9.55252C6.83362 10.6962 9.4913 10.6962 11.9171 9.55252C11.925 9.54868 11.9338 9.54721 11.9425 9.54829C11.9512 9.54936 11.9594 9.55293 11.9662 9.55858C12.0413 9.62176 12.1199 9.68491 12.1991 9.74504C12.2054 9.74987 12.2105 9.75621 12.2138 9.7635C12.2172 9.7708 12.2187 9.77882 12.2183 9.78687C12.2179 9.79492 12.2156 9.80274 12.2115 9.80964C12.2074 9.81654 12.2018 9.82232 12.195 9.82645C11.8211 10.0492 11.4295 10.2394 11.0243 10.3949C11.018 10.3974 11.0123 10.4012 11.0075 10.406C11.0028 10.4109 10.9991 10.4167 10.9967 10.4231C10.9943 10.4295 10.9932 10.4364 10.9936 10.4433C10.9939 10.4501 10.9957 10.4568 10.9988 10.4629C11.2232 10.9052 11.4791 11.3301 11.7645 11.7342C11.7703 11.7425 11.7785 11.7487 11.7879 11.7519C11.7974 11.7552 11.8076 11.7554 11.8171 11.7524C13.1662 11.331 14.4349 10.6776 15.5687 9.82046C15.5742 9.81635 15.5788 9.81108 15.5822 9.80501C15.5855 9.79893 15.5876 9.7922 15.5882 9.78525C15.9011 6.4836 15.0644 3.61565 13.3705 1.07322ZM5.66537 8.04574C4.92629 8.04574 4.31731 7.35337 4.31731 6.50305C4.31731 5.65274 4.91448 4.96032 5.66537 4.96032C6.42213 4.96032 7.02522 5.65875 7.01341 6.503C7.01341 7.35337 6.41622 8.04574 5.66537 8.04574ZM10.6496 8.04574C9.91051 8.04574 9.30153 7.35337 9.30153 6.50305C9.30153 5.65274 9.8987 4.96032 10.6496 4.96032C11.4064 4.96032 12.0094 5.65875 11.9976 6.503C11.9976 7.35337 11.4064 8.04574 10.6496 8.04574Z" fill="currentColor" data-v-c170d279></path></svg></a></li><li data-v-c170d279><a href="https://twitter.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-c170d279><span class="sr-only" data-v-c170d279>Nuxt Twitter</span> <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c170d279><path d="M17.486 1.75441C16.8596 2.02615 16.1972 2.20579 15.5193 2.28774C16.2345 1.86051 16.7704 1.18839 17.0277 0.396073C16.3556 0.796126 15.62 1.07799 14.8527 1.22941C14.3398 0.673216 13.6568 0.302987 12.9108 0.176783C12.1649 0.0505786 11.3981 0.175539 10.7308 0.532064C10.0635 0.88859 9.53345 1.45652 9.2237 2.14677C8.91396 2.83702 8.84208 3.61056 9.01934 4.34607C7.66053 4.27734 6.33137 3.92353 5.11822 3.30762C3.90506 2.69171 2.83504 1.82748 1.97767 0.771073C1.67695 1.29621 1.51894 1.89093 1.51934 2.49607C1.51827 3.05806 1.65618 3.61159 1.9208 4.10738C2.18541 4.60317 2.56852 5.02583 3.036 5.33774C2.49265 5.32296 1.96091 5.17716 1.486 4.91274V4.95441C1.49008 5.74182 1.766 6.50365 2.2671 7.11104C2.7682 7.71844 3.46372 8.13411 4.236 8.28774C3.93872 8.37821 3.63007 8.42591 3.31934 8.42941C3.10424 8.42689 2.88969 8.40739 2.67767 8.37107C2.89759 9.04842 3.32319 9.64036 3.89523 10.0645C4.46728 10.4887 5.15732 10.724 5.86934 10.7377C4.66701 11.6838 3.18257 12.2001 1.65267 12.2044C1.37412 12.2053 1.09578 12.1886 0.819336 12.1544C2.38136 13.163 4.20168 13.6983 6.061 13.6961C7.34408 13.7094 8.61695 13.4669 9.80527 12.9828C10.9936 12.4987 12.0735 11.7826 12.982 10.8765C13.8905 9.97033 14.6093 8.89223 15.0965 7.70516C15.5836 6.51809 15.8294 5.24585 15.8193 3.96274C15.8193 3.82107 15.8193 3.67107 15.8193 3.52107C16.4732 3.03342 17.0372 2.43559 17.486 1.75441Z" fill="currentColor" data-v-c170d279></path></svg></a></li><li data-v-c170d279><a href="https://github.nuxt.dev" target="_blank" class="focus-visible:ring-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" data-v-c170d279><span class="sr-only" data-v-c170d279>Nuxt GitHub Repository</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c170d279><path d="M9.15269 0.792969C7.17392 0.793051 5.25974 1.49723 3.75266 2.77951C2.24558 4.06179 1.24394 5.83849 0.92697 7.7917C0.609997 9.74492 0.998373 11.7472 2.02261 13.4403C3.04684 15.1333 4.6401 16.4067 6.51729 17.0325C6.93396 17.1055 7.09021 16.8555 7.09021 16.6367C7.09021 16.4388 7.07978 15.7825 7.07978 15.0846C4.98603 15.47 4.44436 14.5742 4.27769 14.1055C4.09276 13.6496 3.79959 13.2456 3.42353 12.9284C3.13186 12.7721 2.71519 12.3867 3.4131 12.3763C3.67959 12.4052 3.93518 12.498 4.15822 12.6467C4.38125 12.7953 4.56516 12.9956 4.69436 13.2305C4.80833 13.4352 4.96159 13.6155 5.14535 13.7609C5.32911 13.9063 5.53975 14.014 5.76522 14.0779C5.99068 14.1418 6.22653 14.1605 6.45926 14.1331C6.69198 14.1056 6.917 14.0325 7.12143 13.918C7.1575 13.4943 7.34631 13.0982 7.65269 12.8034C5.79853 12.5951 3.86103 11.8763 3.86103 8.68883C3.84931 7.86062 4.15493 7.05931 4.71519 6.44924C4.46043 5.72943 4.49024 4.93948 4.79853 4.24091C4.79853 4.24091 5.49642 4.02215 7.09019 5.09508C8.45376 4.72005 9.89328 4.72005 11.2569 5.09508C12.8506 4.01174 13.5485 4.24091 13.5485 4.24091C13.8569 4.93947 13.8867 5.72943 13.6319 6.44924C14.1938 7.05826 14.4997 7.86027 14.486 8.68883C14.486 11.8867 12.5381 12.5951 10.6839 12.8034C10.8828 13.005 11.036 13.247 11.133 13.513C11.2301 13.779 11.2688 14.0628 11.2464 14.3451C11.2464 15.4597 11.236 16.3555 11.236 16.6367C11.236 16.8555 11.3923 17.1159 11.8089 17.0326C13.6828 16.4016 15.2715 15.1253 16.2914 13.4313C17.3112 11.7374 17.6959 9.73616 17.3768 7.78483C17.0576 5.83351 16.0553 4.05911 14.5489 2.77839C13.0425 1.49768 11.1299 0.793998 9.15269 0.792969Z" fill="currentColor" data-v-c170d279></path></svg></a></li></ul></div></div></footer></div>`);
    }) };
    gu = bu.setup;
    bu.setup = (e7, r3) => {
      const o5 = useSSRContext();
      return (o5.modules || (o5.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-templates@1.3.3/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue"), gu ? gu(e7, r3) : void 0;
    };
    Cu = _export_sfc(bu, [["__scopeId", "data-v-c170d279"]]);
    _u = {};
    Du = _u.setup;
    _u.setup = (e7, r3) => {
      const o5 = useSSRContext();
      return (o5.modules || (o5.modules = /* @__PURE__ */ new Set())).add("app.vue"), Du ? Du(e7, r3) : void 0;
    };
    vu = _export_sfc(_u, [["ssrRender", function(e7, r3, o5, a4) {
      const i4 = Cu;
      r3(`<div${ssrRenderAttrs(a4)}>`), r3(ssrRenderComponent(i4, null, null, o5)), r3("</div>");
    }]]);
    wu = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e7) {
      const r3 = e7.error;
      r3.stack && r3.stack.split("\n").splice(1).map((e8) => ({ text: e8.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e8.includes("node_modules") && !e8.includes(".cache") || e8.includes("internal") || e8.includes("new Promise") })).map((e8) => `<span class="stack${e8.internal ? " internal" : ""}">${e8.text}</span>`).join("\n");
      const o5 = Number(r3.statusCode || 500), a4 = 404 === o5, i4 = r3.statusMessage ?? (a4 ? "Page Not Found" : "Internal Server Error"), s3 = r3.message || r3.toString(), d3 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_B4mXw_Z(), error_404_B4mXw_Z_exports)).then((e8) => e8.default || e8)), f2 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_cKofolYF(), error_500_cKofolYF_exports)).then((e8) => e8.default || e8)), p2 = a4 ? d3 : f2;
      return (e8, r4, a5, d4) => {
        r4(ssrRenderComponent(unref(p2), mergeProps({ statusCode: unref(o5), statusMessage: unref(i4), description: unref(s3), stack: unref(void 0) }, d4), null, a5));
      };
    } };
    Su = wu.setup;
    wu.setup = (e7, r3) => {
      const o5 = useSSRContext();
      return (o5.modules || (o5.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Su ? Su(e7, r3) : void 0;
    };
    Eu = { __name: "nuxt-root", __ssrInlineRender: true, setup(e7) {
      const IslandRenderer = () => null, r3 = useNuxtApp();
      r3.deferHydration(), r3.ssrContext.url;
      const o5 = false;
      provide(ou, hasInjectionContext() ? inject(ou, useNuxtApp()._route) : useNuxtApp()._route), r3.hooks.callHookWith((e8) => e8.map((e9) => e9()), "vue:setup");
      const a4 = useError();
      onErrorCaptured((e8, o6, a5) => {
        r3.hooks.callHook("vue:error", e8, o6, a5).catch((e9) => console.error("[nuxt] Error in `vue:error` hook", e9));
        {
          const o7 = r3.runWithContext(() => showError(e8));
          return Ge(() => o7), false;
        }
      });
      const i4 = r3.ssrContext.islandContext;
      return (e8, r4, s3, d3) => {
        ssrRenderSuspense(r4, { default: () => {
          unref(a4) ? r4(ssrRenderComponent(unref(wu), { error: unref(a4) }, null, s3)) : unref(i4) ? r4(ssrRenderComponent(unref(IslandRenderer), { context: unref(i4) }, null, s3)) : unref(o5) ? renderVNode(r4, createVNode(resolveDynamicComponent(unref(o5)), null, null), s3) : r4(ssrRenderComponent(unref(vu), null, null, s3));
        }, _: 1 });
      };
    } };
    Au = Eu.setup;
    Eu.setup = (e7, r3) => {
      const o5 = useSSRContext();
      return (o5.modules || (o5.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.11.2_@unocss+reset@0.59.4_floating-vue@5.2.2_unocss@0.59.4_vite@5.2.10/node_modules/nuxt/dist/app/components/nuxt-root.vue"), Au ? Au(e7, r3) : void 0;
    }, Fu = async function(e7) {
      const r3 = createApp(Eu), o5 = createNuxtApp({ vueApp: r3, ssrContext: e7 });
      try {
        await async function(e8, r4) {
          var o6, a4;
          const i4 = [], s3 = [], d3 = [], f2 = [];
          let p2 = 0;
          async function executePlugin(o7) {
            var a5;
            const h4 = (null == (a5 = o7.dependsOn) ? void 0 : a5.filter((e9) => r4.some((r5) => r5._name === e9) && !i4.includes(e9))) ?? [];
            if (h4.length > 0)
              s3.push([new Set(h4), o7]);
            else {
              const r5 = async function(e9, r6) {
                if (r6.hooks && e9.hooks.addHooks(r6.hooks), "function" == typeof r6) {
                  const { provide: o8 } = await e9.runWithContext(() => r6(e9)) || {};
                  if (o8 && "object" == typeof o8)
                    for (const r7 in o8)
                      e9.provide(r7, o8[r7]);
                }
              }(e8, o7).then(async () => {
                o7._name && (i4.push(o7._name), await Promise.all(s3.map(async ([e9, r6]) => {
                  e9.has(o7._name) && (e9.delete(o7._name), 0 === e9.size && (p2++, await executePlugin(r6)));
                })));
              });
              o7.parallel ? d3.push(r5.catch((e9) => f2.push(e9))) : await r5;
            }
          }
          for (const i5 of r4)
            (null == (o6 = e8.ssrContext) ? void 0 : o6.islandContext) && false === (null == (a4 = i5.env) ? void 0 : a4.islands) || await executePlugin(i5);
          if (await Promise.all(d3), p2)
            for (let e9 = 0; e9 < p2; e9++)
              await Promise.all(d3);
          if (f2.length)
            throw f2[0];
        }(o5, yu), await o5.hooks.callHook("app:created", r3);
      } catch (e8) {
        await o5.hooks.callHook("app:error", e8), o5.payload.error = o5.payload.error || createError2(e8);
      }
      if (null == e7 ? void 0 : e7._renderResponse)
        throw new Error("skipping render");
      return r3;
    };
    entry$1 = (e7) => Fu(e7);
  }
});

// .output/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o3
});
var o3;
var init_virtual_spa_template = __esm({
  ".output/server/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    o3 = "";
  }
});

// .output/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => resolveDynamicComponent,
  B: () => h2,
  C: () => isRef,
  D: () => isShallow,
  E: () => isReactive,
  F: () => toRaw,
  G: () => Ge,
  H: () => defineAsyncComponent,
  I: () => withCtx,
  J: () => createTextVNode,
  K: () => toDisplayString,
  L: () => resolveComponent,
  M: () => Tn2,
  a: () => watch,
  b: () => baseURL,
  c: () => getActiveHead,
  d: () => createApp,
  e: () => effectScope,
  f: () => reactive,
  g: () => getCurrentInstance,
  h: () => ssrInterpolate,
  i: () => inject,
  j: () => hasInjectionContext,
  k: () => unref,
  l: () => ssrRenderSuspense,
  m: () => mergeProps,
  n: () => computed,
  o: () => onErrorCaptured,
  p: () => provide,
  q: () => defineComponent,
  r: () => ref,
  s: () => ssrRenderAttrs,
  t: () => toRef,
  u: () => useSSRContext,
  v: () => isReadonly,
  w: () => watchEffect,
  x: () => ssrRenderComponent,
  y: () => renderVNode,
  z: () => createVNode
});
function getModuleDependencies(e7, t4) {
  if (t4._dependencies[e7])
    return t4._dependencies[e7];
  const n4 = t4._dependencies[e7] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r3 = t4.manifest[e7];
  if (!r3)
    return n4;
  r3.file && (n4.preload[e7] = r3, (r3.isEntry || r3.sideEffects) && (n4.scripts[e7] = r3));
  for (const e8 of r3.css || [])
    n4.styles[e8] = n4.preload[e8] = n4.prefetch[e8] = t4.manifest[e8];
  for (const e8 of r3.assets || [])
    n4.preload[e8] = n4.prefetch[e8] = t4.manifest[e8];
  for (const e8 of r3.imports || []) {
    const r4 = getModuleDependencies(e8, t4);
    Object.assign(n4.styles, r4.styles), Object.assign(n4.preload, r4.preload), Object.assign(n4.prefetch, r4.prefetch);
  }
  const o5 = {};
  for (const e8 in n4.preload) {
    const t5 = n4.preload[e8];
    t5.preload && (o5[e8] = t5);
  }
  return n4.preload = o5, n4;
}
function getRequestDependencies(e7, t4) {
  if (e7._requestDependencies)
    return e7._requestDependencies;
  const n4 = function(e8, t5) {
    const n5 = Array.from(e8).sort().join(",");
    if (t5._dependencySets[n5])
      return t5._dependencySets[n5];
    const r3 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n6 of e8) {
      const e9 = getModuleDependencies(n6, t5);
      Object.assign(r3.scripts, e9.scripts), Object.assign(r3.styles, e9.styles), Object.assign(r3.preload, e9.preload), Object.assign(r3.prefetch, e9.prefetch);
      for (const e10 of t5.manifest[n6]?.dynamicImports || []) {
        const n7 = getModuleDependencies(e10, t5);
        Object.assign(r3.prefetch, n7.scripts), Object.assign(r3.prefetch, n7.styles), Object.assign(r3.prefetch, n7.preload);
      }
    }
    const o5 = {};
    for (const e9 in r3.prefetch) {
      const t6 = r3.prefetch[e9];
      t6.prefetch && (o5[e9] = t6);
    }
    r3.prefetch = o5;
    for (const e9 in r3.preload)
      delete r3.prefetch[e9];
    for (const e9 in r3.styles)
      delete r3.preload[e9], delete r3.prefetch[e9];
    return t5._dependencySets[n5] = r3, r3;
  }(new Set(Array.from([...t4._entrypoints, ...e7.modules || e7._registeredComponents || []])), t4);
  return e7._requestDependencies = n4, n4;
}
function renderStyles(e7, t4) {
  const { styles: n4 } = getRequestDependencies(e7, t4);
  return Object.values(n4).map((e8) => renderLinkToString({ rel: "stylesheet", href: t4.buildAssetsURL(e8.file) })).join("");
}
function getResources(e7, t4) {
  return [...getPreloadLinks(e7, t4), ...getPrefetchLinks(e7, t4)];
}
function renderResourceHints(e7, t4) {
  return getResources(e7, t4).map(renderLinkToString).join("");
}
function renderResourceHeaders(e7, t4) {
  return { link: getResources(e7, t4).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e7, t4) {
  const { preload: n4 } = getRequestDependencies(e7, t4);
  return Object.values(n4).map((e8) => ({ rel: e8.module ? "modulepreload" : "preload", as: e8.resourceType, type: e8.mimeType ?? null, crossorigin: "font" === e8.resourceType || "script" === e8.resourceType || e8.module ? "" : null, href: t4.buildAssetsURL(e8.file) }));
}
function getPrefetchLinks(e7, t4) {
  const { prefetch: n4 } = getRequestDependencies(e7, t4);
  return Object.values(n4).map((e8) => ({ rel: "prefetch", as: e8.resourceType, type: e8.mimeType ?? null, crossorigin: "font" === e8.resourceType || "script" === e8.resourceType || e8.module ? "" : null, href: t4.buildAssetsURL(e8.file) }));
}
function renderScripts(e7, t4) {
  const { scripts: n4 } = getRequestDependencies(e7, t4);
  return Object.values(n4).map((e8) => {
    return n5 = { type: e8.module ? "module" : null, src: t4.buildAssetsURL(e8.file), defer: e8.module ? null : "", crossorigin: "" }, `<script${Object.entries(n5).map(([e9, t5]) => null === t5 ? "" : t5 ? ` ${e9}="${t5}"` : " " + e9).join("")}><\/script>`;
    var n5;
  }).join("");
}
function createRenderer$1(e7, t4) {
  const n4 = function({ manifest: e8, buildAssetsURL: t5 }) {
    const n5 = { buildAssetsURL: t5 || withLeadingSlash2, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e9) {
      const t6 = Object.entries(e9);
      n5.manifest = e9, n5._dependencies = {}, n5._dependencySets = {}, n5._entrypoints = t6.filter((e10) => e10[1].isEntry).map(([e10]) => e10);
    }
    return updateManifest(e8), n5;
  }(t4);
  return { rendererContext: n4, async renderToString(r3) {
    r3._registeredComponents = r3._registeredComponents || /* @__PURE__ */ new Set();
    const o5 = await Promise.resolve(e7).then((e8) => e8.default || e8), s3 = await o5(r3), wrap = (e8) => () => e8(r3, n4);
    return { html: await t4.renderToString(s3, r3), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e7) {
  return `<link${Object.entries(e7).map(([e8, t4]) => null === t4 ? "" : t4 ? ` ${e8}="${t4}"` : " " + e8).join("")}>`;
}
function renderLinkToHeader(e7) {
  return `<${e7.href}>${Object.entries(e7).map(([e8, t4]) => "href" === e8 || null === t4 ? "" : t4 ? `; ${e8}="${t4}"` : `; ${e8}`).join("")}`;
}
function is_primitive(e7) {
  return Object(e7) !== e7;
}
function is_plain_object(e7) {
  const t4 = Object.getPrototypeOf(e7);
  return t4 === Object.prototype || null === t4 || Object.getOwnPropertyNames(t4).sort().join("\0") === y;
}
function get_type(e7) {
  return Object.prototype.toString.call(e7).slice(8, -1);
}
function get_escaped_char(e7) {
  switch (e7) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e7 < " " ? `\\u${e7.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e7) {
  let t4 = "", n4 = 0;
  const r3 = e7.length;
  for (let o5 = 0; o5 < r3; o5 += 1) {
    const r4 = get_escaped_char(e7[o5]);
    r4 && (t4 += e7.slice(n4, o5) + r4, n4 = o5 + 1);
  }
  return `"${0 === n4 ? e7 : t4 + e7.slice(n4)}"`;
}
function uneval(e7, t4) {
  const n4 = /* @__PURE__ */ new Map(), r3 = [], o5 = /* @__PURE__ */ new Map();
  !function walk(e8) {
    if ("function" == typeof e8)
      throw new DevalueError("Cannot stringify a function", r3);
    if (!is_primitive(e8)) {
      if (n4.has(e8))
        return void n4.set(e8, n4.get(e8) + 1);
      n4.set(e8, 1);
      switch (get_type(e8)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          e8.forEach((e9, t5) => {
            r3.push(`[${t5}]`), walk(e9), r3.pop();
          });
          break;
        case "Set":
          Array.from(e8).forEach(walk);
          break;
        case "Map":
          for (const [t5, n5] of e8)
            r3.push(`.get(${is_primitive(t5) ? stringify_primitive$1(t5) : "..."})`), walk(n5), r3.pop();
          break;
        default:
          if (!is_plain_object(e8))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", r3);
          if (Object.getOwnPropertySymbols(e8).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", r3);
          for (const t5 in e8)
            r3.push(`.${t5}`), walk(e8[t5]), r3.pop();
      }
    }
  }(e7);
  const s3 = /* @__PURE__ */ new Map();
  function stringify3(e8) {
    if (s3.has(e8))
      return s3.get(e8);
    if (is_primitive(e8))
      return stringify_primitive$1(e8);
    if (o5.has(e8))
      return o5.get(e8);
    const t5 = get_type(e8);
    switch (t5) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e8.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e8.source)}, "${e8.flags}")`;
      case "Date":
        return `new Date(${e8.getTime()})`;
      case "Array":
        const n5 = e8.map((t6, n6) => n6 in e8 ? stringify3(t6) : ""), r4 = 0 === e8.length || e8.length - 1 in e8 ? "" : ",";
        return `[${n5.join(",")}${r4}]`;
      case "Set":
      case "Map":
        return `new ${t5}([${Array.from(e8).map(stringify3).join(",")}])`;
      default:
        const o6 = `{${Object.keys(e8).map((t6) => `${function(e9) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e9) ? e9 : escape_unsafe_chars(JSON.stringify(e9));
        }(t6)}:${stringify3(e8[t6])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e8) ? Object.keys(e8).length > 0 ? `Object.assign(Object.create(null),${o6})` : "Object.create(null)" : o6;
    }
  }
  Array.from(n4).filter((e8) => e8[1] > 1).sort((e8, t5) => t5[1] - e8[1]).forEach((e8, t5) => {
    s3.set(e8[0], function(e9) {
      let t6 = "";
      do {
        t6 = v2[e9 % v2.length] + t6, e9 = ~~(e9 / v2.length) - 1;
      } while (e9 >= 0);
      return b.test(t6) ? `${t6}0` : t6;
    }(t5));
  });
  const i4 = stringify3(e7);
  if (s3.size) {
    const e8 = [], t5 = [], n5 = [];
    return s3.forEach((r4, s4) => {
      if (e8.push(r4), o5.has(s4))
        return void n5.push(o5.get(s4));
      if (is_primitive(s4))
        return void n5.push(stringify_primitive$1(s4));
      switch (get_type(s4)) {
        case "Number":
        case "String":
        case "Boolean":
          n5.push(`Object(${stringify3(s4.valueOf())})`);
          break;
        case "RegExp":
          n5.push(s4.toString());
          break;
        case "Date":
          n5.push(`new Date(${s4.getTime()})`);
          break;
        case "Array":
          n5.push(`Array(${s4.length})`), s4.forEach((e9, n6) => {
            t5.push(`${r4}[${n6}]=${stringify3(e9)}`);
          });
          break;
        case "Set":
          n5.push("new Set"), t5.push(`${r4}.${Array.from(s4).map((e9) => `add(${stringify3(e9)})`).join(".")}`);
          break;
        case "Map":
          n5.push("new Map"), t5.push(`${r4}.${Array.from(s4).map(([e9, t6]) => `set(${stringify3(e9)}, ${stringify3(t6)})`).join(".")}`);
          break;
        default:
          n5.push(null === Object.getPrototypeOf(s4) ? "Object.create(null)" : "{}"), Object.keys(s4).forEach((e9) => {
            t5.push(`${r4}${function(e10) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e10) ? `.${e10}` : `[${escape_unsafe_chars(JSON.stringify(e10))}]`;
            }(e9)}=${stringify3(s4[e9])}`);
          });
      }
    }), t5.push(`return ${i4}`), `(function(${e8.join(",")}){${t5.join(";")}}(${n5.join(",")}))`;
  }
  return i4;
}
function escape_unsafe_char(e7) {
  return m[e7] || e7;
}
function escape_unsafe_chars(e7) {
  return e7.replace(_2, escape_unsafe_char);
}
function stringify_primitive$1(e7) {
  if ("string" == typeof e7)
    return stringify_string(e7);
  if (void 0 === e7)
    return "void 0";
  if (0 === e7 && 1 / e7 < 0)
    return "-0";
  const t4 = String(e7);
  return "number" == typeof e7 ? t4.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e7 ? e7 + "n" : t4;
}
function stringify(e7, t4) {
  const n4 = [], r3 = /* @__PURE__ */ new Map(), o5 = [];
  for (const e8 in t4)
    o5.push({ key: e8, fn: t4[e8] });
  const s3 = [];
  let i4 = 0;
  const a4 = function flatten(e8) {
    if ("function" == typeof e8)
      throw new DevalueError("Cannot stringify a function", s3);
    if (r3.has(e8))
      return r3.get(e8);
    if (void 0 === e8)
      return k;
    if (Number.isNaN(e8))
      return w2;
    if (e8 === 1 / 0)
      return S;
    if (e8 === -1 / 0)
      return C;
    if (0 === e8 && 1 / e8 < 0)
      return x;
    const t5 = i4++;
    r3.set(e8, t5);
    for (const { key: r4, fn: s4 } of o5) {
      const o6 = s4(e8);
      if (o6)
        return n4[t5] = `["${r4}",${flatten(o6)}]`, t5;
    }
    let a5 = "";
    if (is_primitive(e8))
      a5 = stringify_primitive(e8);
    else {
      switch (get_type(e8)) {
        case "Number":
        case "String":
        case "Boolean":
          a5 = `["Object",${stringify_primitive(e8)}]`;
          break;
        case "BigInt":
          a5 = `["BigInt",${e8}]`;
          break;
        case "Date":
          a5 = `["Date","${!isNaN(e8.getDate()) ? e8.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: t6, flags: n5 } = e8;
          a5 = n5 ? `["RegExp",${stringify_string(t6)},"${n5}"]` : `["RegExp",${stringify_string(t6)}]`;
          break;
        case "Array":
          a5 = "[";
          for (let t7 = 0; t7 < e8.length; t7 += 1)
            t7 > 0 && (a5 += ","), t7 in e8 ? (s3.push(`[${t7}]`), a5 += flatten(e8[t7]), s3.pop()) : a5 += R;
          a5 += "]";
          break;
        case "Set":
          a5 = '["Set"';
          for (const t7 of e8)
            a5 += `,${flatten(t7)}`;
          a5 += "]";
          break;
        case "Map":
          a5 = '["Map"';
          for (const [t7, n6] of e8)
            s3.push(`.get(${is_primitive(t7) ? stringify_primitive(t7) : "..."})`), a5 += `,${flatten(t7)},${flatten(n6)}`, s3.pop();
          a5 += "]";
          break;
        default:
          if (!is_plain_object(e8))
            throw new DevalueError("Cannot stringify arbitrary non-POJOs", s3);
          if (Object.getOwnPropertySymbols(e8).length > 0)
            throw new DevalueError("Cannot stringify POJOs with symbolic keys", s3);
          if (null === Object.getPrototypeOf(e8)) {
            a5 = '["null"';
            for (const t7 in e8)
              s3.push(`.${t7}`), a5 += `,${stringify_string(t7)},${flatten(e8[t7])}`, s3.pop();
            a5 += "]";
          } else {
            a5 = "{";
            let t7 = false;
            for (const n6 in e8)
              t7 && (a5 += ","), t7 = true, s3.push(`.${n6}`), a5 += `${stringify_string(n6)}:${flatten(e8[n6])}`, s3.pop();
            a5 += "}";
          }
      }
    }
    return n4[t5] = a5, t5;
  }(e7);
  return a4 < 0 ? `${a4}` : `[${n4.join(",")}]`;
}
function stringify_primitive(e7) {
  const t4 = typeof e7;
  return "string" === t4 ? stringify_string(e7) : e7 instanceof String ? stringify_string(e7.toString()) : void 0 === e7 ? k.toString() : 0 === e7 && 1 / e7 < 0 ? x.toString() : "bigint" === t4 ? `["BigInt","${e7}"]` : String(e7);
}
function makeMap(e7, t4) {
  const n4 = new Set(e7.split(","));
  return (e8) => n4.has(e8);
}
function normalizeStyle(e7) {
  if (E2(e7)) {
    const t4 = {};
    for (let n4 = 0; n4 < e7.length; n4++) {
      const r3 = e7[n4], o5 = isString(r3) ? parseStringStyle(r3) : normalizeStyle(r3);
      if (o5)
        for (const e8 in o5)
          t4[e8] = o5[e8];
    }
    return t4;
  }
  if (isString(e7) || isObject(e7))
    return e7;
}
function parseStringStyle(e7) {
  const t4 = {};
  return e7.replace(z, "").split(D).forEach((e8) => {
    if (e8) {
      const n4 = e8.split(U);
      n4.length > 1 && (t4[n4[0].trim()] = n4[1].trim());
    }
  }), t4;
}
function normalizeClass(e7) {
  let t4 = "";
  if (isString(e7))
    t4 = e7;
  else if (E2(e7))
    for (let n4 = 0; n4 < e7.length; n4++) {
      const r3 = normalizeClass(e7[n4]);
      r3 && (t4 += r3 + " ");
    }
  else if (isObject(e7))
    for (const n4 in e7)
      e7[n4] && (t4 += n4 + " ");
  return t4.trim();
}
function includeBooleanAttr(e7) {
  return !!e7 || "" === e7;
}
function escapeHtml$1(e7) {
  const t4 = "" + e7, n4 = Y.exec(t4);
  if (!n4)
    return t4;
  let r3, o5, s3 = "", i4 = 0;
  for (o5 = n4.index; o5 < t4.length; o5++) {
    switch (t4.charCodeAt(o5)) {
      case 34:
        r3 = "&quot;";
        break;
      case 38:
        r3 = "&amp;";
        break;
      case 39:
        r3 = "&#39;";
        break;
      case 60:
        r3 = "&lt;";
        break;
      case 62:
        r3 = "&gt;";
        break;
      default:
        continue;
    }
    i4 !== o5 && (s3 += t4.slice(i4, o5)), i4 = o5 + 1, s3 += r3;
  }
  return i4 !== o5 ? s3 + t4.slice(i4, o5) : s3;
}
function effectScope(e7) {
  return new EffectScope(e7);
}
function triggerComputed(e7) {
  return e7.value;
}
function preCleanupEffect(e7) {
  e7._trackId++, e7._depsLength = 0;
}
function postCleanupEffect(e7) {
  if (e7.deps.length > e7._depsLength) {
    for (let t4 = e7._depsLength; t4 < e7.deps.length; t4++)
      cleanupDepEffect(e7.deps[t4], e7);
    e7.deps.length = e7._depsLength;
  }
}
function cleanupDepEffect(e7, t4) {
  const n4 = e7.get(t4);
  void 0 !== n4 && t4._trackId !== n4 && (e7.delete(t4), 0 === e7.size && e7.cleanup());
}
function pauseTracking() {
  oe.push(ne), ne = false;
}
function resetTracking() {
  const e7 = oe.pop();
  ne = void 0 === e7 || e7;
}
function pauseScheduling() {
  re++;
}
function resetScheduling() {
  for (re--; !re && se.length; )
    se.shift()();
}
function trackEffect(e7, t4, n4) {
  if (t4.get(e7) !== e7._trackId) {
    t4.set(e7, e7._trackId);
    const n5 = e7.deps[e7._depsLength];
    n5 !== t4 ? (n5 && cleanupDepEffect(n5, e7), e7.deps[e7._depsLength++] = t4) : e7._depsLength++;
  }
}
function triggerEffects(e7, t4, n4) {
  pauseScheduling();
  for (const n5 of e7.keys()) {
    let r3;
    n5._dirtyLevel < t4 && (null != r3 ? r3 : r3 = e7.get(n5) === n5._trackId) && (n5._shouldSchedule || (n5._shouldSchedule = 0 === n5._dirtyLevel), n5._dirtyLevel = t4), n5._shouldSchedule && (null != r3 ? r3 : r3 = e7.get(n5) === n5._trackId) && (n5.trigger(), n5._runnings && !n5.allowRecurse || 2 === n5._dirtyLevel || (n5._shouldSchedule = false, n5.scheduler && se.push(n5.scheduler)));
  }
  resetScheduling();
}
function track(e7, t4, n4) {
  if (ne && te) {
    let t5 = ie.get(e7);
    t5 || ie.set(e7, t5 = /* @__PURE__ */ new Map());
    let r3 = t5.get(n4);
    r3 || t5.set(n4, r3 = createDep(() => t5.delete(n4))), trackEffect(te, r3);
  }
}
function trigger(e7, t4, n4, r3, o5, s3) {
  const i4 = ie.get(e7);
  if (!i4)
    return;
  let a4 = [];
  if ("clear" === t4)
    a4 = [...i4.values()];
  else if ("length" === n4 && E2(e7)) {
    const e8 = Number(r3);
    i4.forEach((t5, n5) => {
      ("length" === n5 || !isSymbol(n5) && n5 >= e8) && a4.push(t5);
    });
  } else
    switch (void 0 !== n4 && a4.push(i4.get(n4)), t4) {
      case "add":
        E2(e7) ? isIntegerKey(n4) && a4.push(i4.get("length")) : (a4.push(i4.get(ae)), isMap(e7) && a4.push(i4.get(le)));
        break;
      case "delete":
        E2(e7) || (a4.push(i4.get(ae)), isMap(e7) && a4.push(i4.get(le)));
        break;
      case "set":
        isMap(e7) && a4.push(i4.get(ae));
    }
  pauseScheduling();
  for (const e8 of a4)
    e8 && triggerEffects(e8, 4);
  resetScheduling();
}
function createArrayInstrumentations() {
  const e7 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t4) => {
    e7[t4] = function(...e8) {
      const n4 = toRaw(this);
      for (let e9 = 0, t5 = this.length; e9 < t5; e9++)
        track(n4, 0, e9 + "");
      const r3 = n4[t4](...e8);
      return -1 === r3 || false === r3 ? n4[t4](...e8.map(toRaw)) : r3;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t4) => {
    e7[t4] = function(...e8) {
      pauseTracking(), pauseScheduling();
      const n4 = toRaw(this)[t4].apply(this, e8);
      return resetScheduling(), resetTracking(), n4;
    };
  }), e7;
}
function hasOwnProperty(e7) {
  isSymbol(e7) || (e7 = String(e7));
  const t4 = toRaw(this);
  return track(t4, 0, e7), t4.hasOwnProperty(e7);
}
function get(e7, t4, n4 = false, r3 = false) {
  const o5 = toRaw(e7 = e7.__v_raw), s3 = toRaw(t4);
  n4 || (hasChanged(t4, s3) && track(o5, 0, t4), track(o5, 0, s3));
  const { has: i4 } = getProto(o5), a4 = r3 ? toShallow : n4 ? toReadonly : toReactive;
  return i4.call(o5, t4) ? a4(e7.get(t4)) : i4.call(o5, s3) ? a4(e7.get(s3)) : void (e7 !== o5 && e7.get(t4));
}
function has(e7, t4 = false) {
  const n4 = this.__v_raw, r3 = toRaw(n4), o5 = toRaw(e7);
  return t4 || (hasChanged(e7, o5) && track(r3, 0, e7), track(r3, 0, o5)), e7 === o5 ? n4.has(e7) : n4.has(e7) || n4.has(o5);
}
function size(e7, t4 = false) {
  return e7 = e7.__v_raw, !t4 && track(toRaw(e7), 0, ae), Reflect.get(e7, "size", e7);
}
function add(e7) {
  e7 = toRaw(e7);
  const t4 = toRaw(this);
  return getProto(t4).has.call(t4, e7) || (t4.add(e7), trigger(t4, "add", e7, e7)), this;
}
function set(e7, t4) {
  t4 = toRaw(t4);
  const n4 = toRaw(this), { has: r3, get: o5 } = getProto(n4);
  let s3 = r3.call(n4, e7);
  s3 || (e7 = toRaw(e7), s3 = r3.call(n4, e7));
  const i4 = o5.call(n4, e7);
  return n4.set(e7, t4), s3 ? hasChanged(t4, i4) && trigger(n4, "set", e7, t4) : trigger(n4, "add", e7, t4), this;
}
function deleteEntry(e7) {
  const t4 = toRaw(this), { has: n4, get: r3 } = getProto(t4);
  let o5 = n4.call(t4, e7);
  o5 || (e7 = toRaw(e7), o5 = n4.call(t4, e7)), r3 && r3.call(t4, e7);
  const s3 = t4.delete(e7);
  return o5 && trigger(t4, "delete", e7, void 0), s3;
}
function clear() {
  const e7 = toRaw(this), t4 = 0 !== e7.size, n4 = e7.clear();
  return t4 && trigger(e7, "clear", void 0, void 0), n4;
}
function createForEach(e7, t4) {
  return function(n4, r3) {
    const o5 = this, s3 = o5.__v_raw, i4 = toRaw(s3), a4 = t4 ? toShallow : e7 ? toReadonly : toReactive;
    return !e7 && track(i4, 0, ae), s3.forEach((e8, t5) => n4.call(r3, a4(e8), a4(t5), o5));
  };
}
function createIterableMethod(e7, t4, n4) {
  return function(...r3) {
    const o5 = this.__v_raw, s3 = toRaw(o5), i4 = isMap(s3), a4 = "entries" === e7 || e7 === Symbol.iterator && i4, l4 = "keys" === e7 && i4, c2 = o5[e7](...r3), u3 = n4 ? toShallow : t4 ? toReadonly : toReactive;
    return !t4 && track(s3, 0, l4 ? le : ae), { next() {
      const { value: e8, done: t5 } = c2.next();
      return t5 ? { value: e8, done: t5 } : { value: a4 ? [u3(e8[0]), u3(e8[1])] : u3(e8), done: t5 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function createReadonlyMethod(e7) {
  return function(...t4) {
    return "delete" !== e7 && ("clear" === e7 ? void 0 : this);
  };
}
function createInstrumentations() {
  const e7 = { get(e8) {
    return get(this, e8);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, false) }, t4 = { get(e8) {
    return get(this, e8, false, true);
  }, get size() {
    return size(this);
  }, has, add, set, delete: deleteEntry, clear, forEach: createForEach(false, true) }, n4 = { get(e8) {
    return get(this, e8, true);
  }, get size() {
    return size(this, true);
  }, has(e8) {
    return has.call(this, e8, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, false) }, r3 = { get(e8) {
    return get(this, e8, true, true);
  }, get size() {
    return size(this, true);
  }, has(e8) {
    return has.call(this, e8, true);
  }, add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear"), forEach: createForEach(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o5) => {
    e7[o5] = createIterableMethod(o5, false, false), n4[o5] = createIterableMethod(o5, true, false), t4[o5] = createIterableMethod(o5, false, true), r3[o5] = createIterableMethod(o5, true, true);
  }), [e7, n4, t4, r3];
}
function createInstrumentationGetter(e7, t4) {
  const n4 = t4 ? e7 ? ve : ye2 : e7 ? me : ge;
  return (t5, r3, o5) => "__v_isReactive" === r3 ? !e7 : "__v_isReadonly" === r3 ? e7 : "__v_raw" === r3 ? t5 : Reflect.get(hasOwn(n4, r3) && r3 in t5 ? n4 : t5, r3, o5);
}
function reactive(e7) {
  return isReadonly(e7) ? e7 : createReactiveObject(e7, false, fe, _e, Re);
}
function readonly(e7) {
  return createReactiveObject(e7, true, de2, ke, Se);
}
function createReactiveObject(e7, t4, n4, r3, o5) {
  if (!isObject(e7))
    return e7;
  if (e7.__v_raw && (!t4 || !e7.__v_isReactive))
    return e7;
  const s3 = o5.get(e7);
  if (s3)
    return s3;
  const i4 = (a4 = e7).__v_skip || !Object.isExtensible(a4) ? 0 : function(e8) {
    switch (e8) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(toRawType(a4));
  var a4;
  if (0 === i4)
    return e7;
  const l4 = new Proxy(e7, 2 === i4 ? r3 : n4);
  return o5.set(e7, l4), l4;
}
function isReactive(e7) {
  return isReadonly(e7) ? isReactive(e7.__v_raw) : !(!e7 || !e7.__v_isReactive);
}
function isReadonly(e7) {
  return !(!e7 || !e7.__v_isReadonly);
}
function isShallow(e7) {
  return !(!e7 || !e7.__v_isShallow);
}
function isProxy(e7) {
  return !!e7 && !!e7.__v_raw;
}
function toRaw(e7) {
  const t4 = e7 && e7.__v_raw;
  return t4 ? toRaw(t4) : e7;
}
function trackRefValue(e7) {
  var t4;
  ne && te && (e7 = toRaw(e7), trackEffect(te, null != (t4 = e7.dep) ? t4 : e7.dep = createDep(() => e7.dep = void 0, e7 instanceof ComputedRefImpl ? e7 : void 0)));
}
function triggerRefValue(e7, t4 = 4, n4) {
  const r3 = (e7 = toRaw(e7)).dep;
  r3 && triggerEffects(r3, t4);
}
function isRef(e7) {
  return !(!e7 || true !== e7.__v_isRef);
}
function ref(e7) {
  return function(e8, t4) {
    if (isRef(e8))
      return e8;
    return new RefImpl(e8, t4);
  }(e7, false);
}
function unref(e7) {
  return isRef(e7) ? e7.value : e7;
}
function proxyRefs(e7) {
  return isReactive(e7) ? e7 : new Proxy(e7, xe);
}
function toRef(e7, t4, n4) {
  return isRef(e7) ? e7 : isFunction(e7) ? new GetterRefImpl(e7) : isObject(e7) && arguments.length > 1 ? function(e8, t5, n5) {
    const r3 = e8[t5];
    return isRef(r3) ? r3 : new ObjectRefImpl(e8, t5, n5);
  }(e7, t4, n4) : ref(e7);
}
function callWithErrorHandling(e7, t4, n4, r3) {
  try {
    return r3 ? e7(...r3) : e7();
  } catch (e8) {
    handleError(e8, t4, n4);
  }
}
function callWithAsyncErrorHandling(e7, t4, n4, r3) {
  if (isFunction(e7)) {
    const o5 = callWithErrorHandling(e7, t4, n4, r3);
    return o5 && isPromise(o5) && o5.catch((e8) => {
      handleError(e8, t4, n4);
    }), o5;
  }
  if (E2(e7)) {
    const o5 = [];
    for (let s3 = 0; s3 < e7.length; s3++)
      o5.push(callWithAsyncErrorHandling(e7[s3], t4, n4, r3));
    return o5;
  }
}
function handleError(e7, t4, n4, r3 = true) {
  t4 && t4.vnode;
  if (t4) {
    let r4 = t4.parent;
    const o5 = t4.proxy, s3 = `https://vuejs.org/error-reference/#runtime-${n4}`;
    for (; r4; ) {
      const t5 = r4.ec;
      if (t5) {
        for (let n5 = 0; n5 < t5.length; n5++)
          if (false === t5[n5](e7, o5, s3))
            return;
      }
      r4 = r4.parent;
    }
    const i4 = t4.appContext.config.errorHandler;
    if (i4)
      return pauseTracking(), callWithErrorHandling(i4, null, 10, [e7, o5, s3]), void resetTracking();
  }
  !function(e8, t5, n5, r4 = true) {
    console.error(e8);
  }(e7, 0, 0, r3);
}
function nextTick(e7) {
  const t4 = Ie || He;
  return e7 ? t4.then(this ? e7.bind(this) : e7) : t4;
}
function queueJob(e7) {
  Oe.length && Oe.includes(e7, Ae2 && e7.allowRecurse ? Te + 1 : Te) || (null == e7.id ? Oe.push(e7) : Oe.splice(function(e8) {
    let t4 = Te + 1, n4 = Oe.length;
    for (; t4 < n4; ) {
      const r3 = t4 + n4 >>> 1, o5 = Oe[r3], s3 = getId(o5);
      s3 < e8 || s3 === e8 && o5.pre ? t4 = r3 + 1 : n4 = r3;
    }
    return t4;
  }(e7.id), 0, e7), queueFlush());
}
function queueFlush() {
  Ae2 || $e || ($e = true, Ie = He.then(flushJobs));
}
function flushPreFlushCbs(e7, t4, n4 = Ae2 ? Te + 1 : 0) {
  for (; n4 < Oe.length; n4++) {
    const t5 = Oe[n4];
    if (t5 && t5.pre) {
      if (e7 && t5.id !== e7.uid)
        continue;
      Oe.splice(n4, 1), n4--, t5();
    }
  }
}
function flushPostFlushCbs(e7) {
  if (Ee.length) {
    const e8 = [...new Set(Ee)].sort((e9, t4) => getId(e9) - getId(t4));
    if (Ee.length = 0, Pe2)
      return void Pe2.push(...e8);
    for (Pe2 = e8, je = 0; je < Pe2.length; je++)
      Pe2[je]();
    Pe2 = null, je = 0;
  }
}
function flushJobs(e7) {
  $e = false, Ae2 = true, Oe.sort(comparator);
  try {
    for (Te = 0; Te < Oe.length; Te++) {
      const e8 = Oe[Te];
      e8 && false !== e8.active && callWithErrorHandling(e8, null, 14);
    }
  } finally {
    Te = 0, Oe.length = 0, flushPostFlushCbs(), Ae2 = false, Ie = null, (Oe.length || Ee.length) && flushJobs();
  }
}
function emit(e7, t4, ...n4) {
  if (e7.isUnmounted)
    return;
  const r3 = e7.vnode.props || A2;
  let o5 = n4;
  const s3 = t4.startsWith("update:"), i4 = s3 && t4.slice(7);
  if (i4 && i4 in r3) {
    const e8 = `${"modelValue" === i4 ? "model" : i4}Modifiers`, { number: t5, trim: s4 } = r3[e8] || A2;
    s4 && (o5 = n4.map((e9) => isString(e9) ? e9.trim() : e9)), t5 && (o5 = n4.map(looseToNumber));
  }
  let a4, l4 = r3[a4 = V(t4)] || r3[a4 = V(I(t4))];
  !l4 && s3 && (l4 = r3[a4 = V(N2(t4))]), l4 && callWithAsyncErrorHandling(l4, e7, 6, o5);
  const c2 = r3[a4 + "Once"];
  if (c2) {
    if (e7.emitted) {
      if (e7.emitted[a4])
        return;
    } else
      e7.emitted = {};
    e7.emitted[a4] = true, callWithAsyncErrorHandling(c2, e7, 6, o5);
  }
}
function normalizeEmitsOptions(e7, t4, n4 = false) {
  const r3 = t4.emitsCache, o5 = r3.get(e7);
  if (void 0 !== o5)
    return o5;
  const s3 = e7.emits;
  let i4 = {}, a4 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e7)) {
    const extendEmits = (e8) => {
      const n5 = normalizeEmitsOptions(e8, t4, true);
      n5 && (a4 = true, O2(i4, n5));
    };
    !n4 && t4.mixins.length && t4.mixins.forEach(extendEmits), e7.extends && extendEmits(e7.extends), e7.mixins && e7.mixins.forEach(extendEmits);
  }
  return s3 || a4 ? (E2(s3) ? s3.forEach((e8) => i4[e8] = null) : O2(i4, s3), isObject(e7) && r3.set(e7, i4), i4) : (isObject(e7) && r3.set(e7, null), null);
}
function isEmitListener(e7, t4) {
  return !(!e7 || !isOn(t4)) && (t4 = t4.slice(2).replace(/Once$/, ""), hasOwn(e7, t4[0].toLowerCase() + t4.slice(1)) || hasOwn(e7, N2(t4)) || hasOwn(e7, t4));
}
function setCurrentRenderingInstance$1(e7) {
  const t4 = Me;
  return Me = e7, Ne = e7 && e7.type.__scopeId || null, t4;
}
function withCtx(e7, t4 = Me, n4) {
  if (!t4)
    return e7;
  if (e7._n)
    return e7;
  const renderFnWithContext = (...n5) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r3 = setCurrentRenderingInstance$1(t4);
    let o5;
    try {
      o5 = e7(...n5);
    } finally {
      setCurrentRenderingInstance$1(r3), renderFnWithContext._d && setBlockTracking(1);
    }
    return o5;
  };
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function renderComponentRoot$1(e7) {
  const { type: t4, vnode: n4, proxy: r3, withProxy: o5, propsOptions: [s3], slots: i4, attrs: a4, emit: l4, render: c2, renderCache: u3, props: p2, data: f2, setupState: d3, ctx: g2, inheritAttrs: m3 } = e7, y3 = setCurrentRenderingInstance$1(e7);
  let v4, _4;
  try {
    if (4 & n4.shapeFlag) {
      const e8 = o5 || r3, t5 = e8;
      v4 = normalizeVNode$1(c2.call(t5, e8, u3, p2, d3, f2, g2)), _4 = a4;
    } else {
      const e8 = t4;
      0, v4 = normalizeVNode$1(e8.length > 1 ? e8(p2, { attrs: a4, slots: i4, emit: l4 }) : e8(p2, null)), _4 = t4.props ? a4 : getFunctionalFallthrough(a4);
    }
  } catch (t5) {
    handleError(t5, e7, 1), v4 = createVNode(it2);
  }
  let b3 = v4;
  if (_4 && false !== m3) {
    const e8 = Object.keys(_4), { shapeFlag: t5 } = b3;
    e8.length && 7 & t5 && (s3 && e8.some(isModelListener) && (_4 = filterModelListeners(_4, s3)), b3 = cloneVNode(b3, _4));
  }
  return n4.dirs && (b3 = cloneVNode(b3), b3.dirs = b3.dirs ? b3.dirs.concat(n4.dirs) : n4.dirs), n4.transition && (b3.transition = n4.transition), v4 = b3, setCurrentRenderingInstance$1(y3), v4;
}
function hasPropsChanged(e7, t4, n4) {
  const r3 = Object.keys(t4);
  if (r3.length !== Object.keys(e7).length)
    return true;
  for (let o5 = 0; o5 < r3.length; o5++) {
    const s3 = r3[o5];
    if (t4[s3] !== e7[s3] && !isEmitListener(n4, s3))
      return true;
  }
  return false;
}
function resolveComponent(e7, t4) {
  return resolveAsset(Le, e7, true, t4) || e7;
}
function resolveDynamicComponent(e7) {
  return isString(e7) ? resolveAsset(Le, e7, false) || e7 : e7 || Ve;
}
function resolveAsset(e7, t4, n4 = true, r3 = false) {
  const o5 = Me || ft2;
  if (o5) {
    const n5 = o5.type;
    {
      const e8 = getComponentName(n5, false);
      if (e8 && (e8 === t4 || e8 === I(t4) || e8 === L(I(t4))))
        return n5;
    }
    const s3 = resolve(o5[e7] || n5[e7], t4) || resolve(o5.appContext[e7], t4);
    return !s3 && r3 ? n5 : s3;
  }
}
function resolve(e7, t4) {
  return e7 && (e7[t4] || e7[I(t4)] || e7[L(I(t4))]);
}
function watchEffect(e7, t4) {
  return doWatch(e7, null, t4);
}
function watch(e7, t4, n4) {
  return doWatch(e7, t4, n4);
}
function doWatch(e7, t4, { immediate: n4, deep: r3, flush: o5, once: s3, onTrack: i4, onTrigger: a4 } = A2) {
  if (t4 && s3) {
    const e8 = t4;
    t4 = (...t5) => {
      e8(...t5), unwatch();
    };
  }
  const l4 = ft2, reactiveGetter = (e8) => true === r3 ? e8 : traverse(e8, false === r3 ? 1 : void 0);
  let c2, u3, p2 = false, f2 = false;
  if (isRef(e7) ? (c2 = () => e7.value, p2 = isShallow(e7)) : isReactive(e7) ? (c2 = () => reactiveGetter(e7), p2 = true) : E2(e7) ? (f2 = true, p2 = e7.some((e8) => isReactive(e8) || isShallow(e8)), c2 = () => e7.map((e8) => isRef(e8) ? e8.value : isReactive(e8) ? reactiveGetter(e8) : isFunction(e8) ? callWithErrorHandling(e8, l4, 2) : void 0)) : c2 = isFunction(e7) ? t4 ? () => callWithErrorHandling(e7, l4, 2) : () => (u3 && u3(), callWithAsyncErrorHandling(e7, l4, 3, [onCleanup])) : NOOP, t4 && r3) {
    const e8 = c2;
    c2 = () => traverse(e8());
  }
  let d3, onCleanup = (e8) => {
    u3 = y3.onStop = () => {
      callWithErrorHandling(e8, l4, 4), u3 = y3.onStop = void 0;
    };
  };
  if (mt) {
    if (onCleanup = NOOP, t4 ? n4 && callWithAsyncErrorHandling(t4, l4, 3, [c2(), f2 ? [] : void 0, onCleanup]) : c2(), "sync" !== o5)
      return NOOP;
    {
      const e8 = useSSRContext();
      d3 = e8.__watcherHandles || (e8.__watcherHandles = []);
    }
  }
  let g2 = f2 ? new Array(e7.length).fill(De) : De;
  const job = () => {
    if (y3.active && y3.dirty)
      if (t4) {
        const e8 = y3.run();
        (r3 || p2 || (f2 ? e8.some((e9, t5) => hasChanged(e9, g2[t5])) : hasChanged(e8, g2))) && (u3 && u3(), callWithAsyncErrorHandling(t4, l4, 3, [e8, g2 === De ? void 0 : f2 && g2[0] === De ? [] : g2, onCleanup]), g2 = e8);
      } else
        y3.run();
  };
  let m3;
  job.allowRecurse = !!t4, "sync" === o5 ? m3 = job : "post" === o5 ? m3 = () => queuePostRenderEffect(job, l4 && l4.suspense) : (job.pre = true, l4 && (job.id = l4.uid), m3 = () => queueJob(job));
  const y3 = new ReactiveEffect(c2, NOOP, m3), v4 = ee, unwatch = () => {
    y3.stop(), v4 && remove(v4.effects, y3);
  };
  return t4 ? n4 ? job() : g2 = y3.run() : "post" === o5 ? queuePostRenderEffect(y3.run.bind(y3), l4 && l4.suspense) : y3.run(), d3 && d3.push(unwatch), unwatch;
}
function instanceWatch(e7, t4, n4) {
  const r3 = this.proxy, o5 = isString(e7) ? e7.includes(".") ? createPathGetter(r3, e7) : () => r3[e7] : e7.bind(r3, r3);
  let s3;
  isFunction(t4) ? s3 = t4 : (s3 = t4.handler, n4 = t4);
  const i4 = setCurrentInstance(this), a4 = doWatch(o5, s3.bind(r3), n4);
  return i4(), a4;
}
function createPathGetter(e7, t4) {
  const n4 = t4.split(".");
  return () => {
    let t5 = e7;
    for (let e8 = 0; e8 < n4.length && t5; e8++)
      t5 = t5[n4[e8]];
    return t5;
  };
}
function traverse(e7, t4, n4 = 0, r3) {
  if (!isObject(e7) || e7.__v_skip)
    return e7;
  if (t4 && t4 > 0) {
    if (n4 >= t4)
      return e7;
    n4++;
  }
  if ((r3 = r3 || /* @__PURE__ */ new Set()).has(e7))
    return e7;
  if (r3.add(e7), isRef(e7))
    traverse(e7.value, t4, n4, r3);
  else if (E2(e7))
    for (let o5 = 0; o5 < e7.length; o5++)
      traverse(e7[o5], t4, n4, r3);
  else if (isSet(e7) || isMap(e7))
    e7.forEach((e8) => {
      traverse(e8, t4, n4, r3);
    });
  else if (isPlainObject2(e7))
    for (const o5 in e7)
      traverse(e7[o5], t4, n4, r3);
  return e7;
}
function invokeDirectiveHook(e7, t4, n4, r3) {
  const o5 = e7.dirs, s3 = t4 && t4.dirs;
  for (let i4 = 0; i4 < o5.length; i4++) {
    const a4 = o5[i4];
    s3 && (a4.oldValue = s3[i4].value);
    let l4 = a4.dir[r3];
    l4 && (pauseTracking(), callWithAsyncErrorHandling(l4, n4, 8, [e7.el, a4, e7, t4]), resetTracking());
  }
}
function defineComponent(e7, t4) {
  return isFunction(e7) ? (() => O2({ name: e7.name }, t4, { setup: e7 }))() : e7;
}
function defineAsyncComponent(e7) {
  isFunction(e7) && (e7 = { loader: e7 });
  const { loader: t4, loadingComponent: n4, errorComponent: r3, delay: o5 = 200, timeout: s3, suspensible: i4 = true, onError: a4 } = e7;
  let l4, c2 = null, u3 = 0;
  const load = () => {
    let e8;
    return c2 || (e8 = c2 = t4().catch((e9) => {
      if (e9 = e9 instanceof Error ? e9 : new Error(String(e9)), a4)
        return new Promise((t5, n5) => {
          a4(e9, () => t5((u3++, c2 = null, load())), () => n5(e9), u3 + 1);
        });
      throw e9;
    }).then((t5) => e8 !== c2 && c2 ? c2 : (t5 && (t5.__esModule || "Module" === t5[Symbol.toStringTag]) && (t5 = t5.default), l4 = t5, t5)));
  };
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, get __asyncResolved() {
    return l4;
  }, setup() {
    const e8 = ft2;
    if (l4)
      return () => createInnerComp(l4, e8);
    const onError = (t6) => {
      c2 = null, handleError(t6, e8, 13, !r3);
    };
    if (i4 && e8.suspense || mt)
      return load().then((t6) => () => createInnerComp(t6, e8)).catch((e9) => (onError(e9), () => r3 ? createVNode(r3, { error: e9 }) : null));
    const t5 = ref(false), a5 = ref(), u4 = ref(!!o5);
    return o5 && setTimeout(() => {
      u4.value = false;
    }, o5), null != s3 && setTimeout(() => {
      if (!t5.value && !a5.value) {
        const e9 = new Error(`Async component timed out after ${s3}ms.`);
        onError(e9), a5.value = e9;
      }
    }, s3), load().then(() => {
      t5.value = true, e8.parent && isKeepAlive(e8.parent.vnode) && (e8.parent.effect.dirty = true, queueJob(e8.parent.update));
    }).catch((e9) => {
      onError(e9), a5.value = e9;
    }), () => t5.value && l4 ? createInnerComp(l4, e8) : a5.value && r3 ? createVNode(r3, { error: a5.value }) : n4 && !u4.value ? createVNode(n4) : void 0;
  } });
}
function createInnerComp(e7, t4) {
  const { ref: n4, props: r3, children: o5, ce: s3 } = t4.vnode, i4 = createVNode(e7, r3, o5);
  return i4.ref = n4, i4.ce = s3, delete t4.vnode.ce, i4;
}
function onActivated(e7, t4) {
  registerKeepAliveHook(e7, "a", t4);
}
function onDeactivated(e7, t4) {
  registerKeepAliveHook(e7, "da", t4);
}
function registerKeepAliveHook(e7, t4, n4 = ft2) {
  const r3 = e7.__wdc || (e7.__wdc = () => {
    let t5 = n4;
    for (; t5; ) {
      if (t5.isDeactivated)
        return;
      t5 = t5.parent;
    }
    return e7();
  });
  if (injectHook(t4, r3, n4), n4) {
    let e8 = n4.parent;
    for (; e8 && e8.parent; )
      isKeepAlive(e8.parent.vnode) && injectToKeepAliveRoot(r3, t4, n4, e8), e8 = e8.parent;
  }
}
function injectToKeepAliveRoot(e7, t4, n4, r3) {
  const o5 = injectHook(t4, e7, r3, true);
  Je(() => {
    remove(r3[t4], o5);
  }, n4);
}
function injectHook(e7, t4, n4 = ft2, r3 = false) {
  if (n4) {
    const o5 = n4[e7] || (n4[e7] = []), s3 = t4.__weh || (t4.__weh = (...r4) => {
      if (n4.isUnmounted)
        return;
      pauseTracking();
      const o6 = setCurrentInstance(n4), s4 = callWithAsyncErrorHandling(t4, n4, e7, r4);
      return o6(), resetTracking(), s4;
    });
    return r3 ? o5.unshift(s3) : o5.push(s3), s3;
  }
}
function onErrorCaptured(e7, t4 = ft2) {
  injectHook("ec", e7, t4);
}
function normalizePropsOrEmits(e7) {
  return E2(e7) ? e7.reduce((e8, t4) => (e8[t4] = null, e8), {}) : e7;
}
function applyOptions(e7) {
  const t4 = resolveMergedOptions(e7), n4 = e7.proxy, r3 = e7.ctx;
  Qe = false, t4.beforeCreate && callHook(t4.beforeCreate, e7, "bc");
  const { data: o5, computed: s3, methods: i4, watch: a4, provide: l4, inject: c2, created: u3, beforeMount: p2, mounted: f2, beforeUpdate: d3, updated: g2, activated: m3, deactivated: y3, beforeDestroy: v4, beforeUnmount: _4, destroyed: b3, unmounted: k3, render: R3, renderTracked: w4, renderTriggered: S3, errorCaptured: C3, serverPrefetch: x3, expose: A4, inheritAttrs: $3, components: O4, directives: T3, filters: P3 } = t4;
  if (c2 && function(e8, t5, n5 = NOOP) {
    E2(e8) && (e8 = normalizeInject(e8));
    for (const n6 in e8) {
      const r4 = e8[n6];
      let o6;
      o6 = isObject(r4) ? "default" in r4 ? inject(r4.from || n6, r4.default, true) : inject(r4.from || n6) : inject(r4), isRef(o6) ? Object.defineProperty(t5, n6, { enumerable: true, configurable: true, get: () => o6.value, set: (e9) => o6.value = e9 }) : t5[n6] = o6;
    }
  }(c2, r3, null), i4)
    for (const e8 in i4) {
      const t5 = i4[e8];
      isFunction(t5) && (r3[e8] = t5.bind(n4));
    }
  if (o5) {
    const t5 = o5.call(n4, n4);
    isObject(t5) && (e7.data = reactive(t5));
  }
  if (Qe = true, s3)
    for (const e8 in s3) {
      const t5 = s3[e8], o6 = isFunction(t5) ? t5.bind(n4, n4) : isFunction(t5.get) ? t5.get.bind(n4, n4) : NOOP, i5 = !isFunction(t5) && isFunction(t5.set) ? t5.set.bind(n4) : NOOP, a5 = computed({ get: o6, set: i5 });
      Object.defineProperty(r3, e8, { enumerable: true, configurable: true, get: () => a5.value, set: (e9) => a5.value = e9 });
    }
  if (a4)
    for (const e8 in a4)
      createWatcher(a4[e8], r3, n4, e8);
  if (l4) {
    const e8 = isFunction(l4) ? l4.call(n4) : l4;
    Reflect.ownKeys(e8).forEach((t5) => {
      provide(t5, e8[t5]);
    });
  }
  function registerLifecycleHook(e8, t5) {
    E2(t5) ? t5.forEach((t6) => e8(t6.bind(n4))) : t5 && e8(t5.bind(n4));
  }
  if (u3 && callHook(u3, e7, "c"), registerLifecycleHook(Ue, p2), registerLifecycleHook(ze, f2), registerLifecycleHook(We, d3), registerLifecycleHook(Be, g2), registerLifecycleHook(onActivated, m3), registerLifecycleHook(onDeactivated, y3), registerLifecycleHook(onErrorCaptured, C3), registerLifecycleHook(Ze, w4), registerLifecycleHook(Ke, S3), registerLifecycleHook(qe, _4), registerLifecycleHook(Je, k3), registerLifecycleHook(Ge, x3), E2(A4))
    if (A4.length) {
      const t5 = e7.exposed || (e7.exposed = {});
      A4.forEach((e8) => {
        Object.defineProperty(t5, e8, { get: () => n4[e8], set: (t6) => n4[e8] = t6 });
      });
    } else
      e7.exposed || (e7.exposed = {});
  R3 && e7.render === NOOP && (e7.render = R3), null != $3 && (e7.inheritAttrs = $3), O4 && (e7.components = O4), T3 && (e7.directives = T3);
}
function callHook(e7, t4, n4) {
  callWithAsyncErrorHandling(E2(e7) ? e7.map((e8) => e8.bind(t4.proxy)) : e7.bind(t4.proxy), t4, n4);
}
function createWatcher(e7, t4, n4, r3) {
  const o5 = r3.includes(".") ? createPathGetter(n4, r3) : () => n4[r3];
  if (isString(e7)) {
    const n5 = t4[e7];
    isFunction(n5) && watch(o5, n5);
  } else if (isFunction(e7))
    watch(o5, e7.bind(n4));
  else if (isObject(e7))
    if (E2(e7))
      e7.forEach((e8) => createWatcher(e8, t4, n4, r3));
    else {
      const r4 = isFunction(e7.handler) ? e7.handler.bind(n4) : t4[e7.handler];
      isFunction(r4) && watch(o5, r4, e7);
    }
}
function resolveMergedOptions(e7) {
  const t4 = e7.type, { mixins: n4, extends: r3 } = t4, { mixins: o5, optionsCache: s3, config: { optionMergeStrategies: i4 } } = e7.appContext, a4 = s3.get(t4);
  let l4;
  return a4 ? l4 = a4 : o5.length || n4 || r3 ? (l4 = {}, o5.length && o5.forEach((e8) => mergeOptions(l4, e8, i4, true)), mergeOptions(l4, t4, i4)) : l4 = t4, isObject(t4) && s3.set(t4, l4), l4;
}
function mergeOptions(e7, t4, n4, r3 = false) {
  const { mixins: o5, extends: s3 } = t4;
  s3 && mergeOptions(e7, s3, n4, true), o5 && o5.forEach((t5) => mergeOptions(e7, t5, n4, true));
  for (const o6 in t4)
    if (r3 && "expose" === o6)
      ;
    else {
      const r4 = et2[o6] || n4 && n4[o6];
      e7[o6] = r4 ? r4(e7[o6], t4[o6]) : t4[o6];
    }
  return e7;
}
function mergeDataFn(e7, t4) {
  return t4 ? e7 ? function() {
    return O2(isFunction(e7) ? e7.call(this, this) : e7, isFunction(t4) ? t4.call(this, this) : t4);
  } : t4 : e7;
}
function normalizeInject(e7) {
  if (E2(e7)) {
    const t4 = {};
    for (let n4 = 0; n4 < e7.length; n4++)
      t4[e7[n4]] = e7[n4];
    return t4;
  }
  return e7;
}
function mergeAsArray(e7, t4) {
  return e7 ? [...new Set([].concat(e7, t4))] : t4;
}
function mergeObjectOptions(e7, t4) {
  return e7 ? O2(/* @__PURE__ */ Object.create(null), e7, t4) : t4;
}
function mergeEmitsOrPropsOptions(e7, t4) {
  return e7 ? E2(e7) && E2(t4) ? [.../* @__PURE__ */ new Set([...e7, ...t4])] : O2(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e7), normalizePropsOrEmits(null != t4 ? t4 : {})) : t4;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e7, t4) {
  return function(n4, r3 = null) {
    isFunction(n4) || (n4 = O2({}, n4)), null == r3 || isObject(r3) || (r3 = null);
    const o5 = createAppContext(), s3 = /* @__PURE__ */ new WeakSet();
    let i4 = false;
    const a4 = o5.app = { _uid: tt2++, _component: n4, _props: r3, _container: null, _context: o5, _instance: null, version: vt2, get config() {
      return o5.config;
    }, set config(e8) {
    }, use: (e8, ...t5) => (s3.has(e8) || (e8 && isFunction(e8.install) ? (s3.add(e8), e8.install(a4, ...t5)) : isFunction(e8) && (s3.add(e8), e8(a4, ...t5))), a4), mixin: (e8) => (__VUE_OPTIONS_API__ && (o5.mixins.includes(e8) || o5.mixins.push(e8)), a4), component: (e8, t5) => t5 ? (o5.components[e8] = t5, a4) : o5.components[e8], directive: (e8, t5) => t5 ? (o5.directives[e8] = t5, a4) : o5.directives[e8], mount(s4, l4, c2) {
      if (!i4) {
        const u3 = createVNode(n4, r3);
        return u3.appContext = o5, true === c2 ? c2 = "svg" : false === c2 && (c2 = void 0), l4 && t4 ? t4(u3, s4) : e7(u3, s4, c2), i4 = true, a4._container = s4, s4.__vue_app__ = a4, getExposeProxy(u3.component) || u3.component.proxy;
      }
    }, unmount() {
      i4 && (e7(null, a4._container), delete a4._container.__vue_app__);
    }, provide: (e8, t5) => (o5.provides[e8] = t5, a4), runWithContext(e8) {
      const t5 = nt;
      nt = a4;
      try {
        return e8();
      } finally {
        nt = t5;
      }
    } };
    return a4;
  };
}
function provide(e7, t4) {
  if (ft2) {
    let n4 = ft2.provides;
    const r3 = ft2.parent && ft2.parent.provides;
    r3 === n4 && (n4 = ft2.provides = Object.create(r3)), n4[e7] = t4;
  } else
    ;
}
function inject(e7, t4, n4 = false) {
  const r3 = ft2 || Me;
  if (r3 || nt) {
    const o5 = r3 ? null == r3.parent ? r3.vnode.appContext && r3.vnode.appContext.provides : r3.parent.provides : nt._context.provides;
    if (o5 && e7 in o5)
      return o5[e7];
    if (arguments.length > 1)
      return n4 && isFunction(t4) ? t4.call(r3 && r3.proxy) : t4;
  }
}
function hasInjectionContext() {
  return !!(ft2 || Me || nt);
}
function initProps(e7, t4, n4, r3 = false) {
  const o5 = {}, s3 = createInternalObject();
  e7.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e7, t4, o5, s3);
  for (const t5 in e7.propsOptions[0])
    t5 in o5 || (o5[t5] = void 0);
  n4 ? e7.props = r3 ? o5 : createReactiveObject(o5, false, he, be2, we) : e7.type.props ? e7.props = o5 : e7.props = s3, e7.attrs = s3;
}
function setFullProps(e7, t4, n4, r3) {
  const [o5, s3] = e7.propsOptions;
  let i4, a4 = false;
  if (t4)
    for (let l4 in t4) {
      if (j(l4))
        continue;
      const c2 = t4[l4];
      let u3;
      o5 && hasOwn(o5, u3 = I(l4)) ? s3 && s3.includes(u3) ? (i4 || (i4 = {}))[u3] = c2 : n4[u3] = c2 : isEmitListener(e7.emitsOptions, l4) || l4 in r3 && c2 === r3[l4] || (r3[l4] = c2, a4 = true);
    }
  if (s3) {
    const t5 = toRaw(n4), r4 = i4 || A2;
    for (let i5 = 0; i5 < s3.length; i5++) {
      const a5 = s3[i5];
      n4[a5] = resolvePropValue(o5, t5, a5, r4[a5], e7, !hasOwn(r4, a5));
    }
  }
  return a4;
}
function resolvePropValue(e7, t4, n4, r3, o5, s3) {
  const i4 = e7[n4];
  if (null != i4) {
    const e8 = hasOwn(i4, "default");
    if (e8 && void 0 === r3) {
      const e9 = i4.default;
      if (i4.type !== Function && !i4.skipFactory && isFunction(e9)) {
        const { propsDefaults: s4 } = o5;
        if (n4 in s4)
          r3 = s4[n4];
        else {
          const i5 = setCurrentInstance(o5);
          r3 = s4[n4] = e9.call(null, t4), i5();
        }
      } else
        r3 = e9;
    }
    i4[0] && (s3 && !e8 ? r3 = false : !i4[1] || "" !== r3 && r3 !== N2(n4) || (r3 = true));
  }
  return r3;
}
function normalizePropsOptions(e7, t4, n4 = false) {
  const r3 = t4.propsCache, o5 = r3.get(e7);
  if (o5)
    return o5;
  const s3 = e7.props, i4 = {}, a4 = [];
  let l4 = false;
  if (__VUE_OPTIONS_API__ && !isFunction(e7)) {
    const extendProps = (e8) => {
      l4 = true;
      const [n5, r4] = normalizePropsOptions(e8, t4, true);
      O2(i4, n5), r4 && a4.push(...r4);
    };
    !n4 && t4.mixins.length && t4.mixins.forEach(extendProps), e7.extends && extendProps(e7.extends), e7.mixins && e7.mixins.forEach(extendProps);
  }
  if (!s3 && !l4)
    return isObject(e7) && r3.set(e7, $), $;
  if (E2(s3))
    for (let e8 = 0; e8 < s3.length; e8++) {
      const t5 = I(s3[e8]);
      validatePropName(t5) && (i4[t5] = A2);
    }
  else if (s3)
    for (const e8 in s3) {
      const t5 = I(e8);
      if (validatePropName(t5)) {
        const n5 = s3[e8], r4 = i4[t5] = E2(n5) || isFunction(n5) ? { type: n5 } : O2({}, n5);
        if (r4) {
          const e9 = getTypeIndex(Boolean, r4.type), n6 = getTypeIndex(String, r4.type);
          r4[0] = e9 > -1, r4[1] = n6 < 0 || e9 < n6, (e9 > -1 || hasOwn(r4, "default")) && a4.push(t5);
        }
      }
    }
  const c2 = [i4, a4];
  return isObject(e7) && r3.set(e7, c2), c2;
}
function validatePropName(e7) {
  return "$" !== e7[0] && !j(e7);
}
function getType(e7) {
  if (null === e7)
    return "null";
  if ("function" == typeof e7)
    return e7.name || "";
  if ("object" == typeof e7) {
    return e7.constructor && e7.constructor.name || "";
  }
  return "";
}
function isSameType(e7, t4) {
  return getType(e7) === getType(t4);
}
function getTypeIndex(e7, t4) {
  return E2(t4) ? t4.findIndex((t5) => isSameType(t5, e7)) : isFunction(t4) && isSameType(t4, e7) ? 0 : -1;
}
function setRef(e7, t4, n4, r3, o5 = false) {
  if (E2(e7))
    return void e7.forEach((e8, s4) => setRef(e8, t4 && (E2(t4) ? t4[s4] : t4), n4, r3, o5));
  if (isAsyncWrapper(r3) && !o5)
    return;
  const s3 = 4 & r3.shapeFlag ? getExposeProxy(r3.component) || r3.component.proxy : r3.el, i4 = o5 ? null : s3, { i: a4, r: l4 } = e7, c2 = t4 && t4.r, u3 = a4.refs === A2 ? a4.refs = {} : a4.refs, p2 = a4.setupState;
  if (null != c2 && c2 !== l4 && (isString(c2) ? (u3[c2] = null, hasOwn(p2, c2) && (p2[c2] = null)) : isRef(c2) && (c2.value = null)), isFunction(l4))
    callWithErrorHandling(l4, a4, 12, [i4, u3]);
  else {
    const t5 = isString(l4), r4 = isRef(l4);
    if (t5 || r4) {
      const doSet = () => {
        if (e7.f) {
          const n5 = t5 ? hasOwn(p2, l4) ? p2[l4] : u3[l4] : l4.value;
          o5 ? E2(n5) && remove(n5, s3) : E2(n5) ? n5.includes(s3) || n5.push(s3) : t5 ? (u3[l4] = [s3], hasOwn(p2, l4) && (p2[l4] = u3[l4])) : (l4.value = [s3], e7.k && (u3[e7.k] = l4.value));
        } else
          t5 ? (u3[l4] = i4, hasOwn(p2, l4) && (p2[l4] = i4)) : r4 && (l4.value = i4, e7.k && (u3[e7.k] = i4));
      };
      i4 ? (doSet.id = -1, queuePostRenderEffect(doSet, n4)) : doSet();
    }
  }
}
function createRenderer(e7) {
  return function(e8, t4) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (getGlobalThis().__VUE_OPTIONS_API__ = true), "boolean" != typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && (getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
    getGlobalThis().__VUE__ = true;
    const { insert: n4, remove: r3, patchProp: o5, createElement: s3, createText: i4, createComment: a4, setText: l4, setElementText: c2, parentNode: u3, nextSibling: p2, setScopeId: f2 = NOOP, insertStaticContent: d3 } = e8, patch = (e9, t5, n5, r4 = null, o6 = null, s4 = null, i5 = void 0, a5 = null, l5 = !!t5.dynamicChildren) => {
      if (e9 === t5)
        return;
      e9 && !isSameVNodeType(e9, t5) && (r4 = getNextHostNode(e9), unmount(e9, o6, s4, true), e9 = null), -2 === t5.patchFlag && (l5 = false, t5.dynamicChildren = null);
      const { type: c3, ref: u4, shapeFlag: p3 } = t5;
      switch (c3) {
        case st2:
          processText(e9, t5, n5, r4);
          break;
        case it2:
          processCommentNode(e9, t5, n5, r4);
          break;
        case at2:
          null == e9 && mountStaticNode(t5, n5, r4, i5);
          break;
        case ot2:
          processFragment(e9, t5, n5, r4, o6, s4, i5, a5, l5);
          break;
        default:
          1 & p3 ? processElement(e9, t5, n5, r4, o6, s4, i5, a5, l5) : 6 & p3 ? processComponent(e9, t5, n5, r4, o6, s4, i5, a5, l5) : (64 & p3 || 128 & p3) && c3.process(e9, t5, n5, r4, o6, s4, i5, a5, l5, m3);
      }
      null != u4 && o6 && setRef(u4, e9 && e9.ref, s4, t5 || e9, !t5);
    }, processText = (e9, t5, r4, o6) => {
      if (null == e9)
        n4(t5.el = i4(t5.children), r4, o6);
      else {
        const n5 = t5.el = e9.el;
        t5.children !== e9.children && l4(n5, t5.children);
      }
    }, processCommentNode = (e9, t5, r4, o6) => {
      null == e9 ? n4(t5.el = a4(t5.children || ""), r4, o6) : t5.el = e9.el;
    }, mountStaticNode = (e9, t5, n5, r4) => {
      [e9.el, e9.anchor] = d3(e9.children, t5, n5, r4, e9.el, e9.anchor);
    }, moveStaticNode = ({ el: e9, anchor: t5 }, r4, o6) => {
      let s4;
      for (; e9 && e9 !== t5; )
        s4 = p2(e9), n4(e9, r4, o6), e9 = s4;
      n4(t5, r4, o6);
    }, removeStaticNode = ({ el: e9, anchor: t5 }) => {
      let n5;
      for (; e9 && e9 !== t5; )
        n5 = p2(e9), r3(e9), e9 = n5;
      r3(t5);
    }, processElement = (e9, t5, n5, r4, o6, s4, i5, a5, l5) => {
      "svg" === t5.type ? i5 = "svg" : "math" === t5.type && (i5 = "mathml"), null == e9 ? mountElement(t5, n5, r4, o6, s4, i5, a5, l5) : patchElement(e9, t5, o6, s4, i5, a5, l5);
    }, mountElement = (e9, t5, r4, i5, a5, l5, u4, p3) => {
      let f3, d4;
      const { props: g3, shapeFlag: m4, transition: y4, dirs: v5 } = e9;
      if (f3 = e9.el = s3(e9.type, l5, g3 && g3.is, g3), 8 & m4 ? c2(f3, e9.children) : 16 & m4 && mountChildren(e9.children, f3, null, i5, a5, resolveChildrenNamespace(e9, l5), u4, p3), v5 && invokeDirectiveHook(e9, null, i5, "created"), setScopeId(f3, e9, e9.scopeId, u4, i5), g3) {
        for (const t6 in g3)
          "value" === t6 || j(t6) || o5(f3, t6, null, g3[t6], l5, e9.children, i5, a5, unmountChildren);
        "value" in g3 && o5(f3, "value", null, g3.value, l5), (d4 = g3.onVnodeBeforeMount) && invokeVNodeHook(d4, i5, e9);
      }
      v5 && invokeDirectiveHook(e9, null, i5, "beforeMount");
      const _4 = function(e10, t6) {
        return (!e10 || e10 && !e10.pendingBranch) && t6 && !t6.persisted;
      }(a5, y4);
      _4 && y4.beforeEnter(f3), n4(f3, t5, r4), ((d4 = g3 && g3.onVnodeMounted) || _4 || v5) && queuePostRenderEffect(() => {
        d4 && invokeVNodeHook(d4, i5, e9), _4 && y4.enter(f3), v5 && invokeDirectiveHook(e9, null, i5, "mounted");
      }, a5);
    }, setScopeId = (e9, t5, n5, r4, o6) => {
      if (n5 && f2(e9, n5), r4)
        for (let t6 = 0; t6 < r4.length; t6++)
          f2(e9, r4[t6]);
      if (o6) {
        if (t5 === o6.subTree) {
          const t6 = o6.vnode;
          setScopeId(e9, t6, t6.scopeId, t6.slotScopeIds, o6.parent);
        }
      }
    }, mountChildren = (e9, t5, n5, r4, o6, s4, i5, a5, l5 = 0) => {
      for (let c3 = l5; c3 < e9.length; c3++) {
        const l6 = e9[c3] = a5 ? cloneIfMounted(e9[c3]) : normalizeVNode$1(e9[c3]);
        patch(null, l6, t5, n5, r4, o6, s4, i5, a5);
      }
    }, patchElement = (e9, t5, n5, r4, s4, i5, a5) => {
      const l5 = t5.el = e9.el;
      let { patchFlag: u4, dynamicChildren: p3, dirs: f3 } = t5;
      u4 |= 16 & e9.patchFlag;
      const d4 = e9.props || A2, g3 = t5.props || A2;
      let m4;
      if (n5 && toggleRecurse(n5, false), (m4 = g3.onVnodeBeforeUpdate) && invokeVNodeHook(m4, n5, t5, e9), f3 && invokeDirectiveHook(t5, e9, n5, "beforeUpdate"), n5 && toggleRecurse(n5, true), p3 ? patchBlockChildren(e9.dynamicChildren, p3, l5, n5, r4, resolveChildrenNamespace(t5, s4), i5) : a5 || patchChildren(e9, t5, l5, null, n5, r4, resolveChildrenNamespace(t5, s4), i5, false), u4 > 0) {
        if (16 & u4)
          patchProps(l5, t5, d4, g3, n5, r4, s4);
        else if (2 & u4 && d4.class !== g3.class && o5(l5, "class", null, g3.class, s4), 4 & u4 && o5(l5, "style", d4.style, g3.style, s4), 8 & u4) {
          const i6 = t5.dynamicProps;
          for (let t6 = 0; t6 < i6.length; t6++) {
            const a6 = i6[t6], c3 = d4[a6], u5 = g3[a6];
            u5 === c3 && "value" !== a6 || o5(l5, a6, c3, u5, s4, e9.children, n5, r4, unmountChildren);
          }
        }
        1 & u4 && e9.children !== t5.children && c2(l5, t5.children);
      } else
        a5 || null != p3 || patchProps(l5, t5, d4, g3, n5, r4, s4);
      ((m4 = g3.onVnodeUpdated) || f3) && queuePostRenderEffect(() => {
        m4 && invokeVNodeHook(m4, n5, t5, e9), f3 && invokeDirectiveHook(t5, e9, n5, "updated");
      }, r4);
    }, patchBlockChildren = (e9, t5, n5, r4, o6, s4, i5) => {
      for (let a5 = 0; a5 < t5.length; a5++) {
        const l5 = e9[a5], c3 = t5[a5], p3 = l5.el && (l5.type === ot2 || !isSameVNodeType(l5, c3) || 70 & l5.shapeFlag) ? u3(l5.el) : n5;
        patch(l5, c3, p3, null, r4, o6, s4, i5, true);
      }
    }, patchProps = (e9, t5, n5, r4, s4, i5, a5) => {
      if (n5 !== r4) {
        if (n5 !== A2)
          for (const l5 in n5)
            j(l5) || l5 in r4 || o5(e9, l5, n5[l5], null, a5, t5.children, s4, i5, unmountChildren);
        for (const l5 in r4) {
          if (j(l5))
            continue;
          const c3 = r4[l5], u4 = n5[l5];
          c3 !== u4 && "value" !== l5 && o5(e9, l5, u4, c3, a5, t5.children, s4, i5, unmountChildren);
        }
        "value" in r4 && o5(e9, "value", n5.value, r4.value, a5);
      }
    }, processFragment = (e9, t5, r4, o6, s4, a5, l5, c3, u4) => {
      const p3 = t5.el = e9 ? e9.el : i4(""), f3 = t5.anchor = e9 ? e9.anchor : i4("");
      let { patchFlag: d4, dynamicChildren: g3, slotScopeIds: m4 } = t5;
      m4 && (c3 = c3 ? c3.concat(m4) : m4), null == e9 ? (n4(p3, r4, o6), n4(f3, r4, o6), mountChildren(t5.children || [], r4, f3, s4, a5, l5, c3, u4)) : d4 > 0 && 64 & d4 && g3 && e9.dynamicChildren ? (patchBlockChildren(e9.dynamicChildren, g3, r4, s4, a5, l5, c3), (null != t5.key || s4 && t5 === s4.subTree) && traverseStaticChildren(e9, t5, true)) : patchChildren(e9, t5, r4, f3, s4, a5, l5, c3, u4);
    }, processComponent = (e9, t5, n5, r4, o6, s4, i5, a5, l5) => {
      t5.slotScopeIds = a5, null == e9 ? 512 & t5.shapeFlag ? o6.ctx.activate(t5, n5, r4, i5, l5) : mountComponent(t5, n5, r4, o6, s4, i5, l5) : updateComponent(e9, t5, l5);
    }, mountComponent = (e9, t5, n5, r4, o6, s4, i5) => {
      const a5 = e9.component = createComponentInstance$1(e9, r4, o6);
      if (isKeepAlive(e9) && (a5.ctx.renderer = m3), setupComponent$1(a5), a5.asyncDep) {
        if (o6 && o6.registerDep(a5, setupRenderEffect), !e9.el) {
          const e10 = a5.subTree = createVNode(it2);
          processCommentNode(null, e10, t5, n5);
        }
      } else
        setupRenderEffect(a5, e9, t5, n5, o6, s4, i5);
    }, updateComponent = (e9, t5, n5) => {
      const r4 = t5.component = e9.component;
      if (function(e10, t6, n6) {
        const { props: r5, children: o6, component: s4 } = e10, { props: i5, children: a5, patchFlag: l5 } = t6, c3 = s4.emitsOptions;
        if (t6.dirs || t6.transition)
          return true;
        if (!(n6 && l5 >= 0))
          return !(!o6 && !a5 || a5 && a5.$stable) || r5 !== i5 && (r5 ? !i5 || hasPropsChanged(r5, i5, c3) : !!i5);
        if (1024 & l5)
          return true;
        if (16 & l5)
          return r5 ? hasPropsChanged(r5, i5, c3) : !!i5;
        if (8 & l5) {
          const e11 = t6.dynamicProps;
          for (let t7 = 0; t7 < e11.length; t7++) {
            const n7 = e11[t7];
            if (i5[n7] !== r5[n7] && !isEmitListener(c3, n7))
              return true;
          }
        }
        return false;
      }(e9, t5, n5)) {
        if (r4.asyncDep && !r4.asyncResolved)
          return void updateComponentPreRender(r4, t5, n5);
        r4.next = t5, function(e10) {
          const t6 = Oe.indexOf(e10);
          t6 > Te && Oe.splice(t6, 1);
        }(r4.update), r4.effect.dirty = true, r4.update();
      } else
        t5.el = e9.el, r4.vnode = t5;
    }, setupRenderEffect = (e9, t5, n5, r4, o6, s4, i5) => {
      const componentUpdateFn = () => {
        if (e9.isMounted) {
          let { next: t6, bu: n6, u: r5, parent: a6, vnode: l6 } = e9;
          {
            const n7 = locateNonHydratedAsyncRoot(e9);
            if (n7)
              return t6 && (t6.el = l6.el, updateComponentPreRender(e9, t6, i5)), void n7.asyncDep.then(() => {
                e9.isUnmounted || componentUpdateFn();
              });
          }
          let c3, p3 = t6;
          toggleRecurse(e9, false), t6 ? (t6.el = l6.el, updateComponentPreRender(e9, t6, i5)) : t6 = l6, n6 && invokeArrayFns(n6), (c3 = t6.props && t6.props.onVnodeBeforeUpdate) && invokeVNodeHook(c3, a6, t6, l6), toggleRecurse(e9, true);
          const f3 = renderComponentRoot$1(e9), d4 = e9.subTree;
          e9.subTree = f3, patch(d4, f3, u3(d4.el), getNextHostNode(d4), e9, o6, s4), t6.el = f3.el, null === p3 && function({ vnode: e10, parent: t7 }, n7) {
            for (; t7; ) {
              const r6 = t7.subTree;
              if (r6.suspense && r6.suspense.activeBranch === e10 && (r6.el = e10.el), r6 !== e10)
                break;
              (e10 = t7.vnode).el = n7, t7 = t7.parent;
            }
          }(e9, f3.el), r5 && queuePostRenderEffect(r5, o6), (c3 = t6.props && t6.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(c3, a6, t6, l6), o6);
        } else {
          let i6;
          const { el: a6, props: l6 } = t5, { bm: c3, m: u4, parent: p3 } = e9, f3 = isAsyncWrapper(t5);
          if (toggleRecurse(e9, false), c3 && invokeArrayFns(c3), !f3 && (i6 = l6 && l6.onVnodeBeforeMount) && invokeVNodeHook(i6, p3, t5), toggleRecurse(e9, true), a6 && v4) {
            const hydrateSubTree = () => {
              e9.subTree = renderComponentRoot$1(e9), v4(a6, e9.subTree, e9, o6, null);
            };
            f3 ? t5.type.__asyncLoader().then(() => !e9.isUnmounted && hydrateSubTree()) : hydrateSubTree();
          } else {
            const i7 = e9.subTree = renderComponentRoot$1(e9);
            patch(null, i7, n5, r4, e9, o6, s4), t5.el = i7.el;
          }
          if (u4 && queuePostRenderEffect(u4, o6), !f3 && (i6 = l6 && l6.onVnodeMounted)) {
            const e10 = t5;
            queuePostRenderEffect(() => invokeVNodeHook(i6, p3, e10), o6);
          }
          (256 & t5.shapeFlag || p3 && isAsyncWrapper(p3.vnode) && 256 & p3.vnode.shapeFlag) && e9.a && queuePostRenderEffect(e9.a, o6), e9.isMounted = true, t5 = n5 = r4 = null;
        }
      }, a5 = e9.effect = new ReactiveEffect(componentUpdateFn, NOOP, () => queueJob(l5), e9.scope), l5 = e9.update = () => {
        a5.dirty && a5.run();
      };
      l5.id = e9.uid, toggleRecurse(e9, true), l5();
    }, updateComponentPreRender = (e9, t5, n5) => {
      t5.component = e9;
      const r4 = e9.vnode.props;
      e9.vnode = t5, e9.next = null, function(e10, t6, n6, r5) {
        const { props: o6, attrs: s4, vnode: { patchFlag: i5 } } = e10, a5 = toRaw(o6), [l5] = e10.propsOptions;
        let c3 = false;
        if (!(r5 || i5 > 0) || 16 & i5) {
          let r6;
          setFullProps(e10, t6, o6, s4) && (c3 = true);
          for (const s5 in a5)
            t6 && (hasOwn(t6, s5) || (r6 = N2(s5)) !== s5 && hasOwn(t6, r6)) || (l5 ? !n6 || void 0 === n6[s5] && void 0 === n6[r6] || (o6[s5] = resolvePropValue(l5, a5, s5, void 0, e10, true)) : delete o6[s5]);
          if (s4 !== a5)
            for (const e11 in s4)
              t6 && hasOwn(t6, e11) || (delete s4[e11], c3 = true);
        } else if (8 & i5) {
          const n7 = e10.vnode.dynamicProps;
          for (let r6 = 0; r6 < n7.length; r6++) {
            let i6 = n7[r6];
            if (isEmitListener(e10.emitsOptions, i6))
              continue;
            const u4 = t6[i6];
            if (l5)
              if (hasOwn(s4, i6))
                u4 !== s4[i6] && (s4[i6] = u4, c3 = true);
              else {
                const t7 = I(i6);
                o6[t7] = resolvePropValue(l5, a5, t7, u4, e10, false);
              }
            else
              u4 !== s4[i6] && (s4[i6] = u4, c3 = true);
          }
        }
        c3 && trigger(e10.attrs, "set", "");
      }(e9, t5.props, r4, n5), updateSlots(e9, t5.children, n5), pauseTracking(), flushPreFlushCbs(e9), resetTracking();
    }, patchChildren = (e9, t5, n5, r4, o6, s4, i5, a5, l5 = false) => {
      const u4 = e9 && e9.children, p3 = e9 ? e9.shapeFlag : 0, f3 = t5.children, { patchFlag: d4, shapeFlag: g3 } = t5;
      if (d4 > 0) {
        if (128 & d4)
          return void patchKeyedChildren(u4, f3, n5, r4, o6, s4, i5, a5, l5);
        if (256 & d4)
          return void patchUnkeyedChildren(u4, f3, n5, r4, o6, s4, i5, a5, l5);
      }
      8 & g3 ? (16 & p3 && unmountChildren(u4, o6, s4), f3 !== u4 && c2(n5, f3)) : 16 & p3 ? 16 & g3 ? patchKeyedChildren(u4, f3, n5, r4, o6, s4, i5, a5, l5) : unmountChildren(u4, o6, s4, true) : (8 & p3 && c2(n5, ""), 16 & g3 && mountChildren(f3, n5, r4, o6, s4, i5, a5, l5));
    }, patchUnkeyedChildren = (e9, t5, n5, r4, o6, s4, i5, a5, l5) => {
      t5 = t5 || $;
      const c3 = (e9 = e9 || $).length, u4 = t5.length, p3 = Math.min(c3, u4);
      let f3;
      for (f3 = 0; f3 < p3; f3++) {
        const r5 = t5[f3] = l5 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        patch(e9[f3], r5, n5, null, o6, s4, i5, a5, l5);
      }
      c3 > u4 ? unmountChildren(e9, o6, s4, true, false, p3) : mountChildren(t5, n5, r4, o6, s4, i5, a5, l5, p3);
    }, patchKeyedChildren = (e9, t5, n5, r4, o6, s4, i5, a5, l5) => {
      let c3 = 0;
      const u4 = t5.length;
      let p3 = e9.length - 1, f3 = u4 - 1;
      for (; c3 <= p3 && c3 <= f3; ) {
        const r5 = e9[c3], u5 = t5[c3] = l5 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
        if (!isSameVNodeType(r5, u5))
          break;
        patch(r5, u5, n5, null, o6, s4, i5, a5, l5), c3++;
      }
      for (; c3 <= p3 && c3 <= f3; ) {
        const r5 = e9[p3], c4 = t5[f3] = l5 ? cloneIfMounted(t5[f3]) : normalizeVNode$1(t5[f3]);
        if (!isSameVNodeType(r5, c4))
          break;
        patch(r5, c4, n5, null, o6, s4, i5, a5, l5), p3--, f3--;
      }
      if (c3 > p3) {
        if (c3 <= f3) {
          const e10 = f3 + 1, p4 = e10 < u4 ? t5[e10].el : r4;
          for (; c3 <= f3; )
            patch(null, t5[c3] = l5 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]), n5, p4, o6, s4, i5, a5, l5), c3++;
        }
      } else if (c3 > f3)
        for (; c3 <= p3; )
          unmount(e9[c3], o6, s4, true), c3++;
      else {
        const d4 = c3, g3 = c3, m4 = /* @__PURE__ */ new Map();
        for (c3 = g3; c3 <= f3; c3++) {
          const e10 = t5[c3] = l5 ? cloneIfMounted(t5[c3]) : normalizeVNode$1(t5[c3]);
          null != e10.key && m4.set(e10.key, c3);
        }
        let y4, v5 = 0;
        const _4 = f3 - g3 + 1;
        let b3 = false, k3 = 0;
        const R3 = new Array(_4);
        for (c3 = 0; c3 < _4; c3++)
          R3[c3] = 0;
        for (c3 = d4; c3 <= p3; c3++) {
          const r5 = e9[c3];
          if (v5 >= _4) {
            unmount(r5, o6, s4, true);
            continue;
          }
          let u5;
          if (null != r5.key)
            u5 = m4.get(r5.key);
          else
            for (y4 = g3; y4 <= f3; y4++)
              if (0 === R3[y4 - g3] && isSameVNodeType(r5, t5[y4])) {
                u5 = y4;
                break;
              }
          void 0 === u5 ? unmount(r5, o6, s4, true) : (R3[u5 - g3] = c3 + 1, u5 >= k3 ? k3 = u5 : b3 = true, patch(r5, t5[u5], n5, null, o6, s4, i5, a5, l5), v5++);
        }
        const w4 = b3 ? function(e10) {
          const t6 = e10.slice(), n6 = [0];
          let r5, o7, s5, i6, a6;
          const l6 = e10.length;
          for (r5 = 0; r5 < l6; r5++) {
            const l7 = e10[r5];
            if (0 !== l7) {
              if (o7 = n6[n6.length - 1], e10[o7] < l7) {
                t6[r5] = o7, n6.push(r5);
                continue;
              }
              for (s5 = 0, i6 = n6.length - 1; s5 < i6; )
                a6 = s5 + i6 >> 1, e10[n6[a6]] < l7 ? s5 = a6 + 1 : i6 = a6;
              l7 < e10[n6[s5]] && (s5 > 0 && (t6[r5] = n6[s5 - 1]), n6[s5] = r5);
            }
          }
          s5 = n6.length, i6 = n6[s5 - 1];
          for (; s5-- > 0; )
            n6[s5] = i6, i6 = t6[i6];
          return n6;
        }(R3) : $;
        for (y4 = w4.length - 1, c3 = _4 - 1; c3 >= 0; c3--) {
          const e10 = g3 + c3, p4 = t5[e10], f4 = e10 + 1 < u4 ? t5[e10 + 1].el : r4;
          0 === R3[c3] ? patch(null, p4, n5, f4, o6, s4, i5, a5, l5) : b3 && (y4 < 0 || c3 !== w4[y4] ? move(p4, n5, f4, 2) : y4--);
        }
      }
    }, move = (e9, t5, r4, o6, s4 = null) => {
      const { el: i5, type: a5, transition: l5, children: c3, shapeFlag: u4 } = e9;
      if (6 & u4)
        return void move(e9.component.subTree, t5, r4, o6);
      if (128 & u4)
        return void e9.suspense.move(t5, r4, o6);
      if (64 & u4)
        return void a5.move(e9, t5, r4, m3);
      if (a5 === ot2) {
        n4(i5, t5, r4);
        for (let e10 = 0; e10 < c3.length; e10++)
          move(c3[e10], t5, r4, o6);
        return void n4(e9.anchor, t5, r4);
      }
      if (a5 === at2)
        return void moveStaticNode(e9, t5, r4);
      if (2 !== o6 && 1 & u4 && l5)
        if (0 === o6)
          l5.beforeEnter(i5), n4(i5, t5, r4), queuePostRenderEffect(() => l5.enter(i5), s4);
        else {
          const { leave: e10, delayLeave: o7, afterLeave: s5 } = l5, remove22 = () => n4(i5, t5, r4), performLeave = () => {
            e10(i5, () => {
              remove22(), s5 && s5();
            });
          };
          o7 ? o7(i5, remove22, performLeave) : performLeave();
        }
      else
        n4(i5, t5, r4);
    }, unmount = (e9, t5, n5, r4 = false, o6 = false) => {
      const { type: s4, props: i5, ref: a5, children: l5, dynamicChildren: c3, shapeFlag: u4, patchFlag: p3, dirs: f3 } = e9;
      if (null != a5 && setRef(a5, null, n5, e9, true), 256 & u4)
        return void t5.ctx.deactivate(e9);
      const d4 = 1 & u4 && f3, g3 = !isAsyncWrapper(e9);
      let y4;
      if (g3 && (y4 = i5 && i5.onVnodeBeforeUnmount) && invokeVNodeHook(y4, t5, e9), 6 & u4)
        unmountComponent(e9.component, n5, r4);
      else {
        if (128 & u4)
          return void e9.suspense.unmount(n5, r4);
        d4 && invokeDirectiveHook(e9, null, t5, "beforeUnmount"), 64 & u4 ? e9.type.remove(e9, t5, n5, o6, m3, r4) : c3 && (s4 !== ot2 || p3 > 0 && 64 & p3) ? unmountChildren(c3, t5, n5, false, true) : (s4 === ot2 && 384 & p3 || !o6 && 16 & u4) && unmountChildren(l5, t5, n5), r4 && remove2(e9);
      }
      (g3 && (y4 = i5 && i5.onVnodeUnmounted) || d4) && queuePostRenderEffect(() => {
        y4 && invokeVNodeHook(y4, t5, e9), d4 && invokeDirectiveHook(e9, null, t5, "unmounted");
      }, n5);
    }, remove2 = (e9) => {
      const { type: t5, el: n5, anchor: o6, transition: s4 } = e9;
      if (t5 === ot2)
        return void removeFragment(n5, o6);
      if (t5 === at2)
        return void removeStaticNode(e9);
      const performRemove = () => {
        r3(n5), s4 && !s4.persisted && s4.afterLeave && s4.afterLeave();
      };
      if (1 & e9.shapeFlag && s4 && !s4.persisted) {
        const { leave: t6, delayLeave: r4 } = s4, performLeave = () => t6(n5, performRemove);
        r4 ? r4(e9.el, performRemove, performLeave) : performLeave();
      } else
        performRemove();
    }, removeFragment = (e9, t5) => {
      let n5;
      for (; e9 !== t5; )
        n5 = p2(e9), r3(e9), e9 = n5;
      r3(t5);
    }, unmountComponent = (e9, t5, n5) => {
      const { bum: r4, scope: o6, update: s4, subTree: i5, um: a5 } = e9;
      r4 && invokeArrayFns(r4), o6.stop(), s4 && (s4.active = false, unmount(i5, e9, t5, n5)), a5 && queuePostRenderEffect(a5, t5), queuePostRenderEffect(() => {
        e9.isUnmounted = true;
      }, t5), t5 && t5.pendingBranch && !t5.isUnmounted && e9.asyncDep && !e9.asyncResolved && e9.suspenseId === t5.pendingId && (t5.deps--, 0 === t5.deps && t5.resolve());
    }, unmountChildren = (e9, t5, n5, r4 = false, o6 = false, s4 = 0) => {
      for (let i5 = s4; i5 < e9.length; i5++)
        unmount(e9[i5], t5, n5, r4, o6);
    }, getNextHostNode = (e9) => 6 & e9.shapeFlag ? getNextHostNode(e9.component.subTree) : 128 & e9.shapeFlag ? e9.suspense.next() : p2(e9.anchor || e9.el);
    let g2 = false;
    const render = (e9, t5, n5) => {
      null == e9 ? t5._vnode && unmount(t5._vnode, null, null, true) : patch(t5._vnode || null, e9, t5, null, null, null, n5), g2 || (g2 = true, flushPreFlushCbs(), flushPostFlushCbs(), g2 = false), t5._vnode = e9;
    }, m3 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e8 };
    let y3, v4;
    return { render, hydrate: y3, createApp: createAppAPI(render, y3) };
  }(e7);
}
function resolveChildrenNamespace({ type: e7, props: t4 }, n4) {
  return "svg" === n4 && "foreignObject" === e7 || "mathml" === n4 && "annotation-xml" === e7 && t4 && t4.encoding && t4.encoding.includes("html") ? void 0 : n4;
}
function toggleRecurse({ effect: e7, update: t4 }, n4) {
  e7.allowRecurse = t4.allowRecurse = n4;
}
function traverseStaticChildren(e7, t4, n4 = false) {
  const r3 = e7.children, o5 = t4.children;
  if (E2(r3) && E2(o5))
    for (let e8 = 0; e8 < r3.length; e8++) {
      const t5 = r3[e8];
      let s3 = o5[e8];
      1 & s3.shapeFlag && !s3.dynamicChildren && ((s3.patchFlag <= 0 || 32 === s3.patchFlag) && (s3 = o5[e8] = cloneIfMounted(o5[e8]), s3.el = t5.el), n4 || traverseStaticChildren(t5, s3)), s3.type === st2 && (s3.el = t5.el);
    }
}
function locateNonHydratedAsyncRoot(e7) {
  const t4 = e7.subTree.component;
  if (t4)
    return t4.asyncDep && !t4.asyncResolved ? t4 : locateNonHydratedAsyncRoot(t4);
}
function setBlockTracking(e7) {
  ct2 += e7;
}
function isVNode(e7) {
  return !!e7 && true === e7.__v_isVNode;
}
function isSameVNodeType(e7, t4) {
  return e7.type === t4.type && e7.key === t4.key;
}
function cloneVNode(e7, t4, n4 = false) {
  const { props: r3, ref: o5, patchFlag: s3, children: i4 } = e7, a4 = t4 ? mergeProps(r3 || {}, t4) : r3;
  return { __v_isVNode: true, __v_skip: true, type: e7.type, props: a4, key: a4 && normalizeKey(a4), ref: t4 && t4.ref ? n4 && o5 ? E2(o5) ? o5.concat(normalizeRef(t4)) : [o5, normalizeRef(t4)] : normalizeRef(t4) : o5, scopeId: e7.scopeId, slotScopeIds: e7.slotScopeIds, children: i4, target: e7.target, targetAnchor: e7.targetAnchor, staticCount: e7.staticCount, shapeFlag: e7.shapeFlag, patchFlag: t4 && e7.type !== ot2 ? -1 === s3 ? 16 : 16 | s3 : s3, dynamicProps: e7.dynamicProps, dynamicChildren: e7.dynamicChildren, appContext: e7.appContext, dirs: e7.dirs, transition: e7.transition, component: e7.component, suspense: e7.suspense, ssContent: e7.ssContent && cloneVNode(e7.ssContent), ssFallback: e7.ssFallback && cloneVNode(e7.ssFallback), el: e7.el, anchor: e7.anchor, ctx: e7.ctx, ce: e7.ce };
}
function createTextVNode(e7 = " ", t4 = 0) {
  return createVNode(st2, null, e7, t4);
}
function normalizeVNode$1(e7) {
  return null == e7 || "boolean" == typeof e7 ? createVNode(it2) : E2(e7) ? createVNode(ot2, null, e7.slice()) : "object" == typeof e7 ? cloneIfMounted(e7) : createVNode(st2, null, String(e7));
}
function cloneIfMounted(e7) {
  return null === e7.el && -1 !== e7.patchFlag || e7.memo ? e7 : cloneVNode(e7);
}
function normalizeChildren(e7, t4) {
  let n4 = 0;
  const { shapeFlag: r3 } = e7;
  if (null == t4)
    t4 = null;
  else if (E2(t4))
    n4 = 16;
  else if ("object" == typeof t4) {
    if (65 & r3) {
      const n5 = t4.default;
      return void (n5 && (n5._c && (n5._d = false), normalizeChildren(e7, n5()), n5._c && (n5._d = true)));
    }
    {
      n4 = 32;
      const r4 = t4._;
      r4 || isInternalObject(t4) ? 3 === r4 && Me && (1 === Me.slots._ ? t4._ = 1 : (t4._ = 2, e7.patchFlag |= 1024)) : t4._ctx = Me;
    }
  } else
    isFunction(t4) ? (t4 = { default: t4, _ctx: Me }, n4 = 32) : (t4 = String(t4), 64 & r3 ? (n4 = 16, t4 = [createTextVNode(t4)]) : n4 = 8);
  e7.children = t4, e7.shapeFlag |= n4;
}
function mergeProps(...e7) {
  const t4 = {};
  for (let n4 = 0; n4 < e7.length; n4++) {
    const r3 = e7[n4];
    for (const e8 in r3)
      if ("class" === e8)
        t4.class !== r3.class && (t4.class = normalizeClass([t4.class, r3.class]));
      else if ("style" === e8)
        t4.style = normalizeStyle([t4.style, r3.style]);
      else if (isOn(e8)) {
        const n5 = t4[e8], o5 = r3[e8];
        !o5 || n5 === o5 || E2(n5) && n5.includes(o5) || (t4[e8] = n5 ? [].concat(n5, o5) : o5);
      } else
        "" !== e8 && (t4[e8] = r3[e8]);
  }
  return t4;
}
function invokeVNodeHook(e7, t4, n4, r3 = null) {
  callWithAsyncErrorHandling(e7, t4, 7, [n4, r3]);
}
function createComponentInstance$1(e7, t4, n4) {
  const r3 = e7.type, o5 = (t4 ? t4.appContext : e7.appContext) || ut2, s3 = { uid: pt2++, vnode: e7, type: r3, parent: t4, appContext: o5, root: null, next: null, subTree: null, effect: null, update: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t4 ? t4.provides : Object.create(o5.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r3, o5), emitsOptions: normalizeEmitsOptions(r3, o5), emit: null, emitted: null, propsDefaults: A2, inheritAttrs: r3.inheritAttrs, ctx: A2, data: A2, props: A2, attrs: A2, slots: A2, refs: A2, setupState: A2, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: n4, suspenseId: n4 ? n4.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s3.ctx = { _: s3 }, s3.root = t4 ? t4.root : s3, s3.emit = emit.bind(null, s3), e7.ce && e7.ce(s3), s3;
}
function isStatefulComponent(e7) {
  return 4 & e7.vnode.shapeFlag;
}
function setupComponent$1(e7, t4 = false) {
  t4 && ht2(t4);
  const { props: n4, children: r3 } = e7.vnode, o5 = isStatefulComponent(e7);
  initProps(e7, n4, o5, t4), initSlots(e7, r3);
  const s3 = o5 ? function(e8, t5) {
    const n5 = e8.type;
    e8.accessCache = /* @__PURE__ */ Object.create(null), e8.proxy = new Proxy(e8.ctx, Ye);
    const { setup: r4 } = n5;
    if (r4) {
      const n6 = e8.setupContext = r4.length > 1 ? function(e9) {
        const expose = (t6) => {
          e9.exposed = t6 || {};
        };
        return { attrs: new Proxy(e9.attrs, yt), slots: e9.slots, emit: e9.emit, expose };
      }(e8) : null, o6 = setCurrentInstance(e8);
      pauseTracking();
      const s4 = callWithErrorHandling(r4, e8, 0, [e8.props, n6]);
      if (resetTracking(), o6(), isPromise(s4)) {
        if (s4.then(unsetCurrentInstance, unsetCurrentInstance), t5)
          return s4.then((n7) => {
            handleSetupResult(e8, n7, t5);
          }).catch((t6) => {
            handleError(t6, e8, 0);
          });
        e8.asyncDep = s4;
      } else
        handleSetupResult(e8, s4, t5);
    } else
      finishComponentSetup(e8, t5);
  }(e7, t4) : void 0;
  return t4 && ht2(false), s3;
}
function handleSetupResult(e7, t4, n4) {
  isFunction(t4) ? e7.type.__ssrInlineRender ? e7.ssrRender = t4 : e7.render = t4 : isObject(t4) && (e7.setupState = proxyRefs(t4)), finishComponentSetup(e7, n4);
}
function finishComponentSetup(e7, t4, n4) {
  const r3 = e7.type;
  if (!e7.render) {
    if (!t4 && gt && !r3.render) {
      const t5 = r3.template || resolveMergedOptions(e7).template;
      if (t5) {
        const { isCustomElement: n5, compilerOptions: o5 } = e7.appContext.config, { delimiters: s3, compilerOptions: i4 } = r3, a4 = O2(O2({ isCustomElement: n5, delimiters: s3 }, o5), i4);
        r3.render = gt(t5, a4);
      }
    }
    e7.render = r3.render || NOOP;
  }
  if (__VUE_OPTIONS_API__) {
    const t5 = setCurrentInstance(e7);
    pauseTracking();
    try {
      applyOptions(e7);
    } finally {
      resetTracking(), t5();
    }
  }
}
function getExposeProxy(e7) {
  if (e7.exposed)
    return e7.exposeProxy || (e7.exposeProxy = new Proxy(proxyRefs((t4 = e7.exposed, Object.isExtensible(t4) && def(t4, "__v_skip", true), t4)), { get: (t5, n4) => n4 in t5 ? t5[n4] : n4 in Xe2 ? Xe2[n4](e7) : void 0, has: (e8, t5) => t5 in e8 || t5 in Xe2 }));
  var t4;
}
function getComponentName(e7, t4 = true) {
  return isFunction(e7) ? e7.displayName || e7.name : e7.name || t4 && e7.__name;
}
function h2(e7, t4, n4) {
  const r3 = arguments.length;
  return 2 === r3 ? isObject(t4) && !E2(t4) ? isVNode(t4) ? createVNode(e7, null, [t4]) : createVNode(e7, t4) : createVNode(e7, null, t4) : (r3 > 3 ? n4 = Array.prototype.slice.call(arguments, 2) : 3 === r3 && isVNode(n4) && (n4 = [n4]), createVNode(e7, t4, n4));
}
function setStyle(e7, t4, n4) {
  if (E2(n4))
    n4.forEach((n5) => setStyle(e7, t4, n5));
  else if (null == n4 && (n4 = ""), t4.startsWith("--"))
    e7.setProperty(t4, n4);
  else {
    const r3 = function(e8, t5) {
      const n5 = Tt[t5];
      if (n5)
        return n5;
      let r4 = I(t5);
      if ("filter" !== r4 && r4 in e8)
        return Tt[t5] = r4;
      r4 = L(r4);
      for (let n6 = 0; n6 < Ot2.length; n6++) {
        const o5 = Ot2[n6] + r4;
        if (o5 in e8)
          return Tt[t5] = o5;
      }
      return t5;
    }(e7, t4);
    $t.test(n4) ? e7.setProperty(N2(r3), n4.replace($t, ""), "important") : e7[r3] = n4;
  }
}
function patchEvent(e7, t4, n4, r3, o5 = null) {
  const s3 = e7[Pt] || (e7[Pt] = {}), i4 = s3[t4];
  if (r3 && i4)
    i4.value = r3;
  else {
    const [n5, a4] = function(e8) {
      let t5;
      if (jt.test(e8)) {
        let n7;
        for (t5 = {}; n7 = e8.match(jt); )
          e8 = e8.slice(0, e8.length - n7[0].length), t5[n7[0].toLowerCase()] = true;
      }
      const n6 = ":" === e8[2] ? e8.slice(3) : N2(e8.slice(2));
      return [n6, t5];
    }(t4);
    if (r3) {
      const i5 = s3[t4] = function(e8, t5) {
        const invoker = (e9) => {
          if (e9._vts) {
            if (e9._vts <= invoker.attached)
              return;
          } else
            e9._vts = Date.now();
          callWithAsyncErrorHandling(function(e10, t6) {
            if (E2(t6)) {
              const n6 = e10.stopImmediatePropagation;
              return e10.stopImmediatePropagation = () => {
                n6.call(e10), e10._stopped = true;
              }, t6.map((e11) => (t7) => !t7._stopped && e11 && e11(t7));
            }
            return t6;
          }(e9, invoker.value), t5, 5, [e9]);
        };
        return invoker.value = e8, invoker.attached = getNow(), invoker;
      }(r3, o5);
      !function(e8, t5, n6, r4) {
        e8.addEventListener(t5, n6, r4);
      }(e7, n5, i5, a4);
    } else
      i4 && (!function(e8, t5, n6, r4) {
        e8.removeEventListener(t5, n6, r4);
      }(e7, n5, i4, a4), s3[t4] = void 0);
  }
}
function ssrRenderAttrs(e7, t4) {
  let n4 = "";
  for (const o5 in e7) {
    if (Lt(o5) || isOn(o5) || "textarea" === t4 && "value" === o5)
      continue;
    const s3 = e7[o5];
    n4 += "class" === o5 ? ` class="${r3 = s3, escapeHtml$1(normalizeClass(r3))}"` : "style" === o5 ? ` style="${ssrRenderStyle(s3)}"` : ssrRenderDynamicAttr(o5, s3, t4);
  }
  var r3;
  return n4;
}
function ssrRenderDynamicAttr(e7, t4, n4) {
  if (!function(e8) {
    if (null == e8)
      return false;
    const t5 = typeof e8;
    return "string" === t5 || "number" === t5 || "boolean" === t5;
  }(t4))
    return "";
  const r3 = n4 && (n4.indexOf("-") > 0 || W2(n4)) ? e7 : X2[e7] || e7.toLowerCase();
  return G(r3) ? includeBooleanAttr(t4) ? ` ${r3}` : "" : function(e8) {
    if (Z2.hasOwnProperty(e8))
      return Z2[e8];
    const t5 = K.test(e8);
    return t5 && console.error(`unsafe attribute name: ${e8}`), Z2[e8] = !t5;
  }(r3) ? "" === t4 ? ` ${r3}` : ` ${r3}="${escapeHtml$1(t4)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r3}`), "");
}
function ssrRenderStyle(e7) {
  if (!e7)
    return "";
  if (isString(e7))
    return escapeHtml$1(e7);
  return escapeHtml$1(function(e8) {
    let t4 = "";
    if (!e8 || isString(e8))
      return t4;
    for (const n4 in e8) {
      const r3 = e8[n4], o5 = n4.startsWith("--") ? n4 : N2(n4);
      (isString(r3) || "number" == typeof r3) && (t4 += `${o5}:${r3};`);
    }
    return t4;
  }(normalizeStyle(e7)));
}
function ssrRenderComponent(e7, t4 = null, n4 = null, r3 = null, o5) {
  return renderComponentVNode(createVNode(e7, t4, n4), r3, o5);
}
function ssrInterpolate(e7) {
  return escapeHtml$1(toDisplayString(e7));
}
async function ssrRenderSuspense(e7, { default: t4 }) {
  t4 ? t4() : e7("<!---->");
}
function createBuffer() {
  let e7 = false;
  const t4 = [];
  return { getBuffer: () => t4, push(n4) {
    const r3 = isString(n4);
    e7 && r3 ? t4[t4.length - 1] += n4 : t4.push(n4), e7 = r3, (isPromise(n4) || E2(n4) && n4.hasAsync) && (t4.hasAsync = true);
  } };
}
function renderComponentVNode(e7, t4 = null, n4) {
  const r3 = Vt(e7, t4, null), o5 = Dt2(r3, true), s3 = isPromise(o5), i4 = r3.sp;
  if (s3 || i4) {
    let e8 = s3 ? o5 : Promise.resolve();
    return i4 && (e8 = e8.then(() => Promise.all(i4.map((e9) => e9.call(r3.proxy)))).catch(NOOP)), e8.then(() => renderComponentSubTree(r3, n4));
  }
  return renderComponentSubTree(r3, n4);
}
function renderComponentSubTree(e7, t4) {
  const n4 = e7.type, { getBuffer: r3, push: o5 } = createBuffer();
  if (isFunction(n4)) {
    let r4 = Ut(e7);
    if (!n4.props)
      for (const t5 in e7.attrs)
        t5.startsWith("data-v-") && ((r4.props || (r4.props = {}))[t5] = "");
    renderVNode(o5, e7.subTree = r4, e7, t4);
  } else {
    e7.render && e7.render !== NOOP || e7.ssrRender || n4.ssrRender || !isString(n4.template) || (n4.ssrRender = function(e8, t5) {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n4.template));
    for (const t5 of e7.scope.effects)
      t5.computed && (t5.computed._dirty = true, t5.computed._cacheable = true);
    const r4 = e7.ssrRender || n4.ssrRender;
    if (r4) {
      let n5 = false !== e7.inheritAttrs ? e7.attrs : void 0, s3 = false, i4 = e7;
      for (; ; ) {
        const e8 = i4.vnode.scopeId;
        e8 && (s3 || (n5 = { ...n5 }, s3 = true), n5[e8] = "");
        const t5 = i4.parent;
        if (!t5 || !t5.subTree || t5.subTree !== i4.vnode)
          break;
        i4 = t5;
      }
      t4 && (s3 || (n5 = { ...n5 }), n5[t4.trim()] = "");
      const a4 = Ft2(e7);
      try {
        r4(e7.proxy, o5, e7, n5, e7.props, e7.setupState, e7.data, e7.ctx);
      } finally {
        Ft2(a4);
      }
    } else
      e7.render && e7.render !== NOOP ? renderVNode(o5, e7.subTree = Ut(e7), e7, t4) : (n4.name || n4.__file, o5("<!---->"));
  }
  return r3();
}
function renderVNode(e7, t4, n4, r3) {
  const { type: o5, shapeFlag: s3, children: i4 } = t4;
  switch (o5) {
    case st2:
      e7(escapeHtml$1(i4));
      break;
    case it2:
      e7(i4 ? `<!--${a4 = i4, a4.replace(Q, "")}-->` : "<!---->");
      break;
    case at2:
      e7(i4);
      break;
    case ot2:
      t4.slotScopeIds && (r3 = (r3 ? r3 + " " : "") + t4.slotScopeIds.join(" ")), e7("<!--[-->"), renderVNodeChildren(e7, i4, n4, r3), e7("<!--]-->");
      break;
    default:
      1 & s3 ? function(e8, t5, n5, r4) {
        const o6 = t5.type;
        let { props: s4, children: i5, shapeFlag: a5, scopeId: l4, dirs: c2 } = t5, u3 = `<${o6}`;
        c2 && (s4 = function(e9, t6, n6) {
          const r5 = [];
          for (let t7 = 0; t7 < n6.length; t7++) {
            const o7 = n6[t7], { dir: { getSSRProps: s5 } } = o7;
            if (s5) {
              const t8 = s5(o7, e9);
              t8 && r5.push(t8);
            }
          }
          return mergeProps(t6 || {}, ...r5);
        }(t5, s4, c2));
        s4 && (u3 += ssrRenderAttrs(s4, o6));
        l4 && (u3 += ` ${l4}`);
        let p2 = n5, f2 = t5;
        for (; p2 && f2 === p2.subTree; )
          f2 = p2.vnode, f2.scopeId && (u3 += ` ${f2.scopeId}`), p2 = p2.parent;
        r4 && (u3 += ` ${r4}`);
        if (e8(u3 + ">"), !B2(o6)) {
          let t6 = false;
          s4 && (s4.innerHTML ? (t6 = true, e8(s4.innerHTML)) : s4.textContent ? (t6 = true, e8(escapeHtml$1(s4.textContent))) : "textarea" === o6 && s4.value && (t6 = true, e8(escapeHtml$1(s4.value)))), t6 || (8 & a5 ? e8(escapeHtml$1(i5)) : 16 & a5 && renderVNodeChildren(e8, i5, n5, r4)), e8(`</${o6}>`);
        }
      }(e7, t4, n4, r3) : 6 & s3 ? e7(renderComponentVNode(t4, n4, r3)) : 64 & s3 ? function(e8, t5, n5, r4) {
        const o6 = t5.props && t5.props.to, s4 = t5.props && t5.props.disabled;
        if (!o6)
          return [];
        if (!isString(o6))
          return [];
        !function(e9, t6, n6, r5, o7) {
          e9("<!--teleport start-->");
          const s5 = o7.appContext.provides[Fe], i5 = s5.__teleportBuffers || (s5.__teleportBuffers = {}), a5 = i5[n6] || (i5[n6] = []), l4 = a5.length;
          let c2;
          if (r5)
            t6(e9), c2 = "<!--teleport anchor-->";
          else {
            const { getBuffer: e10, push: n7 } = createBuffer();
            t6(n7), n7("<!--teleport anchor-->"), c2 = e10();
          }
          a5.splice(l4, 0, c2), e9("<!--teleport end-->");
        }(e8, (e9) => {
          renderVNodeChildren(e9, t5.children, n5, r4);
        }, o6, s4 || "" === s4, n5);
      }(e7, t4, n4, r3) : 128 & s3 && renderVNode(e7, t4.ssContent, n4, r3);
  }
  var a4;
}
function renderVNodeChildren(e7, t4, n4, r3) {
  for (let o5 = 0; o5 < t4.length; o5++)
    renderVNode(e7, zt2(t4[o5]), n4, r3);
}
async function unrollBuffer$1(e7) {
  if (e7.hasAsync) {
    let t4 = "";
    for (let n4 = 0; n4 < e7.length; n4++) {
      let r3 = e7[n4];
      isPromise(r3) && (r3 = await r3), isString(r3) ? t4 += r3 : t4 += await unrollBuffer$1(r3);
    }
    return t4;
  }
  return unrollBufferSync$1(e7);
}
function unrollBufferSync$1(e7) {
  let t4 = "";
  for (let n4 = 0; n4 < e7.length; n4++) {
    let r3 = e7[n4];
    isString(r3) ? t4 += r3 : t4 += unrollBufferSync$1(r3);
  }
  return t4;
}
async function renderToString(e7, t4 = {}) {
  if (Wt2(e7))
    return renderToString(createApp({ render: () => e7 }), t4);
  const n4 = createVNode(e7._component, e7._props);
  n4.appContext = e7._context, e7.provide(Fe, t4);
  const r3 = await renderComponentVNode(n4), o5 = await unrollBuffer$1(r3);
  if (await async function(e8) {
    if (e8.__teleportBuffers) {
      e8.teleports = e8.teleports || {};
      for (const t5 in e8.__teleportBuffers)
        e8.teleports[t5] = await unrollBuffer$1(await Promise.all([e8.__teleportBuffers[t5]]));
    }
  }(t4), t4.__watcherHandles)
    for (const e8 of t4.__watcherHandles)
      e8();
  return o5;
}
function hashCode(e7) {
  let t4 = 9;
  for (let n4 = 0; n4 < e7.length; )
    t4 = Math.imul(t4 ^ e7.charCodeAt(n4++), 9 ** 9);
  return (65536 + (t4 ^ t4 >>> 9)).toString(16).substring(1, 8).toLowerCase();
}
function resolveTitleTemplate(e7, t4) {
  return null == e7 ? t4 || null : "function" == typeof e7 ? e7(t4) : e7;
}
function normaliseStyleClassProps(e7, t4) {
  const n4 = "class" === e7 ? " " : ";";
  return "object" != typeof t4 || Array.isArray(t4) || (t4 = Object.entries(t4).filter(([, e8]) => e8).map(([t5, n5]) => "style" === e7 ? `${t5}:${n5}` : t5)), (Array.isArray(t4) ? t4.join(n4) : t4)?.split(n4).filter((e8) => e8.trim()).filter(Boolean).join(n4);
}
async function normaliseProps(e7, t4) {
  for (const n4 of Object.keys(e7))
    if (["class", "style"].includes(n4))
      e7[n4] = normaliseStyleClassProps(n4, e7[n4]);
    else if (e7[n4] instanceof Promise && (e7[n4] = await e7[n4]), !t4 && !Zt.includes(n4)) {
      const t5 = String(e7[n4]), r3 = n4.startsWith("data-");
      "true" === t5 || "" === t5 ? e7[n4] = !r3 || "true" : e7[n4] || (r3 && "false" === t5 ? e7[n4] = "false" : delete e7[n4]);
    }
  return e7;
}
async function normaliseEntryTags(e7) {
  const t4 = [];
  return Object.entries(e7.resolvedInput).filter(([e8, t5]) => void 0 !== t5 && Gt.includes(e8)).forEach(([n4, r3]) => {
    const o5 = function(e8) {
      return Array.isArray(e8) ? e8 : [e8];
    }(r3);
    t4.push(...o5.map((t5) => async function(e8, t6, n5) {
      const r4 = { tag: e8, props: await normaliseProps("object" != typeof t6 || "function" == typeof t6 || t6 instanceof Promise ? { [["script", "noscript", "style"].includes(e8) ? "innerHTML" : "textContent"]: t6 } : { ...t6 }, ["templateParams", "titleTemplate"].includes(e8)) };
      return Zt.forEach((e9) => {
        const t7 = void 0 !== r4.props[e9] ? r4.props[e9] : n5[e9];
        void 0 !== t7 && (["innerHTML", "textContent", "children"].includes(e9) && !qt2.includes(r4.tag) || (r4["children" === e9 ? "innerHTML" : e9] = t7), delete r4.props[e9]);
      }), r4.props.body && (r4.tagPosition = "bodyClose", delete r4.props.body), "script" === r4.tag && "object" == typeof r4.innerHTML && (r4.innerHTML = JSON.stringify(r4.innerHTML), r4.props.type = r4.props.type || "application/json"), Array.isArray(r4.props.content) ? r4.props.content.map((e9) => ({ ...r4, props: { ...r4.props, content: e9 } })) : r4;
    }(n4, t5, e7)).flat());
  }), (await Promise.all(t4)).flat().filter(Boolean).map((t5, n4) => (t5._e = e7._i, e7.mode && (t5._m = e7.mode), t5._p = (e7._i << Xt) + n4, t5));
}
function tagWeight(e7) {
  let t4 = 100;
  const n4 = e7.tagPriority;
  return "number" == typeof n4 ? n4 : ("meta" === e7.tag ? ("content-security-policy" === e7.props["http-equiv"] && (t4 = -30), e7.props.charset && (t4 = -20), "viewport" === e7.props.name && (t4 = -15)) : "link" === e7.tag && "preconnect" === e7.props.rel ? t4 = 20 : e7.tag in Yt && (t4 = Yt[e7.tag]), "string" == typeof n4 && n4 in Qt ? t4 + Qt[n4] : t4);
}
function processTemplateParams(e7, t4, n4) {
  if ("string" != typeof e7 || !e7.includes("%"))
    return e7;
  let r3 = e7;
  try {
    r3 = decodeURI(e7);
  } catch {
  }
  return (r3.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach((n5) => {
    const r4 = function(e8) {
      let n6;
      return n6 = ["s", "pageTitle"].includes(e8) ? t4.pageTitle : e8.includes(".") ? e8.split(".").reduce((e9, t5) => e9 && e9[t5] || void 0, t4) : t4[e8], void 0 !== n6 && (n6 || "").replace(/"/g, '\\"');
    }(n5.slice(1));
    "string" == typeof r4 && (e7 = e7.replace(new RegExp(`\\${n5}(\\W|$)`, "g"), (e8, t5) => `${r4}${t5}`).trim());
  }), e7.includes(nn) && (e7.endsWith(nn) && (e7 = e7.slice(0, -10).trim()), e7.startsWith(nn) && (e7 = e7.slice(10).trim()), e7 = processTemplateParams(e7 = e7.replace(new RegExp(`\\${nn}\\s*\\${nn}`, "g"), nn), { separator: n4 }, n4)), e7;
}
function encodeAttribute(e7) {
  return String(e7).replace(/"/g, "&quot;");
}
function propsToString(e7) {
  const t4 = [];
  for (const [n4, r3] of Object.entries(e7))
    false !== r3 && null !== r3 && t4.push(true === r3 ? n4 : `${n4}="${encodeAttribute(r3)}"`);
  return `${t4.length > 0 ? " " : ""}${t4.join(" ")}`;
}
function tagToString(e7) {
  const t4 = propsToString(e7.props), n4 = `<${e7.tag}${t4}>`;
  if (!qt2.includes(e7.tag))
    return Bt2.includes(e7.tag) ? n4 : `${n4}</${e7.tag}>`;
  let r3 = String(e7.innerHTML || "");
  return e7.textContent && (r3 = String(e7.textContent).replace(/[&<>"'/]/g, (e8) => {
    switch (e8) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e8;
    }
  })), Bt2.includes(e7.tag) ? n4 : `${n4}${r3}</${e7.tag}>`;
}
async function renderSSRHead(e7, t4) {
  const n4 = { shouldRender: true };
  if (await e7.hooks.callHook("ssr:beforeRender", n4), !n4.shouldRender)
    return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r3 = { tags: await e7.resolveTags() };
  await e7.hooks.callHook("ssr:render", r3);
  const o5 = function(e8, t5) {
    const n5 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: [], bodyClose: [], bodyOpen: [] } };
    for (const t6 of e8)
      "htmlAttrs" !== t6.tag && "bodyAttrs" !== t6.tag ? n5.tags[t6.tagPosition || "head"].push(tagToString(t6)) : n5[t6.tag] = { ...n5[t6.tag], ...t6.props };
    return { headTags: n5.tags.head.join("\n"), bodyTags: n5.tags.bodyClose.join("\n"), bodyTagsOpen: n5.tags.bodyOpen.join("\n"), htmlAttrs: propsToString(n5.htmlAttrs), bodyAttrs: propsToString(n5.bodyAttrs) };
  }(r3.tags), s3 = { tags: r3.tags, html: o5 };
  return await e7.hooks.callHook("ssr:rendered", s3), s3.html;
}
function createServerHead$1(e7 = {}) {
  return hn = function(e8 = {}) {
    const t4 = createHooks();
    t4.addHooks(e8.hooks || {}), e8.document = e8.document || void 0;
    const n4 = !e8.document, updated = () => {
      i4.dirty = true, t4.callHook("entries:updated", i4);
    };
    let r3 = 0, o5 = [];
    const s3 = [], i4 = { plugins: s3, dirty: false, resolvedOptions: e8, hooks: t4, headEntries: () => o5, use(e9) {
      const r4 = "function" == typeof e9 ? e9(i4) : e9;
      r4.key && s3.some((e10) => e10.key === r4.key) || (s3.push(r4), filterMode(r4.mode, n4) && t4.addHooks(r4.hooks || {}));
    }, push(e9, s4) {
      delete s4?.head;
      const a4 = { _i: r3++, input: e9, ...s4 };
      return filterMode(a4.mode, n4) && (o5.push(a4), updated()), { dispose() {
        o5 = o5.filter((e10) => e10._i !== a4._i), t4.callHook("entries:updated", i4), updated();
      }, patch(e10) {
        o5 = o5.map((t5) => (t5._i === a4._i && (t5.input = a4.input = e10), t5)), updated();
      } };
    }, async resolveTags() {
      const e9 = { tags: [], entries: [...o5] };
      await t4.callHook("entries:resolve", e9);
      for (const n5 of e9.entries) {
        const r4 = n5.resolvedInput || n5.input;
        if (n5.resolvedInput = await (n5.transform ? n5.transform(r4) : r4), n5.resolvedInput)
          for (const r5 of await normaliseEntryTags(n5)) {
            const o6 = { tag: r5, entry: n5, resolvedOptions: i4.resolvedOptions };
            await t4.callHook("tag:normalise", o6), e9.tags.push(o6.tag);
          }
      }
      return await t4.callHook("tags:beforeResolve", e9), await t4.callHook("tags:resolve", e9), await t4.callHook("tags:afterResolve", e9), e9.tags;
    }, ssr: n4 };
    return [on, sn, EventHandlersPlugin, cn, un2, TemplateParamsPlugin, fn2, dn, ...e8?.plugins || []].forEach((e9) => i4.use(e9)), i4.hooks.callHook("init", i4), i4;
  }(e7);
}
function filterMode(e7, t4) {
  return !e7 || "server" === e7 && t4 || "client" === e7 && !t4;
}
function getActiveHead() {
  return hn;
}
function resolveUnrefHeadInput2(e7, t4 = "") {
  if (e7 instanceof Promise)
    return e7;
  const n4 = "function" == typeof (r3 = e7) ? r3() : unref(r3);
  var r3;
  return e7 && n4 ? Array.isArray(n4) ? n4.map((e8) => resolveUnrefHeadInput2(e8, t4)) : "object" == typeof n4 ? Object.fromEntries(Object.entries(n4).map(([e8, t5]) => "titleTemplate" === e8 || e8.startsWith("on") ? [e8, unref(t5)] : [e8, resolveUnrefHeadInput2(t5, e8)])) : n4 : n4;
}
function createServerHead(e7 = {}) {
  const t4 = createServerHead$1(e7);
  return t4.use(mn2), t4.install = function(e8) {
    return { install(t5) {
      gn2 && (t5.config.globalProperties.$unhead = e8, t5.config.globalProperties.$head = e8, t5.provide(yn2, e8));
    } }.install;
  }(t4), t4;
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...e7) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e7);
}
function publicAssetsURL(...e7) {
  const t4 = useRuntimeConfig2().app, n4 = t4.cdnURL || t4.baseURL;
  return e7.length ? joinRelativeURL(n4, ...e7) : n4;
}
function lazyCachedFunction(e7) {
  let t4 = null;
  return () => (null === t4 && (t4 = e7().catch((e8) => {
    throw t4 = null, e8;
  })), t4);
}
function normalizeChunks(e7) {
  return e7.filter(Boolean).map((e8) => e8.trim());
}
function joinTags(e7) {
  return e7.join("");
}
function joinAttrs(e7) {
  return 0 === e7.length ? "" : " " + e7.join(" ");
}
function renderPayloadJsonScript(e7) {
  const t4 = e7.data ? stringify(e7.data, e7.ssrContext._payloadReducers) : "", n4 = { type: "application/json", id: e7.id, innerHTML: t4, "data-ssr": !e7.ssrContext.noSSR };
  return e7.src && (n4["data-src"] = e7.src), [n4, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e7.ssrContext.config)}` }];
}
function splitPayload(e7) {
  const { data: t4, prerenderedAt: n4, ...r3 } = e7.payload;
  return { initial: { ...r3, prerenderedAt: n4 }, payload: { data: t4, prerenderedAt: n4 } };
}
var m, DevalueError, y, v2, _2, b, k, R, w2, S, C, x, A2, $, NOOP, NO, isOn, isModelListener, O2, remove, T, hasOwn, E2, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, P, toTypeString, toRawType, isPlainObject2, isIntegerKey, j, cacheStringFunction, H, I, M, N2, L, V, hasChanged, invokeArrayFns, def, looseToNumber, F, getGlobalThis, D, U, z, W2, B2, q2, J, G, K, Z2, X2, Y, Q, toDisplayString, replacer, stringifySymbol, ee, te, EffectScope, ReactiveEffect, ne, re, oe, se, createDep, ie, ae, le, ce, ue, pe2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, fe, de2, he, toShallow, getProto, ge, me, ye2, ve, _e, be2, ke, Re, we, Se, Ce, toReactive, toReadonly, ComputedRefImpl, RefImpl, xe, ObjectRefImpl, GetterRefImpl, Ae2, $e, Oe, Te, Ee, Pe2, je, He, Ie, getId, comparator, Me, Ne, getFunctionalFallthrough, filterModelListeners, Le, Ve, Fe, useSSRContext, De, isAsyncWrapper, isKeepAlive, createHook, Ue, ze, We, Be, qe, Je, Ge, Ke, Ze, getPublicInstance, Xe2, hasSetupBinding, Ye, Qe, et2, tt2, nt, rt, createInternalObject, isInternalObject, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, initSlots, updateSlots, queuePostRenderEffect, ot2, st2, it2, at2, lt2, ct2, normalizeKey, normalizeRef, createVNode, ut2, pt2, ft2, getCurrentInstance, dt2, ht2, setCurrentInstance, unsetCurrentInstance, gt, mt, yt, computed, vt2, _t, bt2, kt2, Rt, wt, St, Ct, xt, At2, $t, Ot2, Tt, Et2, Pt, jt, Ht, It2, getNow, isNativeOn, Mt, Nt, createApp, Lt, Vt, Ft2, Dt2, Ut, zt2, Wt2, Bt2, qt2, Jt, Gt, Kt, Zt, Xt, Yt, Qt, en, tn, nn, rn, on, sn, an, EventHandlersPlugin, ln, cn, un2, pn, TemplateParamsPlugin, fn2, dn, hn, gn2, mn2, yn2, vn2, _n2, bn2, getClientManifest, kn2, Rn2, wn2, Sn2, Cn2, xn2, An2, $n2, On2, Tn2;
var init_renderer = __esm({
  ".output/server/chunks/routes/renderer.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    m = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      constructor(e7, t4) {
        super(e7), this.name = "DevalueError", this.path = t4.join("");
      }
    };
    y = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    v2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    _2 = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    b = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    k = -1;
    R = -2;
    w2 = -3;
    S = -4;
    C = -5;
    x = -6;
    A2 = {};
    $ = [];
    NOOP = () => {
    };
    NO = () => false;
    isOn = (e7) => 111 === e7.charCodeAt(0) && 110 === e7.charCodeAt(1) && (e7.charCodeAt(2) > 122 || e7.charCodeAt(2) < 97);
    isModelListener = (e7) => e7.startsWith("onUpdate:");
    O2 = Object.assign;
    remove = (e7, t4) => {
      const n4 = e7.indexOf(t4);
      n4 > -1 && e7.splice(n4, 1);
    };
    T = Object.prototype.hasOwnProperty;
    hasOwn = (e7, t4) => T.call(e7, t4);
    E2 = Array.isArray;
    isMap = (e7) => "[object Map]" === toTypeString(e7);
    isSet = (e7) => "[object Set]" === toTypeString(e7);
    isFunction = (e7) => "function" == typeof e7;
    isString = (e7) => "string" == typeof e7;
    isSymbol = (e7) => "symbol" == typeof e7;
    isObject = (e7) => null !== e7 && "object" == typeof e7;
    isPromise = (e7) => (isObject(e7) || isFunction(e7)) && isFunction(e7.then) && isFunction(e7.catch);
    P = Object.prototype.toString;
    toTypeString = (e7) => P.call(e7);
    toRawType = (e7) => toTypeString(e7).slice(8, -1);
    isPlainObject2 = (e7) => "[object Object]" === toTypeString(e7);
    isIntegerKey = (e7) => isString(e7) && "NaN" !== e7 && "-" !== e7[0] && "" + parseInt(e7, 10) === e7;
    j = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = (e7) => {
      const t4 = /* @__PURE__ */ Object.create(null);
      return (n4) => t4[n4] || (t4[n4] = e7(n4));
    };
    H = /-(\w)/g;
    I = cacheStringFunction((e7) => e7.replace(H, (e8, t4) => t4 ? t4.toUpperCase() : ""));
    M = /\B([A-Z])/g;
    N2 = cacheStringFunction((e7) => e7.replace(M, "-$1").toLowerCase());
    L = cacheStringFunction((e7) => e7.charAt(0).toUpperCase() + e7.slice(1));
    V = cacheStringFunction((e7) => e7 ? `on${L(e7)}` : "");
    hasChanged = (e7, t4) => !Object.is(e7, t4);
    invokeArrayFns = (e7, t4) => {
      for (let n4 = 0; n4 < e7.length; n4++)
        e7[n4](t4);
    };
    def = (e7, t4, n4) => {
      Object.defineProperty(e7, t4, { configurable: true, enumerable: false, value: n4 });
    };
    looseToNumber = (e7) => {
      const t4 = parseFloat(e7);
      return isNaN(t4) ? e7 : t4;
    };
    getGlobalThis = () => F || (F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {});
    D = /;(?![^(]*\))/g;
    U = /:([^]+)/;
    z = /\/\*[^]*?\*\//g;
    W2 = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    B2 = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    q2 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    J = makeMap(q2);
    G = makeMap(q2 + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    K = /[>/="'\u0009\u000a\u000c\u0020]/;
    Z2 = {};
    X2 = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    Y = /["'&<>]/;
    Q = /^-?>|<!--|-->|--!>|<!-$/g;
    toDisplayString = (e7) => isString(e7) ? e7 : null == e7 ? "" : E2(e7) || isObject(e7) && (e7.toString === P || !isFunction(e7.toString)) ? JSON.stringify(e7, replacer, 2) : String(e7);
    replacer = (e7, t4) => t4 && t4.__v_isRef ? replacer(e7, t4.value) : isMap(t4) ? { [`Map(${t4.size})`]: [...t4.entries()].reduce((e8, [t5, n4], r3) => (e8[stringifySymbol(t5, r3) + " =>"] = n4, e8), {}) } : isSet(t4) ? { [`Set(${t4.size})`]: [...t4.values()].map((e8) => stringifySymbol(e8)) } : isSymbol(t4) ? stringifySymbol(t4) : !isObject(t4) || E2(t4) || isPlainObject2(t4) ? t4 : String(t4);
    stringifySymbol = (e7, t4 = "") => {
      var n4;
      return isSymbol(e7) ? `Symbol(${null != (n4 = e7.description) ? n4 : t4})` : e7;
    };
    EffectScope = class {
      constructor(e7 = false) {
        this.detached = e7, this._active = true, this.effects = [], this.cleanups = [], this.parent = ee, !e7 && ee && (this.index = (ee.scopes || (ee.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      run(e7) {
        if (this._active) {
          const t4 = ee;
          try {
            return ee = this, e7();
          } finally {
            ee = t4;
          }
        }
      }
      on() {
        ee = this;
      }
      off() {
        ee = this.parent;
      }
      stop(e7) {
        if (this._active) {
          let t4, n4;
          for (t4 = 0, n4 = this.effects.length; t4 < n4; t4++)
            this.effects[t4].stop();
          for (t4 = 0, n4 = this.cleanups.length; t4 < n4; t4++)
            this.cleanups[t4]();
          if (this.scopes)
            for (t4 = 0, n4 = this.scopes.length; t4 < n4; t4++)
              this.scopes[t4].stop(true);
          if (!this.detached && this.parent && !e7) {
            const e8 = this.parent.scopes.pop();
            e8 && e8 !== this && (this.parent.scopes[this.index] = e8, e8.index = this.index);
          }
          this.parent = void 0, this._active = false;
        }
      }
    };
    ReactiveEffect = class {
      constructor(e7, t4, n4, r3) {
        this.fn = e7, this.trigger = t4, this.scheduler = n4, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e8, t5 = ee) {
          t5 && t5.active && t5.effects.push(e8);
        }(this, r3);
      }
      get dirty() {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
          this._dirtyLevel = 1, pauseTracking();
          for (let e7 = 0; e7 < this._depsLength; e7++) {
            const t4 = this.deps[e7];
            if (t4.computed && (triggerComputed(t4.computed), this._dirtyLevel >= 4))
              break;
          }
          1 === this._dirtyLevel && (this._dirtyLevel = 0), resetTracking();
        }
        return this._dirtyLevel >= 4;
      }
      set dirty(e7) {
        this._dirtyLevel = e7 ? 4 : 0;
      }
      run() {
        if (this._dirtyLevel = 0, !this.active)
          return this.fn();
        let e7 = ne, t4 = te;
        try {
          return ne = true, te = this, this._runnings++, preCleanupEffect(this), this.fn();
        } finally {
          postCleanupEffect(this), this._runnings--, te = t4, ne = e7;
        }
      }
      stop() {
        var e7;
        this.active && (preCleanupEffect(this), postCleanupEffect(this), null == (e7 = this.onStop) || e7.call(this), this.active = false);
      }
    };
    ne = true;
    re = 0;
    oe = [];
    se = [];
    createDep = (e7, t4) => {
      const n4 = /* @__PURE__ */ new Map();
      return n4.cleanup = e7, n4.computed = t4, n4;
    };
    ie = /* @__PURE__ */ new WeakMap();
    ae = Symbol("");
    le = Symbol("");
    ce = makeMap("__proto__,__v_isRef,__isVue");
    ue = new Set(Object.getOwnPropertyNames(Symbol).filter((e7) => "arguments" !== e7 && "caller" !== e7).map((e7) => Symbol[e7]).filter(isSymbol));
    pe2 = createArrayInstrumentations();
    BaseReactiveHandler = class {
      constructor(e7 = false, t4 = false) {
        this._isReadonly = e7, this._isShallow = t4;
      }
      get(e7, t4, n4) {
        const r3 = this._isReadonly, o5 = this._isShallow;
        if ("__v_isReactive" === t4)
          return !r3;
        if ("__v_isReadonly" === t4)
          return r3;
        if ("__v_isShallow" === t4)
          return o5;
        if ("__v_raw" === t4)
          return n4 === (r3 ? o5 ? Ce : Se : o5 ? we : Re).get(e7) || Object.getPrototypeOf(e7) === Object.getPrototypeOf(n4) ? e7 : void 0;
        const s3 = E2(e7);
        if (!r3) {
          if (s3 && hasOwn(pe2, t4))
            return Reflect.get(pe2, t4, n4);
          if ("hasOwnProperty" === t4)
            return hasOwnProperty;
        }
        const i4 = Reflect.get(e7, t4, n4);
        return (isSymbol(t4) ? ue.has(t4) : ce(t4)) ? i4 : (r3 || track(e7, 0, t4), o5 ? i4 : isRef(i4) ? s3 && isIntegerKey(t4) ? i4 : i4.value : isObject(i4) ? r3 ? readonly(i4) : reactive(i4) : i4);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(e7 = false) {
        super(false, e7);
      }
      set(e7, t4, n4, r3) {
        let o5 = e7[t4];
        if (!this._isShallow) {
          const t5 = isReadonly(o5);
          if (isShallow(n4) || isReadonly(n4) || (o5 = toRaw(o5), n4 = toRaw(n4)), !E2(e7) && isRef(o5) && !isRef(n4))
            return !t5 && (o5.value = n4, true);
        }
        const s3 = E2(e7) && isIntegerKey(t4) ? Number(t4) < e7.length : hasOwn(e7, t4), i4 = Reflect.set(e7, t4, n4, r3);
        return e7 === toRaw(r3) && (s3 ? hasChanged(n4, o5) && trigger(e7, "set", t4, n4) : trigger(e7, "add", t4, n4)), i4;
      }
      deleteProperty(e7, t4) {
        const n4 = hasOwn(e7, t4);
        e7[t4];
        const r3 = Reflect.deleteProperty(e7, t4);
        return r3 && n4 && trigger(e7, "delete", t4, void 0), r3;
      }
      has(e7, t4) {
        const n4 = Reflect.has(e7, t4);
        return isSymbol(t4) && ue.has(t4) || track(e7, 0, t4), n4;
      }
      ownKeys(e7) {
        return track(e7, 0, E2(e7) ? "length" : ae), Reflect.ownKeys(e7);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(e7 = false) {
        super(true, e7);
      }
      set(e7, t4) {
        return true;
      }
      deleteProperty(e7, t4) {
        return true;
      }
    };
    fe = new MutableReactiveHandler();
    de2 = new ReadonlyReactiveHandler();
    he = new MutableReactiveHandler(true);
    toShallow = (e7) => e7;
    getProto = (e7) => Reflect.getPrototypeOf(e7);
    [ge, me, ye2, ve] = createInstrumentations();
    _e = { get: createInstrumentationGetter(false, false) };
    be2 = { get: createInstrumentationGetter(false, true) };
    ke = { get: createInstrumentationGetter(true, false) };
    Re = /* @__PURE__ */ new WeakMap();
    we = /* @__PURE__ */ new WeakMap();
    Se = /* @__PURE__ */ new WeakMap();
    Ce = /* @__PURE__ */ new WeakMap();
    toReactive = (e7) => isObject(e7) ? reactive(e7) : e7;
    toReadonly = (e7) => isObject(e7) ? readonly(e7) : e7;
    ComputedRefImpl = class {
      constructor(e7, t4, n4, r3) {
        this.getter = e7, this._setter = t4, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ReactiveEffect(() => e7(this._value), () => triggerRefValue(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r3, this.__v_isReadonly = n4;
      }
      get value() {
        const e7 = toRaw(this);
        return e7._cacheable && !e7.effect.dirty || !hasChanged(e7._value, e7._value = e7.effect.run()) || triggerRefValue(e7, 4), trackRefValue(e7), e7.effect._dirtyLevel >= 2 && triggerRefValue(e7, 2), e7._value;
      }
      set value(e7) {
        this._setter(e7);
      }
      get _dirty() {
        return this.effect.dirty;
      }
      set _dirty(e7) {
        this.effect.dirty = e7;
      }
    };
    RefImpl = class {
      constructor(e7, t4) {
        this.__v_isShallow = t4, this.dep = void 0, this.__v_isRef = true, this._rawValue = t4 ? e7 : toRaw(e7), this._value = t4 ? e7 : toReactive(e7);
      }
      get value() {
        return trackRefValue(this), this._value;
      }
      set value(e7) {
        const t4 = this.__v_isShallow || isShallow(e7) || isReadonly(e7);
        e7 = t4 ? e7 : toRaw(e7), hasChanged(e7, this._rawValue) && (this._rawValue = e7, this._value = t4 ? e7 : toReactive(e7), triggerRefValue(this, 4));
      }
    };
    xe = { get: (e7, t4, n4) => unref(Reflect.get(e7, t4, n4)), set: (e7, t4, n4, r3) => {
      const o5 = e7[t4];
      return isRef(o5) && !isRef(n4) ? (o5.value = n4, true) : Reflect.set(e7, t4, n4, r3);
    } };
    ObjectRefImpl = class {
      constructor(e7, t4, n4) {
        this._object = e7, this._key = t4, this._defaultValue = n4, this.__v_isRef = true;
      }
      get value() {
        const e7 = this._object[this._key];
        return void 0 === e7 ? this._defaultValue : e7;
      }
      set value(e7) {
        this._object[this._key] = e7;
      }
      get dep() {
        return e7 = toRaw(this._object), t4 = this._key, null == (n4 = ie.get(e7)) ? void 0 : n4.get(t4);
        var e7, t4, n4;
      }
    };
    GetterRefImpl = class {
      constructor(e7) {
        this._getter = e7, this.__v_isRef = true, this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    };
    Ae2 = false;
    $e = false;
    Oe = [];
    Te = 0;
    Ee = [];
    Pe2 = null;
    je = 0;
    He = Promise.resolve();
    Ie = null;
    getId = (e7) => null == e7.id ? 1 / 0 : e7.id;
    comparator = (e7, t4) => {
      const n4 = getId(e7) - getId(t4);
      if (0 === n4) {
        if (e7.pre && !t4.pre)
          return -1;
        if (t4.pre && !e7.pre)
          return 1;
      }
      return n4;
    };
    Me = null;
    Ne = null;
    getFunctionalFallthrough = (e7) => {
      let t4;
      for (const n4 in e7)
        ("class" === n4 || "style" === n4 || isOn(n4)) && ((t4 || (t4 = {}))[n4] = e7[n4]);
      return t4;
    };
    filterModelListeners = (e7, t4) => {
      const n4 = {};
      for (const r3 in e7)
        isModelListener(r3) && r3.slice(9) in t4 || (n4[r3] = e7[r3]);
      return n4;
    };
    Le = "components";
    Ve = Symbol.for("v-ndc");
    Fe = Symbol.for("v-scx");
    useSSRContext = () => inject(Fe);
    De = {};
    isAsyncWrapper = (e7) => !!e7.type.__asyncLoader;
    isKeepAlive = (e7) => e7.type.__isKeepAlive;
    createHook = (e7) => (t4, n4 = ft2) => (!mt || "sp" === e7) && injectHook(e7, (...e8) => t4(...e8), n4);
    Ue = createHook("bm");
    ze = createHook("m");
    We = createHook("bu");
    Be = createHook("u");
    qe = createHook("bum");
    Je = createHook("um");
    Ge = createHook("sp");
    Ke = createHook("rtg");
    Ze = createHook("rtc");
    getPublicInstance = (e7) => e7 ? isStatefulComponent(e7) ? getExposeProxy(e7) || e7.proxy : getPublicInstance(e7.parent) : null;
    Xe2 = O2(/* @__PURE__ */ Object.create(null), { $: (e7) => e7, $el: (e7) => e7.vnode.el, $data: (e7) => e7.data, $props: (e7) => e7.props, $attrs: (e7) => e7.attrs, $slots: (e7) => e7.slots, $refs: (e7) => e7.refs, $parent: (e7) => getPublicInstance(e7.parent), $root: (e7) => getPublicInstance(e7.root), $emit: (e7) => e7.emit, $options: (e7) => __VUE_OPTIONS_API__ ? resolveMergedOptions(e7) : e7.type, $forceUpdate: (e7) => e7.f || (e7.f = () => {
      e7.effect.dirty = true, queueJob(e7.update);
    }), $nextTick: (e7) => e7.n || (e7.n = nextTick.bind(e7.proxy)), $watch: (e7) => __VUE_OPTIONS_API__ ? instanceWatch.bind(e7) : NOOP });
    hasSetupBinding = (e7, t4) => e7 !== A2 && !e7.__isScriptSetup && hasOwn(e7, t4);
    Ye = { get({ _: e7 }, t4) {
      if ("__v_skip" === t4)
        return true;
      const { ctx: n4, setupState: r3, data: o5, props: s3, accessCache: i4, type: a4, appContext: l4 } = e7;
      let c2;
      if ("$" !== t4[0]) {
        const a5 = i4[t4];
        if (void 0 !== a5)
          switch (a5) {
            case 1:
              return r3[t4];
            case 2:
              return o5[t4];
            case 4:
              return n4[t4];
            case 3:
              return s3[t4];
          }
        else {
          if (hasSetupBinding(r3, t4))
            return i4[t4] = 1, r3[t4];
          if (o5 !== A2 && hasOwn(o5, t4))
            return i4[t4] = 2, o5[t4];
          if ((c2 = e7.propsOptions[0]) && hasOwn(c2, t4))
            return i4[t4] = 3, s3[t4];
          if (n4 !== A2 && hasOwn(n4, t4))
            return i4[t4] = 4, n4[t4];
          __VUE_OPTIONS_API__ && !Qe || (i4[t4] = 0);
        }
      }
      const u3 = Xe2[t4];
      let p2, f2;
      return u3 ? ("$attrs" === t4 && track(e7.attrs, 0, ""), u3(e7)) : (p2 = a4.__cssModules) && (p2 = p2[t4]) ? p2 : n4 !== A2 && hasOwn(n4, t4) ? (i4[t4] = 4, n4[t4]) : (f2 = l4.config.globalProperties, hasOwn(f2, t4) ? f2[t4] : void 0);
    }, set({ _: e7 }, t4, n4) {
      const { data: r3, setupState: o5, ctx: s3 } = e7;
      return hasSetupBinding(o5, t4) ? (o5[t4] = n4, true) : r3 !== A2 && hasOwn(r3, t4) ? (r3[t4] = n4, true) : !hasOwn(e7.props, t4) && (("$" !== t4[0] || !(t4.slice(1) in e7)) && (s3[t4] = n4, true));
    }, has({ _: { data: e7, setupState: t4, accessCache: n4, ctx: r3, appContext: o5, propsOptions: s3 } }, i4) {
      let a4;
      return !!n4[i4] || e7 !== A2 && hasOwn(e7, i4) || hasSetupBinding(t4, i4) || (a4 = s3[0]) && hasOwn(a4, i4) || hasOwn(r3, i4) || hasOwn(Xe2, i4) || hasOwn(o5.config.globalProperties, i4);
    }, defineProperty(e7, t4, n4) {
      return null != n4.get ? e7._.accessCache[t4] = 0 : hasOwn(n4, "value") && this.set(e7, t4, n4.value, null), Reflect.defineProperty(e7, t4, n4);
    } };
    Qe = true;
    et2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: function(e7, t4) {
      if (!e7)
        return t4;
      if (!t4)
        return e7;
      const n4 = O2(/* @__PURE__ */ Object.create(null), e7);
      for (const r3 in t4)
        n4[r3] = mergeAsArray(e7[r3], t4[r3]);
      return n4;
    }, provide: mergeDataFn, inject: function(e7, t4) {
      return mergeObjectOptions(normalizeInject(e7), normalizeInject(t4));
    } };
    tt2 = 0;
    nt = null;
    rt = {};
    createInternalObject = () => Object.create(rt);
    isInternalObject = (e7) => Object.getPrototypeOf(e7) === rt;
    isInternalKey = (e7) => "_" === e7[0] || "$stable" === e7;
    normalizeSlotValue = (e7) => E2(e7) ? e7.map(normalizeVNode$1) : [normalizeVNode$1(e7)];
    normalizeSlot = (e7, t4, n4) => {
      if (t4._n)
        return t4;
      const r3 = withCtx((...e8) => normalizeSlotValue(t4(...e8)), n4);
      return r3._c = false, r3;
    };
    normalizeObjectSlots = (e7, t4, n4) => {
      const r3 = e7._ctx;
      for (const n5 in e7) {
        if (isInternalKey(n5))
          continue;
        const o5 = e7[n5];
        if (isFunction(o5))
          t4[n5] = normalizeSlot(0, o5, r3);
        else if (null != o5) {
          const e8 = normalizeSlotValue(o5);
          t4[n5] = () => e8;
        }
      }
    };
    normalizeVNodeSlots = (e7, t4) => {
      const n4 = normalizeSlotValue(t4);
      e7.slots.default = () => n4;
    };
    initSlots = (e7, t4) => {
      const n4 = e7.slots = createInternalObject();
      if (32 & e7.vnode.shapeFlag) {
        const e8 = t4._;
        e8 ? (O2(n4, t4), def(n4, "_", e8)) : normalizeObjectSlots(t4, n4);
      } else
        t4 && normalizeVNodeSlots(e7, t4);
    };
    updateSlots = (e7, t4, n4) => {
      const { vnode: r3, slots: o5 } = e7;
      let s3 = true, i4 = A2;
      if (32 & r3.shapeFlag) {
        const e8 = t4._;
        e8 ? n4 && 1 === e8 ? s3 = false : (O2(o5, t4), n4 || 1 !== e8 || delete o5._) : (s3 = !t4.$stable, normalizeObjectSlots(t4, o5)), i4 = t4;
      } else
        t4 && (normalizeVNodeSlots(e7, t4), i4 = { default: 1 });
      if (s3)
        for (const e8 in o5)
          isInternalKey(e8) || null != i4[e8] || delete o5[e8];
    };
    queuePostRenderEffect = function(e7, t4) {
      var n4;
      t4 && t4.pendingBranch ? E2(e7) ? t4.effects.push(...e7) : t4.effects.push(e7) : (E2(n4 = e7) ? Ee.push(...n4) : Pe2 && Pe2.includes(n4, n4.allowRecurse ? je + 1 : je) || Ee.push(n4), queueFlush());
    };
    ot2 = Symbol.for("v-fgt");
    st2 = Symbol.for("v-txt");
    it2 = Symbol.for("v-cmt");
    at2 = Symbol.for("v-stc");
    lt2 = null;
    ct2 = 1;
    normalizeKey = ({ key: e7 }) => null != e7 ? e7 : null;
    normalizeRef = ({ ref: e7, ref_key: t4, ref_for: n4 }) => ("number" == typeof e7 && (e7 = "" + e7), null != e7 ? isString(e7) || isRef(e7) || isFunction(e7) ? { i: Me, r: e7, k: t4, f: !!n4 } : e7 : null);
    createVNode = function(e7, t4 = null, n4 = null, r3 = 0, o5 = null, s3 = false) {
      e7 && e7 !== Ve || (e7 = it2);
      if (isVNode(e7)) {
        const r4 = cloneVNode(e7, t4, true);
        return n4 && normalizeChildren(r4, n4), ct2 > 0 && !s3 && lt2 && (6 & r4.shapeFlag ? lt2[lt2.indexOf(e7)] = r4 : lt2.push(r4)), r4.patchFlag |= -2, r4;
      }
      i4 = e7, isFunction(i4) && "__vccOpts" in i4 && (e7 = e7.__vccOpts);
      var i4;
      if (t4) {
        t4 = function(e9) {
          return e9 ? isProxy(e9) || isInternalObject(e9) ? O2({}, e9) : e9 : null;
        }(t4);
        let { class: e8, style: n5 } = t4;
        e8 && !isString(e8) && (t4.class = normalizeClass(e8)), isObject(n5) && (isProxy(n5) && !E2(n5) && (n5 = O2({}, n5)), t4.style = normalizeStyle(n5));
      }
      const a4 = isString(e7) ? 1 : ((e8) => e8.__isSuspense)(e7) ? 128 : ((e8) => e8.__isTeleport)(e7) ? 64 : isObject(e7) ? 4 : isFunction(e7) ? 2 : 0;
      return function(e8, t5 = null, n5 = null, r4 = 0, o6 = null, s4 = e8 === ot2 ? 0 : 1, i5 = false, a5 = false) {
        const l4 = { __v_isVNode: true, __v_skip: true, type: e8, props: t5, key: t5 && normalizeKey(t5), ref: t5 && normalizeRef(t5), scopeId: Ne, slotScopeIds: null, children: n5, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: s4, patchFlag: r4, dynamicProps: o6, dynamicChildren: null, appContext: null, ctx: Me };
        return a5 ? (normalizeChildren(l4, n5), 128 & s4 && e8.normalize(l4)) : n5 && (l4.shapeFlag |= isString(n5) ? 8 : 16), ct2 > 0 && !i5 && lt2 && (l4.patchFlag > 0 || 6 & s4) && 32 !== l4.patchFlag && lt2.push(l4), l4;
      }(e7, t4, n4, r3, o5, a4, s3, true);
    };
    ut2 = createAppContext();
    pt2 = 0;
    ft2 = null;
    getCurrentInstance = () => ft2 || Me;
    {
      const e7 = getGlobalThis(), registerGlobalSetter = (t4, n4) => {
        let r3;
        return (r3 = e7[t4]) || (r3 = e7[t4] = []), r3.push(n4), (e8) => {
          r3.length > 1 ? r3.forEach((t5) => t5(e8)) : r3[0](e8);
        };
      };
      dt2 = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e8) => ft2 = e8), ht2 = registerGlobalSetter("__VUE_SSR_SETTERS__", (e8) => mt = e8);
    }
    setCurrentInstance = (e7) => {
      const t4 = ft2;
      return dt2(e7), e7.scope.on(), () => {
        e7.scope.off(), dt2(t4);
      };
    };
    unsetCurrentInstance = () => {
      ft2 && ft2.scope.off(), dt2(null);
    };
    mt = false;
    yt = { get: (e7, t4) => (track(e7, 0, ""), e7[t4]) };
    computed = (e7, t4) => {
      const n4 = function(e8, t5, n5 = false) {
        let r3, o5;
        const s3 = isFunction(e8);
        return s3 ? (r3 = e8, o5 = NOOP) : (r3 = e8.get, o5 = e8.set), new ComputedRefImpl(r3, o5, s3 || !o5, n5);
      }(e7, 0, mt);
      return n4;
    };
    vt2 = "3.4.25";
    _t = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1 };
    bt2 = "undefined" != typeof document ? document : null;
    kt2 = bt2 && bt2.createElement("template");
    Rt = { insert: (e7, t4, n4) => {
      t4.insertBefore(e7, n4 || null);
    }, remove: (e7) => {
      const t4 = e7.parentNode;
      t4 && t4.removeChild(e7);
    }, createElement: (e7, t4, n4, r3) => {
      const o5 = "svg" === t4 ? bt2.createElementNS("http://www.w3.org/2000/svg", e7) : "mathml" === t4 ? bt2.createElementNS("http://www.w3.org/1998/Math/MathML", e7) : bt2.createElement(e7, n4 ? { is: n4 } : void 0);
      return "select" === e7 && r3 && null != r3.multiple && o5.setAttribute("multiple", r3.multiple), o5;
    }, createText: (e7) => bt2.createTextNode(e7), createComment: (e7) => bt2.createComment(e7), setText: (e7, t4) => {
      e7.nodeValue = t4;
    }, setElementText: (e7, t4) => {
      e7.textContent = t4;
    }, parentNode: (e7) => e7.parentNode, nextSibling: (e7) => e7.nextSibling, querySelector: (e7) => bt2.querySelector(e7), setScopeId(e7, t4) {
      e7.setAttribute(t4, "");
    }, insertStaticContent(e7, t4, n4, r3, o5, s3) {
      const i4 = n4 ? n4.previousSibling : t4.lastChild;
      if (o5 && (o5 === s3 || o5.nextSibling))
        for (; t4.insertBefore(o5.cloneNode(true), n4), o5 !== s3 && (o5 = o5.nextSibling); )
          ;
      else {
        kt2.innerHTML = "svg" === r3 ? `<svg>${e7}</svg>` : "mathml" === r3 ? `<math>${e7}</math>` : e7;
        const o6 = kt2.content;
        if ("svg" === r3 || "mathml" === r3) {
          const e8 = o6.firstChild;
          for (; e8.firstChild; )
            o6.appendChild(e8.firstChild);
          o6.removeChild(e8);
        }
        t4.insertBefore(o6, n4);
      }
      return [i4 ? i4.nextSibling : t4.firstChild, n4 ? n4.previousSibling : t4.lastChild];
    } };
    wt = Symbol("_vtc");
    St = Symbol("_vod");
    Ct = Symbol("_vsh");
    xt = Symbol("");
    At2 = /(^|;)\s*display\s*:/;
    $t = /\s*!important$/;
    Ot2 = ["Webkit", "Moz", "ms"];
    Tt = {};
    Et2 = "http://www.w3.org/1999/xlink";
    Pt = Symbol("_vei");
    jt = /(?:Once|Passive|Capture)$/;
    Ht = 0;
    It2 = Promise.resolve();
    getNow = () => Ht || (It2.then(() => Ht = 0), Ht = Date.now());
    isNativeOn = (e7) => 111 === e7.charCodeAt(0) && 110 === e7.charCodeAt(1) && e7.charCodeAt(2) > 96 && e7.charCodeAt(2) < 123;
    Mt = O2({ patchProp: (e7, t4, n4, r3, o5, s3, i4, a4, l4) => {
      const c2 = "svg" === o5;
      "class" === t4 ? function(e8, t5, n5) {
        const r4 = e8[wt];
        r4 && (t5 = (t5 ? [t5, ...r4] : [...r4]).join(" ")), null == t5 ? e8.removeAttribute("class") : n5 ? e8.setAttribute("class", t5) : e8.className = t5;
      }(e7, r3, c2) : "style" === t4 ? function(e8, t5, n5) {
        const r4 = e8.style, o6 = isString(n5);
        let s4 = false;
        if (n5 && !o6) {
          if (t5)
            if (isString(t5))
              for (const e9 of t5.split(";")) {
                const t6 = e9.slice(0, e9.indexOf(":")).trim();
                null == n5[t6] && setStyle(r4, t6, "");
              }
            else
              for (const e9 in t5)
                null == n5[e9] && setStyle(r4, e9, "");
          for (const e9 in n5)
            "display" === e9 && (s4 = true), setStyle(r4, e9, n5[e9]);
        } else if (o6) {
          if (t5 !== n5) {
            const e9 = r4[xt];
            e9 && (n5 += ";" + e9), r4.cssText = n5, s4 = At2.test(n5);
          }
        } else
          t5 && e8.removeAttribute("style");
        St in e8 && (e8[St] = s4 ? r4.display : "", e8[Ct] && (r4.display = "none"));
      }(e7, n4, r3) : isOn(t4) ? isModelListener(t4) || patchEvent(e7, t4, 0, r3, i4) : ("." === t4[0] ? (t4 = t4.slice(1), 1) : "^" === t4[0] ? (t4 = t4.slice(1), 0) : function(e8, t5, n5, r4) {
        if (r4)
          return "innerHTML" === t5 || "textContent" === t5 || !!(t5 in e8 && isNativeOn(t5) && isFunction(n5));
        if ("spellcheck" === t5 || "draggable" === t5 || "translate" === t5)
          return false;
        if ("form" === t5)
          return false;
        if ("list" === t5 && "INPUT" === e8.tagName)
          return false;
        if ("type" === t5 && "TEXTAREA" === e8.tagName)
          return false;
        if ("width" === t5 || "height" === t5) {
          const t6 = e8.tagName;
          if ("IMG" === t6 || "VIDEO" === t6 || "CANVAS" === t6 || "SOURCE" === t6)
            return false;
        }
        if (isNativeOn(t5) && isString(n5))
          return false;
        return t5 in e8;
      }(e7, t4, r3, c2)) ? function(e8, t5, n5, r4, o6, s4, i5) {
        if ("innerHTML" === t5 || "textContent" === t5)
          return r4 && i5(r4, o6, s4), void (e8[t5] = null == n5 ? "" : n5);
        const a5 = e8.tagName;
        if ("value" === t5 && "PROGRESS" !== a5 && !a5.includes("-")) {
          const r5 = null == n5 ? "" : n5;
          return ("OPTION" === a5 ? e8.getAttribute("value") || "" : e8.value) === r5 && "_value" in e8 || (e8.value = r5), null == n5 && e8.removeAttribute(t5), void (e8._value = n5);
        }
        let l5 = false;
        if ("" === n5 || null == n5) {
          const r5 = typeof e8[t5];
          "boolean" === r5 ? n5 = includeBooleanAttr(n5) : null == n5 && "string" === r5 ? (n5 = "", l5 = true) : "number" === r5 && (n5 = 0, l5 = true);
        }
        try {
          e8[t5] = n5;
        } catch (e9) {
        }
        l5 && e8.removeAttribute(t5);
      }(e7, t4, r3, s3, i4, a4, l4) : ("true-value" === t4 ? e7._trueValue = r3 : "false-value" === t4 && (e7._falseValue = r3), function(e8, t5, n5, r4, o6) {
        if (r4 && t5.startsWith("xlink:"))
          null == n5 ? e8.removeAttributeNS(Et2, t5.slice(6, t5.length)) : e8.setAttributeNS(Et2, t5, n5);
        else {
          const r5 = J(t5);
          null == n5 || r5 && !includeBooleanAttr(n5) ? e8.removeAttribute(t5) : e8.setAttribute(t5, r5 ? "" : n5);
        }
      }(e7, t4, r3, c2));
    } }, Rt);
    createApp = (...e7) => {
      const t4 = (Nt || (Nt = createRenderer(Mt))).createApp(...e7), { mount: n4 } = t4;
      return t4.mount = (e8) => {
        const r3 = function(e9) {
          if (isString(e9)) {
            return document.querySelector(e9);
          }
          return e9;
        }(e8);
        if (!r3)
          return;
        const o5 = t4._component;
        isFunction(o5) || o5.render || o5.template || (o5.template = r3.innerHTML), r3.innerHTML = "";
        const s3 = n4(r3, false, function(e9) {
          if (e9 instanceof SVGElement)
            return "svg";
          if ("function" == typeof MathMLElement && e9 instanceof MathMLElement)
            return "mathml";
        }(r3));
        return r3 instanceof Element && (r3.removeAttribute("v-cloak"), r3.setAttribute("data-v-app", "")), s3;
      }, t4;
    };
    Lt = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    {
      const e7 = getGlobalThis(), registerGlobalSetter = (t4, n4) => {
        let r3;
        return (r3 = e7[t4]) || (r3 = e7[t4] = []), r3.push(n4), (e8) => {
          r3.length > 1 ? r3.forEach((t5) => t5(e8)) : r3[0](e8);
        };
      };
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e8) => e8), registerGlobalSetter("__VUE_SSR_SETTERS__", (e8) => e8);
    }
    ({ createComponentInstance: Vt, setCurrentRenderingInstance: Ft2, setupComponent: Dt2, renderComponentRoot: Ut, normalizeVNode: zt2 } = _t);
    ({ isVNode: Wt2 } = _t);
    Bt2 = ["meta", "link", "base"];
    qt2 = ["title", "titleTemplate", "script", "style", "noscript"];
    Jt = ["base", "meta", "link", "style", "script", "noscript"];
    Gt = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"];
    Kt = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"];
    Zt = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"];
    Xt = 10;
    Yt = { base: -10, title: 10 };
    Qt = { critical: -80, high: -10, low: 20 };
    en = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
    tn = ["onload", "onerror", "onabort", "onprogress", "onloadstart"];
    nn = "%separator";
    rn = ["templateParams", "htmlAttrs", "bodyAttrs"];
    on = { hooks: { "tag:normalise": function({ tag: e7 }) {
      ["hid", "vmid", "key"].forEach((t5) => {
        e7.props[t5] && (e7.key = e7.props[t5], delete e7.props[t5]);
      });
      const t4 = function(e8, t5) {
        const { props: n5, tag: r3 } = e8;
        if (Kt.includes(r3))
          return r3;
        if ("link" === r3 && "canonical" === n5.rel)
          return "canonical";
        if (n5.charset)
          return "charset";
        const o5 = ["id"];
        "meta" === r3 && o5.push("name", "property", "http-equiv");
        for (const e9 of o5)
          if (void 0 !== n5[e9])
            return `${r3}:${e9}:${String(n5[e9])}`;
        return false;
      }(e7), n4 = t4 || !!e7.key && `${e7.tag}:${e7.key}`;
      n4 && (e7._d = n4);
    }, "tags:resolve": function(e7) {
      const t4 = {};
      e7.tags.forEach((e8) => {
        const n5 = (e8.key ? `${e8.tag}:${e8.key}` : e8._d) || e8._p, r3 = t4[n5];
        if (r3) {
          let o6 = e8?.tagDuplicateStrategy;
          if (!o6 && rn.includes(e8.tag) && (o6 = "merge"), "merge" === o6) {
            const o7 = r3.props;
            return ["class", "style"].forEach((t5) => {
              o7[t5] && (e8.props[t5] ? ("style" !== t5 || o7[t5].endsWith(";") || (o7[t5] += ";"), e8.props[t5] = `${o7[t5]} ${e8.props[t5]}`) : e8.props[t5] = o7[t5]);
            }), void (t4[n5].props = { ...o7, ...e8.props });
          }
          if (e8._e === r3._e)
            return r3._duped = r3._duped || [], e8._d = `${r3._d}:${r3._duped.length + 1}`, void r3._duped.push(e8);
          if (tagWeight(e8) > tagWeight(r3))
            return;
        }
        const o5 = Object.keys(e8.props).length + (e8.innerHTML ? 1 : 0) + (e8.textContent ? 1 : 0);
        Jt.includes(e8.tag) && 0 === o5 ? delete t4[n5] : t4[n5] = e8;
      });
      const n4 = [];
      Object.values(t4).forEach((e8) => {
        const t5 = e8._duped;
        delete e8._duped, n4.push(e8), t5 && n4.push(...t5);
      }), e7.tags = n4, e7.tags = e7.tags.filter((e8) => !("meta" === e8.tag && (e8.props.name || e8.props.property) && !e8.props.content));
    } } };
    sn = { mode: "server", hooks: { "tags:resolve": function(e7) {
      const t4 = {};
      e7.tags.filter((e8) => ["titleTemplate", "templateParams", "title"].includes(e8.tag) && "server" === e8._m).forEach((e8) => {
        t4[e8.tag] = e8.tag.startsWith("title") ? e8.textContent : e8.props;
      }), Object.keys(t4).length && e7.tags.push({ tag: "script", innerHTML: JSON.stringify(t4), props: { id: "unhead:payload", type: "application/json" } });
    } } };
    an = ["script", "link", "bodyAttrs"];
    EventHandlersPlugin = (e7) => ({ hooks: { "tags:resolve": function(t4) {
      for (const n4 of t4.tags.filter((e8) => an.includes(e8.tag)))
        Object.entries(n4.props).forEach(([t5, r3]) => {
          t5.startsWith("on") && "function" == typeof r3 && (e7.ssr && tn.includes(t5) ? n4.props[t5] = `this.dataset.${t5}fired = true` : delete n4.props[t5], n4._eventHandlers = n4._eventHandlers || {}, n4._eventHandlers[t5] = r3);
        }), e7.ssr && n4._eventHandlers && (n4.props.src || n4.props.href) && (n4.key = n4.key || hashCode(n4.props.src || n4.props.href));
    }, "dom:renderTag": function({ $el: e8, tag: t4 }) {
      for (const n4 of Object.keys(e8?.dataset || {}).filter((e9) => tn.some((t5) => `${t5}fired` === e9))) {
        const r3 = n4.replace("fired", "");
        t4._eventHandlers?.[r3]?.call(e8, new Event(r3.replace("on", "")));
      }
    } } });
    ln = ["link", "style", "script", "noscript"];
    cn = { hooks: { "tag:normalise": ({ tag: e7 }) => {
      e7.key && ln.includes(e7.tag) && (e7.props["data-hid"] = e7._h = hashCode(e7.key));
    } } };
    un2 = { hooks: { "tags:resolve": (e7) => {
      const tagPositionForKey = (t4) => e7.tags.find((e8) => e8._d === t4)?._p;
      for (const { prefix: t4, offset: n4 } of en)
        for (const r3 of e7.tags.filter((e8) => "string" == typeof e8.tagPriority && e8.tagPriority.startsWith(t4))) {
          const e8 = tagPositionForKey(r3.tagPriority.replace(t4, ""));
          void 0 !== e8 && (r3._p = e8 + n4);
        }
      e7.tags.sort((e8, t4) => e8._p - t4._p).sort((e8, t4) => tagWeight(e8) - tagWeight(t4));
    } } };
    pn = { meta: "content", link: "href", htmlAttrs: "lang" };
    TemplateParamsPlugin = (e7) => ({ hooks: { "tags:resolve": (t4) => {
      const { tags: n4 } = t4, r3 = n4.find((e8) => "title" === e8.tag)?.textContent, o5 = n4.findIndex((e8) => "templateParams" === e8.tag), s3 = -1 !== o5 ? n4[o5].props : {}, i4 = s3.separator || "|";
      delete s3.separator, s3.pageTitle = processTemplateParams(s3.pageTitle || r3 || "", s3, i4);
      for (const e8 of n4.filter((e9) => false !== e9.processTemplateParams)) {
        const t5 = pn[e8.tag];
        t5 && "string" == typeof e8.props[t5] ? e8.props[t5] = processTemplateParams(e8.props[t5], s3, i4) : (true === e8.processTemplateParams || ["titleTemplate", "title"].includes(e8.tag)) && ["innerHTML", "textContent"].forEach((t6) => {
          "string" == typeof e8[t6] && (e8[t6] = processTemplateParams(e8[t6], s3, i4));
        });
      }
      e7._templateParams = s3, e7._separator = i4, t4.tags = n4.filter((e8) => "templateParams" !== e8.tag);
    } } });
    fn2 = { hooks: { "tags:resolve": (e7) => {
      const { tags: t4 } = e7;
      let n4 = t4.findIndex((e8) => "titleTemplate" === e8.tag);
      const r3 = t4.findIndex((e8) => "title" === e8.tag);
      if (-1 !== r3 && -1 !== n4) {
        const e8 = resolveTitleTemplate(t4[n4].textContent, t4[r3].textContent);
        null !== e8 ? t4[r3].textContent = e8 || t4[r3].textContent : delete t4[r3];
      } else if (-1 !== n4) {
        const e8 = resolveTitleTemplate(t4[n4].textContent);
        null !== e8 && (t4[n4].textContent = e8, t4[n4].tag = "title", n4 = -1);
      }
      -1 !== n4 && delete t4[n4], e7.tags = t4.filter(Boolean);
    } } };
    dn = { hooks: { "tags:afterResolve": function(e7) {
      for (const t4 of e7.tags)
        "string" == typeof t4.innerHTML && (t4.innerHTML && ["application/ld+json", "application/json"].includes(t4.props.type) ? t4.innerHTML = t4.innerHTML.replace(/</g, "\\u003C") : t4.innerHTML = t4.innerHTML.replace(new RegExp(`</${t4.tag}`, "g"), `<\\/${t4.tag}`));
    } } };
    gn2 = vt2.startsWith("3");
    mn2 = { hooks: { "entries:resolve": function(e7) {
      for (const t4 of e7.entries)
        t4.resolvedInput = resolveUnrefHeadInput2(t4.input);
    } } };
    yn2 = "usehead";
    vn2 = [];
    _n2 = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    bn2 = "teleports";
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    getClientManifest = () => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e7) => e7.default || e7).then((e7) => "function" == typeof e7 ? e7() : e7);
    kn2 = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e7) => e7.default || e7));
    Rn2 = lazyCachedFunction(async () => {
      const e7 = await getClientManifest();
      if (!e7)
        throw new Error("client.manifest is not available");
      const t4 = await Promise.resolve().then(() => (init_server(), server_exports)).then((e8) => e8.default || e8);
      if (!t4)
        throw new Error("Server bundle is not available");
      return createRenderer$1(t4, { manifest: e7, renderToString: async function(e8, t5) {
        const n4 = await renderToString(e8, t5);
        return Cn2 + n4 + xn2;
      }, buildAssetsURL });
    });
    wn2 = lazyCachedFunction(async () => {
      const e7 = await getClientManifest(), t4 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e8) => e8.template).catch(() => "").then((e8) => Cn2 + e8 + xn2), n4 = createRenderer$1(() => () => {
      }, { manifest: e7, renderToString: () => t4, buildAssetsURL }), r3 = await n4.renderToString({});
      return { rendererContext: n4.rendererContext, renderToString: (e8) => {
        const t5 = useRuntimeConfig2(e8.event);
        return e8.modules = e8.modules || /* @__PURE__ */ new Set(), e8.payload = { _errors: {}, serverRendered: false, data: {}, state: {}, once: /* @__PURE__ */ new Set() }, e8.config = { public: t5.public, app: t5.app }, Promise.resolve(r3);
      } };
    });
    Sn2 = `<div id="${bn2}">`;
    Cn2 = '<div id="__nuxt">';
    xn2 = "</div>";
    An2 = /\/_payload.json(\?.*)?$/;
    $n2 = (On2 = async (e7) => {
      const t4 = useNitroApp(), n4 = e7.path.startsWith("/__nuxt_error") ? getQuery(e7) : null;
      if (n4 && n4.statusCode && (n4.statusCode = parseInt(n4.statusCode)), n4 && !("__unenv__" in e7.node.req))
        throw createError({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const o5 = false, s3 = void 0;
      let a4 = n4?.url || e7.path;
      const l4 = An2.test(a4) && true;
      l4 && (a4 = a4.substring(0, a4.lastIndexOf("/")) || "/", e7._path = a4, e7.node.req.url = a4);
      const c2 = getRouteRules(e7), m3 = createServerHead({ plugins: vn2 }), y3 = { mode: "server" };
      m3.push(_n2, y3);
      const v4 = { url: a4, event: e7, runtimeConfig: useRuntimeConfig2(e7), noSSR: e7.context.nuxt?.noSSR || false === c2.ssr && true || false, head: m3, error: !!n4, nuxt: void 0, payload: n4 ? { error: n4 } : {}, _payloadReducers: {}, modules: /* @__PURE__ */ new Set(), set _registeredComponents(e8) {
        this.modules = e8;
      }, get _registeredComponents() {
        return this.modules;
      }, islandContext: s3 }, _4 = v4.noSSR ? await wn2() : await Rn2();
      for (const e8 of await getClientManifest().then((e9) => Object.values(e9).filter((e10) => e10._globalCSS).map((e10) => e10.src)))
        v4.modules.add(e8);
      const b3 = await _4.renderToString(v4).catch(async (e8) => {
        if (v4._renderResponse && "skipping render" === e8.message)
          return {};
        const t5 = !n4 && v4.payload?.error || e8;
        throw await v4.nuxt?.hooks.callHook("app:error", t5), t5;
      });
      if (await v4.nuxt?.hooks.callHook("app:rendered", { ssrContext: v4, renderResult: b3 }), v4._renderResponse)
        return v4._renderResponse;
      if (v4.payload?.error && !n4)
        throw v4.payload.error;
      if (l4) {
        const e8 = function(e9) {
          return { body: stringify(splitPayload(e9).payload, e9._payloadReducers), statusCode: getResponseStatus(e9.event), statusMessage: getResponseStatusText(e9.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(v4);
        return e8;
      }
      const k3 = await async function(e8) {
        const t5 = await kn2(), n5 = /* @__PURE__ */ new Set();
        for (const r3 of e8)
          if (r3 in t5)
            for (const e9 of await t5[r3]())
              n5.add(e9);
        return Array.from(n5).map((e9) => ({ innerHTML: e9 }));
      }(v4.modules ?? []), R3 = c2.experimentalNoScripts, { styles: w4, scripts: S3 } = getRequestDependencies(v4, _4.rendererContext);
      m3.push({ style: k3 });
      {
        const e8 = [];
        for (const t5 in w4) {
          const n5 = w4[t5];
          e8.push({ rel: "stylesheet", href: _4.rendererContext.buildAssetsURL(n5.file) });
        }
        m3.push({ link: e8 }, y3);
      }
      R3 || (m3.push({ link: getPreloadLinks(v4, _4.rendererContext) }, y3), m3.push({ link: getPrefetchLinks(v4, _4.rendererContext) }, y3), m3.push({ script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext: v4, data: v4.payload }) }, { ...y3, tagPosition: "bodyClose", tagPriority: "high" })), c2.experimentalNoScripts || m3.push({ script: Object.values(S3).map((e8) => ({ type: e8.module ? "module" : null, src: _4.rendererContext.buildAssetsURL(e8.file), defer: !e8.module || null, crossorigin: "" })) }, y3);
      const { headTags: C3, bodyTags: x3, bodyTagsOpen: A4, htmlAttrs: $3, bodyAttrs: O4 } = await renderSSRHead(m3), T3 = { island: o5, htmlAttrs: $3 ? [$3] : [], head: normalizeChunks([C3, v4.styles]), bodyAttrs: O4 ? [O4] : [], bodyPrepend: normalizeChunks([A4, v4.teleports?.body]), body: [b3.html, Sn2 + joinTags([v4.teleports?.[`#${bn2}`]]) + "</div>"], bodyAppend: [x3] };
      var E4;
      return await t4.hooks.callHook("render:html", T3, { event: e7 }), { body: (E4 = T3, `<!DOCTYPE html><html${joinAttrs(E4.htmlAttrs)}><head>${joinTags(E4.head)}</head><body${joinAttrs(E4.bodyAttrs)}>${joinTags(E4.bodyPrepend)}${joinTags(E4.body)}${joinTags(E4.bodyAppend)}</body></html>`), statusCode: getResponseStatus(e7), statusMessage: getResponseStatusText(e7), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    }, Ae(async (e7) => {
      if (e7.path.endsWith("/favicon.ico"))
        return setResponseHeader(e7, "Content-Type", "image/x-icon"), send(e7, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      const a4 = await On2(e7);
      if (!a4) {
        const t4 = getResponseStatus(e7);
        return setResponseStatus(e7, 200 === t4 ? 500 : t4), send(e7, "No response returned from render handler: " + e7.path);
      }
      const l4 = useNitroApp();
      return await l4.hooks.callHook("render:response", a4, { event: e7 }), a4.headers && setResponseHeaders(e7, a4.headers), (a4.statusCode || a4.statusMessage) && setResponseStatus(e7, a4.statusCode, a4.statusMessage), a4.body;
    }));
    Tn2 = Object.freeze(Object.defineProperty({ __proto__: null, default: $n2 }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/routes/api/test.mjs
var test_exports = {};
__export(test_exports, {
  default: () => e5
});
import "__STATIC_CONTENT_MANIFEST";
var e5;
var init_test = __esm({
  ".output/server/chunks/routes/api/test.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    init_runtime();
    e5 = defineEventHandler(async (r3) => {
      const { DB: e7 } = r3.context.cloudflare.env;
      return { hello: "world", result: await e7.prepare("SELECT * FROM hello_world").all() };
    });
  }
});

// .output/server/chunks/runtime.mjs
import e6 from "__STATIC_CONTENT_MANIFEST";
function createNotImplementedError(e7) {
  throw new Error(`[unenv] ${e7} is not implemented yet!`);
}
function notImplemented(e7) {
  return Object.assign(() => {
    throw createNotImplementedError(e7);
  }, { __unenv__: true });
}
function toByteArray(e7) {
  let t4;
  const o5 = function(e8) {
    const t5 = e8.length;
    if (t5 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let r3 = e8.indexOf("=");
    return -1 === r3 && (r3 = t5), [r3, r3 === t5 ? 0 : 4 - r3 % 4];
  }(e7), s3 = o5[0], i4 = o5[1], a4 = new n3(function(e8, t5, r3) {
    return 3 * (t5 + r3) / 4 - r3;
  }(0, s3, i4));
  let c2 = 0;
  const u3 = i4 > 0 ? s3 - 4 : s3;
  let l4;
  for (l4 = 0; l4 < u3; l4 += 4)
    t4 = r2[e7.charCodeAt(l4)] << 18 | r2[e7.charCodeAt(l4 + 1)] << 12 | r2[e7.charCodeAt(l4 + 2)] << 6 | r2[e7.charCodeAt(l4 + 3)], a4[c2++] = t4 >> 16 & 255, a4[c2++] = t4 >> 8 & 255, a4[c2++] = 255 & t4;
  return 2 === i4 && (t4 = r2[e7.charCodeAt(l4)] << 2 | r2[e7.charCodeAt(l4 + 1)] >> 4, a4[c2++] = 255 & t4), 1 === i4 && (t4 = r2[e7.charCodeAt(l4)] << 10 | r2[e7.charCodeAt(l4 + 1)] << 4 | r2[e7.charCodeAt(l4 + 2)] >> 2, a4[c2++] = t4 >> 8 & 255, a4[c2++] = 255 & t4), a4;
}
function encodeChunk(e7, r3, n4) {
  let o5;
  const s3 = [];
  for (let a4 = r3; a4 < n4; a4 += 3)
    o5 = (e7[a4] << 16 & 16711680) + (e7[a4 + 1] << 8 & 65280) + (255 & e7[a4 + 2]), s3.push(t3[(i4 = o5) >> 18 & 63] + t3[i4 >> 12 & 63] + t3[i4 >> 6 & 63] + t3[63 & i4]);
  var i4;
  return s3.join("");
}
function fromByteArray(e7) {
  let r3;
  const n4 = e7.length, o5 = n4 % 3, s3 = [], i4 = 16383;
  for (let t4 = 0, r4 = n4 - o5; t4 < r4; t4 += i4)
    s3.push(encodeChunk(e7, t4, t4 + i4 > r4 ? r4 : t4 + i4));
  return 1 === o5 ? (r3 = e7[n4 - 1], s3.push(t3[r3 >> 2] + t3[r3 << 4 & 63] + "==")) : 2 === o5 && (r3 = (e7[n4 - 2] << 8) + e7[n4 - 1], s3.push(t3[r3 >> 10] + t3[r3 >> 4 & 63] + t3[r3 << 2 & 63] + "=")), s3.join("");
}
function read(e7, t4, r3, n4, o5) {
  let s3, i4;
  const a4 = 8 * o5 - n4 - 1, c2 = (1 << a4) - 1, u3 = c2 >> 1;
  let l4 = -7, f2 = r3 ? o5 - 1 : 0;
  const h4 = r3 ? -1 : 1;
  let p2 = e7[t4 + f2];
  for (f2 += h4, s3 = p2 & (1 << -l4) - 1, p2 >>= -l4, l4 += a4; l4 > 0; )
    s3 = 256 * s3 + e7[t4 + f2], f2 += h4, l4 -= 8;
  for (i4 = s3 & (1 << -l4) - 1, s3 >>= -l4, l4 += n4; l4 > 0; )
    i4 = 256 * i4 + e7[t4 + f2], f2 += h4, l4 -= 8;
  if (0 === s3)
    s3 = 1 - u3;
  else {
    if (s3 === c2)
      return i4 ? Number.NaN : (p2 ? -1 : 1) * Number.POSITIVE_INFINITY;
    i4 += Math.pow(2, n4), s3 -= u3;
  }
  return (p2 ? -1 : 1) * i4 * Math.pow(2, s3 - n4);
}
function write(e7, t4, r3, n4, o5, s3) {
  let i4, a4, c2, u3 = 8 * s3 - o5 - 1;
  const l4 = (1 << u3) - 1, f2 = l4 >> 1, h4 = 23 === o5 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let p2 = n4 ? 0 : s3 - 1;
  const d3 = n4 ? 1 : -1, m3 = t4 < 0 || 0 === t4 && 1 / t4 < 0 ? 1 : 0;
  for (t4 = Math.abs(t4), Number.isNaN(t4) || t4 === Number.POSITIVE_INFINITY ? (a4 = Number.isNaN(t4) ? 1 : 0, i4 = l4) : (i4 = Math.floor(Math.log2(t4)), t4 * (c2 = Math.pow(2, -i4)) < 1 && (i4--, c2 *= 2), (t4 += i4 + f2 >= 1 ? h4 / c2 : h4 * Math.pow(2, 1 - f2)) * c2 >= 2 && (i4++, c2 /= 2), i4 + f2 >= l4 ? (a4 = 0, i4 = l4) : i4 + f2 >= 1 ? (a4 = (t4 * c2 - 1) * Math.pow(2, o5), i4 += f2) : (a4 = t4 * Math.pow(2, f2 - 1) * Math.pow(2, o5), i4 = 0)); o5 >= 8; )
    e7[r3 + p2] = 255 & a4, p2 += d3, a4 /= 256, o5 -= 8;
  for (i4 = i4 << o5 | a4, u3 += o5; u3 > 0; )
    e7[r3 + p2] = 255 & i4, p2 += d3, i4 /= 256, u3 -= 8;
  e7[r3 + p2 - d3] |= 128 * m3;
}
function createBuffer2(e7) {
  if (e7 > i3)
    throw new RangeError('The value "' + e7 + '" is invalid for option "size"');
  const t4 = new Uint8Array(e7);
  return Object.setPrototypeOf(t4, Buffer$1.prototype), t4;
}
function Buffer$1(e7, t4, r3) {
  if ("number" == typeof e7) {
    if ("string" == typeof t4)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e7);
  }
  return from(e7, t4, r3);
}
function from(e7, t4, r3) {
  if ("string" == typeof e7)
    return function(e8, t5) {
      "string" == typeof t5 && "" !== t5 || (t5 = "utf8");
      if (!Buffer$1.isEncoding(t5))
        throw new TypeError("Unknown encoding: " + t5);
      const r4 = 0 | byteLength(e8, t5);
      let n5 = createBuffer2(r4);
      const o6 = n5.write(e8, t5);
      o6 !== r4 && (n5 = n5.slice(0, o6));
      return n5;
    }(e7, t4);
  if (ArrayBuffer.isView(e7))
    return function(e8) {
      if (isInstance(e8, Uint8Array)) {
        const t5 = new Uint8Array(e8);
        return fromArrayBuffer(t5.buffer, t5.byteOffset, t5.byteLength);
      }
      return fromArrayLike(e8);
    }(e7);
  if (null == e7)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e7);
  if (isInstance(e7, ArrayBuffer) || e7 && isInstance(e7.buffer, ArrayBuffer))
    return fromArrayBuffer(e7, t4, r3);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e7, SharedArrayBuffer) || e7 && isInstance(e7.buffer, SharedArrayBuffer)))
    return fromArrayBuffer(e7, t4, r3);
  if ("number" == typeof e7)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  const n4 = e7.valueOf && e7.valueOf();
  if (null != n4 && n4 !== e7)
    return Buffer$1.from(n4, t4, r3);
  const o5 = function(e8) {
    if (Buffer$1.isBuffer(e8)) {
      const t5 = 0 | checked(e8.length), r4 = createBuffer2(t5);
      return 0 === r4.length || e8.copy(r4, 0, 0, t5), r4;
    }
    if (void 0 !== e8.length)
      return "number" != typeof e8.length || numberIsNaN(e8.length) ? createBuffer2(0) : fromArrayLike(e8);
    if ("Buffer" === e8.type && Array.isArray(e8.data))
      return fromArrayLike(e8.data);
  }(e7);
  if (o5)
    return o5;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e7[Symbol.toPrimitive])
    return Buffer$1.from(e7[Symbol.toPrimitive]("string"), t4, r3);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e7);
}
function assertSize(e7) {
  if ("number" != typeof e7)
    throw new TypeError('"size" argument must be of type number');
  if (e7 < 0)
    throw new RangeError('The value "' + e7 + '" is invalid for option "size"');
}
function allocUnsafe(e7) {
  return assertSize(e7), createBuffer2(e7 < 0 ? 0 : 0 | checked(e7));
}
function fromArrayLike(e7) {
  const t4 = e7.length < 0 ? 0 : 0 | checked(e7.length), r3 = createBuffer2(t4);
  for (let n4 = 0; n4 < t4; n4 += 1)
    r3[n4] = 255 & e7[n4];
  return r3;
}
function fromArrayBuffer(e7, t4, r3) {
  if (t4 < 0 || e7.byteLength < t4)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e7.byteLength < t4 + (r3 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n4;
  return n4 = void 0 === t4 && void 0 === r3 ? new Uint8Array(e7) : void 0 === r3 ? new Uint8Array(e7, t4) : new Uint8Array(e7, t4, r3), Object.setPrototypeOf(n4, Buffer$1.prototype), n4;
}
function checked(e7) {
  if (e7 >= i3)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i3.toString(16) + " bytes");
  return 0 | e7;
}
function byteLength(e7, t4) {
  if (Buffer$1.isBuffer(e7))
    return e7.length;
  if (ArrayBuffer.isView(e7) || isInstance(e7, ArrayBuffer))
    return e7.byteLength;
  if ("string" != typeof e7)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e7);
  const r3 = e7.length, n4 = arguments.length > 2 && true === arguments[2];
  if (!n4 && 0 === r3)
    return 0;
  let o5 = false;
  for (; ; )
    switch (t4) {
      case "ascii":
      case "latin1":
      case "binary":
        return r3;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(e7).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r3;
      case "hex":
        return r3 >>> 1;
      case "base64":
        return base64ToBytes(e7).length;
      default:
        if (o5)
          return n4 ? -1 : utf8ToBytes(e7).length;
        t4 = ("" + t4).toLowerCase(), o5 = true;
    }
}
function slowToString(e7, t4, r3) {
  let n4 = false;
  if ((void 0 === t4 || t4 < 0) && (t4 = 0), t4 > this.length)
    return "";
  if ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0)
    return "";
  if ((r3 >>>= 0) <= (t4 >>>= 0))
    return "";
  for (e7 || (e7 = "utf8"); ; )
    switch (e7) {
      case "hex":
        return hexSlice(this, t4, r3);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, t4, r3);
      case "ascii":
        return asciiSlice(this, t4, r3);
      case "latin1":
      case "binary":
        return latin1Slice(this, t4, r3);
      case "base64":
        return base64Slice(this, t4, r3);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, t4, r3);
      default:
        if (n4)
          throw new TypeError("Unknown encoding: " + e7);
        e7 = (e7 + "").toLowerCase(), n4 = true;
    }
}
function swap(e7, t4, r3) {
  const n4 = e7[t4];
  e7[t4] = e7[r3], e7[r3] = n4;
}
function bidirectionalIndexOf(e7, t4, r3, n4, o5) {
  if (0 === e7.length)
    return -1;
  if ("string" == typeof r3 ? (n4 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), numberIsNaN(r3 = +r3) && (r3 = o5 ? 0 : e7.length - 1), r3 < 0 && (r3 = e7.length + r3), r3 >= e7.length) {
    if (o5)
      return -1;
    r3 = e7.length - 1;
  } else if (r3 < 0) {
    if (!o5)
      return -1;
    r3 = 0;
  }
  if ("string" == typeof t4 && (t4 = Buffer$1.from(t4, n4)), Buffer$1.isBuffer(t4))
    return 0 === t4.length ? -1 : arrayIndexOf(e7, t4, r3, n4, o5);
  if ("number" == typeof t4)
    return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o5 ? Uint8Array.prototype.indexOf.call(e7, t4, r3) : Uint8Array.prototype.lastIndexOf.call(e7, t4, r3) : arrayIndexOf(e7, [t4], r3, n4, o5);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e7, t4, r3, n4, o5) {
  let s3, i4 = 1, a4 = e7.length, c2 = t4.length;
  if (void 0 !== n4 && ("ucs2" === (n4 = String(n4).toLowerCase()) || "ucs-2" === n4 || "utf16le" === n4 || "utf-16le" === n4)) {
    if (e7.length < 2 || t4.length < 2)
      return -1;
    i4 = 2, a4 /= 2, c2 /= 2, r3 /= 2;
  }
  function read2(e8, t5) {
    return 1 === i4 ? e8[t5] : e8.readUInt16BE(t5 * i4);
  }
  if (o5) {
    let n5 = -1;
    for (s3 = r3; s3 < a4; s3++)
      if (read2(e7, s3) === read2(t4, -1 === n5 ? 0 : s3 - n5)) {
        if (-1 === n5 && (n5 = s3), s3 - n5 + 1 === c2)
          return n5 * i4;
      } else
        -1 !== n5 && (s3 -= s3 - n5), n5 = -1;
  } else
    for (r3 + c2 > a4 && (r3 = a4 - c2), s3 = r3; s3 >= 0; s3--) {
      let r4 = true;
      for (let n5 = 0; n5 < c2; n5++)
        if (read2(e7, s3 + n5) !== read2(t4, n5)) {
          r4 = false;
          break;
        }
      if (r4)
        return s3;
    }
  return -1;
}
function hexWrite(e7, t4, r3, n4) {
  r3 = Number(r3) || 0;
  const o5 = e7.length - r3;
  n4 ? (n4 = Number(n4)) > o5 && (n4 = o5) : n4 = o5;
  const s3 = t4.length;
  let i4;
  for (n4 > s3 / 2 && (n4 = s3 / 2), i4 = 0; i4 < n4; ++i4) {
    const n5 = Number.parseInt(t4.slice(2 * i4, 2 * i4 + 2), 16);
    if (numberIsNaN(n5))
      return i4;
    e7[r3 + i4] = n5;
  }
  return i4;
}
function utf8Write(e7, t4, r3, n4) {
  return blitBuffer(utf8ToBytes(t4, e7.length - r3), e7, r3, n4);
}
function asciiWrite(e7, t4, r3, n4) {
  return blitBuffer(function(e8) {
    const t5 = [];
    for (let r4 = 0; r4 < e8.length; ++r4)
      t5.push(255 & e8.charCodeAt(r4));
    return t5;
  }(t4), e7, r3, n4);
}
function base64Write(e7, t4, r3, n4) {
  return blitBuffer(base64ToBytes(t4), e7, r3, n4);
}
function ucs2Write(e7, t4, r3, n4) {
  return blitBuffer(function(e8, t5) {
    let r4, n5, o5;
    const s3 = [];
    for (let i4 = 0; i4 < e8.length && !((t5 -= 2) < 0); ++i4)
      r4 = e8.charCodeAt(i4), n5 = r4 >> 8, o5 = r4 % 256, s3.push(o5, n5);
    return s3;
  }(t4, e7.length - r3), e7, r3, n4);
}
function base64Slice(e7, t4, r3) {
  return 0 === t4 && r3 === e7.length ? fromByteArray(e7) : fromByteArray(e7.slice(t4, r3));
}
function utf8Slice(e7, t4, r3) {
  r3 = Math.min(e7.length, r3);
  const n4 = [];
  let o5 = t4;
  for (; o5 < r3; ) {
    const t5 = e7[o5];
    let s3 = null, i4 = t5 > 239 ? 4 : t5 > 223 ? 3 : t5 > 191 ? 2 : 1;
    if (o5 + i4 <= r3) {
      let r4, n5, a4, c2;
      switch (i4) {
        case 1:
          t5 < 128 && (s3 = t5);
          break;
        case 2:
          r4 = e7[o5 + 1], 128 == (192 & r4) && (c2 = (31 & t5) << 6 | 63 & r4, c2 > 127 && (s3 = c2));
          break;
        case 3:
          r4 = e7[o5 + 1], n5 = e7[o5 + 2], 128 == (192 & r4) && 128 == (192 & n5) && (c2 = (15 & t5) << 12 | (63 & r4) << 6 | 63 & n5, c2 > 2047 && (c2 < 55296 || c2 > 57343) && (s3 = c2));
          break;
        case 4:
          r4 = e7[o5 + 1], n5 = e7[o5 + 2], a4 = e7[o5 + 3], 128 == (192 & r4) && 128 == (192 & n5) && 128 == (192 & a4) && (c2 = (15 & t5) << 18 | (63 & r4) << 12 | (63 & n5) << 6 | 63 & a4, c2 > 65535 && c2 < 1114112 && (s3 = c2));
      }
    }
    null === s3 ? (s3 = 65533, i4 = 1) : s3 > 65535 && (s3 -= 65536, n4.push(s3 >>> 10 & 1023 | 55296), s3 = 56320 | 1023 & s3), n4.push(s3), o5 += i4;
  }
  return function(e8) {
    const t5 = e8.length;
    if (t5 <= a3)
      return String.fromCharCode.apply(String, e8);
    let r4 = "", n5 = 0;
    for (; n5 < t5; )
      r4 += String.fromCharCode.apply(String, e8.slice(n5, n5 += a3));
    return r4;
  }(n4);
}
function asciiSlice(e7, t4, r3) {
  let n4 = "";
  r3 = Math.min(e7.length, r3);
  for (let o5 = t4; o5 < r3; ++o5)
    n4 += String.fromCharCode(127 & e7[o5]);
  return n4;
}
function latin1Slice(e7, t4, r3) {
  let n4 = "";
  r3 = Math.min(e7.length, r3);
  for (let o5 = t4; o5 < r3; ++o5)
    n4 += String.fromCharCode(e7[o5]);
  return n4;
}
function hexSlice(e7, t4, r3) {
  const n4 = e7.length;
  (!t4 || t4 < 0) && (t4 = 0), (!r3 || r3 < 0 || r3 > n4) && (r3 = n4);
  let o5 = "";
  for (let n5 = t4; n5 < r3; ++n5)
    o5 += l3[e7[n5]];
  return o5;
}
function utf16leSlice(e7, t4, r3) {
  const n4 = e7.slice(t4, r3);
  let o5 = "";
  for (let e8 = 0; e8 < n4.length - 1; e8 += 2)
    o5 += String.fromCharCode(n4[e8] + 256 * n4[e8 + 1]);
  return o5;
}
function checkOffset(e7, t4, r3) {
  if (e7 % 1 != 0 || e7 < 0)
    throw new RangeError("offset is not uint");
  if (e7 + t4 > r3)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e7, t4, r3, n4, o5, s3) {
  if (!Buffer$1.isBuffer(e7))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t4 > o5 || t4 < s3)
    throw new RangeError('"value" argument is out of bounds');
  if (r3 + n4 > e7.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e7, t4, r3, n4, o5) {
  checkIntBI(t4, n4, o5, e7, r3, 7);
  let s3 = Number(t4 & BigInt(4294967295));
  e7[r3++] = s3, s3 >>= 8, e7[r3++] = s3, s3 >>= 8, e7[r3++] = s3, s3 >>= 8, e7[r3++] = s3;
  let i4 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e7[r3++] = i4, i4 >>= 8, e7[r3++] = i4, i4 >>= 8, e7[r3++] = i4, i4 >>= 8, e7[r3++] = i4, r3;
}
function wrtBigUInt64BE(e7, t4, r3, n4, o5) {
  checkIntBI(t4, n4, o5, e7, r3, 7);
  let s3 = Number(t4 & BigInt(4294967295));
  e7[r3 + 7] = s3, s3 >>= 8, e7[r3 + 6] = s3, s3 >>= 8, e7[r3 + 5] = s3, s3 >>= 8, e7[r3 + 4] = s3;
  let i4 = Number(t4 >> BigInt(32) & BigInt(4294967295));
  return e7[r3 + 3] = i4, i4 >>= 8, e7[r3 + 2] = i4, i4 >>= 8, e7[r3 + 1] = i4, i4 >>= 8, e7[r3] = i4, r3 + 8;
}
function checkIEEE754(e7, t4, r3, n4, o5, s3) {
  if (r3 + n4 > e7.length)
    throw new RangeError("Index out of range");
  if (r3 < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(e7, t4, r3, n4, o5) {
  return t4 = +t4, r3 >>>= 0, o5 || checkIEEE754(e7, 0, r3, 4), write(e7, t4, r3, n4, 23, 4), r3 + 4;
}
function writeDouble(e7, t4, r3, n4, o5) {
  return t4 = +t4, r3 >>>= 0, o5 || checkIEEE754(e7, 0, r3, 8), write(e7, t4, r3, n4, 52, 8), r3 + 8;
}
function E3(e7, t4, r3) {
  c[e7] = class extends r3 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t4, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e7}]`, this.stack, delete this.name;
    }
    get code() {
      return e7;
    }
    set code(e8) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e8, writable: true });
    }
    toString() {
      return `${this.name} [${e7}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(e7) {
  let t4 = "", r3 = e7.length;
  const n4 = "-" === e7[0] ? 1 : 0;
  for (; r3 >= n4 + 4; r3 -= 3)
    t4 = `_${e7.slice(r3 - 3, r3)}${t4}`;
  return `${e7.slice(0, r3)}${t4}`;
}
function checkIntBI(e7, t4, r3, n4, o5, s3) {
  if (e7 > r3 || e7 < t4) {
    const r4 = "bigint" == typeof t4 ? "n" : "";
    let n5;
    throw n5 = 0 === t4 || t4 === BigInt(0) ? `>= 0${r4} and < 2${r4} ** ${8 * (s3 + 1)}${r4}` : `>= -(2${r4} ** ${8 * (s3 + 1) - 1}${r4}) and < 2 ** ${8 * (s3 + 1) - 1}${r4}`, new c.ERR_OUT_OF_RANGE("value", n5, e7);
  }
  !function(e8, t5, r4) {
    validateNumber(t5, "offset"), void 0 !== e8[t5] && void 0 !== e8[t5 + r4] || boundsError(t5, e8.length - (r4 + 1));
  }(n4, o5, s3);
}
function validateNumber(e7, t4) {
  if ("number" != typeof e7)
    throw new c.ERR_INVALID_ARG_TYPE(t4, "number", e7);
}
function boundsError(e7, t4, r3) {
  if (Math.floor(e7) !== e7)
    throw validateNumber(e7, r3), new c.ERR_OUT_OF_RANGE("offset", "an integer", e7);
  if (t4 < 0)
    throw new c.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new c.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t4}`, e7);
}
function utf8ToBytes(e7, t4) {
  let r3;
  t4 = t4 || Number.POSITIVE_INFINITY;
  const n4 = e7.length;
  let o5 = null;
  const s3 = [];
  for (let i4 = 0; i4 < n4; ++i4) {
    if (r3 = e7.charCodeAt(i4), r3 > 55295 && r3 < 57344) {
      if (!o5) {
        if (r3 > 56319) {
          (t4 -= 3) > -1 && s3.push(239, 191, 189);
          continue;
        }
        if (i4 + 1 === n4) {
          (t4 -= 3) > -1 && s3.push(239, 191, 189);
          continue;
        }
        o5 = r3;
        continue;
      }
      if (r3 < 56320) {
        (t4 -= 3) > -1 && s3.push(239, 191, 189), o5 = r3;
        continue;
      }
      r3 = 65536 + (o5 - 55296 << 10 | r3 - 56320);
    } else
      o5 && (t4 -= 3) > -1 && s3.push(239, 191, 189);
    if (o5 = null, r3 < 128) {
      if ((t4 -= 1) < 0)
        break;
      s3.push(r3);
    } else if (r3 < 2048) {
      if ((t4 -= 2) < 0)
        break;
      s3.push(r3 >> 6 | 192, 63 & r3 | 128);
    } else if (r3 < 65536) {
      if ((t4 -= 3) < 0)
        break;
      s3.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
    } else {
      if (!(r3 < 1114112))
        throw new Error("Invalid code point");
      if ((t4 -= 4) < 0)
        break;
      s3.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
    }
  }
  return s3;
}
function base64ToBytes(e7) {
  return toByteArray(function(e8) {
    if ((e8 = (e8 = e8.split("=")[0]).trim().replace(u2, "")).length < 2)
      return "";
    for (; e8.length % 4 != 0; )
      e8 += "=";
    return e8;
  }(e7));
}
function blitBuffer(e7, t4, r3, n4) {
  let o5;
  for (o5 = 0; o5 < n4 && !(o5 + r3 >= t4.length || o5 >= e7.length); ++o5)
    t4[o5 + r3] = e7[o5];
  return o5;
}
function isInstance(e7, t4) {
  return e7 instanceof t4 || null != e7 && null != e7.constructor && null != e7.constructor.name && e7.constructor.name === t4.name;
}
function numberIsNaN(e7) {
  return e7 != e7;
}
function defineBigIntMethod(e7) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e7;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function defaultSetTimeout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(e7) {
  if (p === setTimeout)
    return setTimeout(e7, 0);
  if ((p === defaultSetTimeout || !p) && setTimeout)
    return p = setTimeout, setTimeout(e7, 0);
  try {
    return p(e7, 0);
  } catch {
    try {
      return p.call(null, e7, 0);
    } catch {
      return p.call(this, e7, 0);
    }
  }
}
function cleanUpNextTick() {
  y2 && m2 && (y2 = false, m2.length > 0 ? g = [...m2, ...g] : w3 = -1, g.length > 0 && drainQueue());
}
function drainQueue() {
  if (y2)
    return;
  const e7 = runTimeout(cleanUpNextTick);
  y2 = true;
  let t4 = g.length;
  for (; t4; ) {
    for (m2 = g, g = []; ++w3 < t4; )
      m2 && m2[w3].run();
    w3 = -1, t4 = g.length;
  }
  m2 = null, y2 = false, function(e8) {
    if (d2 === clearTimeout)
      return clearTimeout(e8);
    if ((d2 === defaultClearTimeout || !d2) && clearTimeout)
      return d2 = clearTimeout, clearTimeout(e8);
    try {
      return d2(e8);
    } catch {
      try {
        return d2.call(null, e8);
      } catch {
        return d2.call(this, e8);
      }
    }
  }(e7);
}
function Item(e7, t4) {
  this.fun = e7, this.array = t4;
}
function noop$1() {
  return h3;
}
function encodeQueryValue2(e7) {
  return (t4 = "string" == typeof e7 ? e7 : JSON.stringify(e7), encodeURI("" + t4).replace($2, "|")).replace(T2, "%2B").replace(j2, "+").replace(R2, "%23").replace(I2, "%26").replace(S2, "`").replace(C2, "^").replace(k2, "%2F");
  var t4;
}
function encodeQueryKey2(e7) {
  return encodeQueryValue2(e7).replace(A3, "%3D");
}
function decode2(e7 = "") {
  try {
    return decodeURIComponent("" + e7);
  } catch {
    return "" + e7;
  }
}
function decodeQueryValue2(e7) {
  return decode2(e7.replace(T2, " "));
}
function parseQuery2(e7 = "") {
  const t4 = {};
  "?" === e7[0] && (e7 = e7.slice(1));
  for (const r3 of e7.split("&")) {
    const e8 = r3.match(/([^=]+)=?(.*)/) || [];
    if (e8.length < 2)
      continue;
    const n4 = decode2(e8[1].replace(T2, " "));
    if ("__proto__" === n4 || "constructor" === n4)
      continue;
    const o5 = decodeQueryValue2(e8[2] || "");
    void 0 === t4[n4] ? t4[n4] = o5 : Array.isArray(t4[n4]) ? t4[n4].push(o5) : t4[n4] = [t4[n4], o5];
  }
  return t4;
}
function stringifyQuery2(e7) {
  return Object.keys(e7).filter((t4) => void 0 !== e7[t4]).map((t4) => {
    return r3 = t4, "number" != typeof (n4 = e7[t4]) && "boolean" != typeof n4 || (n4 = String(n4)), n4 ? Array.isArray(n4) ? n4.map((e8) => `${encodeQueryKey2(r3)}=${encodeQueryValue2(e8)}`).join("&") : `${encodeQueryKey2(r3)}=${encodeQueryValue2(n4)}` : encodeQueryKey2(r3);
    var r3, n4;
  }).filter(Boolean).join("&");
}
function hasProtocol2(e7, t4 = {}) {
  return "boolean" == typeof t4 && (t4 = { acceptRelative: t4 }), t4.strict ? O3.test(e7) : N3.test(e7) || !!t4.acceptRelative && L2.test(e7);
}
function withoutTrailingSlash2(e7 = "", t4) {
  return (function(e8 = "", t5) {
    return e8.endsWith("/");
  }(e7) ? e7.slice(0, -1) : e7) || "/";
}
function withTrailingSlash2(e7 = "", t4) {
  return e7.endsWith("/") ? e7 : e7 + "/";
}
function withLeadingSlash2(e7 = "") {
  return function(e8 = "") {
    return e8.startsWith("/");
  }(e7) ? e7 : "/" + e7;
}
function withoutBase(e7, t4) {
  if (isEmptyURL(t4))
    return e7;
  const r3 = withoutTrailingSlash2(t4);
  if (!e7.startsWith(r3))
    return e7;
  const n4 = e7.slice(r3.length);
  return "/" === n4[0] ? n4 : "/" + n4;
}
function withQuery2(e7, t4) {
  const r3 = parseURL2(e7), n4 = { ...parseQuery2(r3.search), ...t4 };
  return r3.search = stringifyQuery2(n4), function(e8) {
    const t5 = e8.pathname || "", r4 = e8.search ? (e8.search.startsWith("?") ? "" : "?") + e8.search : "", n5 = e8.hash || "", o5 = e8.auth ? e8.auth + "@" : "", s3 = e8.host || "", i4 = e8.protocol || e8[U2] ? (e8.protocol || "") + "//" : "";
    return i4 + o5 + s3 + t5 + r4 + n5;
  }(r3);
}
function getQuery$1(e7) {
  return parseQuery2(parseURL2(e7).search);
}
function isEmptyURL(e7) {
  return !e7 || "/" === e7;
}
function joinURL2(e7, ...t4) {
  let r3 = e7 || "";
  for (const e8 of t4.filter((e9) => function(e10) {
    return e10 && "/" !== e10;
  }(e9)))
    if (r3) {
      const t5 = e8.replace(M2, "");
      r3 = withTrailingSlash2(r3) + t5;
    } else
      r3 = e8;
  return r3;
}
function joinRelativeURL(...e7) {
  const t4 = /\/(?!\/)/, r3 = e7.filter(Boolean), n4 = [];
  let o5 = 0;
  for (const e8 of r3)
    if (e8 && "/" !== e8) {
      for (const [r4, s4] of e8.split(t4).entries())
        if (s4 && "." !== s4)
          if (".." !== s4)
            1 === r4 && n4[n4.length - 1]?.endsWith(":/") ? n4[n4.length - 1] += "/" + s4 : (n4.push(s4), o5++);
          else {
            if (1 === n4.length && hasProtocol2(n4[0]))
              continue;
            n4.pop(), o5--;
          }
    }
  let s3 = n4.join("/");
  return o5 >= 0 ? r3[0]?.startsWith("/") && !s3.startsWith("/") ? s3 = "/" + s3 : r3[0]?.startsWith("./") && !s3.startsWith("./") && (s3 = "./" + s3) : s3 = "../".repeat(-1 * o5) + s3, r3[r3.length - 1]?.endsWith("/") && !s3.endsWith("/") && (s3 += "/"), s3;
}
function parseURL2(e7 = "", t4) {
  const r3 = e7.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r3) {
    const [, e8, t5 = ""] = r3;
    return { protocol: e8.toLowerCase(), pathname: t5, href: e8 + t5, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol2(e7, { acceptRelative: true }))
    return parsePath2(e7);
  const [, n4 = "", o5, s3 = ""] = e7.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, i4 = "", a4 = ""] = s3.match(/([^#/?]*)(.*)?/) || [], { pathname: c2, search: u3, hash: l4 } = parsePath2(a4.replace(/\/(?=[A-Za-z]:)/, ""));
  return { protocol: n4.toLowerCase(), auth: o5 ? o5.slice(0, Math.max(0, o5.length - 1)) : "", host: i4, pathname: c2, search: u3, hash: l4, [U2]: !n4 };
}
function parsePath2(e7 = "") {
  const [t4 = "", r3 = "", n4 = ""] = (e7.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t4, search: r3, hash: n4 };
}
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let e7 = 0; e7 < arguments.length; e7++)
    this.define(arguments[e7]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
function objectHash(e7, t4) {
  const r3 = createHasher(t4 = t4 ? { ...V2, ...t4 } : V2);
  return r3.dispatch(e7), r3.toString();
}
function createHasher(e7) {
  let t4 = "", r3 = /* @__PURE__ */ new Map();
  const write2 = (e8) => {
    t4 += e8;
  };
  return { toString: () => t4, getContext: () => r3, dispatch(t5) {
    e7.replacer && (t5 = e7.replacer(t5));
    return this[null === t5 ? "null" : typeof t5](t5);
  }, object(t5) {
    if (t5 && "function" == typeof t5.toJSON)
      return this.object(t5.toJSON());
    const n4 = Object.prototype.toString.call(t5);
    let o5 = "";
    const s3 = n4.length;
    o5 = s3 < 10 ? "unknown:[" + n4 + "]" : n4.slice(8, s3 - 1), o5 = o5.toLowerCase();
    let i4 = null;
    if (void 0 !== (i4 = r3.get(t5)))
      return this.dispatch("[CIRCULAR:" + i4 + "]");
    if (r3.set(t5, r3.size), void 0 !== f && f.isBuffer && f.isBuffer(t5))
      return write2("buffer:"), write2(t5.toString("utf8"));
    if ("object" !== o5 && "function" !== o5 && "asyncfunction" !== o5)
      this[o5] ? this[o5](t5) : e7.ignoreUnknown || this.unkown(t5, o5);
    else {
      let r4 = Object.keys(t5);
      e7.unorderedObjects && (r4 = r4.sort());
      let n5 = [];
      false === e7.respectType || isNativeFunction(t5) || (n5 = Q2), e7.excludeKeys && (r4 = r4.filter((t6) => !e7.excludeKeys(t6)), n5 = n5.filter((t6) => !e7.excludeKeys(t6))), write2("object:" + (r4.length + n5.length) + ":");
      const dispatchForKey = (r5) => {
        this.dispatch(r5), write2(":"), e7.excludeValues || this.dispatch(t5[r5]), write2(",");
      };
      for (const e8 of r4)
        dispatchForKey(e8);
      for (const e8 of n5)
        dispatchForKey(e8);
    }
  }, array(t5, n4) {
    if (n4 = void 0 === n4 ? false !== e7.unorderedArrays : n4, write2("array:" + t5.length + ":"), !n4 || t5.length <= 1) {
      for (const e8 of t5)
        this.dispatch(e8);
      return;
    }
    const o5 = /* @__PURE__ */ new Map(), s3 = t5.map((t6) => {
      const r4 = createHasher(e7);
      r4.dispatch(t6);
      for (const [e8, t7] of r4.getContext())
        o5.set(e8, t7);
      return r4.toString();
    });
    return r3 = o5, s3.sort(), this.array(s3, false);
  }, date: (e8) => write2("date:" + e8.toJSON()), symbol: (e8) => write2("symbol:" + e8.toString()), unkown(e8, t5) {
    if (write2(t5), e8)
      return write2(":"), e8 && "function" == typeof e8.entries ? this.array(Array.from(e8.entries()), true) : void 0;
  }, error: (e8) => write2("error:" + e8.toString()), boolean: (e8) => write2("bool:" + e8), string(e8) {
    write2("string:" + e8.length + ":"), write2(e8);
  }, function(t5) {
    write2("fn:"), isNativeFunction(t5) ? this.dispatch("[native]") : this.dispatch(t5.toString()), false !== e7.respectFunctionNames && this.dispatch("function-name:" + String(t5.name)), e7.respectFunctionProperties && this.object(t5);
  }, number: (e8) => write2("number:" + e8), xml: (e8) => write2("xml:" + e8.toString()), null: () => write2("Null"), undefined: () => write2("Undefined"), regexp: (e8) => write2("regex:" + e8.toString()), uint8array(e8) {
    return write2("uint8array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, uint8clampedarray(e8) {
    return write2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e8));
  }, int8array(e8) {
    return write2("int8array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, uint16array(e8) {
    return write2("uint16array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, int16array(e8) {
    return write2("int16array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, uint32array(e8) {
    return write2("uint32array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, int32array(e8) {
    return write2("int32array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, float32array(e8) {
    return write2("float32array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, float64array(e8) {
    return write2("float64array:"), this.dispatch(Array.prototype.slice.call(e8));
  }, arraybuffer(e8) {
    return write2("arraybuffer:"), this.dispatch(new Uint8Array(e8));
  }, url: (e8) => write2("url:" + e8.toString()), map(t5) {
    write2("map:");
    const r4 = [...t5];
    return this.array(r4, false !== e7.unorderedSets);
  }, set(t5) {
    write2("set:");
    const r4 = [...t5];
    return this.array(r4, false !== e7.unorderedSets);
  }, file(e8) {
    return write2("file:"), this.dispatch([e8.name, e8.size, e8.type, e8.lastModfied]);
  }, blob() {
    if (e7.ignoreUnknown)
      return write2("[blob]");
    throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
  }, domwindow: () => write2("domwindow"), bigint: (e8) => write2("bigint:" + e8.toString()), process: () => write2("process"), timer: () => write2("timer"), pipe: () => write2("pipe"), tcp: () => write2("tcp"), udp: () => write2("udp"), tty: () => write2("tty"), statwatcher: () => write2("statwatcher"), securecontext: () => write2("securecontext"), connection: () => write2("connection"), zlib: () => write2("zlib"), context: () => write2("context"), nodescript: () => write2("nodescript"), httpparser: () => write2("httpparser"), dataview: () => write2("dataview"), signal: () => write2("signal"), fsevent: () => write2("fsevent"), tlswrap: () => write2("tlswrap") };
}
function isNativeFunction(e7) {
  return "function" == typeof e7 && Function.prototype.toString.call(e7).slice(-G2) === J2;
}
function hash(e7, t4 = {}) {
  const r3 = "string" == typeof e7 ? e7 : objectHash(e7, t4);
  return (n4 = r3, new SHA256().finalize(n4).toString(X3)).slice(0, 10);
  var n4;
}
function createRouter$1(e7 = {}) {
  const t4 = { options: e7, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = (t5) => e7.strictTrailingSlash ? t5 : t5.replace(/\/$/, "") || "/";
  if (e7.routes)
    for (const r3 in e7.routes)
      insert(t4, normalizeTrailingSlash(r3), e7.routes[r3]);
  return { ctx: t4, lookup: (e8) => function(e9, t5) {
    const r3 = e9.staticRoutesMap[t5];
    if (r3)
      return r3.data;
    const n4 = t5.split("/"), o5 = {};
    let s3 = false, i4 = null, a4 = e9.rootNode, c2 = null;
    for (let e10 = 0; e10 < n4.length; e10++) {
      const t6 = n4[e10];
      null !== a4.wildcardChildNode && (i4 = a4.wildcardChildNode, c2 = n4.slice(e10).join("/"));
      const r4 = a4.children.get(t6);
      if (void 0 === r4) {
        if (a4 && a4.placeholderChildren.length > 1) {
          const t7 = n4.length - e10;
          a4 = a4.placeholderChildren.find((e11) => e11.maxDepth === t7) || null;
        } else
          a4 = a4.placeholderChildren[0] || null;
        if (!a4)
          break;
        a4.paramName && (o5[a4.paramName] = t6), s3 = true;
      } else
        a4 = r4;
    }
    null !== a4 && null !== a4.data || null === i4 || (a4 = i4, o5[a4.paramName || "_"] = c2, s3 = true);
    if (!a4)
      return null;
    if (s3)
      return { ...a4.data, params: s3 ? o5 : void 0 };
    return a4.data;
  }(t4, normalizeTrailingSlash(e8)), insert: (e8, r3) => insert(t4, normalizeTrailingSlash(e8), r3), remove: (e8) => function(e9, t5) {
    let r3 = false;
    const n4 = t5.split("/");
    let o5 = e9.rootNode;
    for (const e10 of n4)
      if (o5 = o5.children.get(e10), !o5)
        return r3;
    if (o5.data) {
      const e10 = n4.at(-1) || "";
      o5.data = null, 0 === Object.keys(o5.children).length && o5.parent && (o5.parent.children.delete(e10), o5.parent.wildcardChildNode = null, o5.parent.placeholderChildren = []), r3 = true;
    }
    return r3;
  }(t4, normalizeTrailingSlash(e8)) };
}
function insert(e7, t4, r3) {
  let n4 = true;
  const o5 = t4.split("/");
  let s3 = e7.rootNode, i4 = 0;
  const a4 = [s3];
  for (const e8 of o5) {
    let t5;
    if (t5 = s3.children.get(e8))
      s3 = t5;
    else {
      const r4 = getNodeType(e8);
      t5 = createRadixNode({ type: r4, parent: s3 }), s3.children.set(e8, t5), r4 === oe2.PLACEHOLDER ? (t5.paramName = "*" === e8 ? "_" + i4++ : e8.slice(1), s3.placeholderChildren.push(t5), n4 = false) : r4 === oe2.WILDCARD && (s3.wildcardChildNode = t5, t5.paramName = e8.slice(3) || "_", n4 = false), a4.push(t5), s3 = t5;
    }
  }
  for (const [e8, t5] of a4.entries())
    t5.maxDepth = Math.max(a4.length - e8, t5.maxDepth || 0);
  return s3.data = r3, true === n4 && (e7.staticRoutesMap[t4] = s3), s3;
}
function createRadixNode(e7 = {}) {
  return { type: e7.type || oe2.NORMAL, maxDepth: 0, parent: e7.parent || null, children: /* @__PURE__ */ new Map(), data: e7.data || null, paramName: e7.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e7) {
  return e7.startsWith("**") ? oe2.WILDCARD : ":" === e7[0] || "*" === e7 ? oe2.PLACEHOLDER : oe2.NORMAL;
}
function toRouteMatcher(e7) {
  return function(e8, t4) {
    return { ctx: { table: e8 }, matchAll: (r3) => _matchRoutes(r3, e8, t4) };
  }(_routerNodeToTable("", e7.ctx.rootNode), e7.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e7, t4, r3) {
  true !== r3 && e7.endsWith("/") && (e7 = e7.slice(0, -1) || "/");
  const n4 = [];
  for (const [r4, o6] of _sortRoutesMap(t4.wildcard))
    (e7 === r4 || e7.startsWith(r4 + "/")) && n4.push(o6);
  for (const [r4, o6] of _sortRoutesMap(t4.dynamic))
    if (e7.startsWith(r4 + "/")) {
      const t5 = "/" + e7.slice(r4.length).split("/").splice(2).join("/");
      n4.push(..._matchRoutes(t5, o6));
    }
  const o5 = t4.static.get(e7);
  return o5 && n4.push(o5), n4.filter(Boolean);
}
function _sortRoutesMap(e7) {
  return [...e7.entries()].sort((e8, t4) => e8[0].length - t4[0].length);
}
function _routerNodeToTable(e7, t4) {
  const r3 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return function _addNode(e8, t5) {
    if (e8)
      if (t5.type !== oe2.NORMAL || e8.includes("*") || e8.includes(":")) {
        if (t5.type === oe2.WILDCARD)
          r3.wildcard.set(e8.replace("/**", ""), t5.data);
        else if (t5.type === oe2.PLACEHOLDER) {
          const n4 = _routerNodeToTable("", t5);
          return t5.data && n4.static.set("/", t5.data), void r3.dynamic.set(e8.replace(/\/\*|\/:\w+/, ""), n4);
        }
      } else
        t5.data && r3.static.set(e8, t5.data);
    for (const [r4, n4] of t5.children.entries())
      _addNode(`${e8}/${r4}`.replace("//", "/"), n4);
  }(e7, t4), r3;
}
function jsonParseTransform2(e7, t4) {
  if (!("__proto__" === e7 || "constructor" === e7 && t4 && "object" == typeof t4 && "prototype" in t4))
    return t4;
  !function(e8) {
    console.warn(`[destr] Dropping "${e8}" key to prevent prototype pollution.`);
  }(e7);
}
function destr2(e7, t4 = {}) {
  if ("string" != typeof e7)
    return e7;
  const r3 = e7.trim();
  if ('"' === e7[0] && e7.endsWith('"') && !e7.includes("\\"))
    return r3.slice(1, -1);
  if (r3.length <= 9) {
    const e8 = r3.toLowerCase();
    if ("true" === e8)
      return true;
    if ("false" === e8)
      return false;
    if ("undefined" === e8)
      return;
    if ("null" === e8)
      return null;
    if ("nan" === e8)
      return Number.NaN;
    if ("infinity" === e8)
      return Number.POSITIVE_INFINITY;
    if ("-infinity" === e8)
      return Number.NEGATIVE_INFINITY;
  }
  if (!ae2.test(e7)) {
    if (t4.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e7;
  }
  try {
    if (se2.test(e7) || ie2.test(e7)) {
      if (t4.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e7, jsonParseTransform2);
    }
    return JSON.parse(e7);
  } catch (r4) {
    if (t4.strict)
      throw r4;
    return e7;
  }
}
function isPlainObject3(e7) {
  if (null === e7 || "object" != typeof e7)
    return false;
  const t4 = Object.getPrototypeOf(e7);
  return (null === t4 || t4 === Object.prototype || null === Object.getPrototypeOf(t4)) && (!(Symbol.iterator in e7) && (!(Symbol.toStringTag in e7) || "[object Module]" === Object.prototype.toString.call(e7)));
}
function _defu2(e7, t4, r3 = ".", n4) {
  if (!isPlainObject3(t4))
    return _defu2(e7, {}, r3, n4);
  const o5 = Object.assign({}, t4);
  for (const t5 in e7) {
    if ("__proto__" === t5 || "constructor" === t5)
      continue;
    const s3 = e7[t5];
    null != s3 && (n4 && n4(o5, t5, s3, r3) || (Array.isArray(s3) && Array.isArray(o5[t5]) ? o5[t5] = [...s3, ...o5[t5]] : isPlainObject3(s3) && isPlainObject3(o5[t5]) ? o5[t5] = _defu2(s3, o5[t5], (r3 ? `${r3}.` : "") + t5.toString(), n4) : o5[t5] = s3));
  }
  return o5;
}
function createDefu(e7) {
  return (...t4) => t4.reduce((t5, r3) => _defu2(t5, r3, "", e7), {});
}
function _addListener(e7, t4, r3, n4) {
  _checkListener(r3), void 0 !== e7._events.newListener && e7.emit("newListener", t4, r3.listener || r3), e7._events[t4] || (e7._events[t4] = []), n4 ? e7._events[t4].unshift(r3) : e7._events[t4].push(r3);
  const o5 = _getMaxListeners(e7);
  if (o5 > 0 && e7._events[t4].length > o5 && !e7._events[t4].warned) {
    e7._events[t4].warned = true;
    const r4 = new Error(`[unenv] Possible EventEmitter memory leak detected. ${e7._events[t4].length} ${t4} listeners added. Use emitter.setMaxListeners() to increase limit`);
    r4.name = "MaxListenersExceededWarning", r4.emitter = e7, r4.type = t4, r4.count = e7._events[t4]?.length, console.warn(r4);
  }
  return e7;
}
function _wrapOnce(e7, t4, r3) {
  let n4 = false;
  const wrapper = (...o5) => {
    if (!n4)
      return e7.removeListener(t4, wrapper), n4 = true, 0 === o5.length ? r3.call(e7) : r3.apply(e7, o5);
  };
  return wrapper.listener = r3, wrapper;
}
function _getMaxListeners(e7) {
  return e7._maxListeners ?? fe2.defaultMaxListeners;
}
function _listeners(e7, t4, r3) {
  let n4 = e7._events[t4];
  return "function" == typeof n4 && (n4 = [n4]), r3 ? n4.map((e8) => e8.listener || e8) : n4;
}
function _checkListener(e7) {
  if ("function" != typeof e7)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e7);
}
function getDuplex() {
  return Object.assign(me2.prototype, pe.prototype), Object.assign(me2.prototype, de.prototype), me2;
}
function _distinct(e7) {
  const t4 = {};
  for (const [r3, n4] of Object.entries(e7))
    r3 && (t4[r3] = (Array.isArray(n4) ? n4 : [n4]).filter(Boolean));
  return t4;
}
function hasProp(e7, t4) {
  try {
    return t4 in e7;
  } catch {
    return false;
  }
}
function createError(e7) {
  if ("string" == typeof e7)
    return new H3Error(e7);
  if (isError(e7))
    return e7;
  const t4 = new H3Error(e7.message ?? e7.statusMessage ?? "", { cause: e7.cause || e7 });
  if (hasProp(e7, "stack"))
    try {
      Object.defineProperty(t4, "stack", { get: () => e7.stack });
    } catch {
      try {
        t4.stack = e7.stack;
      } catch {
      }
    }
  if (e7.data && (t4.data = e7.data), e7.statusCode ? t4.statusCode = sanitizeStatusCode(e7.statusCode, t4.statusCode) : e7.status && (t4.statusCode = sanitizeStatusCode(e7.status, t4.statusCode)), e7.statusMessage ? t4.statusMessage = e7.statusMessage : e7.statusText && (t4.statusMessage = e7.statusText), t4.statusMessage) {
    const e8 = t4.statusMessage;
    sanitizeStatusMessage(t4.statusMessage) !== e8 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e7.fatal && (t4.fatal = e7.fatal), void 0 !== e7.unhandled && (t4.unhandled = e7.unhandled), t4;
}
function isError(e7) {
  return true === e7?.constructor?.__h3_error__;
}
function getQuery(e7) {
  return getQuery$1(e7.path || "");
}
function getRequestHeaders(e7) {
  const t4 = {};
  for (const r3 in e7.node.req.headers) {
    const n4 = e7.node.req.headers[r3];
    t4[r3] = Array.isArray(n4) ? n4.filter(Boolean).join(", ") : n4;
  }
  return t4;
}
function readRawBody(e7, t4 = "utf8") {
  !function(e8, t5, r4) {
    if (!function(e9, t6, r5) {
      if ("string" == typeof t6) {
        if (e9.method === t6)
          return true;
      } else if (t6.includes(e9.method))
        return true;
      return false;
    }(e8, t5))
      throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e7, ve2);
  const r3 = e7._requestBody || e7.web?.request?.body || e7.node.req[be3] || e7.node.req.rawBody || e7.node.req.body;
  if (r3) {
    const e8 = Promise.resolve(r3).then((e9) => f.isBuffer(e9) ? e9 : "function" == typeof e9.pipeTo ? new Promise((t5, r4) => {
      const n5 = [];
      e9.pipeTo(new WritableStream({ write(e10) {
        n5.push(e10);
      }, close() {
        t5(f.concat(n5));
      }, abort(e10) {
        r4(e10);
      } })).catch(r4);
    }) : "function" == typeof e9.pipe ? new Promise((t5, r4) => {
      const n5 = [];
      e9.on("data", (e10) => {
        n5.push(e10);
      }).on("end", () => {
        t5(f.concat(n5));
      }).on("error", r4);
    }) : e9.constructor === Object ? f.from(JSON.stringify(e9)) : f.from(e9));
    return t4 ? e8.then((e9) => e9.toString(t4)) : e8;
  }
  if (!Number.parseInt(e7.node.req.headers["content-length"] || ""))
    return Promise.resolve(void 0);
  const n4 = e7.node.req[be3] = new Promise((t5, r4) => {
    const n5 = [];
    e7.node.req.on("error", (e8) => {
      r4(e8);
    }).on("data", (e8) => {
      n5.push(e8);
    }).on("end", () => {
      t5(f.concat(n5));
    });
  });
  return t4 ? n4.then((e8) => e8.toString(t4)) : n4;
}
function handleCacheHeaders(e7, t4) {
  const r3 = ["public", ...t4.cacheControls || []];
  let n4 = false;
  if (void 0 !== t4.maxAge && r3.push("max-age=" + +t4.maxAge, "s-maxage=" + +t4.maxAge), t4.modifiedTime) {
    const r4 = new Date(t4.modifiedTime), o5 = e7.node.req.headers["if-modified-since"];
    e7.node.res.setHeader("last-modified", r4.toUTCString()), o5 && new Date(o5) >= t4.modifiedTime && (n4 = true);
  }
  if (t4.etag) {
    e7.node.res.setHeader("etag", t4.etag);
    e7.node.req.headers["if-none-match"] === t4.etag && (n4 = true);
  }
  return e7.node.res.setHeader("cache-control", r3.join(", ")), !!n4 && (e7.node.res.statusCode = 304, e7.handled || e7.node.res.end(), true);
}
function sanitizeStatusMessage(e7 = "") {
  return e7.replace(_e2, "");
}
function sanitizeStatusCode(e7, t4 = 200) {
  return e7 ? ("string" == typeof e7 && (e7 = Number.parseInt(e7, 10)), e7 < 100 || e7 > 999 ? t4 : e7) : t4;
}
function splitCookiesString(e7) {
  if (Array.isArray(e7))
    return e7.flatMap((e8) => splitCookiesString(e8));
  if ("string" != typeof e7)
    return [];
  const t4 = [];
  let r3, n4, o5, s3, i4, a4 = 0;
  const skipWhitespace = () => {
    for (; a4 < e7.length && /\s/.test(e7.charAt(a4)); )
      a4 += 1;
    return a4 < e7.length;
  };
  for (; a4 < e7.length; ) {
    for (r3 = a4, i4 = false; skipWhitespace(); )
      if (n4 = e7.charAt(a4), "," === n4) {
        for (o5 = a4, a4 += 1, skipWhitespace(), s3 = a4; a4 < e7.length && (n4 = e7.charAt(a4), "=" !== n4 && ";" !== n4 && "," !== n4); )
          a4 += 1;
        a4 < e7.length && "=" === e7.charAt(a4) ? (i4 = true, a4 = s3, t4.push(e7.slice(r3, o5)), r3 = a4) : a4 = o5 + 1;
      } else
        a4 += 1;
    (!i4 || a4 >= e7.length) && t4.push(e7.slice(r3, e7.length));
  }
  return t4;
}
function send(e7, t4, r3) {
  return r3 && function(e8, t5) {
    t5 && 304 !== e8.node.res.statusCode && !e8.node.res.getHeader("content-type") && e8.node.res.setHeader("content-type", t5);
  }(e7, r3), new Promise((r4) => {
    Ee2(() => {
      e7.handled || e7.node.res.end(t4), r4();
    });
  });
}
function setResponseStatus(e7, t4, r3) {
  t4 && (e7.node.res.statusCode = sanitizeStatusCode(t4, e7.node.res.statusCode)), r3 && (e7.node.res.statusMessage = sanitizeStatusMessage(r3));
}
function getResponseStatus(e7) {
  return e7.node.res.statusCode;
}
function getResponseStatusText(e7) {
  return e7.node.res.statusMessage;
}
function setResponseHeaders(e7, t4) {
  for (const [r3, n4] of Object.entries(t4))
    e7.node.res.setHeader(r3, n4);
}
function setResponseHeader(e7, t4, r3) {
  e7.node.res.setHeader(t4, r3);
}
function sendStream(e7, t4) {
  if (!t4 || "object" != typeof t4)
    throw new Error("[h3] Invalid stream provided.");
  if (e7.node.res._data = t4, !e7.node.res.socket)
    return e7._handled = true, Promise.resolve();
  if (hasProp(t4, "pipeTo") && "function" == typeof t4.pipeTo)
    return t4.pipeTo(new WritableStream({ write(t5) {
      e7.node.res.write(t5);
    } })).then(() => {
      e7.node.res.end();
    });
  if (hasProp(t4, "pipe") && "function" == typeof t4.pipe)
    return new Promise((r3, n4) => {
      t4.pipe(e7.node.res), t4.on && (t4.on("end", () => {
        e7.node.res.end(), r3();
      }), t4.on("error", (e8) => {
        n4(e8);
      })), e7.node.res.on("close", () => {
        t4.abort && t4.abort();
      });
    });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e7, t4) {
  for (const [r3, n4] of t4.headers)
    "set-cookie" === r3 ? e7.node.res.appendHeader(r3, splitCookiesString(n4)) : e7.node.res.setHeader(r3, n4);
  if (t4.status && (e7.node.res.statusCode = sanitizeStatusCode(t4.status, e7.node.res.statusCode)), t4.statusText && (e7.node.res.statusMessage = sanitizeStatusMessage(t4.statusText)), t4.redirected && e7.node.res.setHeader("location", t4.url), t4.body)
    return sendStream(e7, t4.body);
  e7.node.res.end();
}
async function proxyRequest(e7, t4, r3 = {}) {
  let n4, o5;
  Re2.has(e7.method) && (r3.streamRequest ? (n4 = function(e8) {
    if (!ve2.includes(e8.method))
      return;
    const t5 = e8.web?.request?.body || e8._requestBody;
    return t5 || (be3 in e8.node.req || "rawBody" in e8.node.req || "body" in e8.node.req || "__unenv__" in e8.node.req ? new ReadableStream({ async start(t6) {
      const r4 = await readRawBody(e8, false);
      r4 && t6.enqueue(r4), t6.close();
    } }) : new ReadableStream({ start: (t6) => {
      e8.node.req.on("data", (e9) => {
        t6.enqueue(e9);
      }), e8.node.req.on("end", () => {
        t6.close();
      }), e8.node.req.on("error", (e9) => {
        t6.error(e9);
      });
    } }));
  }(e7), o5 = "half") : n4 = await readRawBody(e7, false).catch(() => {
  }));
  const s3 = r3.fetchOptions?.method || e7.method, i4 = function(e8, ...t5) {
    const r4 = t5.filter(Boolean);
    if (0 === r4.length)
      return e8;
    const n5 = new Headers(e8);
    for (const e9 of r4)
      for (const [t6, r5] of Object.entries(e9))
        void 0 !== r5 && n5.set(t6, r5);
    return n5;
  }(getProxyRequestHeaders(e7), r3.fetchOptions?.headers, r3.headers);
  return async function(e8, t5, r4 = {}) {
    const n5 = await _getFetch(r4.fetch)(t5, { headers: r4.headers, ignoreResponseError: true, ...r4.fetchOptions });
    e8.node.res.statusCode = sanitizeStatusCode(n5.status, e8.node.res.statusCode), e8.node.res.statusMessage = sanitizeStatusMessage(n5.statusText);
    const o6 = [];
    for (const [t6, r5] of n5.headers.entries())
      "content-encoding" !== t6 && "content-length" !== t6 && ("set-cookie" !== t6 ? e8.node.res.setHeader(t6, r5) : o6.push(...splitCookiesString(r5)));
    o6.length > 0 && e8.node.res.setHeader("set-cookie", o6.map((e9) => (r4.cookieDomainRewrite && (e9 = rewriteCookieProperty(e9, r4.cookieDomainRewrite, "domain")), r4.cookiePathRewrite && (e9 = rewriteCookieProperty(e9, r4.cookiePathRewrite, "path")), e9)));
    r4.onResponse && await r4.onResponse(e8, n5);
    if (void 0 !== n5._data)
      return n5._data;
    if (e8.handled)
      return;
    if (false === r4.sendStream) {
      const t6 = new Uint8Array(await n5.arrayBuffer());
      return e8.node.res.end(t6);
    }
    if (n5.body)
      for await (const t6 of n5.body)
        e8.node.res.write(t6);
    return e8.node.res.end();
  }(e7, t4, { ...r3, fetchOptions: { method: s3, body: n4, duplex: o5, ...r3.fetchOptions, headers: i4 } });
}
function getProxyRequestHeaders(e7) {
  const t4 = /* @__PURE__ */ Object.create(null), r3 = getRequestHeaders(e7);
  for (const e8 in r3)
    Ie2.has(e8) || (t4[e8] = r3[e8]);
  return t4;
}
function fetchWithEvent(e7, t4, r3, n4) {
  return _getFetch(n4?.fetch)(t4, { ...r3, context: r3?.context || e7.context, headers: { ...getProxyRequestHeaders(e7), ...r3?.headers } });
}
function _getFetch(e7) {
  if (e7)
    return e7;
  if (globalThis.fetch)
    return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e7, t4, r3) {
  const n4 = "string" == typeof t4 ? { "*": t4 } : t4;
  return e7.replace(new RegExp(`(;\\s*${r3}=)([^;]+)`, "gi"), (e8, t5, r4) => {
    let o5;
    if (r4 in n4)
      o5 = n4[r4];
    else {
      if (!("*" in n4))
        return e8;
      o5 = n4["*"];
    }
    return o5 ? t5 + o5 : "";
  });
}
function isEvent(e7) {
  return hasProp(e7, "__is_event__");
}
function createEvent(e7, t4) {
  return new H3Event(e7, t4);
}
function defineEventHandler(e7) {
  if ("function" == typeof e7)
    return e7.__is_handler__ = true, e7;
  const t4 = { onRequest: _normalizeArray(e7.onRequest), onBeforeResponse: _normalizeArray(e7.onBeforeResponse) }, _handler = (r3) => async function(e8, t5, r4) {
    if (r4.onRequest) {
      for (const t6 of r4.onRequest)
        if (await t6(e8), e8.handled)
          return;
    }
    const n4 = await t5(e8), o5 = { body: n4 };
    if (r4.onBeforeResponse)
      for (const t6 of r4.onBeforeResponse)
        await t6(e8, o5);
    return o5.body;
  }(r3, e7.handler, t4);
  return _handler.__is_handler__ = true, _handler.__resolve__ = e7.handler.__resolve__, _handler.__websocket__ = e7.websocket, _handler;
}
function _normalizeArray(e7) {
  return e7 ? Array.isArray(e7) ? e7 : [e7] : void 0;
}
function isEventHandler(e7) {
  return hasProp(e7, "__is_handler__");
}
function toEventHandler(e7, t4, r3) {
  return isEventHandler(e7) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r3 && "/" !== r3 ? `
     Route: ${r3}` : "", `
     Handler: ${e7}`), e7;
}
function createApp2(e7 = {}) {
  const t4 = [], r3 = function(e8, t5) {
    const r4 = t5.debug ? 2 : void 0;
    return Ae(async (n5) => {
      n5.node.req.originalUrl = n5.node.req.originalUrl || n5.node.req.url || "/";
      const o6 = n5._path || n5.node.req.url || "/";
      let s4;
      t5.onRequest && await t5.onRequest(n5);
      for (const i4 of e8) {
        if (i4.route.length > 1) {
          if (!o6.startsWith(i4.route))
            continue;
          s4 = o6.slice(i4.route.length) || "/";
        } else
          s4 = o6;
        if (i4.match && !i4.match(s4, n5))
          continue;
        n5._path = s4, n5.node.req.url = s4;
        const e9 = await i4.handler(n5), a4 = void 0 === e9 ? void 0 : await e9;
        if (void 0 !== a4) {
          const e10 = { body: a4 };
          return t5.onBeforeResponse && await t5.onBeforeResponse(n5, e10), await handleHandlerResponse(n5, e10.body, r4), void (t5.onAfterResponse && await t5.onAfterResponse(n5, e10));
        }
        if (n5.handled)
          return void (t5.onAfterResponse && await t5.onAfterResponse(n5, void 0));
      }
      if (!n5.handled)
        throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${n5.path || "/"}.` });
      t5.onAfterResponse && await t5.onAfterResponse(n5, void 0);
    });
  }(t4, e7), n4 = function(e8) {
    return async (t5) => {
      let r4;
      for (const n5 of e8) {
        if ("/" === n5.route && !n5.handler.__resolve__)
          continue;
        if (!t5.startsWith(n5.route))
          continue;
        if (r4 = t5.slice(n5.route.length) || "/", n5.match && !n5.match(r4, void 0))
          continue;
        let e9 = { route: n5.route, handler: n5.handler };
        if (e9.handler.__resolve__) {
          const t6 = await e9.handler.__resolve__(r4);
          if (!t6)
            continue;
          e9 = { ...e9, ...t6, route: joinURL2(e9.route || "/", t6.route || "/") };
        }
        return e9;
      }
    };
  }(t4);
  r3.__resolve__ = n4;
  const o5 = function(e8) {
    let t5;
    return () => (t5 || (t5 = e8()), t5);
  }(() => {
    return t5 = n4, { ...e7.websocket, async resolve(e8) {
      const { pathname: r4 } = parseURL2(e8.url || "/"), n5 = await t5(r4);
      return n5?.handler?.__websocket__ || {};
    } };
    var t5;
  }), s3 = { use: (e8, t5, r4) => use(s3, e8, t5, r4), resolve: n4, handler: r3, stack: t4, options: e7, get websocket() {
    return o5();
  } };
  return s3;
}
function use(e7, t4, r3, n4) {
  if (Array.isArray(t4))
    for (const o5 of t4)
      use(e7, o5, r3, n4);
  else if (Array.isArray(r3))
    for (const o5 of r3)
      use(e7, t4, o5, n4);
  else
    "string" == typeof t4 ? e7.stack.push(normalizeLayer({ ...n4, route: t4, handler: r3 })) : "function" == typeof t4 ? e7.stack.push(normalizeLayer({ ...r3, handler: t4 })) : e7.stack.push(normalizeLayer({ ...t4 }));
  return e7;
}
function normalizeLayer(e7) {
  let t4 = e7.handler;
  return t4.handler && (t4 = t4.handler), e7.lazy ? t4 = lazyEventHandler(t4) : isEventHandler(t4) || (t4 = toEventHandler(t4, 0, e7.route)), { route: withoutTrailingSlash2(e7.route), match: e7.match, handler: t4 };
}
function handleHandlerResponse(e7, t4, r3) {
  if (null === t4)
    return function(e8, t5) {
      if (e8.handled)
        return;
      t5 || 200 === e8.node.res.statusCode || (t5 = e8.node.res.statusCode);
      const r4 = sanitizeStatusCode(t5, 204);
      204 === r4 && e8.node.res.removeHeader("content-length"), e8.node.res.writeHead(r4), e8.node.res.end();
    }(e7);
  if (t4) {
    if (n4 = t4, "undefined" != typeof Response && n4 instanceof Response)
      return sendWebResponse(e7, t4);
    if (function(e8) {
      if (!e8 || "object" != typeof e8)
        return false;
      if ("function" == typeof e8.pipe) {
        if ("function" == typeof e8._read)
          return true;
        if ("function" == typeof e8.abort)
          return true;
      }
      return "function" == typeof e8.pipeTo;
    }(t4))
      return sendStream(e7, t4);
    if (t4.buffer)
      return send(e7, t4);
    if (t4.arrayBuffer && "function" == typeof t4.arrayBuffer)
      return t4.arrayBuffer().then((r4) => send(e7, f.from(r4), t4.type));
    if (t4 instanceof Error)
      throw createError(t4);
    if ("function" == typeof t4.end)
      return true;
  }
  var n4;
  const o5 = typeof t4;
  if ("string" === o5)
    return send(e7, t4, xe3.html);
  if ("object" === o5 || "boolean" === o5 || "number" === o5)
    return send(e7, JSON.stringify(t4, void 0, r3), xe3.json);
  if ("bigint" === o5)
    return send(e7, t4.toString(), xe3.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${o5} as response.` });
}
function toNodeListener(e7) {
  return async function(t4, r3) {
    const n4 = createEvent(t4, r3);
    try {
      await e7.handler(n4);
    } catch (t5) {
      const r4 = createError(t5);
      if (isError(t5) || (r4.unhandled = true), e7.options.onError && await e7.options.onError(r4, n4), n4.handled)
        return;
      (r4.unhandled || r4.fatal) && console.error("[h3]", r4.fatal ? "[fatal]" : "[unhandled]", r4), await function(e8, t6, r5) {
        if (e8.handled)
          return;
        const n5 = isError(t6) ? t6 : createError(t6), o5 = { statusCode: n5.statusCode, statusMessage: n5.statusMessage, stack: [], data: n5.data };
        if (r5 && (o5.stack = (n5.stack || "").split("\n").map((e9) => e9.trim())), e8.handled)
          return;
        setResponseStatus(e8, Number.parseInt(n5.statusCode), n5.statusMessage), e8.node.res.setHeader("content-type", xe3.json), e8.node.res.end(JSON.stringify(o5, void 0, 2));
      }(n4, r4, !!e7.options.debug);
    }
  };
}
function isPayloadMethod2(e7 = "GET") {
  return Ce2.has(e7.toUpperCase());
}
function mergeFetchOptions2(e7, t4, r3 = globalThis.Headers) {
  const n4 = { ...t4, ...e7 };
  if (t4?.params && e7?.params && (n4.params = { ...t4?.params, ...e7?.params }), t4?.query && e7?.query && (n4.query = { ...t4?.query, ...e7?.query }), t4?.headers && e7?.headers) {
    n4.headers = new r3(t4?.headers || {});
    for (const [t5, o5] of new r3(e7?.headers || {}))
      n4.headers.set(t5, o5);
  }
  return n4;
}
function createFetch$1(e7 = {}) {
  const { fetch: t4 = globalThis.fetch, Headers: r3 = globalThis.Headers, AbortController: n4 = globalThis.AbortController } = e7;
  async function onError(e8) {
    const t5 = e8.error && "AbortError" === e8.error.name && !e8.options.timeout || false;
    if (false !== e8.options.retry && !t5) {
      let t6;
      t6 = "number" == typeof e8.options.retry ? e8.options.retry : isPayloadMethod2(e8.options.method) ? 0 : 1;
      const r5 = e8.response && e8.response.status || 500;
      if (t6 > 0 && (Array.isArray(e8.options.retryStatusCodes) ? e8.options.retryStatusCodes.includes(r5) : je2.has(r5))) {
        const r6 = e8.options.retryDelay || 0;
        return r6 > 0 && await new Promise((e9) => setTimeout(e9, r6)), $fetchRaw(e8.request, { ...e8.options, retry: t6 - 1 });
      }
    }
    const r4 = function(e9) {
      const t6 = e9.error?.message || e9.error?.toString() || "", r5 = e9.request?.method || e9.options?.method || "GET", n5 = e9.request?.url || String(e9.request) || "/", o5 = `[${r5}] ${JSON.stringify(n5)}`, s3 = e9.response ? `${e9.response.status} ${e9.response.statusText}` : "<no response>", i4 = new FetchError2(`${o5}: ${s3}${t6 ? ` ${t6}` : ""}`, e9.error ? { cause: e9.error } : void 0);
      for (const t7 of ["request", "options", "response"])
        Object.defineProperty(i4, t7, { get: () => e9[t7] });
      for (const [t7, r6] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(i4, t7, { get: () => e9.response && e9.response[r6] });
      return i4;
    }(e8);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, $fetchRaw), r4;
  }
  const $fetchRaw = async function(o5, s3 = {}) {
    const i4 = { request: o5, options: mergeFetchOptions2(s3, e7.defaults, r3), response: void 0, error: void 0 };
    let a4;
    if (i4.options.method = i4.options.method?.toUpperCase(), i4.options.onRequest && await i4.options.onRequest(i4), "string" == typeof i4.request && (i4.options.baseURL && (i4.request = function(e8, t5) {
      if (isEmptyURL(t5) || hasProtocol2(e8))
        return e8;
      const r4 = withoutTrailingSlash2(t5);
      return e8.startsWith(r4) ? e8 : joinURL2(r4, e8);
    }(i4.request, i4.options.baseURL)), (i4.options.query || i4.options.params) && (i4.request = withQuery2(i4.request, { ...i4.options.params, ...i4.options.query }))), i4.options.body && isPayloadMethod2(i4.options.method) && (!function(e8) {
      if (void 0 === e8)
        return false;
      const t5 = typeof e8;
      return "string" === t5 || "number" === t5 || "boolean" === t5 || null === t5 || "object" === t5 && (!!Array.isArray(e8) || !e8.buffer && (e8.constructor && "Object" === e8.constructor.name || "function" == typeof e8.toJSON));
    }(i4.options.body) ? ("pipeTo" in i4.options.body && "function" == typeof i4.options.body.pipeTo || "function" == typeof i4.options.body.pipe) && ("duplex" in i4.options || (i4.options.duplex = "half")) : (i4.options.body = "string" == typeof i4.options.body ? i4.options.body : JSON.stringify(i4.options.body), i4.options.headers = new r3(i4.options.headers || {}), i4.options.headers.has("content-type") || i4.options.headers.set("content-type", "application/json"), i4.options.headers.has("accept") || i4.options.headers.set("accept", "application/json"))), !i4.options.signal && i4.options.timeout) {
      const e8 = new n4();
      a4 = setTimeout(() => e8.abort(), i4.options.timeout), i4.options.signal = e8.signal;
    }
    try {
      i4.response = await t4(i4.request, i4.options);
    } catch (e8) {
      return i4.error = e8, i4.options.onRequestError && await i4.options.onRequestError(i4), await onError(i4);
    } finally {
      a4 && clearTimeout(a4);
    }
    if (i4.response.body && !Oe2.has(i4.response.status) && "HEAD" !== i4.options.method) {
      const e8 = (i4.options.parseResponse ? "json" : i4.options.responseType) || function(e9 = "") {
        if (!e9)
          return "json";
        const t5 = e9.split(";").shift() || "";
        return $e2.test(t5) ? "json" : Se2.has(t5) || t5.startsWith("text/") ? "text" : "blob";
      }(i4.response.headers.get("content-type") || "");
      switch (e8) {
        case "json": {
          const e9 = await i4.response.text(), t5 = i4.options.parseResponse || destr2;
          i4.response._data = t5(e9);
          break;
        }
        case "stream":
          i4.response._data = i4.response.body;
          break;
        default:
          i4.response._data = await i4.response[e8]();
      }
    }
    return i4.options.onResponse && await i4.options.onResponse(i4), !i4.options.ignoreResponseError && i4.response.status >= 400 && i4.response.status < 600 ? (i4.options.onResponseError && await i4.options.onResponseError(i4), await onError(i4)) : i4.response;
  }, $fetch = async function(e8, t5) {
    return (await $fetchRaw(e8, t5))._data;
  };
  return $fetch.raw = $fetchRaw, $fetch.native = (...e8) => t4(...e8), $fetch.create = (t5 = {}) => createFetch$1({ ...e7, defaults: { ...e7.defaults, ...t5 } }), $fetch;
}
function flatHooks(e7, t4 = {}, r3) {
  for (const n4 in e7) {
    const o5 = e7[n4], s3 = r3 ? `${r3}:${n4}` : n4;
    "object" == typeof o5 && null !== o5 ? flatHooks(o5, t4, s3) : "function" == typeof o5 && (t4[s3] = o5);
  }
  return t4;
}
function serialTaskCaller(e7, t4) {
  const r3 = t4.shift(), n4 = qe2(r3);
  return e7.reduce((e8, r4) => e8.then(() => n4.run(() => r4(...t4))), Promise.resolve());
}
function parallelTaskCaller(e7, t4) {
  const r3 = t4.shift(), n4 = qe2(r3);
  return Promise.all(e7.map((e8) => n4.run(() => e8(...t4))));
}
function callEachWith(e7, t4) {
  for (const r3 of [...e7])
    r3(t4);
}
function createHooks() {
  return new Hookable();
}
function klona(e7) {
  if ("object" != typeof e7)
    return e7;
  var t4, r3, n4 = Object.prototype.toString.call(e7);
  if ("[object Object]" === n4) {
    if (e7.constructor !== Object && "function" == typeof e7.constructor)
      for (t4 in r3 = new e7.constructor(), e7)
        e7.hasOwnProperty(t4) && r3[t4] !== e7[t4] && (r3[t4] = klona(e7[t4]));
    else
      for (t4 in r3 = {}, e7)
        "__proto__" === t4 ? Object.defineProperty(r3, t4, { value: klona(e7[t4]), configurable: true, enumerable: true, writable: true }) : r3[t4] = klona(e7[t4]);
    return r3;
  }
  if ("[object Array]" === n4) {
    for (t4 = e7.length, r3 = Array(t4); t4--; )
      r3[t4] = klona(e7[t4]);
    return r3;
  }
  return "[object Set]" === n4 ? (r3 = /* @__PURE__ */ new Set(), e7.forEach(function(e8) {
    r3.add(klona(e8));
  }), r3) : "[object Map]" === n4 ? (r3 = /* @__PURE__ */ new Map(), e7.forEach(function(e8, t5) {
    r3.set(klona(t5), klona(e8));
  }), r3) : "[object Date]" === n4 ? /* @__PURE__ */ new Date(+e7) : "[object RegExp]" === n4 ? ((r3 = new RegExp(e7.source, e7.flags)).lastIndex = e7.lastIndex, r3) : "[object DataView]" === n4 ? new e7.constructor(klona(e7.buffer)) : "[object ArrayBuffer]" === n4 ? e7.slice(0) : "Array]" === n4.slice(-6) ? new e7.constructor(e7) : e7;
}
function isUppercase(e7 = "") {
  if (!We2.test(e7))
    return e7 !== e7.toLowerCase();
}
function kebabCase(e7, t4) {
  return e7 ? (Array.isArray(e7) ? e7 : function(e8, t5) {
    const r3 = ze2, n4 = [];
    if (!e8 || "string" != typeof e8)
      return n4;
    let o5, s3, i4 = "";
    for (const t6 of e8) {
      const e9 = r3.includes(t6);
      if (true === e9) {
        n4.push(i4), i4 = "", o5 = void 0;
        continue;
      }
      const a4 = isUppercase(t6);
      if (false === s3) {
        if (false === o5 && true === a4) {
          n4.push(i4), i4 = t6, o5 = a4;
          continue;
        }
        if (true === o5 && false === a4 && i4.length > 1) {
          const e10 = i4.at(-1);
          n4.push(i4.slice(0, Math.max(0, i4.length - 1))), i4 = e10 + t6, o5 = a4;
          continue;
        }
      }
      i4 += t6, o5 = a4, s3 = e9;
    }
    return n4.push(i4), n4;
  }(e7)).map((e8) => e8.toLowerCase()).join(t4) : "";
}
function getEnv(e7, t4) {
  const r3 = (n4 = e7, kebabCase(n4 || "", "_")).toUpperCase();
  var n4;
  return destr2(B.env[t4.prefix + r3] ?? B.env[t4.altPrefix + r3]);
}
function _isObject(e7) {
  return "object" == typeof e7 && !Array.isArray(e7);
}
function applyEnv(e7, t4, r3 = "") {
  for (const n4 in e7) {
    const o5 = r3 ? `${r3}_${n4}` : n4, s3 = getEnv(o5, t4);
    _isObject(e7[n4]) ? _isObject(s3) ? (e7[n4] = { ...e7[n4], ...s3 }, applyEnv(e7[n4], t4, o5)) : void 0 === s3 ? applyEnv(e7[n4], t4, o5) : e7[n4] = s3 ?? e7[n4] : e7[n4] = s3 ?? e7[n4], t4.envExpansion && "string" == typeof e7[n4] && (e7[n4] = e7[n4].replace(Fe2, (e8, t5) => B.env[t5] || e8));
  }
  return e7;
}
function useRuntimeConfig2(e7) {
  if (!e7)
    return Qe2;
  if (e7.context.nitro.runtimeConfig)
    return e7.context.nitro.runtimeConfig;
  const t4 = klona(Ke2);
  return applyEnv(t4, Ve2), e7.context.nitro.runtimeConfig = t4, t4;
}
function _deepFreeze(e7) {
  const t4 = Object.getOwnPropertyNames(e7);
  for (const r3 of t4) {
    const t5 = e7[r3];
    t5 && "object" == typeof t5 && _deepFreeze(t5);
  }
  return Object.freeze(e7);
}
function asyncCall(e7, ...t4) {
  try {
    return (r3 = e7(...t4)) && "function" == typeof r3.then ? r3 : Promise.resolve(r3);
  } catch (e8) {
    return Promise.reject(e8);
  }
  var r3;
}
function stringify2(e7) {
  if (function(e8) {
    const t4 = typeof e8;
    return null === e8 || "object" !== t4 && "function" !== t4;
  }(e7))
    return String(e7);
  if (function(e8) {
    const t4 = Object.getPrototypeOf(e8);
    return !t4 || t4.isPrototypeOf(Object);
  }(e7) || Array.isArray(e7))
    return JSON.stringify(e7);
  if ("function" == typeof e7.toJSON)
    return stringify2(e7.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (void 0 === typeof f)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
function normalizeKey$1(e7) {
  return e7 ? e7.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function joinKeys(...e7) {
  return normalizeKey$1(e7.join(":"));
}
function normalizeBaseKey(e7) {
  return (e7 = normalizeKey$1(e7)) ? e7 + ":" : "";
}
function watch2(e7, t4, r3) {
  return e7.watch ? e7.watch((e8, n4) => t4(e8, r3 + n4)) : () => {
  };
}
async function dispose(e7) {
  "function" == typeof e7.dispose && await asyncCall(e7.dispose);
}
function useStorage(e7 = "") {
  return e7 ? function(e8, t4) {
    if (!(t4 = normalizeBaseKey(t4)))
      return e8;
    const r3 = { ...e8 };
    for (const n4 of Ge2)
      r3[n4] = (r4 = "", ...o5) => e8[n4](t4 + r4, ...o5);
    return r3.getKeys = (r4 = "", ...n4) => e8.getKeys(t4 + r4, ...n4).then((e9) => e9.map((e10) => e10.slice(t4.length))), r3;
  }(Ze2, e7) : Ze2;
}
function getKey(...e7) {
  return e7.length > 0 ? hash(e7, {}) : "";
}
function escapeKey(e7) {
  return String(e7).replace(/\W/g, "");
}
function cloneWithProxy(e7, t4) {
  return new Proxy(e7, { get: (e8, r3, n4) => r3 in t4 ? t4[r3] : Reflect.get(e8, r3, n4), set: (e8, r3, n4, o5) => r3 in t4 ? (t4[r3] = n4, true) : Reflect.set(e8, r3, n4, o5) });
}
function createRouteRulesHandler(e7) {
  return Ae((t4) => {
    const r3 = getRouteRules(t4);
    if (r3.headers && Be2(t4, r3.headers), r3.redirect) {
      let e8 = r3.redirect.to;
      if (e8.endsWith("/**")) {
        let n4 = t4.path;
        const o5 = r3.redirect._redirectStripBase;
        o5 && (n4 = withoutBase(n4, o5)), e8 = joinURL2(e8.slice(0, -3), n4);
      } else if (t4.path.includes("?")) {
        e8 = withQuery2(e8, getQuery$1(t4.path));
      }
      return function(e9, t5, r4 = 302) {
        return e9.node.res.statusCode = sanitizeStatusCode(r4, e9.node.res.statusCode), e9.node.res.setHeader("location", t5), send(e9, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5.replace(/"/g, "%22")}"></head></html>`, xe3.html);
      }(t4, e8, r3.redirect.statusCode);
    }
    if (r3.proxy) {
      let n4 = r3.proxy.to;
      if (n4.endsWith("/**")) {
        let e8 = t4.path;
        const o5 = r3.proxy._proxyStripBase;
        o5 && (e8 = withoutBase(e8, o5)), n4 = joinURL2(n4.slice(0, -3), e8);
      } else if (t4.path.includes("?")) {
        n4 = withQuery2(n4, getQuery$1(t4.path));
      }
      return proxyRequest(t4, n4, { fetch: e7.localFetch, ...r3.proxy });
    }
  });
}
function getRouteRules(e7) {
  return e7.context._nitro = e7.context._nitro || {}, e7.context._nitro.routeRules || (e7.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e7.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e7.context._nitro.routeRules;
}
function getRouteRulesForPath(e7) {
  return ce2({}, ...tt3.matchAll(e7).reverse());
}
function hasReqHeader(e7, t4, r3) {
  const n4 = function(e8, t5) {
    return getRequestHeaders(e8)[t5.toLowerCase()];
  }(e7, t4);
  return n4 && "string" == typeof n4 && n4.toLowerCase().includes(r3);
}
function joinHeaders(e7) {
  return Array.isArray(e7) ? e7.join(", ") : String(e7);
}
function normalizeCookieHeader(e7 = "") {
  return splitCookiesString(joinHeaders(e7));
}
function normalizeCookieHeaders(e7) {
  const t4 = new Headers();
  for (const [r3, n4] of e7)
    if ("set-cookie" === r3)
      for (const e8 of normalizeCookieHeader(n4))
        t4.append("set-cookie", e8);
    else
      t4.set(r3, joinHeaders(n4));
  return t4;
}
function assetsCacheControl(e7) {
  const t4 = function(e8 = "") {
    for (const t5 in it3)
      if (e8.startsWith(t5))
        return it3[t5];
    return {};
  }(new URL(e7.url).pathname);
  return t4.maxAge ? { browserTTL: t4.maxAge, edgeTTL: t4.maxAge } : {};
}
var t3, r2, n3, o4, s2, i3, a3, c, u2, l3, f, h3, p, d2, m2, g, y2, w3, b2, v3, _getEnv, x2, _3, B, R2, I2, k2, A3, T2, C2, S2, $2, j2, O3, N3, L2, M2, U2, P2, H2, q3, W3, z2, F2, noop, D2, K2, KVError, V2, Q2, J2, G2, WordArray, Y2, X3, Z3, ee2, BufferedBlockAlgorithm, Hasher, te2, re2, ne2, SHA256, oe2, se2, ie2, ae2, ce2, ue2, le2, fe2, he2, _Readable, pe, de, me2, ge2, ye, Socket, IncomingMessage, ServerResponse, we2, __publicField$2, H3Error, be3, ve2, xe3, _e2, Ee2, Be2, Re2, Ie2, ke2, __publicField, H3Event, Ae, lazyEventHandler, Te2, FetchError2, Ce2, Se2, $e2, je2, Oe2, Ne2, Le2, Me2, Ue2, Pe3, He2, qe2, Hookable, We2, ze2, Fe2, De2, Ke2, Ve2, Qe2, Je2, Ge2, memory, Ye2, normalizeKey2, Xe3, Ze2, et3, cachedFunction, cachedEventHandler, tt3, rt2, errorHandler, _lazy_6POH2x, nt2, ot3, useNitroApp, st3, it3, at3, baseURLModifier;
var init_runtime = __esm({
  ".output/server/chunks/runtime.mjs"() {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    t3 = [];
    r2 = [];
    n3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    o4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let e7 = 0, n4 = 64; e7 < n4; ++e7)
      t3[e7] = o4[e7], r2[o4.charCodeAt(e7)] = e7;
    r2["-".charCodeAt(0)] = 62, r2["_".charCodeAt(0)] = 63;
    s2 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    i3 = 2147483647;
    Buffer$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        const e7 = new Uint8Array(1), t4 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t4, Uint8Array.prototype), Object.setPrototypeOf(e7, t4), 42 === e7.foo();
      } catch {
        return false;
      }
    }(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: function() {
      if (Buffer$1.isBuffer(this))
        return this.byteOffset;
    } }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e7, t4, r3) {
      return from(e7, t4, r3);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e7, t4, r3) {
      return function(e8, t5, r4) {
        return assertSize(e8), e8 <= 0 ? createBuffer2(e8) : void 0 !== t5 ? "string" == typeof r4 ? createBuffer2(e8).fill(t5, r4) : createBuffer2(e8).fill(t5) : createBuffer2(e8);
      }(e7, t4, r3);
    }, Buffer$1.allocUnsafe = function(e7) {
      return allocUnsafe(e7);
    }, Buffer$1.allocUnsafeSlow = function(e7) {
      return allocUnsafe(e7);
    }, Buffer$1.isBuffer = function(e7) {
      return null != e7 && true === e7._isBuffer && e7 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e7, t4) {
      if (isInstance(e7, Uint8Array) && (e7 = Buffer$1.from(e7, e7.offset, e7.byteLength)), isInstance(t4, Uint8Array) && (t4 = Buffer$1.from(t4, t4.offset, t4.byteLength)), !Buffer$1.isBuffer(e7) || !Buffer$1.isBuffer(t4))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e7 === t4)
        return 0;
      let r3 = e7.length, n4 = t4.length;
      for (let o5 = 0, s3 = Math.min(r3, n4); o5 < s3; ++o5)
        if (e7[o5] !== t4[o5]) {
          r3 = e7[o5], n4 = t4[o5];
          break;
        }
      return r3 < n4 ? -1 : n4 < r3 ? 1 : 0;
    }, Buffer$1.isEncoding = function(e7) {
      switch (String(e7).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Buffer$1.concat = function(e7, t4) {
      if (!Array.isArray(e7))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e7.length)
        return Buffer$1.alloc(0);
      let r3;
      if (void 0 === t4)
        for (t4 = 0, r3 = 0; r3 < e7.length; ++r3)
          t4 += e7[r3].length;
      const n4 = Buffer$1.allocUnsafe(t4);
      let o5 = 0;
      for (r3 = 0; r3 < e7.length; ++r3) {
        let t5 = e7[r3];
        if (isInstance(t5, Uint8Array))
          o5 + t5.length > n4.length ? (Buffer$1.isBuffer(t5) || (t5 = Buffer$1.from(t5.buffer, t5.byteOffset, t5.byteLength)), t5.copy(n4, o5)) : Uint8Array.prototype.set.call(n4, t5, o5);
        else {
          if (!Buffer$1.isBuffer(t5))
            throw new TypeError('"list" argument must be an Array of Buffers');
          t5.copy(n4, o5);
        }
        o5 += t5.length;
      }
      return n4;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e7 = this.length;
      if (e7 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t4 = 0; t4 < e7; t4 += 2)
        swap(this, t4, t4 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e7 = this.length;
      if (e7 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t4 = 0; t4 < e7; t4 += 4)
        swap(this, t4, t4 + 3), swap(this, t4 + 1, t4 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e7 = this.length;
      if (e7 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t4 = 0; t4 < e7; t4 += 8)
        swap(this, t4, t4 + 7), swap(this, t4 + 1, t4 + 6), swap(this, t4 + 2, t4 + 5), swap(this, t4 + 3, t4 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const e7 = this.length;
      return 0 === e7 ? "" : 0 === arguments.length ? utf8Slice(this, 0, e7) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(e7) {
      if (!Buffer$1.isBuffer(e7))
        throw new TypeError("Argument must be a Buffer");
      return this === e7 || 0 === Buffer$1.compare(this, e7);
    }, Buffer$1.prototype.inspect = function() {
      let e7 = "";
      return e7 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e7 += " ... "), "<Buffer " + e7 + ">";
    }, s2 && (Buffer$1.prototype[s2] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e7, t4, r3, n4, o5) {
      if (isInstance(e7, Uint8Array) && (e7 = Buffer$1.from(e7, e7.offset, e7.byteLength)), !Buffer$1.isBuffer(e7))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e7);
      if (void 0 === t4 && (t4 = 0), void 0 === r3 && (r3 = e7 ? e7.length : 0), void 0 === n4 && (n4 = 0), void 0 === o5 && (o5 = this.length), t4 < 0 || r3 > e7.length || n4 < 0 || o5 > this.length)
        throw new RangeError("out of range index");
      if (n4 >= o5 && t4 >= r3)
        return 0;
      if (n4 >= o5)
        return -1;
      if (t4 >= r3)
        return 1;
      if (this === e7)
        return 0;
      let s3 = (o5 >>>= 0) - (n4 >>>= 0), i4 = (r3 >>>= 0) - (t4 >>>= 0);
      const a4 = Math.min(s3, i4), c2 = this.slice(n4, o5), u3 = e7.slice(t4, r3);
      for (let e8 = 0; e8 < a4; ++e8)
        if (c2[e8] !== u3[e8]) {
          s3 = c2[e8], i4 = u3[e8];
          break;
        }
      return s3 < i4 ? -1 : i4 < s3 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e7, t4, r3) {
      return -1 !== this.indexOf(e7, t4, r3);
    }, Buffer$1.prototype.indexOf = function(e7, t4, r3) {
      return bidirectionalIndexOf(this, e7, t4, r3, true);
    }, Buffer$1.prototype.lastIndexOf = function(e7, t4, r3) {
      return bidirectionalIndexOf(this, e7, t4, r3, false);
    }, Buffer$1.prototype.write = function(e7, t4, r3, n4) {
      if (void 0 === t4)
        n4 = "utf8", r3 = this.length, t4 = 0;
      else if (void 0 === r3 && "string" == typeof t4)
        n4 = t4, r3 = this.length, t4 = 0;
      else {
        if (!Number.isFinite(t4))
          throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t4 >>>= 0, Number.isFinite(r3) ? (r3 >>>= 0, void 0 === n4 && (n4 = "utf8")) : (n4 = r3, r3 = void 0);
      }
      const o5 = this.length - t4;
      if ((void 0 === r3 || r3 > o5) && (r3 = o5), e7.length > 0 && (r3 < 0 || t4 < 0) || t4 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n4 || (n4 = "utf8");
      let s3 = false;
      for (; ; )
        switch (n4) {
          case "hex":
            return hexWrite(this, e7, t4, r3);
          case "utf8":
          case "utf-8":
            return utf8Write(this, e7, t4, r3);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, e7, t4, r3);
          case "base64":
            return base64Write(this, e7, t4, r3);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, e7, t4, r3);
          default:
            if (s3)
              throw new TypeError("Unknown encoding: " + n4);
            n4 = ("" + n4).toLowerCase(), s3 = true;
        }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    a3 = 4096;
    Buffer$1.prototype.slice = function(e7, t4) {
      const r3 = this.length;
      (e7 = Math.trunc(e7)) < 0 ? (e7 += r3) < 0 && (e7 = 0) : e7 > r3 && (e7 = r3), (t4 = void 0 === t4 ? r3 : Math.trunc(t4)) < 0 ? (t4 += r3) < 0 && (t4 = 0) : t4 > r3 && (t4 = r3), t4 < e7 && (t4 = e7);
      const n4 = this.subarray(e7, t4);
      return Object.setPrototypeOf(n4, Buffer$1.prototype), n4;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e7, t4, r3) {
      e7 >>>= 0, t4 >>>= 0, r3 || checkOffset(e7, t4, this.length);
      let n4 = this[e7], o5 = 1, s3 = 0;
      for (; ++s3 < t4 && (o5 *= 256); )
        n4 += this[e7 + s3] * o5;
      return n4;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e7, t4, r3) {
      e7 >>>= 0, t4 >>>= 0, r3 || checkOffset(e7, t4, this.length);
      let n4 = this[e7 + --t4], o5 = 1;
      for (; t4 > 0 && (o5 *= 256); )
        n4 += this[e7 + --t4] * o5;
      return n4;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 1, this.length), this[e7];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 2, this.length), this[e7] | this[e7 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 2, this.length), this[e7] << 8 | this[e7 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), (this[e7] | this[e7 + 1] << 8 | this[e7 + 2] << 16) + 16777216 * this[e7 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), 16777216 * this[e7] + (this[e7 + 1] << 16 | this[e7 + 2] << 8 | this[e7 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e7) {
      validateNumber(e7 >>>= 0, "offset");
      const t4 = this[e7], r3 = this[e7 + 7];
      void 0 !== t4 && void 0 !== r3 || boundsError(e7, this.length - 8);
      const n4 = t4 + 256 * this[++e7] + 65536 * this[++e7] + this[++e7] * 2 ** 24, o5 = this[++e7] + 256 * this[++e7] + 65536 * this[++e7] + r3 * 2 ** 24;
      return BigInt(n4) + (BigInt(o5) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e7) {
      validateNumber(e7 >>>= 0, "offset");
      const t4 = this[e7], r3 = this[e7 + 7];
      void 0 !== t4 && void 0 !== r3 || boundsError(e7, this.length - 8);
      const n4 = t4 * 2 ** 24 + 65536 * this[++e7] + 256 * this[++e7] + this[++e7], o5 = this[++e7] * 2 ** 24 + 65536 * this[++e7] + 256 * this[++e7] + r3;
      return (BigInt(n4) << BigInt(32)) + BigInt(o5);
    }), Buffer$1.prototype.readIntLE = function(e7, t4, r3) {
      e7 >>>= 0, t4 >>>= 0, r3 || checkOffset(e7, t4, this.length);
      let n4 = this[e7], o5 = 1, s3 = 0;
      for (; ++s3 < t4 && (o5 *= 256); )
        n4 += this[e7 + s3] * o5;
      return o5 *= 128, n4 >= o5 && (n4 -= Math.pow(2, 8 * t4)), n4;
    }, Buffer$1.prototype.readIntBE = function(e7, t4, r3) {
      e7 >>>= 0, t4 >>>= 0, r3 || checkOffset(e7, t4, this.length);
      let n4 = t4, o5 = 1, s3 = this[e7 + --n4];
      for (; n4 > 0 && (o5 *= 256); )
        s3 += this[e7 + --n4] * o5;
      return o5 *= 128, s3 >= o5 && (s3 -= Math.pow(2, 8 * t4)), s3;
    }, Buffer$1.prototype.readInt8 = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 1, this.length), 128 & this[e7] ? -1 * (255 - this[e7] + 1) : this[e7];
    }, Buffer$1.prototype.readInt16LE = function(e7, t4) {
      e7 >>>= 0, t4 || checkOffset(e7, 2, this.length);
      const r3 = this[e7] | this[e7 + 1] << 8;
      return 32768 & r3 ? 4294901760 | r3 : r3;
    }, Buffer$1.prototype.readInt16BE = function(e7, t4) {
      e7 >>>= 0, t4 || checkOffset(e7, 2, this.length);
      const r3 = this[e7 + 1] | this[e7] << 8;
      return 32768 & r3 ? 4294901760 | r3 : r3;
    }, Buffer$1.prototype.readInt32LE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), this[e7] | this[e7 + 1] << 8 | this[e7 + 2] << 16 | this[e7 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), this[e7] << 24 | this[e7 + 1] << 16 | this[e7 + 2] << 8 | this[e7 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e7) {
      validateNumber(e7 >>>= 0, "offset");
      const t4 = this[e7], r3 = this[e7 + 7];
      void 0 !== t4 && void 0 !== r3 || boundsError(e7, this.length - 8);
      const n4 = this[e7 + 4] + 256 * this[e7 + 5] + 65536 * this[e7 + 6] + (r3 << 24);
      return (BigInt(n4) << BigInt(32)) + BigInt(t4 + 256 * this[++e7] + 65536 * this[++e7] + this[++e7] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e7) {
      validateNumber(e7 >>>= 0, "offset");
      const t4 = this[e7], r3 = this[e7 + 7];
      void 0 !== t4 && void 0 !== r3 || boundsError(e7, this.length - 8);
      const n4 = (t4 << 24) + 65536 * this[++e7] + 256 * this[++e7] + this[++e7];
      return (BigInt(n4) << BigInt(32)) + BigInt(this[++e7] * 2 ** 24 + 65536 * this[++e7] + 256 * this[++e7] + r3);
    }), Buffer$1.prototype.readFloatLE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), read(this, e7, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 4, this.length), read(this, e7, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 8, this.length), read(this, e7, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e7, t4) {
      return e7 >>>= 0, t4 || checkOffset(e7, 8, this.length), read(this, e7, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e7, t4, r3, n4) {
      if (e7 = +e7, t4 >>>= 0, r3 >>>= 0, !n4) {
        checkInt(this, e7, t4, r3, Math.pow(2, 8 * r3) - 1, 0);
      }
      let o5 = 1, s3 = 0;
      for (this[t4] = 255 & e7; ++s3 < r3 && (o5 *= 256); )
        this[t4 + s3] = e7 / o5 & 255;
      return t4 + r3;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e7, t4, r3, n4) {
      if (e7 = +e7, t4 >>>= 0, r3 >>>= 0, !n4) {
        checkInt(this, e7, t4, r3, Math.pow(2, 8 * r3) - 1, 0);
      }
      let o5 = r3 - 1, s3 = 1;
      for (this[t4 + o5] = 255 & e7; --o5 >= 0 && (s3 *= 256); )
        this[t4 + o5] = e7 / s3 & 255;
      return t4 + r3;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 1, 255, 0), this[t4] = 255 & e7, t4 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 2, 65535, 0), this[t4] = 255 & e7, this[t4 + 1] = e7 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 2, 65535, 0), this[t4] = e7 >>> 8, this[t4 + 1] = 255 & e7, t4 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 4, 4294967295, 0), this[t4 + 3] = e7 >>> 24, this[t4 + 2] = e7 >>> 16, this[t4 + 1] = e7 >>> 8, this[t4] = 255 & e7, t4 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 4, 4294967295, 0), this[t4] = e7 >>> 24, this[t4 + 1] = e7 >>> 16, this[t4 + 2] = e7 >>> 8, this[t4 + 3] = 255 & e7, t4 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e7, t4 = 0) {
      return wrtBigUInt64LE(this, e7, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e7, t4 = 0) {
      return wrtBigUInt64BE(this, e7, t4, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e7, t4, r3, n4) {
      if (e7 = +e7, t4 >>>= 0, !n4) {
        const n5 = Math.pow(2, 8 * r3 - 1);
        checkInt(this, e7, t4, r3, n5 - 1, -n5);
      }
      let o5 = 0, s3 = 1, i4 = 0;
      for (this[t4] = 255 & e7; ++o5 < r3 && (s3 *= 256); )
        e7 < 0 && 0 === i4 && 0 !== this[t4 + o5 - 1] && (i4 = 1), this[t4 + o5] = Math.trunc(e7 / s3) - i4 & 255;
      return t4 + r3;
    }, Buffer$1.prototype.writeIntBE = function(e7, t4, r3, n4) {
      if (e7 = +e7, t4 >>>= 0, !n4) {
        const n5 = Math.pow(2, 8 * r3 - 1);
        checkInt(this, e7, t4, r3, n5 - 1, -n5);
      }
      let o5 = r3 - 1, s3 = 1, i4 = 0;
      for (this[t4 + o5] = 255 & e7; --o5 >= 0 && (s3 *= 256); )
        e7 < 0 && 0 === i4 && 0 !== this[t4 + o5 + 1] && (i4 = 1), this[t4 + o5] = Math.trunc(e7 / s3) - i4 & 255;
      return t4 + r3;
    }, Buffer$1.prototype.writeInt8 = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 1, 127, -128), e7 < 0 && (e7 = 255 + e7 + 1), this[t4] = 255 & e7, t4 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 2, 32767, -32768), this[t4] = 255 & e7, this[t4 + 1] = e7 >>> 8, t4 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 2, 32767, -32768), this[t4] = e7 >>> 8, this[t4 + 1] = 255 & e7, t4 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e7, this[t4 + 1] = e7 >>> 8, this[t4 + 2] = e7 >>> 16, this[t4 + 3] = e7 >>> 24, t4 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e7, t4, r3) {
      return e7 = +e7, t4 >>>= 0, r3 || checkInt(this, e7, t4, 4, 2147483647, -2147483648), e7 < 0 && (e7 = 4294967295 + e7 + 1), this[t4] = e7 >>> 24, this[t4 + 1] = e7 >>> 16, this[t4 + 2] = e7 >>> 8, this[t4 + 3] = 255 & e7, t4 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e7, t4 = 0) {
      return wrtBigUInt64LE(this, e7, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e7, t4 = 0) {
      return wrtBigUInt64BE(this, e7, t4, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e7, t4, r3) {
      return writeFloat(this, e7, t4, true, r3);
    }, Buffer$1.prototype.writeFloatBE = function(e7, t4, r3) {
      return writeFloat(this, e7, t4, false, r3);
    }, Buffer$1.prototype.writeDoubleLE = function(e7, t4, r3) {
      return writeDouble(this, e7, t4, true, r3);
    }, Buffer$1.prototype.writeDoubleBE = function(e7, t4, r3) {
      return writeDouble(this, e7, t4, false, r3);
    }, Buffer$1.prototype.copy = function(e7, t4, r3, n4) {
      if (!Buffer$1.isBuffer(e7))
        throw new TypeError("argument should be a Buffer");
      if (r3 || (r3 = 0), n4 || 0 === n4 || (n4 = this.length), t4 >= e7.length && (t4 = e7.length), t4 || (t4 = 0), n4 > 0 && n4 < r3 && (n4 = r3), n4 === r3)
        return 0;
      if (0 === e7.length || 0 === this.length)
        return 0;
      if (t4 < 0)
        throw new RangeError("targetStart out of bounds");
      if (r3 < 0 || r3 >= this.length)
        throw new RangeError("Index out of range");
      if (n4 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n4 > this.length && (n4 = this.length), e7.length - t4 < n4 - r3 && (n4 = e7.length - t4 + r3);
      const o5 = n4 - r3;
      return this === e7 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t4, r3, n4) : Uint8Array.prototype.set.call(e7, this.subarray(r3, n4), t4), o5;
    }, Buffer$1.prototype.fill = function(e7, t4, r3, n4) {
      if ("string" == typeof e7) {
        if ("string" == typeof t4 ? (n4 = t4, t4 = 0, r3 = this.length) : "string" == typeof r3 && (n4 = r3, r3 = this.length), void 0 !== n4 && "string" != typeof n4)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n4 && !Buffer$1.isEncoding(n4))
          throw new TypeError("Unknown encoding: " + n4);
        if (1 === e7.length) {
          const t5 = e7.charCodeAt(0);
          ("utf8" === n4 && t5 < 128 || "latin1" === n4) && (e7 = t5);
        }
      } else
        "number" == typeof e7 ? e7 &= 255 : "boolean" == typeof e7 && (e7 = Number(e7));
      if (t4 < 0 || this.length < t4 || this.length < r3)
        throw new RangeError("Out of range index");
      if (r3 <= t4)
        return this;
      let o5;
      if (t4 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, e7 || (e7 = 0), "number" == typeof e7)
        for (o5 = t4; o5 < r3; ++o5)
          this[o5] = e7;
      else {
        const s3 = Buffer$1.isBuffer(e7) ? e7 : Buffer$1.from(e7, n4), i4 = s3.length;
        if (0 === i4)
          throw new TypeError('The value "' + e7 + '" is invalid for argument "value"');
        for (o5 = 0; o5 < r3 - t4; ++o5)
          this[o5 + t4] = s3[o5 % i4];
      }
      return this;
    };
    c = {};
    E3("ERR_BUFFER_OUT_OF_BOUNDS", function(e7) {
      return e7 ? `${e7} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E3("ERR_INVALID_ARG_TYPE", function(e7, t4) {
      return `The "${e7}" argument must be of type number. Received type ${typeof t4}`;
    }, TypeError), E3("ERR_OUT_OF_RANGE", function(e7, t4, r3) {
      let n4 = `The value of "${e7}" is out of range.`, o5 = r3;
      return Number.isInteger(r3) && Math.abs(r3) > 2 ** 32 ? o5 = addNumericalSeparator(String(r3)) : "bigint" == typeof r3 && (o5 = String(r3), (r3 > BigInt(2) ** BigInt(32) || r3 < -(BigInt(2) ** BigInt(32))) && (o5 = addNumericalSeparator(o5)), o5 += "n"), n4 += ` It must be ${t4}. Received ${o5}`, n4;
    }, RangeError);
    u2 = /[^\w+/-]/g;
    l3 = function() {
      const e7 = "0123456789abcdef", t4 = Array.from({ length: 256 });
      for (let r3 = 0; r3 < 16; ++r3) {
        const n4 = 16 * r3;
        for (let o5 = 0; o5 < 16; ++o5)
          t4[n4 + o5] = e7[r3] + e7[o5];
      }
      return t4;
    }();
    f = globalThis.Buffer || Buffer$1;
    notImplemented("buffer.resolveObjectURL"), notImplemented("buffer.transcode"), notImplemented("buffer.isUtf8"), notImplemented("buffer.isAscii");
    h3 = {};
    !function() {
      try {
        p = "function" == typeof setTimeout ? setTimeout : defaultSetTimeout;
      } catch {
        p = defaultSetTimeout;
      }
      try {
        d2 = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch {
        d2 = defaultClearTimeout;
      }
    }();
    g = [];
    y2 = false;
    w3 = -1;
    h3.nextTick = function(e7) {
      const t4 = Array.from({ length: arguments.length - 1 });
      if (arguments.length > 1)
        for (let e8 = 1; e8 < arguments.length; e8++)
          t4[e8 - 1] = arguments[e8];
      g.push(new Item(e7, t4)), 1 !== g.length || y2 || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, h3.title = "unenv";
    b2 = /* @__PURE__ */ Object.create(null);
    v3 = globalThis.process?.env;
    _getEnv = (e7) => v3 || globalThis.__env__ || (e7 ? b2 : globalThis);
    h3.env = new Proxy(b2, { get: (e7, t4) => _getEnv()[t4] ?? b2[t4], has: (e7, t4) => t4 in _getEnv() || t4 in b2, set: (e7, t4, r3) => (_getEnv(true)[t4] = r3, true), deleteProperty(e7, t4) {
      delete _getEnv(true)[t4];
    }, ownKeys() {
      const e7 = _getEnv();
      return Object.keys(e7);
    } }), h3.argv = [], h3.version = "", h3.versions = {}, h3.on = noop$1, h3.addListener = noop$1, h3.once = noop$1, h3.off = noop$1, h3.removeListener = noop$1, h3.removeAllListeners = noop$1, h3.emit = noop$1, h3.prependListener = noop$1, h3.prependOnceListener = noop$1, h3.listeners = function(e7) {
      return [];
    }, h3.binding = function(e7) {
      throw new Error("[unenv] process.binding is not supported");
    };
    x2 = "/";
    h3.cwd = function() {
      return x2;
    }, h3.chdir = function(e7) {
      x2 = e7;
    }, h3.umask = function() {
      return 0;
    };
    _3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
    _3.process = _3.process || h3;
    B = _3.process;
    R2 = /#/g;
    I2 = /&/g;
    k2 = /\//g;
    A3 = /=/g;
    T2 = /\+/g;
    C2 = /%5e/gi;
    S2 = /%60/gi;
    $2 = /%7c/gi;
    j2 = /%20/gi;
    O3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    N3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    L2 = /^([/\\]\s*){2,}[^/\\]/;
    M2 = /^\.?\//;
    U2 = Symbol.for("ufo:protocolRelative");
    P2 = {};
    H2 = { exports: {} };
    Mime$1.prototype.define = function(e7, t4) {
      for (let r3 in e7) {
        let n4 = e7[r3].map(function(e8) {
          return e8.toLowerCase();
        });
        r3 = r3.toLowerCase();
        for (let e8 = 0; e8 < n4.length; e8++) {
          const o5 = n4[e8];
          if ("*" !== o5[0]) {
            if (!t4 && o5 in this._types)
              throw new Error('Attempt to change mapping for "' + o5 + '" extension from "' + this._types[o5] + '" to "' + r3 + '". Pass `force=true` to allow this, otherwise remove "' + o5 + '" from the list of extensions for "' + r3 + '".');
            this._types[o5] = r3;
          }
        }
        if (t4 || !this._extensions[r3]) {
          const e8 = n4[0];
          this._extensions[r3] = "*" !== e8[0] ? e8 : e8.substr(1);
        }
      }
    }, Mime$1.prototype.getType = function(e7) {
      let t4 = (e7 = String(e7)).replace(/^.*[/\\]/, "").toLowerCase(), r3 = t4.replace(/^.*\./, "").toLowerCase(), n4 = t4.length < e7.length;
      return (r3.length < t4.length - 1 || !n4) && this._types[r3] || null;
    }, Mime$1.prototype.getExtension = function(e7) {
      return (e7 = /^\s*([^;\s]*)/.test(e7) && RegExp.$1) && this._extensions[e7.toLowerCase()] || null;
    };
    W3 = new Mime$1({ "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] });
    z2 = H2.exports;
    Object.defineProperty(z2, "__esModule", { value: true });
    F2 = { ...((q3 = W3) && q3.__esModule ? q3 : { default: q3 }).default };
    F2.lookup = F2.getType, F2.extension = F2.getExtension;
    noop = () => {
    };
    F2.define = noop, F2.load = noop, F2.default_type = "application/octet-stream", F2.charsets = { lookup: () => "UTF-8" }, H2.exports = F2;
    D2 = H2.exports;
    K2 = {};
    Object.defineProperty(K2, "__esModule", { value: true }), K2.InternalError = K2.NotFoundError = K2.MethodNotAllowedError = K2.KVError = void 0;
    KVError = class extends Error {
      constructor(e7, t4 = 500) {
        super(e7), Object.setPrototypeOf(this, new.target.prototype), this.name = KVError.name, this.status = t4;
      }
    };
    K2.KVError = KVError;
    K2.MethodNotAllowedError = class extends KVError {
      constructor(e7 = "Not a valid request method", t4 = 405) {
        super(e7, t4);
      }
    };
    K2.NotFoundError = class extends KVError {
      constructor(e7 = "Not Found", t4 = 404) {
        super(e7, t4);
      }
    };
    K2.InternalError = class extends KVError {
      constructor(e7 = "Internal Error in KV Asset Handler", t4 = 500) {
        super(e7, t4);
      }
    }, function(e7) {
      Object.defineProperty(e7, "__esModule", { value: true }), e7.InternalError = e7.NotFoundError = e7.MethodNotAllowedError = e7.serveSinglePageApp = e7.mapRequestToAsset = e7.getAssetFromKV = void 0;
      const t4 = D2, r3 = K2;
      Object.defineProperty(e7, "InternalError", { enumerable: true, get: function() {
        return r3.InternalError;
      } }), Object.defineProperty(e7, "MethodNotAllowedError", { enumerable: true, get: function() {
        return r3.MethodNotAllowedError;
      } }), Object.defineProperty(e7, "NotFoundError", { enumerable: true, get: function() {
        return r3.NotFoundError;
      } });
      const n4 = { browserTTL: null, edgeTTL: 172800, bypassCache: false }, parseStringAsObject = (e8) => "string" == typeof e8 ? JSON.parse(e8) : e8, o5 = { ASSET_NAMESPACE: "undefined" != typeof __STATIC_CONTENT ? __STATIC_CONTENT : void 0, ASSET_MANIFEST: "undefined" != typeof __STATIC_CONTENT_MANIFEST ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : {}, cacheControl: n4, defaultMimeType: "text/plain", defaultDocument: "index.html", pathIsEncoded: false, defaultETag: "strong" };
      function assignOptions(e8) {
        return Object.assign({}, o5, e8);
      }
      const mapRequestToAsset = (e8, r4) => {
        r4 = assignOptions(r4);
        const n5 = new URL(e8.url);
        let o6 = n5.pathname;
        return o6.endsWith("/") ? o6 = o6.concat(r4.defaultDocument) : t4.getType(o6) || (o6 = o6.concat("/" + r4.defaultDocument)), n5.pathname = o6, new Request(n5.toString(), e8);
      };
      e7.mapRequestToAsset = mapRequestToAsset, e7.serveSinglePageApp = function(e8, t5) {
        t5 = assignOptions(t5), e8 = mapRequestToAsset(e8, t5);
        const r4 = new URL(e8.url);
        return r4.pathname.endsWith(".html") ? new Request(`${r4.origin}/${t5.defaultDocument}`, e8) : e8;
      };
      e7.getAssetFromKV = async (e8, o6) => {
        o6 = assignOptions(o6);
        const s3 = e8.request, i4 = o6.ASSET_NAMESPACE, a4 = parseStringAsObject(o6.ASSET_MANIFEST);
        if (void 0 === i4)
          throw new r3.InternalError("there is no KV namespace bound to the script");
        const c2 = new URL(s3.url).pathname.replace(/^\/+/, "");
        let u3, l4 = o6.pathIsEncoded;
        if (o6.mapRequestToAsset)
          u3 = o6.mapRequestToAsset(s3);
        else if (a4[c2])
          u3 = s3;
        else if (a4[decodeURIComponent(c2)])
          l4 = true, u3 = s3;
        else {
          const e9 = mapRequestToAsset(s3), t5 = new URL(e9.url).pathname.replace(/^\/+/, "");
          a4[decodeURIComponent(t5)] ? (l4 = true, u3 = e9) : u3 = mapRequestToAsset(s3, o6);
        }
        if (!["GET", "HEAD"].includes(u3.method))
          throw new r3.MethodNotAllowedError(`${u3.method} is not a valid request method`);
        const f2 = new URL(u3.url);
        let h4 = (l4 ? decodeURIComponent(f2.pathname) : f2.pathname).replace(/^\/+/, "");
        const p2 = caches.default;
        let d3 = t4.getType(h4) || o6.defaultMimeType;
        (d3.startsWith("text") || "application/javascript" === d3) && (d3 += "; charset=utf-8");
        let m3 = false;
        void 0 !== a4 && a4[h4] && (h4 = a4[h4], m3 = true);
        let g2 = new Request(`${f2.origin}/${h4}`, s3);
        const y3 = (() => {
          switch (typeof o6.cacheControl) {
            case "function":
              return o6.cacheControl(s3);
            case "object":
              return o6.cacheControl;
            default:
              return n4;
          }
        })(), formatETag = (e9 = h4, t5 = o6.defaultETag) => {
          if (!e9)
            return "";
          switch (t5) {
            case "weak":
              return e9.startsWith("W/") ? e9 : e9.startsWith('"') && e9.endsWith('"') ? `W/${e9}` : `W/"${e9}"`;
            case "strong":
              return e9.startsWith('W/"') && (e9 = e9.replace("W/", "")), e9.endsWith('"') || (e9 = `"${e9}"`), e9;
            default:
              return "";
          }
        };
        o6.cacheControl = Object.assign({}, n4, y3), (o6.cacheControl.bypassCache || null === o6.cacheControl.edgeTTL || "HEAD" == s3.method) && (m3 = false);
        const w4 = "number" == typeof o6.cacheControl.browserTTL;
        let b3 = null;
        if (m3 && (b3 = await p2.match(g2)), b3)
          if (b3.status > 300 && b3.status < 400)
            b3.body && "cancel" in Object.getPrototypeOf(b3.body) && b3.body.cancel(), b3 = new Response(null, b3);
          else {
            let e9 = { headers: new Headers(b3.headers), status: 0, statusText: "" };
            e9.headers.set("cf-cache-status", "HIT"), b3.status ? (e9.status = b3.status, e9.statusText = b3.statusText) : e9.headers.has("Content-Range") ? (e9.status = 206, e9.statusText = "Partial Content") : (e9.status = 200, e9.statusText = "OK"), b3 = new Response(b3.body, e9);
          }
        else {
          const t5 = await i4.get(h4, "arrayBuffer");
          if (null === t5)
            throw new r3.NotFoundError(`could not find ${h4} in your content namespace`);
          b3 = new Response(t5), m3 && (b3.headers.set("Accept-Ranges", "bytes"), b3.headers.set("Content-Length", String(t5.byteLength)), b3.headers.has("etag") || b3.headers.set("etag", formatETag(h4)), b3.headers.set("Cache-Control", `max-age=${o6.cacheControl.edgeTTL}`), e8.waitUntil(p2.put(g2, b3.clone())), b3.headers.set("CF-Cache-Status", "MISS"));
        }
        if (b3.headers.set("Content-Type", d3), 304 === b3.status) {
          let e9 = formatETag(b3.headers.get("etag")), t5 = g2.headers.get("if-none-match"), r4 = b3.headers.get("CF-Cache-Status");
          e9 && (t5 && t5 === e9 && "MISS" === r4 ? b3.headers.set("CF-Cache-Status", "EXPIRED") : b3.headers.set("CF-Cache-Status", "REVALIDATED"), b3.headers.set("etag", formatETag(e9, "weak")));
        }
        return w4 ? b3.headers.set("Cache-Control", `max-age=${o6.cacheControl.browserTTL}`) : b3.headers.delete("Cache-Control"), b3;
      };
    }(P2);
    V2 = Object.freeze({ ignoreUnknown: false, respectType: false, respectFunctionNames: false, respectFunctionProperties: false, unorderedObjects: true, unorderedArrays: false, unorderedSets: false, excludeKeys: void 0, excludeValues: void 0, replacer: void 0 });
    Q2 = Object.freeze(["prototype", "__proto__", "constructor"]);
    J2 = "[native code] }";
    G2 = J2.length;
    WordArray = class {
      constructor(e7, t4) {
        e7 = this.words = e7 || [], this.sigBytes = void 0 === t4 ? 4 * e7.length : t4;
      }
      toString(e7) {
        return (e7 || Y2).stringify(this);
      }
      concat(e7) {
        if (this.clamp(), this.sigBytes % 4)
          for (let t4 = 0; t4 < e7.sigBytes; t4++) {
            const r3 = e7.words[t4 >>> 2] >>> 24 - t4 % 4 * 8 & 255;
            this.words[this.sigBytes + t4 >>> 2] |= r3 << 24 - (this.sigBytes + t4) % 4 * 8;
          }
        else
          for (let t4 = 0; t4 < e7.sigBytes; t4 += 4)
            this.words[this.sigBytes + t4 >>> 2] = e7.words[t4 >>> 2];
        return this.sigBytes += e7.sigBytes, this;
      }
      clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4);
      }
      clone() {
        return new WordArray([...this.words]);
      }
    };
    Y2 = { stringify(e7) {
      const t4 = [];
      for (let r3 = 0; r3 < e7.sigBytes; r3++) {
        const n4 = e7.words[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
        t4.push((n4 >>> 4).toString(16), (15 & n4).toString(16));
      }
      return t4.join("");
    } };
    X3 = { stringify(e7) {
      const t4 = [];
      for (let r3 = 0; r3 < e7.sigBytes; r3 += 3) {
        const n4 = (e7.words[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255) << 16 | (e7.words[r3 + 1 >>> 2] >>> 24 - (r3 + 1) % 4 * 8 & 255) << 8 | e7.words[r3 + 2 >>> 2] >>> 24 - (r3 + 2) % 4 * 8 & 255;
        for (let o5 = 0; o5 < 4 && 8 * r3 + 6 * o5 < 8 * e7.sigBytes; o5++)
          t4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n4 >>> 6 * (3 - o5) & 63));
      }
      return t4.join("");
    } };
    Z3 = { parse(e7) {
      const t4 = e7.length, r3 = [];
      for (let n4 = 0; n4 < t4; n4++)
        r3[n4 >>> 2] |= (255 & e7.charCodeAt(n4)) << 24 - n4 % 4 * 8;
      return new WordArray(r3, t4);
    } };
    ee2 = { parse: (e7) => Z3.parse(unescape(encodeURIComponent(e7))) };
    BufferedBlockAlgorithm = class {
      constructor() {
        this._data = new WordArray(), this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 16;
      }
      reset() {
        this._data = new WordArray(), this._nDataBytes = 0;
      }
      _append(e7) {
        "string" == typeof e7 && (e7 = ee2.parse(e7)), this._data.concat(e7), this._nDataBytes += e7.sigBytes;
      }
      _doProcessBlock(e7, t4) {
      }
      _process(e7) {
        let t4, r3 = this._data.sigBytes / (4 * this.blockSize);
        r3 = e7 ? Math.ceil(r3) : Math.max((0 | r3) - this._minBufferSize, 0);
        const n4 = r3 * this.blockSize, o5 = Math.min(4 * n4, this._data.sigBytes);
        if (n4) {
          for (let e8 = 0; e8 < n4; e8 += this.blockSize)
            this._doProcessBlock(this._data.words, e8);
          t4 = this._data.words.splice(0, n4), this._data.sigBytes -= o5;
        }
        return new WordArray(t4, o5);
      }
    };
    Hasher = class extends BufferedBlockAlgorithm {
      update(e7) {
        return this._append(e7), this._process(), this;
      }
      finalize(e7) {
        e7 && this._append(e7);
      }
    };
    te2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    re2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    ne2 = [];
    SHA256 = class extends Hasher {
      constructor() {
        super(...arguments), this._hash = new WordArray([...te2]);
      }
      reset() {
        super.reset(), this._hash = new WordArray([...te2]);
      }
      _doProcessBlock(e7, t4) {
        const r3 = this._hash.words;
        let n4 = r3[0], o5 = r3[1], s3 = r3[2], i4 = r3[3], a4 = r3[4], c2 = r3[5], u3 = r3[6], l4 = r3[7];
        for (let r4 = 0; r4 < 64; r4++) {
          if (r4 < 16)
            ne2[r4] = 0 | e7[t4 + r4];
          else {
            const e8 = ne2[r4 - 15], t5 = (e8 << 25 | e8 >>> 7) ^ (e8 << 14 | e8 >>> 18) ^ e8 >>> 3, n5 = ne2[r4 - 2], o6 = (n5 << 15 | n5 >>> 17) ^ (n5 << 13 | n5 >>> 19) ^ n5 >>> 10;
            ne2[r4] = t5 + ne2[r4 - 7] + o6 + ne2[r4 - 16];
          }
          const f2 = n4 & o5 ^ n4 & s3 ^ o5 & s3, h4 = (n4 << 30 | n4 >>> 2) ^ (n4 << 19 | n4 >>> 13) ^ (n4 << 10 | n4 >>> 22), p2 = l4 + ((a4 << 26 | a4 >>> 6) ^ (a4 << 21 | a4 >>> 11) ^ (a4 << 7 | a4 >>> 25)) + (a4 & c2 ^ ~a4 & u3) + re2[r4] + ne2[r4];
          l4 = u3, u3 = c2, c2 = a4, a4 = i4 + p2 | 0, i4 = s3, s3 = o5, o5 = n4, n4 = p2 + (h4 + f2) | 0;
        }
        r3[0] = r3[0] + n4 | 0, r3[1] = r3[1] + o5 | 0, r3[2] = r3[2] + s3 | 0, r3[3] = r3[3] + i4 | 0, r3[4] = r3[4] + a4 | 0, r3[5] = r3[5] + c2 | 0, r3[6] = r3[6] + u3 | 0, r3[7] = r3[7] + l4 | 0;
      }
      finalize(e7) {
        super.finalize(e7);
        const t4 = 8 * this._nDataBytes, r3 = 8 * this._data.sigBytes;
        return this._data.words[r3 >>> 5] |= 128 << 24 - r3 % 32, this._data.words[14 + (r3 + 64 >>> 9 << 4)] = Math.floor(t4 / 4294967296), this._data.words[15 + (r3 + 64 >>> 9 << 4)] = t4, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
    };
    oe2 = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
    se2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    ie2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    ae2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    ce2 = createDefu();
    ue2 = createDefu((e7, t4, r3) => {
      if (void 0 !== e7[t4] && "function" == typeof r3)
        return e7[t4] = r3(e7[t4]), true;
    });
    le2 = 10;
    fe2 = class {
      __unenv__ = true;
      _events = /* @__PURE__ */ Object.create(null);
      _maxListeners;
      static get defaultMaxListeners() {
        return le2;
      }
      static set defaultMaxListeners(e7) {
        if ("number" != typeof e7 || e7 < 0 || Number.isNaN(e7))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e7 + ".");
        le2 = e7;
      }
      setMaxListeners(e7) {
        if ("number" != typeof e7 || e7 < 0 || Number.isNaN(e7))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e7 + ".");
        return this._maxListeners = e7, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e7, ...t4) {
        if (!this._events[e7] || 0 === this._events[e7].length)
          return false;
        if ("error" === e7) {
          let e8;
          if (t4.length > 0 && (e8 = t4[0]), e8 instanceof Error)
            throw e8;
          const r3 = new Error("Unhandled error." + (e8 ? " (" + e8.message + ")" : ""));
          throw r3.context = e8, r3;
        }
        for (const r3 of this._events[e7])
          (r3.listener || r3).apply(this, t4);
        return true;
      }
      addListener(e7, t4) {
        return _addListener(this, e7, t4, false);
      }
      on(e7, t4) {
        return _addListener(this, e7, t4, false);
      }
      prependListener(e7, t4) {
        return _addListener(this, e7, t4, true);
      }
      once(e7, t4) {
        return this.on(e7, _wrapOnce(this, e7, t4));
      }
      prependOnceListener(e7, t4) {
        return this.prependListener(e7, _wrapOnce(this, e7, t4));
      }
      removeListener(e7, t4) {
        return function(e8, t5, r3) {
          if (_checkListener(r3), !e8._events[t5] || 0 === e8._events[t5].length)
            return e8;
          const n4 = e8._events[t5].length;
          if (e8._events[t5] = e8._events[t5].filter((e9) => e9 !== r3), n4 === e8._events[t5].length)
            return e8;
          e8._events.removeListener && e8.emit("removeListener", t5, r3.listener || r3);
          0 === e8._events[t5].length && delete e8._events[t5];
          return e8;
        }(this, e7, t4);
      }
      off(e7, t4) {
        return this.removeListener(e7, t4);
      }
      removeAllListeners(e7) {
        return function(e8, t4) {
          if (!e8._events[t4] || 0 === e8._events[t4].length)
            return e8;
          if (e8._events.removeListener)
            for (const r3 of e8._events[t4])
              e8.emit("removeListener", t4, r3.listener || r3);
          return delete e8._events[t4], e8;
        }(this, e7);
      }
      listeners(e7) {
        return _listeners(this, e7, true);
      }
      rawListeners(e7) {
        return _listeners(this, e7, false);
      }
      listenerCount(e7) {
        return this.rawListeners(e7).length;
      }
      eventNames() {
        return Object.keys(this._events);
      }
    };
    he2 = globalThis.EventEmitter || fe2;
    _Readable = class extends he2 {
      __unenv__ = true;
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e7, t4) {
        return new _Readable(t4);
      }
      constructor(e7) {
        super();
      }
      _read(e7) {
      }
      read(e7) {
      }
      setEncoding(e7) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e7) {
        return this;
      }
      unshift(e7, t4) {
      }
      wrap(e7) {
        return this;
      }
      push(e7, t4) {
        return false;
      }
      _destroy(e7, t4) {
        this.removeAllListeners();
      }
      destroy(e7) {
        return this.destroyed = true, this._destroy(e7), this;
      }
      pipe(e7, t4) {
        return {};
      }
      compose(e7, t4) {
        throw new Error("[unenv] Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw createNotImplementedError("Readable.asyncIterator");
      }
      iterator(e7) {
        throw createNotImplementedError("Readable.iterator");
      }
      map(e7, t4) {
        throw createNotImplementedError("Readable.map");
      }
      filter(e7, t4) {
        throw createNotImplementedError("Readable.filter");
      }
      forEach(e7, t4) {
        throw createNotImplementedError("Readable.forEach");
      }
      reduce(e7, t4, r3) {
        throw createNotImplementedError("Readable.reduce");
      }
      find(e7, t4) {
        throw createNotImplementedError("Readable.find");
      }
      findIndex(e7, t4) {
        throw createNotImplementedError("Readable.findIndex");
      }
      some(e7, t4) {
        throw createNotImplementedError("Readable.some");
      }
      toArray(e7) {
        throw createNotImplementedError("Readable.toArray");
      }
      every(e7, t4) {
        throw createNotImplementedError("Readable.every");
      }
      flatMap(e7, t4) {
        throw createNotImplementedError("Readable.flatMap");
      }
      drop(e7, t4) {
        throw createNotImplementedError("Readable.drop");
      }
      take(e7, t4) {
        throw createNotImplementedError("Readable.take");
      }
      asIndexedPairs(e7) {
        throw createNotImplementedError("Readable.asIndexedPairs");
      }
    };
    pe = globalThis.Readable || _Readable;
    de = globalThis.Writable || class extends he2 {
      __unenv__ = true;
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      destroyed = false;
      _data;
      _encoding = "utf-8";
      constructor(e7) {
        super();
      }
      pipe(e7, t4) {
        return {};
      }
      _write(e7, t4, r3) {
        if (this.writableEnded)
          r3 && r3();
        else {
          if (void 0 === this._data)
            this._data = e7;
          else {
            const r4 = "string" == typeof this._data ? f.from(this._data, this._encoding || t4 || "utf8") : this._data, n4 = "string" == typeof e7 ? f.from(e7, t4 || this._encoding || "utf8") : e7;
            this._data = f.concat([r4, n4]);
          }
          this._encoding = t4, r3 && r3();
        }
      }
      _writev(e7, t4) {
      }
      _destroy(e7, t4) {
      }
      _final(e7) {
      }
      write(e7, t4, r3) {
        const n4 = "string" == typeof t4 ? this._encoding : "utf-8", o5 = "function" == typeof t4 ? t4 : "function" == typeof r3 ? r3 : void 0;
        return this._write(e7, n4, o5), true;
      }
      setDefaultEncoding(e7) {
        return this;
      }
      end(e7, t4, r3) {
        const n4 = "function" == typeof e7 ? e7 : "function" == typeof t4 ? t4 : "function" == typeof r3 ? r3 : void 0;
        if (this.writableEnded)
          return n4 && n4(), this;
        const o5 = e7 === n4 ? void 0 : e7;
        if (o5) {
          const e8 = t4 === n4 ? void 0 : t4;
          this.write(o5, e8, n4);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e7) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e7, t4) {
        throw new Error("[h3] Method not implemented.");
      }
    };
    me2 = class {
      allowHalfOpen = true;
      _destroy;
      constructor(e7 = new pe(), t4 = new de()) {
        Object.assign(this, e7), Object.assign(this, t4), this._destroy = function(...e8) {
          return function(...t5) {
            for (const r3 of e8)
              r3(...t5);
          };
        }(e7._destroy, t4._destroy);
      }
    };
    ge2 = getDuplex();
    ye = globalThis.Duplex || ge2;
    Socket = class extends ye {
      __unenv__ = true;
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e7) {
        super();
      }
      write(e7, t4, r3) {
        return false;
      }
      connect(e7, t4, r3) {
        return this;
      }
      end(e7, t4, r3) {
        return this;
      }
      setEncoding(e7) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e7, t4) {
        return this;
      }
      setNoDelay(e7) {
        return this;
      }
      setKeepAlive(e7, t4) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e7 = new Error("ERR_SOCKET_CLOSED");
        return e7.code = "ERR_SOCKET_CLOSED", this.destroy(e7), this;
      }
    };
    IncomingMessage = class extends pe {
      __unenv__ = {};
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e7) {
        super(), this.socket = this.connection = e7 || new Socket();
      }
      get rawHeaders() {
        return function(e7) {
          const t4 = [];
          for (const r3 in e7)
            if (Array.isArray(e7[r3]))
              for (const n4 of e7[r3])
                t4.push(r3, n4);
            else
              t4.push(r3, e7[r3]);
          return t4;
        }(this.headers);
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e7, t4) {
        return this;
      }
      get headersDistinct() {
        return _distinct(this.headers);
      }
      get trailersDistinct() {
        return _distinct(this.trailers);
      }
    };
    ServerResponse = class extends de {
      __unenv__ = true;
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e7) {
        super(), this.req = e7;
      }
      assignSocket(e7) {
        e7._httpMessage = this, this.socket = e7, this.connection = e7, this.emit("socket", e7), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e7) {
      }
      writeContinue(e7) {
      }
      writeHead(e7, t4, r3) {
        e7 && (this.statusCode = e7), "string" == typeof t4 && (this.statusMessage = t4, t4 = void 0);
        const n4 = r3 || t4;
        if (n4)
          if (Array.isArray(n4))
            ;
          else
            for (const e8 in n4)
              this.setHeader(e8, n4[e8]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e7, t4) {
        return this;
      }
      appendHeader(e7, t4) {
        e7 = e7.toLowerCase();
        const r3 = this._headers[e7], n4 = [...Array.isArray(r3) ? r3 : [r3], ...Array.isArray(t4) ? t4 : [t4]].filter(Boolean);
        return this._headers[e7] = n4.length > 1 ? n4 : n4[0], this;
      }
      setHeader(e7, t4) {
        return this._headers[e7.toLowerCase()] = t4, this;
      }
      getHeader(e7) {
        return this._headers[e7.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e7) {
        return e7.toLowerCase() in this._headers;
      }
      removeHeader(e7) {
        delete this._headers[e7.toLowerCase()];
      }
      addTrailers(e7) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e7, t4) {
        "function" == typeof t4 && t4();
      }
    };
    we2 = Object.defineProperty;
    __publicField$2 = (e7, t4, r3) => (((e8, t5, r4) => {
      t5 in e8 ? we2(e8, t5, { enumerable: true, configurable: true, writable: true, value: r4 }) : e8[t5] = r4;
    })(e7, "symbol" != typeof t4 ? t4 + "" : t4, r3), r3);
    H3Error = class extends Error {
      constructor(e7, t4 = {}) {
        super(e7, t4), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), t4.cause && !this.cause && (this.cause = t4.cause);
      }
      toJSON() {
        const e7 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e7.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e7.data = this.data), e7;
      }
    };
    __publicField$2(H3Error, "__h3_error__", true);
    be3 = Symbol.for("h3RawBody");
    ve2 = ["PATCH", "POST", "PUT", "DELETE"];
    xe3 = { html: "text/html", json: "application/json" };
    _e2 = /[^\u0009\u0020-\u007E]/g;
    Ee2 = "undefined" == typeof setImmediate ? (e7) => e7() : setImmediate;
    Be2 = setResponseHeaders;
    Re2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Ie2 = /* @__PURE__ */ new Set(["transfer-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    ke2 = Object.defineProperty;
    __publicField = (e7, t4, r3) => (((e8, t5, r4) => {
      t5 in e8 ? ke2(e8, t5, { enumerable: true, configurable: true, writable: true, value: r4 }) : e8[t5] = r4;
    })(e7, "symbol" != typeof t4 ? t4 + "" : t4, r3), r3);
    H3Event = class {
      constructor(e7, t4) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), this.node = { req: e7, res: t4 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e7) {
          const t4 = new Headers();
          for (const [r3, n4] of Object.entries(e7))
            if (Array.isArray(n4))
              for (const e8 of n4)
                t4.append(r3, e8);
            else
              n4 && t4.set(r3, n4);
          return t4;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e7) {
        return Promise.resolve(e7).then((e8) => sendWebResponse(this, e8));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    Ae = defineEventHandler;
    lazyEventHandler = function(e7) {
      let t4, r3;
      const resolveHandler = () => r3 ? Promise.resolve(r3) : (t4 || (t4 = Promise.resolve(e7()).then((e8) => {
        const t5 = e8.default || e8;
        if ("function" != typeof t5)
          throw new TypeError("Invalid lazy handler result. It should be a function:", t5);
        return r3 = { handler: toEventHandler(e8.default || e8) }, r3;
      })), t4), n4 = Ae((e8) => r3 ? r3.handler(e8) : resolveHandler().then((t5) => t5.handler(e8)));
      return n4.__resolve__ = resolveHandler, n4;
    };
    Te2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    FetchError2 = class extends Error {
      constructor(e7, t4) {
        super(e7, t4), this.name = "FetchError", t4?.cause && !this.cause && (this.cause = t4.cause);
      }
    };
    Ce2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    Se2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    $e2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    je2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    Oe2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Ne2 = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof global)
        return global;
      throw new Error("unable to locate global object");
    }();
    Le2 = Ne2.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")));
    Me2 = Ne2.Headers;
    Ue2 = Ne2.AbortController;
    createFetch$1({ fetch: Le2, Headers: Me2, AbortController: Ue2 });
    Pe3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    He2 = { run: (e7) => e7() };
    qe2 = void 0 !== console.createTask ? console.createTask : () => He2;
    Hookable = class {
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e7, t4, r3 = {}) {
        if (!e7 || "function" != typeof t4)
          return () => {
          };
        const n4 = e7;
        let o5;
        for (; this._deprecatedHooks[e7]; )
          o5 = this._deprecatedHooks[e7], e7 = o5.to;
        if (o5 && !r3.allowDeprecated) {
          let e8 = o5.message;
          e8 || (e8 = `${n4} hook has been deprecated` + (o5.to ? `, please use ${o5.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e8) || (console.warn(e8), this._deprecatedMessages.add(e8));
        }
        if (!t4.name)
          try {
            Object.defineProperty(t4, "name", { get: () => "_" + e7.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
          } catch {
          }
        return this._hooks[e7] = this._hooks[e7] || [], this._hooks[e7].push(t4), () => {
          t4 && (this.removeHook(e7, t4), t4 = void 0);
        };
      }
      hookOnce(e7, t4) {
        let r3, _function = (...e8) => ("function" == typeof r3 && r3(), r3 = void 0, _function = void 0, t4(...e8));
        return r3 = this.hook(e7, _function), r3;
      }
      removeHook(e7, t4) {
        if (this._hooks[e7]) {
          const r3 = this._hooks[e7].indexOf(t4);
          -1 !== r3 && this._hooks[e7].splice(r3, 1), 0 === this._hooks[e7].length && delete this._hooks[e7];
        }
      }
      deprecateHook(e7, t4) {
        this._deprecatedHooks[e7] = "string" == typeof t4 ? { to: t4 } : t4;
        const r3 = this._hooks[e7] || [];
        delete this._hooks[e7];
        for (const t5 of r3)
          this.hook(e7, t5);
      }
      deprecateHooks(e7) {
        Object.assign(this._deprecatedHooks, e7);
        for (const t4 in e7)
          this.deprecateHook(t4, e7[t4]);
      }
      addHooks(e7) {
        const t4 = flatHooks(e7), r3 = Object.keys(t4).map((e8) => this.hook(e8, t4[e8]));
        return () => {
          for (const e8 of r3.splice(0, r3.length))
            e8();
        };
      }
      removeHooks(e7) {
        const t4 = flatHooks(e7);
        for (const e8 in t4)
          this.removeHook(e8, t4[e8]);
      }
      removeAllHooks() {
        for (const e7 in this._hooks)
          delete this._hooks[e7];
      }
      callHook(e7, ...t4) {
        return t4.unshift(e7), this.callHookWith(serialTaskCaller, e7, ...t4);
      }
      callHookParallel(e7, ...t4) {
        return t4.unshift(e7), this.callHookWith(parallelTaskCaller, e7, ...t4);
      }
      callHookWith(e7, t4, ...r3) {
        const n4 = this._before || this._after ? { name: t4, args: r3, context: {} } : void 0;
        this._before && callEachWith(this._before, n4);
        const o5 = e7(t4 in this._hooks ? [...this._hooks[t4]] : [], r3);
        return o5 instanceof Promise ? o5.finally(() => {
          this._after && n4 && callEachWith(this._after, n4);
        }) : (this._after && n4 && callEachWith(this._after, n4), o5);
      }
      beforeEach(e7) {
        return this._before = this._before || [], this._before.push(e7), () => {
          if (void 0 !== this._before) {
            const t4 = this._before.indexOf(e7);
            -1 !== t4 && this._before.splice(t4, 1);
          }
        };
      }
      afterEach(e7) {
        return this._after = this._after || [], this._after.push(e7), () => {
          if (void 0 !== this._after) {
            const t4 = this._after.indexOf(e7);
            -1 !== t4 && this._after.splice(t4, 1);
          }
        };
      }
    };
    We2 = /\d/;
    ze2 = ["-", "_", "/", "."];
    Fe2 = /{{(.*?)}}/g;
    De2 = ue2({ nuxt: { buildId: "4a09aa55-a7b6-40c5-bc39-dcf35e2a1fa3" } });
    Ke2 = { app: { baseURL: "/", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    Ve2 = { prefix: "NITRO_", altPrefix: Ke2.nitro.envPrefix ?? B.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Ke2.nitro.envExpansion ?? B.env.NITRO_ENV_EXPANSION ?? false };
    Qe2 = _deepFreeze(applyEnv(klona(Ke2), Ve2));
    _deepFreeze(klona(De2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: (e7, t4) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r3 = useRuntimeConfig2();
      if (t4 in r3)
        return r3[t4];
    } });
    Je2 = "base64:";
    Ge2 = ["hasItem", "getItem", "getItemRaw", "setItem", "setItemRaw", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    memory = () => {
      const e7 = /* @__PURE__ */ new Map();
      return { name: "memory", options: {}, hasItem: (t4) => e7.has(t4), getItem: (t4) => e7.get(t4) ?? null, getItemRaw: (t4) => e7.get(t4) ?? null, setItem(t4, r3) {
        e7.set(t4, r3);
      }, setItemRaw(t4, r3) {
        e7.set(t4, r3);
      }, removeItem(t4) {
        e7.delete(t4);
      }, getKeys: () => Array.from(e7.keys()), clear() {
        e7.clear();
      }, dispose() {
        e7.clear();
      } };
    };
    Ye2 = {};
    normalizeKey2 = function(e7) {
      return e7 ? e7.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
    };
    Xe3 = { getKeys: () => Promise.resolve(Object.keys(Ye2)), hasItem: (e7) => (e7 = normalizeKey2(e7), Promise.resolve(e7 in Ye2)), getItem: (e7) => (e7 = normalizeKey2(e7), Promise.resolve(Ye2[e7] ? Ye2[e7].import() : null)), getMeta: (e7) => (e7 = normalizeKey2(e7), Promise.resolve(Ye2[e7] ? Ye2[e7].meta : {})) };
    Ze2 = function(e7 = {}) {
      const t4 = { mounts: { "": e7.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = (e8) => {
        for (const r4 of t4.mountpoints)
          if (e8.startsWith(r4))
            return { base: r4, relativeKey: e8.slice(r4.length), driver: t4.mounts[r4] };
        return { base: "", relativeKey: e8, driver: t4.mounts[""] };
      }, getMounts = (e8, r4) => t4.mountpoints.filter((t5) => t5.startsWith(e8) || r4 && e8.startsWith(t5)).map((r5) => ({ relativeBase: e8.length > r5.length ? e8.slice(r5.length) : void 0, mountpoint: r5, driver: t4.mounts[r5] })), onChange = (e8, r4) => {
        if (t4.watching) {
          r4 = normalizeKey$1(r4);
          for (const n4 of t4.watchListeners)
            n4(e8, r4);
        }
      }, stopWatch = async () => {
        if (t4.watching) {
          for (const e8 in t4.unwatch)
            await t4.unwatch[e8]();
          t4.unwatch = {}, t4.watching = false;
        }
      }, runBatch = (e8, t5, r4) => {
        const n4 = /* @__PURE__ */ new Map(), getBatch = (e9) => {
          let t6 = n4.get(e9.base);
          return t6 || (t6 = { driver: e9.driver, base: e9.base, items: [] }, n4.set(e9.base, t6)), t6;
        };
        for (const r5 of e8) {
          const e9 = "string" == typeof r5, n5 = normalizeKey$1(e9 ? r5 : r5.key), o5 = e9 ? void 0 : r5.value, s3 = e9 || !r5.options ? t5 : { ...t5, ...r5.options }, i4 = getMount(n5);
          getBatch(i4).items.push({ key: n5, value: o5, relativeKey: i4.relativeKey, options: s3 });
        }
        return Promise.all([...n4.values()].map((e9) => r4(e9))).then((e9) => e9.flat());
      }, r3 = { hasItem(e8, t5 = {}) {
        e8 = normalizeKey$1(e8);
        const { relativeKey: r4, driver: n4 } = getMount(e8);
        return asyncCall(n4.hasItem, r4, t5);
      }, getItem(e8, t5 = {}) {
        e8 = normalizeKey$1(e8);
        const { relativeKey: r4, driver: n4 } = getMount(e8);
        return asyncCall(n4.getItem, r4, t5).then((e9) => destr2(e9));
      }, getItems: (e8, t5) => runBatch(e8, t5, (e9) => e9.driver.getItems ? asyncCall(e9.driver.getItems, e9.items.map((e10) => ({ key: e10.relativeKey, options: e10.options })), t5).then((t6) => t6.map((t7) => ({ key: joinKeys(e9.base, t7.key), value: destr2(t7.value) }))) : Promise.all(e9.items.map((t6) => asyncCall(e9.driver.getItem, t6.relativeKey, t6.options).then((e10) => ({ key: t6.key, value: destr2(e10) }))))), getItemRaw(e8, t5 = {}) {
        e8 = normalizeKey$1(e8);
        const { relativeKey: r4, driver: n4 } = getMount(e8);
        return n4.getItemRaw ? asyncCall(n4.getItemRaw, r4, t5) : asyncCall(n4.getItem, r4, t5).then((e9) => function(e10) {
          return "string" != typeof e10 ? e10 : e10.startsWith(Je2) ? (checkBufferSupport(), f.from(e10.slice(Je2.length), "base64")) : e10;
        }(e9));
      }, async setItem(e8, t5, n4 = {}) {
        if (void 0 === t5)
          return r3.removeItem(e8);
        e8 = normalizeKey$1(e8);
        const { relativeKey: o5, driver: s3 } = getMount(e8);
        s3.setItem && (await asyncCall(s3.setItem, o5, stringify2(t5), n4), s3.watch || onChange("update", e8));
      }, async setItems(e8, t5) {
        await runBatch(e8, t5, async (e9) => {
          if (e9.driver.setItems)
            return asyncCall(e9.driver.setItems, e9.items.map((e10) => ({ key: e10.relativeKey, value: stringify2(e10.value), options: e10.options })), t5);
          e9.driver.setItem && await Promise.all(e9.items.map((t6) => asyncCall(e9.driver.setItem, t6.relativeKey, stringify2(t6.value), t6.options)));
        });
      }, async setItemRaw(e8, t5, n4 = {}) {
        if (void 0 === t5)
          return r3.removeItem(e8, n4);
        e8 = normalizeKey$1(e8);
        const { relativeKey: o5, driver: s3 } = getMount(e8);
        if (s3.setItemRaw)
          await asyncCall(s3.setItemRaw, o5, t5, n4);
        else {
          if (!s3.setItem)
            return;
          await asyncCall(s3.setItem, o5, function(e9) {
            if ("string" == typeof e9)
              return e9;
            checkBufferSupport();
            const t6 = f.from(e9).toString("base64");
            return Je2 + t6;
          }(t5), n4);
        }
        s3.watch || onChange("update", e8);
      }, async removeItem(e8, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { removeMeta: t5 }), e8 = normalizeKey$1(e8);
        const { relativeKey: r4, driver: n4 } = getMount(e8);
        n4.removeItem && (await asyncCall(n4.removeItem, r4, t5), (t5.removeMeta || t5.removeMata) && await asyncCall(n4.removeItem, r4 + "$", t5), n4.watch || onChange("remove", e8));
      }, async getMeta(e8, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { nativeOnly: t5 }), e8 = normalizeKey$1(e8);
        const { relativeKey: r4, driver: n4 } = getMount(e8), o5 = /* @__PURE__ */ Object.create(null);
        if (n4.getMeta && Object.assign(o5, await asyncCall(n4.getMeta, r4, t5)), !t5.nativeOnly) {
          const e9 = await asyncCall(n4.getItem, r4 + "$", t5).then((e10) => destr2(e10));
          e9 && "object" == typeof e9 && ("string" == typeof e9.atime && (e9.atime = new Date(e9.atime)), "string" == typeof e9.mtime && (e9.mtime = new Date(e9.mtime)), Object.assign(o5, e9));
        }
        return o5;
      }, setMeta(e8, t5, r4 = {}) {
        return this.setItem(e8 + "$", t5, r4);
      }, removeMeta(e8, t5 = {}) {
        return this.removeItem(e8 + "$", t5);
      }, async getKeys(e8, t5 = {}) {
        e8 = normalizeBaseKey(e8);
        const r4 = getMounts(e8, true);
        let n4 = [];
        const o5 = [];
        for (const e9 of r4) {
          const r5 = (await asyncCall(e9.driver.getKeys, e9.relativeBase, t5)).map((t6) => e9.mountpoint + normalizeKey$1(t6)).filter((e10) => !n4.some((t6) => e10.startsWith(t6)));
          o5.push(...r5), n4 = [e9.mountpoint, ...n4.filter((t6) => !t6.startsWith(e9.mountpoint))];
        }
        return e8 ? o5.filter((t6) => t6.startsWith(e8) && !t6.endsWith("$")) : o5.filter((e9) => !e9.endsWith("$"));
      }, async clear(e8, t5 = {}) {
        e8 = normalizeBaseKey(e8), await Promise.all(getMounts(e8, false).map(async (e9) => {
          if (e9.driver.clear)
            return asyncCall(e9.driver.clear, e9.relativeBase, t5);
          if (e9.driver.removeItem) {
            const r4 = await e9.driver.getKeys(e9.relativeBase || "", t5);
            return Promise.all(r4.map((r5) => e9.driver.removeItem(r5, t5)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t4.mounts).map((e8) => dispose(e8)));
      }, watch: async (e8) => (await (async () => {
        if (!t4.watching) {
          t4.watching = true;
          for (const e9 in t4.mounts)
            t4.unwatch[e9] = await watch2(t4.mounts[e9], onChange, e9);
        }
      })(), t4.watchListeners.push(e8), async () => {
        t4.watchListeners = t4.watchListeners.filter((t5) => t5 !== e8), 0 === t4.watchListeners.length && await stopWatch();
      }), async unwatch() {
        t4.watchListeners = [], await stopWatch();
      }, mount(e8, n4) {
        if ((e8 = normalizeBaseKey(e8)) && t4.mounts[e8])
          throw new Error(`already mounted at ${e8}`);
        return e8 && (t4.mountpoints.push(e8), t4.mountpoints.sort((e9, t5) => t5.length - e9.length)), t4.mounts[e8] = n4, t4.watching && Promise.resolve(watch2(n4, onChange, e8)).then((r4) => {
          t4.unwatch[e8] = r4;
        }).catch(console.error), r3;
      }, async unmount(e8, r4 = true) {
        (e8 = normalizeBaseKey(e8)) && t4.mounts[e8] && (t4.watching && e8 in t4.unwatch && (t4.unwatch[e8](), delete t4.unwatch[e8]), r4 && await dispose(t4.mounts[e8]), t4.mountpoints = t4.mountpoints.filter((t5) => t5 !== e8), delete t4.mounts[e8]);
      }, getMount(e8 = "") {
        e8 = normalizeKey$1(e8) + ":";
        const t5 = getMount(e8);
        return { driver: t5.driver, base: t5.base };
      }, getMounts(e8 = "", t5 = {}) {
        e8 = normalizeKey$1(e8);
        return getMounts(e8, t5.parents).map((e9) => ({ driver: e9.driver, base: e9.mountpoint }));
      } };
      return r3;
    }({});
    Ze2.mount("/assets", Xe3);
    et3 = { name: "_", base: "/cache", swr: true, maxAge: 1 };
    cachedFunction = function(e7, t4 = {}) {
      t4 = { ...et3, ...t4 };
      const r3 = {}, n4 = t4.group || "nitro/functions", o5 = t4.name || e7.name || "_", s3 = t4.integrity || hash([e7, t4]), i4 = t4.validate || ((e8) => void 0 !== e8.value);
      return async (...a4) => {
        if (await t4.shouldBypassCache?.(...a4))
          return e7(...a4);
        const c2 = await (t4.getKey || getKey)(...a4), u3 = await t4.shouldInvalidateCache?.(...a4), l4 = await async function(e8, a5, c3, u4) {
          const l5 = [t4.base, n4, o5, e8 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
          let f3 = await useStorage().getItem(l5) || {};
          if ("object" != typeof f3) {
            f3 = {};
            const e9 = new Error("Malformed data read from cache.");
            console.error("[nitro] [cache]", e9), useNitroApp().captureError(e9, { event: u4, tags: ["cache"] });
          }
          const h4 = 1e3 * (t4.maxAge ?? t4.maxAge ?? 0);
          h4 && (f3.expires = Date.now() + h4);
          const p2 = c3 || f3.integrity !== s3 || h4 && Date.now() - (f3.mtime || 0) > h4 || false === i4(f3), d3 = p2 ? (async () => {
            const n5 = r3[e8];
            n5 || (void 0 !== f3.value && (t4.staleMaxAge || 0) >= 0 && false === t4.swr && (f3.value = void 0, f3.integrity = void 0, f3.mtime = void 0, f3.expires = void 0), r3[e8] = Promise.resolve(a5()));
            try {
              f3.value = await r3[e8];
            } catch (t5) {
              throw n5 || delete r3[e8], t5;
            }
            if (!n5 && (f3.mtime = Date.now(), f3.integrity = s3, delete r3[e8], false !== i4(f3))) {
              const e9 = useStorage().setItem(l5, f3).catch((e10) => {
                console.error("[nitro] [cache] Cache write error.", e10), useNitroApp().captureError(e10, { event: u4, tags: ["cache"] });
              });
              u4 && u4.waitUntil && u4.waitUntil(e9);
            }
          })() : Promise.resolve();
          return void 0 === f3.value ? await d3 : p2 && u4 && u4.waitUntil && u4.waitUntil(d3), t4.swr && false !== i4(f3) ? (d3.catch((e9) => {
            console.error("[nitro] [cache] SWR handler error.", e9), useNitroApp().captureError(e9, { event: u4, tags: ["cache"] });
          }), f3) : d3.then(() => f3);
        }(c2, () => e7(...a4), u3, a4[0] && isEvent(a4[0]) ? a4[0] : void 0);
        let f2 = l4.value;
        return t4.transform && (f2 = await t4.transform(l4, ...a4) || f2), f2;
      };
    };
    cachedEventHandler = function(e7, t4 = et3) {
      const r3 = (t4.varies || []).filter(Boolean).map((e8) => e8.toLowerCase()).sort(), n4 = { ...t4, getKey: async (e8) => {
        const n5 = await t4.getKey?.(e8);
        if (n5)
          return escapeKey(n5);
        const o6 = e8.node.req.originalUrl || e8.node.req.url || e8.path;
        return [`${escapeKey(decodeURI(parseURL2(o6).pathname)).slice(0, 16) || "index"}.${hash(o6)}`, ...r3.map((t5) => [t5, e8.node.req.headers[t5]]).map(([e9, t5]) => `${escapeKey(e9)}.${hash(t5)}`)].join(":");
      }, validate: (e8) => !!e8.value && (!(e8.value.code >= 400) && (void 0 !== e8.value.body && ("undefined" !== e8.value.headers.etag && "undefined" !== e8.value.headers["last-modified"]))), group: t4.group || "nitro/handlers", integrity: t4.integrity || hash([e7, t4]) }, o5 = cachedFunction(async (n5) => {
        const o6 = {};
        for (const e8 of r3)
          o6[e8] = n5.node.req.headers[e8];
        const s3 = cloneWithProxy(n5.node.req, { headers: o6 }), i4 = {};
        let a4;
        const c2 = createEvent(s3, cloneWithProxy(n5.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: (e8) => i4[e8], setHeader(e8, t5) {
          return i4[e8] = t5, this;
        }, getHeaderNames: () => Object.keys(i4), hasHeader: (e8) => e8 in i4, removeHeader(e8) {
          delete i4[e8];
        }, getHeaders: () => i4, end(e8, t5, r4) {
          return "string" == typeof e8 && (a4 = e8), "function" == typeof t5 && t5(), "function" == typeof r4 && r4(), this;
        }, write(e8, t5, r4) {
          return "string" == typeof e8 && (a4 = e8), "function" == typeof t5 && t5(), "function" == typeof r4 && r4(), this;
        }, writeHead(e8, t5) {
          if (this.statusCode = e8, t5)
            for (const e9 in t5)
              this.setHeader(e9, t5[e9]);
          return this;
        } }));
        c2.fetch = (e8, t5) => fetchWithEvent(c2, e8, t5, { fetch: useNitroApp().localFetch }), c2.$fetch = (e8, t5) => fetchWithEvent(c2, e8, t5, { fetch: globalThis.$fetch }), c2.context = n5.context;
        const u3 = await e7(c2) || a4, l4 = c2.node.res.getHeaders();
        l4.etag = String(l4.Etag || l4.etag || `W/"${hash(u3)}"`), l4["last-modified"] = String(l4["Last-Modified"] || l4["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const f2 = [];
        t4.swr ? (t4.maxAge && f2.push(`s-maxage=${t4.maxAge}`), t4.staleMaxAge ? f2.push(`stale-while-revalidate=${t4.staleMaxAge}`) : f2.push("stale-while-revalidate")) : t4.maxAge && f2.push(`max-age=${t4.maxAge}`), f2.length > 0 && (l4["cache-control"] = f2.join(", "));
        return { code: c2.node.res.statusCode, headers: l4, body: u3 };
      }, n4);
      return defineEventHandler(async (r4) => {
        if (t4.headersOnly) {
          if (handleCacheHeaders(r4, { maxAge: t4.maxAge }))
            return;
          return e7(r4);
        }
        const n5 = await o5(r4);
        if (r4.node.res.headersSent || r4.node.res.writableEnded)
          return n5.body;
        if (!handleCacheHeaders(r4, { modifiedTime: new Date(n5.headers["last-modified"]), etag: n5.headers.etag, maxAge: t4.maxAge })) {
          r4.node.res.statusCode = n5.code;
          for (const e8 in n5.headers) {
            const t5 = n5.headers[e8];
            "set-cookie" === e8 ? r4.node.res.appendHeader(e8, splitCookiesString(t5)) : r4.node.res.setHeader(e8, t5);
          }
          return n5.body;
        }
      });
    };
    tt3 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    rt2 = [];
    errorHandler = async function(e7, t4) {
      const { stack: r3, statusCode: n4, statusMessage: o5, message: s3 } = function(e8) {
        const t5 = "function" == typeof B.cwd ? B.cwd() : "/", r4 = (e8.stack || "").split("\n").splice(1).filter((e9) => e9.includes("at ")).map((e9) => ({ text: e9.replace(t5 + "/", "./").replace("webpack:/", "").replace("file://", "").trim(), internal: e9.includes("node_modules") && !e9.includes(".cache") || e9.includes("internal") || e9.includes("new Promise") })), n5 = e8.statusCode || 500, o6 = e8.statusMessage ?? (404 === n5 ? "Not Found" : ""), s4 = e8.message || e8.toString();
        return { stack: r4, statusCode: n5, statusMessage: o6, message: s4 };
      }(e7), i4 = { url: t4.path, statusCode: n4, statusMessage: o5, message: s3, stack: "", data: e7.data };
      if (e7.unhandled || e7.fatal) {
        const t5 = ["[nuxt]", "[request error]", e7.unhandled && "[unhandled]", e7.fatal && "[fatal]", 200 !== Number(i4.statusCode) && `[${i4.statusCode}]`].filter(Boolean).join(" ");
        console.error(t5, i4.message + "\n" + r3.map((e8) => "  " + e8.text).join("  \n"));
      }
      if (t4.handled)
        return;
      if (setResponseStatus(t4, 200 !== i4.statusCode && i4.statusCode || 500, i4.statusMessage), function(e8) {
        if (hasReqHeader(e8, "accept", "text/html"))
          return false;
        return hasReqHeader(e8, "accept", "application/json") || hasReqHeader(e8, "user-agent", "curl/") || hasReqHeader(e8, "user-agent", "httpie/") || hasReqHeader(e8, "sec-fetch-mode", "cors") || e8.path.startsWith("/api/") || e8.path.endsWith(".json");
      }(t4))
        return setResponseHeader(t4, "Content-Type", "application/json"), send(t4, JSON.stringify(i4));
      const a4 = getRequestHeaders(t4), c2 = t4.path.startsWith("/__nuxt_error") || !!a4["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery2(joinURL2(useRuntimeConfig2(t4).app.baseURL, "/__nuxt_error"), i4), { headers: { ...a4, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (!c2) {
        const { template: e8 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        if (t4.handled)
          return;
        return setResponseHeader(t4, "Content-Type", "text/html;charset=UTF-8"), send(t4, e8(i4));
      }
      const u3 = await c2.text();
      if (!t4.handled) {
        for (const [e8, r4] of c2.headers.entries())
          setResponseHeader(t4, e8, r4);
        return setResponseStatus(t4, c2.status && 200 !== c2.status ? c2.status : void 0, c2.statusText), send(t4, u3);
      }
    };
    _lazy_6POH2x = () => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e7) {
      return e7.M;
    });
    nt2 = [{ route: "/api/test", handler: () => Promise.resolve().then(() => (init_test(), test_exports)), lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_error", handler: _lazy_6POH2x, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_6POH2x, lazy: true, middleware: false, method: void 0 }];
    ot3 = function() {
      const e7 = useRuntimeConfig2(), t4 = createHooks(), captureError = (e8, r4 = {}) => {
        const n5 = t4.callHookParallel("error", e8, r4).catch((e9) => {
          console.error("Error while capturing another error", e9);
        });
        if (r4.event && isEvent(r4.event)) {
          const t5 = r4.event.context.nitro?.errors;
          t5 && t5.push({ error: e8, context: r4 }), r4.event.waitUntil && r4.event.waitUntil(n5);
        }
      }, r3 = createApp2({ debug: destr2(false), onError: (e8, t5) => (captureError(e8, { event: t5, tags: ["request"] }), errorHandler(e8, t5)), onRequest: async (e8) => {
        await ot3.hooks.callHook("request", e8).catch((t5) => {
          captureError(t5, { event: e8, tags: ["request"] });
        });
      }, onBeforeResponse: async (e8, t5) => {
        await ot3.hooks.callHook("beforeResponse", e8, t5).catch((t6) => {
          captureError(t6, { event: e8, tags: ["request", "response"] });
        });
      }, onAfterResponse: async (e8, t5) => {
        await ot3.hooks.callHook("afterResponse", e8, t5).catch((t6) => {
          captureError(t6, { event: e8, tags: ["request", "response"] });
        });
      } }), n4 = function(e8 = {}) {
        const t5 = createRouter$1({}), r4 = {};
        let n5;
        const o6 = {}, addRoute = (e9, n6, s5) => {
          let i5 = r4[e9];
          if (i5 || (r4[e9] = i5 = { path: e9, handlers: {} }, t5.insert(e9, i5)), Array.isArray(s5))
            for (const t6 of s5)
              addRoute(e9, n6, t6);
          else
            i5.handlers[s5] = toEventHandler(n6, 0, e9);
          return o6;
        };
        o6.use = o6.add = (e9, t6, r5) => addRoute(e9, t6, r5 || "all");
        for (const e9 of Te2)
          o6[e9] = (t6, r5) => o6.add(t6, r5, e9);
        const matchHandler = (e9 = "/", r5 = "get") => {
          const o7 = e9.indexOf("?");
          -1 !== o7 && (e9 = e9.slice(0, Math.max(0, o7)));
          const s5 = t5.lookup(e9);
          if (!s5 || !s5.handlers)
            return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e9 || "/"}.` }) };
          let i5 = s5.handlers[r5] || s5.handlers.all;
          if (!i5) {
            n5 || (n5 = toRouteMatcher(t5));
            const o8 = n5.matchAll(e9).reverse();
            for (const e10 of o8) {
              if (e10.handlers[r5]) {
                i5 = e10.handlers[r5], s5.handlers[r5] = s5.handlers[r5] || i5;
                break;
              }
              if (e10.handlers.all) {
                i5 = e10.handlers.all, s5.handlers.all = s5.handlers.all || i5;
                break;
              }
            }
          }
          return i5 ? { matched: s5, handler: i5 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r5} is not allowed on this route.` }) };
        }, s4 = e8.preemptive || e8.preemtive;
        return o6.handler = Ae((e9) => {
          const t6 = matchHandler(e9.path, e9.method.toLowerCase());
          if ("error" in t6) {
            if (s4)
              throw t6.error;
            return;
          }
          e9.context.matchedRoute = t6.matched;
          const r5 = t6.matched.params || {};
          return e9.context.params = r5, Promise.resolve(t6.handler(e9)).then((e10) => void 0 === e10 && s4 ? null : e10);
        }), o6.handler.__resolve__ = async (e9) => {
          e9 = withLeadingSlash2(e9);
          const t6 = matchHandler(e9);
          if ("error" in t6)
            return;
          let r5 = { route: t6.matched.path, handler: t6.handler };
          if (t6.handler.__resolve__) {
            const n6 = await t6.handler.__resolve__(e9);
            if (!n6)
              return;
            r5 = { ...r5, ...n6 };
          }
          return r5;
        }, o6;
      }({ preemptive: true }), o5 = (s3 = toNodeListener(r3), function(e8) {
        const t5 = new IncomingMessage(), r4 = new ServerResponse(t5);
        if (t5.url = e8.url || "/", t5.method = e8.method || "GET", t5.headers = {}, e8.headers) {
          const r5 = "function" == typeof e8.headers.entries ? e8.headers.entries() : Object.entries(e8.headers);
          for (const [e9, n5] of r5)
            n5 && (t5.headers[e9.toLowerCase()] = n5);
        }
        return t5.headers.host = t5.headers.host || e8.host || "localhost", t5.connection.encrypted = t5.connection.encrypted || "https" === e8.protocol, t5.body = e8.body || null, t5.__unenv__ = e8.context, s3(t5, r4).then(() => {
          let e9 = r4._data;
          (Pe3.has(r4.statusCode) || "HEAD" === t5.method.toUpperCase()) && (e9 = null, delete r4._headers["content-length"]);
          const n5 = { body: e9, headers: r4._headers, status: r4.statusCode, statusText: r4.statusMessage };
          return t5.destroy(), r4.destroy(), n5;
        });
      });
      var s3;
      const i4 = function(e8, t5 = global.fetch) {
        return async function(r4, n5) {
          const o6 = r4.toString();
          if (!o6.startsWith("/"))
            return t5(o6, n5);
          try {
            const t6 = await e8({ url: o6, ...n5 });
            return new Response(t6.body, { status: t6.status, statusText: t6.statusText, headers: Object.fromEntries(Object.entries(t6.headers).map(([e9, t7]) => [e9, Array.isArray(t7) ? t7.join(",") : String(t7) || ""])) });
          } catch (e9) {
            return new Response(e9.toString(), { status: Number.parseInt(e9.statusCode || e9.code) || 500, statusText: e9.statusText });
          }
        };
      }(o5, globalThis.fetch), localFetch = (e8, t5) => i4(e8, t5).then((e9) => function(e10) {
        if (!e10.headers.has("set-cookie"))
          return e10;
        return new Response(e10.body, { status: e10.status, statusText: e10.statusText, headers: normalizeCookieHeaders(e10.headers) });
      }(e9)), a4 = createFetch$1({ fetch: localFetch, Headers: Me2, defaults: { baseURL: e7.app.baseURL } });
      globalThis.$fetch = a4, r3.use(createRouteRulesHandler({ localFetch })), r3.use(Ae((e8) => {
        e8.context.nitro = e8.context.nitro || { errors: [] };
        const t5 = e8.node.req?.__unenv__;
        t5 && Object.assign(e8.context, t5), e8.fetch = (t6, r4) => fetchWithEvent(e8, t6, r4, { fetch: localFetch }), e8.$fetch = (t6, r4) => fetchWithEvent(e8, t6, r4, { fetch: a4 }), e8.waitUntil = (r4) => {
          e8.context.nitro._waitUntilPromises || (e8.context.nitro._waitUntilPromises = []), e8.context.nitro._waitUntilPromises.push(r4), t5?.waitUntil && t5.waitUntil(r4);
        }, e8.captureError = (t6, r4) => {
          captureError(t6, { event: e8, ...r4 });
        };
      }));
      for (const t5 of nt2) {
        let o6 = t5.lazy ? lazyEventHandler(t5.handler) : t5.handler;
        if (t5.middleware || !t5.route) {
          const n5 = (e7.app.baseURL + (t5.route || "/")).replace(/\/+/g, "/");
          r3.use(n5, o6);
        } else {
          const e8 = getRouteRulesForPath(t5.route.replace(/:\w+|\*\*/g, "_"));
          e8.cache && (o6 = cachedEventHandler(o6, { group: "nitro/routes", ...e8.cache })), n4.use(t5.route, o6, t5.method);
        }
      }
      r3.use(e7.app.baseURL, n4.handler);
      const c2 = { hooks: t4, h3App: r3, router: n4, localCall: o5, localFetch, captureError };
      for (const e8 of rt2)
        try {
          e8(c2);
        } catch (e9) {
          throw captureError(e9, { tags: ["plugin"] }), e9;
        }
      return c2;
    }();
    useNitroApp = () => ot3;
    st3 = /post|put|patch/i;
    it3 = { "/_nuxt/builds/meta": { maxAge: 31536e3 }, "/_nuxt/builds": { maxAge: 1 }, "/_nuxt": { maxAge: 31536e3 } };
    at3 = { async fetch(t4, r3, n4) {
      try {
        return await P2.getAssetFromKV({ request: t4, waitUntil: (e7) => n4.waitUntil(e7) }, { cacheControl: assetsCacheControl, mapRequestToAsset: baseURLModifier, ASSET_NAMESPACE: r3.__STATIC_CONTENT, ASSET_MANIFEST: JSON.parse(e6) });
      } catch {
      }
      const o5 = new URL(t4.url);
      let s3;
      return function(e7) {
        return st3.test(e7.method);
      }(t4) && (s3 = f.from(await t4.arrayBuffer())), globalThis.__env__ = r3, ot3.localFetch(o5.pathname + o5.search, { context: { cf: t4.cf, waitUntil: (e7) => n4.waitUntil(e7), cloudflare: { request: t4, env: r3, context: n4 } }, host: o5.hostname, protocol: o5.protocol, method: t4.method, headers: t4.headers, body: s3 });
    }, scheduled(e7, t4, r3) {
    } };
    baseURLModifier = (e7) => {
      const t4 = withoutBase(e7.url, useRuntimeConfig2().app.baseURL);
      return P2.mapRequestToAsset(new Request(t4, e7));
    };
  }
});

// .wrangler/tmp/bundle-rpL399/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-rpL399/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// .output/server/index.mjs
init_checked_fetch();
init_modules_watch_stub();
init_runtime();
import "__STATIC_CONTENT_MANIFEST";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e7) {
      console.error("Failed to drain the unused request body.", e7);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e7) {
  return {
    name: e7?.name,
    message: e7?.message ?? String(e7),
    stack: e7?.stack,
    cause: e7?.cause === void 0 ? void 0 : reduceError(e7.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e7) {
    const error = reduceError(e7);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-rpL399/middleware-insertion-facade.js
at3.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...at3.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = at3;

// node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-rpL399/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
