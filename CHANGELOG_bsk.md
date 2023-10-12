<!--
## 2023.x.x (unreleased)

### General
-

### Client
-

### Server
-

-->


## 2023.09-bsk-2.0 (chimera)
## Abstract
Misskey 2023.10ににおけるタイムラインの仕様変更に関わらない部分を2023.09に移植しました。 

### NOTE
- 2023.9.2で導入されたノート編集機能はクオリティの高い実装が困難であることが判明したため撤回されました

### Changes
- API: drive/files/attached-notes がページネーションに対応しました

### General
- Feat: プライバシーポリシー・運営者情報（Impressum）の指定が可能になりました
	- プライバシーポリシーはサーバー登録時に同意確認が入ります
- Feat: 「ファイルの詳細」ページを追加
	- ドライブのファイルの拡大プレビューができるように
	- ファイルが添付されたノートの一覧が表示できるように
- Enhance: モデレーションログ機能の強化
- Enhance: 依存関係の更新
- Fix: ダイレクト投稿をリノートできてしまう問題を修正

### Client
- Fix: リアクションしたユーザ一覧のUIが稀に左上に残ってしまう不具合を修正

### Server
- Fix: 連合なしアンケートに投票をするとUpdateがリモートに配信されてしまうのを修正
- Fix: プロセスが終了しない、あるいは非常に時間がかかる問題を修正


## 2023.9.1-bsk-1.3
Misskeyのフォーク元に対する主な変更点は次の通りです。
次のアップデートでフォーク元に導入される変更を先行導入しました。
### General
- Enhance: タイムラインからRenoteを除外するオプションを追加
- Enhance: ユーザーページのノート一覧でRenoteを除外できるように

### Client
- Enhance: モデレーションログ機能の強化
- Enhance: Plugin:register_post_form_actionを用いてCWを取得・変更できるように

### Server
- Enhance: MasterプロセスのPIDを書き出せるように


### Server
- Fix: お知らせのページネーションが機能しない問題を修正する[本家へのコミット](https://github.com/misskey-dev/misskey/commit/dc8ab01168873c4eafe79eb8002a0028b58758c0)を先行マージ

## 2023.9.0-bsk-1.2 
Misskeyのフォーク元に対する主な変更点は次の通りです。


### General
- Enhance: 検索の最大ヒット数が10,000件から50,000件に増加しノートが探しやすく

### Client
- Tweak: リアクションの表示サイズをデフォルトで小に 
- Tweak: データセーバー有効時にセンシティブなメディアを目立たせる設定に変更
- Enhance: 横幅の長い絵文字をを圧縮して表示するか選べるように


### Server
- Fix: お知らせのページネーションが機能しない問題を修正する[本家へのコミット](https://github.com/misskey-dev/misskey/commit/dc8ab01168873c4eafe79eb8002a0028b58758c0)を先行マージ

## 13.14.2-bsk-0.3.0

### General
- Enhance: PWAのアイコンを設定
- Enhance: BackspaceKeyのリポジトリの表記を追加 ([TeamNijimiss様よりCherry-pick、改変](https://github.com/TeamNijimiss/misskey))

### Client
- CWを設定する際に注意を促す表記を追加 ([TeamNijimiss様よりCherry-pick、改変](https://github.com/TeamNijimiss/misskey))
