import { promises as fs } from "fs";
import * as path from "path";
import shortid from "shortid";
import { handleError } from "./helpers/handleError.js";
import getDirname from "./helpers/dirname.js";
// import.meta.url это текущий урл на наш файл
const { __dirname } = getDirname(import.meta.url);

const contactsPath = path.join(__dirname, "/db/contacts.json");

export async function listContacts() {
  try {
    // данные с прочитки файла contacts.json
    const data = await fs.readFile(contactsPath);

    // JSON.parse необходимо чтоб распарсить в обьект, потому что там строка сформированна
    console.log(JSON.parse(data.toString()));
  } catch (error) {
    handleError(error);
  }
}

export async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    // JSON.parse необходимо чтоб распарсить в обьект, потому что там строка сформированна
    // данные с прочитки файла contacts.json
    const parseData = JSON.parse(data.toString());
    console.log(parseData);

    //в данных с прочитки файла contacts.json ищем необходимый контакт по id
    const contact = parseData.find((contact) => contact.id === contactId);
    console.log(contact);
    if (!contact) {
      return console.log("Contact not found.");
    }
  } catch (error) {
    handleError(error);
  }
}

export async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parseData = JSON.parse(data.toString());

    const filteredContacts = parseData.filter(
      (contact) => contact.id !== contactId
    );

    if (filteredContacts.length !== parseData.length) {
      // если отфильтрованный массив контактов НЕ равен изначальному массиву, значит искомый контакт убрали
      // перезаписываем файл (путьcontactsPath ) с контактами. В него записываем масив filteredContacts
      fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
      console.log("Contact was removed.");
    } else {
      console.log("Contact not found.");
      return;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const parseData = JSON.parse(data.toString());

    parseData.push({ id: shortid.generate(), name, email, phone });
    fs.writeFile(contactsPath, JSON.stringify(parseData));
    console.log("Contact was added.");
  } catch (error) {
    handleError(error);
  }
}
