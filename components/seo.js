import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import { getStrapiMedia } from "lib/media";
import logo from '/assets/images/relia-logo.png';
import { useRouter } from 'next/router';
const Seo = ({ seo }) => {
    const { defaultSeo, siteName } = useContext(GlobalContext).data.attributes;
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo,
    };
    const { asPath } = useRouter()
    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.metaTitle}`,
        // Get full image URL
        ogp: getStrapiMedia(seoWithDefaults.shareImage),
        url: `${process.env.NEXT_PUBLIC_URL}${asPath}`
    };
    // Default Website Schema
    const schemaOrgJSONLD = [
        {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: siteName,
            logo: getStrapiMedia(logo),
            image: getStrapiMedia(defaultSeo.shareImage.data.attributes.src),
            telephone: "+84 972016100",
            email: "sales@reliasoftware.com",
            openingHours: "Mo, Tu, We, Th, Fr",
            hasMap: "https://goo.gl/maps/ZDdntLA4J5dyfJX49",
            address: {
                "@type": "PostalAddress",
                streetAddress: "629 Nguyen Kiem, Ward 9, Phu Nhuan District",
                addressLocality: "Ho Chi Minh City",
                addressCountry: "Vietnam",
            },
            description: defaultSeo.metaDescription,
            url: process.env.NEXT_PUBLIC_URL,
        },
    ]
    // Default article Schema
    if (seoWithDefaults.article) {
        schemaOrgJSONLD.push({
            /* Regular Article Schema */
            "@context": "http://schema.org",
            "@type": "Article",
            author: {
                "@type": "Person",
                name: fullSeo.author || siteName,
            },
            copyrightHolder: {
                "@type": "Person",
                name: "Relia Software",
            },
            copyrightYear: "2020",
            creator: {
                "@type": "Person",
                name: fullSeo.author || siteName,
            },
            publisher: {
                "@type": "Organization",
                name: "Relia Software",
                logo: {
                    "@type": "ImageObject",
                    url: getStrapiMedia(logo),
                },
            },
            description: seo.description,
            headline: seo.title,
            url: fullSeo.url,
            name: seo.title,
            image: {
                "@type": "ImageObject",
                url: fullSeo.ogp,
            },
            datePublished: fullSeo.date || "2020-06-08",
            mainEntityOfPage: fullSeo.url,
        })
    }
    return (
        <Head>
            {
                fullSeo.url && (
                    <meta property="og:url" content={fullSeo.url}></meta>
                )
            }
            {fullSeo.metaTitle && (
                <>
                    <title>{fullSeo.metaTitle}</title>
                    <meta property="og:title" content={fullSeo.metaTitle} />
                    <meta name="twitter:title" content={fullSeo.metaTitle} />
                </>
            )}
            {fullSeo.metaDescription && (
                <>
                    <meta name="description" content={fullSeo.metaDescription} />
                    <meta property="og:description" content={fullSeo.metaDescription} />
                    <meta name="twitter:description" content={fullSeo.metaDescription} />
                </>
            )}
            {fullSeo.ogp && (
                <>
                    <meta property="og:image" content={fullSeo.ogp} />
                    <meta name="twitter:image" content={fullSeo.ogp} />
                    <meta name="image" content={fullSeo.ogp} />
                </>
            )}
            {fullSeo.article ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" />}
            <meta name="twitter:card" content="summary_large_image" />
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,});`,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');`,
                }}
            />
        </Head>
    );
};

export default Seo;