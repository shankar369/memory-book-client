export const getData = (parentId, snippets = false) => {
  let url = parentId
    ? `http://localhost:5000/api/sub-categories/${parentId}`
    : `http://localhost:5000/api/main-category`;

  if (snippets) url = `http://localhost:5000/api/snippets/${parentId}`;
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
  let url = `http://localhost:5000/api/sub-categories`;

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
  let url = `http://localhost:5000/api/snippets`;

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
  let url = `http://localhost:5000/api/snippets/${snippetId}`;

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
