import { Generated } from "kysely";

export interface HelloTable {
  id: Generated<number>;
  text: string | null;
}

export interface Database {
  hello_world: HelloTable;
}
