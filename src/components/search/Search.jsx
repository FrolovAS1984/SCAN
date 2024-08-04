import "./Search.css";

import DOCUMENT from "../../images/document.svg"
import FOLDERS from "../../images/folders.svg"
import LOOP from "../../images/loop.svg"
import SearchINN from "./searchINN/SearchINN.jsx";
import {useEffect , useState} from "react";
import Tonality from "./tonality/Tonality.jsx";
import DocumentCount from "./documentCount/DocumentCount.jsx";
import DateInput from "./dateInput/DateInput.jsx";
import CheckBox from "./checkBox/CheckBox.jsx";
import {useNavigate} from "react-router-dom";


function Search() {
    const navigate = useNavigate();

    const [companyINN, setCompanyINN] = useState('');
    const [tonality, setTonality] = useState('Любая');
    const [documentCount, setDocumentCount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate , setEndDate] = useState( '' );
    const [checkboxStates , setCheckboxStates] = useState( {
        maxCompleteness : false ,
        businessMentions : false ,
        mainRole : false ,
        riskFactorsOnly : false ,
        includeMarketNews : true ,
        includeAnnouncements : true ,
        includeNewsSummaries : true ,
    } );


    const [isFormValid, setIsFormValid] = useState(false);
    useEffect ( () => {

        const isValid = companyINN && documentCount && startDate && endDate;
        setIsFormValid ( isValid );
    } , [companyINN , documentCount , startDate , endDate , checkboxStates] );

    const handleCheckboxChange = (event) => {
        const { name , checked } = event.target;
        setCheckboxStates( prevState => (
            {
                ...prevState ,
                [name] : checked ,
            }) );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let apiTonality;
        switch (tonality) {
            case 'Любая':
                apiTonality = 'any';
                break;
            case 'Позитивная':
                apiTonality = 'positive';
                break;
            case 'Негативная':
                apiTonality = 'negative';
                break;
            default:
                apiTonality = 'any';
        }
        if (isFormValid) {

            const searchParams = {
                issueDateInterval : {
                    startDate : `${startDate}T00:00:00+03:00` ,
                    endDate : `${endDate}T23:59:59+03:00`
                } ,
                searchContext : {
                    targetSearchEntitiesContext : {
                        targetSearchEntities : [{
                            type : "company" ,
                            inn : companyINN ,
                            maxFullness : checkboxStates.maxCompleteness ,
                        }] ,
                        onlyMainRole : checkboxStates.mainRole ,
                        tonality : apiTonality ,
                        onlyWithRiskFactors : checkboxStates.riskFactorsOnly ,
                    }
                } ,
                attributeFilters : {
                    excludeTechNews : !checkboxStates.includeMarketNews ,
                    excludeAnnouncements : !checkboxStates.includeAnnouncements ,
                    excludeDigests : !checkboxStates.includeNewsSummaries ,
                } ,
                limit : Number( documentCount ) ,
                sortType : "sourceInfluence" ,
                sortDirectionType : "desc" ,
                intervalType : "month" ,
                histogramTypes : ["totalDocuments" , "riskFactors"]
            };

            console.log( 'Отправка запроса на сервер с данными:' , searchParams );

            navigate( '/result' , { state : { searchParams : searchParams } } );
        } else {
            console.log( 'Форма не валидна, перенаправление не выполнено.' );
        }
    };


        return (
        <section className="container">
            <div>
                <div className="title">Найдите необходимые данные в пару кликов.</div>
                <div className="info">Задайте параметры поиска. <br/>Чем больше заполните, тем точнее поиск</div>
                <form onSubmit={handleSubmit} className="search-form">
                    <div className="left-part-search-form">
                        <SearchINN companyINN={companyINN} setCompanyINN={setCompanyINN}/>
                        <Tonality tonality={tonality} setTonality={setTonality}/>
                        <DocumentCount documentCount={documentCount} setDocumentCount={setDocumentCount}/>
                        <DateInput startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>

                    </div>
                    <div className="right-part-search-form">
                        <CheckBox checkboxStates={checkboxStates} handleCheckboxChange={handleCheckboxChange}/>
                        <div className="right-part-submit-button-block">
                            <button className="button" type="submit" disabled={!isFormValid}>Поиск</button>
                            <p className="star-message">* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div className='imageContainer'>
                    <img className='image1' src={DOCUMENT}/>
                    <img className='image2' src={FOLDERS}/>
                </div>
                <img className='image3' src={LOOP}/>
            </div>

        </section>
    )
}

export default Search;