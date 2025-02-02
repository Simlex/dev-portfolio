"use client"
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../icons'
import { motion } from "framer-motion"

type CustomLinkProps = {
    href: string
    title: string
    className?: string
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {

    const pathname = usePathname();
    // console.log("🚀 ~ CustomLink ~ router:", router.asp)

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title='Home' className='mr-4' />
                <CustomLink href="/about" title='About' className='mx-4' />
                <CustomLink href="/projects" title='Projects' className='mx-4' />
                <CustomLink href="/articles" title='Articles' className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href="https://twitter.com" target='_blank'>
                    <TwitterIcon />
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href="https://github.com" target='_blank'>
                    <GithubIcon />
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href="https://linkedin.com" target='_blank'>
                    <LinkedInIcon />
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' href="https://pinterest.com" target='_blank'>
                    <PinterestIcon />
                </motion.a>
                <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3' href="https://dribbble.com" target='_blank'>
                    <DribbbleIcon />
                </motion.a>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar