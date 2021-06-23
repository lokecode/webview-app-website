const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('appName');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');

  const database = firebase.firestore();
  const usersCollection = database.collection('webapps');
  

  addBtn.addEventListener('click', e => {
    e.preventDefault();
    const ID = usersCollection.doc(userId.value).set({
      url: firstName.value,
      url_pic: lastName.value,
      app_name: appName.value,
    })
    .then(()=>{
      console.log('Data has been saved successfully !')})
    .catch(error => {
      console.error(error)
    });
  });  
  