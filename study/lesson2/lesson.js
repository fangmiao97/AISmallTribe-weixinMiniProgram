// study/lesson2/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastX: 0,
    lastY: 0,
    showbottom: false
  },
  handletouchmove: function (event) {
    console.log(event)
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""
    let showbottom = false
    //左右方向滑动
    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0) {
        text = "向左滑动";
        showbottom = true
      }
      else if (tx > 0) {
        text = "向右滑动";
        showbottom = true
      }
    }
    //上下方向滑动
    else {
      if (ty < 0) {
        text = "向上滑动";
        showbottom = false
      }
      else if (ty > 0) {
        text = "向下滑动";
        showbottom = true
      }
    }

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.setData({
      text: text,
      showbottom: showbottom
    });
  },
  handletouchtart: function (event) {
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  backtoCat: function () {
    wx.navigateBack({
    })
  },
  gotoP: function () {
    wx.redirectTo({
      url: '../lesson2/practice',
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