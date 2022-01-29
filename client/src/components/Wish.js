import React, { useState } from 'react';
import EditItemForm from "./EditItemForm";

export default function Wish(props) {

    const [edit, setEdit] = useState(false);

    function formatName(name) {
        if (name.length < 35) return name;
        else return name.slice(0, 33) + '...';
    }

    function formatLink(link) {
        if (link.indexOf('//') === -1) return link;
        link = link.substr(link.indexOf('//') + 2);
        if (link.indexOf('www.') > -1) link = link.substr(link.indexOf('www.') + 4);
        link = link.substr(0, link.indexOf('/'));
        return link;
    }

    function copyLink(e) {
        console.log(e);
        console.log(props.data);
        navigator.clipboard.writeText(props.data.link)
    }

    return (
        <div className="listItem">
            { edit && <EditItemForm
                        handlEdit={(value) => { setEdit(value) }} 
                        data={props.data} 
                        update = { () => props.update() }
                    />}
            <div>
                <h3 title={props.data.name}>{formatName(props.data.name)}</h3>
                <button className="editWishButton" onClick = {() => {
                    setEdit(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25">    
                    <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
                    </svg>
                </button>
            </div>
            <h4 data-type='link' 
                title={'copy ' + props.data.link} 
                onClick={copyLink}
            >{formatLink(props.data.link)}</h4>
            <h4>{props.data.price}</h4>
        </div>
    )
}