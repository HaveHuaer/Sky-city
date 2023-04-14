<template>
    <div class="Heard_tit">
       <div class="ImgBox">
            <img src="http://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg" alt="">
       </div>
       <ul class="Tab_nav">
            <li class="Tab_li" v-for="(item,index) in List" :key="index" @click="LinkClick(index)">
                <router-link :to="item.key" >{{item.name }}</router-link>
            </li>
       </ul>
    </div>
</template>

<script setup>
    const List = [
        {
            key:"/",
            name:"首页"
        },
        {
            key:"/explore",
            name:"探索"
        },
        {
            key:"/label",
            name:"标签"
        },
        {
            key:"/phon",
            name:"摄影师"
        },
        {
            key:"/conphon",
            name:"签约摄影师招募"
        },
        {
            key:"/hot",
            name:"热门活动"
        },
        {
            key:"/skycity",
            name:"天空之城 8 周年影像大赛"
        },
    ]
    
    const LinkClick = function(index){
        console.log(index);
    }
  
</script>
<style scoped>
    .Heard_tit{
        width: 100%;
        background-color: black;
        padding: 0 2rem;
        box-sizing: border-box;
        display: flex;
    }
    .ImgBox{
        width: 97px;
        height: 60px;
    }
    .ImgBox img{
        width: 100%;
        height: 100%;
    }
    .Tab_nav{
        width: 1025px;
        height: 60px;
        line-height: 60px;
        padding: 0 10.4rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
    }
    .Tab_li a{
        text-decoration: none;
        color: #ccc;
        font-family: none;
        font-weight: bold;
    }
</style>