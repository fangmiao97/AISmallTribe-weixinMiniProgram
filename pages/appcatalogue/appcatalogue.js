// pages/appcatalogue/appcatalogue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getTree: function () {
    wx.navigateTo({
      url: '../tree/tree',
    })

  },
  getAPI: function () {
    wx.navigateTo({
      url: '../getAPI/getAPI'
    })
  }
  ,
  getFlower: function () {
    wx.navigateTo({
      url: '../flower/flower',
    })
  },
  AIChat: function () {
    wx.navigateTo({
      url: '../AIChat/AIChat'
    })
  },
  txtA: function () {
    wx.navigateTo({
      url: '../txtA/txtA'
    })
  },
  getImage: function () {
    wx.navigateTo({
      url: '../image/image',
    })
  },
  getTest: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})