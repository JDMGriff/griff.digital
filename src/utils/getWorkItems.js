export async function getWorkItems() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}data/portfolio.json?t=${Date.now()}`);
    const data = await response.json();
    return data;
}