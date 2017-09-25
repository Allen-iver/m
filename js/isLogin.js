var dsshop = dsshop || {};
// 判断用户是否登录
(function () {
    dsshop.isLogin = {
        init:{
            initIsLogin:function () {
                $.ajax({
                   url: '/home/user/isLogin',
                    type: 'post',
                    dataType: 'json',
                    success: function (msg) {
                        console.log(msg);
                        if(msg.err_no === 0){
                            window.location.href = './user/login.html';
                        } else {
                            mui.toast(msg.message,{duration: 1000, type: 'div'});
                            setTimeout(function () {
                                window.location.href = "userindex_common.html";
                            });
                        }
                    }
                });
            }
        },
        initData:function () {
            // 绑定事件初始化
            this.init.initIsLogin();
        }
    };
    dsshop.isLogin.initData();
})();