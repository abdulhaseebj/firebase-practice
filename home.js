
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const userName = document.querySelector('.name')
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
        const q = query(collection(db, 'users'), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            userName.innerHTML = doc.data().name
        });
    } else {
        window.location = 'index.html'
    }
});


const title 

const logout = document.querySelector('.logOut')

logout.addEventListener('click', (() => {
    signOut(auth).then(() => {
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error);
    });
}))



try {
  const docRef = await addDoc(collection(db, "todo"), {
   
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

