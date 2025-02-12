import React from 'react'
import Button from './Button'
import Card from './Card'

const ErrorModal = (props) => {
    const {onConfirm,error}=props;
    const {title,message}=error
    return (
        <div className='error-modal'>
            <div className='backdrop-blur-sm bg-white/30 top-0 fixed w-screen h-screen' onClick={onConfirm}></div>
            <Card className="w-[36rem] z-20">
                <header className='bg-red-600 ml-4 mr-4 mt-4 p-3 rounded-lg text-xl relative bottom-4 text-white'>{title}</header>
                <section className='ml-4 mr-4 mt-4 p-3 rounded-lg text-xl relative bottom-4'>{message}</section>
                <footer className='flex justify-end mr-6'>
                    <Button onClick={onConfirm} className="w-55">Tamam</Button>
                </footer>
            </Card>

        </div>
    )
}

export default ErrorModal