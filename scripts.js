$(document).ready(function () {

    $('#pause').hide();

    $('#play').click(function () {
        $(this).hide();
        $('#pause').show();
    });
    $('#pause').click(function () {
        $(this).hide();
        $('#play').show();
    });
        

    $('#nomadID').mouseenter(function () {
        $(this).removeClass("nomad").addClass("nomad2");
    });

    $('#nomadID').mouseleave(function () {
        $(this).removeClass("nomad2").addClass("nomad");
    });
    
    $('#streetID').mouseenter(function () {
        $(this).removeClass("street").addClass("street2");
    });

    $('#streetID').mouseleave(function () {
        $(this).removeClass("street2").addClass("street");
    });

    $('#corpoID').mouseenter(function () {
        $(this).removeClass("corpo").addClass("corpo2");
    });

    $('#corpoID').mouseleave(function () {
        $(this).removeClass("corpo2").addClass("corpo");
    });


    
});
