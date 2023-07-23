/*!
 * jQuery ClassySlider
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.3.0
 *
 */
(function($) {
    $.fn.ClassySlider = function(a) {
        return this.each(function() {
            var self = $(this);
            if (self.data('classyslider')) {
                return self.data('classyslider');
            }
            var e = new innerObj(this, a);
            self.data('classyslider', e);
        });
    };
    $.fn.ClassySlider.defaults = {
        autoplay: true,
        pause: true,
        duration: 3000,
        distance: 40
    };
    var innerObj = function(a, b) {
        return innerObj.fn.create(a, b);
    };
    innerObj.fn = innerObj.prototype = {
        version: "1.3.0",
        create: function(element, config) {
            this.options = $.extend(true, $.fn.ClassySlider.defaults, config);
            this.vars = {
                sC: 0,
                lS: 0,
                cS: 0,
                r: 0,
                t: false
            };
            this.panel = {
                timer: null
            };
            this.panel.showScreen = $(element);
            $(element).addClass('classyslider classyslider-vertical-slider');
            $(element).wrap('<div class="classyslider-wrapper" />');
            this.slider = $(element).parent();
            this.items = $(element).children();
            this.slideSize();
            this.options.pause && this.setPauseOnHover();
            this.panel.timer = new panelObj({
                duration: this.options.duration,
                oncomplete: $.proxy(function() {
                    this.vars.r = 0, this.vars.lS = this.vars.cS, this.vars.cS++, this.transit();
                    this.panel.timer.start();
                }, this)
            });
            this.setHoverNavigation();
            this.options.autoplay && this.items.length > 1 && this.panel.timer.start();
        },
        slideSize: function() {
            this.items.each($.proxy(function(pos, item) {
                this.vars.sC++;
                $(item).css({
                    zIndex: pos + 5,
                    left: pos * this.options.distance + 'px'
                });
                $(item).attr('rel', pos);
            }, this));
            if (this.vars.sC !== 0) {
                this.vars.cS >= 0 && this.vars.cS < this.items.length && (this.items.eq(parseInt(this.vars.cS)).children('img')[0].complete ? this.afterLoadImage() : this.items.eq(parseInt(this.vars.cS)).children("img").load($.proxy(this.afterLoadImage, this)));
                for (var a = 0; a < this.items.length; a++) {
                    a !== this.vars.cS && (this.items.eq(a).children('img')[0].complete ? this.items.eq(a).children('img').siblings().width(this.items.eq(a).children("img").width() + "px") : this.items.eq(parseInt(a)).children("img").load(function() {
                        $(this).siblings().width($(this).width() + 'px');
                    }));
                }
            }
        },
        afterLoadImage: function() {
            var miw = $('img', this.items.eq(this.vars.cS)).width();
            var mih = $('img', this.items.eq(this.vars.cS)).height();
            this.slider.width(parseInt(miw + this.options.distance * (this.items.length - 1)) + 'px');
            this.slider.height(mih + 'px');
            this.items.eq(this.vars.cS).children('img').siblings().width(miw + 'px');
            for (var a = this.vars.cS + 1; a < this.items.length; a++) {
                this.items.eq(a).css({
                    left: parseInt((a - 1) * this.options.distance + miw) + 'px'
                });
            }
        },
        setClickSelector: function() {
            var self = this;
            this.items.click(function() {
                if (!self.vars.t) {
                    self.stopProgress(), self.vars.lS = self.vars.cS, self.vars.cS = $(this).attr('rel'), self.transit();
                }
            });
        },
        setHoverNavigation: function() {
            var self = this;
            this.items.bind('mouseenter', function() {
                self.stopProgress();
                self.vars.lS = self.vars.cS;
                self.vars.cS = $(this).attr('rel');
                self.transit();
            });
        },
        setPauseOnHover: function() {
            this.slider.hover($.proxy(function() {
                this.vars.paused = true;
                this.pauseProgress();
            }, this), $.proxy(function() {
                this.vars.paused = false;
                this.vars.running = false;
                this.options.pause && this.startProgress();
            }, this));
        },
        stopProgress: function() {
            this.panel.timer.stop();
        },
        pauseProgress: function() {
            this.panel.timer.pause();
        },
        startProgress: function() {
            this.panel.timer.start();
        },
        transit: function() {
            if (this.vars.cS === this.vars.sC) {
                this.vars.cS = 0, this.options.slideshowEnd && this.options.slideshowEnd.call(this);
            }
            else if (this.vars.cS < 0) {
                this.vars.cS = this.vars.sC - 1;
            }
            this.items.removeClass('current-slide');
            this.items.stop();
            this.vars.t = true;
            this.items.eq(this.vars.cS).animate({
                left: this.vars.cS * this.options.distance + 'px'
            }, $.proxy(function() {
                this.vars.t = false;
            }, this));
            for (var a = this.items.eq(this.vars.cS).children('img').width(), c = 0; c < this.vars.cS; c++) {
                this.items.eq(c).animate({
                    left: c * this.options.distance + 'px'
                });
            }
            for (c = parseInt(this.vars.cS) + 1; c < this.items.length; c++) {
                this.items.eq(c).animate({
                    left: (c - 1) * this.options.distance + a + 'px'
                });
            }
        }
    };
    function getTime() {
        return (new Date).getTime();
    }
    var panelObj = function(config) {
        return panelObj.fn.create(config);
    };
    var a = getTime();
    panelObj.fn = panelObj.prototype = {
        create: function(config) {
            this.options = $.extend(true, {
                duration: 3000,
                oncomplete: null
            }, config);
            this.vars = {
                startTime: 0,
                lastPauseResidue: 0,
                pause: true
            };
            this.timer = null;
            a = this.vars.startTime = getTime();
            setInterval($.proxy(this.reset, this), 16);
            setInterval($.proxy(this.reset, this), 30);
        },
        stop: function() {
            this.vars.lastPauseResidue = 0;
            this.vars.pause = true;
        },
        pause: function() {
            this.vars.lastPauseResidue = getTime() - this.vars.startTime + this.vars.lastPauseResidue;
            this.vars.pause = true;
        },
        start: function() {
            this.vars.startTime = getTime();
            this.vars.pause = false;
        },
        reset: function() {
            var b = getTime();
            if (b - a >= 30) {
                if (this.vars.pause === false && b - this.vars.startTime + this.vars.lastPauseResidue >= this.options.duration && (this.vars.lastPauseResidue = 0, this.vars.pause = true, this.options.oncomplete)) {
                    this.options.oncomplete();
                }
                a = b;
            }
        }
    };
})(jQuery);
