

 export type PostsType = {
  id: number
  message: string
  likesCount: string
};

export type DialogsType = {
  id: number
  name: string
};

export type MessagesType = {
  id: number
  message: string
  // posts: Array<PostsType>
};


  export type ProfilePageType = {
  posts: Array< PostsType>
  newPostText: string
}

export type DialogsPageType = {
  messages: Array<MessagesType>
  dialogs: Array<DialogsType>
};

export type RootStateType = {
  dialogsPage: DialogsPageType
  profilePage:ProfilePageType

};

type addPostType = {
  addPost: Function
};


export let state: RootStateType  = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello my friend! Are you in the mood to study React?', likesCount: '12' },
      { id: 2, message: 'We fly', likesCount: '120' },
    ],
    newPostText: '',
    
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Yra' },
      { id: 2, name: 'Dima' },
      { id: 3, name: 'Vlad' },
      { id: 4, name: 'Dmitry' },
      { id: 5, name: 'Alex' },
      { id: 6, name: 'Natasha' },
    ],
    messages: [
      { id: 1, message: 'HI' },
      { id: 2, message: 'How is your it-kamasutra?' },
      { id: 3, message: 'YO' },
      { id: 4, message: 'YO' },
    ]
  }
  // saytBara: [

  // ]
};

let renderTree = (state: RootStateType) => {

}

export const addPost = (newPostText: string) => {
  const newPost: PostsType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: "0"
  };
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = '';
  renderTree(state)
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  
  renderTree(state);
}

export const subscribe = (observer: any) => {
  renderTree = observer
}