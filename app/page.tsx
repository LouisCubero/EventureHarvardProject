import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WiStars } from "react-icons/wi";

export default function Component() {
  return (
    <header className="w-full">
      <div className="min-h-screen bg-gray-200 flex flex-col justify-center">
        <div className="bg-blue-200 text-blue-900 py-2 px-4 mt">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-semibold flex items-center">
                <WiStars size={26} color="black" />
                Sponsoring?&nbsp;
              </span>
              <div className="flex items-center">
                <span className="font-normal">
                  <Link href="/sponsors" className="ml-1">
                    Check out what Eventure has to offer you!
                    <span className="group-hover:underline"> →</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="max-w-3xl w-full space-y-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-5xl">
              Hosting a campus event?
              <br />
              Get it sponsored.
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-prose mx-auto">
              We match your events with sponsors who share your niche, making it
              easier to fund awesome activities without all the cold emailing.
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