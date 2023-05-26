import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CHAT_ID = 867798296

export const modalApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.telegram.org/bot6246801356:AAHpq8rrhHXBuM97QCLStJ0E5f9hLr3pyb8/sendmessage'
    }),
    endpoints: main => ({
        sendRequest: main.mutation({
            query: ({name, familya, phone}) => {

                const text = `
                Фамилия: ${familya}\n
                 Имя: ${name}\n
                  Телефон: ${phone}\n`;

                const chatId = -867798296; // Замените <YOUR_CHAT_ID> на фактический идентификатор общего чата
                const endpoint = `sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
                const body = { chat_id: chatId, text };

                return { endpoint, method: 'POST', body }; // Используйте метод 'GET' для отправки запроса
            },
        }),
    }),
});

export const {endpoints, useSendRequestMutation} = modalApi;

