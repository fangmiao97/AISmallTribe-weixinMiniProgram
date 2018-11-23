// pages/txtA/txtA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text:'',
      msg:"请输入至少20个文字！",
      text_result:'',
      text1: '美方签署“与台湾交往法案”。该案有关条款尽管没有法律约束力，但它严重违反一个中国原则和中美三个联合公报规定，干涉中国内政，损害了中美两国两军关系的发展氛围。中方要求美方信守承诺、改正错误，不得实施上述法案有关条款，停止美台官方往来，停止美台军事联系，停止对台售武，以免对中美两国两军关系和台海和平稳定造成严重损害。',
      text2:'宝钗听了，心里暗暗叫苦：“我们家里姑娘就算他是个尖儿，如今又要 远嫁，眼看着这里的人一天比一天少了。”宝玉听说，哎呀的一声，哭倒在 炕上，半天才说出来：“这日子过不得了！姊妹们一个一个的散了！林妹妹、 大姐姐都死了，二姐姐嫁了一个混帐东西也死了，三妹妹又要远嫁，史妹妹 又不知要到哪里去！??”探春却知道父母之命违逆不得，只有自己伤心， 暗暗掉泪而已。'
  },
  bindKeyInput: function (e) {
    var self = this;
    self.setData({
      text: e.detail.value
    })
  },
  btnTap: function (e) {
    this.setData({ msg: '' });
  },
  resetText:function(e){
    this.setData({ text:'', msg:'重新输入文本'});
  },
  setText1:function(e){
    this.setData({
      text: this.data.text1
    })
  },
  setText2: function (e) {
    this.setData({
      text: this.data.text2
    })
  },
  submitTo: function () {
    var self = this;
    wx.request({
      url: 'https://www.chmod777.top/test/gettext',
      header: {
        "content-Type": "application/json"
      },
      method: "POST",
      data: { 'text': self.data.text},
      success: function (res) {
        console.log(res);
        self.setData({
          text_result: JSON.stringify(res.data.text_result)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '有趣的文本分析',
      success: function () {
      },
      fail: function () {
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