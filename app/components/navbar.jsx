import Link from "next/link";

const navbar = () => {
  return (
    <div>
      <nav className="bg-transparent z-10">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="px-3 font-bold text-pink-500 text-3xl ">
              RJ
            </Link>
          </div>

          <ul
            className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default"
          >
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline hover:border-b-2 hover:border-pink-600"
                href="/#about"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 ">
                  ABOUT
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline hover:border-b-2 hover:border-pink-600"
                href="/#experience"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 ">
                  EXPERIENCE
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline hover:border-b-2 hover:border-pink-600"
                href="/#skills"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 ">
                  SKILLS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:border-b-2 hover:border-pink-600"
                href="/#education"
              >
                <div className="text-sm text-white transition-colors duration-300  hover:text-pink-600">
                  EDUCATION
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline hover:border-b-2 hover:border-pink-600"
                href="/#projects"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 ">
                  PROJECTS
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
