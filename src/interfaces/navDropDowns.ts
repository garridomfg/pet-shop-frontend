import type { ComputedRef, Component } from 'vue'

export type EmitFunction = (event: 'on:close' | 'on:drop-down') => void

export interface NavDropDown {
  label: string
  isDropDown: boolean
  options?: DropDownOption[]
}

export interface DropDownOption {
  path: string
  label: ComputedRef<string>
  fn?: () => void
}

export interface NavButtons {
  icon?: Component
  label: string
  count?: number
  fn?: () => void
}
