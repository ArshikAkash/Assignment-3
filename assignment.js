// Part-1 kilometerToMeter

function kilometerToMeter(kilometer) {
	if (kilometer < 0) {
		meter = "Distance can't be negative";
		return meter;
	} else {
		var meter = kilometer * 1000;
		return meter;
	}
}
var meter = kilometerToMeter(197);
console.log(meter);

// Part-2 budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
	if (watch < 0) {
		totalCost = "Items can't ne negative";
		return totalCost;
	}
	if (mobile < 0) {
		totalCost = "Items can't ne negative";
		return totalCost;
	}
	if (laptop < 0) {
		totalCost = "Items can't ne negative";
		return totalCost;
	} else {
		var watchPrice = 50 * watch;
		var mobilePrice = 100 * mobile;
		var laptopPrice = 500 * laptop;
		var totalCost = watchPrice + mobilePrice + laptopPrice;
		return totalCost;
	}
}
var totalCost = budgetCalculator(1, 1, 1);
console.log(totalCost);

//Part-3 hotelCost
function hotelCost(dayStayed) {
	if (dayStayed < 0) {
		cost = "Day can't be negative";
		return cost;
	} else {
		if (dayStayed <= 10) {
			var cost = dayStayed * 100;
			return cost;
		}
		if (dayStayed <= 20) {
			var cost = 1000 + (dayStayed - 10) * 80;
			return cost;
		}
		if (dayStayed > 20) {
			var cost = 1800 + (dayStayed - 20) * 50;
			return cost;
		}
	}
}
var cost = hotelCost(-25);
console.log(cost);

//Part-4 megaFriend

var friends = ['shuvo', 'kabila', 'habu'];
var maxWord = '';
function megaFriend(friends) {
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].length > maxWord.length) {
			maxWord = friends[i];
		}
	}
	return maxWord;
}
var maxWord = megaFriend(friends);
console.log(maxWord);

//done assignment
