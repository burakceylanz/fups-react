import AccountActivities from '../components/AccountActivities'
import Banner from '../components/Banner'
import Campaign from '../components/Campaign'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className='pb-16'>
          <Campaign />
          <AccountActivities />
          <Banner />
      </main>
    </>
  )
}
