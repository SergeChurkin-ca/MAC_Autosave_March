// hide hidden fields

Array.from(document.querySelectorAll('input[type=hidden]')).map(x => x.closest('.mktoFormRow').style = "display: none;")

Array.from(document.querySelectorAll('textarea')).map(x => x.closest('.mktoFormRow').style = "width: 100%;")

Array.from(document.querySelectorAll('.mktoHtmlText')).map(x => x.closest('.mktoFormRow').style = "width: 100%;")