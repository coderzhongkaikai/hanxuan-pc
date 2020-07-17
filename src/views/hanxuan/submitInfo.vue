


<template>
 <div>
      <div style="margin-top: 20px">
       <el-button type="success">任务分配</el-button>
  </div>
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
             v-for="item in labels"
          :key="item.index"
          :label="item.label"
          :prop="item.prop"
     >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="warning"
          @click="handleEdit(scope.$index, scope.row)">查看/评分</el-button>
      </template>
    </el-table-column>
  </el-table>
 
 </div>
</template>

<script>
  export default {
    data() {
      return {
        //   '姓名','年纪','学号','学院','电话','加入时间','退出时间'
          labels:[{index:"0",prop:"capter_name",label:"姓名"},
                  {index:"1",prop:"capter_stuNum",label:"学号"},
                  {index:"2",prop:"aim_school",label:"目标学校"},
                  {index:"3",prop:"phoneNum",label:"电话"},
                  {index:"4",prop:"inDate",label:"报名时间"},
                ],
        tableData: [{
          capter_name: '王小虎',
          capter_stuNum: '2018214294',
          aim_school:'重庆中学',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
        },{
          capter_name: '王小虎',
          capter_stuNum: '2018214294',
          aim_school:'重庆中学',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
        },{
          capter_name: '王小虎',
          capter_stuNum: '2018214294',
          aim_school:'重庆中学',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
        },{
          capter_name: '王小虎',
          capter_stuNum: '2018214294',
          aim_school:'重庆中学',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
        }
        ],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>