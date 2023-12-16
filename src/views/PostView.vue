<template>
    <v-container>
        <h3>投稿</h3>
        <v-card>
            <v-card-actions>
                <v-col>
                    <v-text-field label="タイトル" type="text"></v-text-field>
                    <v-text-field label="画像" type="file"></v-text-field>
                    <v-btn>送信</v-btn>
                </v-col>
            </v-card-actions>
        </v-card>
    </v-container>

    <v-container>
        <h1>投稿されたごはんたち</h1>
            <div class="dinner">
                <v-sheet>
                    <v-row no-gutters>
                        <v-col
                        v-for="n in 9"
                        :key="n"
                        cols="4">
                        <v-card tile="true">
                            <div class="title">ナンカレー</div>
                            <v-img src="@/assets/DSC_3089.jpg" aspect-ratio="1"></v-img>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-sheet>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "PostView"
}
</script>

<style lang="scss">
.dinner{
    margin: 25px 10px;
    .v-col{
        position: relative;
    }
    .title{
        position: absolute;
        color: rgb(0, 0, 0);
        z-index: 1;
        bottom: 0;
        right: 0;
    }
    .title::before{
        content:"";
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.5);
        display: inline-block;
        width: 100%;
        height: 1.6rem;
        z-index: -1;
    }
    img{
        object-fit: cover;
    }
}
</style>