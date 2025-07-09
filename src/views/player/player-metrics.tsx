type Props = {
  performanceMetrics: {
    name: string;
    value: string;
  }[];
};
export default function ProfileMetrics(props: Props) {
  return (
    <div className='mt-6'>
      <h2 className='text-lg font-semibold mb-2 text-white/90'>
        Performance Metrics
      </h2>
      <div className='grid grid-cols-2 gap-4 text-sm text-white/80'>
        {props.performanceMetrics.map((metric, i) => (
          <div key={i}>
            <p className='font-semibold'>{metric.name}</p>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
