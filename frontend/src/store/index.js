import {configureStore} from "@reduxjs/toolkit";
import {modalReducer} from "./slices/modalSlice";
import {modalApi} from "./api/modulApi";
import {cardsApi} from "./api/cardsApi";
import {pdfApi} from "./api/pdfApi";
import {jobApi} from "./api/jobApi";
import {carouselApi} from "./api/carouselApi";
import {projectsApi} from "./api/projectsApi";


export const index = configureStore({
    reducer: {
        modal: modalReducer,
        [modalApi.reducerPath]: modalApi.reducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
        [pdfApi.reducerPath]: pdfApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer,
        [carouselApi.reducerPath]: cardsApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      modalApi.middleware,
      carouselApi.middleware,
      projectsApi.middleware,
      cardsApi.middleware,
      jobApi.middleware,
      pdfApi.middleware
    )
})