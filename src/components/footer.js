import React, { useState, useEffect } from 'react';
import '../scss/footer.scss';

function Footer() {
const [pun, setPun] = useState('Whatever you do, don\'t copy pasta.')
const [data, setData] = useState([])

const url = 'https://cdn.contentful.com/spaces/i400pneoa60x/environments/master/entries?access_token=tqdo3TnhYgSsLQukoxBUvQQj_3vHkJRKG2_TpD-fVJo'

useEffect(()=> {fetch(url)
	.then((res)=>res.json())
	.then((data)=>setData(data))
	}, [] )

let arr = data.items

useEffect(()=> {
if (Array.isArray(arr)) {
	let index = arr[Math.floor(Math.random() * arr.length)];
	let newPun = index.fields.pun;
	console.log('this is newPun:', newPun);
	setPun(newPun);
 }
})


	return <div className='footer'>{pun}</div>;
}

export default Footer;
