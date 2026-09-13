import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  ShoppingBag,
  CreditCard,
  UserRound,
  CircleHelp,
  LogOut,
  SunMoon,
  Monitor,
  Check,
  Sun,
  Moon,
} from "lucide-react";

import { ProfileSvg } from "../assets/svg";

function Profile() {
  const [showMenu, setShowMenu] = useState(false);

  const [showTheme, setShowTheme] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-gray-800 transition-colors dark:bg-slate-900 dark:text-gray-100 lg:pb-8">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold sm:text-3xl">My Profile</h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your account and orders
          </p>
        </div>

        {/* Profile Card */}
        <section className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-colors dark:bg-slate-800">
          {/* Settings / Menu */}
          <button
            type="button"
            aria-label="Open profile menu"
            onClick={() => setShowMenu(true)}
            className=" absolute right-4 top-4 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-ful transition hover:bg-gray-100 dark:hover:bg-slate-700 "
          >
            <span className="h-0.5 w-5 rounded-full bg-gray-600 dark:bg-gray-300" />
            <span className="h-0.5 w-5 rounded-full bg-gray-600 dark:bg-gray-300" />
            <span className="h-0.5 w-5 rounded-full bg-gray-600 dark:bg-gray-300" />
          </button>

          {/* Settings Drawer */}
          {showMenu && (
            <div className="fixed inset-0 z-100">
              {/* Darkened background */}
              <button
                type="button"
                aria-label="Close profile menu"
                onClick={() => setShowMenu(false)}
                className=" absolute inset-0 bg-black/40 dark:bg-black/60 "
              />

              {/* Drawer */}
              <aside className=" absolute right-0 top-0  h-full w-[75%] sm:w-[60%] lg:w-[25%] bg-white shadow-2xl dark:bg-slate-900  ">
                {/* Drawer Header */}
                <div className=" flex items-center justify-between   border-b border-gray-100  px-5 py-4  dark:border-slate-700 ">
                  <h2 className="text-lg font-semibold">Settings</h2>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setShowMenu(false)}
                    className="  flex h-9 w-9  items-center justify-center  rounded-full  text-xl text-gray-500  transition  hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-slate-800
          "
                  >
                    ×
                  </button>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                  {/* Edit Profile */}
                  <button
                    type="button"
                    className=" flex w-full items-center gap-4  rounded-xl px-4 py-3  text-left text-sm  transition  hover:bg-gray-100  dark:hover:bg-slate-800 "
                  >
                    <UserRound className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-300" />

                    <span className="flex-1">Edit Profile</span>

                    <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
                  </button>

                  {/* Theme */}
                  <button
                    type="button"
                    onClick={() => setShowTheme(!showTheme)}
                    className=" flex w-full items-center gap-4 rounded-xl px-4 py-3  text-left text-sm  transition hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <SunMoon className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-300" />

                    <span className="flex-1">Theme</span>

                    <ChevronRight
                      className={`  h-5 w-5 shrink-0 text-gray-400  transition-transform  ${showTheme ? "rotate-90" : ""} `}
                    />
                  </button>

                  {showTheme && (
                    <div className="mb-2 ml-9 space-y-1">
                      {/* Light */}
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("light");
                          document.documentElement.classList.remove("dark");
                          localStorage.setItem("theme", "light");
                        }}
                        className="  flex w-full items-center gap-3  rounded-lg px-3 py-2  text-sm  transition  hover:bg-gray-100 dark:hover:bg-slate-800 "
                      >
                        <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />

                        <span className="flex-1 text-left">Light</span>

                        {theme === "light" && (
                          <Check className="h-4 w-4 text-(--primary)" />
                        )}
                      </button>

                      {/* Dark */}
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("dark");
                          document.documentElement.classList.add("dark");
                          localStorage.setItem("theme", "dark");
                        }}
                        className="  flex w-full items-center gap-3  rounded-lg px-3 py-2  text-sm transition hover:bg-gray-100 dark:hover:bg-slate-800 "
                      >
                        <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />

                        <span className="flex-1 text-left">Dark</span>

                        {theme === "dark" && (
                          <Check className="h-4 w-4 text-(--primary)" />
                        )}
                      </button>

                      {/* System */}
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("system");

                          const prefersDark = window.matchMedia(
                            "(prefers-color-scheme: dark)",
                          ).matches;

                          document.documentElement.classList.toggle(
                            "dark",
                            prefersDark,
                          );

                          localStorage.setItem("theme", "system");
                        }}
                        className=" flex w-full items-center gap-3 rounded-lg px-3 py-2  text-sm  transition hover:bg-gray-100 dark:hover:bg-slate-800 "
                      >
                        <Monitor className="h-4 w-4 text-gray-500 dark:text-gray-400" />

                        <span className="flex-1 text-left">System</span>

                        {theme === "system" && (
                          <Check className="h-4 w-4 text-(--primary)" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Order History */}
                  <button
                    type="button"
                    className=" flex w-full items-center gap-4 rounded-xl px-4 py-3   text-left text-sm transition hover:bg-gray-100 dark:hover:bg-slate-800 "
                  >
                    <ShoppingBag className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-300" />

                    <span className="flex-1">Order History</span>

                    <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
                  </button>

                  {/* Help & Support */}
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-sm transition hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <CircleHelp className="h-5 w-5 shrink-0 text-gray-600 dark:text-gray-300" />

                    <span className="flex-1">Help & Support</span>

                    <ChevronRight className="h-5 w-5 shrink-0 text-gray-400" />
                  </button>

                  {/* Log Out */}
                  <button
                    type="button"
                    className="  mt-2 flex w-full items-center gap-4  rounded-xl px-4 py-3  text-left text-sm text-red-500  transition  hover:bg-red-50  dark:hover:bg-red-950/30 "
                  >
                    <LogOut className="h-5 w-5 shrink-0" />

                    <span className="flex-1">Log Out</span>

                    <ChevronRight className="h-5 w-5 shrink-0 text-red-400" />
                  </button>
                </div>
              </aside>
            </div>
          )}

          {/* Profile Information */}
          <div className="p-5 sm:p-7">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              {/* Profile Image */}
              <div
                className="
                  flex h-24 w-24 shrink-0
                  items-center justify-center
                  rounded-full bg-gray-300
                  ring-4 ring-gray-100
                  dark:bg-slate-600
                  dark:ring-slate-700
                "
              >
                <ProfileSvg className="h-20 w-20" />
              </div>

              {/* User Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold">Your Name</h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  your@email.com
                </p>

                <div className="mt-2 flex items-center justify-center gap-1 text-sm text-gray-400 sm:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>Kathmandu, Nepal</span>
                </div>

                <button
                  type="button"
                  className="
                    mt-4 rounded-lg
                    bg-(--primary)
                    px-5 py-2
                    text-sm font-medium text-white
                    transition hover:opacity-90
                  "
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-t border-gray-100 dark:border-slate-700">
            <div className="px-3 py-4 text-center">
              <p className="text-lg font-bold">0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Orders</p>
            </div>

            <div className="border-x border-gray-100 px-3 py-4 text-center dark:border-slate-700">
              <p className="text-lg font-bold">0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Favorites
              </p>
            </div>

            <div className="px-3 py-4 text-center">
              <p className="text-lg font-bold">0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Reviews
              </p>
            </div>
          </div>
        </section>

        {/* Account */}
        <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-800">
          <div className="border-b border-gray-100 px-5 py-4 dark:border-slate-700">
            <h2 className="font-semibold">Account</h2>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-slate-700">
            {/* Personal Information */}
            <NavLink
              to="/profile"
              className="
        flex items-center gap-4 px-5 py-4
        transition
        hover:bg-gray-50
        dark:hover:bg-slate-700/50
      "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                <UserRound className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">Personal Information</p>
                <p className="mt-0.5 text-xs text-gray-400">
                  Name, email and phone number
                </p>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </NavLink>

            {/* Saved Addresses */}
            <button
              type="button"
              className="
        flex w-full items-center gap-4 px-5 py-4
        text-left transition
        hover:bg-gray-50
        dark:hover:bg-slate-700/50
      "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">Saved Addresses</p>
                <p className="mt-0.5 text-xs text-gray-400">
                  Manage your delivery addresses
                </p>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Payment Methods */}
            <button
              type="button"
              className="
        flex w-full items-center gap-4 px-5 py-4
        text-left transition
        hover:bg-gray-50
        dark:hover:bg-slate-700/50
      "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
                <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">Payment Methods</p>
                <p className="mt-0.5 text-xs text-gray-400">
                  Manage your payment options
                </p>
              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Recent Orders</h2>

              <p className="mt-1 text-xs text-gray-400">
                Your latest restaurant orders
              </p>
            </div>

            <NavLink
              to="/orders"
              className="text-sm font-medium text-(--primary)"
            >
              View all
            </NavLink>
          </div>

          {/* Empty State */}
          <div className="mt-5 rounded-xl bg-slate-50 px-5 py-8 text-center dark:bg-slate-700/50">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-600">
              <ShoppingBag className="h-5 w-5 text-gray-400" />
            </div>

            <h3 className="mt-3 text-sm font-semibold">No orders yet</h3>

            <p className="mt-1 text-xs text-gray-400">
              Your recent orders will appear here.
            </p>

            <NavLink
              to="/menu"
              className="
                mt-4 inline-block rounded-lg
                bg-(--primary)
                px-4 py-2
                text-xs font-medium text-white
                transition hover:opacity-90
              "
            >
              Browse Menu
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
