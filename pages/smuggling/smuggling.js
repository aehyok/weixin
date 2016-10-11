var iconJsonList=[
      {img:'../../images/smuggling/11.png',text:'公告信息'},
      {img:'../../images/smuggling/21.png',text:'待办事项'},
      {img:'../../images/smuggling/31.png',text:'案件汇总'},
      {img:'../../images/smuggling/41.png',text:'预警提示'},
      {img:'../../images/smuggling/51.png',text:'现场取证'},
      {img:'../../images/smuggling/61.png',text:'移动审批'}
];
//Test 一下
Page({
  data: {
    title: 'aehyok.com',
    iconList: iconJsonList,
    toastHidden:true
  },
  touchStart(e){
    var index =e.target.dataset.index;
    console.log('touchStartindex'+index);
    var i=parseInt(index)+1;
    console.log('touchStarti'+i);
    iconJsonList[index].img='../../images/smuggling/'+i+'2.png';
    this.setData({ iconList:iconJsonList});
  },
  touchMove(e){
    var index =e.target.dataset.index;
    console.log('touchMoveindex'+index);
    var i=parseInt(index)+1;
    console.log('touchMovei'+i);
    iconJsonList[index].img='../../images/smuggling/'+i+'1.png';
    this.setData({ iconList:iconJsonList});
  },
  touchClick(e){
    var index =e.target.dataset.index;
    this.setData({
      toastHidden:false
      });
  },
  toastChange(){
    this.setData({
      toastHidden:true
      });
  }
})
