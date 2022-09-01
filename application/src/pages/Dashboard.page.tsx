import { FunctionComponent, useState } from 'react'
import { Layout } from '../components/Layout'

enum Tabs {
  Top_Gainer,
  Top_Loser,
}

const DashboardPage: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Top_Gainer)

  return (
    <Layout>
      <div className='container mx-auto py-5'>
        <div className='flex flex-col items-stretch py-3'>
          <div className='flex space-x-5 items-center justify-between'>
            <ul role='button' className='flex border-b w-1/2'>
              <li
                className={`h-14 px-5 flex justify-center items-center rounded-t-md font-semibold ${
                  currentTab === Tabs.Top_Gainer && 'bg-primary'
                }`}
                onClick={() => setCurrentTab(Tabs.Top_Gainer)}
              >
                Top Gainer
              </li>
              <li
                className={`h-14 px-5 flex justify-center items-center rounded-t-md font-semibold ${
                  currentTab === Tabs.Top_Loser && 'bg-primary'
                }`}
                onClick={() => setCurrentTab(Tabs.Top_Loser)}
              >
                Top Loser
              </li>
            </ul>
            <ul
              role='button'
              className='rounded-full bg-bgPrimary flex divide-x py-2 divide-gray-600'
            >
              <li className='px-5'>Day</li>
              <li className='px-5'>Week</li>
              <li className='px-5'>Year</li>
            </ul>
          </div>
          <table className='table-auto  border-collapse my-5'>
            <thead>
              <tr className='h-12 text-green-500 border-b border-gray-600 text-xs sm:text-sm md:text-base'>
                <th className=''>Order.</th>
                <th className=''>Coins</th>
                <th className=''>Current Price (TH)</th>
                <th className=''>Volumn</th>
                <th className=''>Change Rate %</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i.toString()} className='h-12 text-center text-sm md:text-base'>
                  <td>{i + 1} .</td>
                  <td>ETH</td>
                  <td>3,000</td>
                  <td>30</td>
                  <td>13 %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
