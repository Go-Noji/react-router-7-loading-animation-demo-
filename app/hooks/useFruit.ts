import {useEffect, useState} from 'react';
import type {Fruit} from "~/types/fruit";
import {DefaultFruit, getFruit} from "~/stores/fruits";

// ローディング状態を管理するためのフック
export function useFruit() {
  // ID を管理するステート
  const [fruit, setFruit] = useState<Fruit>(DefaultFruit);

  // 現在の URL から ID を取得する関数
  const setFruitByPathname = (pathname: string) => {
    // 現行の URL がマッチするか判定を兼ね、ID を取得する
    const match = pathname.match(/^\/([a-z]+)$/);

    // ID を取得できた場合はその ID より果物を取得し、取得できなかった場合はデフォルトの果物を返す
    setFruit(match ? getFruit(match[1]) : DefaultFruit);
  };

  // 初回更新時 セット
  useEffect(() => setFruitByPathname(window.location.pathname), []);

  // ステートを返す
  return {fruit, setFruit, setFruitByPathname};
};
