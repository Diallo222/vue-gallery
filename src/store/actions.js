import axiosClient from "../config/axiosClient";

export const getImages = async ({ commit, state }, payload) => {
    state.loading = true;
  
    if (payload.query !== state.query) {
      state.page = 1; 
    } else {
      state.page++;
    }

    try {
      commit("setLoading", true);
      const response = await axiosClient.get("/search/photos", {
        params: {
          query: payload.query !== state.query ? payload.query : state.query,
          per_page: state.perPage,
          page: state.page,
          order_by: state.sort,
        },
      });
  
      if (payload.query !== state.query) {
        commit("setQuery", payload.query);
        commit("setImages", response.data.results);
      } else {
        commit("setImages", state.images.concat(response.data.results));
      }
      commit("setTotal", response.data.total);
      commit("setTotalPages", response.data.total_pages);
      commit("setLoading", false);
    } catch (error) {
      console.error("Error fetching images:", error);
      commit("setError", error);
      commit("setLoading", false);
    }
  };

  export const addToFavorites = ({ commit , state }, payload) => {    
    if (state.favorites.find((favorite) => favorite.id === payload.image.id)) {
      commit(
        "setFavorites",
        state.favorites.filter((favorite) => favorite.id !== payload.image.id)
      );
      localStorage.setItem(
        "favorites",
        JSON.stringify([...state.favorites])
      );
      return;
    }
    commit("setFavorites", [...state.favorites, payload.image]);
    localStorage.setItem(
      "favorites",
      JSON.stringify([...state.favorites])
    );
  };