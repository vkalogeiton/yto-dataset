(function (jQuery) {
    jQuery.fn.printPage = function () {
        return this.each(function () {
            jQuery('span.print > a').click(function () {
                window.print();
                return false;
            });
        });
    }
})(jQuery);