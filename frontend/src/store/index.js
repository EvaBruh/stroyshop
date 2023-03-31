import {configureStore} from "@reduxjs/toolkit";
import {modalReducer} from "./slices/modalSlice";
import {modalApi} from "./api/modulApi";
import {cardsApi} from "./api/cardsApi";
import {toolsApi} from "./api/toolsApi";
import {hometlsApi} from "./api/hometlsApi";
import {gardenApi} from "./api/gardenApi";
import {decorApi} from "./api/decorApi";
import {buildApi} from "./api/buildApi";
import {pdfApi} from "./api/pdfApi";
import {jobApi} from "./api/jobApi";
import {carouselApi} from "./api/carouselApi";
import {productsApi} from "./api/productsApi";


export const index = configureStore({
    reducer: {
        modal: modalReducer,
        [modalApi.reducerPath]: modalApi.reducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
        [hometlsApi.reducerPath]: hometlsApi.reducer,
        [toolsApi.reducerPath]: toolsApi.reducer,
        [gardenApi.reducerPath]: gardenApi.reducer,
        [decorApi.reducerPath]: decorApi.reducer,
        [buildApi.reducerPath]: buildApi.reducer,
        [pdfApi.reducerPath]: pdfApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [carouselApi.reducerPath]: cardsApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      modalApi.middleware,
      carouselApi.middleware,
      productsApi.middleware,
      cardsApi.middleware,
      toolsApi.middleware,
      hometlsApi.middleware,
      gardenApi.middleware,
      decorApi.middleware,
      buildApi.middleware,
      jobApi.middleware,
      pdfApi.middleware
    )
})