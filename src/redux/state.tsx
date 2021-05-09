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
  posts: Array<PostsType>
  newPostText: string
}

export type DialogsPageType = {
  messages: Array<MessagesType>
  dialogs: Array<DialogsType>
  newMessageBody: string
};

export type RootStateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  sidebar: any

};

type AddPostType = {
  addPost: Function
};



export type ActionType = ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof sendMessageC> |
  ReturnType<typeof updateNewMessageC>

export type StorePropsType = {
  _state: RootStateType
  getState: () => RootStateType  // pay attention
  _onChange: () => void
  // addPost: (newPostText: string) => void
  // updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MASSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export const store: StorePropsType = {    // OOP
  _state: {
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
      ],
      newMessageBody: ''
    },
    
    sidebar: {},
  }, // ПОМЕЧЕНО КАК ПРИВАТНОЕ СВОЙСТВО т.е. _ нижнее подчеркиване
  _onChange() {
    console.log('State change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._onChange = observer
  },

  // addPost(newPostText: string) {
  // },
  // updateNewPostText(newText: string) {
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostsType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: '0'
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
      const body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '' ;
      this._state.dialogsPage.messages.push({ id: 6, message: body });
    }
    this._onChange()
  }

}

export const addPostAC = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText: newPostText
  } as const
};
export const changeNewTextAC = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text || ''
  } as const
};

export const sendMessageC = () => {
  return {
    type: SEND_MESSAGE,
  } as const
};
export const updateNewMessageC = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body 
  } as const
};


