// pages/fill/fill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allHeight:0,
    location:'',
    time:'',
    date:'',
    friendList:[],
    List:[],
    friendif:false,
    messageList:[
      {
        name:'姓名',
        placeholder:'请输入姓名',
        inputName:'name',
        userdata:''
      },
      {
        name:'手机号',
        placeholder:'请输入11位手机号',
        inputName:'phone',
        userdata:''
      },
      {
        name:'车牌号',
        placeholder:'请输入车牌号',
        inputName:'car',
        userdata:''
      },
    ]
  },
  //添加同行人员
  bindChange(e){
    let index = e.detail.value;
    let friend = this.data.friendList[index]
    let arr = this.data.List;
    arr.push(friend);
    this.setData({
      List:arr,
      friendif:true
    })
    console.log(arr)
  },
  //删除选中的同行人员
  bindDelete(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    let arr = this.data.List;
    arr.splice(index,1);
    this.setData({
      List:arr
    })
  },
  //向数据库上传预约信息
  formSubmit(e){
    console.log(e.detail.value)
    let message = {
      name:e.detail.value.name,
      phone:e.detail.value.phone,
      car:e.detail.value.car,
      friend:this.data.List,
      location:this.data.location,
      date:this.data.date,
      time:this.data.time
    }
    this.cloudDBadd(message)
  },
  cloudDBadd(message){
    if(this.data.date==''){
      wx.showToast({
        title: '请填写日期',
      })
    }else if(message.name==''||message.phone==''){
      wx.showToast({
        title: '请完整填写信息',
      })
    }else{
      wx.showModal({
        title: '确认预约',
        content:message.location,
        success(res){
          if(res.confirm){
            const db = wx.cloud.database()
            db.collection('message').add({
              data:{
                "username":message.name,
                "userphone":message.phone,
                "usercar":message.car,
                "friend":message.friend,
                "location":message.location,
                "date":message.date,
                "time":message.time
              }
            })
          }else{
            wx.showToast({
              title: '未保存',
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database();
    db.collection('test').get().then(res=>{
      this.setData({
        "messageList[0].userdata":res.data[res.data.length-1].username,
        "messageList[1].userdata":res.data[res.data.length-1].userphone,
      })
    })
    db.collection('friend').get().then(res=>{
      let arr = [];
      for(let i=0;i<res.data.length;i++){
        arr.push(res.data[i].username)
      }
      this.setData({
        friendList:arr
      })
    })
    console.log(this.data.friendList)
    wx.getSystemInfo({
      success: (res) => {
        let that = this;
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750/clientWidth;
        let rpxHeight = clientHeight*ratio;
        that.setData({
          allHeight:rpxHeight,
          location:options.location,
          date:options.date,
          time:options.time
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