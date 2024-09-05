"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { logout as setLogout } from "@/redux/features/authSlice";
import { useRouter, usePathname } from "next/navigation";
import { NavLink } from "@/app/components/common";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const pathname = usePathname();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      })
      .finally(() => {
        router.push("/");
      });
  };

  const isSelected = (path: string) => (pathname === path ? true : false);

  const authLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected("/dashboard") ? true : false}
        isMobile={isMobile}
        href="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );

  const guestLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected("/auth/login") ? true : false}
        isMobile={isMobile}
        href="/auth/login"
      >
        Login
      </NavLink>
      <NavLink
        isSelected={isSelected("/auth/register") ? true : false}
        isMobile={isMobile}
        href="/auth/register"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink isBanner href="/">
                BP AUTH
              </NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {isAuthenticated ? authLinks(false) : guestLinks(false)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {isAuthenticated ? authLinks(true) : guestLinks(true)}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
