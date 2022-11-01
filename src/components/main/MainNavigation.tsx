import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PAGES_PATHS} from "../../utils/constants";
import NotFoundError from "../../pages/errors/NotFoundError";
import InternalServerError from "../../pages/errors/InternalServerError";
import UnhandledError from "../../pages/errors/UnhandledError";
import {SeasonsPage} from "../../pages/SeasonsPage";
import {ProfilePage} from "../../pages/ProfilePage";
import {EpisodeDetailsPage} from "../../pages/EpisodeDetailsPage";
import {FavoriteEpisodesPage} from "../../pages/FavoriteEpisodesPage";

export const MainNavigation = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path={PAGES_PATHS.HOME} element={<SeasonsPage />} />
        <Route path={PAGES_PATHS.PROFILE} element={<ProfilePage />} />
        <Route path={PAGES_PATHS.SEASONS} element={<SeasonsPage />} />
        <Route path={PAGES_PATHS.EPISODE} element={<EpisodeDetailsPage />} />
        <Route path={PAGES_PATHS.FAVORITE_EPISODES} element={<FavoriteEpisodesPage />} />
        <Route path='/404' element={<NotFoundError />} />
        <Route path='/500' element={<InternalServerError />} />
        <Route path='/unhandled-error' element={<UnhandledError />} />
      </Routes>
    </div>
  );
};
