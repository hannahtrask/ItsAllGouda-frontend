import React, { useState, useEffect } from 'react';
import '../scss/footer.scss';

function Footer() {
//instantiating state to randomize puns
const [pun, setPun] = useState('Whatever you do, don\'t copy pasta.')

//url for fetch call
const url = 'https://cdn.contentful.com/spaces/i400pneoa60x/environments/master/entries?access_token=tqdo3TnhYgSsLQukoxBUvQQj_3vHkJRKG2_TpD-fVJo'

// //this function will get a pun
// const getPun = pun => {
// 	fetch(url)
// 	.then((res)=>res.json())
// 	.then((data)=>setPun(data))
// }

// //this will run on mount
// useEffect(()=>{
// 	getPun()
// }, [])

	return <div className='footer'>{pun}</div>;
}

export default Footer;
