export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }${"/"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const getPageAPI = async (index, catActive) => {
  let blogs = [];
  switch (catActive) {
    case "all":
      blogs = await fetchAPI(
        `blogs?pagination[pageSize]=12&pagination[page]=${index}&populate=*&sort[0]=publishedAt:DESC`
      );
      break;
    default:
      blogs = await fetchAPI(
        `blogs?pagination[pageSize]=12&pagination[page]=${index}&populate=*&sort[0]=publishedAt:DESC&filters[category][name][$eq]=${catActive}`
      );
      break;
  }

  const data = blogs?.data ?? [];
  return data;
};

export const getCatAPI = async (cat) => {
  let blogs = [];
  switch (cat) {
    case "all":
      blogs = await fetchAPI(
        `blogs?pagination[pageSize]=12&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC`
      );
      break;

    default:
      blogs = await fetchAPI(
        `blogs?pagination[pageSize]=12&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC&filters[category][name][$eq]=${cat}`
      );
  }

  const data = blogs?.data ?? [];
  const meta = blogs?.meta.pagination ?? [];
  return {
    meta,
    data,
  };
};
