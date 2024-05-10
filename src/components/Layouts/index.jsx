/* eslint-disable react/prop-types */
import MobileHeader from './MobileHeader'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <MobileHeader />
      <Header />
      {children}
      <Footer />
    </>
  )
}
