import { Container } from "../index";

import { NavLink } from "react-router-dom";

import { motion } from "motion/react";

import { CartSvg, ProfileSvg } from "../../assets/svg";

function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About us", path: "/about_us" },
    { name: "Contact us", path: "/contact_us" },
    { name: "Cart", path: "/cart", icon: CartSvg },
    { name: "Profile", path: "/profile", icon: ProfileSvg },
  ];

  return (
    <header
      className="
        fixed bottom-0 left-0 z-50 w-full
        bg-(--surface)
        shadow-[0_6px_10px_-3px_rgba(0,0,0,0.1)]
        border-t border-gray-700
        lg:static lg:border-t-0
      "
    >
      <Container>
        <div className="flex items-center justify-between py-2 sm:text-sm lg:text-base">
          {/* Logo */}
          <div className="hidden font-bold lg:block">Waypoint</div>

          {/* Navigation */}
          <nav className="mx-auto flex w-full justify-evenly text-xs sm:gap-6 sm:text-sm lg:mx-0 lg:w-auto lg:justify-normal lg:gap-6 lg:text-base">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={` relative flex items-center whitespace-nowrap
                    ${item.name === "Home" ? "order-1" : ""}
                    ${item.name === "Menu" ? "order-2" : ""}
                    ${item.name === "About us" ? "hidden lg:order-3 lg:inline-flex   " : ""}
                    ${item.name === "Cart" ? "order-3 lg:order-5 lg:ml-4" : ""}
                    ${item.name === "Contact us" ? "order-4 lg:order-4" : ""}
                    ${item.name === "Profile" ? "order-5 lg:order-6" : ""}
  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Profile Icon */}
                      {item.name === "Profile" ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300">
                          <ProfileSvg className="h-5 w-5" />
                        </div>
                      ) : Icon ? (
                        /* Cart Icon */
                        <Icon className="h-6 w-6 lg:h-5 lg:w-5 text-(--primary)" />
                      ) : (
                        /* Text Links */
                        <span>{item.name}</span>
                      )}

                      {/* Active underline */}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-underline"
                          className="
                            absolute -top-2 left-0
                            h-0.5 w-full
                            bg-(--primary)
                            lg:-bottom-1 lg:top-auto
                          "
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
