var n = document.querySelectorAll("img").length;

for(i=0;i<n;i++){
    document.querySelectorAll("img")[i].addEventListener("click",function(){
        console.log(this.className);
        document.getElementById("demo").innerHTML=`<img src="image/${this.className}.jpg" width="800" height="450">`;
    });
}