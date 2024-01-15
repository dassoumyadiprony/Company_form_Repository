$(document).ready(function () {

    alert('!!!!Welcome To The Form!!!!');

});



$("#btn-submit").click(function (event) {
    event.preventDefault();
    debugger

    // Variable declaration ........

    var isValid = true;
   // var $add = $("#addmore' + rowcount+'");  //-----------------------
    var companyname = $("#coname").val();
    var companyemail = $("#comail").val();
    var gstno = $("#gstno").val();
    var tinno = $("#tinno").val();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^[0-9]{10}$/;
    var phoneno = $("#phone").val();
    var faxno = $("#faxno").val();
    var corporateAddress = $("#coraddress").val();
    var branchAddress = $("#branchaddress").val();
    //var addmorebranchaddress = $add.val();
   // var addmorebranchaddress = $("#addmore' + rowcount'").val();  //-----------
    var websiteurl = $("#url").val();
    var registrationdate = $("#datepicker").val();
    var registrationaddress = $("#registrationaddress").val();
    var name = $("#name").val();
    var phone = $("#phoneno").val();
    var email = $("#email").val();

    var remarks = $("#remarks").val();


    // all condition for validation.........

    if (companyname == '') {
        isValid = false;
        $('#coname').addClass('border-danger');
    } else {
        $('#coname').removeClass('border-danger');
    }

    if (!emailPattern.test(companyemail) || (companyemail == '')) {
        isValid = false;
        $('#comail').addClass('border-danger');
    } else {
        $('#comail').removeClass('border-danger');
    }

    if (gstno == '') {
        isValid = false;
        $('#gstno').addClass('border-danger');
    } else {
        $('#gstno').removeClass('border-danger');
    }


    if (tinno == '') {
        $('#tinno').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#tinno').removeClass('border-danger');
    }
    if (!phonePattern.test(phoneno) || (phoneno == '')) {
        isValid = false;
        $('#phone').addClass('border-danger');
    }
    else {
        $('#phone').removeClass('border-danger');
    }
    if (faxno == '') {
        isValid = false;
        $('#faxno').addClass('border-danger');
    }
    else {
        $('#faxno').removeClass('border-danger');
    }


    if (corporateAddress == '') {
        $('#coraddress').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#coraddress').removeClass('border-danger');
    }


    if (branchAddress == '') {
        $('#branchaddress').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#branchaddress').removeClass('border-danger');
    }

    //--------------------------

    //if (addmorebranchaddress == '') {
    //    $("#addmore' + rowcount'").addClass('border-danger');
    //    isValid = false;
    //}
    //else {
    //    $("#addmore' + rowcount'").removeClass('border-danger');
    //}



    //--------------------------


    if (websiteurl == '') {
        $('#url').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#url').removeClass('border-danger');
    }


    if (registrationdate == '') {
        $('#datepicker').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#datepicker').removeClass('border-danger');
    }


    if (registrationaddress == '') {
        $('#registrationaddress').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#registrationaddress').removeClass('border-danger');
    }

    if (name == '') {
        $('#name').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#name').removeClass('border-danger');
    }

    if (!phonePattern.test(phone) || (phone == '')) {
        $('#phoneno').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#phoneno').removeClass('border-danger');
    }

    if (!emailPattern.test(email) || (email == '')) {
        $('#email').addClass('border-danger');
        isValid = false;
    }
    else {
        $('#email').removeClass('border-danger');
    }

    //if (remarks == '') {
    //    $('#remarks').addClass('border-danger');
    //    isValid = false;
    //}
    //else {
    //    $('#remarks').removeClass('border-danger');
    //}

    if (!isValid) {
        alert('Form is Not valid. Please fill out all Details!!!!');
        return;
    }

    //-----------------------

        // Ajax for POST DATA........

    else {

        debugger
        var formData = new FormData();

        formData.append('Companyname', companyname);
        formData.append('Companyemail', companyemail);
        formData.append('Gstno', gstno);
        formData.append('Tinno', tinno);
        formData.append('Phoneno', phoneno);   
        formData.append('Faxno', faxno);
        formData.append('Corporateaddress', corporateAddress);
        formData.append('Branchaddress', branchAddress);
        formData.append('Websiteurl', websiteurl);
        formData.append('Registrationdate', registrationdate);
        formData.append('Registrationaddress', registrationaddress);
        formData.append('Name', name);
        formData.append('Phone', phone);
        formData.append('Email', email);
        formData.append('Remarks', remarks);

        debugger
        $.ajax({
            type: "POST",
            url: "../Company/SaveCompanyDetails",
            data: formData,
            contentType: false,
            processData: false,
            context: document.body,
            success: function (data) {
                debugger
                alert('Data has been stored in the database');

                window.location.reload();   

            }


        })
    }
});

