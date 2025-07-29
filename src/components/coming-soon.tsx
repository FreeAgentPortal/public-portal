import { Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-center'>
        <Clock className='mx-auto mb-4 h-16 w-16 text-gray-500' />
        <h1 className='text-2xl font-bold mb-4 text-accent'>Coming Soon!</h1>
      </div>
    </div>
  );
}
