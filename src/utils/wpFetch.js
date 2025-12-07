export async function wpFetch(query, variables = {}) {
    if (!process.env.WP_GRAPHQL_ENDPOINT) {
        throw new Error("WP_GRAPHQL_ENDPOINT is not set");
    }

    const res = await fetch(process.env.WP_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
        next: {
            revalidate: 60,
        },
    });

    const json = await res.json();

    if (!res.ok || json.errors) {
        console.error("WPGraphQL error:", json.errors || res.statusText);
        throw new Error("Failed to fetch from WPGraphQL");
    }

    return json.data;
}
