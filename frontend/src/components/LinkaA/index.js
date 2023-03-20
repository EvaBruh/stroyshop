import {useLocation} from "react-router-dom";



function LinkA()  {
  const {pathname} = useLocation()

  if (!!pathname.match(/\/tours\//)) {
    return null
  } else {
    return (
      <a href="/tours/" className="header-box__tours">
        ПЕРЕЙТИ НА 3D ТУРЫ
      </a>
    )
  }
}

export default LinkA;