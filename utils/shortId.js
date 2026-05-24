function generateShortId() {
	let result = '';
	for(let i = 0; i < 8; i++){
		const category = Math.floor(Math.random()*3)+1;
		let randomAscii;
		if(category === 1){
			randomAscii = Math.floor(Math.random()*(57-48+1))+48;
		}
		else if(category == 2){
			randomAscii = Math.floor(Math.random()*(90-65+1))+65;
		}
		else{
			randomAscii = Math.floor(Math.random()*(122-97+1))+97;
		}
		result += String.fromCharCode(randomAscii);
	}
	return result;
}
module.exports = generateShortId;
