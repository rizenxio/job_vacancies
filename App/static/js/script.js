/* ===================
Full Validation Script
====================== */
// 1) input mask (phone number)
$(document).ready(function() {
      $(".phone").inputmask("(99) 99999-9999", {"onincomplete": function() {
            $(".phone").val("");
            swal("Opps !", "Incomplete phone. Please review !","info");
            return false;
      }});
});

  
/* 2) input validation 
    a) fronten form
*/
function validationEmail(email){
    const regex = /^([2-zA-z0-8_.+-])+\@(([a-zA-z0-9-])+\.)+([a-zA-z0-9]{2,4})+$/;
    return regex.test(email);
}   
function validateForm() {
    const name =document.getElementById("name").value;
    const age =document.getElementById("age").value;
    const email =document.getElementById("email").value;
    const phone =document.getElementById("phone").value;
    const alamat =document.getElementById("alamat").value;
    const experience =document.getElementById("experience").value;
    const skills =document.getElementById("skills").value;
    const file =document.getElementById("file").value;

    if (name == "") {
        swal("Opps !", "Name must be filled out !","error");
        return false;
    }
    else if (name.split(' ').length < 2) {
        swal("Opps !", "Your fullname is require","error");
        return false;
    }
    else if (age == "") {
        swal("Opps !", "Age must be filled out !","error");
        return false;
    }
    else if((age < 18) || (age > 50)){
        // document.getElementById("age").value = '';
        swal("Opps !", "Age must be between 18 and 50","info");
        return false;
    }    
    else if(email == ""){
        swal("Opps !", "Email must be filled out !","error");
        return false;
    }
    else if(!(validationEmail(email))){
     document.getElementById("email").value ='';
     swal("Opps !", "put a valid email address","error");
     return false;
    }
    else if(phone == ""){
    swal("Opps !", "Phone must be filled out !","error");
    return false;
    }
    else if(alamat == ""){
        swal("Opps !", "Address must be filled out !","error");
        return false;
    }else if(experience == ""){
        swal("Opps !", "Experience must be filled out !","error");
        return false;
    }else if(skills == ""){
        swal("Opps !", "Skills must be filled out !","error");
        return false;
    }else if(file == ""){
        swal("Opps !", "File must be filled out !","error");
        return false;
    }
    else{
        return true;
    }
}
function validateForm2() {
    const name =document.getElementById("name2").value;
    const age =document.getElementById("age2").value;
    const email =document.getElementById("email2").value;
    const phone =document.getElementById("phone2").value;
    const alamat =document.getElementById("alamat2").value;
    const experience =document.getElementById("experience2").value;
    const skills =document.getElementById("skills2").value;
    const file =document.getElementById("file2").value;

    if (name == "") {
        swal("Opps !", "Name must be filled out !","error");
        return false;
    }
    else if (name.split(' ').length < 2) {
        swal("Opps !", "Your fullname is require","error");
        return false;
    }
    else if (age == "") {
        swal("Opps !", "Age must be filled out !","error");
        return false;
    }
    else if((age < 18) || (age > 50)){
        document.getElementById("age").value = '';
        swal("Opps !", "Age must be between 18 and 50","info");
        return false;
    }    
    else if(email == ""){
        swal("Opps !", "Email must be filled out !","error");
        return false;
    }
    else if(!(validationEmail(email))){
        document.getElementById("email2").value ='';
        swal("Opps !", "put a valid email address","error");
        return false;
    }else if(phone == ""){
        swal("Opps !", "Phone must be filled out !","error");
        return false;
    }else if(alamat == ""){
        swal("Opps !", "Address must be filled out !","error");
        return false;
    }else if(experience == ""){
        swal("Opps !", "Experience must be filled out !","error");
        return false;
    }else if(skills == ""){
        swal("Opps !", "Skills must be filled out !","error");
        return false;
    }else if(file == ""){
        swal("Opps !", "File must be filled out !","error");
        return false;
    }
    else{
        return true;
    }
}
function validateForm3() {
    const name =document.getElementById("name3").value;
    const age =document.getElementById("age3").value;
    const email =document.getElementById("email3").value;
    const phone =document.getElementById("phone3").value;
    const alamat =document.getElementById("alamat3").value;
    const experience =document.getElementById("experience3").value;
    const skills =document.getElementById("skills3").value;
    const file =document.getElementById("file3").value;

    if (name == "") {
        swal("Opps !", "Name must be filled out !","error");
        return false;
    }
    else if (name.split(' ').length < 2) {
        swal("Opps !", "Your fullname is require","error");
        return false;
    }
    else if (age == "") {
        swal("Opps !", "Age must be filled out !","info");
        return false;
    }
    else if((age < 18) || (age > 50)){
        document.getElementById("age").value = '';
        swal("Opps !", "Age must be between 18 and 50","info");
        return false;
    }
    else if(email == ""){
        swal("Opps !", "Email must be filled out !","error");
        return false;
    }
    else if(!(validationEmail(email))){
        document.getElementById("email3").value ='';
        swal("Opps !", "put a valid email address","error");
        return false;
    }else if(phone == ""){
        swal("Opps !", "Phone must be filled out !","error");
        return false;
    }else if(alamat == ""){
        swal("Opps !", "Address must be filled out !","error");
        return false;
    }else if(experience == ""){
        swal("Opps !", "Experience must be filled out !","error");
        return false;
    }else if(skills == ""){
        swal("Opps !", "Skills must be filled out !","error");
        return false;
    }else if(file == ""){
        swal("Opps !", "File must be filled out !","error");
        return false;
    }
    else{
        return true;
    }
}
//3)maximum upload
$(document).ready(function() {
    $('#file, #file2, #file3').bind('change', function() {
        var fileSize = (this.files[0].size);
        if(fileSize > 2 * 1048576){
            swal("Attention !", "File size must be less than 2 MB","info");
            $this.value = "";
        }
    });
});

//4) Allow only letter in NAME
$(".name").keyup(function() {
    if (!/^[a-zA-z_]*$/.test(this.value)) {
        this.value = this.value.split(/[^a-zA-Z ]/).join('');
    }
});

//5) prevent more than 2 white space inside the input name
$(".name").on('keydown',function(){
    var $this = $(this);
    $(this).val($(this).val().replace(/(\s{2,})|[^a-zA-z0-9_']/g, ' ').replace(/^\s*/, ''));
});

//6) prever starting with space in all inpust (including text area)
$("input[type='text'], textarea").on('keypress',function(e) {
    if(e.which === 32 &&  ! this.value.length) 
    e.preventDefault();
});

//7)allow only number in age
$(".age").keyup(function() {
    if (!/^[0-9]*$/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/g, '').join('');
    }
});

//8) if age is greater than 50, auto set clear
    // $(".age").keyup(function() {
    //     if (((this.value)>50) || ((this.value)<18)) {
    //         this.value = '';
    //     }
    // });
//9) prevent starting by zero in AGE field
$(".age").on('input',function(){
    if(/^0/.test(this.value)){
        this.value = this.value.replace(/^0/, "")
    }
    });

//10) Script to Lowercase input email 
$(document).ready(function(){
    $(".email").keyup(function(){
        this.value = this.value.toLowerCase();
    });
});