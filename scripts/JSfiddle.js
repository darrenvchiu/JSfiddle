$(document).ready(function(){

// Set size of the grid (gridSize)
var gridSize = 16;


// Change color and clear grid buttons

var selectedColor = 'blue';
$('#changeColor').on('click',function(){
selectedColor='yellow';
});

$('#clearButton').on('click',function(){
$('.container').find('.gridBox').css({'background-color': 'white'});
selectedColor='blue';
});

/*
function windowOnload(){
       var colorSelection =  prompt('Select a color:');
       if(colorSelection!==null){ alert('hello world');
    }
*/






// Set container dimensions
var containerWidth = $('.container').width();
$('.container').css({'height': containerWidth +5+ 'px'});


// Create the grid based on gridSize
function createDiv(){
	$('.container').append('<div class="gridBox"> </div>'); 
}

    for (var rowDivs=0; rowDivs<gridSize; rowDivs++){
	for( var colDivs =0; colDivs<gridSize; colDivs++)
		 createDiv();
   }

// Set CSS for grid
var gridWidth = containerWidth/gridSize;
$('.container').find('.gridBox').css({'width': gridWidth + 'px'},);
$('.container').find('.gridBox').css({'height': gridWidth+ 'px'});



// Highlight each div using toggleClass when mouseenter or mouseleaves the div.
$('.container').find('.gridBox').on('mouseenter', function(){
	$(this).css({'background-color': selectedColor});
});





});


