function Height() {
    breakpoint = 790;
    breakpoint1 = 895;
    breakpoint2 = 640;
    var e = $(window).width();
    if (e >= breakpoint) {
        $(".container").each(function(e) {
            var t = $(this).find(".title").outerHeight(true) + $(this).find(".paragraphs").outerHeight(true) + $(this).find(".signnow").outerHeight(true);
            $(this).find(".image").css({
                height: t,
                overflow: "hidden"
            })
        })
    } else {
        $(".container").each(function() {
            if (e >= breakpoint2) {
                $(this).find(".image").css({
                    height: "446"
                })
            } else {
                $(this).find(".image").css({
                    height: "300"
                })
            }
        })
    }
}

function screenheight() {
    var e = $(window).height();
    var t = $(window).width();
    var headerH = $("#principal_container .header").outerHeight(true);
    var callovH = $("#callofvalue").outerHeight(true);
    var cookie = $(".cookie_container").css("display") == "block";
    var n = e + 100;
    var r = 0;

    if(cookie){
       r = $(".cookie_container").outerHeight(true);
    }

    if (isMobile()) {
        var total = headerH + callovH + r ;
        $("#principal_container").css({
            height: (total + 25) + "px",
            "min-height": (total + 25) + "px"
        });
//        if(e >= (total + 30)){
//            $("#principal_container").css({
//                height: (e - 15) + "px",
//                "min-height": (e - 15) + "px"
//            });
//        }
//        else if(total > e){
//            $("#principal_container").css({
//                height: (total + 30) + "px",
//                "min-height": (total + 30) + "px"
//            });
//        }
//
//        else{
//            $("#principal_container").css({
//                height: e,
//                "min-height": e
//            });
//        }

    } else {
        var i = $("#canvas").css("display") == "block";
        if(i){
            if (t <= 600 || e <= 600) {
                if (e < t) {
                    if (e <= 420) {
                        $("#principal_container").css({
                            height: n + "px",
                            "min-height": n + "px"
                        })
                    } else {
                        $("#principal_container").css({
                            height: e,
                            "min-height": "0px"
                        })
                    }
                } else {
                    $("#principal_container").css({
                        height: e,
                        "min-height": "0px"
                    })
                }
            } else {
                $("#principal_container").css({
                    height: e,
                    "min-height": e
                })
            }
        }
        else{
                $("#principal_container").css({
                    height: e,
                    "min-height": e
                });
            }
        }
}

function form_positioning() {
    var e = $(window).height();
    var t = $(window).width();
    var headerH = $("#principal_container .header").outerHeight(true);
    var n = $("#principal_form").attr("state");
    var r = 0;
    var i = $(".cookie_container").css("display") == "block";
    if (i)
        r = $(".cookie_container").outerHeight(true);

    if(!(isMobile())){
            if (n == "opened") {} else {
                $("#callofvalue").css({
                    top: e * .19 + r
            });
            }
    }
    else{
        if (n == "opened") {} else {
           if(e <= 640){
                $("#callofvalue").css({
                    top: headerH + r + 13
                });
           }
           else{
               $("#callofvalue").css({
                   top: e * .19 + r
               });
           }
        }

    }
}

function scrolltolink() {
    if (window.location.hash) {
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top
        }, "600", "easeOutExpo")
    }
}

function windowResize() {
    var e = $(".container").length;
    var t = $(window).innerWidth();
    var n = "block";
    var r = "none";
    if (t >= 790) {
        if (e <= 3) {
            n = "none";
            r = "block"
        }
    } else if (t > 640) {
        $(".menu").css({
            display: "block"
        })
    } else if (t < 640) {
        r = "none";
        n = "none";
        movilmenuscroll()
    }
    $(".menu .container_left ul.submenu.points").css({
        display: n
    });
    $(".menu .container_left ul.submenu.elements").css({
        display: r
    })
}

function active_element() {
    var e = $(window).innerWidth();
    if (e < 640) {
        movilmenuscroll()
    }
}

