import { FC, useState } from 'react';
import { categories } from '../types';
import MenuItem from './menuItem';
import UnderlineText from './underlineText';

const TopNav: FC = () => {
  const categories: categories = [
    { text: 'About', hoverText: '自分について', linksTo: '#' },
    { text: 'Photo', hoverText: '写真', linksTo: '#' },
    { text: 'Dev', hoverText: 'デベロップメント', linksTo: '#' },
    { text: 'Video', hoverText: '動画', linksTo: '#' },
    { text: 'Music', hoverText: '音楽', linksTo: '#' }
  ];

  const [isHovered, setHovered] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-row justify-between h-fit p-10 z-50">
        <h1 className=" text-4xl font-semibold">
          <span className="relative">
            TRIPP
            <UnderlineText />
          </span>

          <span className="text-xl font-extralight">.media</span>
        </h1>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative p-0 m-0 h-fit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!isMenuOpen ? 'Menu' : 'Close'}
          <span>
            <UnderlineText hoverable isHovered={isHovered} />
          </span>
        </button>
      </div>

      <div className="absolute w-full h-screen p-0 m-0 bg-slate-400">
        <ul className="w-3/4 h-full flex justify-center content-center items-center bg-zinc-800">
          <div className="p-5 w-full">
            {categories.map((item) => (
              <MenuItem category={item} key={item.text} />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default TopNav;