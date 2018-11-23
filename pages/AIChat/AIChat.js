//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  //定义初始化数据  每当数据发生变化时，会自动触发页面循环
  data: {
    msg: "点击这里聊天吧！",
    inputValue: '',
    returnValue: '',
    allContentList: [],
    key: "d13b441029804ee99fc4e3b617a5f557", //图灵机器人秘钥
    num: 0,
    userInfo: {},
    inputTemp:''
  },
  //绑定键盘按下事件，讲输入的值赋给data
  bindKeyInput: function (e) {
    this.setData({
      inputTemp: e.detail.value,
      inputValue: e.detail.value
    })
  },
  btnTap: function(e){
    this.setData({ msg:''});
  },
  //点击发送按钮时触发事件，发送数据给图灵机器人
  submitTo: function (e) {
    let that = this;
    //将输入数据追加到列表里面
    that.data.allContentList.push({ "value": that.data.inputValue });
    //图灵接口
    let _url = `https://www.chmod777.top/test/chat`;
    //系统封装的请求方法 ，注意这里没有ajajx的说法
    wx.request({
      url: _url,
      //封装返回数据格式
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data: {
        info: that.data.inputValue
      },
      //请求成功的回调
      success: function (res) {
        let data = res.data;
        if (data.code === 100000) {   //100000 表示返回成功
          //将返回值追加到列表
          that.data.allContentList.push({ "value": data.text });
          //调用set方法，告诉系统数据已经改变启动循环，循环聊天信息
          that.setData({
            returnValue: data.text,
            allContentList: that.data.allContentList,
            inputTemp:''
          })
        } else {
           console.log("errorhere!"),
           console.log(data)
        }

      }
      
    })

    //////

  },
  onLoad: function () {
    //y页面初始化时加载的原始数据
    // 设置标题
    var that = this
    wx.setNavigationBarTitle({
      title: 'AI聊天',
      success: function () {
        // console.log("success")
      },
      fail: function () {
        // console.log("error")
      }
    })
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }

})