import type {Fruit} from "~/types/fruit";
import {DefaultFruit, Fruits, getFruit} from "~/stores/fruits";
import {Link} from "react-router";
import {useLoadingControl} from "~/hooks/useLoadingControl";

export function meta({data}: {data: Fruit}) {
  return [
    {title: data.name},
    {name: "description", content: data.description},
  ];
}

// パラメータから特定の果物を取得する
export const clientLoader= async ({params}: {id: string}): Promise<Fruit> => {
  // 疑似的に 0 ~ 2 秒待機シュミレーション
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 2000)));

  // パラメータから果物を取得
  return getFruit(params.id);
};

// SSR モードのときは下記コメントアウトを外す(これが無いと meta の data が型エラーになる)
// export const loader = ({params}: {id: string}): Fruit => getFruit(params.id);

export default function Fruit({loaderData: fruit}: {loaderData: Fruit}) {
  // ローディングを完了させる
  useLoadingControl();

  return (
    <div
      className="wrapper"
      style={{background: `linear-gradient(135deg, #ffffff 10%, ${fruit.color} 70%)`}}
    >
      <h1 className="title">{fruit.name}</h1>
      <div className="content">
        <div className="emoji">{fruit.emoji}{fruit.emoji}{fruit.emoji}{fruit.emoji}{fruit.emoji}{fruit.emoji}</div>
        <div className="description">{fruit.description}</div>
        <ul className="brothers">
          <li className="brothers">
            <Link
              to="/"
              className="brother"
            >🌴</Link>
          </li>
          {Fruits.map(fruit => (
          <li
            key={fruit.id}
            className="brothers"
          >
            <Link
              to={'/'+fruit.id}
              className="brother"
            >{fruit.emoji}</Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
