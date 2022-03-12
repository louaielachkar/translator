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

            file = files[i];

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
    outputFile =  "https://tranlationstorage.blob.core.windows.net/outputdcos?sp=racwdli&st=2022-03-09T20:17:49Z&se=2022-03-30T05:17:49Z&spr=https&sv=2020-08-04&sr=c&sig=1z8viyvKDI%2BTEz%2BevRVxzHdh4796G9eocRXXmPupuI0%3D"
    div.innerHTML = '<a  href=' + outputFile + ' download>Download Document</a>';

    tagline.insertBefore(div, tagline.firstElementChild);
});
    });


   
    
    