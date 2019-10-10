const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  // onLoad:function(options){
  //   // 页面初始化 options为页面跳转所带来的参数
  //   // this.setData({ imgUrls:[] })
  // },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../list/list?iv=' + app.globalData.iv,
    })

  },

  bindRepaireTap: function() {
    wx.showToast({
      title: '设备维修中',
      icon: 'loading',
      duration: 500
    })
  },

  onLoad: function() {

    // wx.getSetting({
    //   success: function(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function (res) {

    //         }
    //       })
    //     }
    //   }
    // })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })

      wx.navigateTo({
        url: '../board/board'
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.navigateTo({
          url: '../board/board'
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.encryptedData = e.detail.encryptedData
          app.globalData.iv = e.detail.iv
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.login({
            success: res => {
              // 获取到用户的 code 之后：res.code
              app.globalData.userCode = res.code
              console.log("用户的code:" + res.code);
            }
          })
          wx.navigateTo({
            url: '../board/board'
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    if (e.detail.iv != undefined) {
      //console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      app.globalData.encryptedData = e.detail.encryptedData
      app.globalData.iv = e.detail.iv
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      wx.login({
        success: res => {
          // 获取到用户的 code 之后：res.code
          app.globalData.userCode = res.code
          //console.log("用户的code:" + res.code);
        }
      })
    } else {
      console.log(e.detail)
    }
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})