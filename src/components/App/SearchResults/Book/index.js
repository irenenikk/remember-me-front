import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

export default class Book extends Component {
  render() {
    return (
      <Card>
          <CardTitle title={this.props.name} subtitle={this.props.author} />
          <CardText>
            {this.props.description}
          </CardText>
        </Card>
    );
  }
}
