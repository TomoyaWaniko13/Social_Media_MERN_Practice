import TopBar from '../../TopBar.tsx';
import LeftBar from '../../LeftBar.tsx';
import Share from '../../Share.tsx';
import ProfileRightBar from '../../ProfileRightBar.tsx';
import ProfileNavBar from '../../ProfileNavBar.tsx';

const Profile = () => {
  return (
    <>
      <div className={'w-full'}>
        <TopBar />
      </div>
      <div className={'flex flex-row'}>
        <div className={'w-1/5'}>
          <LeftBar />
        </div>
        <div className={'w-4/5'}>
          <div className={'flex flex-col'}>
            <div className={'w-full'}>
              <ProfileNavBar />
            </div>
            <div className={'flex flex-row'}>
              <Share />
              <ProfileRightBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
