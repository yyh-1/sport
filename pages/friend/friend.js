// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    contentList:[
      {
        name:"杨宇航",
        nameId:"123456"
      },
      {
        name:"张雨婷",
        nameId:"123456"
      },
      {
        name:"脆弱恩",
        nameId:"123456"
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
        console.log(rpxHeight)
        that.setData({
          allHeight:rpxHeight
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