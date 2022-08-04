

const getRandomLower = () =>{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () =>{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

};
const getRandomNumber = () =>{
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);

};
const getRandomSymbol = () =>{
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];

};

const passStrength =(lower, upper, number, symbol, length)=>{
		var strengthCount=0;

		if(length>6 && length<=10){
			strengthCount=1;

		}else if (length>10 && length <=20){
			strengthCount=2;

		}
		else if(length>20 && length <25){
			strengthCount=3;

		}else if (length>=25 && length <=30){
			strengthCount=4;

		}

		strengthCount+=lower+upper+symbol+number;
		var strength;
		switch(strengthCount){
			case 4:
				strength=1;
				break;
			case 5:
				strength=1;
				break;
			case 6:
				strength=2;
				break;
			case 7:
				strength=3;
				break;
			case 8:
				strength=4;
				break;
		}
	return strength;
};


const generatePassword = (lower, upper, number, symbol, length) =>{
	let generatedPassword = '';
	 const typesCount = lower + upper + number + symbol;
	 const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	// Doesn't have a selected type so password generation is not possible hence black string 
	if(typesCount === 0) {
		return '';
	}
	const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	const passwordStrength= passStrength(lower, upper, number, symbol, length);
	const finalPassword = generatedPassword.slice(0, length);
	return {finalPassword,passwordStrength} ;
};


export default {generatePassword};