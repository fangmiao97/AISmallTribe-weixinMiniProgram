// pages/flower/flower.js
Page({
  data: {
    src: 'https://www.chmod777.top/src/resource/hua.jpg',
   result: false,
   genus:[],
   name:[],
   score:[],
   latinName:[],
   imageUrl:''
  },
  gotoShow: function () {
    var _this = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        _this.setData({
          src: tempFilePaths[0]
        })
        wx.showLoading({
          title: '正在上传',
        })
        wx.uploadFile({
          url: 'https://www.chmod777.top/test/upload_tobase64',
          filePath: tempFilePaths[0],
          //  name: 'myPhoto',
          name: 'headimg',
          header: {
            "content-Type": "application/json"
          }, // 设置请求的 header
          success: function (res) {
            wx.hideLoading();
            var data = res.data;
            console.log(data);
            data = JSON.parse(data);
            _this.setData({
              result:true,
              genus:data.Result[0].Genus,
              name: data.Result[0].Name,
              score: data.Result[0].Score,
              latinName:data.Result[0].LatinName,
              imageUrl: data.Result[0].ImageUrl
            })
          },
          fail:function(res){
            console.log(res)
          }
        })
      },
      fail: function (res) {
        // fai
      },
      complete: function () {
        // complete
      }
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