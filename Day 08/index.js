$(document).ready(function(){
    window.onscroll = function(){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById('topButton').style.visibility = 'visible';
        }
        else{
            document.getElementById('topButton').style.visibility = 'hidden';
        }
    }
});