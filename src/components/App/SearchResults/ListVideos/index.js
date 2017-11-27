import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../Video';
import Paper from 'material-ui/Paper';
import { deleteVideoAction } from '../../../../state/actions';

class ListVideos extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.videos.map(v =>
            <Video
              id={v.id}
              key={v.id}
              title={v.title}
              url={v.url}
              description={v.description}
              tags={v.tags}
              onDelete={this.props.handleDelete}
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

function mapDispatchToProps(dispatch) {
  return {
    handleDelete(id) {
      dispatch(deleteVideoAction(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVideos);
