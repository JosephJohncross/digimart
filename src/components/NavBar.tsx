import Link from "next/link";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <>
      <div className="z-50 sticky top-0 bg-white inset-x-0 h-16">
        <header className="relative bg-white">
          <MaxwidthWrapper>
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* TODO: Mobile Nav */}

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href={"/"}>
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>

                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                    <NavItems/>
                </div>
              </div>
            </div>
          </MaxwidthWrapper>
        </header>
      </div>
    </>
  );
};

export default NavBar;
