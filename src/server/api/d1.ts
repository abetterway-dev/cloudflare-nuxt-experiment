import type { D1Database } from "@cloudflare/workers-types";

export default defineEventHandler(async (event) => {
  const { DB } = event.context.cloudflare.env;

  const result = await DB.prepare("SELECT * FROM hello_world").all();
  if (!!result) {
    return { result };
  } else {
    throw createError({
      statusCode: 503,
      statusMessage: "Service Unavailable",
    });
  }
});
