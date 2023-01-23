import createConnection from "..";

import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

async function create() {
  const connection = await createConnection();

  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, CURRENT_TIMESTAMP, 'XXXXX')
    `
  );

  await connection.close();
}

create().then(() => console.log("user admin created!"));
