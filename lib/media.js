export function getStrapiMedia(media) {
    let imageUrl = "";
    if (!media) {
        return;
    } else if (typeof media === 'object') {
        imageUrl = `${process.env.NEXT_PUBLIC_URL}${media.src}`;
    } else {
        imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_SERVER}${media}`;
    }
    return imageUrl;
}