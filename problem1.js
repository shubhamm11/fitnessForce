function checkNumber(n){
    if(Math.sqrt(n) % 1 != 0){
        return n;
    }
}
var x1, x2, y1, y2, countA = 1,countB= 1,j,totalPaths = 1,i=0;
var APoints = [];
var BPoints = [];
var AB = [];
for(x1 = 0; x1<=5; x1++){
    if(checkNumber(x1)){
        for(y1=0; y1<=5; y1++){
            if(checkNumber(y1)){
                if(checkNumber(x1+y1)){
                    var A = {
                        x1: x1,
                        y1: y1
                    }
                    APoints[countA] = A;
                    countA++;
                    for(x2 = x1+1; x2<=5; x2++){
                        if(checkNumber(x2)){
                            for(y2=y1+1; y2<=5; y2++){
                                if(checkNumber(y2)){
                                    if(checkNumber(x2+y2)){
                                        var B = {
                                            x2: x2,
                                            y2: y2
                                        }
                                        BPoints[countB] = B;
                                        
                                        //alert(" X1 : " + x1+ ", Y1 : "+y1 +", And sum of them is : " +(x1+y1) + " \n X2 : " + x2+ ", Y2 : "+y2 +", And sum of them is : " +(x2+y2));
                                    
                                        table = document.getElementById("table");
                                        r = table.insertRow(i+1);
                                        c1 = r.insertCell(0);
                                        c2 = r.insertCell(1);
                                        c1.innerHTML = totalPaths;
                                        c2.innerHTML = "<p>A("+x1+","+y1+")  B("+x2+","+y2+")</p><p> Sum Of A = "+(x1+y1)+" and Sum of B = "+(x2+y2)+"</p>";
                                        countB++;
                                        totalPaths++;
                                        i++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
document.getElementById("totalValue").innerHTML = "Total no of paths are "+ i +" .";
// for(x2 = 0; x2<=5; x2++){
//     if(checkNumber(x2)){
//         for(y2=0; y2<=5; y2++){
//             if(checkNumber(y2)){
//                 if(checkNumber(x2+y2)){
//                     var B = {
//                         x2: x2,
//                         y2: y2
//                     }
//                     BPoints[countB] = B;
//                     countB++;
//                     console.log(BPoints);
//                     alert("X1 : " + x1+ ", Y1 : "+y1 +", And sum of them is : " +(x2+y2));
//                 }
//             }
//         }
//     }
// }