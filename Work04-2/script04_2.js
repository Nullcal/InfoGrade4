// prompt(), Number(), for(){}, if(){}, push(), 変数, 配列, lengthプロパティ, e.innerHTML, 文字列の結合 については課題04-1を参照してください。

// 生成する配列の長さを尋ねる。
let length = Number(prompt("配列の長さを指定してください"));

// 生成した乱数を記録する。
// new Array() は [] でも代用可。
let numbers = new Array();

// 指定された長さ(length)だけの乱数を配列(numbers)に記録する。
for (i = 0; i < length; i++) {
    
    // 0から99までの間の乱数を生成する
    // Math.random() で、0.000から0.999までの乱数を取得できる。
    // Math.random() * n で、乱数の範囲を 0.000からn未満まで拡張できる。
    // Math.floor(x) で x を切り捨てで整数に丸める。
    let randomNumber = Math.floor(Math.random() * 100);

    // 生成した乱数(randomNumber)を配列(numbers)に記録する。
    numbers.push(randomNumber);

}

// 生成した配列をページに表示する。
// 改行は <br> で表現する。
document.body.innerHTML += numbers + "<br>";

// 最小値を記録する。
// miniの初期値は予期される最大値の99を格納しておく。
let mini = 99;

// 配列の中から最小値を見つける。
for (i = 0; i < length; i++) {

    // 現在の値(配列(numbers)のi番目)が暫定最小値(mini)よりも小さければ上書く。
    // 不等号「 <, > 」の場合は、比較演算子は等号とは異なり一つ。
    if (numbers[i] < mini) {

        // 暫定最小値(mini)を上書く。
        mini = numbers[i];
        
    }
    
}

// 結果をページに表示する。
document.body.innerHTML += "最小値は" + mini;