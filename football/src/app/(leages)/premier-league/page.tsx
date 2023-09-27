import { filterLeague } from '@/app/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const page = async () => {
    const getEnglishLeague = await filterLeague('2021')
  return (
    <div className='w-[600px]'>
        {getEnglishLeague.matches.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data} />
            </div>
        ))}
    </div>
  )
}

export default page