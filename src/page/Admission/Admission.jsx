import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import { Controller, useForm } from 'react-hook-form';
import { imageUpload } from '../../api/imageUpload/imageUpload';
import { AuthContext } from '../../Context/AuthProvider';
import DateInput from './DateInput';
import './admission.css'
import { Store } from 'react-notifications-component';

const Admission = () => {
  const { user } = useContext(AuthContext)
  const { theme } = useContext(ThemeContext)
  const [showCollege, setShowCollege] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset, control } = useForm();
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const collegeName = [
    {
      id: "01",
      name: "Sonarga University"
    },
    {
      id: "02",
      name: "Asia University"
    },
    {
      id: "03",
      name: "brack University"
    },
    {
      id: " 04",
      name: "United University"
    },
    {
      id: "05",
      name: "University of Dhaka"
    },
    {
      id: "06",
      name: "BUET University"
    }
  ]
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const formData = new FormData();
      formData.append('image', data.image[0]);
  
      const imgResponse = await imageUpload(formData);
      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const {
          name,
          Candidate_email,
          Candidate_name,
          date,
          phone_number,
          address,
        } = data;
        const admission = {
          name,
          Candidate_email,
          Candidate_name,
          date,
          imgURL,
          phone_number,
          address,
        };
        console.log(admission);
  
        const res = await fetch(`https://uni-booker-server-ghru.vercel.app/choice`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(admission), // Use admission instead of user here
        });
        // Handle the response from the server if needed
        if (res.ok) {
          Store.addNotification({
            title: "Booking successfully",
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
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`w-[80%] mx-auto mt-8 mb-4 ${!theme ? 'text-white' : ''}`}>
      <div className=' h-8  bg-accent'>
        <h4>improtant notice here</h4>
      </div>
      <ul className={`p-4 flex flex-col items-center justify-start ${!theme ? 'bg-[#1D293A]' : ''}`}>
        {
          collegeName.map((college) => <li onClick={() => setShowCollege(college?.name)} className='p-2 cursor-pointer' key={college.id} ><a href="#my-modal-2">{college.name}</a></li>)
        }
      </ul>
      <div className={`${!theme ? 'bg-[#1D293A]' : ''}`}>
        <div className="modal" id="my-modal-2">
          <div className={`modal-box ${!theme ? 'bg-[#1D293A]' : ''}`}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" ><a href="#">✕</a></button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold text-white">Course Name*</span>
                </label>
                <input type="text" placeholder="Class Name" value={showCollege}
                  readOnly
                  {...register("name", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full text-accent" />
              </div>
              <div className="flex my-4">
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text font-semibold text-white">Candidate Name*</span>
                  </label>
                  <input type="text" placeholder="Candidate name"
                    {...register("Candidate_name", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full text-accent" />
                </div>
                <div className="form-control w-full ml-4">
                  <label className="label">
                    <span className="label-text font-semibold text-white">Candidate Phone Number*</span>
                  </label>
                  <input type="number" {...register("phone_number", { required: true })} placeholder="Type here" className="input input-bordered w-full text-accent " />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="date">Date of birth:</label>
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: 'Date is required' }}
                  render={({ field }) => (
                    <DateInput
                      id="date"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
              <div className="form-control w-full my-4">
                <label className="label">
                  <span className="label-text text-white">Image*</span>
                </label>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold text-white">Candidate  Email*</span>
                </label>
                <input type="text" placeholder="Candidate  email" 
                  {...register("Candidate_email", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full text-accent " />
              </div>
              <div>
              <label className="label">
                  <span className="label-text font-semibold text-white">Candidate  Address*</span>
                </label>
                <textarea type="text" {...register("address", { required: true })} className="textarea w-full text-accent" placeholder="Your Address Here"></textarea>
              </div>
              <input className="btn btn-sm mt-4 text-white bg-accent w-full mb-3" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admission