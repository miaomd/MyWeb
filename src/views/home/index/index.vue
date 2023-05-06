<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel indicator-position="outside"  type="card" :interval="3000">
      <el-carousel-item v-for="item in imgLists" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>

    <!-- 卡片 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="o in cardLists" :key="o.img">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.img" class="image">
          <div style="padding: 14px;">
            <span>{{o.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{o.title}}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data(){
    return {
      imgLists:[
        require("@/assets/img/banner1.jpg"),
        require("@/assets/img/banner2.jpg"),
        require("@/assets/img/banner3.jpg"),
      ],
      cardLists:[
        {title:'企业荣誉',img:require("@/assets/img/11.jpg")},
        {title:'成长之路',img:require("@/assets/img/12.jpg")},
        {title:'感恩有你',img:require("@/assets/img/13.jpg")},
        {title:'企业福利',img:require("@/assets/img/14.jpg")}
      ]
    }
  },
  methods:{

  }
}
</script>
<style scoped>
.el-card__body img{
  height:200px;
  max-width: 100%;
}
</style>