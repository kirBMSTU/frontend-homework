'use strict';

const comparePlainObjects = (o1, o2) => {
	for(let p in o1){
		if(o1[p] !== o2[p]){
			return false;
		}
	}
	for(let p in o2){
		if(o1[p] !== o2[p]){
			return false;
		}
	}
	return true;
};

const isAnagram = (firstWd, secondWd) => {
	if (firstWd.length !== secondWd.length) {
		return false;
	}
	const firstWord = firstWd.toLowerCase();
	const secondWord = secondWd.toLowerCase();

	let firstLetters = {};
	let secondLetters = {};

	for (let i = 0; i < firstWord.length; i++) {
		if (firstWord[i] in firstLetters) {
			firstLetters[firstWord[i]]++;
		} 
		else {
			firstLetters[firstWord[i]] = 1; 
		} 
		if (secondWord[i] in secondLetters) {
			secondLetters[secondWord[i]]++;
		} 
		else {
			secondLetters[secondWord[i]] = 1; 
		} 
	} 

	return comparePlainObjects(firstLetters, secondLetters);
};

const anagram = (words) => {
	let groups = {};
	for (let i = 0; i < words.length; i++) 
	{
		if (words[i] !== null) {
			for (let j = 0; j < words.length; j++) {
				if (i === j || words[j] === null) continue;
				if (isAnagram(words[i], words[j])) {
					if (!groups.hasOwnProperty(words[i])) {
						groups[words[i]] = [];
					} 
					groups[words[i]].push(words[j]);
					words[j] = null;
				}
			}
			if (groups.hasOwnProperty(words[i])) {
				groups[words[i]].push(words[i]);
				words[i] = null;
			} 
		} 
	}
	console.log(Object.values(groups));
	return Object.values(groups).map((item) => item.sort()).sort();
};