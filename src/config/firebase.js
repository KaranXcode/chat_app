
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyA_mo2DqgK1Ta-JHCY6p-E4dGZU5Y8m2x4",
  authDomain: "chatapp2-b87fc.firebaseapp.com",
  projectId: "chatapp2-b87fc",
  storageBucket: "chatapp2-b87fc.appspot.com",
  messagingSenderId: "208218055902",
  appId: "1:208218055902:web:df0fadaa738c3ad553ce4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: " Hey,i am using chat app",
            lastseen:Date.now()
        })
        await setDoc(doc(db, "chats", user.uid), {
            chatdata:[]
        })
    } catch (error) {
        console.error(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
         console.error(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    
}
export { signup ,login,logout,auth,db};
