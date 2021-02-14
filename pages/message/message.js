// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    inputList:[
      {
        text:"姓名",
        placeholder:"请输入姓名",
        type:"text",
        inputName:"name",
        userdata:''
      },
      {
        text:"性别",
        placeholder:"男or女",
        type:"text",
        inputName:"sex",
        userdata:''
      },
      {
        text:"电话号码",
        placeholder:"请输入11位电话号码",
        type:"number",
        inputName:"phone",
        userdata:''
      },
      {
        text:"身份证号",
        placeholder:"请输入18位身份证号",
        type:"idcard",
        inputName:"id",
        userdata:''
      }
    ]
  },
  //向数据库表test存入个人信息
  formSubmit(e){
    console.log(e.detail.value)
    let message = {
      name:e.detail.value.name,
      sex:e.detail.value.sex,
      phone:e.detail.value.phone,
      id:e.detail.value.id
    }
    console.log(message)
    this.cloudDBadd(message)
  },
  cloudDBadd(message){
    const db = wx.cloud.database()
    db.collection('test').add({
      data:{
        "username":message.name,
        "sex":message.sex,
        "userphone":message.phone,
        "userid":message.id
      }
    })
    wx.showToast({
      title: '保存成功',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从数据库表test获取个人信息数据
    const db = wx.cloud.database();
    db.collection('test').get().then(res=>{
      console.log(res.data)
      this.setData({
        "inputList[0].userdata":res.data[res.data.length-1].username,
        "inputList[1].userdata":res.data[res.data.length-1].sex,
        "inputList[2].userdata":res.data[res.data.length-1].userphone,
        "inputList[3].userdata":res.data[res.data.length-1].userid,
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