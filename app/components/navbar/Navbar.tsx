import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-md">
      <div className=" border-b-[1px] border-gray-200">
        <Container>
          <div
            className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    py-4
                    lg:p-0
                "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>

        <div>
          <hr className={"border border-gray-200"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
