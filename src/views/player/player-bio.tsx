type Props = {
  bio: string;
};
export default function ProfileBio(props: Props) {
  return (
    <div className='mt-4'>
      <h2 className='text-lg font-semibold mb-2 text-white/90'>Bio</h2>
      <p className='text-white/70 normal-case'>{props.bio}</p>
    </div>
  );
}
