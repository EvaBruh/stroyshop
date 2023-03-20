import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CHAT_ID = -1001798497559

export const modalApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.telegram.org/bot5965019765:AAFsUZBeQwdfmvnEblKs9E3tvohS6UInOeM'
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

