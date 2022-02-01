import React, { useState } from 'react';

export default function OtherWish({data}) {

    const {formatedLink, name, link, price, username} = data;
    const [textLink, setTextLink] = useState(formatedLink);

    function sayCopied() {
         setTextLink(formatedLink);
      }

    function copyLink() {
        navigator.clipboard.writeText(link);
         setTextLink('Copied');
        setTimeout(sayCopied, 2000);
    }

    return (
        <div className="listItem">
            <h3>{name}</h3>
            <h4 data-type='link' 
                title={'copy ' + link} 
                onClick={copyLink}
            >{textLink}</h4>
            <div>
                <h4>{price}</h4>
                <span>{username}</span>
            </div>
        </div>
    )
}