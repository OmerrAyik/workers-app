import { useState } from 'react';
import './App.css';
import AddWorker from './components/Workers/AddWorker';
import WorkerList from './components/Workers/WorkerList';

function App() {
  const [workers,setWorkers] = useState([])
  return (
    <div >
      <p className='text-2xl text-white pt-6 text-center'>Maaş Otomasyonu</p>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>

  );
}

export default App;
