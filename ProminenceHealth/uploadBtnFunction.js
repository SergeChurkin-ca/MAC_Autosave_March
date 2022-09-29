var widget = null;
$ = uploadcare.jQuery;

function runAfterElementExists(jquery_selector, callback) {
    var checker = window.setInterval(function() {
        if ($(jquery_selector).length) {
            //stop checking for the existence of this element
            clearInterval(checker);

            //call the passed in function via the parameter above
            callback();
        }
    }, 500); //I usually check 5 times per second
}


$(document).ready(function() {
    var uploadField = $("input[name=uploadedFiles]");
    var uploadTriggerField = $('#uploader');

    var setup_uploader = function() {
        uploadTriggerField.ready(function() {
            console.log("trigger field ready");
            widget = uploadcare.MultipleWidget("#uploader", {
                publicKey: "f42d0c2039a0d789d361",
                tabs: "file",
                multiple: true,
            });

            widget.onUploadComplete(function(result) {
                // get reference to upload field
                uploadField.val(""); // clear the field
                const url =
                    "https://app.uploadcare.com/projects/f42d0c2039a0d789d361/files/UUID/";
                const arrayOfFiles = widget.value().files();
                $.each(arrayOfFiles, function(i, file) {
                    file.done(function(fileInfo) {
                        // i is file positon in group.
                        console.log(i, fileInfo);
                        const u = url.replace("UUID", fileInfo.uuid);
                        console.log("u", u);
                        uploadField.val(uploadField.val() + u + ";");
                    });
                });

                console.log("upload result", result);
            });
        });


    };

    runAfterElementExists("input[name=uploadedFiles]", function() {
        $("input[name=uploadedFiles]").parent().append('<input id="uploader" type="hidden"></input>');
    });
    runAfterElementExists("#uploader", setup_uploader);


});