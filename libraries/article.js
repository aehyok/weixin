var URL='https://aehyok.com/api/Blog/Article';
function fetchApi (page) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URL}/${page}`,
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  find (page) {
    console.log('进入find方法');
    return fetchApi(page)
      .then(res => res.data)
  },

  findOne (id) {
    return fetchApi('subject/' + id)
      .then(res => res.data)
  }
}