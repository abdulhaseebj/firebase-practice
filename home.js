// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// const auth = getAuth();
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
// import { collection, addDoc, getDocs, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
       window.location = 'index.html'
    }
});

const logout = document.querySelector('.logOut')

logout.addEventListener('click', (() => {
    signOut(auth).then(() => {
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error);
    });
}))
// onAuthStateChanged(auth, (user) => {
//     if (user) {

//         const uid = user.uid;
//         console.log(uid);

//     } else {
//         window.location = 'login.html'
//     }
// });

// // signout function
// const btn = document.querySelector('.logOut')

// btn.addEventListener('click', () => {
//     signOut(auth).then(() => {
//         console.log('signout succses fil');
//         window.location = 'index.html'
//     }).catch((error) => {
//         console.log('error ===>', error);

//     })

// });
