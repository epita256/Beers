import { api } from './api'

export const getBeersForPage = async (params) => {
    try {
        const res = await api.get(`/beers?page=${params}&per_page=8`);
        return res.data?.map(el => (
            {
              id: el.id,
              name: el.name,
              tagline: el.tagline,
              image: el.image_url,
              abv: el.abv,
            }
          ));
    }
    catch (err) {
        throw err;
    }
};

export const getBeerInfo = async (params) => {
    try {
        const res = await api.get(`/beers/${params}`)
        return res.data?.map(el => (
            {
              id: el.id,
              name: el.name,
              tagline: el.tagline,
              image: el.image_url,
              abv: el.abv,
              description: el.description,
              first_brewed: el.first_brewed,
              brewers_tips: el.brewers_tips,
            }
          ));
    }
    catch (err) {
        throw err;
    }
};
