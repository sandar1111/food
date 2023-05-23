import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center h-12 mb-10">
          <h1></h1>
          <ul className="flex gap-10 text-lg">
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/#galerea">Галерея</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
