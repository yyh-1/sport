// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    contentList:[]
  },
  //获取表单信息
  formSubmit(e){
    let message = {
      name:e.detail.value.name,
      id:e.detail.value.id
    }
    this.cloudDBadd(message)
  },
  //向数据库添加同行人员
  cloudDBadd(message){
    if(message.name==''||message.id==''){
      wx.showToast({
        title: '请完整填写信息',
      })
    }else{
      const db = wx.cloud.database()
      db.collection('friend').add({
        data:{
          "username":message.name,
          "userid":message.id
        }
      })
      wx.showToast({
        title: '添加成功',
      })
    }
  },
  //删除同行人员
  bindDelect(e){
    let a = e.currentTarget.dataset._id
    const db = wx.cloud.database()
    db.collection('friend').doc(a).remove({
      success: function(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从数据库获取同行人员信息
    const db = wx.cloud.database();
    db.collection('friend').get().then(res=>{
      console.log(res.data)
      let arr = [];
      for(let i=0;i<res.data.length;i++){
        arr.push({name:res.data[i].username,id:res.data[i].userid,_id:res.data[i]._id})
      }
      this.setData({
        contentList:arr
      })
    })
    //获取页面高度
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