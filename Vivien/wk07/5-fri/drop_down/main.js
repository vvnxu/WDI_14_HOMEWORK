var select =document.querySelector("select")

var options=["New York", "San Francisco", "Los Angeles", "Sydney", "Austin"]
options.map(function(opt){
var create=document.createElement('option')
create.text=opt
select.add(create)
})
// function addElem(options){
//   options.forEach(function(opt){
//   var add=document.createElement("option")
//    add.text=opt
//   select.add(add)
//     })
// }

var cityPics={
  "New York":"https://www.taketours.com/images/destination/liberty2.jpg",
  "San Francisco":"https://www.wheretraveler.com/sites/default/files/styles/wt17_promoted/public/San-Francisco-shutterstock_121582312.jpg?itok=PxJ2IZMh",
  "Los Angeles":"https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2015/04/29043659/hillsong-la-profile.jpg",
  "Sydney":"http://footage.framepool.com/shotimg/qf/347450913-sydney-harbor-bridge-highway-usa-sydney-australia-downtown.jpg",
  "Austin":"https://1.bp.blogspot.com/-3RfJDm0FSKI/V4Bpb3M2YoI/AAAAAAAAAPg/DxXDoNEdLt4Yzq-iWMKvRFtrwWobmzATACLcB/s1600/WEATHER%2BAUSTIN%2BTEXAS.JPG"
}
function changePic(){
  document.body.style.backgroundImage = "url(" + cityPics[select.value] + ")"
}
select.addEventListener("change",changePic)
