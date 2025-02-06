import {useLoadingStatus, LoadingStatusContext} from '~/hooks/useLoadingStatus';
import {useFruit,} from "~/hooks/useFruit";

// ローディングを実際に表示するコンポーネント
export default function Loading({children}: {children: React.ReactNode}) {
  // Fruit 関連のステート・更新関数を取得
  const {fruit, setFruitByPathname} = useFruit();

  // 更新関数を注入しつつ useLoadingStatus フックを取得
  const {loadingStatus, setLoadingStatus, setAnimationEnd} = useLoadingStatus(async (pathname) => {
    // 疑似的に 0 ~ 500 ミリ秒待機シュミレーション
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 500)));

    // パス名によって、フルーツの状態を変更する
    setFruitByPathname(pathname);
  });

  // どの子孫コンポーネントからでも状態を変更できるように、コンテキストを提供する
  return (
    <LoadingStatusContext.Provider value={[loadingStatus, setLoadingStatus]}>
      <div className={'loadingWrapper' + (loadingStatus === 'complete' ? ' loadingEnd' : '')}>
        <div
          className={'loading' + (loadingStatus === 'complete' ? ' loadingEnd' : '')}
          style={{background: fruit.color}}
          onAnimationEnd={() => setAnimationEnd(true)}
        >{fruit.emoji}</div>
      </div>
      <div className={loadingStatus === 'complete' ? '' : 'loadingHidden'}>
        {children}
      </div>
    </LoadingStatusContext.Provider>
  );
}
