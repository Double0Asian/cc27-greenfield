/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Izukogen Kenny\'s House Cafe', type: 'restaurant', lat: 35.7288492, lng: 139.7191078},
    {name: 'Doutor Coffee Shop Seibu Ikebukuro-eki', type: 'restaurant', lat: 35.7292019, lng: 139.7117226},
    {name: 'ATELIER de GODIVA Seibu Ikebukuro Store', type: 'restaurant', lat: 35.7293943, lng: 139.7119473},
    {name: 'Caffe Veloce', type: 'restaurant', lat: 35.7251613, lng: 139.7110536},
    {name: 'ANGELINA JAPAN', type: 'shoeStore', lat: 35.7106865, lng: 139.7041571},
    {name: '須藤靴店', type: 'shoeStore', lat: 35.71323110000001, lng: 139.701587},
    {name: 'ORiental TRaffic', type: 'shoeStore', lat: 35.7126688, lng: 139.7041513},
    {name: '岸川・靴店', type: 'shoeStore', lat: 35.7124663, lng: 139.700451},
    {name: '山本靴店', type: 'shoeStore', lat: 35.7122666, lng: 139.6991121},
    {name: '豊田靴店', type: 'shoeStore', lat: 35.71590700000001, lng: 139.6946846},
    {name: 'AKaKuRa', type: 'shoeStore', lat: 35.6340555, lng: 139.7159207},
    {name: 'Rockport', type: 'shoeStore', lat: 35.6344191, lng: 139.7106837},
    {name: 'BROSENT', type: 'shoeStore', lat: 35.6318802, lng: 139.7057666},
    {name: 'リサイクル ブティック MIKI', type: 'shoeStore', lat: 35.625734, lng: 139.71414},
    {name: 'fitfit Atre Meguro', type: 'shoeStore', lat: 35.6344723, lng: 139.7159104},
    {name: 'Kokonoe', type: 'shoeStore', lat: 35.6336047, lng: 139.7099655},
    {name: 'big-b', type: 'shoeStore', lat: 35.6272917, lng: 139.7219756},
    {name: 'シューズラウンジ株式会社 本社', type: 'shoeStore', lat: 35.64213319999999, lng: 139.7134615},
    {name: '十字屋靴店', type: 'shoeStore', lat: 35.6258206, lng: 139.7133574},
    {name: 'Animate Ikebukuro', type: 'bookStore', lat: 35.73114429999999, lng: 139.7154592},
    {name: 'BOOKOFF', type: 'bookStore', lat: 35.7296795, lng: 139.7157691},
    {name: '三省堂書店 池袋本店', type: 'bookStore', lat: 35.7276675, lng: 139.7114816},
    {name: 'Asahiya Bookstore Ikebukuro', type: 'bookStore', lat: 35.7300456, lng: 139.7104443},
    {name: 'Mandarake Ikebukuro', type: 'bookStore', lat: 35.73093100000001, lng: 139.71803},
    {name: 'TSUTAYA 池袋ロサ店', type: 'bookStore', lat: 35.73236139999999, lng: 139.7092514},
    {name: 'Lashinbang Ikebukuro Character Goods Store', type: 'bookStore', lat: 35.730291, lng: 139.717743},
    {name: '明治書店 池袋店', type: 'bookStore', lat: 35.73046650000001, lng: 139.7134335},
    {name: 'タワーレコード 池袋店', type: 'bookStore', lat: 35.7317922, lng: 139.7124188},
    {name: 'Hakudai Book Store', type: 'bookStore', lat: 35.7298564, lng: 139.7072543},
    {name: 'Yutaka', type: 'bookStore', lat: 35.7262673, lng: 139.7118783},
  ]);
};
