import dialogsReducer, { sendMessageC, updateNewMessageC } from "./dialogs-reduser";
import profileReducer, { addPostAC, changeNewTextAC } from "./profile-reducer";

 type PostsType = {
  id: number
  message: string
  likesCount: string
};

 type DialogsType = {
  id: number
  name: string
};

 type MessagesType = {
  id: number
  message: string
  // posts: Array<PostsType>
};


 type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}
type DialogsPageType = {
  messages: Array<MessagesType>
  dialogs: Array<DialogsType>
  newMessageBody: string
};

 type RootStateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  sidebar: any

};

 type ActionType = ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof sendMessageC> |
  ReturnType<typeof updateNewMessageC>

 type StorePropsType = {
  _state: RootStateType
  getState: () => RootStateType  // pay attention
  _onChange: () => void
  // addPost: (newPostText: string) => void
  // updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
};

 const store: StorePropsType = {    // OOP
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

  dispatch(action: any) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._onChange()
  }
}
