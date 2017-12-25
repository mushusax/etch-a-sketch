//check if size is valid
let is_valid = (size) => {
  if(size >= 2 && size <= 10) return true;
  return false;
};

//generate grid function
document.getElementById('btn').addEventListener("click", function(){
  let size = document.getElementById('number_input').value;
  if(!is_valid(size)) size = 2;
  alert("Generating Grid of size: " + size);
  //set grid size
  let grid = document.getElementById('grid');
  grid.style.cssText = "grid-template-rows: repeat(" + size +  ", " + Math.round(700 / size) + "px);";
  grid.style.cssText = "grid-template-columns: repeat(" + size +  ", " + Math.round(700 / size) + "px);";
  for(i = 0; i < (size * size); i++) {
    //Create grid item
    let div = document.createElement('div');
    div.id = 'item';
    let width = Math.round(700 / size);
    div.style.cssText = "width: " + width + "px;";
    //add to grid
    grid.appendChild(div);
  }
});
