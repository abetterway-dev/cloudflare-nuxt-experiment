import { Kysely, Generated } from "kysely";
import { D1Dialect } from "kysely-d1";

interface HelloTable {
  id: Generated<number>;
  text: string | null;
}

interface Database {
  hello_world: HelloTable;
}

export const useKyselyWithD1 = (event) => {
  return new Kysely<Database>({
    dialect: new D1Dialect({ database: event.context.cloudflare.env.DB }),
  });
};
