const app = getApp()
Page({
  data: {
    list: [],
    clockId: ''
  },
  bindViewTap: function(event) {
    // ../detail/detail?id={{item.id}}
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id
    })
  },

  bindRepaireTap: function(e) {
    console.log(e.currentTarget.dataset.item.state)
    var state_tmp = e.currentTarget.dataset.item.state;
    if (state_tmp == '空闲') {
      wx.navigateTo({
        url: '../detail/detail?id=' + e.currentTarget.dataset.id
      })
    } else if (state_tmp == '被预定') {
      wx.showToast({
        title: '设备被预定',
        icon: 'loading',
        duration: 500
      })
    } else if (state_tmp == '我的衣服' || state_tmp == '我的预定') {
      wx.navigateTo({
        url: '../state/state?id=' + e.currentTarget.dataset.id
      })
    }
  },

  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
    var that = this;
    var data = app.globalData.openid ? {
      openid: app.globalData.openid
    } : {
      code: app.globalData.userCode
    }
    // {
    // code: app.globalData.userCode,
    //iv: options.iv,
    //encryptedData: app.globalData.encryptedData
    // },
  
      wx.request({
        url: 'https://www.xueba.shop',
        method: 'POST',
        data: data,
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res)
          app.globalData.openid = app.globalData.openid ? app.globalData.openid : res.data.openid;
          that.setData({
            list: res.data,
          })
        }
      })
    
    that.setData({
      clockId: i,
    });
  },
  onHide: function() {
    // 页面隐藏
    clearInterval(this.data.clockId)
  },
  onUnload: function() {
    // 页面关闭
    clearInterval(this.data.clockId)
  }
})