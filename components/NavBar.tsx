"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GithubIcon, HeyGenLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <div className="flex items-center mt-4 pl-2">
          <Image src="/proxant-logo.png" alt="Proxant Logo" width={200} height={80} className="ml-4" />
          <span className="ml-4">Interactive Agent Demo</span>
        </div>
      </NavbarBrand>
    </Navbar>
  );
}
