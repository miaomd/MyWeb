<template>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        sortable
        prop="date"
        label="日期"
        width="180"
        :filters="filterDate"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterHandler"
        filter-placement="bottom-end">
        <template slot-scope="{row}">
          <el-tag
            :type="row.tag === '家' ? 'danger' : 'success'"
            disable-transitions>{{row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import axios from '@/api'

export default {
  data(){
    return {
      tableData:[],
      filterDate:[], //筛选的动态数据
    }
  },
  methods:{
    getTable(){
      axios.get(`/tablist`).then(res=>{
        console.log(res);
        let {code,result} = res.data;
        if(code=='200'){
          this.tableData = result;
          this.filterDate = this.tableData.map(item=>({text:item.date,value:item.date}));
        };
      },err=>{
        console.log(err)
      })
    },
    filterHandler(value, row, column) {
        //console.log(column);  //column
        const property = column['property'];  //column['date'];
        return row[property] === value;
      }
  },
  mounted(){
    this.getTable();
  }
}
</script>
