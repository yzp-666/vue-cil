<template>
	<div>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;border-radius: 10px">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="id" width="80">
				<template slot-scope="scope">
					<span style="">{{ scope.row.id }}</span>
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="80">
				<template slot-scope="scope">
					<div slot="reference" class="name-wrapper">
						<span style="">{{ scope.row.name }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="性别" width="80">
				<template slot-scope="scope">
					<div slot="reference" class="name-wrapper">
						<span style="">{{ scope.row.sex }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="年龄" width="80">
				<template slot-scope="scope">
					<div slot="reference" class="name-wrapper">
						<span style="">{{ scope.row.old }}</span>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="生日" width="120">
				<template slot-scope="scope">
					<span style="">{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="邮箱" width="120">
				<template slot-scope="scope">
					<span style="">{{ scope.row.email }}</span>
				</template>
			</el-table-column>
			<el-table-column label="地址" width="200">
				<template slot-scope="scope">
					<span style="">{{ scope.row.site }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="open(scope.$index)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="ul-list">
			<el-pagination small layout="total,prev, pager, next" :total="total" @current-change="current_change">
			</el-pagination>
		</div>
		<!-- 修改框 -->
		<el-dialog title="编辑修改" :visible.sync="dialogFormVisible" width="25%">
			<el-form :model="obj">
				<el-form-item label="姓名">
					<el-input v-model="obj.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input v-model="obj.sex" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input v-model="obj.old" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="生日">
					<el-input v-model="obj.date" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="obj.email" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="obj.site" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="qd">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {
				tableData: [{
						id: '1',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '2',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '3',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '4',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '5',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '6',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '7',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '8',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '9',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '10',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '11',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '12',
						date: '2016-05-02',
						name: '王小虎',
						sex: '男',
						old: '24',
						email: '819836692@qq.com',
						site: '上海市普陀区金沙江路 1518 弄'
					},
				],
				arr: [],
				total: 0, //默认数据总数
				pagesize: 10, //每页的数据条数
				currentPage: 1, //默认开始页面
				// show: false,
				obj: {},
				index: '',
				dialogFormVisible: false,
				dialogVisible: false,
			}
		},
		methods: {
			// 编辑事件
			handleEdit(index, row) {
				// console.log(index, row)
				this.dialogFormVisible = true
				this.obj = JSON.parse(JSON.stringify(row))
				this.index = index
			},
			// 删除事件
			open(index) {
				// console.log(index);
				this.index = index
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.tableData.splice(this.index, 1)
					this.$message({type: 'success',message: '删除成功!'});
				}).catch(() => {
					this.$message({type: 'info',message: '已取消删除'});
				});
			},
			// 列表栏方法
			current_change: function(currentPage) {
				this.currentPage = currentPage;
			},
			// 确定修改事件
			qd() {
				this.tableData[this.index] = this.obj
				this.dialogFormVisible = false
			},
		},
		created() {
			this.total = this.tableData.length
		}
	}
</script>

<style lang="less" scoped>
	* {
		text-align: center;
	}

	.ul-list {
		display: flex;
		justify-content: flex-end;
		line-height: 35px;
	}

	.mengban {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .2);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
	}

	.el-input {
		width: 80% !important;
	}
</style>
