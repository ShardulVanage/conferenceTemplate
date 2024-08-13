import logo from '@/images/logos/logo.png'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
    src={logo}
    width={260}
    alt='ZepResearchLogo'
    />
  )
}
