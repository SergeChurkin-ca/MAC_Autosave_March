<script>
    MktoForms2.whenReady(function(form) {

        // check and uncheck subsribtion options
        // checkbox event listener

        let unSubscribeButton = document.querySelectorAll('input[type="checkbox"]')[document.querySelectorAll('input[type="checkbox"]').length - 1]

        unSubscribeButton.addEventListener('change', unSubscribeToAllFunction);

        function unSubscribeToAllFunction() {
            console.log('chirp')
            for (let i = 0; i < document.querySelectorAll('input[type="checkbox"]').length; i++) {
                document.querySelectorAll('input[type="checkbox"]')[i].checked = false

            }
        }
        console.log('check if function works')
    });
</script>