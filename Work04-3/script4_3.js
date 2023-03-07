// prompt(), Number(), for(){}, if(){}, push(), 変数, 配列, lengthプロパティ, e.innerHTML, 文字列の結合 については課題04-1を参照してください。
// Math.random(), Math.floor(), 改行タグ<br>, 比較演算子 については課題04-2を参照してください。

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

// 生成した配列をページに表示する。
document.body.innerHTML += numbers + "<br>";


// ****************************** //
// 　　ここまでは 課題04-2 と同じ　　　//
// ****************************** //


// 最小値とそのインデックスを記録する。
// インデックスの初期値は該当しなかった場合を判別できるように予期されない-1にする。
let mini = 99;
let miniIndex = -1;

// 配列の中から最小値を見つける。
for (i = 0; i < length; i++) {

    // 現在の値(配列(numbers)のi番目)が暫定最小値(mini)よりも小さければ上書く。
    if (numbers[i] < mini) {

        // 暫定最小値(mini)を上書く。
        mini = numbers[i];
        // 暫定最小値のインデックスを上書く。
        miniIndex = i;
        
    }
    
}

// 最小値(numbers[miniIndex])と配列(numbers)の先頭の値(numbers[0])を入れ替える。
// 配列ないの要素を直接入れ替える関数はないので、人力で要素を入れ替える。
// 先頭の要素に別の値を入れると元の値を消えてしまうため、
// 新しい変数(temp)に一度記録してから、最小値を代入する。
let temp = numbers[0];
numbers[0] = numbers[miniIndex];
// 次に、もともと最小値があった場所(numbers[miniIndex])に記録しておいた先頭の値を代入する。
numbers[miniIndex] = temp;

// 最小値と先頭を入れ替えた配列をページに表示する。
document.body.innerHTML += numbers;