import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Menu: { name: string; href: string; isButton?: boolean }[] = [
  { name: "Search", href: "/athletes" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "/login", isButton: true },
];

export const Header = (props: Props) => {
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
              {Menu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${item.isButton ? "btn btn-primary" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
