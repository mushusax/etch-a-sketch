//check if size is valid
let is_valid = (size) => {
  if(size >= 2 && size <= 50) return true;
  return false;
};

//resets grid first
let reset = () => {
  let grid = document.getElementById("grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
};

var color_options = ["papayawhip", "darkcyan", "darkseagreen", "indianred", "steelblue", "coral"];
//generate random color
let random_color = () => {
  let num = Math.floor(Math.random() * (6 - 0));
  return color_options[num];
};

//generate grid function
document.getElementById('btn').addEventListener("click", function(){
  reset();
  let size = document.getElementById('number_input').value;
  if(!is_valid(size)) size = 2;
  //set grid size
  let grid = document.getElementById('grid');
  grid.style.cssText = "grid-template-rows: repeat(" + size +  ", " + Math.round(700 / size) + "px);";
  grid.style.cssText = "grid-template-columns: repeat(" + size +  ", " + Math.round(700 / size) + "px);";
  let color = random_color();
  for(i = 0; i < (size * size); i++) {
    //Create grid item
    let div = document.createElement('div');
    div.id = 'item';
    let width = Math.round(700 / size);
    div.style.cssText = "width: " + width + "px;";

    //add mouseover capability
    div.addEventListener("mouseenter", function(){
      div.style.cssText = "background-color: " + color + ";";
    });
    //add to grid
    grid.appendChild(div);
  }
});
