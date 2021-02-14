// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    location:'',
    time:'',
    morningList:['08:00-09:00','09:00-10:00','10:00-11:00','11:00-12:00'],
    moonList:['15:00-16:00','16:00-17:00','17:00-18:00'],
    eveningList:['19:00-20:00','20:00-21:00'],
  },
  //获取日期
  bindChange(e){
    console.log(e.detail.value)
    let time = e.detail.value
    this.setData({
      time:time
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取手机页面高度
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