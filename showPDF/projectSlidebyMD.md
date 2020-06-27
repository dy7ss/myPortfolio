---
marp: true
---

<!-- theme: default
size: 16:9
paginate: true
style: |
  section {
    background-color: #ffffe0;
  }
    h1 {
    text-align:center;
    }
    h2 {
        text-align:center;
    }
    strong{
        color:red;
    }
    h3{color: blue;
    text-align:center;
    }

     -->

# ポートフォリオサイトを利用した、

# 企業からのスカウトサービス

<br>

---

# 提供サービスの概要

- 学生のポートフォリオ（制作物）を公開するポータルサイトを提供する
<!-- どこそこ大学のハンドネームなにがしさんはTODOアプリ作った、
この人は技術書紹介サービスを作った、みたいなのがひと目で見れたり、検索できるサービス -->

- 企業側はそのポートフォリオを判断材料に、学生にスカウトメールを送信する
  <!-- 最新の技術を取り込もうとしてるところがいいね、とか、うちがやってる事業に似ていることしているね、とか 単純にプログラミングやったことある人がほしい、でもいい-->
    <br>

## 今後の IT 人材の拡大に対応可能な、

## 学生の社会進出ルーティングを構築し、社会に貢献する

---

# 課題発見と企画提案の経緯 1/4

<br>
自身のポートフォリオサイト制作時、
参考となるような
「学生が制作したポートフォリオサイト」を探すのが難しかった<br><br>

特に、それをまとめているような**ポータルサイトが存在しない**ことが判明した

<!-- 個人サイトで「おすすめの参考ポートフォリオサイトまとめ」はあったが、プロのエンジニアのものを紹介しているのが大半 -->

<br><br>

---

# 課題発見と企画提案の経緯 2/4

## そもそも、なぜ学生はポートフォリオを作るか？

<br>

- 技術力・業界適性の証明を求める企業が、一定数存在するから
- 批評されたい（見てほしい、認められたい、自己承認欲求）

<!-- 御社もそうだし、たいていのWebデザイナー募集でもそう -->
<!-- せっかく作ったものなので、見てほしいとか認められたいとか、もちろんあるけど
プログラミング学習は基本孤独だと思うので、何かコミュニケーションする機会がほしいというニーズがあるのではないか？と考えている -->

<br><br>

---

# 課題発見と企画提案の経緯 3/4

<!-- ## 企業が人材確保に対して考えていること -->

## 企業はなぜ学生にポートフォリオを求めるか？

<br>

- 採用（面接）コストを減らしたい
  （適性のない学生に、時間をかけたくない）
  <!-- これは正しいことかわからないけど、例えば論理的な考え方ができない人はほしくないなあ、とか -->

<br><br>

---

# 課題発見と企画提案の経緯 4/4

## ポートフォリオのポータルサイトがあったら？

- 技術力・適性のある学生が集約される
- その集団にスカウトメールを送ることができたら、
  企業の採用コストが下がる

  <!-- 1サイトをネットサーフィンするだけでたいてい完結するというメリット -->

### ⇨ ポータルサイトには価値がある！

<br>

---

# 既存の類似サービスの研究 1/2

## VIVIVIT

### 特徴

デザイナーを主なターゲットとしたスカウトサービス

### 問題点

- IT エンジニア特化型ではない
- **ポートフォリオの内容は一般に公開されない**
  （登録企業のみが内容を知ることができる）
  <!-- あくまで求職者と企業との間だけで完結するサービスでしかない -->

---

![](https://i.gyazo.com/257ad84203a744b0469699fbcba941d1.png)

---

# 既存の類似サービスの研究 2/2

## 侍スカウト

### 特徴

- **主に社会人を対象**にした、
  ポートフォリオを利用したスカウトサービス

### 問題点

- 学生をターゲットにしていない
- **ポートフォリオの内容は一般に公開されない**
  （登録企業のみが内容を知ることができる）
    <!-- あくまで求職者と企業との間だけで完結するサービスでしかない -->

---

![](https://i.gyazo.com/4977c7d946b9686f9e5e2440788aa6ae.png)

---

# 既存サービスとの差別化

## <実装>

- 閲覧制限を撤廃、誰でも閲覧できるシステムとする
- 「いいね」機能を実装する
- 企業からの「コードレビュー」機能を実装する
<!-- 学生の孤独な学習からの解放、肯定されることの嬉しさ -->

## <狙い>

- 学生の「評価してほしい欲求」が満たされ、
  ポータルサイトの活性化が期待できる
- コードレビューにより、
  インターン制度に類似した「自社への興味」を学生に早期に付与できる

---

# 収益モデル

## 企業サイドから

- 企業紹介ページの掲載料を獲得する
<!-- ポートフォリオまとめサイトとして終わらせるわけでなく、こういうこともプログラムで実現できるよ、という紹介や、学生にとっての新しい技術のキャッチアップの意味合いも兼ねることができる -->
- スカウト成功による成果報酬を獲得する
  <!-- 実際はどうなのか知らないが、1人獲得あたり100万近い金額が動くときいたことがある　意外と単価の高い巨大な市場なのかもしれないと思っている -->
  <!-- ここをメインの利益獲得先としたい -->
    <br>

## 学生サイドから

- 学生に「PaaS 環境」を有償で提供する
（PaaS：アプリケーションリリースに必要な環境を提供するサービス）
<!-- 既存の無料サービスもある程度充実しているので、おまけ感覚で考えている
でもポータルサイトと連結しているとなんだか安心できるイメージは与えられるので、
一定の需要はあるかもしれない -->

---

# 提案サービスで考えられる問題点

**1.閲覧制限がないことで、未登録企業でもスカウトが可能になる**

解決策：連絡手段の掲載を制限する

<!-- → 登録するポートフォリオにおいて、
GitHub アカウントやメールアドレスなど、連絡手段となりうる手段の掲載禁止 -->

→ コミュニケーションツールな制作物への対応方法がわからない

<!-- 掲示板サービスとかだったら連絡手段書き放題 -->
<br>

**2.コードレビューに時間がかかる**

<!-- ソースコード全文を読むのは大変 -->

解決策：「工夫したポイント」をピックアップして表示する機能を実装する
<br>
**3.どこまでが学生の実力か判断できない**

解決策：登録企業が面接段階で、確かめるしかない　 → 　企業に負担を強いる

<!-- なんでこの技術採用したの？気をつけたポイントは何？とか、ヒアリングする必要が生じてくる。コードレビュー機能の弊害で、技術力が完全に保証されていない -->