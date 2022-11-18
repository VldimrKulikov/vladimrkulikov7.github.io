let popupwn = document.querySelector('.popupwin'); let popup = document.querySelector('.popup'); let openPopupButtons = document.querySelectorAll('.open-popup'); let closePopupButton = document.querySelector('.close-popup'); 
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupwn.classList.add('active'); 
        popup.classList.add('active');})});
closePopupButton.addEventListener('click',() => { 
    popupwn.classList.remove('active'); 
    popup.classList.remove('active'); });

$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Сообщение отправлено");
                }else{
                    alert("Ошибка" + response.message);}
            }
        });
    });
});