const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (url, init) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchSubjects = async () => {
  let url = `${BASE_URL}subjects/`;
  return await tryCatchFetch(url);
};

const myExports = {
  fetchSubjects,
};

export default myExports;
