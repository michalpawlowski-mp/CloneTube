interface NavProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Nav({
  selectedCategory,
  setSelectedCategory,
}: NavProps) {
  const categories = [
    "Na żywo",
    "Podcast",
    "Muzyka",
    "Filmy",
    "Gry",
    "Sport",
    "Fitness",
    "Gotowanie",
    "Nauka",
    "Technologia",
    "Podróże",
    "Motoryzacja",
    "Wiadomości",
    "Polityka",
  ];

  return (
    <nav className="w-screen lg:w-2/12 xl:w-1/12 lg:p-3 lg:bg-neutral-800 text-white  lg:h-screen lg:overflow-y-auto overflow-x-auto lg:border-r-2 lg:border-r-stone-700">
      <ul className="flex flex-row lg:flex-col min-w-max lg:min-w-0 lg:my-0 my-2">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? "js" : category
              )
            }
            className={`lg:mb-2 lg:ml-0 ml-2 rounded-xl min-w-[100px] lg:min-w-0 text-center items-center p-1 cursor-pointer transition-all ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-neutral-700"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
