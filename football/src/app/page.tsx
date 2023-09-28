import Image from 'next/image'
import Status from './components/Status'
import { getMatchesFootball, getMatchesFootballFinished } from "./api"

export default async function Home() {
  const getDatas = await getMatchesFootball()
  const getDatasFinished = await getMatchesFootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  const nd = new Date()
  const dateConvert = nd.toDateString()

  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className='flex justify-between items-center md-4 md:mb-2'>
        <h1 className='text-md md:text-xl font-bold text-sky-900'>MATCHES</h1>
        <div className='px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm'>
          <p>{dateConvert}</p>
        </div>
      </div>
      <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
