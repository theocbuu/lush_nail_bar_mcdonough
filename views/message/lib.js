// $(document).ready(function(){
$('#email-form').submit(async function(e){
    e.preventDefault();      
    let data = {
        name:$("#name").val(),
        email:$('#email').val(),
        phone:$('#phone').val(),
        message:$('#message-text').val()
    }
    // document.getElementById('email-form').reset();
    
    let ajaxRes = await ajaxFunc('POST', '/mailer', data)
    console.log(ajaxRes)
    if(ajaxRes === true){
        alert('We have recieved your message. Thank you '+data.name+'!')
        document.getElementById('email-form').reset();
    }
    else if(ajaxRes === false){
        alert('Sorry '+data.name+' your email was failed to delivery. Please try again later.')
    }
});    
    // });
    
    