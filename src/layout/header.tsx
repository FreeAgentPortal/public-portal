"use client";
import { useMe } from "@/state/useMe";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavItem } from "@/components/nav-item";

type Props = {};
export type NavItemType = {
  name: string;
  href?: string;
  onClick?: () => void;
  isButton?: boolean;
  inMenu?: boolean;
  should?: boolean;
  isDanger?: boolean;
  isActive?: boolean;
};

export const Header = (props: Props) => {
  useAuth();
  const { data: user, isLoading } = useMe();
  const pathname = usePathname();

  const Nav: NavItemType[] = [
    {
      name: "Search",
      href: "/athletes",
      should: true,
      isActive: pathname === "/athletes",
    },
    {
      name: "Pricing",
      href: "/pricing",
      should: user?.payload._id === undefined,
      isActive: pathname === "/pricing",
    },
    {
      name: "Login",
      href: process.env.NEXT_PUBLIC_AUTH_URL || "/HELP",
      isButton: true,
      should: user?.payload._id === undefined,
    },

    {
      name: "Admin Portal",
      onClick: () => {
        const token = localStorage.getItem("token");

        window.location.href =
          "https://admin.thefreeagentportal.com?token=" + token;
      },
      isButton: true,
      inMenu: true,
      should: user?.payload?.profileRefs?.admin !== undefined,
    },
    {
      name: "Scout Portal",
      onClick: () => {
        const token = localStorage.getItem("token");

        window.location.href =
          "https://scout.thefreeagentportal.com?token=" + token;
      },
      isButton: true,
      inMenu: true,
      should: user?.payload?.profileRefs?.scout !== undefined,
    },
    {
      name: "Team Panel",
      onClick: () => {
        const token = localStorage.getItem("token");

        window.location.href =
          "https://team.thefreeagentportal.com?token=" + token;
      },
      isButton: true,
      inMenu: true,
      should: user?.payload?.profileRefs?.team !== undefined,
    },
    {
      name: "Athlete Panel",
      onClick: () => {
        const token = localStorage.getItem("token");

        window.location.href =
          "https://athlete.thefreeagentportal.com?token=" + token;
      },
      isButton: true,
      inMenu: true,
      should: user?.payload?.profileRefs?.athlete !== undefined,
    },
    {
      name: "Logout",
      onClick: () => {
        localStorage.removeItem("token");
        window.location.href = "/";
      },
      isButton: true,
      inMenu: true,
      isDanger: true,
      should: user?.payload?._id !== undefined,
    },
  ];

  return (
    <div className='z-200 fixed top-0 left-0 right-0 bg-gradient-to-t from-transparent via-black/80 to-black'>
      <div className='navbar uppercase container mx-auto'>
        <div className='flex-1'>
          <Link href='/'>
            <Image src='/simplelogo.png' alt='Logo' width={60} height={60} />
          </Link>
        </div>
        <div className='flex-none'>
          <div className='flex-none'>
            <ul className='menu menu-horizontal p-0 flex items-center gap-8'>
              {Nav.filter((item) => item.should && !item.inMenu).map(
                (item, index) => (
                  <NavItem key={index} item={item} />
                )
              )}

              {user && (
                <div className='dropdown dropdown-bottom dropdown-end'>
                  <button tabIndex={0} className='m-1 cursor-pointer'>
                    <Image
                      src={
                        user?.payload.profileImageUrl ||
                        `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                      }
                      alt={user?.payload.fullName}
                      width={32}
                      height={32}
                      className='rounded-full'
                    />
                  </button>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex flex-col items-start gap-2'
                  >
                    <h1 className='text-xl font-bold p-4'>
                      {user?.payload.fullName}
                    </h1>

                    {Nav.filter((item) => item.should && item.inMenu).map(
                      (item, index) => (
                        <NavItem key={index} item={item} fullWidth />
                      )
                    )}
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
