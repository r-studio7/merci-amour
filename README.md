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
  photo-*.jpg / video-*.jpg / reel-*.jpg  ← アルバム・ムービー・お気に入りの場所の写真
```

## 公開のしかた（GitHub Pages）

1. GitHubで、今のサイト（merci-amour）のリポジトリを開く
2. このフォルダの中身を全部アップロードして、今のファイルを置き換える
   （index.html / style.css / main.js / assets フォルダ）
3. 数分待つと、https://r-studio7.github.io/merci-amour/ に反映される

## 写真・リールの表紙

今まで使っていた写真とリールの表紙（サムネイル）を、新しいデザインに入れてあります。
それぞれ、これまでと同じInstagramの投稿に飛びます。

| 場所 | 入っているもの |
| --- | --- |
| Photo Album | ハロウィンのフォトブース / ネモフィラの丘 / メリークリスマス / カフェでランチ |
| Movies | ドッグランで元気にラン / 海を眺める夕暮れ / 鎌倉の紫陽花さんぽ / ゴールデンアワーのおさんぽ |
| Merci's Favorites | モニョさん（鎌倉）/ 逗子マリーナ / ニコライ バーグマン 箱根 ガーデンズ / ナスファームビレッジ |

### 入れ替えるとき
- `assets/` に写真を入れて、`index.html` の該当するカードの `assets/photo-01.jpg` などの名前と、`href="https://www.instagram.com/p/…"`（投稿のURL）を変えます
- 写真は長辺900px前後に軽くしてから入れるのがおすすめです

## 文字を変えたいところ（index.html）

- ヒーローの一言：`元保護犬メルシーの成長日記`
- About の文章：`<section id="about"` の中
- お店・スポット名：Merci's Favorites の `<span class="jk pn">…</span>`
- 写真の名前（ホバーで出る文字）：album の `Photo booth` など

## リンクの設定

- Instagram：https://www.instagram.com/merci_bichon_story/
- LINE Stickers：https://store.line.me/stickershop/author/5338966/ja
- Goods：https://mercisun.base.shop/ （BASE）

## 色と文字

- 色：Buttermilk #f5f1e8 / Blush #e8d8d5 / Light Tan #a48a72 / Warm Brown #5a4a3a / 差し色の赤 #B55447
- 文字：英語は Cormorant Garamond と Arimo、ロゴは Outfit、日本語は Zen Kaku Gothic New（Google Fonts から読み込み）

## 動き

- ヒーローの写真は、画面の中心から円がふんわり広がって約5秒で全部見えます
- マウスを動かすと小さなハートがついてきます（スマホでは出ません）
- 「動きを減らす」設定のスマホやPCでは、動きは自動でオフになります
