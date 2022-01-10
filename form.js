function submitData(){
    
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    let skillHtml =  document.getElementById('html').checked
    let skillCss =  document.getElementById('css').checked
    
    if (skillHtml) {
        skillHtml = (document.getElementById('html').value);
        
    } else {
        skillHtml = ""
    } 
    
    if (skillCss) {
        skillCss = (document.getElementById('css').value);
    } else {
        skillCss = ""
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    console.log(skillHtml);
    console.log(skillCss);


    if (name == ''){
        return alert("Nama wajib diisi")
    } else if (email == '') {
        return alert("Email wajib diisi")
    } else if (phone == '') {
        return alert("Phone Wajib diisi")
    } else if (subject == '') {
        return alert("Subject Wajib diisi")
    } else if (message == '') {
        return alert("Message Wajib diisi")
    } 

    let emailReceiver = 'eva@mail.com'

    let a = document.createElement('a')

    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name ${name} ${message} contact me ${phone} send CV ${email} requirment skill ${skillHtml} ${skillCss}`
    a.click()


    let dataObject = {
        name: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message,
        skillHtml: skillHtml,
        skillCss: skillCss
    }

    console.log(dataObject);

}