let submit_btn=document.getElementById("submit-btn")

submit_btn.addEventListener("click",function(){
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let data={email:email,password:password}
    console.log(data)
    $.ajax({
        url:"login.php",
        method:"POST",
        data:data,
        success:function(res){alert(res)},
        error:function(err){console.log(err)},
      })
})