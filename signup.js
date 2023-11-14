import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const name = document.querySelector('.name')
const form = document.querySelector('.form')
const email = document.querySelector('.email')
const password = document.querySelector('.password')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            addDoc(collection(db, "users"), {
                name: name.value,
                email: email.value,
                uid: user.uid,
            }).then((res) => {
                console.log(res);
                window.location = 'home.html'
            }).catch((err) => {
                console.log(err);
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})


// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             addDoc(collection(db, 'user'), {
//                 name: name.value,
//                 email: email.value,
//                 uid: user.uid
//             }).then((res) => {
//                 console.log(res);
//                 window.location = 'home.html'
//             }).catch((err) => {
//                 console.log(err);
//             })
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage);
//         });
// })
