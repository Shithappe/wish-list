export default function OtherWish({data}) {
    
    function formatLink(link) {
        link = link.substr(link.indexOf('//') + 2);
        if (link.indexOf('www.') > -1) link = link.substr(link.indexOf('www.') + 4);
        link = link.substr(0, link.indexOf('/'));
        return link;
    }

    return (
        <div className="listItem">
            <h3>{data.name}</h3>
            <h4 data-type='link' title={'copy ' + data.link}>{formatLink(data.link)}</h4>
            <h4>{data.price}</h4>
        </div>
    )
}