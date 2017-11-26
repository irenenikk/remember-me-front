import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

export default ({ name, author, description }) => {
  return (
    <Card>
        <CardTitle title={name} subtitle={author} />
        <CardText>
          {description}
        </CardText>
      </Card>
  );
}
