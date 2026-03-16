'use client'

import {
  type ReactNode,
  useState,
  type ChangeEvent,
} from 'react'
import styles from './Playground.module.css'

export type Control =
  | { type: 'select';   label: string; key: string; options: string[] }
  | { type: 'boolean';  label: string; key: string }
  | { type: 'text';     label: string; key: string; placeholder?: string }

interface PlaygroundProps {
  controls:  Control[]
  defaults:  Record<string, unknown>
  themes?:   string[]
  render:    (props: Record<string, unknown>, theme: string) => ReactNode
}

export function Playground({ controls, defaults, themes = ['default', 'fried'], render }: PlaygroundProps) {
  const [values, setValues]   = useState<Record<string, unknown>>(defaults)
  const [theme, setTheme]     = useState(themes[0])

  function set(key: string, value: unknown) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className={styles.root}>
      {/* Preview */}
      <div className={styles.preview} data-theme={theme === 'default' ? undefined : theme}>
        {render(values, theme)}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Theme switcher */}
        <div className={styles.controlGroup}>
          <label className={styles.label}>Theme</label>
          <div className={styles.pills}>
            {themes.map((t) => (
              <button
                key={t}
                className={[styles.pill, theme === t ? styles.pillActive : ''].join(' ')}
                onClick={() => setTheme(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Generated controls */}
        {controls.map((ctrl) => (
          <div key={ctrl.key} className={styles.controlGroup}>
            <label className={styles.label}>{ctrl.label}</label>

            {ctrl.type === 'select' && (
              <select
                className={styles.select}
                value={values[ctrl.key] as string}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => set(ctrl.key, e.target.value)}
              >
                {ctrl.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}

            {ctrl.type === 'boolean' && (
              <button
                className={[styles.pill, values[ctrl.key] ? styles.pillActive : ''].join(' ')}
                onClick={() => set(ctrl.key, !values[ctrl.key])}
              >
                {values[ctrl.key] ? 'true' : 'false'}
              </button>
            )}

            {ctrl.type === 'text' && (
              <input
                className={styles.input}
                type="text"
                placeholder={ctrl.placeholder}
                value={values[ctrl.key] as string}
                onChange={(e: ChangeEvent<HTMLInputElement>) => set(ctrl.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
