"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function ButtonGroup() {
  const router = useRouter();

  const handleStudentClick = () => {
    router.push('/student');
  };

  const handleSponsorClick = () => {
    router.push('/sponsor');
  };

  return (
    <div className="mt-8 flex justify-center space-x-4">
      <Button variant="secondary" size="lg" className="w-32" onClick={handleStudentClick}>
        Student
      </Button>
      <Button variant="secondary" size="lg" className="w-32" onClick={handleSponsorClick}>
        Sponsor
      </Button>
    </div>
  );
}