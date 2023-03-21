import { useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import './cabinet.scss';

function Cabinet() {
    const [res, setRes] = useState("");
    const api = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/");
                setRes(response.data.response);
            } catch {
                setRes("Something wrong!");
            }
        };
        fetchData();
    }, []);

    return (
    <div className="personal-page">
        <div className="personal-page__title">
            <h1>Личный кабинет</h1>
        </div>
        <div className="personal-page__content">
            <p> {res}</p>
        </div>
        <div className="personal-page__content">
            <p> {res}</p>
        </div>
    </div>
    );
}

export default Cabinet;