import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

// function UserIcon() { // if u want to use `await`, u need to use `async` too
async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
