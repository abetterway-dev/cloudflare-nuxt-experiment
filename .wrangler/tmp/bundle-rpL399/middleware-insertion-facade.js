				import worker, * as OTHER_EXPORTS from "/Users/home/Developer/experiments/cloudflare/nuxt-d1/.output/server/index.mjs";
				import * as __MIDDLEWARE_0__ from "/Users/home/Developer/experiments/cloudflare/nuxt-d1/node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/home/Developer/experiments/cloudflare/nuxt-d1/node_modules/.pnpm/wrangler@3.52.0_@cloudflare+workers-types@4.20240423.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/home/Developer/experiments/cloudflare/nuxt-d1/.output/server/index.mjs";
				export default worker;