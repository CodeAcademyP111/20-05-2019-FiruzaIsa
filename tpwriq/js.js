var ul=document.querySelector("#nav");

var navi = document.querySelectorAll(".menu");

 for( var i=0;i<ul.childElementCount;i++){
   ul.children[i].addEventListener("click", function() {
 if(this.children[1].classList.contains("fa-plus")){
  this.children[1].classList.replace("fa-plus","fa-minus");



}else{
  this.children[1].classList.replace("fa-minus","fa-plus")

}


 
 })
}