function section_view(myThis){
    $("section.d-block").addClass("d-none");
    $("section.d-block").removeClass("d-block");
    
    $($(myThis).children().attr("href")).removeClass("d-none");
    $($(myThis).children().attr("href")).addClass("d-block");
}


$("#navbar .nav-item").on('click', function(){
    $("#navbar .bg-primary").removeClass("bg-primary")
    $("#sidebar .bg-primary").removeClass("bg-primary")
    $(this).addClass('bg-primary')
    section_view(this);
})
$("#sidebar li").on('click', function(){
    $("#navbar .bg-primary").removeClass("bg-primary")
    $("#sidebar .bg-primary").removeClass("bg-primary")
    $(this).addClass('bg-primary')
    section_view(this);
})
$(".dropdown").on('click', function(){
    if(!$(this).hasClass("show")) return;
    $(this).addClass("bg-primary");
})

$("#brand").on('click', function(){
    $("#triggerHome").trigger('click');
})