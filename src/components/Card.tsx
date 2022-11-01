import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PAGES_PATHS} from "../utils/constants";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {removeFromFavorites, saveToFavorites} from "../actions";
import {useAppDispatch} from "../hooks";
import {Episode} from "../interfacesAndTypes";

interface Props {
    episode: Episode;
    favorite: boolean;
}

export const Card = (props: Props): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isFavorite, setFavoriteEpisode] = useState<boolean>(false);
    const starStyle = isFavorite ? 'star-icon-favorites' : 'star-icon';


    useEffect(() => {
        if (props.favorite) {
            setFavoriteEpisode(props.favorite);
        }
    }, [props.favorite]);

    const saveOrRemoveFavoriteEpisode = (isFavorite: boolean) => {
        if (isFavorite) {
            setFavoriteEpisode(false)
            dispatch(removeFromFavorites(props.episode))
        } else {
            setFavoriteEpisode(true)
            dispatch(saveToFavorites(props.episode));
        }
    }

    return <div className='card'>
        <img className='card-img-top' src={props.episode.image} alt="Card image cap" onClick={() => {
            navigate(`${PAGES_PATHS.SEASONS}/${props.episode.seasonNumber}/episode/${props.episode.episodeNumber}`);
        }}/>
        <div className="card-body">
            <p className='card-title space-between'>{props.episode.title}
                <FontAwesomeIcon
                    icon={faStar}
                    className={starStyle}
                    onClick={() => saveOrRemoveFavoriteEpisode(isFavorite)}/>
            </p>
            <p className='card-title'>Season {props.episode.seasonNumber} - Episode {props.episode.episodeNumber} -
                Rating {props.episode.imDbRating} / 10</p>
            <p className='plot-summary'>Plot summary: {props.episode.plot}</p>
        </div>
    </div>
};
