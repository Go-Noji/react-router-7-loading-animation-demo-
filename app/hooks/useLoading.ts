import {useContext, useEffect} from "react";
import {LoadingStatusContext} from "~/hooks/useLoadingStatus";
import {FruitContext} from "~/hooks/useFruit";
import {useLocation} from "react-router";
import type {Fruit} from "~/types/fruit";

export const useLoading = () => {
  // LoadingStatusContext を取得
  const [, setLoadingStatus] = useContext(LoadingStatusContext);

  // ページ遷移を検知(同じ URL だとしても)するため、 useNavigate を使う
  const location = useLocation();

  // ローディングを完了させる
  const completeLoading = () => setLoadingStatus('ready');

  // ページ遷移を元にローディング完了させる
  useEffect(completeLoading, [location.key, location.pathname]);

  // 初回レンダリング時にローディングを完了させる
  useEffect(completeLoading, []);

  // リンクをクリックした際にローディングアニメーションの中身を変更する
  const handleLink = () => setLoadingStatus('loading');

  // メソッドの提供
  return {handleLink, completeLoading};
};
