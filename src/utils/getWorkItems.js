export async function getWorkItems() {
  const isBrowser = typeof window !== "undefined";
  const baseUrl = isBrowser ? "" : (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");
  const url = `${baseUrl}/data/portfolio.json?t=${Date.now()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch work items: ${response.statusText}`);
  return response.json();
}
