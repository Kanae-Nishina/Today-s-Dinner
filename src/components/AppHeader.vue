<template>
    <nav v-if="currentUser == null">
        <router-link to="/">ホーム</router-link> |
        <router-link to="/about">めしログ！って？</router-link> |
        <router-link to="/signin">ログイン</router-link> |
        <router-link to="/signup">新規登録</router-link>
    </nav>
    <nav v-else>
        <router-link to="/post">投稿一覧</router-link> |
        <router-link to="/user/setting">設定</router-link> |
        <router-link to="/signin" @click="signout">ログアウト</router-link>
    </nav>
</template>

<script>
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth"

export default {
    name: "AppHeader",
    data: () => ({
        currentUser: null,
    }),
    emits: [
        "signout"
    ],
    methods: {
        signout(){
            const auth = getAuth();
            signOut(auth).then(() => {
            }).catch((error) => {
                console.log(error.code + "\n" + error.message);
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