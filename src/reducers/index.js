/* @flow */
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import app from './app';
import {place, geocodeResult, sortKey, getPlaceParam, hotels} from './hotel';
import {todos, visibilityFilter} from './todo';

export default combineReducers({
  form,
  app,
  todos,
  visibilityFilter,
  place,
  geocodeResult,
  hotels,
  sortKey,
  getPlaceParam,
});
