
import './style.css';


window.toDoList = [];
$(document).ready(
    function(){


      
      if(localStorage.getItem("toDoList")){
        window.toDoList = JSON.parse(localStorage.getItem("toDoList"));
        window.toDoList.forEach(toDo => { $('ol').append('<li>' + toDo + '</li>');})
      }

      $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
                 $('input').val('');
                 window.toDoList.push(toAdd);
                 localStorage.setItem("toDoList", JSON.stringify(window.toDoList));
            });

     
      $('form').on('submit', 
          function(e){
            e.preventDefault();
            
          });
      $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }        
      }); 
      
      $(document).on('dblclick','li', function(){
        var indice = $('li').index($(this)); 
        $(this).toggleClass('strike').fadeOut('slow');  
         $(this).remove();
        window.toDoList = window.toDoList.filter((toDo, index) => indice != index);  
        localStorage.setItem("toDoList", JSON.stringify(window.toDoList));
      });    
      
    }
);