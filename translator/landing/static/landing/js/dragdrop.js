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
            //or

            file = files[i];

            fileNames.push(file.name);
            
        }
    textbox.text(filesCount + ' files selected');
     
    }
    button.style.visibility = "visible";



    });

 $(document).on("click","#upload",function() {
     if(filesCount == 1)
     {
        alert("Uploading  " + filesCount + " file:\n " + fileName);
     }
    alert("Uploading  " + filesCount + " files:\n " + fileNames.join('\n'));
    fileNames = [];
    var tagline = menu = document.getElementById('tagline');

    var div = document.createElement('div');
    div.style.width = '450px'; 
    div.style.top = '20px';
    div.style.textAlign = 'center'; 
    div.className = 'card';
    div.id = 'test';
    outputFile =  "{% static 'landing/img/down-arrow-white.svg' %}"
    div.innerHTML = '<a  href=' + outputFile + ' download>Download Document</a>';

    tagline.insertBefore(div, tagline.firstElementChild);
});
    });


   
    
    