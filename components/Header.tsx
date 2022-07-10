import Link from "next/link";

const Header = (): JSX.Element => {
  const headers: string[] = ["About", "contact", "Follow"];
  return (
    <header className="flex fixed w-full justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          {headers.map((header, index) => (
            <h1
              key={index}
              className={`${
                header === "Follow" &&
                "text-white bg-green-600 py-1 px-4 rounded-full"
              } cursor-pointer`}
            >
              {header}
            </h1>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="cursor-pointer border px-4 py-1 border-green-600 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  );
};
export default Header;
