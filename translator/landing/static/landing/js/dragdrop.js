$(document).on('change', '.file-input', function() {


    var filesCount = $(this)[0].files.length;
    var files= $(this)[0].files;
    var fileNames = [];


    
    var textbox = $(this).prev();
    var button = document.getElementById("upload");

    
    if (filesCount === 1) {
    var fileName = $(this).val().split('\\').pop();
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

    button.addEventListener("click", function() {
    alert("Uploading" + filesCount + "files:\n" + fileNames.join('\n'));
 },false);

    });

   
    
    