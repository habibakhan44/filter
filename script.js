// const contacts=[
//     {
//         id:1,
//         name: "Asfiya ",
//         gmail:"asfiyarudbar@gmail.com",
        
//     },

//     {
//         id:2,
//         name: "Sarah",
//         gmail:"sarahkhan55@gmail.com",

//     },
//    {
  
//     id:3,
//         name: "Habiba ",
//         gmail:"habibatauqeer591@gmail.com",
//    },
// ];


// function renderContacts(contacts){
// const contactList=document.getElementById("contact-List");
// contactList.innerHTML = "";
// for (const contact of contacts) {
//     const contactDiv = document.createElement("div");
//     contactDiv.className = ".contact";
//     contactDiv.innerHTML= `
//     <b>${contact.name}</b>
//     <p>${contact.gmail}</p>
//     `;

//     contactList.appendChild(contactDiv);
// }
// }

// function filterContacts() {
//     const filterInput = document.getElementById("filter-input").value.toLowerCase();
//     const filterContacts = contacts.filter((contacts)=>contacts.name.toLowerCase().includes(filterInput));
//     renderContacts(filterContacts);
// }

// renderContacts(contacts);

// document.getElementById('filter-button').addEventListener('click', filterContacts);



const contacts = [
    { id: 1, name: "Asfiya", gmail: "asfiyarudbar@gmail.com" },
    { id: 2, name: "Sarah", gmail: "sarahkhan55@gmail.com" },
    { id: 3, name: "Habiba", gmail: "habibatauqeer591@gmail.com" },
];

function renderContacts(contacts) {
    const contactList = document.getElementById("contact-List");
    contactList.innerHTML = "";
    for (const contact of contacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact"; // Corrected class name
        contactDiv.innerHTML = `
            <b>${contact.name}</b>
            <p>${contact.gmail}</p>
        `;
        contactList.appendChild(contactDiv);
    }
}

function filterContacts() {
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(filterInput)
    );
    renderContacts(filteredContacts);
}

renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);
document.getElementById('filter-input').addEventListener('input', filterContacts); // Real-time filtering





// Filter , Map , Reduce
// const num = [40,41,42,43,44,45,46,47,48,49,50];
// console.log(num.filter((num) => num > 44));
// console.log(num.map(num => num * 3));

// const { log } = require("surge/lib/util/helpers");

// const contacts = [
//   {
//     id: 1,
//     name: "Ifra",
//     gmail: "ifrashamim29@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Nisha",
//     gmail: "nishashamim15@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Tehreem",
//     gmail: "tehreemshamim14@gmail.com",
//   },
// ];

// function renderContacts(contacts) {
//   const contactList = document.getElementById("contact-List");
//   contactList.innerHTML = "";
//   for (const contact of contacts) {
//     const contactDiv = document.createElement("div");
//     contactDiv.className = "contact";
//     contactDiv.innerHTML = `
//     <b>${contact.name}</b>
//     <p>${contact.gmail}</p>
//     `;
//     contactList.appendChild(contactDiv);
//   }
// }
// function filterContacts() {
//   const filterInput = document
//     .getElementById("filter-input")
//     .value.toLowerCase();
//   const filterContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filterInput)
//   );
//   renderContacts(filterContacts);
// }
// renderContacts(contacts);
// document.getElementById('filter-button').addEventListener('click', filterContacts);

// function sum(a,b){
//   let sum = a + b;
//   console.log(sum);
// }
// sum(2,7);
// sum(11,8);