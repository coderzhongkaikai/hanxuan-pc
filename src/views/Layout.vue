<template>
  <div>
    <el-container>
      <el-aside width="auto">
          <div class="title_name" style="padding:20px" v-if="!isCollapse">
          <img  src="../assets/logo.png" />
          </div>
        <el-col :span="12">
       
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            router="true"
            style="height:100vh;border-right: none;"
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
          <el-radio-group v-model="isCollapse">
              <div class="toggleSideBar" @click="toggleSideBar">
              <i class="el-icon-s-operation"            
              style="transition: transform .5s;"
              :class="isCollapse ? 'rotated' : 'rotate'"></i>
              </div>
            <!-- <el-radio-button :label="false">
              <i class="el-icon-s-operation"></i>
            </el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button> -->
          </el-radio-group>
        </el-header>
          <div id="tags-view-container" class="tags-view-container">

           </div>

        <el-main class="main">
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
    toggleSideBar(){
      this.isCollapse=!this.isCollapse
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
  
}
.title_name,img{
  width: 100px;
  height: 100px;
}
.left_layout{
  height: 100vh;
  position: relative;
}
.rotated {
  transform: rotate(90deg);
}
.rotate {
  transform: rotate(0deg);
}
.main{
  border:solid 1px #e6e6e6;

}
.el-header {
    border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.toggleSideBar {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
  font-size: 25px;
  color: gray;
}

.toggleSideBar.is-active {
  transform: rotate(180deg);
}
</style>
