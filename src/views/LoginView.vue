<template>
    <v-main>
        <v-container>
            <v-card max-width="500" class="mx-auto">
                <v-card-actions>
                    <v-col>
                        <v-text-field :label="constant.email" type="email">
                        </v-text-field>

                        <v-text-field :label="constant.password" :type="show ? 'text' : 'password'"
                            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="show = !show">
                        </v-text-field>

                        <v-btn color="primary" variant="tnal" @click="signin">{{ constant.signin }}</v-btn>
                        <v-btn color="primary" variant="tnal" @click="createAccount">{{ constant.signup }}</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>

<style lang="scss"></style>

<script>
import {
    getAuth,                        // 認証
    onAuthStateChanged,             // ユーザーのログイン状態が変わる時呼び出される
    signInWithEmailAndPassword,     // メールとパスワードでサインイン
    createUserWithEmailAndPassword, // メールとパスワードで新規登録
} from "firebase/auth";
// import { connectFirestoreEmulator } from "firebase/firestore";

const messages = {
    email: "メールアドレス",
    password: "パスワード",
    signin: "サインイン",
    signup: "新規登録",
    username: "ユーザー名",
    signout: "サインアウト"
}

export default {
    name: "LoginView",
    data: () => ({
        email: "",
        password: "",
        currentUser: null,
        constant: messages,
        show: false
    }),
    methods: {
        signin() {
            if (this.email == "" || this.password == "") return;
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // 認証成功
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    // 認証失敗
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })
        },
        createAccount() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user != null) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        })
    }
}
</script>