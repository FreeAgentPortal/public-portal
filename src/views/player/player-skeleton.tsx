export default function PlayerSkeleton() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <div className='skeleton h-24 w-24 rounded-full'></div>
        <div className='flex flex-col gap-4'>
          <div className='skeleton h-4 w-20'></div>
          <div className='skeleton h-4 w-28'></div>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='skeleton h-10 w-28'></div>
        <div className='skeleton h-10 w-28'></div>
      </div>
      <div className='skeleton h-52 w-full'></div>
      <div className='skeleton h-52 w-full'></div>
    </div>
  );
}
