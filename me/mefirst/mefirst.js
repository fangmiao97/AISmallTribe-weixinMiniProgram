// me/mefirst/mefirst.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },
  aboutapp:function(){
    wx.showModal({
      title: 'AI小部落',
      content: 'AI小部落是合肥工业大学宣城校区物联网15-1开心就好AILAB的作品。\r\n本小程序旨在大众传播人工智能、机器学习和深度学习的基本思想。并通过简单的小应用和知识学习过程增加用户的体验和兴趣。\r\n我们还精选了人工智能方面最新的报道和知识供用户参考。\r\n本小程序中的应用结果仅供娱乐参考，上传的照片信息会定期清除。',
      showCancel:false,
      confirmText:'了解啦~',
      confirmColor:'#6070ff'
    })
  },
  getpeople:function(){
    wx.showModal({
      title: '开发者们',
      content: '方淼\r\n邮箱：miaofang97@gmail.com\r\n陈毅飞\r\n邮箱：@@@@@@@@\r\n杨晨\r\n邮箱：@@@@@@@@@',
      showCancel:false,
      confirmText:'完成'
    })
  },
  godashang:function(){
    wx.navigateTo({
      url: '../dashang/dashang',
    })
  } , /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
      title: '我',
      success: function () {
        // console.log("success")
      },
      fail: function () {
        // console.log("error")
      }
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#272728',
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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