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

            // get item
            file = files.item(i);
            fileNames.push(file.name);
            
        }
    textbox.text(filesCount + ' files selected');
     
    }
    button.style.visibility = "visible";

    });

 $(document).on("click","#upload",function() {
   
    var tagline = menu = document.getElementById('tagline');

    var div = document.createElement('div');
    div.style.width = '450px'; 
    div.style.top = '20px';
    div.style.textAlign = 'center'; 
    div.className = 'card';
    div.id = 'test';
    div.innerHTML = '<h4 class="card-title">Your document was downloaded</h4>';

    tagline.insertBefore(div, tagline.firstElementChild);
});
    });


   
    
    