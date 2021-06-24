
import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next Shorts</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Shorts</Link>
          </li>
          <li>
            <Link href='/addMeetup'>Add New Shorts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;