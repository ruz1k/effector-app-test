import { createStore, createEvent, createEffect } from "effector";

type Effect = { name: string };

export const fetchUserReposFx = createEffect(async ({ name }: Effect) => {
  const url = `https://api.github.com/users/${name}/repos`;
  const req = await fetch(url);
  return req.json();
});

export const addToList = createEvent<object>();

export const $store = createStore<Array<object>>([])
  .on(fetchUserReposFx?.doneData, (_, item) => item)
  .on(addToList, (state, item) => [...state, item]);
