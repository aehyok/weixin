
//图标列表
var iconJsonList=[
      {img:'../../images/smuggling/11.png',text:'公告信息'},
      {img:'../../images/smuggling/21.png',text:'待办事项'},
      {img:'../../images/smuggling/31.png',text:'案件汇总'},
      {img:'../../images/smuggling/41.png',text:'预警提示'},
      {img:'../../images/smuggling/51.png',text:'现场取证'},
      {img:'../../images/smuggling/61.png',text:'移动审批'}
];

//页面初始化数据
Page({
  data: {
    title: 'aehyok.com',
    iconList: iconJsonList,
    toastHidden:true
  },

  //触摸开始
  touchStart(e){
    var index =e.target.dataset.index;
    console.log('touchStartindex'+index);
    var i=parseInt(index)+1;
    console.log('touchStarti'+i);
    iconJsonList[index].img='../../images/smuggling/'+i+'2.png';
    this.setData({ iconList:iconJsonList});
  },

  //触摸移开
  touchMove(e){
    var index =e.target.dataset.index;
    console.log('touchMoveindex'+index);
    var i=parseInt(index)+1;
    console.log('touchMovei'+i);
    iconJsonList[index].img='../../images/smuggling/'+i+'1.png';
    this.setData({ iconList:iconJsonList});
  },

  //触摸后点击
  touchClick(e){
    var index =e.target.dataset.index;
    //弹出提示框方法
			this.setData({
				toastHidden:false
			})
    wx.navigateTo({ url: '../approval/approval' })  

  },

  //提示框
  toastChange(){
    this.setData({
      toastHidden:true
      });
  }
})
