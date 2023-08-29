import type {  Component } from 'vue'

export type EmitFunction = (
  event: 'on:input-search',
  term?: string
) => void

export interface NavDropDown {
  label: string
  isDropDown: boolean
  options?: DropDownOption[]
}

export interface DropDownOption {
  path: string
  label: string
  fn?: () => void
}

export interface NavButtons {
  icon?: Component
  label: string
  count?: number
  fn?: () => void
}
