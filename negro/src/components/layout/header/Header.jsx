'use client'
import { useRouter } from 'next/navigation';
import style from './_header.module.scss';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const current = router.pathname;
  console.log(router);
  return (
    <header className={style.header}>
        <div className="container">
            <div className={style.flexin}>
                <div className={style.logo}>
                    <h3>Rey Negro</h3>
                </div>
                <nav className={style.menu}>
                  {/* use Router problems */}
                  <ul className={style.menulist}>
                    <li>
                      <Link href="/" className={`${current} === '/' ? ${style.active} : ${style.nonactive}` }>Главная</Link>
                    </li>
                    <li>
                      <Link href="#"  className={`${current} === '/' ? ${style.active} : ${style.nonactive}`  }>Наш товар</Link>
                    </li>
                    <li>
                      <Link href="#"  className={`${current} === '/' ? ${style.active} : ${style.nonactive}`  }>Получить прайс</Link>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}