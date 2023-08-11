import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBaundary from "../errorBaundary/ErrorBaundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                    />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBaundary>
                <RandomChar/>
            </ErrorBaundary>
            <div className="char__content">
                <ErrorBaundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBaundary>
                <div>
                    <ErrorBaundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBaundary>
                    <ErrorBaundary>
                        <CharSearchForm/>
                    </ErrorBaundary>
                </div>
                
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;