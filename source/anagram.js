'use strict';

const wordToSortedArr = (word) => {
	return word.toLowerCase().split('').sort();
};

const isAnagram = (firstWord, secondWord) => {
	if (firstWord.length !== secondWord.length) {
		return false;
	}

	const firstSortedLetters = String(wordToSortedArr(firstWord));
	const secondSortedLetters = String(wordToSortedArr(secondWord));

	return firstSortedLetters === secondSortedLetters;
};

const anagram = words => words
							.map(word => words
								.filter(candidate => isAnagram(word, candidate))
								.sort()
								.join(',')
							)	
							.filter((item, pos, groups) => groups.indexOf(item) === pos)
							.map(item => item.split(','))
							.filter(group => group.length > 1)
							.sort();
