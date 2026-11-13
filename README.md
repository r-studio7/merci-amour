# Merci サイト 公開キット

元保護犬メルシーの成長日記サイト（PC・スマホ対応）の公開用ファイル一式です。

## 中身

```
index.html        ページ本体
style.css         デザイン（色・文字・レイアウト）
main.js           スマホのメニュー、マウスについてくるハート
assets/
  hero.jpg        ヒーローの写真
  profile.jpg     Aboutの丸いアイコン
  illust-walk.webp  Follow Merciのイラスト
  photos/         ← ここにインスタの写真を入れる（下を見てね）
```

## 公開のしかた（GitHub Pages）

1. GitHubで、今のサイト（merci-amour）のリポジトリを開く
2. このフォルダの中身を全部アップロードして、今のファイルを置き換える
   （index.html / style.css / main.js / assets フォルダ）
3. 数分待つと、https://r-studio7.github.io/merci-amour/ に反映される

## 写真の入れかた

`assets/photos/` に、下の名前で写真を入れてください。入れた写真は枠いっぱいに表示されて、マウスを乗せるとふわっと拡大します。
ファイルがないところは、ピンクの仮の枠のままです。

| 場所 | ファイル名 | 比率の目安 |
| --- | --- | --- |
| Photo Album 1〜4 | album-1.jpg 〜 album-4.jpg | 縦長 4:5 |
| Movies 1〜4 | movie-1.jpg 〜 movie-4.jpg（動画の表紙） | 縦長 9:16 |
| Merci's Favorites 1〜4 | place-1.jpg 〜 place-4.jpg | 正方形 1:1 |

- 写真は横幅1200px前後、1枚300KB以下がおすすめ（表示が軽くなります）
- 画像から開く先は、今はすべてメルシーのInstagramです。投稿ごとのリンクにしたいときは、index.html の該当する `<a href="https://www.instagram.com/merci_bichon_story/"` を、その投稿のURLに変えてください

## 文字を変えたいところ（index.html）

- ヒーローの一言：`元保護犬メルシーの成長日記`
- About の文章：`<section id="about"` の中
- お店・スポット名：`［お店・スポット名］` を、実際の名前に（4か所）
- 写真の名前（ホバーで出る文字）：album の `Photo booth` など

## リンクの設定

- Instagram：https://www.instagram.com/merci_bichon_story/
- Goods：Etsy の MerciSunDesign
- **LINE Stickers：まだ仮（`#`）です。** LINEスタンプのURLが決まったら、index.html の `LINE Stickers` のリンク（`href="#"`）に入れてください

## 色と文字

- 色：Buttermilk #f5f1e8 / Blush #e8d8d5 / Light Tan #a48a72 / Warm Brown #5a4a3a / 差し色の赤 #B55447
- 文字：英語は Cormorant Garamond と Arimo、ロゴは Outfit、日本語は Zen Kaku Gothic New（Google Fonts から読み込み）

## 動き

- ヒーローの写真は、画面の中心から円がふんわり広がって約5秒で全部見えます
- マウスを動かすと小さなハートがついてきます（スマホでは出ません）
- 「動きを減らす」設定のスマホやPCでは、動きは自動でオフになります
