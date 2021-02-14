// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    bodyList:[],
    endList:[],
    topActive:0,
    activeColor1:'#ccccff',
    activeColor2:'#fff',
  },
  //切换到待审核界面
  bindtop1(){
    this.setData({
      activeColor1:'#ccccff',
      activeColor2:'#fff',
      topActive:'0'
    })
  },
  //切换到成功预约界面
  bindtop2(){
    this.setData({
      activeColor1:'#fff',
      activeColor2:'#ccccff',
      topActive:'1'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //向数据库表message获取预约信息
    const db = wx.cloud.database();
    db.collection('message').get().then(res=>{
      console.log(res.data)
      let arr = [];
      for(let i=res.data.length-1;i>=0;i--){
        arr.push({location:res.data[i].location,time:res.data[i].time,date:res.data[i].date,friend:res.data[i].friend.length})
      }
      this.setData({
        bodyList:arr
      })
    })
    //获取手机屏幕页面高度
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
    //处理待审核，三分钟后预约成功
      setTimeout(()=>{
        this.setData({
          endList:this.data.bodyList,
          bodyList:[]
        })
      },180000)
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