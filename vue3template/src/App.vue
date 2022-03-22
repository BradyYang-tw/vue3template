<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Expand,
  Fold,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";
const isCollapse = ref(true);
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };

// 初始化頁面
const isSider = ref(true);
const initPage = () => {
  const screenWidth = document.body.clientWidth;
  if (screenWidth < 1000) {
    isSider.value = false;
    isCollapse.value = true;
  } else if (screenWidth >= 1000 && screenWidth < 1200) {
    isSider.value = false;
    isCollapse.value = true;
  } else {
    isSider.value = true;
    isCollapse.value = false;
  }
};
initPage();
</script>

<template>
  <el-container
    class="layout-container-demo"
    style="height: 100%; border: 1px solid #eee"
  >
    <el-aside
      height="100%"
      width="auto"
      style="background-color: rgb(238, 241, 246)"
    >
      <div>
        <img
          alt
          class="logoimg"
          src="https://www.beclass.com/share/201712/213c9ce5a31e7f3ae6e31130r.jpg"
        />
        <h2 v-if="isSider" class="tit-text" style="color: black">
          Brady股利績效系統
        </h2>
      </div>

      <!-- <el-scrollbar> -->
      <el-menu
        router
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/about"
          ><el-icon><location /></el-icon> <span>儀錶板</span>
        </el-menu-item>
        <el-menu-item index="/information"
          ><el-icon><location /></el-icon><span>股利查詢</span>
        </el-menu-item>
      </el-menu>
      <!-- </el-scrollbar> -->
    </el-aside>
    <el-container>
      <!-- <transition
        :duration="{ enter: 800, leave: 100 }"
        mode="out-in"
        name="el-fade-in-linear"
      >
        <div
          style="width:20px"
        > -->
      <el-header style="padding: 0 16px">
        <el-row>
          <el-col :xs="2" :lg="1" :md="1" :sm="1" :xl="1" style="z-index: 100">
            <el-button
              :icon="isCollapse ? Fold : Expand"
              @click="
                isCollapse = !isCollapse;
                isSider = !isSider;
              "
              size="large"
            />
          </el-col>

          <el-col :xs="10" :lg="14" :md="14" :sm="9" :xl="14">
            股利績效
          </el-col>
          <el-col :xs="12" :lg="9" :md="9" :sm="14" :xl="9">
            <div class="toolbar">
              <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px"
                  ><setting
                /></el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>View</el-dropdown-item>
                    <el-dropdown-item>Add</el-dropdown-item>
                    <el-dropdown-item>Delete</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>Tom</span>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main style="background-color: pink">
        <el-scrollbar>
          <RouterView />
        </el-scrollbar>
      </el-main>
      <!-- </div>
      </transition> -->
    </el-container>

    <!-- <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container> -->
  </el-container>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/information">Information</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style>
/* @import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

/* 將畫面稱到100% */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 來源於index.html的 #app */
#app {
  height: 100%;
}
/***********************/
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.layout-container-demo .el-header {
  position: relative;
  height: 100%;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
} */

.logoimg {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  background: #fff;
  border-radius: 80%;
  padding: 3px;
}
.tit-text {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  vertical-align: middle;
  padding-left: 10px;
}
</style>
