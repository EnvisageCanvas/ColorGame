var square = document.getElementsByClassName("square");
var r,g,b;
var correctColor =[];
var ans;
var displayRGB = document.getElementById("correctColor");
var clickedSquare;
var correctBG;
//get random values to set the color
function assignColor()
{
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);

    return r,g,b;
}

//set colours for the squares
function coloredSquare()
{
    ans = Math.floor(Math.random()*6);
    for(var i=0;i<square.length;i++)
    {
        colors = assignColor(); 
        square[i].style.backgroundColor = "rgb("+r+","+g+","+b+")";
        if(i==(ans-1))
        {
            displayRGB.textContent = "RGB("+r+","+g+","+b+")";
            correctBG = square[i].style.backgroundColor;
        }
    }

}

coloredSquare();
console.log(correctBG);
//change colors and display when the button "NEW COLOURS" is clicked
document.getElementById("newColor").addEventListener('click',()=>{
    coloredSquare();
})

// function trigger(square){
//     //console.log(square.style.backgroundColor);
//     if(square.style.backgroundColor == correctBG)
//       {
//         prompt("correct")
//         for(var i=0;i<square.length;i++)
//             square[i].style.backgroundColor = correctBG;
//       }  
// }

for(var i=0;i<6;i++)
{
    square[i].addEventListener('click',()=>{
        if(this.style.backgroundColor == correctBG)
            console.log("correct")
        else
            console.log("wrong")
    })
}

