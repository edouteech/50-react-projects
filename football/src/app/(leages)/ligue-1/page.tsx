import { filterLeague } from '@/app/api'
import LeagueTable from '@/app/components/LeagueTable'

const page = async () => {
    const getEnglishLeague = await filterLeague('Premier League')
  return (
    <div className='w-[600px]'>
        {getEnglishLeague.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data} />
            </div>
        ))}
    </div>
  )
}

export default page