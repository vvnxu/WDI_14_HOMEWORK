var select =document.querySelector("select")

var options=["NYC", "SF", "LA", "Sydney", "Austin"]
options.map(function(opt){
var create=document.createElement('option')
create.text=opt
select.add(create)
})

function changePic(){
	document.body.classList.add(select.value)
}
select.addEventListener("change",changePic)
