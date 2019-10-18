<template>
<div>
    <div class="top">
        <img class="logo_img" src="../../../static/images/home-logo.png" alt="">
        <div class="user">
            <div class="user_left">
                <div class="all_news">
                    <div class="look_all_news">
                        <span>
                            <router-link to="../maintenance/news">查看所有通知</router-link>
                        </span>
                    </div>
                </div>
            </div>
            <div class="user_right">
                <div class="user_photo">
                    <router-link to="../maintenance/user_manage"></router-link>
                </div>
                <div class="user_functions">
                    <p>欢迎zsz</p>
                    <p>
                        <span>修改密码</span>
                        <span>退出</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="left">
        <ul>
            <li>
                <span>
                    <router-link to="../maintenance/home">主页</router-link>
                </span>
            </li>
            <li>
                <span>系统管理</span>
                <ul>
                    <li>
                        <span>
                            <router-link to="../maintenance/node_management">节点管理</router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <router-link to="../maintenance/black">黑名单</router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <router-link to="../maintenance/white">白名单</router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <router-link to="../maintenance/algorithm">共识算法</router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <router-link to="../maintenance/encyclopedias">区块链百科</router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <router-link to="../maintenance/development">开发手册</router-link>
                        </span>
                    </li>

                </ul>
            </li>
            <li>
                <span>
                    <router-link to="../maintenance/link">业务链管理</router-link>
                </span>
            </li>
            <li>
                <span>
                    <router-link to="../maintenance/work">业务管理</router-link>
                </span>
            </li>
        </ul>
    </div>

    <div class="right">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: "nav_list",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.top {
    width: 100%;
    height: 62px;
    background: #323232;
    box-sizing: border-box;
    border-bottom: 5px solid #70EDEA;
    box-shadow: 0 2px 2px #999;
    z-index: 1000;
}

.top .logo_img {
    width: 150px;
    position: relative;
    float: left;
    display: block;
    top: 50%;
    transform: translate(25px, -50%);
}

.top .user {
    float: right;
    width: 200px;
    height: 100%;
    margin-right: 25px;
}

.top .user .user_left {
    position: relative;
    float: left;
    width: 34px;
    height: 34px;
    border: 1px solid #565656;
    border-radius: 5px;
    top: 50%;
    transform: translate(0px, -50%);
    background: url("../../../static/images/alert-2.png") no-repeat center;
    cursor: pointer;
}

.top .user .user_left .all_news {
    position: absolute;
    width: 222px;
    height: 46px;
    background: #323232;
    top: 33px;
    left: -189px;
    border: 1px solid #565656;
    border-radius: 8px 0 8px 8px;
    cursor: auto;
}

.top .user .user_left .all_news .look_all_news {
    box-sizing: border-box;
    position: absolute;
    width: 200px;
    height: 24px;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    cursor: pointer;
    font-size: 12px;
    line-height: 24px;
    padding-left: 10px;
}

.top .user .user_left .all_news .look_all_news a {
    color: #323232;
    text-decoration: none;
}

.top .user .user_left .all_news .look_all_news:hover {
    background: #D5D5D5;
}

.top .user .user_right {
    position: relative;
    float: right;
    width: 150px;
    height: 44px;
    box-shadow: 0 0 1px 1px #222;
    border-radius: 5px;
    background: #2B2B2B;
    top: 50%;
    transform: translate(0px, -50%);
}

.top .user .user_right .user_photo {
    position: relative;
    float: left;
    top: 50%;
    transform: translate(5px, -50%);
    width: 28px;
    height: 28px;
    background: #fff;
}

.top .user .user_right .user_photo a {
    display: block;
    width: 100%;
    height: 100%;
}

.top .user .user_right .user_functions {
    float: right;
    width: 80px;
}

.top .user .user_right .user_functions p {
    margin: 0;
    font-size: 12px;
    line-height: 22px;
}

.top .user .user_right .user_functions p:nth-of-type(1) {
    color: #62EDCB;
}

.top .user .user_right .user_functions p:nth-of-type(2) {
    color: #fff;
}

.top .user .user_right .user_functions p:nth-of-type(2) span {
    cursor: pointer;
}

.top .user .user_right .user_functions p:nth-of-type(2) span:hover {
    text-decoration: underline;
}

.left {
    box-sizing: border-box;
    position: absolute;
    width: 200px;
    background: #323232;
    border-right: 15px solid #2A2A2A;
    height: 100%;
    top: 0;
    z-index: -1;
}

.left>ul {
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    padding-top: 80px;
    padding-left: 0;
    width: 100%;
    height: 100%;
}

.left>ul a {
    box-sizing: border-box;
    display: block;
    color: #fff;
    text-decoration: none;
    padding-left: 45px;
    width: 100%;
    height: 100%;
    /* background: #f2f; */
}

.left>ul .router-link-active {
    color: #70EDEA;
}

.left>ul>li {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    float: left;
    color: #fff;
    border-top: 1px solid #535755;
    border-bottom: 1px solid #18191D;
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 44px;
    cursor: pointer;
    /* box-shadow: -1px 1px 1px 1px #bbb; */
}

.left>ul>li:nth-of-type(1) {
    background: url("../../../static/images/home.png") no-repeat 15px 10px;
    border-top: 1px solid #18191D;
}

.left>ul>li:nth-of-type(2) {
    padding-left: 45px;
    height: 214px;
    background: url("../../../static/images/cog.png") no-repeat 15px 10px;
    transition: 0.3s;
    overflow: hidden;
}

.left>ul>li:nth-of-type(2) a {
    padding-left: 5px;
}

.left>ul>li:nth-of-type(3) {
    background: url("../../../static/images/link-2.png") no-repeat 15px 10px;
}

.left>ul>li:nth-of-type(4) {
    background: url("../../../static/images/applications.png") no-repeat 15px 10px;
}

.left>ul>li:nth-of-type(2) ul {
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: block;
}

.left>ul>li:nth-of-type(2) ul li {
    box-sizing: border-box;
    transform: translate(-45px, 0);
    padding-left: 40px;
    width: 185px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
}

.left>ul>li:nth-of-type(2) ul li:hover {
    background: #2A2A2A;
}

.right {
    position: absolute;
    margin-left: 200px;
}

/* .left>ul>li:nth-of-type(2):hover{
        height: 44px;
    }
    .left>ul>li:nth-of-type(2):hover ul{
        display: none;
    } */
</style>
