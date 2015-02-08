# Middlemanの使い方
Ruby製のスタティックサイトジェネレーター

## 環境を整える
ターミナルを開いて、Rubyのバージョンを確認
「$」はターミナルで入力するスクリプトであることを示す。

```
$ruby -v
```


2.0.0以上推奨。



bundlerをインストール

```
$gem install bundler
```

middlemanをインストール

```
$gem install middleman
```



## サイトを動かす


サイトのフォルダを「ターミナル」にドラッグ＆ドロップ
＝ターミナルでファルダの場所を開く

現在地を確かめる

```
$pwd
```

middlemanでサイトを動かす（サーバーをたちあげる）

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

#### Slim
* HTMLをスリムに書ける
* <>がいらない
* 閉じタグいらない
* インデントで親子関係を記述

#### foundation
* CSS framework
* レスポンシブ対応のgridをメインに使う

#### Partial
* HTMLを役割ごとに分割
* header / nav / footer ,etc...

#### Layout
* レイアウトのテンプレート

#### Font Awesome
* アイコンフォント
* classでアイコンが呼び出せる

```
  <i class="fa fa-star"></i>
```

#### bower
* jQueryなどの外部ライブラリをバージョン管理


### build
ターミナルでビルドする
デプロイ（アップロード）するのはビルドしたファイル

```
$bundle exec middleman build
```

#### Minify
* ビルド時に、改行などをとってファイルを軽量化
* HTML / CSS / JavaScript対応





