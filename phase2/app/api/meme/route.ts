// app/api/meme/route.ts

export async function GET() {
    const url = "https://api.apileague.com/retrieve-random-meme?keywords=rocket";
    const apiKey = process.env.APILEAGUE_API_KEY;


    // if (!apiKey) {
    //     return new Response("API key missing", { status: 500 });
    // }

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": apiKey,
        },
    });

    if (!res.ok) {
        return new Response("Failed to fetch meme", { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}
