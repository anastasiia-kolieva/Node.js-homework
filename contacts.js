import * as fs from "fs/promises";
import * as path from "path";
import { handleError } from "./helpers/handleError.js";
import getDirname from "./helpers/dirname.js";
// import.meta.url это текущий урл на наш файл
const { __dirname } = getDirname(import.meta.url);

const contactsPath = path.join(__dirname, "/db/contacts.json");

export async function listContacts() {
  try {
    // данные с прочитки файла contacts.json
    const data = await fs.readFile(contactsPath);

    // Проверить что приходит в консоле!!!!

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
    // Проверить!!!!!
    console.log(data.toString())
    console.log(parseData)

    //в данных с прочитки файла contacts.json ищем необходимый контакт по id
    const contact = parseData.find((contact) => contact.id === contactId);
    if (!contact) console.error("Contact not found.");
    console.log(contact);
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

      // ПРОВЕРИТЬ!!!!!!

      fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
      // fs.writeFile(contactsPath, filteredContacts);
      console.log(filteredContacts)
      console.log(JSON.stringify(filteredContacts))
      
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
  // ...твой код
}
