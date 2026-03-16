'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const NAV = [
  {
    group: 'Foundations',
    items: [
      { label: 'Colors',       href: '/foundations/colors' },
      { label: 'Typography',   href: '/foundations/typography' },
      { label: 'Sizes',        href: '/foundations/sizes' },
      { label: 'Iconography',  href: '/foundations/iconography' },
    ],
  },
  {
    group: 'Tokens',
    items: [
      { label: 'Level 1 — Root',        href: '/tokens/level-1' },
      { label: 'Level 2 — Pre Semantic', href: '/tokens/level-2' },
      { label: 'Level 3 — Semantic',     href: '/tokens/level-3' },
    ],
  },
  {
    group: 'Themes',
    items: [
      { label: 'Overview',  href: '/themes' },
      { label: 'Fried',     href: '/themes/fried' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Button',      href: '/components/button',     status: 'in-progress' },
      { label: 'Navigation',  href: '/components/navigation', status: 'in-progress' },
      { label: 'Links',       href: '/components/links',      status: 'in-progress' },
      { label: 'Text Input',  href: '/components/text-input', status: 'backlog' },
      { label: 'Select',      href: '/components/select',     status: 'backlog' },
      { label: 'Modal',       href: '/components/modal',      status: 'backlog' },
      { label: 'Alert',       href: '/components/alert',      status: 'backlog' },
      { label: 'Tooltip',     href: '/components/tooltip',    status: 'backlog' },
    ],
  },
]

const STATUS_LABEL: Record<string, string> = {
  'done':        'Done',
  'in-progress': 'WIP',
  'in-review':   'Review',
  'backlog':     '',
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">Potatto DS</Link>
      </div>

      <nav className={styles.nav}>
        {NAV.map((section) => (
          <div key={section.group} className={styles.section}>
            <p className={styles.groupLabel}>{section.group}</p>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      styles.link,
                      pathname === item.href ? styles.active : '',
                    ].join(' ')}
                  >
                    <span>{item.label}</span>
                    {item.status && item.status !== 'backlog' && (
                      <span
                        className={styles.badge}
                        data-status={item.status}
                      >
                        {STATUS_LABEL[item.status]}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
