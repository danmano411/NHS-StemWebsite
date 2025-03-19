import Image from "next/image";
import { SchoolSubjectCard } from "./components/home";

export default function Home() {
  return (
    <main className="h-full min-h-screen w-full flex flex-col items-center justify-center">
      <section className="grid-cols-4 grid gap-6 w-full px-28">
        <SchoolSubjectCard subject="Science" path='science'/>
        <SchoolSubjectCard subject="Technology" path='technology'/>
        <SchoolSubjectCard subject="Engineering" path='engineering'/>
        <SchoolSubjectCard subject="Mathematics" path='mathematics'/>

      </section>
    </main>
  );
}
