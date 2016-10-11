// 拿到全局应用程序实例
const app = getApp()

const article = require('../../libraries/article.js')

const API_URL = 'http://aehyok.com:1281/api/Blog/Article/1';

// 创建一个页面对象用于控制页面的逻辑
Page( {
  data: {
    title: '正在加载中...',
    movies: [],
    loading: true,
    hasMore:true,
    page: 1
  },

  onLoad() {
    //调用应用实例的方法获取全局数据
    app.fetchApi( API_URL, ( err, data ) => {
      //更新数据
      this.setData( { title: 'Cnblogs博客园', movies: data.ArticleList, loading: false })
    })
  },
  loadMore () {
    if (!this.data.hasMore) return
    console.log('进入loadMore方法');
    this.setData({ title: '加载中...', loading: true })
    article.find(this.data.page++)
      .then(d => {

        if (d.ArticleList.length) {
          console.log('d.ArticleList.length:'+d.ArticleList.length);
          var list=this.data.movies.concat(d.ArticleList);
          this.setData( { title: 'Cnblogs博客园', movies: list, loading: false })
        } else {
          this.setData({ title: d.title, hasMore: false, loading: false })
        }
      })
      .catch(e => {
        this.setData({ title: '获取数据异常', loading: false })
      })
  },
})
