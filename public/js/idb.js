// creates a variable to hold the database connection
let db;

// The request establishes a connection to IndexedDB database called 'Budget_Tracker' and sets it to version 1
const request = indexedDB.open('Budget_Tracker', 1);

// This shows if the database version changes
request.onupgradeneeded = function(event) {
    const db = event.target.result;

     // This creates an object store called `transaction`, this sets it to have an auto incrementing primary key
    db.createObjectStore('transaction', { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.online) {
        uploadTransTotal();
    }
};

request.onerror = function (event) {
    console.log(event.target.errorCode)
}