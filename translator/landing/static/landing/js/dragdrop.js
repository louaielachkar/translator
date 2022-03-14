$(document).ready(function() {
    
    var fileName;
    var fileNames = [];
    var filesCount;

$(document).on('change', '.file-input', function() {


    filesCount = $(this)[0].files.length;
    var files= $(this)[0].files;
    


    
    var textbox = $(this).prev();
    var button = document.getElementById("upload");

    
    if (filesCount === 1) {
     fileName = $(this).val().split('\\').pop();
    textbox.text(fileName);
    
    } else {
        for (var i = 0; i < files.length; i++) {

            file = files.item(i);
        
            fileNames.push(file.name);
            
        }
    }
    button.style.visibility = "visible";



    });

 $(document).on("click","#upload",function() {
  
    var tagline = menu = document.getElementById('tagline');

    var div = document.createElement('div');
    div.id = 'loading';
    img = "/static/landing/img/Pulse.gif"
    div.innerHTML = '<img id="loading-image" src='+ img + ' alt="Loading..." />';
    tagline.insertBefore(div, tagline.firstElementChild);
   
    $(function() {
        setTimeout(function() { $("#loading").fadeOut(1500); }, 60000)
        
        })
    
  });
  });
  
  


   
    
    