<template>
	<div style="position: relative;">
		<div class="head">
			<span>基本表格</span>
			<div>
				<input type="button" value="刷新" @click="sx" />
				<input type="button" value="增加数据" @click="push=true" />
			</div>
		</div>
		<!-- 增加框 -->
		<el-dialog title="编辑修改" :visible.sync="push" width="25%">
			<el-form :model="nobj">
				<el-form-item label="姓名">
					<el-input v-model="nobj.name" autocomplete="off" ></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input v-model="nobj.sex" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input v-model="nobj.old" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="生日">
					<el-input v-model="nobj.date" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="nobj.email" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="nobj.site" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="push = false">取 消</el-button>
				<el-button type="primary" @click="nqd">确 定</el-button>
			</div>
		</el-dialog>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
		 @selection-change="select">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="id" label="id" width="60" >
			</el-table-column>
			<el-table-column fixed prop="name" label="姓名" width="80" >
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="80" >
			</el-table-column>
			<el-table-column prop="old" label="年龄" width="80" >
			</el-table-column>
			<el-table-column prop="date" label="生日" width="120" >
			</el-table-column>
			<el-table-column prop="email" label="邮箱" width="240" >
			</el-table-column>
			<el-table-column prop="site" label="地址">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="280">
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
		<el-button type="danger" @click="toggleSelection" class='del'>
			批量删除
		</el-button>
		<!-- 修改框 -->
		<el-dialog title="编辑修改" :visible.sync="dialogFormVisible" width="25%">
			<el-form :model="obj">
				<el-form-item label="id">
					<el-input v-model="obj.id" autocomplete="off"></el-input>
				</el-form-item>
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
	var a = true
	export default {
		name: 'list',
		data() {
			return {
				tableData: [],
				showButton: false,
				arr: [],
				idarr: [],
				// total: "", //默认数据总数
				pagesize: 10, //每页的数据条数
				currentPage: 1, //默认开始页面
				obj: {},
				nobj: {
					id: '',
					name: '',
					sex: '',
					old: '',
					email: '',
					date: '',
					site: ''
				},
				index: '',
				dialogFormVisible: false,
				push: false,
			}
		},
		computed: {
			total() {
				return this.tableData.length
			}
		},
		methods: {
			get() {
				this.tableData = this.$store.state.resp
			},
			// 刷新事件
			sx() {
				this.$store.dispatch('getData')
				this.get()
			},
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
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
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
			//复选框选中事件
			select(val) {
				this.arr = val
			},
			//批量删除事件
			toggleSelection() {
				if (this.arr.length == 0) {
					this.$alert('这是一段内容', '标题名称', {
						confirmButtonText: '确定',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						},
					})
				} else {
					this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let vthis = this
						this.arr.map(function(item) {
							vthis.tableData.map((items, indexs) => {
								if (item.id == items.id) {
									vthis.tableData.splice(indexs, 1)
								}
							})
						})
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
				}
			},
			//增加事件
			nqd() {
				this.push = false
				this.nobj.id = this.tableData.length + 1
				this.tableData.push(JSON.parse(JSON.stringify(this.nobj)))
			}
		},
		mounted() {
			this.get()
		}
	}
</script>

<style scoped>
	.el-table td,
	.el-table th {
		padding: 10px 0 !important;
	}
</style>

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

	.del {
		font-size: 14px;
		padding: 8px !important;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.head {
		display: flex;
		justify-content: space-between;
		padding: 8px 24px;
		background: white;
		border-radius: 3px 3px 0 0;

		span {
			font-weight: bold;
			color: rgba(105, 105, 105, 1);
		}

		input {
			margin: 0 15px;
			padding: 4px 16px;
			border-radius: 3px;
			color: white;
			background: rgb(30, 144, 255);

			&:hover {
				background: rgba(30, 144, 255, 0.8);
			}
		}
	}
</style>
<style>
	.is-leaf>*{
		height: 30px !important;
		line-height: 30px !important;
	}
</style>
