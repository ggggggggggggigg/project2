import { useState } from 'react'
import './App.css'


function App() {
  const [number, setnumber]=useState(0)
  const [img, setimg]=useState(0)
  const [set, setset]=useState()
  const [imgggg, setimgggg]=useState(<img className='img' src="https://m.media-amazon.com/images/I/71JcvdqYBTL._AC_SY625_.jpg"/>)
  const [comment, setcomment]=useState(false)
  const [input, setinput]=useState(false)

  const minus = () => {
   if(number > 0) {
    setnumber((number) => number - 1)
   }else{
    setnumber(0)
   }
  }

  const img1 = () => {
    setimg(1)
  }
  const img2 = () => {
    setimg(2)
  }
  const img3 = () => {
    setimg(3)
  }
  const img4 = () => {
    setimg(4)
  }
  const settt = () => {
    setset(number)
  }
 

 if(img === 1) {
   setimgggg(<img className='img' src="https://m.media-amazon.com/images/I/71JcvdqYBTL._AC_SY625_.jpg"/>)
  }
  if(img===2) {
    setimgggg(<img  className='img' src="https://m.media-amazon.com/images/I/81m0CZ01qvL._AC_SY625_.jpg" />)
  }
  if(img===3) {
    setimgggg(<img  className='img' src="https://m.media-amazon.com/images/I/81I43n3dnpL._AC_SY625_.jpg"  />)
  }
  if(img===4) {
    setimgggg(<img  className='img' src="https://m.media-amazon.com/images/I/81rB1ZFPPjL._AC_SY625_.jpg"  />)
  }

  const comments = () => {
    setcomment(true)
  }



  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='container0'>
      <div className='container'>
        <h1>sneakers</h1>
        <div className='container1'>
          <div className='a'>collections</div>
          <div className='a'>men</div>
          <div className='a'>women</div>
          <div className='a'>about</div>
          <div className='a'>contact</div>
        </div>
        <div className='class'>
          <div className='ddddd'>🛒</div>
          <div className='chi'>👤</div>
        </div>
      </div>
      <div className='container2'>
        <div className='container3'>
          {imgggg}
            <div className='container4' >
              <div onClick={img1} className='vvvv'>
              <img  className='simg' src="https://m.media-amazon.com/images/I/71JcvdqYBTL._AC_SY625_.jpg"  />
              </div>
              <div onClick={img2} className='vvvv'>
              <img  className='simg' src="https://m.media-amazon.com/images/I/81m0CZ01qvL._AC_SY625_.jpg" />
              </div>
              <div onClick={img3} className='vvvv'>
              <img  className='simg' src="https://m.media-amazon.com/images/I/81I43n3dnpL._AC_SY625_.jpg"  />
              </div>
              <div onClick={img4} className='vvvv'>
              <img  className='simg' src="https://m.media-amazon.com/images/I/81rB1ZFPPjL._AC_SY625_.jpg"  />
              </div>
            </div>
          </div>
        <div className='container5'>
          <a>sneaker company</a>
          <br />
          <br />
          <h1>fall limited edition sneakers</h1>
          <div className='con'>
              <div>&#11088;</div>
              <div>&#11088;</div>
              <div>&#11088;</div>
              <div>&#11088;</div>

              <div className='xen'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                </svg>
              </div>
              
              <div className='co'>4.2 out of 5 </div>
          </div>
          
          <div>these low-profile sneakers are your perfect casual wear 
          companion.featuring a durable rubber outer sole, they`ll
          withstand everything the weather can offer
          </div>
          <div>
            <div className='c'>
              <h1>125.00$</h1>
              <div className='ch'>50%</div>
            </div>
            <div className='chh'>250.00$</div>
          </div>
          <div className='ca'>
            <div className='x'>
            <div className='cc' onClick={minus}>
                &#8722; 
              </div>
              <div className='cca'>{number}</div>
              <div className='ccc' onClick={() => setnumber((number) => number + 1)}>
                &#43;
              </div>
            </div>
            <div onClick={settt} className='cccc'>🛒add to cart</div>
          </div>
        </div>
      </div>
      <div className='ggggg'>
        <h1>customer reviews</h1>
        <div onClick={comments} className='hhhhh'>write a review</div>
      </div>
      <h1>add a review</h1>
      <br />
      <div>overall rating </div>
      <br />
      <div className='zzzz'>
        <div className='xen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        </div>

        <div className='xen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        </div>

        <div className='xen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        </div>

        <div className='xen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        </div>

        <div className='xen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg>
        </div>
      </div>
      <br />
      <div>headline</div>
      <br />
      <input
      type="text"
      onChange={(event) => setinput(event.target.value )}
      ></input>
      <br />
      <br />
      <div>written review</div>
      <br />
      <input
      type='text'
      onChange={(event) => setinput(event.target.value )}
      > </input>
      <div className='fffff'>
        <div className='ttt'>cancel</div>
        <div className='tt'>add</div>
      </div>
    </div>
    </>
  )
}

export default App








    



