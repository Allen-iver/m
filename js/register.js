var dsshop = dsshop || {};
(function () {
    dsshop.register ={
        init: {
            initCodeBtn: function () {
                $('.getCode_btn').on('touchstart', function () {
                    $.ajax({
                        url: "http://api.loseu.cn/index.php/home/user/verify",
                        data:{
                            tel:$("#tel").val()
                        },
                        type: "post",
                        dataType: 'json',
                        beforeSend:function () {
                            var tel = $('#tel').val();
                            var reg=/^1[3,5,8,7]{1}[0-9]{9}$/;
                            var flag = reg.test(tel);
                            if(!flag){
                                mui.toast('手机号错误,亲',{ duration:'1000', type:'div' });
                            }
                        },
                        success: function (data) {
                            console.log(data);
                            // if (msg.err_no === 0) {
                            //     window.location.hfer = './login.html';
                            // } else {
                            //     mui.toast(msg.err_msg,{duration:1000, type:'div'});
                            // }
                        }
                    });
                });
            },
            // 初始化注册按钮
            initRegistrBtn:function () {
                $(".login_zc").on('touchstart',function () {
                    //获取表单里面的数据,进行提交
                    var data = $('.cz_form').serialize();
                    $.ajax({
                       url: 'http://api.loseu.cn/index.php/home/user/register',
                        data: data,
                        dataType: 'json',
                        type: 'post',
                        success: function (msg) {
                            console.log(msg);
                            if(msg.err_no == '0'){
                                //注册成功
                                window.sessionStorage.setItem('tel',tel);
                                window.sessionStorage.setItem('name',user_name);
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

        initData:function(){
            //登录按钮的具体操作
            this.init.initCodeBtn();
            this.init.initRegistrBtn();
        }
    };
    dsshop.register.initData();
})();