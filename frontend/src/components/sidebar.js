import React from 'react'
import {Link} from 'react-router-dom'

export default function sidebar() {
  return (
    <div className='col-md-1 col-lg-1 col-xl-1 col-sm-1 col-xs-1'>
      <div class="offcanvas offcanvas-start sidebar" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"  aria-modal="true" role="dialog">
      
      <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
          <button type="button" className='btn  btn-danger' data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
          <Link to=''> Art </Link>
      </div>
      </div>
    </div>
  )
}
