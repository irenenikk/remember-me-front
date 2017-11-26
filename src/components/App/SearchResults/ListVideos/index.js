import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../Video';
import Paper from 'material-ui/Paper';

class ListVideos extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.videos.map(b =>
            <Video
              key={b.id}
              title={b.title}
              url={b.url}
              description={b.description}
              tags={b.tags}
            />
          )}
        </Paper>
      </center>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.list.videos,
  };
}

export default connect(mapStateToProps, null)(ListVideos);
