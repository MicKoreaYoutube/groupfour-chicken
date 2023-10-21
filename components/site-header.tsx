'use client'

import Link from "next/link"

import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { NavItem } from "@/types/type"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Siemreap } from "next/font/google"

const items = siteConfig.mainNav

export function SiteHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-4 w-4" /></Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mb-4">
                <SheetTitle className="text-2xl font-KBO-Dia-Gothic_bold">{siteConfig.name}</SheetTitle>
                <SheetDescription className="text-md font-SUITE-Regular">
                  {siteConfig.description}
                </SheetDescription>
              </SheetHeader>
              {items?.length ? (
                <nav className="flex flex-col gap-2 font-SUITE-Regular">
                  {items?.map(
                    (item: any, index: any) =>
                      item.href && (
                        <Link
                          key={index}
                          href={item.href}
                          className={cn(
                            "flex items-center text-md font-medium text-muted-foreground",
                            item.disabled && "cursor-not-allowed opacity-80"
                          )}
                        >
                          {item.title}
                        </Link>
                      )
                  )}
                </nav>
              ) : null}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
