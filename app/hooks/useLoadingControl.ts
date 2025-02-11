import {useContext, useEffect} from "react";
import {LoadingStatusContext} from "~/hooks/useLoadingStatus";
import {useLocation} from "react-router";

export const useLoadingControl = () => {
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

  // メソッドの提供
  return {completeLoading};
};
