function login() {
    const username = $("#username").val();
    const password = $("#password").val();


    axios.post(
        "/api/userservice/user/login",
        {
            user_name: username,
            password: password
        }
    ).then(
        value => {
            if (value.data.code===0){
                alert("登录失败1")
                window.location.href="my-account.html"
            }
        }
    ).catch(
        reason => {
            alert(reason)
        }
    )
}