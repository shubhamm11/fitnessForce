// function addItem(name){
//     if(typeof(Storage) !== "undefined"){
//         localStorage.setItem("firstName",name);
//     }
// }
// function addBtn(){
//     nameEntered = document.getElementById("name").value;
//     addItem(nameEntered);
//     alert("Name has been added");
// }
        x = localStorage.getItem('lists');
        data = JSON.parse(x);
        person = {
            name:"moin", age: 70
        }
        //list = [data];
        list = [data];
        list.push(person);
        window.localStorage.setItem("lists",JSON.stringify(list));   
        n = ["Shubham", 55, 989898, 19.5,'Matwandkar'];

        console.log(n);     

        console.log("The value in localStorage array of index 1 is"+ localStorage.getItem("lists"));