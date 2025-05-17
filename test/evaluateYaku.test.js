const test = require('node:test');
const assert = require('node:assert');
const evaluateYaku = require('../evaluateYaku');

test('ピンゾロ', () => {
  assert.deepStrictEqual(evaluateYaku(1, 1, 1), { name: 'ピンゾロ', score: 5 });
});

test('アラシ', () => {
  assert.deepStrictEqual(evaluateYaku(2, 2, 2), { name: 'アラシ (2)', score: 3 });
});

test('シゴロ', () => {
  assert.deepStrictEqual(evaluateYaku(4, 5, 6), { name: 'シゴロ', score: 2 });
});

test('ヒフミ', () => {
  assert.deepStrictEqual(evaluateYaku(1, 2, 3), { name: 'ヒフミ', score: -2 });
});

test('目', () => {
  assert.deepStrictEqual(evaluateYaku(2, 2, 3), { name: '目 (2)', score: 2 });
});

test('役なし', () => {
  assert.deepStrictEqual(evaluateYaku(1, 3, 5), { name: '役なし', score: 0 });
});
