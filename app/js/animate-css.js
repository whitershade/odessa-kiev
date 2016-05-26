(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				}
			}, {
				offset: "80%"
			});
		});
	};
})(jQuery);