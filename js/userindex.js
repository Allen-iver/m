var dsshop = dsshop || {};
(function () {
    dsshop.userindex= {
        init: {
            checkUserLogin: function () {
                $.ajax({
                    url: '/home/user/isLogin',
                    data: data,
                    type: 'get',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.err_no === 0) {
                            mui.toast(msg.message, {duration: 1000, type: 'div'});
                            window.location.href = './user/login.html';
                        } else {
                            mui.toast(msg.message, {duration: 1000, type: 'div'});
                            window.location.href = './userindex.html';
                        }
                    }
                });
            }
        }
    }
})();



