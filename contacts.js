// Так работает!!!!!!
// import path from 'path';
// import fileSystem from 'fs';
// const fs = fileSystem.promises;
// Если не передается сегментов пути, path.resolve() возвращает абсолютный путь к текущей рабочей директории.
// const __dirname = path.resolve();
// console.log(__filename)

// const contactsPath = path.join(__dirname, '/db/contacts.json');
// console.log(__dirname)
// console.log(contactsPath)

// выдаёт ошибку: Cannot find package 'fs' imported from D:\GO IT\NODE\homeworks\1\Node.js-homework\contacts.js
// у меня версия ноды v12.18.3
import * as fs from "fs/promises";
import * as path from "path";

import getDirname from './helpers/dirname.js'
// const { __dirname } = getDirname(import.meta.url);

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
