import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import DeleteButton from '../DeleteButton';

export default ({ title, author, description, id, onDelete }) => {
  return (
    <Card>
      <CardTitle className="book" title={title} subtitle={author} />
        <DeleteButton id={id} onDelete={onDelete} />
        <CardText>
          {description}
        </CardText>
      </Card>
  );
}
