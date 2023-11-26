import Link from "next/link";
import MaxwidthWrapper from "./MaxwidthWrapper";

const NavBar = () => {
  return (
    <>
      <div className="z-50 sticky top-0 bg-white inset-x-0 h-16">
        <header className="relative bg-white">
          <MaxwidthWrapper>
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* TODO: Mobile Nav */}

                <div className="ml-4 flex lg:ml-0">
                  <Link href={"/"}></Link>
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
