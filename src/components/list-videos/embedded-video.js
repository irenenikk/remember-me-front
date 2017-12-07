import React from 'react';
import Youtube from 'react-youtube';
import getYoutubeId from 'get-youtube-id';
import { CardText } from 'material-ui/Card';

export default ({ url }) => {
    const regex = new RegExp("^https?://(www.)?youtube.*/(watch|embed)");
    if (regex.test(url)) {
        const id = getYoutubeId(url);
        return (
            <CardText>
                <Youtube
                    videoId={id}
                />
            </CardText>
        );
    }
    return (
        <CardText>
            <a href={url}>{url}</a>
        </CardText>
    );
}