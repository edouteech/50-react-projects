import { matchesType } from "../types"
import Competition from "./Competition"
import Matches from "./Matches"

const LeagueTable = ({data}:{data:matchesType}) => {
  return (
    <div className='pb-3 mb-2 rounded-md flex flex-col bg-slate-100 hover:bg-slate-300'>
        <Competition className="" data={data} />
        <Matches data={data} />
    </div>
  )
}

export default LeagueTable