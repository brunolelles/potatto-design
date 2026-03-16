'use client'

import { Playground } from '@/components/Playground'
import { Button } from '@potatto/react'
import type { ButtonVariant, ButtonSize } from '@potatto/react'

export function ButtonPlayground() {
  return (
    <Playground
      defaults={{ variant: 'primary', size: 'md', disabled: false, label: 'Button' }}
      controls={[
        { type: 'select',  label: 'Variant',  key: 'variant',  options: ['primary', 'secondary', 'ghost', 'danger'] },
        { type: 'select',  label: 'Size',     key: 'size',     options: ['sm', 'md', 'lg'] },
        { type: 'boolean', label: 'Disabled', key: 'disabled' },
        { type: 'text',    label: 'Label',    key: 'label',    placeholder: 'Button' },
      ]}
      render={(props) => (
        <Button
          variant={props.variant as ButtonVariant}
          size={props.size as ButtonSize}
          disabled={props.disabled as boolean}
        >
          {(props.label as string) || 'Button'}
        </Button>
      )}
    />
  )
}
