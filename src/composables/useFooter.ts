import type { FooterItem } from '@/interfaces/footer'
import { ref } from 'vue'

const useFooter = () => {
  const footerItems = ref<FooterItem[]>([
    {
      title: 'Petson',
      options: [
        { path: '#', label: 'Blog' },
        { path: '#', label: 'About us' },
        { path: '#', label: 'Store locator' }
      ]
    },
    {
      title: 'Contact',
      options: [
        { path: 'mailto:email@example.com', label: 'contact@petson' },
        { path: '', label: '+385 000 000' },
        { path: '', label: '35 Shnauzer avenue, Dogville AL' }
      ]
    },
    {
      title: 'Information',
      options: [
        { path: '#', label: 'Ordering and shipping' },
        { path: '#', label: 'FAQ' },
        { path: '#', label: 'GDPR statement' }
      ]
    }
  ])

  return {
    footerItems
  }
}

export default useFooter
