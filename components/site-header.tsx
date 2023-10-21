'use client'

import Link from "next/link"

import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { NavItem } from "@/types/type"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Siemreap } from "next/font/google"

const items = siteConfig.mainNav

export function SiteHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
        </div>
      </div>
    </header>
  )
}
