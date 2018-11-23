// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'https://www.chmod777.top/src/resource/renlian.jpg',
    result : false,
    face_num:'',
    age:'',
    gender:'',
    glass:'',
    errno:''
  },
  gotoShow: function () {
    var _this = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        wx.showLoading({
          title: '正在上传',
        })
        wx.uploadFile({
          url: 'https://www.chmod777.top/test/upload',
          filePath: tempFilePaths[0],
        //  name: 'myPhoto',
           name:'headimg',
          header: {
            "content-Type": "application/json" 
          }, // 设置请求的 header
          success:function(res){
            wx.hideLoading();
            var data = res.data;
            console.log(data);
            data = JSON.parse(data);
            var url = data.url;
            console.log(url);
            _this.setData({
              src:url
            })
            getimageAPI(_this, url)        
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

function getimageAPI(page, myurl){
  wx.request({
    url: 'https://www.chmod777.top/test/face',
    header:{
      'Content-type': 'application/json'
    },
    method:"POST",
    data:{
      //"type": 0,
      info: myurl,
      //"content": ""
    },
    success: function(res){
      var data = res.data;
      console.log(data);
      //data = JSON.parse(data);
      page.setData({
        result: true,
        face_num: data.face_num,
        age: data.age,
        gender: data.gender,
        glass: data.glass,
        errno: data.errno
      })
    },
    fail:function(){
        console.log('errorhere')
    }
  })
}