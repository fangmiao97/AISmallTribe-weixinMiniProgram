//index.js
//获取应用实例
var app = getApp()

var changeStudyState=function(page){
  var that = page
  var stds = wx.getStorageSync('studystate')
  console.log(stds)
  if (stds == 1) {
    that.setData({
      studystate: '学习中',
      study: '继续学习'
    })
  } else {
    that.setData({
      studystate: '未加入学习',
      study: '加入学习'
    })
  }
}
Page({
  data: {
    userInfo: {},
    studystate:'',
    study: ''
  },
  study:function(){
    try{
      wx.setStorageSync('studystate', 1);
      changeStudyState(this);
      wx.navigateTo({
        url: '../../study/catalogue/catalogue',
      })
    }catch(e){
      console.log(e)
    }
  },
  //事件处理函数
  toCatalogue:function(){
    wx.navigateTo({
      url: '../appcatalogue/appcatalogue',
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    changeStudyState(this)
  }
})
