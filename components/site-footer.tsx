import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

const items = siteConfig.footerContent

export function SiteFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t font-RixInooAriDuriR">
      <div className="container p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GROUPFOUR CHICKEN</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-3">
            {items?.length ? (
              <>
                {items?.map(
                  (item: any, index: any) =>
                    <div key={index}>
                      <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white">{item.title}</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        {item.content?.length ? (
                          <>
                            {item.content?.map(
                              (item: any, index: any) =>
                                <li className="mb-4" key={index}>
                                  <a href={item.href} className="hover:underline">{item.title}</a>
                                </li>
                            )}
                          </>
                        ) : null}
                      </ul>
                    </div>
                )}
              </>
            ) : null}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">GROUPFOUR CHICKEN™</a>. All Rights Reserved.
          </span>
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.micInstagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </footer>
  )
}
