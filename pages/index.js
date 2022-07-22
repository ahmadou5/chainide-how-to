import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [isActive,setisActive] = useState(false);
  const [isLink,setIsLink] = useState(false);
  const [isTut,setIsTut] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>ChainIDE|How to</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/chain.png" />
      </Head>
      <div className='font-light' >
      <nav className="w-full z-50 fixed inset-x-0 top-2 flex justify-center mt-0 items-center">
        <div className="w-full h-24 md:[100%] bg-navBar p-4 rounded-md flex items-center">
          <p className="text2xl md:text-4xl flex  text-slate-200 font-bold"><Image className='w-6 md:w-9 h-6 md:h-9 bg-transparent' alt='logo' src="/chain.png"/>hainIDE|</p><span className=' text-slate-200  text-xl mr-5'>How To </span> 

          <div className="hidden md:ml-[250px]  md:flex items-center gap-6 flex-1">
            <Link href="/"><a className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a></Link>
            <a className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
            <a href="#projects" onClick={() => setIsLink(!isLink)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Links</a>
            {isLink && (
              <div className=" w-275 h-340 bg-navBar rounded-lg fixed top-28 left-80 m-auto flex flex-col items-start justify-evenly gap-3">
                <a href="https://chainide.com/"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">ChainIDE</a>
                <a href="https://discord.gg/CpRbQe6w"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">Discord</a>
                <a href="https://twitter.com/ChainIde"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">Twitter</a>
                <a href="https://t.me/ChainIDEdevelopers"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">Telegram</a>
                <a href="https://github.com/WhiteMatrixTech"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">Github</a>
                <a href="https://chainide.gitbook.io/chainide-english-1/"  className="text-textBase font-medium hover:text-slate-100 cursor-pointer ml-5 duration-100 ease-in-out">Docs</a>
              </div>
              )}

            </a>
            <a href="#projects" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
            <a href="#projects" onClick={() => setIsTut(!isTut)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Getting Started</a>
            {isTut && (
              <div className=" w-275 h-420 bg-navBar rounded-lg fixed top-28 right-55 m-auto flex flex-col items-start justify-evenly gap-5">
              <Link href="/Getting-Started/intro"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">ChainIDE Introduction</a></Link>
              <Link href="/Getting-Started/setup"><a className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">Enviroment Setup</a></Link>
              <Link href="/Getting-Started/wallet"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">Wallet Configuration</a></Link>
              <Link href="/Getting-Started/modules"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">ChainIDE Modules</a></Link>
              <Link href="/Getting-Started/network"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">Loading Your Network</a></Link>
              <Link href="/Getting-Started/saving"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">Saving Your Work</a></Link>
              <Link href="/Getting-Started/forward"><a  className="text-textBase font-medium hover:text-slate-100 ml-5 cursor-pointer duration-100 ease-in-out">Port Forwading</a></Link>
              </div>
              )}
            </a>
            <Link href="/tutorials"><a className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Tutorials</a></Link>
            <Link href="/contact"><a className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a></Link>
          </div>
          <div  className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            cg
          </div>

          {isActive && (
            <div className=" w-340 h-510 bg-navBar rounded-lg fixed top-28 m-3 flex flex-col items-start justify-evenly gap-5">
              <a href="" onClick={() => setisActive(false)} className="text-textBase font-medium ml-6 hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
              <a href="" onClick={() => setisActive(false)} className="text-textBase font-medium ml-6 hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Links</a>
              <a href="" onClick={() => setisActive(false)} className="text-textBase font-medium ml-6 hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Getting Started</a>
              <a href="" onClick={() => setisActive(false)} className="text-textBase font-medium ml-6 hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Tutorials</a>
              <a href="" onClick={() => setisActive(false)} className="text-textBase font-medium ml-6 hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>
            </div>
          )}
        </div>
      </nav>
      <main className="w-[90%] ml-auto mr-auto mt-7 relative md:mt-5">
        <div className="w-full h-340 mb-12 flex flex-col items-center justify-center">
            <p className="text-2xl md:text-6xl text-white mt-auto text-center">
              A Cloud-Based Integrated Development Environment for Cross-Blockchain Smart Contracts.
            </p>
            
        </div>
        <div className="w-full h-80 md:flex flex-col items-center justify-center">
            <p className="text-xl text-white mt-auto text-center">
              Swift, Simple, Smart.
            </p>
        </div>
        <div className='w-full h-72'></div>
        <div className="w-full h- md:flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl text-white mt-auto text-center">
              How To ChainIDE.
            </p>
        </div>
        <div className='w-full h-[25px]'></div>
        <div className="w-[90%] ml-auto mr-auto h-80 md:flex flex-col items-center justify-center">
           <p className="text-sm md:text-xl text-white text-center">
              A Platform Developed For Web3 Developers by Web3 Developers,it aims to teach Junior Web3 Developers How to Use the Most Easiest Multi-Chain Development Enviroment and also the first Cloud Based IDE. Build, Debug,  Test Your Smart Contracts Easily.
           </p>
        </div>
        <div className='w-full h-72'></div>
        <div className="w-full h- md:flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl text-white mt-auto text-center">
              Multi-Chain Support
            </p>
        </div>
        <div className='w-full h-[45px]'></div>
        <div className="w-[90%] ml-auto mr-auto h-80 md:flex flex-col items-center justify-center">
           <p className="text-sm md:text-xl text-white text-center">
              Code, Test, Debug and Deploy Your Smart Contract on Multiple EVM Compatible and Non-EVM Public Blockchains.
           </p>
        </div>
        <div className='w-full h-72'></div>
        <div className="border border-zinc-800 rounded-md p-2 min-w-[300px] h-360 md:max-w-[90%] ml-auto mr-auto relative hover:border-zinc-600 duration-100 ease-in-out">
          <Image src="chain11.png" alt="chain" className="w-full h-360 object-cover rounded-md my-4"/>
        </div>
        <div className='w-full h-72'></div>
        </main>

        
      </div>

    
    </div>
  )
}
