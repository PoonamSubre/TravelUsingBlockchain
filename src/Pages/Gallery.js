import React from 'react'
import Naturephoto from '../images/nature-photographer-29ezCWtMtnM-unsplash.jpg';
import Naturephoto2 from '../images/divyanshi-verma-h3SyJYsqYSo-unsplash.jpg';
import Naturephoto3 from '../images/hadwt-GdXeUZLB66E-unsplash.jpg';
import Naturephoto4 from '../images/nature-photographer-29ezCWtMtnM-unsplash.jpg';
import Naturephoto5 from '../images/prerna-sharma-Lw9WQY9ETVU-unsplash.jpg';
import Naturephoto6 from '../images/sumit-sourav-eSRtxPd9q1c-unsplash.jpg';
import Naturephoto7 from '../images/sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg';
import Naturephoto8 from '../images/vishy-9ttisCSNCOc-unsplash.jpg';
import Naturephoto9 from '../images/akshay-syal-5vDTocCCutE-unsplash.jpg';
import '../CSS/Gallery.css'

const Gallery = () => {
  return (
    <section class="gallery min-vh-100">
		<div class="container-lg">
			<div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
				<div class="col">
					<img src={Naturephoto} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto2} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto3} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto4} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto5} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto6} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto7} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto8} class="gallery-item" alt="Gallery1"></img>
				</div>
				<div class="col">
					<img src={Naturephoto9} class="gallery-item" alt="Gallery1"></img>
				</div>
			</div>
		</div>
	</section>

	
  )
}

export default Gallery
