// prompt(), Number(), for(){}, if(){}, push(), 変数, 配列, lengthプロパティ, e.innerHTML, 文字列の結合 については課題04-1を参照してください。
// Math.random(), Math.floor(), 改行タグ<br>, 比較演算子 については課題04-2を参照してください。
// 値の入れ替え については課題04-3を参照してください。
// slice() については課題04-4を参照してください。

// 生成する配列の長さを尋ねる。
let length = Number(prompt("配列の長さを指定してください"));

// ****************************** //
//     　ここの下にコードを追加　　　  //
// ****************************** //

// 配列の長さの上限以上の入力を99で上書きする。
// Math.min(a, b)で、aとbどちらか小さい方の値が取得できる。
length = Math.min(length, 99);

// ****************************** //
// 　配列の生成は 課題04-2 と同じ　　　//
// ****************************** //

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
document.body.innerHTML += "並び替え前：" + numbers + "<br>";

// ***************************************** //
// 　　最小値の探索・入れ替えは 課題04-3 と同じ 　　//
// ***************************************** //

// iからlength番目までの要素を順に処理する
for (i = 0; i < length; i++) {

    // 最小値とそのインデックスを記録する。
    let mini = 99;
    let miniIndex = -1;

    // ****************************** //
    //     　　for文の条件を変更　  　　  //
    // ****************************** //

    // 配列の中から最小値を見つける。
    // このとき、for文の開始インデックスはiにする。
    // 配列のiからlength番目の要素のみを処理することで、擬似的に配列を切り取る。
    for (j = i; j < length; j++) {

        // 現在の値(配列(numbers)のi番目)が暫定最小値(mini)よりも小さければ上書く。
        if (numbers[j] < mini) {

            // 暫定最小値(mini)を上書く。
            mini = numbers[j];
            // 暫定最小値のインデックスを上書く。
            miniIndex = j;
            
        }
        
    }

    // ****************************** //
    //     最小値の入れ替え先を変更　　　  //
    // ****************************** //

    // 最小値(numbers[miniIndex])と配列(numbers)の検索範囲の先頭の値(numbers[i])を入れ替える。
    let temp = numbers[i];
    numbers[i] = numbers[miniIndex];
    // 次に、もともと最小値があった場所(numbers[miniIndex])に記録しておいた先頭の値を代入する。
    numbers[miniIndex] = temp;
    
}

// 並べ替え結果をページに表示する。
document.body.innerHTML += "並び替え後：" + numbers;