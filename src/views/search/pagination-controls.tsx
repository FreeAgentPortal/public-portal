type Props = {
  currentPage: number;
  onPageChange: (page: number) => void;
  isNextPage: boolean;
};
export default function PaginationControls(props: Props) {
  return (
    <div className='flex justify-center gap-4 mt-6 items-center'>
      <button
        className='btn btn-sm btn-outline'
        disabled={props.currentPage <= 1}
        onClick={() => props.onPageChange(props.currentPage - 1)}
      >
        Prev
      </button>
      <span className='text-white'>Page {props.currentPage}</span>
      <button
        disabled={props.isNextPage !== true}
        className='btn btn-sm btn-outline'
        onClick={() => props.onPageChange(props.currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
