"use strict";
function gtag() {
    dataLayer.push(arguments)
}
function string_to_slug(e) {
    e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase();
    for (var t = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;", a = 0, n = t.length; a < n; a++)
        e = e.replace(new RegExp(t.charAt(a),"g"), "aaaaeeeeiiiioooouuuunc------".charAt(a));
    return e = e.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
}
window.dataLayer = window.dataLayer || [],
// gtag("js", new Date),
// gtag("config", "G-1V995LWDGC"),
$(function() {
    var e = gsap.timeline({
        repeat: -1,
        paused: !0
    });
    gsap.set(".main-banner .slides", {
        y: 150
    });
    var t = window.innerWidth;
    992 < t ? e.to(".main-banner .slides", {
        y: 0,
        duration: 1,
        ease: Power4.easeOut
    }).to(".main-banner .slides", {
        y: -150,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -300,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -450,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2") : t < 991 && 769 < t ? e.to(".main-banner .slides", {
        y: 0,
        duration: 1,
        ease: Power4.easeOut
    }).to(".main-banner .slides", {
        y: -125,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -260,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -450,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2") : t < 768 && 576 < t ? e.to(".main-banner .slides", {
        y: 0,
        duration: 1,
        ease: Power4.easeOut
    }).to(".main-banner .slides", {
        y: -92,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -180,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -300,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2") : (t < 575 && 481 < t || t < 480) && e.to(".main-banner .slides", {
        y: -14,
        duration: 1,
        ease: Power4.easeOut
    }).to(".main-banner .slides", {
        y: -92,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -170,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2").to(".main-banner .slides", {
        y: -250,
        duration: 1,
        ease: Power4.easeOut
    }, "+=2"),
    setTimeout(function() {
        e.play()
    }, 500),
    AOS.init();
    var a = 0;
    window.addEventListener("scroll", function() {
        a <= 10 ? a++ : AOS.refresh()
    })
}),
Vue.filter("slug", function(e) {
    return e ? string_to_slug(e) : ""
}),
Vue.filter("slugCard", function(e) {
    if (!e)
        return "";
    e = string_to_slug(e);
    return e = "col-12 col-sm-6 col-lg-4 mb-5 ".concat(e)
});
var app = new Vue({
    el: "#tipos",
    data: propiedades,
    mounted: function() {
        var t = $(".gridPropiedades").isotope();
        $(".filtro-cont button").on("click", function() {
            var e = $(this).data("control");
            t.isotope({
                filter: e
            }),
            $(".filtro-cont button").removeClass("is-active"),
            $(this).addClass("is-active"),
            e && (".casas" === e ? gtag("event", "click_filtro", {
                event_category: "filtro",
                event_label: "casas"
            }) : ".departamentos" === e && gtag("event", "click_filtro", {
                event_category: "filtro",
                event_label: "departamentos"
            }))
        }),
        $(function() {
            var t = $(".galeria .slider").flickity({
                pageDots: !1,
                lazyLoad: 2,
                autoPlay: !1,
                pauseAutoPlayOnHover: !1,
                wrapAround: !0,
                prevNextButtons: !1,
                adaptiveHeight: !0
            });
            $(".button--previous").on("click", function() {
                t.flickity("previous")
            }),
            $(".button--next").on("click", function() {
                t.flickity("next")
            }),
            $(".modal").on("shown.bs.modal", function(e) {
                t.flickity("resize")
            })
        }),
        $(".card-tipo .btn-modal").on("click", function() {
            gtag("event", "click_propiedades", {
                event_category: "opciones",
                event_label: $(this).data("slug")
            })
        })
    }
});
function fPhoneInput(e) {
    var t = document.getElementById("phoneInput").value;
    t && "" != t ? (t = "+52" + t,
    document.getElementById("phone").value = t) : (document.getElementById("phone").value = "",
    document.getElementById("phoneInput").focus())
}
document.getElementById("phoneInput").addEventListener("change", fPhoneInput);
