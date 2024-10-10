"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "O" : "" }
                </li>
                <li>
                    <Link href="/about-soul">About Soul</Link> {path === "/about-soul" ? "O" : "" }
                </li>
                <li>
                    <button onClick={()=>setCount(e=>e+1)}>{count} </button>
                </li>
            </ul>
        </nav>
    )
}

