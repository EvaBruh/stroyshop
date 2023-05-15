import React from "react";


const SimpleMap = ({ center, zoom, markers}) => {

    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8ced92b014462069987a2c4612d65c508e11f09623ce8afa48ddf3cac47fc08c&amp;source=constructor"
            width="585" height="494" frameBorder="0"></iframe>
)
}


export default SimpleMap;