// prompt(), Number(), for(){}, if(){}, push(), 変数, 配列, lengthプロパティ, e.innerHTML, 文字列の結合 については課題04-1を参照してください。
// Math.random(), Math.floor(), 改行タグ<br>, 比較演算子 については課題04-2を参照してください。
// 値の入れ替え については課題04-3を参照してください。

// 生成する配列の長さを尋ねる。
let length = Number(prompt("配列の長さを指定してください"));

// 生成した乱数を記録する。
let numbers = new Array();

// 指定された長さ(length)だけの乱数を配列(numbers)に記録する。
for (i = 0; i < length; i++) {
    
    // 0から99までの間の乱数を生成する
    let randomNumber = Math.floor(Math.random() * 100);

    // 生成した乱数(randomNumber)を配列(numbers)に記録する。
    numbers.push(randomNumber);

}

// ****************************** //
// 　　ここまでは 課題04-2 と同じ　　　//
// ****************************** //

// iからlength番目までの配列(numbers)の要素を順々に表示する。
for (i = 0; i < length; i++) {
    
    // 配列(numbers)のiからlength番目を切り取る
    // <配列>.slice(n) で、配列のn番目以降を切り取れる。
    let trimmed = numbers.slice(i);
    // 切り取った配列をページに表示する。
    document.body.innerHTML += trimmed + "<br>";
    
}