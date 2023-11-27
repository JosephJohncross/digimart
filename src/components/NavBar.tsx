import Link from "next/link";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Cart from "./Cart";

const NavBar = () => {
  const user = null;

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
                  <NavItems />
                </div>

                {/* Right side  of nav */}
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? null : (
                      <Link
                        href={"/login"}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "font-semibold"
                        )}
                      >
                        Sign in
                      </Link>
                    )}

                    {user ? null : (
                      <>
                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />
                      </>
                    )}

                    {user ? (
                      <p></p>
                    ) : (
                      <Link
                        href={"/register"}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "font-semibold"
                        )}
                      >
                        Sign up
                      </Link>
                    )}

                    {user ? (
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}

                    {user ? null : (
                      <div className="flex lg:ml-6">
                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                      <Cart />
                    </div>
                  </div>
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
