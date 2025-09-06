'use client'

import { ReactElement, useState } from "react";

type TSections = 'getting_started' | 'simple_usage' | 'custom_widget' | 'styling_widgets' | 'advanced';

const GettingStarted__HTML: ReactElement = 
    <main>
        <h1 className="text-accent-blue">Introduction</h1>
        <p>Ruin is an immediate-mode UI framework for building cross-platform desktop applications. Entirely written in C, Ruin offers a lightweight and high-performance solution for developers who require efficient, low-level control over their UI systems.</p>
        <br />
        
        <section></section>

        <h3 className="text-accent-blue">Features of Ruin</h3>
        <ul className="space-y-1">
            <li> * it is an <strong>immediate-mode ui library</strong>, basically every widgets that is going to be displayed on the screen is re-computed every frame. every thing is procedural, explicit, and state must be managed by you..</li>
            <li> * it is implemented in <strong>basic C</strong>, so that we can get every bit of performance and zero abstraction.</li>
            <li> * it is basically a <strong>math library</strong>, meaning it does only calculations on where rectanges and text should be placed on screen based on your command. Therefore, you can use your own graphics library to draw UI onto the screen.</li>
        </ul>
        <br />

        <h3 className="text-accent-blue">Things to Keep in Mind</h3>
        <ul className="space-y-1">
            <li>  <strong>* Custom Memory Allocator:</strong> Ruin uses a custom arena-based memory allocator internally. This simplifies the management of UI state lifetimes. However, it requires you to define upfront how much memory your application will use. Be sure to allocate enough memory during initialization to avoid issues at runtime. </li>
            <li>  <strong>* Fixed-Size Arrays:</ strong> Ruin stores widgets and temporary stacks using plain, fixed-size arrays. These sizes are hardcoded for simplicity and performance. Depending on your application's complexity, you may need to adjust these array limits in the source to accommodate more widgets or deeper UI nesting. </li>
        </ul>
        <br />

        <h1 className="text-accent-blue">Compiling RUIN</h1>
        <p>main ruin library consists of these files, </p>
        <ul>
            <li> <strong>* base</strong>, not really ruin thing, my own utilities that I often use. [contains. arena, context-cracking, typedefs ...]</li>
            <li> <strong>* ruin-core</strong>, the main, barebone, internal implementation of ruin. Kindof low-level. [contains. basic structs like context, widgets, window ...] </li>
            <li> <strong>* ruin-widget</strong>, high-level implementation of usable UI elements, built using core utils. [contains. usable widgets like buttons, labels, checkbox ...] </li>
        </ul>
        <br />
        <p>the above files only ease the process of creating bunch of rectangle co-ordinates. You will need a renderer in-order to actually draw stuff on screen. It is easy to write your own renderer from stratch. but I've provided some renderer implementation,</p>
        <ul>
            <li> <strong>* ruin_raylib_render</strong></li>
            <li> <strong>* ruin_opengl_render</strong></li>
            <li> <strong>* ruin_sdl_render</strong></li>
        </ul>
    </main>


const SimpleUsage__HTML: ReactElement = <main><h1>Simple usage</h1></main>
const CustomWidgets__HTML: ReactElement = <main><h1>custom Widgets</h1></main>
const StylingWidgets__HTML: ReactElement = <main><h1>styling_widgets</h1></main>
const Advanced__HTML: ReactElement = <main><h1>advanced</h1></main>

export default function RuinDocs() {
    const [currentModule, setCurrentModule] = useState<TSections>('getting_started');

    return (
    <main className="min-h-screen flex flex-col">
        <section className="flex flex-col w-full h-96 bg-accent-blue p-5">
            <p className="text-right text-white">தெய்வத்தான் ஆகா தெனினும் முயற்சிதன் <br />மெய்வருத்தக் கூலி தரும்</p>
            <p className="text-white lg:hidden">ruin is a <span className="before:content-['fastest'] hover:before:content-['may-be-fast'] hover:bg-amber-900 cursor-pointer" /> ui framework build using completly in c</p>
            <section className="h-0 flex-1 " />
            <p className="text[200px] text-8xl font-black text-white">ruin docs.</p>
            <p className="text-white hidden lg:block">ruin is a <span className="before:content-['fastest'] hover:before:content-['may-be-fast'] hover:bg-amber-900 cursor-pointer" /> ui framework build using completly in c</p>
        </section>


        <section className=" flex flex-1 lg:px-24 ">
            <section className="bg-white w-full max-w-xs flex-1 border-accent-blue  border-r hidden lg:block p-5  ">
                <div className="sticky top-5 space-y- text-right font-light">
                    <p onClick={() => setCurrentModule('getting_started')} className={`cursor-pointer hover:text-[#2025EE] text-xl ${currentModule == 'getting_started' && 'text-accent-blue font-bold'}`}>Getting Started</p>
                    <p onClick={() => setCurrentModule('simple_usage')}    className={`cursor-pointer hover:text-[#2025EE] text-xl ${currentModule == 'simple_usage' && 'text-accent-blue font-bold'}`}>Simple Usage</p>
                    <p onClick={() => setCurrentModule('custom_widget')}   className={`cursor-pointer hover:text-[#2025EE] text-xl ${currentModule == 'custom_widget' && 'text-accent-blue font-bold'}`}>Custom Widgets</p>
                    <p onClick={() => setCurrentModule('styling_widgets')} className={`cursor-pointer hover:text-[#2025EE] text-xl ${currentModule == 'styling_widgets' && 'text-accent-blue font-bold'}`}>Styling Widgets</p>
                    <p onClick={() => setCurrentModule('advanced')}        className={`cursor-pointer hover:text-[#2025EE] text-xl ${currentModule == 'advanced' && 'text-accent-blue font-bold'}`}>Advanced</p>
                </div>
            </section>

            <section className="bg-gray100 bg-gradient-to-r from-zinc-100 via-zinc-50 to-white w-full flex-1 p-5 max-w-5xl">
                { (currentModule == 'getting_started') && GettingStarted__HTML }
                { (currentModule == 'custom_widget') && CustomWidgets__HTML }
                { (currentModule == 'simple_usage') && SimpleUsage__HTML }
                { (currentModule == 'styling_widgets') && StylingWidgets__HTML }
                { (currentModule == 'advanced') && Advanced__HTML }
            </section>


        </section>
        
        <footer className="flex w-full h-20 bg-accent-blue text-white items-center justify-end lg:px-20 px-5">
            mukesh kannan
        </footer>


    </main>)
};
