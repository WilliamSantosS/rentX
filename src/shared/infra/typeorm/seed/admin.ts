import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");
  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "admin", created_at, drive_license)
      values('${id}', 'admin', 'admin@email.com', '${password}', true, 'now()', 'XXXXX')
    `
  );
}

create().then(() => console.log("Admin user created"));
