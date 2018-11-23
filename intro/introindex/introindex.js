Page({
  data: {
    imgUrls: [
      '../../resource/slide1.png',
      '../../resource/slide2.png',
      '../../resource/slide3.png'
    ], 
  },
  diractor1: function(e){
    wx.navigateTo({
      url: '../TFinfo/TFinfo',
    })
  },
  diractor2: function (e) {
    wx.navigateTo({
      url: '../ABinfo/ABinfo',
    })
  },
  diractor3: function (e) {
    wx.navigateTo({
      url: '../bookinfo/bookinfo',
    })
  },
  AIintro: function(e){
    wx.navigateTo({
      url: '../AIintro/AIintro',
    })
  },
  treeintro:function(e){
    wx.navigateTo({
      url: '../treeintro/treeintro',
    })
  },
  bayesintro:function(e){
    wx.navigateTo({
      url: '../closetoML/bayesintro',
    })
  },
  NNintro:function(){
    wx.navigateTo({
      url: '../visual/visu',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '知识库',
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
  },
})
