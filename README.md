  Домашнее задание 1

  Шаг 1
Инициализируй npm в проекте
В корне проекта создай файл index.js
Поставь пакет nodemon как зависимость разработки (devDependencies)
В файле package.json добавь "скрипты" для запуска index.js
Скрипт start который запускает index.js с помощью node
Скрипт dev который запускает index.js с помощью nodemon
  
  Шаг 2
В корне проекта создай папку db. Для хранения контактов скачай и используй файл contacts.json, положив его в папку db.
В корне проекта создай файл contacts.js.
Сделай импорт модулей fs и path для работы с файловой системой
Создай переменную contactsPath и запиши в нее путь к файле contacts.json. Для составления пути ипользуй методы модуля path.
Добавь функции для работы с коллекцией контактов. В функциях используй модуль fs и его методы readFile() и writeFile()
Сделай экспорт созданных функций через module.exports
// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

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
  
  Шаг 3
Сделай импорт модуля contacts.js в файле index.js и проверь работоспособность функций для работы с контактами.

  Шаг 4
В файле index.js импортируется пакет yargs для удобного парса аргументов командной строки. Используй готовую функцию invokeAction() которая получает тип выполняемого действия и необходимые аргументы. Функция вызывает соответствующий метод из файла contacts.js передавая ему необходимые аргументы.

// index.js
const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
