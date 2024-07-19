import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// 자동 로그인 방지
provider.setCustomParameters({
    prompt: 'select_account'
});

// 구글 로그인 function
export async function googleLogin() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }
}

// 구글 로그아웃 function
export async function googleLogOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
}

// 로그인 시 새로고침해도 로그인을 계속 유지
export function onUserState(callback) {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const updateUser = await adminUser(user);
                callback(updateUser);
            } catch (error) {
                console.error(error);
            }
        } else {
            callback(null);
        }
    });
}

// admin user 구분
async function adminUser(user) {
    try {
        const q = query(collection(firestore, "admin"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        const isAdmin = !querySnapshot.empty;
        return { ...user, isAdmin };
    } catch (error) {
        console.error(error);
    }
}

// 포트폴리오 정보(사진, 제목, 글) 업로드
export async function addPortfolioData(title, tag, photo, text1, table, text2) {
    try {
        await addDoc(collection(firestore, "portfolio_data"), {
            title,
            tag,
            photo,
            text1,
            table,
            text2
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// 파일 업로드 function
export async function uploadFile(file) {
    const storageReference = storageRef(storage, `images/${uuid()}`);
    await uploadBytes(storageReference, file);
    return getDownloadURL(storageReference);
}

// 포트폴리오 정보 가져오기
export async function getPortfolioData() {
    const querySnapshot = await getDocs(collection(firestore, "portfolio_data"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
}
