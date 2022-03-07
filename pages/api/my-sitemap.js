const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
    // An array with your links
    const links = [
        { url: "/bella-bot", changefreq: "daily", priority: 0.3 },
        { url: "/ketty-bot", changefreq: "daily", priority: 0.3 },
        { url: "/pudu-bot/", changefreq: "daily", priority: 0.3 },
        { url: "/hola-bot/", changefreq: "daily", priority: 0.3 },
        { url: "/services/", changefreq: "daily", priority: 0.3 },
        { url: "/contact/", changefreq: "daily", priority: 0.3 },
        { url: "/extra/privacy-policy", changefreq: "daily", priority: 0.3 },
        { url: "/extra/terms-conditions", changefreq: "daily", priority: 0.3 },

    ];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};