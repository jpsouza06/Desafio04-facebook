import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Joao Paulo',
          avatar: 'https://avatars1.githubusercontent.com/u/54922299?s=400&u=3240edd05276d7b4766ca13035ed743342bae4ce&v=4'
        },
        date: '27 Nov 2019',
        content: 'Bom dia, alguem sabe se as vagas para o Bootcamp estao abertas?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '27 Nov 2019',
            content:
              'Atualmente as vagas para o GoStack estão fechadas, mas em breve estarão disponíveis.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Gladson Xavier',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '27 Nov 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Gabriela Almeida',
              avatar: 'https://i.pravatar.cc/150?img=35'
            },
            date: '27 Nov 2019',
            content:
              'Também estou fazendo o Bootcamp e esta incrivel!'
          },
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Souza',
          avatar: 'https://i.pravatar.cc/150?img=56'
        },
        date: '27 Nov 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Gabriela Almeida',
              avatar: 'https://i.pravatar.cc/150?img=35'
            },
            date: '27 Nov 2019',
            content:
              'Também estou fazendo o Bootcamp e esta incrivel!'
          },
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;