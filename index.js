import program from "./helpers/commander.js";
import {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  } from "./contacts.js";

program.parse(process.argv);
console.log(program.opts())