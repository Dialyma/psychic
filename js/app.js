class physic {
    constructor() {
        /*Get Window Height and Width*/
        this.wrap_width = window.innerWidth;
        this.wrap_height = window.innerHeight;
        this.app = "";
    }

    init() {
        /*Initialize Loading*/
        this.loading();
        /*Prevent From Inspect and Ctrl+U*/
        this.preventInspect();
    }
    preventInspect() {
        document.onkeydown = function(e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                    e.keyCode === 86 ||
                    e.keyCode === 85 ||
                    e.keyCode === 117)) {
                alert('not allowed');
                return false;
            } else {
                return true;
            }
        };
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    loading() {
        var x = 0;
        var _this = this;
        var isLoading = setInterval(function() {
            $('.barInner').css({ 'width': x + "%" });
            x++;
            if (x == 30) {
                $('.anim_load b').css({ "transform": "translateY(-100%)" });
            } else if (x == 60) {
                $('.anim_load b').css({ "transform": "translateY(-200%)" });
            } else if (x == 75) {
                $('.anim_load b').css({ "transform": "translateY(-300%)" });
            }
            if (x == 100) {
                $('body').addClass('loaded');
                clearInterval(isLoading);
                setTimeout(function() {
                    /*Change View*/
                    _this.viewChange();
                }, 1000)
            }
        }, 50);
    }

    viewChange() {
        /*For Animate Room On Init*/
        $('#room').addClass('bottom_view');
        setTimeout(function() {
            $('#room').removeClass('bottom_view').addClass('left_view');
            setTimeout(function() {
                $('#room').removeClass('left_view').addClass('right_view');
                setTimeout(function() {
                    $('#room').removeClass('right_view');
                    $('#setting').show();
                }, 3600);
            }, 2500);
        }, 1500);

    }

    changeLight(op) {
        /*Change Light  (Op is Select Box)*/
        var val = $(op).val();
        $('#room_img').css({
            "transition-delay": "initial",
            "opacity": val / 10
        })
    }

    ballIntensity(op) {
        /*Change Ball Light  (Op is Select Box)*/
        var val = $(op).val();
        $('#light_globe').css({
            "transition-delay": "initial",
            "opacity": val / 10
        })
    }



    cloudSpeed(op) {
        /*Change Cloud Speed (Op is Select Box)*/
        var val = Number($(op).val());
        $('#thunder img').eq(0).css({
            "animation-duration": val + "s",
        })

        $('#thunder img').eq(1).css({
            "animation-duration": (val + 2) + "s",
        })

        $('#thunder img').eq(2).css({
            "animation-duration": (val + 1) + "s",
        })
    }

    ballVibrate(op) {
        /*Vibarate Ball (Op is Select Box)*/

        var val = $(op).val();
        $('.glb').css({
            "animation-duration": val + "s",
        })
    }

}

/*Resize Function fix the ball in middle of table */

var _oxdc = ["resize", "width", "calculateNewScale", ".obj_wrap", "removeAttr", "percentageOn1", "css", 1400, "style"]

$(window)["resize"](function() {
    $('body').addClass('no-trans');
    setTimeout(function() {
        $('body').removeClass('no-trans');
    }, 1000)
    _oxdc_ox2()
})

var _oxdc_ox2 = function() {
    _oxdc[5] = $(window)[_oxdc[1]]() / 1359;
    $(_oxdc[3])[_oxdc[6]]({
        "-moz-transform": "scale(" + _oxdc[5] + ")",
        "-webkit-transform": "scale(" + _oxdc[5] + ")",
        "transform": "scale(" + _oxdc[5] + ")"
    });
}
if ($(window)[_oxdc[1]]() > _oxdc[7]) {
    _oxdc_ox2();
}
_oxdc_ox2();