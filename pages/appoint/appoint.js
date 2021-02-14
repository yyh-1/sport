
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    index:0,
    activeColor:["#ccccff","#dcdcdc","#dcdcdc","#dcdcdc","#dcdcdc"],
    swiperList:[
      {
        src:'/image/basketball.png',
      },
      {
        src:'/image/badminton.png',
      },
      {
        src:'/image/swimming.png',
      },
      {
        src:'/image/fitnessroom.png',
      },
      {
        src:'/image/table.png',
      },
    ],
    btnList:["篮球场","羽毛球","游泳馆","健身房","乒乓球"]
  },
  //根据按钮切换轮播图
  bindBtn(e){
    let index = e.currentTarget.dataset.index;
    let arr = []
    for(let i=0;i<this.data.activeColor.length;i++){
      if(i==index){
        arr.push("#ccccff");
      }else{
        arr.push("#dcdcdc")
      }
    }
    this.setData({
      index:index,
      activeColor:arr
    })
  },
  //当轮播图切换时按钮随之改变
  bindChange(e){
    let index = e.detail.current;
    let arr = [];
    for(let i=0;i<this.data.activeColor.length;i++){
      if(i==index){
        arr.push("#ccccff");
      }else{
        arr.push("#dcdcdc")
      }
    }
    this.setData({
      index:index,
      activeColor:arr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取手机屏幕页面高度
    wx.getSystemInfo({
      success: (res) => {
        let that = this;
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750/clientWidth;
        let rpxHeight = clientHeight*ratio;
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