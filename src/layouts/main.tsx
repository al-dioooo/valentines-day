import Cursor from "@/components/cursor"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { ReactElement } from "react"

type Props = {
    title: string,
    overrideTitle: boolean,
    children: string | JSX.Element | JSX.Element[] | ReactElement
}

export default function MainLayout({ title, overrideTitle = false, ...props }: Props) {
    const appName = process.env.APP_NAME

    return (
        <div id="main-app-layout">
            <Head>
                <title>{overrideTitle ? title : title + ' — ' + appName}</title>
            </Head>
            {/* <Cursor /> */}
            <AnimatePresence mode="wait">
                <div>
                    <div className="absolute inset-0 z-50 pointer-events-none"></div>
                    {/* Child */}
                    {props.children}
                </div>
            </AnimatePresence>
        </div>
    )
}