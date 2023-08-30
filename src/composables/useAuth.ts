import { ref } from 'vue';
const useAuth = () => {
    const authToken = ref('')

    return {
        authToken,
    }
}

export default useAuth;