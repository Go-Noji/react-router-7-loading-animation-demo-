import fs from 'fs';
import path from 'path';

// ---- build/client にあるファイルを docs にコピー ----

const buildDir = path.resolve('build/client');
const docsDir = path.resolve('docs');
console.log(`buildDir: ${buildDir}, docsDir: ${docsDir}`);

// `docs` ディレクトリがあれば削除
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true });
  console.log(`Removed: ${docsDir}`);
}

// `docs` ディレクトリがなければ作成
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
  console.log(`Created: ${docsDir}`);
}

// ディレクトリ内のファイルをコピーするための再帰関数
const copyDir = (src, dest) => {
  // 対象の stat を取得
  const stat = fs.statSync(src);

  // もし src がファイルであればコピーして終了
  if (stat.isFile()) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
    return;
  }

  // もし src がディレクトリでなければ終了
  if (!stat.isDirectory()) {
    return;
  }

  // ディレクトリがなければ作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
    console.log(`Created: ${dest}`);
  }

  // ディレクトリ内のファイル・ディレクトリを再帰的にコピー
  fs.readdirSync(src).forEach(file => {
    copyDir(path.resolve(src, file), path.resolve(dest, file));
  });
};

// `build/client` のファイルを `docs` にコピー
fs.readdirSync(buildDir).forEach(file => {
  const src = path.resolve(buildDir, file);
  const dest = path.resolve(docsDir, file);
  copyDir(src, dest);
  console.log(`Copied: ${src} -> ${dest}`);
});

// ---- GitHub Pages での SPA アドレス解決用スクリプトを挿入 ----

const indexPath = path.resolve('docs/index.html');
const scriptTag = `<script>
    // GitHub Pages での SPA アドレス解決用
    (function(){
      const query = window.location.search;
      if (query.startsWith('?p=')) {
        const route = decodeURIComponent(query.substr(3));
        window.history.replaceState(null, null, route);
      }
    })();
  </script>`;

// `index.html` を読み込む
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// `<head>` の閉じタグの前にスクリプトを追加
indexContent = indexContent.replace('</head>', scriptTag+'</head>');

// `index.html` を上書き保存
fs.writeFileSync(indexPath, indexContent, 'utf-8');
console.log(`Inserted script to ${indexPath}`);
