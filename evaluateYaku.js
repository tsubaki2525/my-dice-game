(function(global){
  function evaluateYaku(die1, die2, die3) {
    // 出目を昇順にソート
    let sortedDice = [die1, die2, die3].sort((a, b) => a - b);

    // ピンゾロ (1-1-1)
    if (die1 === 1 && die2 === 1 && die3 === 1) {
      return { name: "ピンゾロ", score: 5 };
    }

    // アラシ (同じ目が3つ、ピンゾロ以外)
    if (die1 === die2 && die2 === die3) {
      return { name: `アラシ (${die1})`, score: 3 };
    }

    // シゴロ (4-5-6)
    if (sortedDice[0] === 4 && sortedDice[1] === 5 && sortedDice[2] === 6) {
      return { name: "シゴロ", score: 2 };
    }

    // ヒフミ (1-2-3)
    if (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3) {
      return { name: "ヒフミ", score: -2 };
    }

    // 目（同じ目が2つ）
    if (die1 === die2 || die2 === die3 || die1 === die3) {
      let pairValue;
      if (die1 === die2) pairValue = die1;
      else if (die2 === die3) pairValue = die2;
      else pairValue = die1;

      return { name: `目 (${pairValue})`, score: pairValue };
    }

    // 役なし
    return { name: "役なし", score: 0 };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = evaluateYaku;
  } else {
    global.evaluateYaku = evaluateYaku;
  }
})(this);
