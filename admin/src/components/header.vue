<template>
  <div class="header_container">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown @command="handleCommand" menu-align='start'>
			<img :src="avatar" class="avatar">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="logout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
  </div>
</template>

<script>
import { logout } from '@/service/api';
export default {
  data () {
    return {
      avatar: 'admin/src/assets/avatar.png'
    };
  },
  methods: {
    async handleCommand (command) {
      if (command === 'home') {
        this.$router.push('/manage');
      } else if (command === 'logout') {
        const res = await logout();
        if (res.status === 200) {
          this.$message({
            type: 'success',
            message: '登出成功'
          });
          this.$router.push('/');
        } else {
          this.$message({
            type: 'error',
            message: res.message
          });
        }
      }
    }
  }
};
</script>

<style lang="less">
@import '../styles/_mixin.less';
.header_container{
  background-color: #EFF2F7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.avatar{
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
  cursor: pointer;
}
.el-dropdown-menu__item{
  text-align: center;
}
</style>

