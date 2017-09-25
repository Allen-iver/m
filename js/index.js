/*初始化代码，编写具体逻辑*/
/*面向对象编程
* 以后要面向编程。一般一个项目对应一个对象 dsshop ，一般以域名开头
* 为了协同开发，我们就可能写很多的js 文件.
* 但是很多的js 文件又只能有一个dsshop 对象.
* */
var dsshop = dsshop || {}; // 或运算
(function ($dsshop) {
    dsshop.init = {
      initBanner:function () {
          /*
            * 1:获取数据
            * 2：把数据解析，放在页面对应的位置,跟标签进行组装，（使用模板）
            * 3: 这些数据都已经写到页面上面来，我在这里在进行实例化轮播图
            * */
          $.ajax({
             url:"/product/queryProduct",
             data:{
                 page:1,
                 pageSize:4,
                 price:2
             },
             type:"get",
             dataType:"json", //预期服务器返回的类型, 自动转化为对象
             success: function (data) {
                 // console.log(data);
                 console.log("正在去重新加载轮播图的数据");
                 // 使用模板解析数据
                 var html = template("bannerId",data);
                 $(".cz_banner").html(html);
                 // 初始化轮播图
                 var gallery = mui('.cz_banner');
                 gallery.slider({
                     interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
                 });
             }
          });
      },

        initData:function () {
          //初始化轮播图
            this.initBanner();
            //初始化滚动轮
            this.initScroll();
            // 检查是否登录
            this.initLogin();

        },
        initScroll:function () {

          //发送数据到后台获取数据
            var params = {
                page:1,
                pageSize: 2,
                price:1
            };
            var _this = this;
          //进行scroll初始化
            mui.init({
                pullRefresh : {
                    container:"#pullrefresh",
                    down : {
                        callback: function () {
                            _this.initBanner();
                            //结束这个下拉刷新
                            mui("#pullrefresh").pullRefresh().endPulldownToRefresh();
                        }
                    },
                    up : {
                        contentrefresh: "正在加载...",
                        callback: function () {
                            $.ajax({
                               type: "get",
                                data: params,
                                dateType: "json",
                                url: "/product/queryProduct",
                                success: function (data) {
                                    params.page++;
                                    //使用模板解析数据,然后将数据渲染到页面
                                    var html = template("shopId",data);
                                    $(".cz_shop").append(html);
                                    //结束滚动加载
                                    mui("#pullrefresh").pullRefresh().endPulldownToRefresh();
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    //初始化数据的调用
    dsshop.init.initData();
})(window);