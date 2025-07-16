// "use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"


export default function Page() {
    return (
        <main className="h-screen w-full flex p-3 gap-3 flex-col">
            <div className="w-full flex flex-wrap justify-evenly gap-3">
                {Array.from({ length: 10 }).map((_, index) => {
                    return (
                        <Card className="p-3" key={index}>
                            <CardHeader className="w-[30vw] flex">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <div className="w-[80%] flex flex-col gap-2">
                                    <Skeleton className="h-3 w-[60%] rounded-full" />
                                    <Skeleton className="h-2 w-[60%] rounded-full" />
                                </div>
                            </CardHeader>

                            <Skeleton className="h-[10px] w-[40%] rounded-lg ml-5" />


                            <CardFooter className="flex gap-3">
                            <Skeleton className="h-[40px] w-[120px] rounded-lg" />
                            <Skeleton className="h-[40px] w-[120px] rounded-lg" />
                            </CardFooter>
                        </Card>
                    )
                })
                }
            </div>
        </main>
    );
}