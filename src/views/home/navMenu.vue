<template>
  <el-aside width="200px" class="aside">
     <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo" router>
        <NavItem  v-for="v in items" :key="v.url" :item="v" :basePath="v.url" />
     </el-menu>
  </el-aside>
</template>

<script>
import NavItem from './NavItem'  //子组件
export default {
  data(){
    return {
      items:[
        {name:'首页',url:'/index'},
        {name:'数据管理',url:'/stats'},
        {
          name:'信息管理',
          url:'/wms',
          child:[
            {name:'列表管理',url:'/wms/list'}
            ]
        },
        {
          name:'用户管理',
          url:'/user',
          child:[
            {name:'用户统计',url:'/user/stats'},
            {name:'角色统计',url:'/user/role'},
          ]
        }
      ]
    }
  },
  components:{NavItem},
  methods:{
    
  }
}
</script>


