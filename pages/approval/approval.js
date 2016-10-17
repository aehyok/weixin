var app = getApp()
Page( {
	data: {
		hidden: false,//控制加载框的显示与隐藏
		curNav: 1,
		curIndex: 0,
		cart: [],
		cartTotal: 0,
		waitImage:'../../image/wait.png',
		waitedImage:'../../image/ok.png',
		navList: [
			{
				id: 1,
				name: '待审批'
			},
			{
				id: 2,
				name: '已审批'
			},
		],
		waitList: [
			{
				id: 1,
				itemName: '告知单拟稿审批',
				caseName: '案件名称一',
				personName: '张三',
				petitionTime: '2016年09月12日'
			},
			{
				id: 2,
				itemName: '告知单拟稿审批',
				caseName: '案件名称二',
				personName: '张三',
				petitionTime: '2016年09月13日'
			},
			{
				id: 3,
				itemName: '告知单拟稿审批',
				caseName: '案件名称三',
				personName: '张三',
				petitionTime: '2016年09月14日'
			},
			{
				id: 4,
				itemName: '告知单拟稿审批',
				caseName: '案件名称四',
				personName: '张三',
				petitionTime: '2016年09月15日'
			},
			{
				id: 5,
				itemName: '告知单拟稿审批',
				caseName: '案件名称五',
				personName: '张三',
				petitionTime: '2016年09月16日'
			},
			{
				id: 6,
				itemName: '告知单拟稿审批',
				caseName: '案件名称六',
				personName: '张三',
				petitionTime: '2016年09月17日'
			},
			{
				id: 7,
				itemName: '告知单拟稿审批',
				caseName: '案件名称七',
				personName: '张三',
				petitionTime: '2016年09月18日'
			},
			{
				id: 8,
				itemName: '告知单拟稿审批',
				caseName: '案件名称八',
				personName: '张三',
				petitionTime: '2016年09月19日'
			},
			{
				id: 9,
				itemName: '告知单拟稿审批',
				caseName: '案件名称九',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 10,
				itemName: '告知单拟稿审批',
				caseName: '案件名称十',
				personName: '张三',
				petitionTime: '2016年09月20日'
			}
		],
		waitedList: [
			{
				id: 1,
				itemName: '扣押审批',
				caseName: '案件名称一',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 2,
				itemName: '边控变更审批',
				caseName: '案件名称二',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 3,
				itemName: '撤控审批',
				caseName: '案件名称三',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 4,
				itemName: '边控审批',
				caseName: '案件名称四',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 5,
				itemName: '已报总局',
				caseName: '案件名称五',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 6,
				itemName: '边控审批',
				caseName: '案件名称六',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 7,
				itemName: '技术侦查审批',
				caseName: '案件名称七',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 8,
				itemName: '涉外通报审批',
				caseName: '案件名称八',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 9,
				itemName: '告知单拟稿审批',
				caseName: '案件名称九',
				personName: '张三',
				petitionTime: '2016年09月10日'
			},
			{
				id: 10,
				itemName: '释放审批',
				caseName: '案件名称十',
				personName: '张三',
				petitionTime: '2016年09月10日'
			}
		],
		classifyList: [
			[
				{
					name: "达利园",
					price: 38,
					num: 1,
					id: 1
				},
				{
					name: "旺旺",
					price: 58,
					num: 1,
					id: 19
				},
				{
					name: "徐福记",
					price: 88,
					num: 1,
					id: 2
				}
			],
			[
				{
					name: "豆奶",
					price: 18,
					num: 1,
					id: 3
				},
				{
					name: "绿茶",
					price: 58,
					num: 1,
					id: 4
				}
			],
			[
				{
					name: "安利",
					price: 18,
					num: 1,
					id: 5
				},
				{
					name: "脑白金",
					price: 8,
					num: 1,
					id: 6
				}
			],
			[ {
				name: "五粮液",
				price: 18,
				num: 1,
				id: 7
			},
				{
					name: "茅台",
					price: 8,
					num: 1,
					id: 8
				}]
		],

	},
	loadingChange() {//时间延迟，模仿加载
		setTimeout(() => {
			this.setData( {
				hidden: true
			})
		}, 1000 )
	},
	//选择分类
	selectNav( event ) {//event.target.dataset. 获取事件中的数据
		let id = event.target.dataset.id,
			index = parseInt( event.target.dataset.index );
		self = this;
		this.setData( {
			curNav: id,
			curIndex: index
		})
	},

	onLoad() {
		this.loadingChange()
	}
})