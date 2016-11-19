// 拿到全局应用程序实例
const app = getApp()

//const API_URL = 'https://api.douban.com/v2/movie/subject/';
const API_URL = 'https://aehyok.com/api/Blog/Detail/';


// 创建一个页面对象用于控制页面的逻辑
Page( {
  data: {
    title: '',
    loading: true,
    movie: {}
  },

  onLoad( params ) {
    app.fetchApi( API_URL + params.id, ( err, data ) => {
      this.setData( { title: '英语小贴士', movie: data, loading: false })
      wx.setNavigationBarTitle( { title: '英语小贴士' })
    })
  },

  onReady() {
    wx.setNavigationBarTitle( { title: '英语小贴士' })
  }
})
