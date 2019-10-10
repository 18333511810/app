const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    recent: 5,
    clockId: '',
    list: ['收回', '挂衣', '晾衣']
  },

  bindViewTap: function(event) {
    var that = this;
    var clickKey = event.currentTarget.dataset.k;
    console.log(clickKey)
    wx.request({
      url: 'https://www.xueba.shop',
      method: 'POST',
      data: {
        recentId: that.data.id,
        recent: clickKey +1,
        opeid: app.globalData.openid
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.data.code) {
          that.setData({
            recent: res.data.msg,
          })
        } else {
          //console.log('res.data')
          //console.log(res.data)
        }
      },
      fail: function(err) {
        console.log('err');
        console.log(err);
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('optionid ' + options.id)
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this; //把this对象复制到临时变量that
    var i = setInterval(function() {
      wx.request({
        url: 'https://www.xueba.shop',
        method: 'POST',
        data: {
          hid: that.data.id,
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          //console.log(res)
          that.setData({
            recent: res.data.recent,
          })
        }
      })
    }, 1000);
    that.setData({
      clockId: i,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    clearInterval(this.data.clockId);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    clearInterval(this.data.clockId)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})