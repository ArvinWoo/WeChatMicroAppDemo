//search.js  
//获取应用实例  
var app = getApp();
Page({
  data: {
    /** 
    * 页面配置 
    */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    goto:'../images/site/search/goto.png',//lineSearch 图标
    searchLinePlaceholder:'请输入周边范围',//lineSearch input 提示
    styleVisibility:'visShow',//lineSearch 公里 Style属性
    iconZaiJian: "../images/site/search/zaijian.png",
    iconTuoYuan: "../images/site/search/tuoyuan.png",
    iconChouJian: "../images/site/search/choujian.png",
    iconDingWei: "../images/site/search/dingwei.png",
    Tab1:'',
    Tab2:'disNone',
    markers: [{
      iconPath:"../images/site/search/zaijian.png",
      id: 0,
      latitude: 40.002607,
      longitude: 116.487847,
      width: 35,
      height: 45
    }],
  },
  onLoad: function () {
    var that = this;
    /** 
    * 获取系统信息 
    */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log("获取位置信息成功：");
        console.log(JSON.stringify(res));
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
        });
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log('Get Position Complete')
      }
    });
  },
  /** 
  * 滑动切换tab 
  */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 按周边搜索
   */
  swichAroundFn: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        searchLinePlaceholder: '请输入周边范围',
        styleVisibility: 'visShow',
        Tab2:'disNone',
        Tab1:'',
      }) 
    }
  },
   /** 
   * 按具体工地搜索
   */
  swichSpecificFn: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        searchLinePlaceholder: '按工地编码、工地名称查询',
        styleVisibility: 'visHide',
        Tab1: 'disNone',
        Tab2: '',
      })
    }
  },
  dingweiFn:function(e){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log("获取位置信息成功：");
        console.log(JSON.stringify(res));
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
        });
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log('Get Position Complete')
      }
    });
    // 消息组件 toast
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
  }

})  