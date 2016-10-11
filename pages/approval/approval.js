var app = getApp()
Page({
	data: {
		hidden:false,//控制加载框的显示与隐藏
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'待审批'
			},
			{
				id:2,
				name:'已审批'
			},
		],
		classifyList:[
			[
				{
					name:"达利园",
					price:38,
					num:1,
					id:1
				},
				{
					name:"旺旺",
					price:58,
					num:1,
					id:19
				},
				{
					name:"徐福记",
					price:88,
					num:1,
					id:2
				}
			],
			[
				{
					name:"豆奶",
					price:18,
					num:1,
					id:3
				},
				{
					name:"绿茶",
					price:58,
					num:1,
					id:4
				}
			],
			[
				{
					name:"安利",
					price:18,
					num:1,
					id:5
				},
				{
					name:"脑白金",
					price:8,
					num:1,
					id:6
				}
			],
			[	{
					name:"五粮液",
					price:18,
					num:1,
					id:7
				},
				{
					name:"茅台",
					price:8,
					num:1,
					id:8
				}]
		],
	
	},
	loadingChange () {//时间延迟，模仿加载
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},1000)
	},
	//选择分类
	selectNav (event) {//event.target.dataset. 获取事件中的数据
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},

	onLoad () {
		this.loadingChange()
	}
})