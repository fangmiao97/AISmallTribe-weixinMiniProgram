// pages/tree/tree.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tree:'',
    msg: '',
    treeArray: [
      "[ 1, 1, 'yes']",
      "[ 1, 1, 'yes']",
      "[ 1, 0,  'no']",
      "[ 0, 1,  'no']",
      "[ 0, 1,  'no']",
      "[ 3, 0,  'no']"
    ],
    treeArray2: [
      "[ 1, 1, 'yes']",
      "[ 1, 1, 'yes']",
      "[ 1, 0,  'no']",
      "[ 0, 1,  'no']",
      "[ 0, 1,  'no']",
      "[ 2, 0, 'yes']",
      "[ 2, 1,  'no']"
    ],
    treeArray3: [
      "[ 1, 2, 'yes']",
      "[ 1, 1, 'yes']",
      "[ 1, 0,  'no']",
      "[ 0, 1,  'no']",
      "[ 0, 1,  'no']",
      "[ 2, 0,  'no']",
      "[ 2, 2, 'yes']"
    ]
  },
  getTreeA2:function(e){
    this.setData({
      treeArray : this.data.treeArray2
    });
    console.log(this.data.treeArray)
  },
  getTreeA3: function (e) {
    this.setData({
      treeArray: this.data.treeArray3
    });
    console.log(this.data.treeArray)
  },
  btnTap: function (e) {
    this.setData({ msg: '' });
  },
  getTree: function () {
    var self = this;
    var treeArrays = self.data.treeArray;
    wx.request({
      url: 'https://www.chmod777.top/test/gettree',
      header: {
        "content-Type": "application/json"
      },
      method: "POST",
      data: {
        "treeArray" : treeArrays
      },
      success: function (res) {
        console.log(res);
        self.setData({
          tree: res.data.url
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '构建决策树',
      success: function () {
        // console.log("success")
      },
      fail: function () {
        // console.log("error")
      }
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