import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Client from 'src/components/Client'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Client />
    </>
  )
}

export default HomePage
