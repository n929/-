# 5.12アクティブラーニング課題
*計算練習のページを作成した。
　*カウントダウンされるので、時間切れになるまでに10問計算できるか。
　*タイマーの時間はユーザーが設定できる。

## cd.html
*ブラウザに表示されるページの形をHTMLで作成した。
*一番上にあるテキストボックスに時間を入力し、「スタート」ボタンを押すとタイマーが開始される。
*時間を入力せずに「スタート」ボタンを押すと、警告のダイアログが表示される。
*「ストップ」ボタンを押すと、タイマーを一時停止できる。再開する場合は、もう一度「スタート」ボタンを押す。
*「リセット」ボタンを押すと、タイマーをリセットし始めからやり直すことができる。
*計算結果を入力し、「次へ」ボタンを押すと新しい計算が表示されるのでそれを10回繰り返す。

## CountTimer.js
*JavaScriptはcd.htmlに間接的に組み込んだ。（cd.html7行目）

*Question関数
　*1～100までの関数を発生させる。
　*
*Start関数、Stop関数、CountDown関数、tmWrite関数
　*タイマーの関数
　*cd.htmlの「スタート」ボタン、「ストップ」ボタンに対応している。
　*カウントダウンは、67・68行目で表示させている。
*Reset関数
　*「リセット」ボタンを押すと、時間・問題数をリセットする。
