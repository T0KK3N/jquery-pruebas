
import './style.css';

$(document).ready(
    function(){
      $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
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
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);