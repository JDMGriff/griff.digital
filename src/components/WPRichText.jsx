const WPRichText = ({ html, className = "" }) => {
    if (!html) return null;

    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
export default WPRichText;