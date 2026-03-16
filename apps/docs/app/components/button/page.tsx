import { Playground } from '@/components/Playground'
import { Button } from '@potatto/react'
import type { ButtonVariant, ButtonSize } from '@potatto/react'
import styles from './page.module.css'

export const metadata = { title: 'Button — Potatto DS' }

export default function ButtonPage() {
  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>General</span>
          <span className={styles.status} data-status="in-progress">In Progress</span>
        </div>
        <h1 className={styles.title}>Button</h1>
        <p className={styles.description}>
          Elemento de ação primário. Inicia uma ação imediata, submit de formulário,
          ou navega para outra tela. Botões comunicam a ação que vai acontecer quando
          o usuário interagir com eles.
        </p>
      </div>

      {/* Playground */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Playground</h2>
        <Playground
          defaults={{ variant: 'primary', size: 'md', disabled: false, label: 'Button' }}
          controls={[
            { type: 'select',  label: 'Variant',  key: 'variant',  options: ['primary', 'secondary', 'ghost', 'danger'] },
            { type: 'select',  label: 'Size',     key: 'size',     options: ['sm', 'md', 'lg'] },
            { type: 'boolean', label: 'Disabled', key: 'disabled' },
            { type: 'text',    label: 'Label',    key: 'label', placeholder: 'Button' },
          ]}
          render={(props) => (
            <Button
              variant={props.variant as ButtonVariant}
              size={props.size as ButtonSize}
              disabled={props.disabled as boolean}
            >
              {props.label as string || 'Button'}
            </Button>
          )}
        />
      </section>

      {/* Todas as variantes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Variants</h2>
        <div className={styles.variantGrid}>
          {(['primary', 'secondary', 'ghost', 'danger'] as ButtonVariant[]).map((variant) => (
            <div key={variant} className={styles.variantRow}>
              <p className={styles.variantLabel}>{variant}</p>
              <div className={styles.variantButtons}>
                <Button variant={variant} size="sm">Small</Button>
                <Button variant={variant} size="md">Medium</Button>
                <Button variant={variant} size="lg">Large</Button>
                <Button variant={variant} disabled>Disabled</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quando usar */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Design Decisions</h2>
        <div className={styles.decisions}>
          <div className={styles.decision}>
            <h3>Primary</h3>
            <p>
              Ação mais importante da tela. Use apenas um por viewport.
              Usa os tokens <code>interactive.action.primary</code>.
            </p>
          </div>
          <div className={styles.decision}>
            <h3>Secondary</h3>
            <p>
              Ação alternativa, menos prioritária. Outlined — a borda
              usa o mesmo token da primary para manter consistência de cor.
            </p>
          </div>
          <div className={styles.decision}>
            <h3>Ghost</h3>
            <p>
              Ação terciária ou em contextos com muito visual.
              Sem borda e sem fundo — só fica visível no hover.
            </p>
          </div>
          <div className={styles.decision}>
            <h3>Danger</h3>
            <p>
              Ações destrutivas (delete, remove). Usa tokens
              <code>interactive.action.danger</code>. Sempre acompanhe
              de um modal de confirmação.
            </p>
          </div>
        </div>
      </section>

      {/* Tokens usados */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tokens</h2>
        <table className={styles.tokenTable}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Token (L3)</th>
              <th>Resolves to (L2)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>background</td>
              <td><code>semantic.button.primary.bg</code></td>
              <td><code>interactive.action.primary.surface.default</code></td>
            </tr>
            <tr>
              <td>background:hover</td>
              <td><code>semantic.button.primary.bg-hover</code></td>
              <td><code>interactive.action.primary.surface.hovered</code></td>
            </tr>
            <tr>
              <td>color</td>
              <td><code>semantic.button.primary.fg</code></td>
              <td><code>interactive.action.primary.content.on-foreground.default</code></td>
            </tr>
            <tr>
              <td>border-color</td>
              <td><code>semantic.button.primary.border</code></td>
              <td><code>interactive.action.primary.border.default</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
