import React, {Fragment, useEffect} from 'react';
import {Form} from 'react-final-form';
import { useTranslation } from 'react-i18next';
import {useAppDispatch, useAppSelector} from "../hooks";
import {
    getEpisodesBySeason,
    getEpisodesDataFromLocalStorage,
    getSeasons,
    getSeasonsFromLocalStorage
} from "../actions/index";
import {StoreState} from "../reducers";
import {Episode, SeasonsFields} from "../interfacesAndTypes/seasonsInterfaces";
import {isEmptyArray, isEmptyObject} from "../utils/commonUtils";
import {Card} from "../components/Card";
import {FilterFieldsSection} from "./FilterFieldsSection";
import SeasonBackgroundSrc from '../resources/images/section-img.png';

export const SeasonsPage = (): JSX.Element => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const seasons = useAppSelector((state: StoreState) => state.seasonsData.seasons);
    const filterFields = useAppSelector((state) => state.seasonsData.filterFields);
    const episodesData = useAppSelector((state: StoreState) => state.seasonsData.episodes);

    useEffect(() => {
        dispatch(getSeasonsFromLocalStorage()).then(response => {
            if (response !== null) {
                dispatch(getEpisodesDataFromLocalStorage())
            } else {
                dispatch(getSeasons()).then(resp => {
                    resp.tvSeriesInfo.seasons.map((season, index) => {
                        dispatch(getEpisodesBySeason(season))
                    })
                })
            }
        })
    }, []);

    const renderSearch = () => {
        return <div className='filter-container mb-l'>
                <FilterFieldsSection filterFields={filterFields} />
            </div>
    }

    const renderEpisodes = (season: string) => {
        return episodesData.map((episode: Episode) => {
            if(episode.seasonNumber == season) {
                return <Card
                    episode={episode}
                    favorite={false}
                />
            }
        })
    }

    const renderSeasonEpisodes = (formValues: SeasonsFields) => {
       return !isEmptyObject(formValues) &&  formValues.tvSeriesInfo && !isEmptyArray( formValues.tvSeriesInfo.seasons) ? formValues.tvSeriesInfo.seasons.map((data, index) => {
               return <Fragment>
                   <div id={'season_' + data} className='seasons-container full-width'>
                       <img src={SeasonBackgroundSrc} width={230}/>
                       <div className='top-left'>Season {data}</div>
                   </div>
                   {renderEpisodes(data)}
               </Fragment>
       }) : null;
    }

    return (
        <Fragment>
            <Form<SeasonsFields>
                onSubmit={(formValues) => {}}
                initialValues={seasons}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form id={'seasons-form'} onSubmit={handleSubmit} className='seasons-form'>
                        <div className='fixed-container'>
                            {renderSearch()}
                        </div>
                        <div className='cards-container mt-m'>
                            {renderSeasonEpisodes(values)}
                        </div>
                    </form>
                )}
            />
        </Fragment>
    );
};
