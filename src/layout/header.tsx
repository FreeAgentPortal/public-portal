"use client";
import { useMe } from "@/state/useMe";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {};

export const Header = (props: Props) => {
  useAuth();
  const { data: user, isLoading } = useMe();
  const pathname = usePathname();

  const Menu = [
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
      name: "Logout",
      href: process.env.NEXT_PUBLIC_AUTH_URL || "/HELP",
      onClick: () => {
        localStorage.removeItem("token");
        window.location.href = "/";
      },
      isButton: true,
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
            <ul className='menu menu-horizontal p-0 flex items-center gap-4'>
              {user && (
                <li>
                  <Link href={`/athletes/${user?.payload._id}`}>
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
                  </Link>
                </li>
              )}
              {Menu.filter((item) => item.should).map((item, index) => (
                <li key={index} onClick={item.onClick}>
                  <Link
                    href={item.href}
                    className={clsx({
                      "font-bold": item.isActive,
                      "btn btn-primary": item.isButton,
                    })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
