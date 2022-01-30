import React, { useState } from 'react';

export default function OtherWish({data}) {
    
    const [link, setLink] = useState(data.link);

    function sayCopied() {
        setLink(data.link);
      }

    function copyLink() {
        navigator.clipboard.writeText(data.link);
        setLink('Copied');
        setTimeout(sayCopied, 2000);
    }

    return (
        <div className="listItem">
            <h3>{data.name}</h3>
            <h4 data-type='link' 
                title={'copy ' + data.link} 
                onClick={copyLink}
            >{link}</h4>
            <div>
                <h4>{data.price}</h4>
                <span>{data.username}</span>
            </div>
        </div>
    )
}