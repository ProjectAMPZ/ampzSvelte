'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Cookie = _interopDefault(require('cookie-universal'));
var api = require('./api-9d8f7f34.js');
var app$1 = require('./app-19cb53d9.js');

const cookies = Cookie();
function getCart() {
    const { subscribe, set } = app$1.writable({
        items: [],
        qty: 0,
        subtotal: 0,
        discount: 0,
        total: 0,
        offer_total: 0,
        showCart: false,
        promo: null
    });
    return {
        subscribe,
        fetch: async () => {// This is only to get data from saved cart
            try {
                const data = await api.get('cart', null);
                set(data);
                return data
            }
            catch (e) { }
        },
        add: async (payload) => {
            try {
                const data = await api.post("cart/addE", payload);
                set(data);
                return data
            }
            catch (e) {
                throw e
            }
        },
        setPromo: (data) => {
            set({
                promo: data.details,
                total: data.amount
            });
        },
        showCart: () => {
            return showCart
        },
        setCart: (data) => {
            set({
                items: data.items || [],
                qty: data.qty,
                discount: data.discount || 0,
                subtotal: data.subtotal,
                total: data.total,
                offer_total: data.offer_total
            });
        },
        toggleCart: (payload) => {
            showCart = payload;
        },
        checkout: async ({ paymentMethod, address }) => {
            try {
                let order = await api.post('orders', { address, paymentMethod: paymentMethod || 'COD' });
                const data = await cart.fetch();
                set(data);
                return order
            } catch (e) {
                // console.log('err...', e.toString())
                throw e
            }
        }
    }
}
const cart = getCart();

exports.cart = cart;
