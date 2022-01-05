# deno_alephjs_something01

## step1

```bash
aleph init

Download https://deno.land/x/aleph@v0.3.0-beta.19/commands/init.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/compress.ts
Download https://deno.land/std@0.106.0/archive/tar.ts
Download https://deno.land/std@0.106.0/io/buffer.ts
Download https://deno.land/std@0.106.0/io/util.ts
Download https://deno.land/std@0.106.0/bytes/mod.ts
Download https://deno.land/std@0.106.0/io/types.d.ts
Download https://deno.land/std@0.106.0/testing/asserts.ts
Download https://deno.land/std@0.106.0/io/bufio.ts
Download https://deno.land/std@0.106.0/io/readers.ts
Download https://deno.land/std@0.106.0/testing/_diff.ts
Download https://deno.land/std@0.106.0/bytes/bytes_list.ts
Project Name: deno_alephjs_something01
Using VS Code? [y/n] y
Deploy to Vercel? [y/n] n
Downloading template. This might take a moment...
Apply template...
Cache deps...
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/redirect.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/events.ts
Check https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Fallback.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hoc.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/context.ts
Download https://esm.sh/react@17.0.2
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/helper.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/routing.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/renderer.ts
Download https://cdn.esm.sh/v59/react@17.0.2/deno/react.js
Download https://cdn.esm.sh/v59/@types/react@17.0.38/index.d.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/renderer.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/ErrorBoundary.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/pageprops.ts
Download https://esm.sh/react-dom@17.0.2/server
Download https://cdn.esm.sh/v59/react-dom@17.0.2/deno/server.js
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/aleph.ts
Download https://cdn.esm.sh/v59/object-assign@4.1.1/deno/object-assign.js
Download https://cdn.esm.sh/v59/@types/react@17.0.38/global.d.ts
Download https://cdn.esm.sh/v59/@types/prop-types@15.7.4/index.d.ts
Download https://cdn.esm.sh/v59/@types/scheduler@0.16.2/tracing.d.ts
Download https://cdn.esm.sh/v59/csstype@3.0.10/index.d.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/bundler/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/plugins/css.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/analyzer.ts
Download https://deno.land/std@0.106.0/fs/walk.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/init.ts
Check https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.ts
Download https://esm.sh/react-dom@17.0.2
Download https://cdn.esm.sh/v59/react-dom@17.0.2/deno/react-dom.js
Download https://cdn.esm.sh/v59/@types/react-dom@17.0.11/index.d.ts
Download https://cdn.esm.sh/v59/scheduler@0.20.2/deno/scheduler.js
Done

Aleph.js is ready to go!
▲ cd deno_alephjs_something01
▲ aleph dev    # start the app in `development` mode
▲ aleph start  # start the app in `production` mode
▲ aleph build  # build the app to a static site (SSG)

Docs: https://alephjs.org/docs
Bugs: https://alephjs.org.com/alephjs/aleph.js/issues
```

## step2

```bash
#aleph dev
# ホットリロードが効かないならstartでいい気がします。
aleph start
```

## step3

components/logo.tsx
をコピーして同じディレクトリに
footer.tsxを作成

pages/index.tsxのcopyinfoの行を移植

app.tsxに
```react
import { useDeno } from 'aleph/react'
import CommonFooter from '~/components/footer.tsx'
```
追加

headの中に
```react
<link rel="stylesheet" href="./style/common.css" />
```
追加

Pageの下に
```react
<CommonFooter version={useDeno(() => Deno.version.deno)} />
```
追加

style/index.cssの一部をcommon.cssとして移動
良い感じにレイアウト調整

## step4

参考：https://www.freecodecamp.org/news/build-react-app-using-deno-and-alephjs/#2-how-to-import-libraries-from-npm

components/logo.tsx
をコピーして同じディレクトリに
clock.tsxを作成

dayjsとその関連プラグインをimport

useStateで
* 現在時刻
* 現在タイムゾーン
* タイムゾーン一覧
を定義

useEffectで
* 一秒ごとに現在時刻をリフレッシュするsetTimeout
を定義

画面上プルダウンのタイムゾーンを変更した際に現在タイムゾーンを更新する関数
を定義

return(render)に上記の構成を良い感じに定義

style/index.css
良い感じにレイアウト調整

app.tsxに
```react
import Clock from '~/components/clock.tsx'
```
追加

Pageの下に
```react
<Clock />
```
追加

## step5

参考：https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning

todo管理っぽいものを作成

