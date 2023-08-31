export type EmitFunction = (
  event: 'on:toggle-menu' | 'on:close-overlay',
  isLoading?: boolean
) => void
export interface SchemaField {
  value?: string | undefined | boolean
  type?: string
  name?: string
  as?: string
  label?: string
  class?: string
  rules?: string
  readonly?: boolean
}

export interface UserRegistration {
  firstName?: string
  lastName?: string
  email?: string
  address?: string
  password?: string
  password2?: string
  remember_me?: boolean
}

export interface UserCredentials {
  remember_me?: boolean
  email: string
  password: string
  address?: string
  first_name?: string
  is_marketing?: boolean
  last_name?: string
  password_confirmation?: string
  phone_number?: string
}

export interface User {
  success?: number
  data?: UserData
  error?: null
  errors?: any[]
  extra?: any[]
}

export interface UserData {
  uuid?: string
  first_name?: string
  last_name?: string
  email?: string
  email_verified_at?: boolean | null
  avatar?: string | null
  address?: string
  phone_number?: string
  is_marketing?: number
  updated_at?: string
  created_at?: string
  token?: string
  last_login_at?: string
}
