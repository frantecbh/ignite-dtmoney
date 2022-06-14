import React from 'react';
import ReactDOM from 'react-dom/client';

import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({

    models: {
        transaction: Model
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'FreeLancer de website',
                    amount: 6000,
                    type: 'deposit',
                    category: 'Dev',
                    createdAt: new Date('2022-02-11 09:00:33')
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    amount: 1100,
                    type: 'withdraw',
                    category: 'Casa',
                    createdAt: new Date('2022-02-17 15:10:33')
                }
            ]
        })
    },


    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            // return [
            //     {
            //         id: 1,
            //         title: 'Transaction 1',
            //         ammount: 400,
            //         type: 'deposit',
            //         categoria: 'Food',
            //         createdAt: new Date()
            //     }
            // ]

            return this.schema.all('transaction')
        })
        this.post('/transactions', (schema, request) => {

            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        })

    }
})




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


