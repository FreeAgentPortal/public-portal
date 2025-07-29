import { NavItemType } from "@/layout/header";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  item: NavItemType;
  fullWidth?: boolean;
};

export const NavItem = ({ item, fullWidth }: Props) => {
  if (!item) {
    return null;
  }

  return (
    <div className={clsx({ "w-full": fullWidth })}>
      {item.href ? (
        <Link
          href={item.href}
          className={clsx("w-full", {
            "font-bold": item.isActive,
            "btn btn-primary": item.isButton,
            "btn-danger": item.isDanger,
          })}
        >
          {item.name}
        </Link>
      ) : (
        <button
          onClick={item.onClick}
          className={clsx("w-full ", {
            "font-bold": item.isActive,
            "btn btn-primary": item.isButton,
            "bg-danger": item.isDanger,
          })}
        >
          {item.name}
        </button>
      )}
    </div>
  );
};
