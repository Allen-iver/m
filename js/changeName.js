var dsshop = dsshop || {};
(function () {
    dsshop.changeName = {
        init : {
            initChangeNameBtn: function () {
                $(".login_zc").on('touchstart',function () {
                    //获取表单里面的数据,进行提交
                    var data = $('.cz_form').serialize();
                    $.ajax({
                        url: 'http://api.loseu.cn/index.php//home/user/changeUsername',
                        data: data,
                        dataType: 'json',
                        type: 'post',
                        success: function (msg) {
                            console.log(msg);
                            if(msg.err_no == '0'){
                                //修改成功
                                window.sessionStorage.setItem('name',name);
                                window.location.href = '../index.html#tab5';
                            }else {
                                mui.toast(msg.message,{duration:1000,type: 'div'});
                            }
                        }
                    });
                });
            }
        },
        initData: function () {
            this.init.initChangeNameBtn();
        }
    };
    dsshop.changeName.initData();
})();