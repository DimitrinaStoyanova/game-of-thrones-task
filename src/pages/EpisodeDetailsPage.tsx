import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks";
import {useParams} from "react-router-dom";
import {getEpisodesBySeason} from "../actions";
import {Episode} from "../interfacesAndTypes";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

export const EpisodeDetailsPage = (): JSX.Element => {
    let {id, episodeId} = useParams();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [selectedEpisode, setSelectedEpisode] = useState<Episode>();

    useEffect(() => {
        if (id) {
            dispatch(getEpisodesBySeason(id)).then(resp => {
                const episode = resp.episodes.filter(episode => episode.episodeNumber == episodeId)[0];
                setSelectedEpisode(episode)
            })
        }
    }, [id])

    return <div className='episode-container align-center'>
        <div className='episode-info-container'>
            <div className='image-container'>
                {selectedEpisode?.image ?
                    <img src={selectedEpisode.image} width={500}/> : null}
            </div>
            <div className='info-container'>
                <div className='main-info'>
                    <div>
                        <h4>{selectedEpisode?.title}</h4>
                        <p className='gold-text'>
                            {
                                t('common.episodeAired', {
                                    seasonNumber: selectedEpisode?.seasonNumber,
                                    episodeNumber: selectedEpisode?.episodeNumber,
                                    released: selectedEpisode?.released,
                                })
                            }
                        </p>
                    </div>
                    <div className='rating-container'>
                        <p className='mb-0'>{t('episodeDetailsPage.imDbRating')} </p>
                        <p>
                            <FontAwesomeIcon icon={faStar} className='star-icon'/>
                            <span className='rating'>{selectedEpisode?.imDbRating}</span> / {t('episodeDetailsPage.imDbRatingMax')}
                        </p>
                    </div>
                </div>
                <div className='plot-container mt-m'>
                    <p>{selectedEpisode?.plot}</p>
                </div>
            </div>
        </div>
    </div>
}