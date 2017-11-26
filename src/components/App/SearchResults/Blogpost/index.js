import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

export default ({ title, url, description }) => {
  return (
    <Card>
        <CardTitle title={title} subtitle={url} />
        <CardText>
          {description}
        </CardText>
      </Card>
  );
}
