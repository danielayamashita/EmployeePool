import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import users from "../reducers/users";
import authedUser from "../reducers/authedUser";
import pools from "../reducers/pools";
import detailPool from "../reducers/detailPool"



let users_ = {
  sarahedo: {
    id: 'sarahedo',
    password:'password123',
    name: 'Sarah Edo',
    avatarURL: "/images/sarahedo.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password:'abc321',
    name: 'Tyler McGinnis',
    avatarURL: "/images/tylermcginnis.png",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  mtsamis: {
    id: 'mtsamis',
    password:'xyz123',
    name: 'Mike Tsamis',
    avatarURL:"/images/mtsamis.png",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  zoshikanlu: {
    id: 'zoshikanlu',
    password:'pass246',
    name: 'Zenobia Oshikanlu',
    avatarURL: "/images/zoshikanlu.png",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
    },
    questions: [],
  }
}

var authedUser_ = "mtsamis";

var detailPool_ = {
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'Build our new application with Javascript',
  },
  optionTwo: {
    votes: [],
    text: 'Build our new application with Typescript'
  }
}


export const store = configureStore({
  reducer: combineReducers({
    users,
    authedUser, 
    pools,
    detailPool,
  }),
  users: users_,
  authedUser: authedUser_,
  detail: detailPool_,
});
