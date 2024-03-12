// targeting the parent element
const noteContainer = document.querySelector('.note__container');
const noteModal = document.querySelector(".note__modal__body");
// global 
let globalStore = [];

// -----------------------------------------------------
// a function for creating a new card
const newCard = ({
 id,
 imageUrl,
 noteTitle,
 noteType,
 noteDescription
}) => `<div class="col-lg-4 col-md-4 col-sm-6" id=${id}>
<div class="card m-2 p-0">
  <div class="card-header bg-danger text-light p-0">
  <img
  src=${imageUrl}
  class="img-fluid text-light" alt="${noteTitle}">
  </div>
  
 
  <div class="card-body bg-light">
    <h5 class="card-title text-primary py-2 border-bottom">${noteTitle}</h5>
    <p class="card-text">${noteDescription}</p>
    <span class="badge bg-danger p-2">${noteType}</span>
  </div>
  <div class="card-footer text-muted">
  <button type="button" class="btn btn-outline-success mr-2" id="${id}" onclick="editCard.apply(this, arguments)"><i class="fas fa-pencil-alt" id="${id}" onclick="editCard.apply(this, arguments)"></i>
  </button>
  <button type="button" class="btn btn-outline-danger" id="${id}" onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash-alt" id="${id}" onclick="deleteCard.apply(this, arguments)"></i>
  </button>
    <button type="button" id="${id}" class="btn btn-outline-primary float-end" data-toggle="modal"
    data-target="#shownote" onclick="openNote.apply(this, arguments)">View</button>
  </div>
</div>
</div>`;

// --------------------------------------------------
const loadData = () => {

 // access localstorage
 // localStorage.getItem("note") ===  localStorage.note
 const getInitialData = localStorage.note; // if null, then
 if (!getInitialData) return;

 // convert stringified-object to object
 const {
  cards
 } = JSON.parse(getInitialData);

 // map around the array to generate HTML card and inject it to DOM
 cards.map((noteObject) => {
  const createNewnote = newCard(noteObject);
  noteContainer.insertAdjacentHTML("beforeend", createNewnote);
  globalStore.push(noteObject);
 });
};

const updateLocalStorage = () => {
 localStorage.setItem("note", JSON.stringify({
  cards: globalStore
 }))
}

//  function for save changes----------------------------------------

// create a function which will trigerred on clicking on save changes in the modal
const saveChanges = () => {
 const noteData = {
  id: `${Date.now()}`, // generating a unique id for each card
  imageUrl: document.getElementById('imageurl').value,
  noteTitle: document.getElementById('title').value,
  noteType: document.getElementById('type').value,
  noteDescription: document.getElementById('description').value
 };

 const createNewnote = newCard(noteData);
 noteContainer.insertAdjacentHTML("beforeend", createNewnote);

 globalStore.push(noteData);

 //  API  -> add t localStorage
 updateLocalStorage()
 // provide some unique identification, i.e key, here key is "note", 

};

// function for deleting a card -------------------

const deleteCard = (event) => {
 // id
 event = window.event;
 const targetID = event.target.id;
 const tagname = event.target.tagName; // BUTTON OR I

 // assign the same id of card to button also

 // search the globalStore, remove the object which matches with the id
 globalStore = globalStore.filter((noteObject) => noteObject.id !== targetID);

 updateLocalStorage();

 // access DOM to remove them

 if (tagname === "BUTTON") {
  // task__container
  return noteContainer.removeChild(
   event.target.parentNode.parentNode.parentNode // col-lg-4
  );
 }

 // else
 // note__container
 return noteContainer.removeChild(
  event.target.parentNode.parentNode.parentNode.parentNode // col-lg-4
 );
};

// function for editing
const editCard = (event) => {

 event = window.event;
 const targetID = event.target.id;
 const tagname = event.target.tagName;

 let parentElement;
 if (tagname === "BUTTON") {
  parentElement = event.target.parentNode.parentNode;

 } else {
  parentElement = event.target.parentNode.parentNode.parentNode;
 }

 let noteTitle = parentElement.childNodes[5].childNodes[1];
 let noteDescription = parentElement.childNodes[5].childNodes[3];
 let noteType = parentElement.childNodes[5].childNodes[5];
 let submitBtn = parentElement.childNodes[7].childNodes[1];
 // console.log(taskTitle, taskDescription, taskType);

 // setAttributes
 noteTitle.setAttribute("contenteditable", "true");

 noteDescription.setAttribute("contenteditable", "true");
 noteType.setAttribute("contenteditable", "true");
 submitBtn.setAttribute(
  "onclick",
  "saveEditChanges.apply(this, arguments)"
 );
 submitBtn.innerHTML = "Save Changes";

 //  modal removed
 submitBtn.removeAttribute("data-toggle");
 submitBtn.removeAttribute("data-target");

}

const saveEditChanges = (event) => {

 event = window.event;
 const targetID = event.target.id;
 const tagname = event.target.tagName;

 let parentElement;
 if (tagname === "BUTTON") {
  parentElement = event.target.parentNode.parentNode;

 } else {
  parentElement = event.target.parentNode.parentNode.parentNode;
 }

 let noteTitle = parentElement.childNodes[5].childNodes[1];
 let noteDescription = parentElement.childNodes[5].childNodes[3];
 let noteType = parentElement.childNodes[5].childNodes[5];
 let submitBtn = parentElement.childNodes[7].childNodes[1];

 const updatedData = {

  noteTitle: noteTitle.innerHTML,
  noteDescription: noteDescription.innerHTML,
  noteType: noteType.innerHTML,
 }

 // console.log(updatedData);
 globalStore = globalStore.map((note) => {
  if (note.id === targetID) {
   return {
    id: note.id,
    imageUrl: note.imageUrl,
    noteTitle: updatedData.noteTitle,
    noteType: updatedData.noteType,
    noteDescription: updatedData.noteDescription,
   };
  }
  return note; // important statement
 });

 updateLocalStorage();

 noteTitle.setAttribute("contenteditable", "false");

 noteDescription.setAttribute("contenteditable", "false");
 noteType.setAttribute("contenteditable", "false");

 // modal added
 submitBtn.setAttribute("onclick", "openNote.apply(this, arguments)");
 submitBtn.setAttribute("data-toggle", "modal");
 submitBtn.setAttribute("data-target", "#shownote");

 submitBtn.innerHTML = "Open note";

}

const htmlModalContent = ({
 id,
 noteTitle,
 noteDescription,
 imageUrl,
 noteType
}) => {
 const date = new Date(parseInt(id));
 return ` <div id=${id}>
   <img
   src=${imageUrl}
   alt="bg image"
   class="img-fluid place__holder__image mb-3 p-4"
   />
   <div class="text-sm text-muted ">Created on ${date.toDateString()}</div>
   <h2 class="my-5 mt-5" style="display:inline;">${noteTitle}</h2>
   <span class="badge bg-primary">${noteType}</span>
   <p class="lead mt-2">
   ${noteDescription}
   </p></div>`;
};

const openNote = (event) => {

 event = window.event;
 const targetID = event.target.id;

 const getnote = globalStore.filter(({
  id
 }) => id === targetID);
 // console.log(getnote[0]);
 noteModal.innerHTML = htmlModalContent(getnote[0]);
};