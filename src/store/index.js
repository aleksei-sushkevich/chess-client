import {createStore} from "vuex";
import shapes from "@/store/shapes";
import squares from "@/store/squares";
import game from "@/store/game";
import auth from "@/store/auth";
import settings from "@/store/settings";

const store = createStore({
    modules: {
        shapes,
        squares,
        game,
        auth,
        settings
    }
})

export default store;