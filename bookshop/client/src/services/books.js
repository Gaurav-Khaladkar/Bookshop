import axios from "axios";
import { baseUrl } from "./apiconfig";


function getConfig() {
	const user = JSON.parse(sessionStorage.getItem("user"));
	let config = {
		headers: {}
	};
	if (user && user.token) {
		config.headers.Authorization = `Bearer ${user.token}`;
	}
	return config;
}


export async function getCategories() {
	const url = `${baseUrl}/books/categories`;
	const resp = await axios.get(url, getConfig());
	console.log(resp)
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	console.log(data)
	return data;
}


export async function getBooksByCategory(category) {
	const url = `${baseUrl}/books/bycategory/${category}`;
	const resp = await axios.get(url);
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	return data;
}



export async function getAllBooks() {
	const url = `${baseUrl}/books`;
	const resp = await axios.get(url, getConfig());
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	return data;
}
