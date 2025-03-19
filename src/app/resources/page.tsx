'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Resources() {
    const urlParams = useSearchParams();
    const [text, setText] = useState<String>("No Subject Selected");

    useEffect(() => {
        const subject = urlParams.get("subject");
        if (subject){
            setText(subject);
        }
    }, []);

    return (
        <main className="h-full min-h-screen w-full flex flex-col items-center justify-center">
            {text}
        </main>
    );
}
