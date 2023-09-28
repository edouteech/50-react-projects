import Image from "next/image"
import { matchesType } from "../types"

const Matches = ({data}:{data:matchesType}) => {
    const getDate = new Date(data?.utcDate).toLocaleDateString("en-US", {
        hour: '2-digit', minute: '2-digit'
    })
  return (
    <div className=" px-4 grid grid-cols-3 text-dark">
        <div className="w-full flex items-center">
            <div className="w-[20px] h-[20px] mr-2">
                <Image src={data?.homeTeam?.crest!} alt='img' width={20} height={20} />
            </div>
            <p className="text-sm text-slate-600">{data?.homeTeam?.name}</p>
        </div>
        <div className="px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md">
            {data?.status == 'FINISHED' ? (
                <p className="py-1 text-teal-400 text-xs">{data?.score?.fullTime.home} : {data?.score?.fullTime.away}</p>
            ):(
                <p className="py-1 text-teal-400 text-xs">-- : --</p>
            )}
        </div>
        <div className="w-full flex items-center justify-end">
            <p className="text-sm text-slate-600">{data?.awayTeam?.name}</p>
            <p className="text-sm text-right ml-2">
                <Image src={data?.awayTeam?.crest!} alt={data?.awayTeam?.name!}  width={20} height={20} className="object-cover" />
            </p>
        </div>
    </div>
  )
}

export default Matches