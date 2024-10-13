import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WiStars } from "react-icons/wi";

export default function Component() {
  return (
    <header className="w-full">
      <div className="min-h-screen bg-[#FFFFF95] flex flex-col justify-center">
        <div className="bg-blue-200 text-blue-900 py-2 px-4 mt-0">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-semibold flex items-center">
                <WiStars size={26} color="black" />
                Sponsoring?&nbsp;
              </span>
              <div className="flex items-center">
                <span className="font-normal">
                  <Link href="/sponsors" className="ml-1">
                    Learn how you can find best fit events!
                    <span className="group-hover:underline"> →</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="max-w-3xl w-full space-y-8 text-center">
            <h1 className="text-3xl font-bold font-Metropolis tracking-tight sm:text-4xl md:text-4xl">
              Foster a strong community,
              <br />
              get events sponsored!
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-prose mx-auto">
              We match club events with sponsors who share your niche, making it
              easier to fund awesome activities without all the cold outreach.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="secondary" size="lg" className="w-32">
                Student
              </Button>
              <Button variant="secondary" size="lg" className="w-32">
                Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}