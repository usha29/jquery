$(function(){


$('#btn').on('click',function(){
var val=$('#tx').val();
var link='http://www.omdbapi.com/?s='+val;

$.ajax({
type:'GET',
url:link,
success:function(disp1){

$.each(disp1.Search,function(all,disp2){
  console.log(disp2);
    $("#disp").append("<p> Title: "+disp2.Title+"</p>")
    $("#disp").append("<p> imdbID: "+disp2.imdbID+"</p>")
    $("#disp").append("<p> Typer: "+disp2.Type+"</p>")
    $("#disp").append("<p> Year: "+disp2.Year+"</p>")
    $("#disp").append('<img src="'+disp2.Poster+'">')

});
}

});

});
});
