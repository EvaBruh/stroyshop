import React from "react";


const SimpleMap = ({ center, zoom, markers}) => {

    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f164c1660eced123104680eca30bd7c5ae25701b28a3a3a777c0a06f06d3788&amp;source=constructor"
            width="585" height="494" frameBorder="0"></iframe>
            );
};


export default SimpleMap;