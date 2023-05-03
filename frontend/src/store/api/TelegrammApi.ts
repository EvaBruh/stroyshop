import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_TOKEN = '6246801356:AAHpq8rrhHXBuM97QCLStJ0E5f9hLr3pyb8'
const CHAT_ID = -926634969

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.telegram.org/bot${API_TOKEN}/`
})

export const telegramApi = createApi({
  reducerPath: 'tgApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    sendMessage: builder.query({
      query:  ({ email, name, to, se, pyatoe, desyatoe}) => {

        const text = `
           Name: ${name}\n
           Email: ${email}\n
           ${to} ${se} ${pyatoe} ${desyatoe}
        `;

        return `sendMessage?chat_id=${CHAT_ID}&text=${text}`
      }
    })
  })
});

export const { useLazySendMessageQuery } = telegramApi;