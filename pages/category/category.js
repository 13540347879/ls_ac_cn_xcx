// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeId: '1',

    typeList:[
      { 'id': '1', 'title':' 分类1'},
      { 'id': '2', 'title': '分类2' },
      { 'id': '3', 'title': '分类3' },
      { 'id': '4', 'title': '分类4' },
      { 'id': '5', 'title': '分类5' },
      { 'id': '6', 'title': '分类6' },
      { 'id': '7', 'title': '分类6' }
    ]

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onload: function () {
    
  },

   selectType(e){
    // 点击获取当前选中id
    //  console.log(e.currentTarget.dataset.id)
     this.setData({
       activeId : e.currentTarget.dataset.id
     })
     console.log(e.currentTarget.dataset.id)

  }
})