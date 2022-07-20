document.querySelector('.MyNelson_Access_Code').style = "display:none;"
document.querySelector('.MyNelson_Username').style = "display:none;"
document.querySelector('.myNelson_Digital_Resource_Name').style = "display:none;"
document.querySelector('.Online_Order_Confirmation').style = "display:none;"
document.querySelector('.Connect_School_Access_Code').style = "display:none;"
document.querySelector('.Connect_School_Digital_Resource_Name').style = "display:none;"



const select = document.querySelector('.conditional-dropdown');

select.addEventListener('change', function handleChange(event) {

    console.log('target valus is:', event.target.options[event.target.selectedIndex].text);

    if (event.target.options[event.target.selectedIndex].text === 'MyNelson Support') {
        document.querySelector('.MyNelson_Access_Code').style = 'display: flex;';
        document.querySelector('.MyNelson_Username').style = "display:flex;"
        document.querySelector('.myNelson_Digital_Resource_Name').style = "display:flex;"

        document.querySelector('.Online_Order_Confirmation').style = "display:none;"
        document.querySelector('.Connect_School_Access_Code').style = "display:none;"
        document.querySelector('.Connect_School_Digital_Resource_Name').style = "display:none;"

    } else if (event.target.options[event.target.selectedIndex].text === 'ConnectSchool Support') {
        document.querySelector('.Connect_School_Access_Code').style = "display:flex;"
        document.querySelector('.Connect_School_Digital_Resource_Name').style = "display:flex;"

        document.querySelector('.MyNelson_Access_Code').style = "display:none;"
        document.querySelector('.MyNelson_Username').style = "display:none;"
        document.querySelector('.myNelson_Digital_Resource_Name').style = "display:none;"
        document.querySelector('.Online_Order_Confirmation').style = "display:none;"

    } else if (event.target.options[event.target.selectedIndex].text === 'Website/E-Commerce Support') {
        document.querySelector('.Online_Order_Confirmation').style = "display:flex;"

        document.querySelector('.MyNelson_Access_Code').style = "display:none;"
        document.querySelector('.MyNelson_Username').style = "display:none;"
        document.querySelector('.myNelson_Digital_Resource_Name').style = "display:none;"
        document.querySelector('.Connect_School_Access_Code').style = "display:none;"
        document.querySelector('.Connect_School_Digital_Resource_Name').style = "display:none;"

    } else if (event.target.options[event.target.selectedIndex].text === 'Other') {
        document.querySelector('.MyNelson_Access_Code').style = "display:none;"
        document.querySelector('.MyNelson_Username').style = "display:none;"
        document.querySelector('.myNelson_Digital_Resource_Name').style = "display:none;"
        document.querySelector('.Online_Order_Confirmation').style = "display:none;"
        document.querySelector('.Connect_School_Access_Code').style = "display:none;"
        document.querySelector('.Connect_School_Digital_Resource_Name').style = "display:none;"
    }


});


/* 1) if my nelson supprt
show
MyNelson Access Code*
MyNelson Username*
myNelson Digital Resource Name*
*/


/* 2) if connect to schhol support 
show 
Connect School Access Code
Connect School Digital Resource Name
*/

/* 3) if webseit ecommerce 
show
Online Order Confirmation #
*/

/* 4) if other
show NOTHING 
*/