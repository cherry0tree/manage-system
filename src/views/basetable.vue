<template>
<div class="basetable">

  <div class="crumbs">
    <el-breadcrumb>
      <el-breadcrumb-item>
        <i class="el-icon-menu"></i> 基础表格
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="container">
    <div class="table_title">下面的表格数据是从table.json中获取得到的表单数据</div>
    <el-table border class="table" :data="tableData">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column label="账户余额">
        <template slot-scope="scope">￥{{scope.row.money}}</template>
      </el-table-column>
      <el-table-column label="头像(查看大图)" align="center">
        <template slot-scope="scope">
          <el-image
              class="table-td-thumb"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state === '成功' ? 'success': 'danger'">
            {{scope.row.state}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="注册时间"></el-table-column>
      <el-table-column label="操作" width="180px" align="center">
        <template slot-scope="scope">
          <!-- click用作传参数 -->
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button type="text" icon="el-icon-delete" 
                     class="red" 
                     @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>          
        </template>
      </el-table-column>
    </el-table>
    
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form :model="form" label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>        
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <div class="pagination">
      <el-pagination 
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="totalPage"
          @current-change="handlePageChange"
      ></el-pagination>
    </div>

  </div>

</div>
</template>

<script>
import { fetchData } from '../network/tableData.js';
export default {
  name: 'basetable',
  data() {
    return {
      tableData: [],
      query: {
        address: '',
        name: '',
        pageIndex: 1,
        pageSize: 10
      },
      totalPage: 0,
      idx: 0,
      form: {},
      editVisible: false
    }
  },
  created() {
    this.getData();
  },
  methods: {
    //table.json
    getData() {
      fetchData(this.query).then(res => {
        console.log(res)
        this.tableData = res.list;
        this.totalPage = res.totalPage || 50;
      })
    },
    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, 'pageIndex', val);
      this.getData();
    },
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
      console.log(this.editVisible)
    },
    saveEdit(){
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      console.log(this.tableData)
    },
    handleDelete(index, row){
      // confirm是elementui的一个方法
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功');
        this.tableData.splice(index, 1);
      })
    }
  }
}
</script>
<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.mr10 {
  margin-right: 10px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.red{
  color: red;
}
.table_title{
  margin-bottom: 15px;
  font-size: 20px;
}
</style>