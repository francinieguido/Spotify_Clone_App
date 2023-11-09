import { Price } from "@/types";

// Allows changing url when the project is deployed
export const getURL = () => {

    // URL site in production env
    let url = process.env.NEXT_PUBLIC_SITE_URL ??
        // URL automatically set by Vercel
        process.env.NEXT_PUBLIC_VERCEL_URL ??
        'http://localhost:3000/';

    // Including `https://` when there's no localhost
    url = url.includes('http') ? url : `https://${url}`;

    //Including trailing `/`
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
};

// Fetch library
export const postData = async ({
    url,
    data
  }: {
    url: string;
    data?: { price: Price };
  }) => {

    //Check when POSTING
    console.log('posting,', url, data);
  
    const res: Response = await fetch(url, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify(data)
    });
  
    if (!res.ok) {
      console.log('Error in POST', { url, data, res });
      throw Error(res.statusText);
    }
  
    return res.json();
  };
  
  // DateTime helper for Stripe
  export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
    t.setSeconds(secs);
    return t;
  };