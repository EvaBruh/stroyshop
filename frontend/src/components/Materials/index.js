import '../../normalize.css';
import '../CardProject/CardProject.scss';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import DecorPage from "../DecorPage";
import BuildPage from "../BuildPage";


const Materials = () => {


    return  (
        <div>
            <DecorPage/>
            <BuildPage/>
        </div>
    )
}
export default Materials;