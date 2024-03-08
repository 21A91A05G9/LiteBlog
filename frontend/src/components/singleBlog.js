import React from 'react';

export default function singleBlog(props) {
  return (
    <div className='row mx-4 mt-4'>
      <h2 className='my-4'>{props.title}</h2>
      <div className='singleimg  col-md-5'>
<<<<<<< HEAD
        <img className='col-12' src={`http://localhost:5001/${props.image}`} alt="" />
=======
        <img className='col-12' src={`https://lite-blog-backend.vercel.app/${props.image}`} alt="" />
>>>>>>> 6b9b978d5477e6cc07086e79f136e3980416940c
      </div>
      <div className='col-md-6'>
        <div className='single-des my-1'>{props.des}</div>
        <p className='single-para container my-1'><i>written by {props.by}</i></p>
      </div>
    </div>
  );
}
