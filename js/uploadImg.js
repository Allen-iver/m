var dsshop = dsshop || {};
(function () {
    dsshop.uploadImg = {
        init : {
            initUploadImgBtn: function () {
                $('.login_zc').click(function () {
                    var data = $('.cz_form').serialize();
                    $.ajax({
                        url: 'http://api.loseu.cn/index.php/home/user/uploadPortrait',
                        data: data,
                        type: 'post',
                        dataType: 'json',
                        success: function (msg) {
                            if (msg.err_no == '0') {
                                mui.toast(msg.message, {duration: 1000, type: "div"});
                                window.location.href = '../index.html#tab5';
                            } else {
                                mui.toast(msg.message, {duration: 1000, type: "div"});
                            }
                        }
                    });
                });
            }
        },
        initData: function () {
            dsshop.uploadImg.init.initUploadImgBtn();
        }
    };
    dsshop.uploadImg.initData();
})();