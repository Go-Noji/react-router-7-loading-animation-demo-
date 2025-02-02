import {createContext, useEffect, useState} from 'react';
import {useBlocker, useNavigate} from "react-router";
import type {LoadingStatus} from "~/types/loading";

// 下記 status, setStatus をグローバルに伝播させる Context をグローバルに作成
export const LoadingStatusContext = createContext<[LoadingStatus, (status: LoadingStatus) => void]>(['complete', () => {}]);

// ローディング状態を管理するためのフック
export function useLoadingStatus(setHandler: (pathname: string) => void) {
  // 様々なコンポ―ネントから、「ローディング中」・「ローディング完了」を管理するためのステート
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('loading');

  // 遅延実行を実現するため、一旦ナビゲーションをブロックするためのフックを用意
  const blocker = useBlocker(({nextLocation}) => {
    // ナビゲーション先のパス名を元に、ローディング状態を変更する
    setHandler(nextLocation.pathname);

    // 全てブロックする
    return true;
  });

  // 上記 useBlocker で一旦ブロックしたナビゲーションを遅延実行
  useEffect(() => {
    if (blocker.state === 'blocked') {
      setTimeout(() => blocker.proceed(), 700);
    }
  }, [() => blocker.state]);

  // popstate 時もローディング状態を 'loading' にする
  useEffect(() => {
    // 実行関数定義
    const popStateHandler = () => setLoadingStatus('loading');

    // イベントリスナー登録
    window.addEventListener('popstate', popStateHandler);

    // クリーンアップ
    return () => window.removeEventListener('popstate', popStateHandler);
  }, []);

  // ローディング状態が 'ready' であれば、 .7 秒後にローディング完了にする
  useEffect(() => {
    if (loadingStatus === 'ready') {
      setTimeout(() => setLoadingStatus('complete'), 1400);
    }
  }, [loadingStatus]);

  // LoadingStatusContext で伝播させるステートを返す
  return {loadingStatus, setLoadingStatus};
};
