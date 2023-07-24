import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Errorpage = () => {
    const {logOut} = useContext(AuthContext)
    return (
        <>{
            logOut() && 
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <span className='border-8 border-dashed text-primary w-20 h-20 rounded-full animate-spin border-primary'>
                .......
                .......
                .......
                </span>
               <p className='text-3xl'>Not Found</p>
                 <Link to="/" className=" border border-primary px-8 py-3 font-semibold rounded-full ">Back to homepage</Link>
            </div>
        </section>
        }
        </>
    );
};

export default Errorpage;