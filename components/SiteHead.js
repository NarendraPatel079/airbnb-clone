import Head from 'next/head';

function SiteHead(props) {
    return (
        <Head>
            <title>{props?.siteTitle || "Airbnb Clone"}</title>
            <link rel="icon" href="/airbnb_favicon.ico" />
        </Head>
    )
}

export default SiteHead;