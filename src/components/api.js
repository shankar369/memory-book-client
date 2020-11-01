const base_url = "https://safe-shelf-36413.herokuapp.com";

export const getData = (parentId, snippets = false) => {
  let url = parentId
    ? `${base_url}/api/sub-categories/${parentId}`
    : `${base_url}/api/main-category`;

  if (snippets) url = `${base_url}/api/snippets/${parentId}`;
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// category calls
export const createCategory = (categoryData) => {
  let url = `${base_url}/api/sub-categories`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoryData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("snippet create error : ", err));
};

// snippets calls

export const createSnippet = (snippetData) => {
  let url = `${base_url}/api/snippets`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(snippetData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("snippet create error : ", err));
};

export const updateSnippet = (snippetId, newSnippetData) => {
  let url = `${base_url}/api/snippets/${snippetId}`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSnippetData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("snippet update error : ", err));
};
