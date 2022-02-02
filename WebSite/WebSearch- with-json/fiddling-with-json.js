var div = document.getElementsByClassName('blog-input')[0],
    blogLi = div.getElementsByClassName('blogLi'),
    h2 = div.getElementsByTagName('h2'),
    p = div.getElementsByTagName('p')



// const data = {
//     "items": [

//         {
//             "title": "sample 1",
//             "content": "author 1"
//         },
//         {
//             "title": "sample 2",
//             "content": "author 2"
//         }
//     ]
// }



// html = data.items.map((v) => {

//     return `<div class="blogLi">
//                 <h2>${v.title}</h2>
//                 <p>${v.content}</p>
//                 <p class="hidden-content"></p>
//                 </div>`

// }).join('')
html = data.map((v) => {

    return `<div class="blogLi">
                <h2>${v.title}</h2>
                <p>${v.content}</p>
                <p class="hidden-content"></p>
                </div>`

}).join('')


div.innerHTML = html;