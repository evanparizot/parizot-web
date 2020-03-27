import { createSelector } from "@ngrx/store";
import { AboutState } from ".";
import { selectAbout } from '../about.state';

export const selectAboutProfile = createSelector(
  selectAbout,
  (state: AboutState) => state.profile
);

export const selectProfileExperience = createSelector(
  selectAboutProfile,
  state => state.experience
);

export const selectProfileEducation = createSelector(
  selectAboutProfile,
  state => state.education
);

export const selectProfileCertifications = createSelector(
  selectAboutProfile,
  state => state.certifications
);