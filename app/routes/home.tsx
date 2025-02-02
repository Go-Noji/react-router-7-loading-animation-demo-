import type {Route} from "./+types/home";
import {Fruits} from "~/stores/fruits";
import {Link} from "react-router";
import {useLoading} from "~/hooks/useLoading";

// 疑似的に 0 ~ 4 秒待機シュミレーション
export const clientLoader= async ({params}: {id: string}): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000)));
};

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Delicious Fruits"},
    {name: "description", content: "Let's Eat Fruits"},
  ];
}

export default function Home() {
  const {handleLink} = useLoading();

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
              onClick={handleLink}
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
