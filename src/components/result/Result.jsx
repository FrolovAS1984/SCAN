import {AUTH_URL} from "../../http/http.js";

import {useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom';


import './Result.css';


import search_results_large_picture from '../../images/search_results_large_picture.svg';
import ResultTable from "./resultTable/ResultTable.jsx";
import ArticleCards from "./articleCards/ArticleCards.jsx";

const SearchResults = () => {
    const location = useLocation ();
    const [isLoading , setIsLoading] = useState ( true );
    const [searchData , setSearchData] = useState ( null );
    const [documentsData , setDocumentsData] = useState ( null );
    const [isError , setIsError] = useState ( false );



    useEffect ( () => {
        const fetchSearchResults = async () => {
            const searchParams = location.state?.searchParams;
            if (!searchParams) {
                console.error ( 'Search parameters are missing.' );
                setIsLoading ( false );
                return;
            }

            setIsLoading ( true );
            setIsError ( false );

            try {

                const histogramResponse = await fetch ( `${AUTH_URL}/objectsearch/histograms` , {
                    method : 'POST' ,
                    headers : {
                        'Content-Type' : 'application/json' ,
                        'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                    } ,
                    body : JSON.stringify ( searchParams ) ,
                    credentials : 'omit' ,
                } );

                if (!histogramResponse.ok) {
                    throw new Error ( `HTTP error! status: ${histogramResponse.status}` );
                }

                const histogramData = await histogramResponse.json ();

                const publicationIdsResponse = await fetch ( `${AUTH_URL}/objectsearch` , {
                    method : 'POST' ,
                    headers : {
                        'Content-Type' : 'application/json' ,
                        'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                    } ,
                    body : JSON.stringify ( searchParams ) ,
                    credentials : 'omit' ,
                } );

                if (!publicationIdsResponse.ok) {
                    throw new Error ( `HTTP error! status: ${publicationIdsResponse.status}` );
                }

                const publicationIdsData = await publicationIdsResponse.json ();
                const publicationIds = publicationIdsData.items.map ( item => item.encodedId );

                console.log ( "количество публикаций:" , publicationIds.length );

                // Запрос на получение содержимого документов по их ID
                const documentsResponse = await fetch ( `${AUTH_URL}/documents` , {
                    method : 'POST' ,
                    headers : {
                        'Content-Type' : 'application/json' ,
                        'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                    } ,
                    body : JSON.stringify ( { ids : publicationIds } ) ,
                    credentials : 'omit' ,

                } );


                if (!documentsResponse.ok) {
                    throw new Error ( `HTTP error! status: ${documentsResponse.status}` );
                    // console.log ( "количество полученных id публикаций:" , publicationIds.length );
                }

                const documentsData = await documentsResponse.json ();
                setSearchData ( histogramData );
                setDocumentsData ( documentsData );
            } catch (error) {
                console.error ( "Ошибка при выполнении запроса:" , error.message );
                setIsError ( true );
            } finally {
                setIsLoading ( false );
            }
        };

        fetchSearchResults ();

    } , [JSON.stringify ( location.state?.searchParams )] );


    return (
        <div className="search-results-content">
            {isLoading && (
                <>
                    <div className="search-results-title-block">
                        <div className="search-results-title-text">
                            <h1 className="h1-search-results-page">Ищем. Скоро будут результаты</h1>
                            <p className="p-search-results-page-title-block">Поиск может занять некоторое время, просим
                                сохранять терпение.</p>
                        </div>
                        <img className="search-results-large-picture" src={search_results_large_picture}
                             alt="Search results picture"/>
                    </div>
                    <ResultTable searchData={searchData} isLoading={isLoading} setIsLoading={setIsLoading}/>
                </>
            )}

            {!isLoading && isError && (
                <>
                    <ResultTable searchData={searchData} isLoading={isLoading} setIsLoading={setIsLoading}
                                         isError={isError}/>
                </>
            )}

            {!isLoading && !isError && (
                <>
                    <ResultTable searchData={searchData} isLoading={isLoading} setIsLoading={setIsLoading}
                                         isError={isError}/>
                    <ArticleCards documentsData={documentsData}/>
                </>
            )}
        </div>
    );
}

export default SearchResults;
