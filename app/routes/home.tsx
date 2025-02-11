import type {Route} from "./+types/home";
import {Fruits} from "~/stores/fruits";
import {Link} from "react-router";
import {useLoadingControl} from "~/hooks/useLoadingControl";

// 疑似的に 0 ~ 2 秒待機シュミレーション
export const clientLoader= async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 2000)));
};

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Delicious Fruits"},
    {name: "description", content: "Let's Eat Fruits"},
  ];
}

export default function Home() {
  // ローディングを完了させる
  useLoadingControl();

  return (
    <div
      style={{background: `linear-gradient(45deg, ${Fruits.map(fruit => fruit.color).join(", ")})`}}
      className="wrapper"
    >
      <h1 className="title">🌴Delicious Fruits🌴</h1>
      <ul className="fruits">
        {Fruits.map(fruit => (
          <li key={fruit.id} className="fruit" style={{background: fruit.color}}>
            <Link
              to={'/'+fruit.id}
              className="link"
            >
              <span className="emoji">{fruit.emoji}</span>
              <span className="name">{fruit.name}</span>
            </Link>
          </li>
          ))}
      </ul>
    </div>
  );
}
