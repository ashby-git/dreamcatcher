import Link from "next/link";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-red-900 py-0 px-[10%]">
      <div className="text-4xl font-bold text-white">Dreamcatcher</div>
      <nav>
        <ul className="m-0 p-0 flex align-baseline list-none">
          <li className="ml-12 no-underline text-2xl text-pink-200 hover:text-white active:text-white">
            <Link href="/">All Dreams</Link>
          </li>
          <li className="ml-12 no-underline text-2xl text-pink-200 hover:text-white active:text-white">
            <Link href="/new-dream">Add New Dream</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
