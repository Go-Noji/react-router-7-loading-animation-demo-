import {createContext, useEffect, useState} from 'react';
import {useBlocker} from "react-router";
import type {LoadingStatus} from "~/types/loading";

// 下記 status, setStatus をグローバルに伝播させる Context をグローバルに作成
export const LoadingStatusContext = createContext<[LoadingStatus, (status: LoadingStatus) => void]>(['complete', () => {}]);

// ローディング状態を管理するためのフック
export function useLoadingStatus(setHandler: (pathname: string) => Promise<void>) {
  // 様々なコンポ―ネントから、「ローディング中」・「ローディング完了」を管理するためのステート
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('loading');

  // ローディングアニメーションの終了状態を管理するためのステート
  const [animationEnd, setAnimationEnd] = useState<boolean>(true);

  // ナビゲーション先の情報を解決する非同期関数を同期させるためのステート
  const [resolvedFunction, setResolvedFunction] = useState<Promise<void>>(Promise.resolve());

  // 遅延実行を実現するため、一旦ナビゲーションをブロックするためのフックを用意
  const blocker = useBlocker(({nextLocation}) => {
    // ナビゲーション先のパス名を元に、ローディング状態を変更する
    setResolvedFunction(setHandler(nextLocation.pathname));

    // 全てブロックする
    return true;
  });

  // ナビゲーション先の情報を解決されるのを待ってから、上記 useBlocker で一旦ブロックしたナビゲーションを遅延実行
  useEffect(() => {
    // ブロックされていなければ、何もしない
    if (blocker.state !== 'blocked') {
      return;
    }

    // ブロックされている場合、ナビゲーション先の情報取得終了を待ってから、アニメーションを開始する
    (async () => {
      // ナビゲーション先の情報取得終了を待つ
      await resolvedFunction;

      // アニメーションを開始させる
      setLoadingStatus('loading');

      // まだアニメーションが終了判定でない場合だけ(= 一度だけ)、遷移を再実行
      if ( ! animationEnd) {
        blocker.proceed();
      }

      // アニメーション終了状態を false に変更
      setAnimationEnd(false);
    })();
  }, [() => blocker.state]);

  // ローディング状態が 'ready' であれば、 .7 秒後にローディング完了にする
  useEffect(() => {
    // ローディング状態が 'ready' でない or ローディングアニメーションが終了していなければ何もしない
    if (loadingStatus !== 'ready' || ! animationEnd) {
      return;
    }

    // ローディング状態を 'complete' に変更する
    setLoadingStatus('complete');
  }, [loadingStatus, animationEnd]);

  // LoadingStatusContext で伝播させるステートを返す
  return {loadingStatus, setLoadingStatus, resolvedFunction, setAnimationEnd};
};
