let aaa=document.getElementById("aaa");
let aa;
let p;
let a=document.getElementById("a");
let date=new Date();

aaa.onclick=function(){
    p=document.getElementById("ab").innerHTML;
     aa=document.getElementById("aa").value;
     if(p==undefined)
     p="ok";
document.getElementById("ab").innerHTML=aa+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
+date.getDate()+" - "+date.getMonth()+" - "+date.getFullYear()+"<br><br><br>"+p;
}; 
