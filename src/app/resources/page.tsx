'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuSection } from "../components/resources";

export default function Resources() {
    const urlParams = useSearchParams();
    const [urlSubject, setSubject] = useState<String>("No Subject Selected");

    useEffect(() => {
        const urlSubject = urlParams.get("subject");
        if (urlSubject){
            setSubject(urlSubject);
        }
    }, []);

    return (
        <main className="h-[60rem] w-full flex flex-row items-center justify-center">
            <div className="p-4 flex flex-col items-center justify-start flex-1/5 bg-sfgray h-full min-h-full gap-4">
                <MenuSection sectionTitle="Science" items={['Biology', 'Chemistry', 'Physics']}/>
                <MenuSection sectionTitle="Technology" items={['Biotechnology', 'Cybersecurity', 'Data Science', 'Digital Design', 'Programming', 'Robotics']}/>
                <MenuSection sectionTitle="Engineering" items={['Aerospace', 'Civil', 'Environmental', 'General', 'Mechanical']}/>
                <MenuSection sectionTitle="Mathematics" items={['Statistics']}/>
            </div>
            <div className="flex flex-row items-start justify-start flex-grow bg-sfoffwhite h-full w-full">
                <div className="h-16 bg-sfgreen-dark w-full flex flex-row justify-between inset-shadow inset-shadow-sm"></div>
            </div>
        </main>
    );
}
