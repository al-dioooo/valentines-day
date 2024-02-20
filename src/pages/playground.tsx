import { Heart } from "@/components/icons/outline"
import MainLayout from "@/layouts/main"

import { motion } from "framer-motion"

export default function Playground() {
    return (
        <MainLayout title="Playground" overrideTitle={false}>
            <div className="p-10 min-h-screen flex">
                <div className="flex items-center justify-center flex-grow">
                    <motion.span><Heart className="w-12 h-12" strokeWidth={2} /></motion.span>
                </div>
            </div>
        </MainLayout>
    )
}