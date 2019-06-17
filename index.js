$(document).ready(function(){

    var orderElement = document.getElementById('orders');
    // var $orderElement = $("#orders");
    $id = $('#id');
    $name = $('#name');
    $salary = $('#salary');
    $age =$('#age');

    $.ajax({
        type: 'GET',
        url: 'http://dummy.restapiexample.com/api/v1/employees',
        success: function(orders){
            // for($i=0; $i<=orders.length;$i++){
            //     $orderElement.append('<li>'+ orders[$i] +'</li>') 
            // }
            let o =JSON.parse(orders);
            // console.log( o[2].id);
            $.each(o,function(i,order){
               var table = document.getElementById('table');
               var r = table.insertRow(i+1);
               var cId = r.insertCell(0);
               var cName = r.insertCell(1);
               var cSalary = r.insertCell();
               var cAge = r.insertCell(3);
               cId.innerHTML = order.id;
               cName.innerHTML = order.employee_name;
               cSalary.innerHTML =order.employee_salary;
               cAge.innerHTML = order.employee_age;
                //document.getElementById('table').append("<tr><td>"+order.id+"</td><td>"+order.employee_name+"</td><td>"+order.employee_salary+"</td><td>"+order.employee_age+"</td><td>"+order.profile_image+"</td></tr>"); 
            });
        },
        error: function(){
            alert("Error occured");
        }
    });

    // $('#addData').on('click', function(){
    //     // var enteredDetails = {
    //     //     id: $id.val(),
    //     //     employee_name: $name.val(),
    //     //     employee_salary: $salary.val(),
    //     //     employee_age: $age.val(),
    //     //     profile_image: ""
    //     // }
    //     // $.ajax({
    //     //     type: 'POST',
    //     //     url: 'http://dummy.restapiexample.com/api/v1/employees',
    //     //     data: enteredDetails,
    //     //     success: function(){
    //     //         alert('data Entered');
    //     //     },
    //     //     error: function(){
    //     //         alert('Error while storing data');
    //     //     }
    //     // });
    // });
    $('#addData').click(function(){
        var enteredDetails = {
            employee_name: $name.val(),
            employee_salary: $salary.val(),
            employee_age: $age.val(),
        }

        $.ajax({
            type: 'POST',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            data: enteredDetails,
            success: function(){
                alert('data Entered');
            },
            error: function(){
                alert('Error while storing data');
            }
        });
    });
});