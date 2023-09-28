import { filterLeague } from '@/app/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const page = async () => {
    const getEnglishLeague = await filterLeague('2013')
  return (
    <div className='w-[600px]'>
        {getEnglishLeague.matches.map((data:any) => (
            <div key={data.id}>
                <LeagueTable data={data} />
            </div>
        ))}
    </div>
  )
}

export default page