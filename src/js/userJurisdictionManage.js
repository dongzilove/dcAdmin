layui.use('layer', function() {
    var $ = layui.jquery;
    //增加权限按钮
    $('.add_authority').on('click', function () {
        layer.open({
            type: 2,
            title: '增加权限'
            , area: ['60%', '90%']
            , shade: 0
            , maxmin: true
            , content: 'addAuthority.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
//        保存按钮
    $('.save').on('click', function() {
        layer.open({
            type: 1,
            title: '保存提示',
            skin: 'layui-layer-rim', //加上边框
            area: ['420px', '140px'], //宽高
            content: '<div style="text-align: center"><p style="margin-top: 20px">提示:保存成功</p></div>'

        })
    })
    //删除按钮
    $('.delete').each(function() {
        var $that = $(this);
        $that.on('click', function() {
            layer.open({
                type: 1,
                title: '删除确认',
                skin: 'layui-layer-rim', //加上边框
                area: ['420px', '140px'], //宽高
                btn:['确定','返回'],
                content: '<div class="delete_affirm">\n' +
                '    <p>真的删除？该操作不可恢复！</p>\n' +
                '</div>'
            })
        })
    })
    //参与游戏下级菜单participationGameSubordinate
    $('.participationGameSubordinate').on('click', function () {
        layer.open({
            type: 2,
            title: '参与游戏下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'participationGameSubordinate.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
    //彩种下级菜单
    $('.cz_submenus').on('click', function () {
        layer.open({
            type: 2,
            title: '彩种下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'cz_submenus.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
    //财务管理下级菜单
    $('.financeSubmenus').on('click', function () {
        layer.open({
            type: 2,
            title: '财务管理下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'financeSubmenus.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
    //财务管理明细下级菜单FinancialDetailsSubordinate
    $('.FinancialDetailsSubordinate').on('click', function () {
        layer.open({
            type: 2,
            title: '财务管理明细下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'FinancialDetailsSubordinate.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
    //游戏记录下级菜单gameRecordSubordinate
    $('.gameRecordSubordinate').on('click', function () {
        layer.open({
            type: 2,
            title: '游戏记录下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'gameRecordSubordinate.html'
            ,zIndex: layer.zIndex //重点1
        })
    })
    // 游戏记录明细下级菜单gameDetailMenu
    $('.gameDetailMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '游戏记录明细下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'gameDetailMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 消息管理下级菜单informationMenu
    $('.informationMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '消息管理下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'informationMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 消息管理明细下级菜单informationDetailMenu
    $('.informationDetailMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '消息管理明细下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'informationDetailMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 代理管理下级菜单agencyMenu
    $('.agencyMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '代理管理下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'agencyMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 代理管理明细下级菜单agencyDetailMenu
    $('.agencyDetailMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '代理管理明细下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'agencyDetailMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 账户设定下级菜单AccountSettings
    $('.AccountSettings').on('click', function () {
        layer.open({
            type: 2,
            title: '账户设定下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'AccountSettings.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 视讯游戏下级菜单VideoGame
    $('.VideoGame').on('click', function () {
        layer.open({
            type: 2,
            title: '视讯游戏下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'VideoGame.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 帮助中心下级菜单helpCenter
    $('.helpCenter').on('click', function () {
        layer.open({
            type: 2,
            title: '帮助中心下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'helpCenter.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    // 体育游戏下级菜单sportsGames
    $('.sportsGames').on('click', function () {
        layer.open({
            type: 2,
            title: '体育游戏下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'sportsGames.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    //默认菜单下级菜单TheDefaultMenu
    $('.TheDefaultMenu').on('click', function () {
        layer.open({
            type: 2,
            title: '默认菜单下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'TheDefaultMenu.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    //默认菜单明细下级菜单TheDefaultMenuDetail
    $('.TheDefaultMenuDetail').on('click', function () {
        layer.open({
            type: 2,
            title: '默认菜单明细下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'TheDefaultMenuDetail.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    //第三方支付下级菜单thirdpartyPay
    $('.thirdpartyPay').on('click', function () {
        layer.open({
            type: 2,
            title: '第三方支付下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'thirdpartyPay.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
    //参与电子游戏下级菜单participationElectronicGame
    $('.participationElectronicGame').on('click', function () {
        layer.open({
            type: 2,
            title: '参与电子游戏下级菜单'
            , area: ['100%', '100%']
            , shade: 0
            , maxmin: true
            , content: 'participationElectronicGame.html'
            ,zIndex: layer.zIndex //重点1
        })
    });
});