export default defineEventHandler(async (event) => {
  const db = useKyselyWithD1(event);
  const test = await db.selectFrom("hello_world").selectAll().execute();

  if (!!test) {
    return { test };
  } else {
    throw createError({
      statusCode: 503,
      statusMessage: "Service Unavailable",
    });
  }
});
