import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import vercel from '../../../public/vercel.svg'
import next from '../../.././public/next.svg'

export default function Page() {
    return (
        <nav className="h-[80px] w-full flex items-center justify-start px-5">
            <div className="flex items-center gap-8">
                <div className=" h-full flex items-center gap-6">
                    <Image
                        src={vercel}
                        alt="adasd"
                        height={30}
                        width={30}
                    />
                    <Image
                    className="invert"
                        src={next}
                        alt="adasd"
                        height={100}
                        width={100}
                    />
                </div>

                <NavigationMenu>
                    <NavigationMenuList className="text-[#848484] w-full h-full">

                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <a href="https://nextjs.org/showcase" target="_blank" rel="noopener noreferrer">
                                    Showcase
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                                    Docs
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <a href="https://nextjs.org/blog" target="_blank" rel="noopener noreferrer">
                                    Blog
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <a href="https://vercel.com/templates/next.js" target="_blank" rel="noopener noreferrer">
                                    Templates
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <a href="https://vercel.com/contact/sales/nextjs" target="_blank" rel="noopener noreferrer">
                                    Enterprise
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}