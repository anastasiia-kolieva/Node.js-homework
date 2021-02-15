// Так работает!!!!!!
// import path from 'path';
// import fileSystem from 'fs';
// const fs = fileSystem.promises;
// Если не передается сегментов пути, path.resolve() возвращает абсолютный путь к текущей рабочей директории.
// const __dirname = path.resolve();
// console.log(__filename)

// выдаёт ошибку: Cannot find package 'fs' imported from D:\GO IT\NODE\homeworks\1\Node.js-homework\contacts.js
// у меня версия ноды v12.18.3
// import * as fs from "fs/promises";
import * as path from "path";

import getDirname from './helpers/dirname.js'
// import.meta.url это текущий урл на наш файл
const { __dirname } = getDirname(import.meta.url);

const contactsPath = path.join(__dirname, '/db/contacts.json');


// TODO: задокументировать каждую функцию
export function listContacts() {
  // ...твой код
  
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
