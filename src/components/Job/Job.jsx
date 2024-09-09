import React from 'react';
import { MdOutlineAddLocationAlt} from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id,logo,job_title, company_name, remote_or_onsite, location,job_type, salary }= job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {job_title} </h2>
    <p> {company_name} </p>
    <div className='' >
      <button className='px-5 mr-4 gap-4 py-2 font-extrabold border rounded border-[#7E90FE] ' > {remote_or_onsite} </button>
      <button  className='px-5 mr-4 gap-4 py-2 font-extrabold border rounded border-[#7E90FE] '  > {job_type} </button>
    </div>
    <div className='flex ' >
       <h2 className='flex mr-3 ' >  <MdOutlineAddLocationAlt className='text-xl mr-2 ' /> {location} </h2>
       <h2 className='flex' > <TbCurrencyDollar className='text-xl  ' ></TbCurrencyDollar> {salary} </h2>
    </div>
    <div className="card-actions  ">
      <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... btn-primary">View Details</button> </Link>
     
     
    </div>
  </div>
</div>
    );
};

export default Job;