import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import DeleteButton from '../../DeleteButton';

export default ({ title, url, description, id, onDelete }) => {
  return (
    <Card>
      <div className="pilar">
      <CardTitle title={title}/>
      <a href={url}>{url}</a>
      </div>
        <CardText>
        <DeleteButton id={id} onDelete={onDelete} />
      </CardText>
    </Card>
  );
}
