const axios = require('axios';)
const {Telegraf} = require('telegraf')
const bot = new Telegraf('6867097602:AAFh2kwewwvaehZNBY2Tke43lrD6ZQfFIbk');

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Harshit Shukla'));


let binarySearch = `// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

	let start = 0, end = arr.length - 1;

	// Iterate while start not meets end
	while (start <= end) {

		// Find the mid index
		let mid = Math.floor((start + end) / 2);

		// If element is present at 
		// mid, return True
		if (arr[mid] === x) return true;

		// Else look in left or 
		// right half accordingly
		else if (arr[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}

	return false;
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}

x = 8;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}`

bot.command('binarysearchjs', (ctx)=>ctx.reply(binarySearch))

//using axios
bot.command('binarytreejs', async function(ctx)){
    const response = await axios.grt('link')
    console.log(response);
    return ctx.reply(response.data);
}


bot.on('sticker', (ctx) => ctx.reply('💖')) ;


bot.launch();