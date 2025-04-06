export function EmbededLinks({experienceLink}: {experienceLink:string}) {
    return (
        <div className="iframely-embed">
            <div
            className="iframely-responsive"
            style={{ height: "140px", paddingBottom: "0" }}>
            <a
                href={experienceLink}
                className="text-blue-600 hover:text-blue-800 underline"
                data-iframely-url="//iframely.net/gIbjqtX?card=small"
                >View Project Link</a>
            </div>
            <script async src="//iframely.net/embed.js"></script>
        </div>
    )
}