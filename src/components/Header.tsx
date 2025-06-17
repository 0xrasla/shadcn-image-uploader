import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white dark:bg-black text-black dark:text-white justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <ModeToggle />
    </header>
  );
}
