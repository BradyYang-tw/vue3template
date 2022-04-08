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
  HomeFilled,
} from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };

// 三种窗口适配
const isCollapse = ref(false);
const isSider = ref(true);
const isMobile = ref(false);

// 初始化頁面layout
const initPage = () => {
  const screenWidth = document.body.clientWidth;
  if (screenWidth < 1000) {
    isMobile.value = true;
    isSider.value = false;
    isCollapse.value = true;
  } else if (screenWidth >= 1000 && screenWidth < 1200) {
    isMobile.value = false;
    isSider.value = false;
    isCollapse.value = true;
  } else {
    isMobile.value = false;
    isSider.value = true;
    isCollapse.value = false;
  }
};
initPage();

onMounted(() => {
  // RWD：The resize event fires when the document view (window) has been resized.
  window.onresize = () => {
    return (() => {
      initPage();
    })();
  };
});
</script>

<template>
  <el-container
    :class="[isSider ? 'openside' : 'hideside', isMobile ? 'mobile' : '']"
  >
    <el-aside class="main-aside">
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

      <el-menu
        router
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/about"
          ><el-icon><home-filled /></el-icon> <span>儀錶板</span>
        </el-menu-item>
        <el-menu-item index="/information"
          ><el-icon><location /></el-icon><span>股利查詢</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container
      :style="{
        width: `calc(100% - ${
          isMobile ? '0px' : isCollapse ? '54px' : '220px'
        })`,
      }"
    >
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
    </el-container>
  </el-container>
</template>

<style lang="scss">
@import '@/style/base.scss' 


</style>
