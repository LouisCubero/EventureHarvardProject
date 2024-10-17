import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WiStars } from "react-icons/wi";
import ButtonGroup from '@/components/ButtonGroup'; // Import the client component

export default function Component() {
  return (
    <header className="w-full">
      <div className="min-h-screen bg-[#FFFFF95] flex flex-col justify-center">
        <div className="bg-blue-200 text-blue-900 py-2 px-4 mt-0 relative">
          <div className="mx-auto justify-between items-center">
            <div className="flex center">
              <span className="font-semibold flex items">
                <WiStars size={26} color="black" />
                Sponsoring?&nbsp;
              </span>
              <span className="font-normal">
                <Link href="/sponsors/" className="flex center">
                  Learn how you can find best fit events!&nbsp;
                  <span className="group-hover:underline">→</span>
                </Link>
              </span>
              <div>
                <Link href="/sponsors/" className="absolute right-5">
                  Sponsors
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="max-w-3xl space-y-8 text-center">
            <h1 className="text-3xl font-bold font-Metropolis tracking-tight sm:text-4xl md:text-4xl">
              Lead a strong community,
              <br />
              get your events sponsored!
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-prose mx-auto">
              We match club events with sponsors who share your niche, making it
              easier to fund awesome activities without all the cold outreach.
            </p>
            <ButtonGroup /> {/*ButtonGroup.tsx*/}
          </div>
        </div>
      </div>
    </header>
  );
}