var dsshop = dsshop || {};
(function ($dsshop) {
    dsshop.common = {
      // 初始化底部通栏的事件
        initBottomEvent:function () {
            var tabs = document.querySelectorAll(".cz_bar_bottom a");
            //使用原生,减少依赖
            for(var i=0;i<tabs.length;i++){
                tabs[i].onclick = function () {
                    $dsshop.location.href = this.href;
                }
            }
        }
    };
})(window);