//--------------------------------------------------------------------------------------------------------



$("#addBtn").on('click', function () {
    var rowcount = 0;
    rowcount = $("#branchGroup").children().length;

    var row = "";


   
    rowcount = rowcount + 1;

    row += '<tr class="input-group form-group" id="R${++rowIdx}">';
    row += '<label class="label-dflt">Branch Address</label>';
    row += '<td class=" adrs-box">';
    row += '<div class="input-group">';
    row += '<textarea name="" id="branchaddress' + rowcount+'" required class="form-control" placeholder="Branch address"></textarea>';
    row += '<div class="text-center input-group-append  btn-box">';
    row += '<button class="btn btn-block btn-danger remove"';
    row += 'type="button">&times;</button>';
    row += '</div>';
    row += '</div>';
    row += '</td>';
    row += '</tr>';

    $("#branchGroup").append(row);
   
})





//$(document).ready(function () {
//    // Event handler for the "Save" button
//    $("#saveButton").on("click", function () {
//        var dataToSave = [];

//        // Loop through each dynamically added row
//        $(".input-group.form-group").each(function () {
//            var branchAddress = $(this).find("textarea").val();
//            dataToSave.push({ branchAddress: branchAddress });
//        });

//        // Create a JSON object to send to the server
//        var data = { branchData: dataToSave };

//        // Send the data to the server using AJAX
//        $.ajax({
//            type: "POST", // or "GET" depending on your server-side implementation
//            url: "your_server_endpoint_url.php", // Replace with your server-side script URL
//            data: JSON.stringify(data),
//            contentType: "application/json",
//            success: function (response) {
//                // Handle the response from the server here
//                console.log("Data saved successfully:", response);
//            },
//            error: function (error) {
//                // Handle any errors here
//                console.error("Error:", error);
//            }
//        });
//    });
//});










//$("#AddBtoon").click(function () {
//    debugger
//    var accountNumArr = []

//    var rowCount = $('#bankDetails').find('div.row').length;
//    if (rowCount == '' || typeof rowCount == 'undefined')
//        rowCount = 1;
//    else
//        rowCount = rowCount + 1;

//    var newrow = '<div class="shadow-border mt-3"><div class="row">';
//    newrow += '<div class="col-3"><div class="form-group"> <label class="label-dflt">Account Name</label><input type="text" class="form-control form-control-sm" id="AccountName' + rowCount + '" name="AccountName"> </div> </div>';
//    newrow+= '</div></div>'

//    $("#bankDetails").append(newrow);


//})

//------------------------------------------------------------------------------------------------------


//$(document).ready(function () {
//    $("#submit-button").click(function () {
//        // Reset borders
//        $("input, textarea").removeClass("error");

//        // Validation for Company Name
//        var companyName = $("#coname").val();
//        if (companyName.trim() === "") {
//            $("#coname").addClass("error");
//        }

//        // Validation for Company Email
//        var companyEmail = $("#comail").val();
//        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//        if (!emailPattern.test(companyEmail)) {
//            $("#comail").addClass("error");
//        }

//        // Validation for GST No.
//        var gstNo = $("#gstno").val();
//        if (gstNo.trim() === "") {
//            $("#gstno").addClass("error");
//        }

//        // Validation for TIN No.
//        var tinNo = $("#tinno").val();
//        if (tinNo.trim() === "") {
//            $("#tinno").addClass("error");
//        }

//        // Validation for Phone No.
//        var phoneNo = $("#phone").val();
//        var phonePattern = /^[0-9]{10}$/; // Assuming 10-digit phone number
//        if (!phonePattern.test(phoneNo)) {
//            $("#phone").addClass("error");
//        }

//        // Other validations for remaining fields can be added similarly.

//        // If any field is in error state, prevent form submission
//        if ($(".error").length > 0) {
//            return false;
//        }
//    });
//});