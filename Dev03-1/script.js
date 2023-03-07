// let <名前>で変数を定義する（サイコロを振る回数）
// prompt() で振る回数を入力させる
// Number(x) で x を数字に変換する
let count = Number(prompt("サイコロを振る回数を入力してね💖"));

// 出目を記録する配列
// new Array() で新しい配列を作る >>> [0, 0, 0, 0, 0... 0, 0]
// <配列名>[n] で配列のn番目を取得、編集できる
let deme = new Array();

// 出目の回数を記録する配列
// 左(0番目)から順に 1の出た回数、2の出た回数を記録していく
let demekai = [0, 0, 0, 0, 0, 0];

// for文を使って count 回サイコロを振る
// for (i = 開始値; i < 終了値; i++) { 繰り返す内容 }
// iは一回ループするごとに1加算される = 数え上げてる
for (let i = 0; i < count; i++) {

    // 変数faceはサイコロの出目を記録する = 1から6までの整数の乱数
    // Math.rondom() は 0から1までの小数をランダムに出力する
    // 0から1の乱数に6をかけて0から6までの乱数にする
    // Math.floor(x) で x の小数第一位を切り捨てする >>> 0.00~5.99 -> 0~5
    // 0から5までの整数が出力されるので、1を足して数を整える
    let face = Math.floor( Math.random()*6 )+1;

    // 配列demeに出た目faceを記録する
    // deme[i]=x でdemeのi番目に出目xを記録する
    // let a = [0, 0, 0]; a[1] = 3; >>> [0, 3, 0]
    deme[i] = face;

    // 出目の回数を記録する
    // 配列のインデックスは0から始まるので、1から始まるサイコロの目を1ずらして記録
    // <変数>++ で変数を +1する
    demekai[face-1]++;

    // docuemnt.getElementById("x")で HTML内でxというidが振られた要素を取得する
    // >>> 下のコードなら<div id="dice"></div>が取得できる
    // insertAdjacentHTML("beforeend", <HTMLタグ>)で直前に取得した要素に別の要素を追加する
    // 今回追加する<img>タグは画像を表示するタグ
    // <img src="x"> のxに参照する画像のパスを入力する
    // >>> 下のコードなら index.htmlと同じ階層にあるimagesフォルダー内の 1.pngなどを表示する
    document.getElementById("dice").insertAdjacentHTML("beforeend", "<img src='images/" + face + ".png' >");

}

// 1から順番に、出目の回数と度数をHTML上に表示する
// 出目は6種類あるので6回繰り返す（i < 6）
for (let i = 0; i < 6; i++) {
    
    // <HTML要素>.innerHTMLで要素の中身を編集する
    // <div> ココをいじる </div>
    // iは出目、demekai[i]は出目iが出た回数
    // <br>は改行コード
    document.getElementById("result").innerHTML += (i+1)+"は"+demekai[i]+"回出ました。";

    // 度数を計算して表示する
    // 度数 = 出目が出た回数 / サイコロを振った回数 = demekai[i] / count
    // 数式内の括弧は数学の括弧と同じように扱われる（なので今回は割り算なのでなくてもいい）
    document.getElementById("result").innerHTML += "度数は"+(demekai[i]/count)+"です。<br>";
    
}