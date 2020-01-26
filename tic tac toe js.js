var turn = "X"
$(".box").one("click", (event) => {
var node = document.createElement("P")
var textnode = document.createTextNode(turn)
node.append(textnode)
$(event.target).append(node)
if(turn == "X") {
  turn = "O"
}
else {
  turn = "X"
}
})
function win() {
  if(box0 == turn){
    console.log("yay")
  }
  else {
    console.log("no")
  }
}