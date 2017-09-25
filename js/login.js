var dsshop = dsshop || {};
(function () {
    dsshop.login = {
        init: {
            initLoginBtn: function () {
                $('#loginbtn').click(function () {
                    var data = $(".login_form").serialize();  //序列化操作
                    $.ajax({
                        url: "http://api.loseu.cn/index.php/home/user/login.html",
                        data: data,
                        dataType: 'json',
                        type: 'post',
                        success: function (msg) {
                            if (msg.err_no == 0) {
                                var user_id = msg.user_msg.id;
                                var tel = msg.user_msg.tel;
                                var name = msg.user_msg.name;
                                window.sessionStorage.setItem('tel', tel);
                                window.sessionStorage.setItem('user_id', user_id);
                                window.sessionStorage.setItem('name', name);
                                window.sessionStorage.setItem('come_from_login', true);
                                window.location.href = '../index.html';
                            } else if (msg.err_no == 1) {
                                mui.toast(msg.err_msg, {duration: 1000, type: "div"});
                            }
                        }
                    });
                });
            }
        },
        initData: function () {
            dsshop.login.init.initLoginBtn();
        }
    };
    dsshop.login.initData();

})();

// 13311221135