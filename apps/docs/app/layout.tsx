import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Potatto Design System',
  description: 'Multibrand UI kit — design reference & component playground',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className={styles.layout}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
