let gridContainers = document.querySelectorAll('article')
var num1 = 1
var num2 = 8



for (let i = 0; i < gridContainers.length; i++) {
	let onEight = (i + 1) % 8 === 0
	// console.log(i + (num1 * num2))

	if (onEight) {
		gridContainers[i].setAttribute('style', `grid-area: 1/1/3/3;`)
	}
} 


var cover = document.querySelectorAll('article')



// for (var i = 0; i < cover.length; i++) {
// 	if(i % 3 === 2){
// 		cover[i].classList.add('bigger');
//   }
  
// }