function movilmenuscroll() {
    if (!$("#center_email").isOnScreen()) {
        $(".menu").css({
            display: "block"
        })
    } else {
        $(".menu").css({
            display: "none"
        })
    }
}

function activeContainer(e) {
    var t = {};
    var n = [];
    $(e).each(function(e, r) {
        if ($(r).isOnScreen()) n.push(e);
        t[e] = $(r).attr("id")
    });
    if (n.length > 1) {
        var r = t[n[0]];
        var i = t[n[1]];
        if ($("#" + r).plusElement() > $("#" + i).minusElement()) {
            n.pop()
        } else {
            n.shift()
        }
    }
    return {
        0: t,
        1: n
    }
}

function direction(e, t, n) {
    var r = t[0];
    var i = t[1];
    if (n == "up") {
        if (i[0] - 1 >= 0) {
            var s = r[i[0] - 1];
            $("html, body").animate({
                scrollTop: $("#" + s).offset().top
            }, 500)
        }
    } else {
        if (!(i[0] + 1 == e.length)) {
            var s = r[i[0] + 1];
            $("html, body").animate({
                scrollTop: $("#" + s).offset().top
            }, 500)
        }
    }
}

$(document).ready(function() {
    Height();
    form_positioning();
    scrolltolink();
    windowResize();
    $(".submenu").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: .5,
        filter: "",
        easing: "swing",
        begin: function() {},
        end: function() {},
        scrollChange: function(e) {}
    })
});

$(window).load(function() {
    setTimeout(function() {
        screenheight()
    }, 500);
    active_element();
    $(window).scroll(function() {
        active_element()
    })
});

$(window).resize(function() {
    Height();
    screenheight();
    form_positioning();
    windowResize()
});

$.fn.isOnScreen = function() {
    var e = $(window);
    var t = {
        top: e.scrollTop(),
        left: e.scrollLeft()
    };
    t.right = t.left + e.width();
    t.bottom = t.top + e.height();
    var n = this.offset();
    n.right = n.left + this.outerWidth();
    n.bottom = n.top + this.outerHeight();
    return !(t.right < n.left || t.left > n.right || t.bottom < n.top || t.top > n.bottom)
};

$.fn.plusElement = function() {
    var e = $(window);
    var t = {
        top: e.scrollTop()
    };
    t.bottom = t.top + e.height();
    var n = this.offset();
    n.bottom = n.top + this.outerHeight();
    return Math.abs(t.top - n.bottom)
};

$.fn.minusElement = function() {
    var e = $(window);
    var t = {
        top: e.scrollTop()
    };
    t.bottom = t.top + e.height();
    var n = this.offset();
    n.bottom = n.top + this.outerHeight();
    return Math.abs(n.top - t.bottom)
};

$("#sign.submit").on({
    click: function() {
        var link = $(this).find("a").attr("href");
        var status = link == "javascript://nop";

        if (status){
            if(isMobile()){
                $("html, body").animate({
                    scrollTop: $("#principal_form").offset().top
                }, 500);
                $("#center_email").focus();
                open_form($(this));
            }
            else{
                $("html, body").animate({
                    scrollTop: $("#callofvalue").offset().top
                }, 500);
                $("#center_email").focus();
                open_form($(this));
            }
        }
        else{
            window.location.href =  link;
            //$(this).find("a").attr("target","_blank");
            //$(this).find("a").click();
        }
    }
});

$("#up_arrow").on({
    click: function() {
        var e = $("body").children();
        var t = jQuery.grep(e, function(e, t) {
            return $(e).css("position") == "relative"
        });
        var n = activeContainer(t);
        direction(t, n, "up")
    }
});

$("#down_arrow").on({
    click: function() {
        var e = $("body").children();
        var t = jQuery.grep(e, function(e, t) {
            return $(e).css("position") == "relative"
        });
        var n = activeContainer(t);
        direction(t, n, "down")
    }
});