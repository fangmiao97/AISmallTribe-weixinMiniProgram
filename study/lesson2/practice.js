// study/lesson2/practice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    selectionA1: 'noanwser',
    selectionB1: 'noanwser',
    selectionC1: 'noanwser',
    selectionD1: 'noanwser',
    selectionA2: 'noanwser',
    selectionB2: 'noanwser',
    selectionC2: 'noanwser',
    selectionD2: 'noanwser',
    q1: true,
    q2: false,
    bottom1: true,
    bottom2: false,
    bottom3: false
  },
  selectA1: function () {
    this.setData({
      selectionA1: 'right',
      bottom1: false,
      bottom2: true
    })
  },
  selectB1: function () {
    this.setData({
      selectionB1: 'false',
      selectionA1: 'right',
      bottom1: false,
      bottom2: true
    })
  },
  selectC1: function () {
    this.setData({
      selectionC1: 'false',
      selectionA1: 'right',
      bottom1: false,
      bottom2: true
    })
  },
  selectD1: function () {
    this.setData({
      selectionD1: 'false',
      selectionA1: 'right',
      bottom1: false,
      bottom2: true
    })
  },
  selectA2: function () {
    this.setData({
      selectionA2: 'right',
      bottom1: false,
      bottom3: true
    })
  },
  selectB2: function () {
    this.setData({
      selectionB2: 'false',
      selectionA2: 'right',
      bottom1: false,
      bottom3: true
    })
  },
  selectC2: function () {
    this.setData({
      selectionC2: 'false',
      selectionA2: 'right',
      bottom1: false,
      bottom3: true
    })
  },
  selectD2: function () {
    this.setData({
      selectionD2: 'false',
      selectionA2: 'right',
      bottom1: false,
      bottom3: true
    })
  },
  nextq: function () {
    this.setData({
      q1: false,
      q2: true,
      bottom1: true,
      bottom2: false,
      num:2
    })
  },
  backc: function () {
    wx.redirectTo({
      url: '../catalogue/catalogue',
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