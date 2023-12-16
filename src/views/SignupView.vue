<template>
    <v-main>
        <v-container>
            <h1>新規登録</h1>
            <v-card max-width="500" class="mx-auto">
                <v-card-actions>
                    <v-col>
                        <p v-if="error_message != null" class="error">{{ error_message }}</p>
                        <v-text-field :label="constant.email" type="email" v-model="email">
                        </v-text-field>

                        <v-text-field :label="constant.password" :type="show ? 'text' : 'password'"
                            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="show = !show"
                            v-model="password">
                        </v-text-field>

                        <v-btn color="primary" variant="tnal" @click="createAccount">{{ constant.signup }}</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>

<style lang="scss">
.error{
    color: red;
}
</style>

<script>
import {
    getAuth,                        // 認証
    createUserWithEmailAndPassword, // メールとパスワードで新規登録
} from "firebase/auth";

const messages = {
    email: "メールアドレス",
    password: "パスワード",
    signup: "新規登録",
    username: "ユーザー名",
}

const error_code = [
    "auth/email-already-in-use",
    "auth/invalid-email"
]

const error_messages = {
    "auth/email-already-in-use" : "登録済みのアカウントです",
    "auth/invalid-email" : "メールアドレスを入力してください"
}

export default {
    name: "SignupView",
    data: () => ({
        email: "",
        password: "",
        constant: messages,
        show: false,
        error_message: null
    }),
    methods: {
        createAccount() {
            if (this.email == "" || this.password == "") return;
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$router.push("/post");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errormsg = "";
                    if(errorCode == error_code[0]
                        || errorCode == error_code[1]){
                        errormsg = error_messages[errorCode];
                    }else{
                        errormsg = "予期せぬエラーが発生しました"
                    }
                    this.error_message = errormsg;
                })
        }
    }
}
</script>