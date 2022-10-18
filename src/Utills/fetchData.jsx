export const  exceriseOption =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6520c8da0msh46150d8e072a35bp1388d1jsn92387066c6e9',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}

};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};