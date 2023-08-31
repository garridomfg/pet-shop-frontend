import { ref, reactive } from 'vue'
import { useRouter, type Router } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import useApiPost from './useApiPost'
import type { EmitFunction, SchemaField, UserCredentials } from '@/interfaces/login'

const useLogin = (emit?: EmitFunction) => {
  const router: Router = useRouter()
  const { postData, responseData, errorMessage, isLoading } = useApiPost()

  const $toast = useToast()
  const isLogin = ref<boolean>(true)

  // Schemas to manage across form builder
  const loginFields: SchemaField[] = reactive([
    {
      value: undefined,
      type: 'email',
      name: 'email',
      as: 'text',
      label: 'Email',
      readonly: false,
      class: 'v-col-12'
    },
    {
      value: undefined,
      type: 'password',
      name: 'password',
      as: 'text',
      label: 'Password',
      readonly: false,
      class: 'v-col-12'
    },
    {
      value: undefined,
      type: 'checkbox',
      name: 'remember_me',
      as: 'checkbox',
      label: 'Remember me',
      readonly: false,
      class: 'v-col-12'
    }
  ])

  const registerFields: SchemaField[] = reactive([
    {
      value: undefined,
      type: 'text',
      name: 'first_name',
      as: 'text',
      label: 'First Name*',
      class: 'v-col-6',
      rules: 'required',
      readonly: false,
    },
    {
      value: undefined,
      type: 'text',
      name: 'last_name',
      as: 'text',
      label: 'Last Name*',
      class: 'v-col-6',
      rules: 'required',
      readonly: false,
    },
    {
      value: undefined,
      type: 'email',
      name: 'email',
      as: 'text',
      label: 'Email Address*',
      class: 'v-col-12',
      rules: 'required|email',
      readonly: false,
    },
    {
      value: undefined,
      type: 'text',
      name: 'phone_number',
      as: 'text',
      label: 'Phone Number*',
      class: 'v-col-12',
      rules: 'required',
      readonly: false,
    },
    {
      value: undefined,
      type: 'text',
      name: 'address',
      as: 'text',
      label: 'Address*',
      class: 'v-col-12',
      rules: 'required',
      readonly: false,
    },
    {
      value: undefined,
      type: 'password',
      name: 'password',
      as: 'text',
      label: 'Password*',
      class: 'v-col-12',
      rules: 'required|minLength',
      readonly: false,
    },
    {
      value: undefined,
      type: 'password',
      name: 'password_confirmation',
      as: 'text',
      label: 'Confirm Password*',
      class: 'v-col-12',
      rules: 'required|confirmed:@password',
      readonly: false,
    },
    {
      value: false,
      type: 'checkbox',
      name: 'is_marketing',
      as: 'checkbox',
      label: 'I want to receive inspiration, marketing promotions and updates via email.',
      class: 'v-col-12',
      readonly: false,
    }
  ])

  const handleRecoverPassword = (): void => {
    router.push({ name: 'recover' })
  }

  // Toggle between register or login modal form
  const toggleLoginRegister = (): void => {
    if (!emit) return
    isLogin.value = !isLogin.value
    emit('on:toggle-menu', isLogin.value)
  }

  // Trigger confirmation toast
  const onTriggerToast = (message: string, type: string, duration: number): void => {
    $toast.open({
      message,
      type,
      duration,
      dismissible: true
    })
  }

  // Shared logic between login and register
  const handleRequest = async (url: string, user: UserCredentials, successMessage?: string) => {
    await postData(url, user)
    if (!responseData.value) return
    if (responseData.value.success) {
      emit!('on:close-overlay')
      if (successMessage) {
        onTriggerToast(successMessage, 'success', 1000)
      }
    }
  }

  const handleLogin = async (user: UserCredentials) => {
    await handleRequest('/user/login', user, 'Successfully logged')
  }

  const handleRegister = async (user: UserCredentials) => {
    await handleRequest('/user/create', user, 'Account created successfully')
  }
  return {
    // Data
    isLogin,
    loginFields,
    registerFields,
    responseData,
    errorMessage,
    isLoading,

    // Methods
    toggleLoginRegister,
    handleRecoverPassword,
    onTriggerToast,
    handleLogin,
    handleRegister
  }
}

export default useLogin
