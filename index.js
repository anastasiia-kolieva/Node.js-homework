import program from "./helpers/commander.js";
import {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  } from "./contacts.js";

program.parse(process.argv);
// program.opts() опции
const options = program.opts();

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        listContacts()
        break;
  
      case 'get':
          // ... id
        getContactById(id)
        break;
  
      case 'add':
        // ... name email phone
        addContact(name, email, phone)
        break;
  
      case 'remove':
        // ... id
        removeContact(id)
        break;
  
      default:
        console.warn('Unknown action type!');
    }
  }
  
  invokeAction(options);