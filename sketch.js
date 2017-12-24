//make_square() returns one grid square
let make_square = () => {
    //create a div
    let div = document.createElement('div');
    //apply the grid square css class
    div.className = ".square";
    //return this div
};

//check's if number is between 2 and 16
let check_valid = (n) => {
  if(n >= 2 && n <= 16) return true;
  return false;
};

//make_grid(int n) creates a grid of squares of size n * n, n E [2,16]
let make_grid = (n) => {
  //check if n is a valid number
  if(!check_valid(n)) {
    n = 2;
  }
  let number_rows = n;
  //create flex-box divs according to number of rows and columns.
  
  //create n*n squares and append child to the flex-box divs.
};

//reset() resets the color of the grid
let reset = () => {
  //create new grid
}

//change_color() changes the set color upon click
let change_color = () => {

}
