import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CHAT_ID = 926634969

export const modalApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.telegram.org/bot6246801356:AAHpq8rrhHXBuM97QCLStJ0E5f9hLr3pyb8'
    }),
    endpoints: main => ({
        sendRequest: main.mutation({
            query: ({name, familya, phone}) => {

                const text = `
                Фамилия: ${familya}\n
                 Имя: ${name}\n
                  Телефон: ${phone}\n
                    
                     `;

                return `sendMessage?chat_id=${CHAT_ID}&text=${text}`

            }
        })
    })
})

export const {endpoints, useSendRequestMutation} = modalApi;

