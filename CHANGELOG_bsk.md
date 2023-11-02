<!--
## 2023.x.x (unreleased)

### General
-

### Client
-

### Server
-

-->


## 2023.09-bsk-3.0 (chimera)
### Abstract
Misskeyフォーク元と、MisskeyIOフォークから変更を部分的に取り入れました。 ありがとうございます。

### Note
- iOS 16.4未満を使用している場合はiOS 16.4以上にアップデートをお願いします

### General
- Feat: アイコンデコレーション機能
	- サーバーで用意された画像をアイコンに重ねることができます
	- 画像のテンプレートはこちらです: https://misskey-hub.net/avatar-decoration-template.png
		- 最大でも黄色いエリア内にデコレーションを収めることを推奨します。
		- 画像は512x512pxを推奨します。
- Feat: チャンネル設定にリノート／引用リノートの可否を設定できる項目を追加
- Enhance: アカウント登録時のメールアドレス認証に30分の有効期限を設定
  - 有効期限が切れた後であれば、登録時に使用した招待コードを再度利用できるように変更しました。
  - ユーザーが誤ったメールアドレスを入力した場合に招待コードが失効してしまう問題が解消されます。
- Enhance: 未読の通知数を表示できるように
- Enhance: 通知されず、確認の必要もないお知らせ(silence)を作成可能になりました
- Enhance: ローカリゼーションの更新
- Enhance: 依存関係の更新
- Change: CWを使用する場合、注釈を空にすることは許可されなくなりました	

### Client
- Feat: 通知をグルーピングして表示するオプション(オプトアウト)
- Feat: Misskeyの基本的なチュートリアルを実装
- Feat: スワイプしてタイムラインを再読込できるように
	- PCの場合は右上のボタンからでも再読込できます
- Feat: 絵文字ピッカーのカテゴリを多階層フォルダで分類できるように
	- (IO)[絵文字ピッカーのカテゴリの階層を表示するように・サブカテゴリを絵文字より上に](https://github.com/MisskeyIO/misskey/pull/202)
	- (IO)[絵文字ピッカーのカテゴリを多階層フォルダで分類できるように](https://github.com/MisskeyIO/misskey/pull/196)
	
- Enhance: タイムラインの自動更新を無効にできるように
- Enhance: コードのシンタックスハイライトエンジンをShikiに変更
  - AiScriptのシンタックスハイライトに対応
  - MFMでAiScriptをハイライトする場合、コードブロックの開始部分を ` ```is ` もしくは ` ```aiscript ` としてください
- Enhance: データセーバー有効時はアニメーション付きのアバター画像が停止するように
- Enhance: プラグインを削除した際には、使用されていたアクセストークンも同時に削除されるようになりました
- Enhance: プラグインで`Plugin:register_note_view_interruptor`を用いてnoteの代わりにnullを返却することでノートを非表示にできるようになりました
- Enhance: AiScript関数`Mk:nyaize()`が追加されました
- Enhance: 情報→ツール はナビゲーションバーにツールとして独立した項目になりました
- Enhance: ノート内の絵文字をクリックすることで、コピーおよびリアクションができるように
- Enhance: その他細かなブラッシュアップ
- Fix: 投稿フォームでのユーザー変更がプレビューに反映されない問題を修正
- Fix: ユーザーページの ノート > ファイル付き タブにリプライが表示されてしまう
- Fix: 「検索」MFMにおいて一部の検索キーワードが正しく認識されない問題を修正
- Fix: 一部の言語でMisskey Webがクラッシュする問題を修正
- Fix: チャンネルの作成・更新時に失敗した場合何も表示されない問題を修正 #11983
- Fix: 個人カードのemojiがバッテリーになっている問題を修正
- Fix: 標準テーマと同じIDを使用してインストールできてしまう問題を修正
- Fix: 絵文字ピッカーでバッテリーの絵文字が複数表示される問題を修正 #12197
- Fix: 11以上されているリアクションにおいてツールチップで示されるリアクション数が本来よりも1多い問題を修正 #12174
- Fix: サイレンス状態で公開範囲のパブリックを選択できてしまう問題を修正 #12224
- Fix: In deck layout, replies option is not saved after refresh
- Fix: アーカイブしたお知らせがコントロールパネルに表示される問題を修正
- Fix: 絵文字ピッカーで横に長いカスタム絵文字が見切れる問題を修正
- Note: アップデート後、サウンドに関する設定が初期化されます


### Server
- Fix: トークンのないプラグインをアンインストールするときにエラーが出ないように
- Fix: 投稿通知がオンでもダイレクト投稿はユーザーに通知されないようにされました
- Fix: リノートをリノートできるのを修正
- Fix: アクセストークンを削除すると、通知が取得できなくなる場合がある問題を修正
- Fix: サーバーサイドからのテスト通知を正しく行えるように修正
- Fix: コントロールパネルの設定項目が正しく保存できない問題を修正
- Fix: 管理者権限のロールを持っていても一部のAPIが使用できないことがある問題を修正
- Feat: Registry APIがサードパーティから利用可能になりました
- Enhance: フォローしているチャンネルをフォロー解除した時（またはその逆）、タイムラインに反映される間隔を改善
- Enhance: プロフィールの自己紹介欄のMFMが連合するようになりました
	- 相手がMisskey v2023.11.0以降である必要があります
- Enhance: AP: ApplicationタイプのアカウントをisBotとして扱うように
- Enhance: ActivityPubの署名用鍵長を3072bitに変更(新規アカウントのみ)
	- (IO) [enhance(backend): use RSA 3072bit (misskey-dev#137)](https://github.com/kanarikanaru/backspacekey/commit/5d2de975b67430638f4c196cfb3f18ba166bd05e#diff-37e1031bafecba679a17777231639791cab86d877ecd7581ffdd77fb9288b06f)
- Change: カスタム絵文字管理画面でのライセンス欄が複数行に変更されました
	- (IO)[spec: カスタム絵文字のライセンスの項目を複数行テキストに (misskey-dev#130)](https://github.com/kanarikanaru/backspacekey/commit/04095b56946961a070cb507ead710496004c8b88)
- Change: ユーザーのisCatがtrueでも、サーバーではnyaizeが行われなくなりました
  - isCatな場合、クライアントでnyaize処理を行うことを推奨します


## 2023.09-bsk-2.1 (chimera)
### Abstract
Misskeyフォーク元からの機能を導入しました。
### Client
- Enhance: TLの返信表示オプションを記憶するように


## 2023.09-bsk-2.0 (chimera)
### Abstract
Misskey 2023.10におけるタイムラインの仕様変更に関わらない部分を2023.09に移植しました。 

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