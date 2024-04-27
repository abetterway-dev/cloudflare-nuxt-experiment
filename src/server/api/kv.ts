import type { KVNamespace } from "@cloudflare/workers-types";

export default defineEventHandler(async (event) => {
  const KV: KVNamespace = event.context.cloudflare.env.kv_table;
  let writeKV = false;
  let readKV = "";
  const randomString = Array.from(
    { length: 10 },
    () => Math.random().toString(36)[2],
  ).join("");
  try {
    await KV.put("test", randomString);
    writeKV = true;
    readKV = await KV.get("test");
  } catch (e) {
    console.error(e);
  }

  return {
    write: writeKV,
    read: readKV,
    value: randomString,
    env: event.context.cloudflare.env,
  };
});
