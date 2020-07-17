<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <div class="title_name">
          <img src="../assets/logo.png" />
        </div>
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            router="true"

          >
            <el-menu-item index="/familyer">
              <i class="el-icon-document"></i>
              <span slot="title">助理团</span>
            </el-menu-item>

            <el-submenu index="/hanxuan">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">寒宣活动</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/hanxuan/index">报名队伍列表</el-menu-item>
                <el-menu-item index="/hanxuan/index2">活动评定</el-menu-item>

              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="/permission">
              <i class="el-icon-setting"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false"
              ><i class="el-icon-s-operation"></i
            ></el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      // image:require('./assets/logo.png')
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
}
.title_name {
  display: flex;
  justify-content: center;
}
.title_name img {
  width: 120px;
  height: 120px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
