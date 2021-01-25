// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    bodyList:["1"],
    contentList:[
      {
        src:"/image/areared.png",
        text:"场地",
        content:"游泳馆"
      },
      {
        src:"/image/timeyellow.png",
        text:"时间",
        content:"2021-01-23 - 19:00-20:00"
      },
      {
        src:"/image/shuangren.png",
        text:"同行人员",
        content:"0 人"
      },
      {
        src:"/image/hua.png",
        text:"状态",
        content:"预约成功"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let that = this;
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750/clientWidth;
        let rpxHeight = clientHeight*ratio;
        that.setData({
          allHeight:rpxHeight,
          location:options.location
        })
      },
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