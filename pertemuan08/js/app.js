$('#btn-masuk').click(function () {
    let login_email = $('#login-email').val();
    let login_password = $('#login-password').val();

    console.log('===== LOGIN =====');
    console.log('Email: ' + login_email);
    console.log('Password: ' + login_password);
    console.log('');
});


$('#btn-daftar').click(function () {
    let register_email = $('#register-email').val();
    let register_password = $('#register-password').val();
    let register_confirm_password = $('#register-confirm-password').val();

    console.log('===== REGISTER =====');
    console.log('Email: ' + register_email);
    console.log('Password: ' + register_password);
    console.log('Confirm Password: ' + register_confirm_password);
    console.log('');
});