# Middlemanの使い方
Ruby製のスタティックサイトジェネレーター
[Middleman Official Site](https://middlemanapp.com/jp/)

## 環境を整える
ターミナルを開いて、Rubyのバージョンを確認
「$」はターミナルで入力するスクリプトであることを示す。

```
$ruby -v
```

Rubyはrbenvなどでインストール推奨
2.2.0以上推奨。


bundlerをインストール

```
$gem install bundler
```

Middlemanをインストール

```
$gem install middleman
```

Bowerで外部ファイルをインストール

```
$bower install
```


## サイトを動かす


サイトのフォルダを「ターミナル」にドラッグ＆ドロップ
＝ターミナルでファルダの場所を開く

現在地を確かめる

```
$pwd
```

Middlemanでサイトを動かす（サーバーをたちあげる）

```
$bundle exec middleman
```

ブラウザで「localhost:4567」を開く

## サイトを編集する
２つのディレクトリに注意する。

### source
こちらのファイルを編集する。
編集しやすいように、下記の仕組みを導入。

#### Sass
* cssを効率良く記述。
* mixin
* variable
* method
  - lighten
  - darken

#### Slim
* HTMLをスリムに書ける
* <>がいらない
* 閉じタグいらない
* インデントで親子関係を記述
* コメントアウトが２種類
* Rubyを埋め込める

#### ZURB Foundation
* CSS framework
* レスポンシブ対応のgridをメインに使う
* [Official Site](http://foundation.zurb.com/)

#### Partial
* HTMLを役割ごとに分割して読み込む
* header / nav / footer ,etc...

#### Layout
* レイアウトのテンプレート

#### Font Awesome
* アイコンフォント
* classでアイコンが呼び出せる
* [Official Site](http://fontawesome.io/)

```
  <i class="fa fa-star"></i>
```

#### Bower
* jQueryなどの外部ライブラリを管理する仕組み


### アップロード用のファイルを生成する
ターミナルでビルドする
デプロイ（アップロード）するのはビルドしたファイル

```
$bundle exec middleman build
```

#### Minify
* ビルド時に、改行などをとってファイルを軽量化
* HTML / CSS / JavaScript対応

## その他の使い方
Middlemanを複数起動する
= port番号（任意）を指定してサーバーを立ち上げる

```
$bundle exec middleman --port=7777
```

or

```
$bundle exec middleman -p 7777
```

## ターミナルに不慣れな方へ
* ターミナルをカスタマイズ
  - 文字の大きさはCommand + / Command -
  - fontは[Source Code Pro](https://store1.adobe.com/cfusion/store/html/index.cfm?store=OLS-JP&event=displayFontPackage&code=1960)などに


* Mac用アプリ
  - [cd to](https://github.com/jbtule/cdto)をFinderのツールバーに登録すると、FinderからTerminalが開きます。
  - [iTerm2](https://www.iterm2.com/)で見た目をカスタマイズしたり、ホットキーを設定したり。


