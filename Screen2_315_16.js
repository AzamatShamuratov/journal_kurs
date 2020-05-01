/*
 * JS for Screen2_315_16 generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '28b805d4-0cb6-47c3-ba4c-e8a18ad0fc32';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "Screen1_314_16",
    "location": "Screen1_314_16.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Screen2_315_16",
    "location": "Screen2_315_16.html"
}];

function Screen2_315_16_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilecarousel_17': 'Screen2_315_16_mobilecarousel_17',
        'mobilecarouselitem_18': 'Screen2_315_16_mobilecarouselitem_18',
        'mobilelabel_36': 'Screen2_315_16_mobilelabel_36',
        'mobilelabel_37': 'Screen2_315_16_mobilelabel_37',
        'mobilelabel_38': 'Screen2_315_16_mobilelabel_38',
        'mobilelabel_39': 'Screen2_315_16_mobilelabel_39',
        'mobilelabel_40': 'Screen2_315_16_mobilelabel_40',
        'mobilelabel_41': 'Screen2_315_16_mobilelabel_41',
        'mobilecarouselitem_19': 'Screen2_315_16_mobilecarouselitem_19',
        'mobilelabel_42': 'Screen2_315_16_mobilelabel_42',
        'mobilelabel_43': 'Screen2_315_16_mobilelabel_43',
        'mobilelabel_48': 'Screen2_315_16_mobilelabel_48',
        'mobilelabel_49': 'Screen2_315_16_mobilelabel_49',
        'mobilelabel_44': 'Screen2_315_16_mobilelabel_44',
        'mobilelabel_45': 'Screen2_315_16_mobilelabel_45',
        'mobilelabel_47': 'Screen2_315_16_mobilelabel_47',
        'mobilelabel_50': 'Screen2_315_16_mobilelabel_50',
        'mobilelabel_46': 'Screen2_315_16_mobilelabel_46',
        'mobilecarouselitem_20': 'Screen2_315_16_mobilecarouselitem_20',
        'mobilelabel_51': 'Screen2_315_16_mobilelabel_51',
        'mobilelabel_55': 'Screen2_315_16_mobilelabel_55',
        'mobilelabel_57': 'Screen2_315_16_mobilelabel_57',
        'mobilelabel_59': 'Screen2_315_16_mobilelabel_59',
        'mobilelabel_60': 'Screen2_315_16_mobilelabel_60',
        'mobilelabel_58': 'Screen2_315_16_mobilelabel_58',
        'mobilelabel_56': 'Screen2_315_16_mobilelabel_56',
        'mobilelabel_52': 'Screen2_315_16_mobilelabel_52',
        'mobilelabel_53': 'Screen2_315_16_mobilelabel_53',
        'mobilelabel_54': 'Screen2_315_16_mobilelabel_54',
        'mobilelabel_62': 'Screen2_315_16_mobilelabel_62',
        'mobilelabel_61': 'Screen2_315_16_mobilelabel_61',
        'mobilecarouselitem_33': 'Screen2_315_16_mobilecarouselitem_33',
        'mobilelabel_63': 'Screen2_315_16_mobilelabel_63',
        'mobilelabel_70': 'Screen2_315_16_mobilelabel_70',
        'mobilelabel_72': 'Screen2_315_16_mobilelabel_72',
        'mobilelabel_74': 'Screen2_315_16_mobilelabel_74',
        'mobilelabel_64': 'Screen2_315_16_mobilelabel_64',
        'mobilelabel_71': 'Screen2_315_16_mobilelabel_71',
        'mobilelabel_66': 'Screen2_315_16_mobilelabel_66',
        'mobilelabel_68': 'Screen2_315_16_mobilelabel_68',
        'mobilelabel_69': 'Screen2_315_16_mobilelabel_69',
        'mobilelabel_67': 'Screen2_315_16_mobilelabel_67',
        'mobilelabel_65': 'Screen2_315_16_mobilelabel_65',
        'mobilelabel_75': 'Screen2_315_16_mobilelabel_75',
        'mobilecarouselitem_34': 'Screen2_315_16_mobilecarouselitem_34',
        'mobilelabel_76': 'Screen2_315_16_mobilelabel_76',
        'mobilelabel_78': 'Screen2_315_16_mobilelabel_78',
        'mobilelabel_79': 'Screen2_315_16_mobilelabel_79',
        'mobilelabel_80': 'Screen2_315_16_mobilelabel_80',
        'mobilelabel_81': 'Screen2_315_16_mobilelabel_81',
        'mobilelabel_77': 'Screen2_315_16_mobilelabel_77',
        'mobilelabel_82': 'Screen2_315_16_mobilelabel_82',
        'mobilelabel_93': 'Screen2_315_16_mobilelabel_93',
        'mobilelabel_94': 'Screen2_315_16_mobilelabel_94',
        'mobilelabel_95': 'Screen2_315_16_mobilelabel_95',
        'mobilelabel_83': 'Screen2_315_16_mobilelabel_83',
        'mobilelabel_84': 'Screen2_315_16_mobilelabel_84',
        'mobilelabel_85': 'Screen2_315_16_mobilelabel_85',
        'mobilecarouselitem_35': 'Screen2_315_16_mobilecarouselitem_35',
        'mobilelabel_86': 'Screen2_315_16_mobilelabel_86',
        'mobilelabel_92': 'Screen2_315_16_mobilelabel_92',
        'mobilelabel_91': 'Screen2_315_16_mobilelabel_91',
        'mobilelabel_88': 'Screen2_315_16_mobilelabel_88',
        'mobilelabel_90': 'Screen2_315_16_mobilelabel_90',
        'mobilelabel_87': 'Screen2_315_16_mobilelabel_87',
        'mobilebutton_96': 'Screen2_315_16_mobilebutton_96'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'Screen2_315_16';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Screen2_315_16_onLoad = function() {
        Screen2_315_16_elementsExtraJS();
        Screen2_315_16_deviceEvents();
        Screen2_315_16_windowEvents();
        Screen2_315_16_elementsEvents();
    };
    // screen window events
    function Screen2_315_16_windowEvents() {
        $('#Screen2_315_16').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Screen2_315_16_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Screen2_315_16_elementsExtraJS() {
        // screen (Screen2_315_16) extra code
        /* mobilecarousel_17*/
        var mobilecarousel_17_options = {
            indicatorsListClass: "ui-carousel-indicators",
            showIndicator: true,
            showTitle: true,
            titleBuildIn: false,
            titleIsText: true,
            animationDuration: 250,
            useLegacyAnimation: false,
            enabled: true,
        }
        Apperyio.__registerComponent('mobilecarousel_17', new Apperyio.ApperyMobileCarouselComponent("Screen2_315_16_mobilecarousel_17", mobilecarousel_17_options));
        $("#Screen2_315_16_mobilecarouselitem_18").attr("reRender", "mobilecarousel_17");
        $("#Screen2_315_16_mobilecarouselitem_19").attr("reRender", "mobilecarousel_17");
        $("#Screen2_315_16_mobilecarouselitem_20").attr("reRender", "mobilecarousel_17");
        $("#Screen2_315_16_mobilecarouselitem_33").attr("reRender", "mobilecarousel_17");
        $("#Screen2_315_16_mobilecarouselitem_34").attr("reRender", "mobilecarousel_17");
        $("#Screen2_315_16_mobilecarouselitem_35").attr("reRender", "mobilecarousel_17");
    };
    // screen elements handler
    function Screen2_315_16_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Screen2_315_16_mobilefooter [name="mobilebutton_96"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        transition: 'slidedown',
                        reverse: false
                    });
                }
            },
        }, '#Screen2_315_16_mobilefooter [name="mobilebutton_96"]');
    };
    $(document).off("pagebeforeshow", "#Screen2_315_16").on("pagebeforeshow", "#Screen2_315_16", function(event, ui) {
        Apperyio.CurrentScreen = "Screen2_315_16";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Screen2_315_16_onLoad();
};
$(document).off("pagecreate", "#Screen2_315_16").on("pagecreate", "#Screen2_315_16", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Screen2_315_16_js();
});