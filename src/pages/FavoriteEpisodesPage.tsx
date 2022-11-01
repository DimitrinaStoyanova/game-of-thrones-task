import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {StoreState} from "../reducers";
import {Episode} from "../interfacesAndTypes/seasonsInterfaces";
import {Card} from "../components/Card";
import {isEmptyArray} from "../utils/commonUtils";
import {getFavoriteEpisodesFromLocalStorage} from "../actions";
import {useTranslation} from "react-i18next";

export const FavoriteEpisodesPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const favoriteEpisodes = useAppSelector((state: StoreState) => state.seasonsData.favorites);
    const [episodesLoadedFromLocalStorage, setLoadedEpisodes] = useState(false);

    useEffect(() => {
        if(isEmptyArray(favoriteEpisodes) && !episodesLoadedFromLocalStorage) {
            dispatch(getFavoriteEpisodesFromLocalStorage()).then(resp => {
                setLoadedEpisodes(true)
            })
        }

        return() => {
            setLoadedEpisodes(false)
        }
    },[favoriteEpisodes]);

    return <div className='seasons-form'>
        <div className='cards-container mt-m'>
            {!isEmptyArray(favoriteEpisodes) ? favoriteEpisodes.map((episode: Episode) => {
                return <Card
                    episode={episode}
                    favorite={true}
                />
            }) : <div>{t('favoriteEpisodesPage.noEpisodesMsg')}</div>}
        </div>
    </div>
};
