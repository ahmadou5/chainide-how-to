import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

function intro() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChainIDE|Introduction</title>
        <meta name="description" content="Introduction and Vision of ChainIDE Team" />
        <link rel="icon" href="/chain.png" />
      </Head>
      <div className="w-[80%] font-light  ml-auto mr-auto mt-7 relative md:mt-5">
        <div className="w-full flex flex-col items-center justify-center">
            <p className="text-2xl md:text-6xl text-textBase font-bold mt-5 text-center">
              ChainIDE Introduction
            </p>
        </div>
        <div className='w-full h-32 md:h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-center justify-center">
           <p className="text-sm md:text-xl text-white text-center">
           ChainIDE is an cloud-based IDE for creating decentralized applications to deploy on different blockchains such as Ethereum, BNB Chain, Polygon, Conflux, Nervos, Dfinity, Flow, Chain33, Fisco Bcos, etc. It fasts the development cycle and has pre-installed plugins that save users' time and effort. ChainIDE is the world's most commonly used IDE, due to its interactive interface and easy-to-use attributes among other attributes that have attracted developers, practitioners, and researchers from all around the world. It provides a complete and ready-to-use environment for smart contract development as well as provides detailed documentation for learning purposes. ChainIDE is a powerful open-source cloud-based IDE that helps you write smart contracts in different programming languages and for different blockchains. It has modules for writing, compiling, debugging, testing, deploying a smart contract,  and much more.
           </p>
        </div>
        <div className='w-full h-32 md:h-56'></div>
        <div className="border border-zinc-800 rounded-md p-2 min-w-[300px] h-360 md:max-w-[90%] ml-auto mr-auto relative hover:border-zinc-600 duration-100 ease-in-out">
          <img src="../chain11.png" alt="" className="w-full h-360 object-cover rounded-md my-4"/>
        </div>
        <div className='w-full h-32 md:h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl md:text-2xl text-textBase font-bold mb-24 mt-5 text-start">
               Why ChainIDE ?
           </p>
           <p className="text-sm md:text-xl text-white text-center">
           ChainIDE combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging. First and foremost, it is an editor that gets out of your way. The delightfully frictionless edit-build-debug cycle means less time fiddling with your environment, and more time executing your ideas. ChainIDE is a cloud-based multi-chain IDE that can be easily switched to different smart chains with only one click. It supports a multi-chain online IDE development environment. The environment supported by ChainIDE includes Facebook Diem, Ethereum, BNB Chain, Conflux, Dfinity, Nervos, Polygon, Flow, Chain 33, AntFinancial OpenChain, Fisco Bcos, Iost and Filoop. It has been used by developers in more than 120 countries, and more than 3.5 million contracts have been compiled at the same time. 
           </p>
        </div>
        <div className='w-full h-32 md:h-56'></div>

        <div className="md:w-[90%] w-full mb-14 ml-auto mr-auto h-80 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl md:text-2xl text-textBase font-bold mb-24 mt-5 text-start">
            Can be used with all the operating Systems
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            ChainIDE supports macOS, Linux, and Windows - so you can hit the ground running, no matter the platform.
           </p>
        </div>
        <div className='w-full h-32 md:h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl md:text-2xl text-textBase font-bold mb-24 mt-5 text-start">
            Edit, compile and deploy with ease
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            At its heart, ChainIDE features a lightning-fast source code editor, perfect for day-to-day use. With support for multiple languages such as JavaScript, HTML, CSS, Solidity, etc. ChainIDE helps you be instantly productive with syntax highlighting, bracket-matching, auto-indentation, box-selection, snippets, and more. For serious coding, you'll often benefit from tools with more code understanding than just blocks of text. ChainIDE includes built-in support for IntelliSense code completion, rich semantic code understanding and navigation, and code refactoring.
           </p>
           <p className="text-sm mt-11 md:text-xl text-white text-center">
            And when the coding gets tough, the tough get debugging. Debugging is often the one feature that developers miss most in a leaner coding experience, so we made it happen. ChainIDE includes an interactive compiler and interaction module. 
           </p>
        </div>
        <div className='w-full h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl font-bold md:text-2xl text-textBase mb-24 mt-5 text-start">
            Ready, set, and code
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            If you prefer a code editor-centric development tool or are building blockchain applications, we invite you to try out ChainIDE and let us know what you think with the help of our social networks or community forum, the links are given at the end of this page.
           </p>
        </div>
        <div className='w-full h-40 md:h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl font-bold md:text-2xl text-textBase mb-24 mt-5 text-start">
           Multi blockchain support
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            ChainIDE offers a wide range of blockchains where you can deploy your smart contracts.  There are two types of blockchains IDE provided by the ChainIDE. The first category is Consortium Blockchains and the second category is Public Blockchains. ChainIDE provides a compatible IDE for each Blockchain.
           </p>
           <p className="text-sm mt-11 md:text-xl text-white font-mono">
            The Explanation of Consortium Blockchains and Public Blockchains
           </p>
        </div>
        <div className='w-full h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-80 md:flex flex-col items-start justify-center">
           <p className="text-xl font-bold md:text-2xl text-textBase mb-24 mt-5 text-start">
            Consortium Blockchain
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            The consortium blockchain is a system that is semi-private and has a controlled user group but works across different organizations.
           </p>
           <div className="border border-zinc-800 mb-25 rounded-md p-2 min-w-[300px] h-360 md:max-w-[80%] ml-auto mr-auto relative hover:border-zinc-600 duration-100 ease-in-out">
             <img src="../ant.png" alt="" className="w-full h-360 object-cover rounded-md my-4"/>
           </div>
        </div>
        <div className='w-full h-56'></div>
        <div className="md:w-[90%] w-full mb-20 ml-auto mr-auto h-320 md:h-320 md:flex flex-col items-start justify-center">
           <p className="text-xl font-bold md:text-2xl text-textBase mb-24 mt-5 text-start">
            Public Blockchains
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            Public Blockchains are open to everyone, everyone has the right to join and become a node, every node can record all the transactions. Below are the blockchains that are supported by the ChainIDE. 
           </p>
           <div className="border border-zinc-800 mb-25 rounded-md p-2 min-w-[300px] h-360 md:max-w-[80%] ml-auto mr-auto relative hover:border-zinc-600 duration-100 ease-in-out">
            <img src="../bsc1.png" alt="" className="w-full h-360 object-cover rounded-md my-4"/>
           </div>
           <p className="text-sm mt-11 md:text-xl text-white font-mono">
            For learning and testing purposes, public blockchains with the testing environment are suggested to use such as Ethereum, Conflux, DFINITY, and Binance Smart Chain.
           </p>
        </div>
        <div className='w-full h-56'></div>
        <div className="md:w-[90%] w-full mb-20 mt-11 ml-auto mr-auto h-320 md:h-320 md:flex flex-col items-start justify-center">
           <p className="text-xl font-bold md:text-2xl text-textBase mb-24 mt-5 text-start">
            ChainIDE Vision
           </p>
           <p className="text-sm md:text-xl mb-11 text-white text-center">
            ChainIDE vision is to provide tools, frameworks, to help developers who wanna develop on blockchains and enrich people with blockchain knowledge. ChainIDE has conducted several webinars, seminars, and lectures in different institutions and universities such as Peking University, Shanghai Jiaotong University, University of Alberta, etc. In the first quarter of 2021, it has successfully delivered an 08-week course on blockchain for African students in collaboration with Binance. From 27-30 April 2021, it organized a webinar in collaboration with the University of Alberta, the great leader and experts from both academia and industry were called to give a speech and share their experiences in the field of blockchain and multimedia data science.
           </p>
           <p className="text-sm md:text-xl text-white text-center">
            We aspire to improve our world and everyone's lives with the adoption of blockchain technologies. We aspire that governments and businesses will be more efficient, effective, and responsive – and, that the individual members of society will be the primary beneficiaries with the use of blockchain. We aim to develop and deliver high-quality, user-friendly, cost-effective, and advanced tools, frameworks, and knowledge in the field of blockchain. We value innovation and purposeful disruption. We value the enthusiasm, skill, and capabilities of our global blockchain community. ChainIDE team consists of highly expert, capable, and skilled members that have unique, valuable, and innovative ideas. We value empathy and caring for our planet and our common humanity.
           </p>
        </div>
        <div className='w-full h-56'></div>
        <div className='w-full h-56'></div>
      </div>

    </div>
  )
}

export default intro