"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Camera, Globe, Shirt, Printer } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import navlogo from "@/public/restorefine-logowhite.svg";
import mesh from "@/public/enqbg.svg";
import light from "@/public/enqlight.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const services = [
  {
    title: "Resto Branding",
    href: "/services/restobranding",
    description: "Development of brand identities, stories etc",
    icon: Box,
  },
  {
    title: "Resto Print",
    href: "/services/restoprint",
    description: "Menu design, prints and more",
    icon: Printer,
  },
  {
    title: "Resto Merch",
    href: "/services/restomerch",
    description: "Interactive business solutions and more",
    icon: Shirt,
  },
  {
    title: "Resto Web",
    href: "/services/restoweb",
    description: "Website and app development, SEO and more",
    icon: Globe,
  },
  {
    title: "Resto Media",
    href: "/services/restomedia",
    description: "Event photography, videos, hosting and more",
    icon: Camera,
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-b-white/20 text-sm font-medium">
      <div className="flex h-20 px-4 md:px-8 items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src={navlogo || "/placeholder.svg"}
            alt="Resto Refine"
            width={25}
            height={25}
          />
        </Link>

        {/* Navigation Items Container */}
        <div className="ml-20 hidden md:block">
          <div className="rounded-full border border-white/15 px-10 py-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium text-white/50 hover:bg-transparent hover:text-white/80 data-[state=open]:bg-transparent">
                    <Link href="/services">Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[600px] space-y-2 p-4 mr-3 rounded-[24px] border border-white/20 bg-black/70 backdrop-blur-lg flex items-start justify-between gap-x-4">
                      <div className="w-auto flex flex-col items-start">
                        {services.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={service.href}
                            icon={service.icon}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </div>

                      <div className="relative h-[250px] w-[250px] rounded-[16px] bg-gradient-dark  overflow-hidden">
                        <Image
                          src={mesh || "/placeholder.svg"}
                          alt="resto-enquire-mesh-bg"
                          width={80}
                          height={80}
                          className="p-8 absolute top-0 right-0 z-10 w-full object-cover"
                        />
                        <Image
                          src={light || "/placeholder.svg"}
                          alt="resto-enquire-mesh-bg"
                          width={100}
                          height={100}
                          className="absolute top-0 right-0 z-0 w-full object-left-bottom opacity-75"
                        />
                        <span className="relative z-20 flex h-full items-center justify-center font-semibold text-xl text-white capitalize">
                          Resto
                        </span>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/company" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Company
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent text-white/50 hover:bg-transparent hover:text-white/80">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Book Call Button */}
        <div className="bg-transparent border border-white/40 md:border-white/10 p-1 rounded-xl flex items-center space-x-0 md:space-x-2">
          <Button
            asChild
            className="hidden md:inline-flex relative rounded-lg border border-white/35 bg-transparent text-white hover:bg-white/10"
            style={{ boxShadow: "inset 0 0  15px rgba(164, 164, 164, 0.5)" }}
          >
            <Link href="/enquire-now">Enquire Now</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li className="w-full bg-black/50 backdrop-blur-md" >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "w-full flex items-start gap-3 rounded-md p-2 hover:bg-white/20 transition-colors",
            className
          )}
          {...props}
        >
          {Icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20">
              <Icon className="size-4 text-white/50" />
            </div>
          )}
          <div className="space-y-1">
            <div className="text-md font-medium leading-none text-white">
              {title}
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-gray-400">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
