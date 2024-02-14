import { Curl, Leaf, Star } from "@/components/graphics/decoration"
import MainLayout from "@/layouts/main"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <MainLayout title="Happy Valentine's Day" overrideTitle={false}>
            <div className="flex items-center justify-center min-h-screen">
                <div>
                    <div className="relative text-5xl font-zighead w-fit">
                        <span>Happy</span>
                        <span className="absolute -right-12"><Star className="w-10 h-10" /></span>
                    </div>
                    <div className="relative flex font-zighead text-8xl w-fit">
                        <span>Valentine&apos;s</span>
                        <span className="absolute -left-1 -bottom-1"><Curl className="w-16 h-16" /></span>
                    </div>
                    <div className="relative p-8 -mt-20 -mr-8 text-right text-transparent font-script text-9xl bg-gradient-to-tl from-blue-300 to-pink-300 bg-clip-text">
                        <motion.span animate={{ y: 3 }}>Day</motion.span>
                        <span className="absolute right-5 bottom-16"><Leaf className="w-7 h-7" /></span>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}