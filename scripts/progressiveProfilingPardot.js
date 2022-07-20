document.querySelector('.MyNelson_Access_Code').style = "display:none;"
document.querySelector('.MyNelson_Username').style = "display:none;"
document.querySelector('.myNelson_Digital_Resource_Name').style = "display:none;"
document.querySelector('.Online_Order_Confirmation').style = "display:none;"



const select = document.querySelector('.conditional-dropdown');

select.addEventListener('change', function handleChange(event) {

    console.log('target valus is:', event.target.options[event.target.selectedIndex].text);

    event.target.options[event.target.selectedIndex].text === 'MyNelson Support' ? document.querySelector('.MyNelson_Access_Code').style = "display: flex;" : document.querySelector('.MyNelson_Access_Code').style = "display: none;"
    event.target.options[event.target.selectedIndex].text === 'ConnectSchool Support' ? document.querySelector('.MyNelson_Access_Code').style = "display: flex;" : document.querySelector('.MyNelson_Access_Code').style = "display: none;"
    event.target.options[event.target.selectedIndex].text === 'MyNelson Support' ? document.querySelector('.MyNelson_Access_Code').style = "display: flex;" : document.querySelector('.MyNelson_Access_Code').style = "display: none;"

});