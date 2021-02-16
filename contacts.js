import * as fs from "fs/promises";
import * as path from "path";
import { handleError } from "./helpers/handleError.js";
import getDirname from "./helpers/dirname.js";
// import.meta.url это текущий урл на наш файл
const { __dirname } = getDirname(import.meta.url);

const contactsPath = path.join(__dirname, "/db/contacts.json");

// TODO: задокументировать каждую функцию
export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.log(data.toString());
  } catch (error) {
    handleError(error);
  }
}

export function getContactById(contactId) {
  // ...твой код
}

export function removeContact(contactId) {
  // ...твой код
}

export function addContact(name, email, phone) {
  // ...твой код
}
