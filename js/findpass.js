var dsshop = dsshop || {};
(function () {
    dsshop.findpass={
        init: {
            initCodeBtn: function () {
                $('.getCode_btn').on('touchstart',function () {
                    $.ajax({
                        url: "http://api.loseu.cn/index.php/home/user/verify",
                        data: {
                            tel:$("#tel").val()
                        },
                        type: 'post',
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
                        }
                    });
                });
            },

            // 初始化找回密码按钮
            initFindpassBtn: function(){
                $('.login_zc').on('touchstart',function () {
                    // 获取表单里面的数据进行提交
                    var data = $('.cz_form').serialize();  //内容序列化
                    $.ajax({
                        url: 'http://api.loseu.cn/index.php/home/user/findPwd',
                        data: data,
                        type: 'post',
                        dataType: 'json',
                        success: function (msg) {
                            if(msg.err_no == '0'){
                                window.location.href = './login.html';
                                window.sessionStorage.setItem('tel',tel);
                                window.sessionStorage.setItem('password',password);
                            }else {
                                mui.toast(msg.message,{duration:1000,type: 'div'});
                            }
                        }
                    });
                });
            }
        },
        initData:function () {
            //修改密码的具体操作
            this.init.initCodeBtn();
            this.init.initFindpassBtn();
        }
    }

})();