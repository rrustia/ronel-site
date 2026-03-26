export async function handler() {
  const response = await fetch(
    "https://api.github.com/repos/rrustia/project-data/contents/projects.json",
    {
      headers: {
        "Authorization": `token ${process.env.GITHUB_TOKEN}`,
        "Accept": "application/vnd.github.v3.raw"
      }
    }
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
