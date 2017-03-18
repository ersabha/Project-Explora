                            var setREVStartSize = function() {
                                try {
                                    var e = new Object,
                                        i = jQuery(window).width(),
                                        t = 9999,
                                        r = 0,
                                        n = 0,
                                        l = 0,
                                        f = 0,
                                        s = 0,
                                        h = 0;
                                    e.c = jQuery('#rev_slider_1_2');
                                    e.gridwidth = [1180];
                                    e.gridheight = [879];
                                    e.sliderLayout = "fullwidth";
                                    if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                                            f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                                        }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                                        var u = (e.c.width(), jQuery(window).height());
                                        if (void 0 != e.fullScreenOffsetContainer) {
                                            var c = e.fullScreenOffsetContainer.split(",");
                                            jQuery.each(c, function(e, i) {
                                                u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                                            }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                                        }
                                        f = u
                                    } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
                                    e.c.closest(".rev_slider_wrapper").css({
                                        height: f
                                    })
                                } catch (d) {
                                    console.log("Failure at Presize of Slider:" + d)
                                }
                            };
                            setREVStartSize();
                            var tpj = jQuery;
                            tpj.noConflict();
                            var revapi1;
                            tpj(document).ready(function() {
                                if (tpj("#rev_slider_1_2").revolution == undefined) {
                                    revslider_showDoubleJqueryError("#rev_slider_1_2");
                                } else {
                                    revapi1 = tpj("#rev_slider_1_2").show().revolution({
                                        sliderType: "standard",
                                        jsFileLocation: "http://betheme.muffingroupsc.netdna-cdn.com/be/pizza/wp-content/plugins/revslider/public/assets/js/",
                                        sliderLayout: "fullwidth",
                                        dottedOverlay: "none",
                                        delay: 4000,
                                        navigation: {
                                            keyboardNavigation: "off",
                                            keyboard_direction: "horizontal",
                                            mouseScrollNavigation: "off",
                                            onHoverStop: "on",
                                            touch: {
                                                touchenabled: "on",
                                                swipe_threshold: 0.7,
                                                swipe_min_touches: 1,
                                                swipe_direction: "horizontal",
                                                drag_block_vertical: false
                                            }
                                        },
                                        gridwidth: 1180,
                                        gridheight: 879,
                                        lazyType: "none",
                                        shadow: 0,
                                        spinner: "spinner0",
                                        stopLoop: "off",
                                        stopAfterLoops: -1,
                                        stopAtSlide: -1,
                                        shuffle: "off",
                                        autoHeight: "off",
                                        disableProgressBar: "on",
                                        hideThumbsOnMobile: "on",
                                        hideSliderAtLimit: 0,
                                        hideCaptionAtLimit: 0,
                                        hideAllCaptionAtLilmit: 0,
                                        startWithSlide: 0,
                                        debugMode: false,
                                        fallbacks: {
                                            simplifyAll: "off",
                                            nextSlideOnWindowFocus: "off",
                                            disableFocusListener: "off",
                                        }
                                    });
                                }
                            }); 