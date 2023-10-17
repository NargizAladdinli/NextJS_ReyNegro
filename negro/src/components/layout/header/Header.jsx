'use client'
import { usePathname } from 'next/navigation';
import style from './_header.module.scss';
import Link from 'next/link';

export default function Header() {
  const router = usePathname();
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
                      <Link href="/" className={`${router === '/' ? style.active : style.nonactive}` }>Главная</Link>
                    </li>
                    <li>
                      <Link href="/about"  className={`${router === '/about' ? style.active : style.nonactive}`  }>Наш товар</Link>
                    </li>
                    <li>
                      <Link href="/blog"  className={`${router === '/blog' ? style.active : style.nonactive}`  }>Получить прайс</Link>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}