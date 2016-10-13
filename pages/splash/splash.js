Page({
  data: {
    screenHeight:'0px',
    title: 'aehyok.com',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  start () {
    wx.navigateTo({ url: '../featured/featured' })
  },
  onLoad(){
    var that=this;  //作用域问题
    var screenHeight="0px";
    wx.getSystemInfo({
      success:function(res){
          screenHeight=res.windowHeight+"px";
          that.setData({screenHeight:screenHeight});
      }
    });
  }
})
