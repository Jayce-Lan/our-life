<template>
  <div id="app">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">导航栏展开</el-radio-button>
      <el-radio-button :label="true">导航栏收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="11" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
      <el-menu-item index="1" route="/">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">相册</span>
      </el-menu-item>
      <el-menu-item index="2" route="/about">
        <i class="el-icon-thumb"></i>
        <span slot="title">关于霸天</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-paperclip"></i>
        <span slot="title">版本说明</span>
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
