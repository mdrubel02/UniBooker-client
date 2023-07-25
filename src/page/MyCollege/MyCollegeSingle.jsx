import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider';
import { useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component';

const MyCollegeSingle = ({ data }) => {
    const { theme } = useContext(ThemeContext)
    const { name, imgURL, date, Candidate_name, Candidate_email } = data;
    const [updateStatus, setUpdateStatus] = useState('')
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const { reviw, rating } = data;
        const reviws = {
            reviw,
            rating,
            image: updateStatus?.imgURL,
            name: updateStatus?.Candidate_name,
            uni_name: updateStatus?.name
        }
        console.log(reviws)

        const res = await fetch(`https://uni-booker-server-ghru.vercel.app/reviws`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviws), // Use admission instead of user here
        });
        // Handle the response from the server if needed
        if (res.ok) {
            Store.addNotification({
                title: "Revie added successfully",
                type: "success",
                container: 'top-center',
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            })
        } else {
            console.log('Error submitting data:', res.statusText);
        }
        reset()
    }
    return (
        <div>
            <div className={`card rounded-xl shadow-2xl h-[300px] ${!theme ? 'bg-[#1D293A]' : ''}`}>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex items-center gap-4'>
                        <img src={imgURL} alt="user" className='w-[40px] h-[40px] object-cover rounded-full ml-2' />
                        <small className='text-white'>{Candidate_name}</small>
                    </div>
                    <p>Date of Birth: {date}</p>
                    <p>Email: {Candidate_email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-accent">
                            <a onClick={() => setUpdateStatus(data)} href="#my-modal-2">Reviw</a>
                        </button>
                    </div>
                </div>
            </div>
            {/* todo */}
            <div>
                <div className="modal" id="my-modal-2">
                    <div className={`modal-box ${!theme ? 'bg-[#1D293A]' : ''}`}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-1 sm:mb-2">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Comment Here*</span>
                                    </label>
                                    <textarea type="text" {...register("reviw", { required: true })} className="textarea w-full text-accent" placeholder="Your Comment"></textarea>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">rating*</span>
                                    </label>
                                    <input type="number" {...register("rating", { required: true })} placeholder="rating here" className="input input-bordered w-full text-accent " />
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div className="modal-action">
                                        <button className="btn btn-sm bg-accent border-0" type="submit">Submit</button>
                                        <button className='btn btn-sm  bg-accent border-0'><a href="#" className="">Cancel</a></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCollegeSingle