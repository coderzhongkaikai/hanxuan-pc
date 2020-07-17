
<template>
 <div>
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

  </el-table>
 
 </div>
</template>

<script>
  export default {
    data() {
      return {
        //   '姓名','年纪','学号','学院','电话','加入时间','退出时间'
          labels:[{index:"0",prop:"name",label:"姓名"},
                  {index:"1",prop:"grade",label:"年级"},
                  {index:"2",prop:"stuNum",label:"学号"},
                  {index:"3",prop:"college",label:"学院"},
                  {index:"4",prop:"phoneNum",label:"电话"},
                  {index:"5",prop:"inDate",label:"加入时间"},
                  {index:"6",prop:"outDate",label:"退出时间"}
                ],
        tableData: [{
          name: '王小虎',
          grade: '2018',
          stuNum: '2018214294',
          college:'光电/重庆国际半导体学院',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
          outDate:'2020-1-1'
        }, {
          name: '王小虎',
          grade: '2018',
          stuNum: '2018214294',
          college:'光电/重庆国际半导体学院',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
          outDate:'2020-1-1'
        },{
          name: '王小虎',
          grade: '2018',
          stuNum: '2018214294',
          college:'光电/重庆国际半导体学院',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
          outDate:'2020-1-1'
        },{
          name: '王小虎',
          grade: '2018',
          stuNum: '2018214294',
          college:'光电/重庆国际半导体学院',
          phoneNum: '14444442232323',
          inDate: '2016-05-03',
          outDate:'2020-1-1'
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