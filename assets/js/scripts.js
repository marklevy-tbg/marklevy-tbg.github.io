(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _resize = {
	$win:'',
	$bod:'',
	resizeEnd:'',
	window_width:'',
	mobile_width_max:768,
    tablet_width_max:960,
    desktop_width_max:1200,

	init:function() {
		this.$win = $(window);
		this.$bod = $('body');
		var resEnd;
		this.$win.on('resize', function() {
			_resize.resizeListener();
		});
		this.sizecheck();
	},
	resizeListener:function() {
		clearTimeout(this.resizeEnd);
		this.resizeEnd = setTimeout(this.sizecheck, 150);
	},
	sizecheck:function() {
		_resize.window_width = _resize.$win.outerWidth();
		//_nav.vid_height = $(_nav.home_feature).height();
        if(_resize.window_width < _resize.mobile_width_max) {
            _resize.mquerie_func('view_mobile');
            _resize.phone_func();
        } else if(_resize.window_width >= _resize.mobile_width_max && _resize.window_width <= _resize.tablet_width_max) {
            _resize.mquerie_func('view_tablet');
            _resize.tablet_func();
        } else {
            _resize.mquerie_func('view_desktop');
            _resize.desktop_func();
        }
        if(tile_slider.$tiles !== undefined) {
        	tile_slider.updateLogic(_resize.window_width);
        }
	},

	desktop_func:function() {
    	_scrollCheck.menu_breakpoint = 70;
    },

    tablet_func:function() { 
    	_scrollCheck.menu_breakpoint = 70;
    },

    phone_func:function() {
    	_scrollCheck.menu_breakpoint = 70;

    },
    
    mquerie_func:function(device) {
        _resize.$bod.removeClass('view_mobile view_tablet view_desktop').addClass(device);
    }
},

_scrollCheck = {
	// Objects
	$win:'',
	// Variables
	
	menu_breakpoint:'',

	init:function() {
		this.$win = $(window);

		this.$win.on({
			'DOMMouseScroll mousewheel onmousewheel scroll': this.scroll_check
		});
	},
	scroll_check:function() {
		sticky_header.watch($(document).scrollTop());
		// console.log($(document).scrollTop()); // Usually body. Didn't work for some reason
	}
},

sticky_header = {
	init:function() {
		this.$bod = $('body');
	},
	watch:function(n) {
		if(n < _scrollCheck.menu_breakpoint) {
			this.unstick();
		} else {
			this.stick();
		}
	},
	stick:function() {
		this.$bod.addClass('sticky');
	},
	unstick:function() {
		this.$bod.removeClass('sticky');
	}
},

mobile_menu = {
	init:function() {
		this.$menu = $('.main-header__wrap');
		this.$menuBtn = $('.main-header__menu-button');

		this.$menuBtn.on('click', function() {
			_resize.$bod.toggleClass('menu-open');
			mobile_menu.$menu.toggleClass('menu-open');
			mobile_menu.$menuBtn.toggleClass('active');
		});
	}
};

tile_slider = {
	init:function() {
		this.$tiles = $('.photo-tiles');
		this.$slider = $('.photo-tiles__slider');
		this.$items = $('.photo-tiles__item');
		this.$chapters = $('.photo-tiles__chapters');
		this.$sliderNext = $('.photo-tiles__controls .next');
		this.$sliderPrev = $('.photo-tiles__controls .prev');
		this.slideCount = 0;
		this.slides = 0;
		this.motion = 0;

		this.$sliderNext.on('click', function() {
			if(tile_slider.slideCount < Number(tile_slider.slides - 1)) {
				tile_slider.slide('next');
			}
		});

		this.$sliderPrev.on('click', function() {
			if(tile_slider.slideCount > 0) {
				tile_slider.slide('prev');
			}
		});
		this.generateChapters(tile_slider.$items.length);
		this.updateLogic(_resize.window_width);
	},
	generateChapters:function(c) {
		var btn = '<button class="photo-tiles__chapters__button"></button>';
		for(var i = 0; i < c; i++) {
			tile_slider.$chapters.prepend(btn);
		}
		tile_slider.$chapters.find('.photo-tiles__chapters__button').eq(0).addClass('active');
		tile_slider.$chapters.find('.photo-tiles__chapters__button').each(function() {
			$(this).on('click', function() {
				tile_slider.jump($(this).index());
			});
		});
	},
	slide:function(dir) {
		var mod,
			val;
		
		if(dir === 'next') {
			mod = "-=";
			tile_slider.slideCount++;
		} else if(dir === 'prev') {
			mod = "+=";
			tile_slider.slideCount--;
		}
		val = mod+tile_slider.motion;
		console.log(tile_slider.slideCount);
		tile_slider.$slider.animate({
			left: val
		}, 500);
		if(_resize.window_width > 960) {
			tile_slider.updateChapter(tile_slider.slideCount);
		}
	},
	jump:function(ch) {
		console.log("ch: "+ch);
		tile_slider.slideCount = ch;
		var val = "-"+Number(tile_slider.motion.slice(0, -2) * ch)+"px";

		tile_slider.$slider.animate({
			left: val
		}, 500);
		tile_slider.updateChapter(ch);
	},
	updateChapter:function(n) {
		tile_slider.$chapters.find('.photo-tiles__chapters__button.active').removeClass('active');
		tile_slider.$chapters.find('.photo-tiles__chapters__button').eq(n).addClass('active');
	},
	updateLogic:function(w) {
		console.log("Current Width: "+w);
		if(w <= 640) {
			tile_slider.motion = tile_slider.$tiles.width() - 48+"px";
			tile_slider.slides = tile_slider.$items.length * 5;
		} else if(w > 640 && w <= 960) {
			tile_slider.motion = (tile_slider.$tiles.width() / 2) - 48+"px";
			tile_slider.slides = tile_slider.$items.length * 5;
		} else {
			tile_slider.motion = tile_slider.$tiles.width()+"px";
			tile_slider.slides = tile_slider.$items.length;
			tile_slider.slideCount = Math.round(tile_slider.slideCount / 5);
			tile_slider.updateChapter(tile_slider.slideCount);
		}
		// Update Position:
		console.log("-"+Number(tile_slider.motion.slice(0, -2) * tile_slider.slideCount)+"px");
		tile_slider.$slider.css({
			left: "-"+Number(tile_slider.motion.slice(0, -2) * tile_slider.slideCount)+"px"
		});
	}
};

(function() {
	console.log("Hey! Kids, were eating dinner tonight! Come on Tiffany, Heather, Cody, Dylan, Dermot, Jordan, Taylor, Brittney, Wesley, Rumer, Scout, Cassidy, Zoe, Chloe, Max, Hunter, Kendell, Katelyn, Noah, Sasha, Morgan, Kira, Ian, Lauryn, Hubert, Phil");
	_resize.init();
	_scrollCheck.init();
	sticky_header.init();
	mobile_menu.init();
	tile_slider.init();
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJGcm9udEVuZFNyYy9fanMvX2N1c3RvbS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgX3Jlc2l6ZSA9IHtcblx0JHdpbjonJyxcblx0JGJvZDonJyxcblx0cmVzaXplRW5kOicnLFxuXHR3aW5kb3dfd2lkdGg6JycsXG5cdG1vYmlsZV93aWR0aF9tYXg6NzY4LFxuICAgIHRhYmxldF93aWR0aF9tYXg6OTYwLFxuICAgIGRlc2t0b3Bfd2lkdGhfbWF4OjEyMDAsXG5cblx0aW5pdDpmdW5jdGlvbigpIHtcblx0XHR0aGlzLiR3aW4gPSAkKHdpbmRvdyk7XG5cdFx0dGhpcy4kYm9kID0gJCgnYm9keScpO1xuXHRcdHZhciByZXNFbmQ7XG5cdFx0dGhpcy4kd2luLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblx0XHRcdF9yZXNpemUucmVzaXplTGlzdGVuZXIoKTtcblx0XHR9KTtcblx0XHR0aGlzLnNpemVjaGVjaygpO1xuXHR9LFxuXHRyZXNpemVMaXN0ZW5lcjpmdW5jdGlvbigpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVFbmQpO1xuXHRcdHRoaXMucmVzaXplRW5kID0gc2V0VGltZW91dCh0aGlzLnNpemVjaGVjaywgMTUwKTtcblx0fSxcblx0c2l6ZWNoZWNrOmZ1bmN0aW9uKCkge1xuXHRcdF9yZXNpemUud2luZG93X3dpZHRoID0gX3Jlc2l6ZS4kd2luLm91dGVyV2lkdGgoKTtcblx0XHQvL19uYXYudmlkX2hlaWdodCA9ICQoX25hdi5ob21lX2ZlYXR1cmUpLmhlaWdodCgpO1xuICAgICAgICBpZihfcmVzaXplLndpbmRvd193aWR0aCA8IF9yZXNpemUubW9iaWxlX3dpZHRoX21heCkge1xuICAgICAgICAgICAgX3Jlc2l6ZS5tcXVlcmllX2Z1bmMoJ3ZpZXdfbW9iaWxlJyk7XG4gICAgICAgICAgICBfcmVzaXplLnBob25lX2Z1bmMoKTtcbiAgICAgICAgfSBlbHNlIGlmKF9yZXNpemUud2luZG93X3dpZHRoID49IF9yZXNpemUubW9iaWxlX3dpZHRoX21heCAmJiBfcmVzaXplLndpbmRvd193aWR0aCA8PSBfcmVzaXplLnRhYmxldF93aWR0aF9tYXgpIHtcbiAgICAgICAgICAgIF9yZXNpemUubXF1ZXJpZV9mdW5jKCd2aWV3X3RhYmxldCcpO1xuICAgICAgICAgICAgX3Jlc2l6ZS50YWJsZXRfZnVuYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc2l6ZS5tcXVlcmllX2Z1bmMoJ3ZpZXdfZGVza3RvcCcpO1xuICAgICAgICAgICAgX3Jlc2l6ZS5kZXNrdG9wX2Z1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aWxlX3NsaWRlci4kdGlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBcdHRpbGVfc2xpZGVyLnVwZGF0ZUxvZ2ljKF9yZXNpemUud2luZG93X3dpZHRoKTtcbiAgICAgICAgfVxuXHR9LFxuXG5cdGRlc2t0b3BfZnVuYzpmdW5jdGlvbigpIHtcbiAgICBcdF9zY3JvbGxDaGVjay5tZW51X2JyZWFrcG9pbnQgPSA3MDtcbiAgICB9LFxuXG4gICAgdGFibGV0X2Z1bmM6ZnVuY3Rpb24oKSB7IFxuICAgIFx0X3Njcm9sbENoZWNrLm1lbnVfYnJlYWtwb2ludCA9IDcwO1xuICAgIH0sXG5cbiAgICBwaG9uZV9mdW5jOmZ1bmN0aW9uKCkge1xuICAgIFx0X3Njcm9sbENoZWNrLm1lbnVfYnJlYWtwb2ludCA9IDcwO1xuXG4gICAgfSxcbiAgICBcbiAgICBtcXVlcmllX2Z1bmM6ZnVuY3Rpb24oZGV2aWNlKSB7XG4gICAgICAgIF9yZXNpemUuJGJvZC5yZW1vdmVDbGFzcygndmlld19tb2JpbGUgdmlld190YWJsZXQgdmlld19kZXNrdG9wJykuYWRkQ2xhc3MoZGV2aWNlKTtcbiAgICB9XG59LFxuXG5fc2Nyb2xsQ2hlY2sgPSB7XG5cdC8vIE9iamVjdHNcblx0JHdpbjonJyxcblx0Ly8gVmFyaWFibGVzXG5cdFxuXHRtZW51X2JyZWFrcG9pbnQ6JycsXG5cblx0aW5pdDpmdW5jdGlvbigpIHtcblx0XHR0aGlzLiR3aW4gPSAkKHdpbmRvdyk7XG5cblx0XHR0aGlzLiR3aW4ub24oe1xuXHRcdFx0J0RPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgb25tb3VzZXdoZWVsIHNjcm9sbCc6IHRoaXMuc2Nyb2xsX2NoZWNrXG5cdFx0fSk7XG5cdH0sXG5cdHNjcm9sbF9jaGVjazpmdW5jdGlvbigpIHtcblx0XHRzdGlja3lfaGVhZGVyLndhdGNoKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKTtcblx0XHQvLyBjb25zb2xlLmxvZygkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSk7IC8vIFVzdWFsbHkgYm9keS4gRGlkbid0IHdvcmsgZm9yIHNvbWUgcmVhc29uXG5cdH1cbn0sXG5cbnN0aWNreV9oZWFkZXIgPSB7XG5cdGluaXQ6ZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kYm9kID0gJCgnYm9keScpO1xuXHR9LFxuXHR3YXRjaDpmdW5jdGlvbihuKSB7XG5cdFx0aWYobiA8IF9zY3JvbGxDaGVjay5tZW51X2JyZWFrcG9pbnQpIHtcblx0XHRcdHRoaXMudW5zdGljaygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0aWNrKCk7XG5cdFx0fVxuXHR9LFxuXHRzdGljazpmdW5jdGlvbigpIHtcblx0XHR0aGlzLiRib2QuYWRkQ2xhc3MoJ3N0aWNreScpO1xuXHR9LFxuXHR1bnN0aWNrOmZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJGJvZC5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG5cdH1cbn0sXG5cbm1vYmlsZV9tZW51ID0ge1xuXHRpbml0OmZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG1lbnUgPSAkKCcubWFpbi1oZWFkZXJfX3dyYXAnKTtcblx0XHR0aGlzLiRtZW51QnRuID0gJCgnLm1haW4taGVhZGVyX19tZW51LWJ1dHRvbicpO1xuXG5cdFx0dGhpcy4kbWVudUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdF9yZXNpemUuJGJvZC50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XG5cdFx0XHRtb2JpbGVfbWVudS4kbWVudS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XG5cdFx0XHRtb2JpbGVfbWVudS4kbWVudUJ0bi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbnRpbGVfc2xpZGVyID0ge1xuXHRpbml0OmZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHRpbGVzID0gJCgnLnBob3RvLXRpbGVzJyk7XG5cdFx0dGhpcy4kc2xpZGVyID0gJCgnLnBob3RvLXRpbGVzX19zbGlkZXInKTtcblx0XHR0aGlzLiRpdGVtcyA9ICQoJy5waG90by10aWxlc19faXRlbScpO1xuXHRcdHRoaXMuJGNoYXB0ZXJzID0gJCgnLnBob3RvLXRpbGVzX19jaGFwdGVycycpO1xuXHRcdHRoaXMuJHNsaWRlck5leHQgPSAkKCcucGhvdG8tdGlsZXNfX2NvbnRyb2xzIC5uZXh0Jyk7XG5cdFx0dGhpcy4kc2xpZGVyUHJldiA9ICQoJy5waG90by10aWxlc19fY29udHJvbHMgLnByZXYnKTtcblx0XHR0aGlzLnNsaWRlQ291bnQgPSAwO1xuXHRcdHRoaXMuc2xpZGVzID0gMDtcblx0XHR0aGlzLm1vdGlvbiA9IDA7XG5cblx0XHR0aGlzLiRzbGlkZXJOZXh0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGlsZV9zbGlkZXIuc2xpZGVDb3VudCA8IE51bWJlcih0aWxlX3NsaWRlci5zbGlkZXMgLSAxKSkge1xuXHRcdFx0XHR0aWxlX3NsaWRlci5zbGlkZSgnbmV4dCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy4kc2xpZGVyUHJldi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRpbGVfc2xpZGVyLnNsaWRlQ291bnQgPiAwKSB7XG5cdFx0XHRcdHRpbGVfc2xpZGVyLnNsaWRlKCdwcmV2Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5nZW5lcmF0ZUNoYXB0ZXJzKHRpbGVfc2xpZGVyLiRpdGVtcy5sZW5ndGgpO1xuXHRcdHRoaXMudXBkYXRlTG9naWMoX3Jlc2l6ZS53aW5kb3dfd2lkdGgpO1xuXHR9LFxuXHRnZW5lcmF0ZUNoYXB0ZXJzOmZ1bmN0aW9uKGMpIHtcblx0XHR2YXIgYnRuID0gJzxidXR0b24gY2xhc3M9XCJwaG90by10aWxlc19fY2hhcHRlcnNfX2J1dHRvblwiPjwvYnV0dG9uPic7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGM7IGkrKykge1xuXHRcdFx0dGlsZV9zbGlkZXIuJGNoYXB0ZXJzLnByZXBlbmQoYnRuKTtcblx0XHR9XG5cdFx0dGlsZV9zbGlkZXIuJGNoYXB0ZXJzLmZpbmQoJy5waG90by10aWxlc19fY2hhcHRlcnNfX2J1dHRvbicpLmVxKDApLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR0aWxlX3NsaWRlci4kY2hhcHRlcnMuZmluZCgnLnBob3RvLXRpbGVzX19jaGFwdGVyc19fYnV0dG9uJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRpbGVfc2xpZGVyLmp1bXAoJCh0aGlzKS5pbmRleCgpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRzbGlkZTpmdW5jdGlvbihkaXIpIHtcblx0XHR2YXIgbW9kLFxuXHRcdFx0dmFsO1xuXHRcdFxuXHRcdGlmKGRpciA9PT0gJ25leHQnKSB7XG5cdFx0XHRtb2QgPSBcIi09XCI7XG5cdFx0XHR0aWxlX3NsaWRlci5zbGlkZUNvdW50Kys7XG5cdFx0fSBlbHNlIGlmKGRpciA9PT0gJ3ByZXYnKSB7XG5cdFx0XHRtb2QgPSBcIis9XCI7XG5cdFx0XHR0aWxlX3NsaWRlci5zbGlkZUNvdW50LS07XG5cdFx0fVxuXHRcdHZhbCA9IG1vZCt0aWxlX3NsaWRlci5tb3Rpb247XG5cdFx0Y29uc29sZS5sb2codGlsZV9zbGlkZXIuc2xpZGVDb3VudCk7XG5cdFx0dGlsZV9zbGlkZXIuJHNsaWRlci5hbmltYXRlKHtcblx0XHRcdGxlZnQ6IHZhbFxuXHRcdH0sIDUwMCk7XG5cdFx0aWYoX3Jlc2l6ZS53aW5kb3dfd2lkdGggPiA5NjApIHtcblx0XHRcdHRpbGVfc2xpZGVyLnVwZGF0ZUNoYXB0ZXIodGlsZV9zbGlkZXIuc2xpZGVDb3VudCk7XG5cdFx0fVxuXHR9LFxuXHRqdW1wOmZ1bmN0aW9uKGNoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJjaDogXCIrY2gpO1xuXHRcdHRpbGVfc2xpZGVyLnNsaWRlQ291bnQgPSBjaDtcblx0XHR2YXIgdmFsID0gXCItXCIrTnVtYmVyKHRpbGVfc2xpZGVyLm1vdGlvbi5zbGljZSgwLCAtMikgKiBjaCkrXCJweFwiO1xuXG5cdFx0dGlsZV9zbGlkZXIuJHNsaWRlci5hbmltYXRlKHtcblx0XHRcdGxlZnQ6IHZhbFxuXHRcdH0sIDUwMCk7XG5cdFx0dGlsZV9zbGlkZXIudXBkYXRlQ2hhcHRlcihjaCk7XG5cdH0sXG5cdHVwZGF0ZUNoYXB0ZXI6ZnVuY3Rpb24obikge1xuXHRcdHRpbGVfc2xpZGVyLiRjaGFwdGVycy5maW5kKCcucGhvdG8tdGlsZXNfX2NoYXB0ZXJzX19idXR0b24uYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdHRpbGVfc2xpZGVyLiRjaGFwdGVycy5maW5kKCcucGhvdG8tdGlsZXNfX2NoYXB0ZXJzX19idXR0b24nKS5lcShuKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdH0sXG5cdHVwZGF0ZUxvZ2ljOmZ1bmN0aW9uKHcpIHtcblx0XHRjb25zb2xlLmxvZyhcIkN1cnJlbnQgV2lkdGg6IFwiK3cpO1xuXHRcdGlmKHcgPD0gNjQwKSB7XG5cdFx0XHR0aWxlX3NsaWRlci5tb3Rpb24gPSB0aWxlX3NsaWRlci4kdGlsZXMud2lkdGgoKSAtIDQ4K1wicHhcIjtcblx0XHRcdHRpbGVfc2xpZGVyLnNsaWRlcyA9IHRpbGVfc2xpZGVyLiRpdGVtcy5sZW5ndGggKiA1O1xuXHRcdH0gZWxzZSBpZih3ID4gNjQwICYmIHcgPD0gOTYwKSB7XG5cdFx0XHR0aWxlX3NsaWRlci5tb3Rpb24gPSAodGlsZV9zbGlkZXIuJHRpbGVzLndpZHRoKCkgLyAyKSAtIDQ4K1wicHhcIjtcblx0XHRcdHRpbGVfc2xpZGVyLnNsaWRlcyA9IHRpbGVfc2xpZGVyLiRpdGVtcy5sZW5ndGggKiA1O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWxlX3NsaWRlci5tb3Rpb24gPSB0aWxlX3NsaWRlci4kdGlsZXMud2lkdGgoKStcInB4XCI7XG5cdFx0XHR0aWxlX3NsaWRlci5zbGlkZXMgPSB0aWxlX3NsaWRlci4kaXRlbXMubGVuZ3RoO1xuXHRcdFx0dGlsZV9zbGlkZXIuc2xpZGVDb3VudCA9IE1hdGgucm91bmQodGlsZV9zbGlkZXIuc2xpZGVDb3VudCAvIDUpO1xuXHRcdFx0dGlsZV9zbGlkZXIudXBkYXRlQ2hhcHRlcih0aWxlX3NsaWRlci5zbGlkZUNvdW50KTtcblx0XHR9XG5cdFx0Ly8gVXBkYXRlIFBvc2l0aW9uOlxuXHRcdGNvbnNvbGUubG9nKFwiLVwiK051bWJlcih0aWxlX3NsaWRlci5tb3Rpb24uc2xpY2UoMCwgLTIpICogdGlsZV9zbGlkZXIuc2xpZGVDb3VudCkrXCJweFwiKTtcblx0XHR0aWxlX3NsaWRlci4kc2xpZGVyLmNzcyh7XG5cdFx0XHRsZWZ0OiBcIi1cIitOdW1iZXIodGlsZV9zbGlkZXIubW90aW9uLnNsaWNlKDAsIC0yKSAqIHRpbGVfc2xpZGVyLnNsaWRlQ291bnQpK1wicHhcIlxuXHRcdH0pO1xuXHR9XG59O1xuXG4oZnVuY3Rpb24oKSB7XG5cdGNvbnNvbGUubG9nKFwiSGV5ISBLaWRzLCB3ZXJlIGVhdGluZyBkaW5uZXIgdG9uaWdodCEgQ29tZSBvbiBUaWZmYW55LCBIZWF0aGVyLCBDb2R5LCBEeWxhbiwgRGVybW90LCBKb3JkYW4sIFRheWxvciwgQnJpdHRuZXksIFdlc2xleSwgUnVtZXIsIFNjb3V0LCBDYXNzaWR5LCBab2UsIENobG9lLCBNYXgsIEh1bnRlciwgS2VuZGVsbCwgS2F0ZWx5biwgTm9haCwgU2FzaGEsIE1vcmdhbiwgS2lyYSwgSWFuLCBMYXVyeW4sIEh1YmVydCwgUGhpbFwiKTtcblx0X3Jlc2l6ZS5pbml0KCk7XG5cdF9zY3JvbGxDaGVjay5pbml0KCk7XG5cdHN0aWNreV9oZWFkZXIuaW5pdCgpO1xuXHRtb2JpbGVfbWVudS5pbml0KCk7XG5cdHRpbGVfc2xpZGVyLmluaXQoKTtcbn0pKCk7Il19
