import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow">
      <div className="font-semibold text-lg">Dashboard</div>
      <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
