import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddWorker = (props) => {

    const [name, setName] = useState("");
    const [wage, setWage] = useState("");
    const [error, setError] = useState();

    const WorkerNameHander = (e) => {
        setName(e.target.value)
    }
    const WorkerWageHandler = (e) => {
        setWage(e.target.value)
    }
    console.log(props.workers)



    const minimumWage = 5000
    const SubmitHandler = (e) => {

        if (name.trim().length === 0 || wage.trim().length === 0) {
            setError(
                {
                    title: "İsim Alanı Zorunludur!",
                    message: "Lütfen bir isim giriniz."
                }
            )
        }
        if (wage < minimumWage) {
            setError({
                title: "Maaş Alanı Zorunludur!",
                message: `Lütfen ${minimumWage} 'Den büyük bir maaş giriniz`
            })
        }
        e.preventDefault();
        setName("");
        setWage("");

        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: name,
                wage: wage
            },
            ...prevState
        ]);

        console.log(name, wage)
    }
    const ErrorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal onConfirm={ErrorHandler} error={error} />}
            <Card>
                <form onSubmit={SubmitHandler} className='flex flex-col justify-center items-center gap-5'>
                    <label className='font-bold' htmlFor="name">Çalışan İsmi</label>
                    <input
                        className='max-w-[30rem] w-full mx-auto text-center border p-2'
                        type="text" placeholder='Çalışan ismi Giriniz'
                        id='name'
                        onChange={WorkerNameHander}
                        value={name}
                    />
                    <label htmlFor="wage" className='font-bold'>Maaş Miktarı</label>
                    <input
                        className='max-w-[30rem] w-full text-center border p-2'
                        type="number" placeholder='Maaş Miktarını Giriniz'
                        id='wage'
                        onChange={WorkerWageHandler}
                        value={wage}
                    />
                    <Button addClass="font-bold">Ekle</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddWorker