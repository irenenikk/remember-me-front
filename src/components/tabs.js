import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import BookForm from './forms/book-form';
import BlogpostForm from './forms/blogpost-form';
import VideoForm from './forms/video-form';

import ListAllTips from './list-all-tips';
import ListBooks from './list-books';
import ListBlogposts from './list-blogposts';
import ListVideos from './list-videos';

export default () => {
  return (
    <Tabs>
      <Tab
        label="All reading tips">
            <ListAllTips />
      </Tab>
      <Tab
          id="add-new-book-button"
          label="Add new book">
            <BookForm />
            <ListBooks />
      </Tab>
      <Tab
        id="add-new-blogpost-button"
        label="Add new blogpost">
            <BlogpostForm />
            <ListBlogposts />
      </Tab>
      <Tab
        id="add-new-video-button"
        label="Add new video">
          <VideoForm />
          <ListVideos />
      </Tab>
    </Tabs>
  );
}
