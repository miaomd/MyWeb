<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表展示</span>
        <el-button style="float: right; padding: 3px 0" type="text"  @click="dialogVisible = true">
          数据添加</el-button>
      </div>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item v-for="v in items" :key="v.id" :title="v.title" :name="v.id">
          <div v-for="(c,i) in v.content" :key="i">{{c}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!-- 会话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确定要添加数据吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from '@/api'

export default {
  data(){
    return {
      activeNames:'1',
      dialogVisible:false, //会话框初始化
      items:[]
    }
  },
  methods:{
    getItmes(){
      axios.get('/get_wms_list').then(res=>{
        console.log(res)
         let {code,result} = res.data;
         if(code=='200'){
           this.items = result;
           this.activeNames = this.items[2].id || 1;
         }
      }).catch(err=>{
        console.log(err)
      })
    },
    submit(){
      this.dialogVisible = false;
      let _id = this.items.length>0?Math.max(...this.items.map(v=>v.id))+1:1;
      this.items.push({
          id:_id,
          title:`这是新添加的数据 == ${_id}`,
          content:[
              '这是新添加的数据'
          ]
        })
    }
  },
  mounted(){
    this.getItmes();
  }
}
</script>
