'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	//мои тесты
	QUnit.test('Функция работает правильно со словами разной длины, но с одинаковыми буквами', function (assert) {
		const input = [
			'кот', 'пила', 'стоп', 
			'ток', 'кошка', 'липа',
			'пост', 'коткот', 'шок'
		];

		const output = [
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output, 'кошка != шок, кот != коткот');
	});

	QUnit.test('Функция работает правильно со списком без анаграм', function (assert) {
		const input = [
			'съешь', 'ещё', 'этих', 'мягких', 'французских', 'булок'
		];

		const output = [
		];

		assert.deepEqual(anagram(input), output);
	});
});
