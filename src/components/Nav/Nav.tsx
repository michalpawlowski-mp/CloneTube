"use client";

interface NavProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Nav({ selectedCategory, setSelectedCategory }: NavProps) {
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
    <nav className="w-screen lg:w-60 xl:w-64  lg:bg-neutral-800 border-b lg:border-b-0 lg:border-r border-stone-700 text-white">
      <ul className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto hide-scrollbar px-2 py-3 lg:p-3 gap-2 lg:gap-1.5">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(isActive ? "js" : category)}
                className={`
                  w-full px-5 py-2.5 rounded-2xl font-medium text-sm transition-all duration-200
                  flex items-center justify-center lg:justify-start gap-2
                  whitespace-nowrap
                  ${
                    isActive
                      ? "bg-white text-black shadow-sm"
                      : "bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500"
                  }
                `}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
