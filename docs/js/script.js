$(document).ready(function () {
    $('.annot-selector').click(function() {
        // Switching the active element in the navbar
        $('.annot-selector').removeClass("active");
        $(this).addClass("active");
        
        // Hiding all images
        $('.annot').hide();
        // Selecting the images of the selected annotation class
        $('.annot-' + $(this).data('class')).each(function (i, cell) {
            var image = $(cell).children()[0];

            // Download the image only when displayed
            $(image).attr('src', $(image).data('src'));

            // Show the image
            $(cell).show();
        });
    })
});