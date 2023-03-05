import Link from 'next/link'
import Button from './Button';

const Nav = () => {

  return (
    <div className='w-full mt-2 pl-80'>
      <Button href={'/'} text={'Explore'} />
      <Button href={'/favorites'} text={'Favorites'} />
    </div>
  );
};

export default Nav;
