import Card from "../UI/Card"

const WorkerList = ({workers,setWorkers}) => {

  const DeleteWorker=(id)=>
    {
      setWorkers(workers.filter((item)=> item.id !==id));
    }


  console.log(workers)
  return (
    <Card>
      <ul>
        <li className="flex justify-between pl-8 pr-8 p-2">
          <span className="font-medium">İsim</span>
          <span className="font-medium">Maaş</span>
        </li>
        {workers.map((worker)=>(<li className="flex justify-between
         cursor-pointer hover:shadow-xl pl-8 pr-8  transition-shadow"
         key={worker.id}
         onClick={()=>DeleteWorker(worker.id)}
         >
          <span className="text-teal-700  font-medium">{worker.name}</span>
          <span className="text-teal-700  font-medium">{worker.wage}</span>
        </li>))}
      </ul>
    </Card>
  )
}

export default WorkerList