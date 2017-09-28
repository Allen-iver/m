var dsshop = dsshop || {};
(function () {
    dsshop.changePwd = {
        init: {
            initChangePwd: function (){
                $(".login_zc").on('touchstart',function () {
                    //获取表单里面的数据,进行提交
                    var data = $('.cz_form').serialize();
                    $.ajax({
                        url: 'http://api.loseu.cn/index.php/home/user/changePwd',
                        data: data,
                        dataType: 'json',
                        type: 'post',
                        success: function (msg) {
                            console.log(msg);
                            if(msg.err_no == '0'){
                                //注册成功
                                window.sessionStorage.setItem('tel',tel);
                                window.sessionStorage.setItem('user_name',user_name);
                                window.sessionStorage.setItem('password',password);
                                window.location.href = './login.html';
                            }else {
                                mui.toast(msg.message,{duration:1000,type: 'div'});
                            }
                        }
                    });
                });
            }
        },
        initData:function () {
            this.init.initChangePwd();
        }
    };
    dsshop.changePwd.initData();
})();