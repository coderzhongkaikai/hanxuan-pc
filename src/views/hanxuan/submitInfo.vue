<template>
  <div>
      <div class="btn_box" style="margin-top: 20px">
            <el-button type="success">任务分配</el-button>
      <el-input class="find_input" placeholder="请输入内容" v-model="input2">
      </el-input>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column
        v-for="item in labels"
        :key="item.index"
        :label="item.label"
        :prop="item.prop"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
           <router-link to="/hanxuan/detail">
          <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
            >查看/评分</el-button>
          </router-link>
   
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   '姓名','年纪','学号','学院','电话','加入时间','退出时间'
      labels: [
        { index: "0", prop: "capter_name", label: "队长" },
        { index: "1", prop: "capter_stuNum", label: "队长学号" },
        { index: "2", prop: "aim_school", label: "目标学校" },
        { index: "3", prop: "phoneNum", label: "电话" },
        { index: "4", prop: "inDate", label: "报名时间" },
        { index: "4", prop: "grades", label: "评定分数" },

      ],
      tableData: [
        {
          capter_name: "王小虎",
          capter_stuNum: "2018214294",
          aim_school: "重庆中学",
          phoneNum: "14444442232323",
          inDate: "2016-05-03",
          grades: "--",

        },
        {
          capter_name: "王小虎",
          capter_stuNum: "2018214294",
          aim_school: "重庆中学",
          phoneNum: "14444442232323",
          inDate: "2016-05-03",
          grades: "--",

        },
        {
          capter_name: "王小虎",
          capter_stuNum: "2018214294",
          aim_school: "重庆中学",
          phoneNum: "14444442232323",
          inDate: "2016-05-03",
          grades: "--",

        },
        {
          capter_name: "王小虎",
          capter_stuNum: "2018214294",
          aim_school: "重庆中学",
          phoneNum: "14444442232323",
          inDate: "2016-05-03",
          grades: "--",

        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style lang="less" scoped>
.btn_box{
  display: flex;
  justify-content: start;
}
.find_input{
  margin-left: 10px;
  width: 180px;
}
</style>