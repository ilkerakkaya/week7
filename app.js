


$(document).on('click','.delete', function () {
    event.preventDefault();

    var muzik2= new Audio( "audio/finish-him.mp3");
        muzik2.play();
   
    $(this).closest('li').remove();
   
 });


 
 $('button').on('click', function (e) {
    e.preventDefault();
    let newValue = $('#addListItem').val();

        if (newValue !== ''){

        
         $('ul').append("<li><span class='name'>"
         + newValue
         + "</span><span class='delete' >delete</span>");
     $('#addListItem').val(''); 
    
     var muzik= new Audio( "audio/at.mp3");
     muzik.play();
    
    }

    else {
        $(this).vibrate(); 
    }

     

console.log();

     
 });


 


 
 $('#hide').click(function () {
    $('ul').toggle(this.unchecked);
 });
 
 
 


 
 //search
 $('#search-topics input').keyup(function () {
    var searchText = $(this).val();
    $('ul > li').each(function () {
        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.indexOf(searchText) !== -1;
        $(this).toggle(showCurrentLi);
    });
 })
 