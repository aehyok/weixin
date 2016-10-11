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
    iconList: [
      {img:'../../images/smuggling/11.png',text:'公告信息'},
      {img:'../../images/smuggling/21.png',text:'待办事项'},
      {img:'../../images/smuggling/31.png',text:'案件汇总'},
      {img:'../../images/smuggling/41.png',text:'预警提示'},
      {img:'../../images/smuggling/51.png',text:'现场取证'},
      {img:'../../images/smuggling/61.png',text:'移动审批'}
    ]
  },
  touchStart(e){
      var index =e.target.dataset.index;

       this.setData({ iconList:[
          {img:'../../images/smuggling/12.png',text:'公告信息'},
          {img:'../../images/smuggling/22.png',text:'待办事项'},
          {img:'../../images/smuggling/32.png',text:'案件汇总'},
          {img:'../../images/smuggling/42.png',text:'预警提示'},
          {img:'../../images/smuggling/52.png',text:'现场取证'},
          {img:'../../images/smuggling/62.png',text:'移动审批'}
        ]  });
  },
  touchMove(e){
        var index =e.target.dataset.index;
        this.setData({ iconList: [
          {img:'../../images/smuggling/11.png',text:'公告信息'},
          {img:'../../images/smuggling/21.png',text:'待办事项'},
          {img:'../../images/smuggling/31.png',text:'案件汇总'},
          {img:'../../images/smuggling/41.png',text:'预警提示'},
          {img:'../../images/smuggling/51.png',text:'现场取证'},
          {img:'../../images/smuggling/61.png',text:'移动审批'}
        ]  });
  }
})
