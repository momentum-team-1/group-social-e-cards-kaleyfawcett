// /* globals localStorage */
// import React from 'react'
// import { getFriendsList, getFriendsCards } from '../Api'

// class FollowFriends extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       token: window.localStorage.getItem('login_auth_token'),
//       user: localStorage.getItem('login_username') || '',
//       friends: [],
//       cards: []

//     }
//   }

//   componentDidMount () {
//     if (this.state.token) {
//       getFriendsCards(this.state.token)
//         .then(cards => this.setState({ cards: cards }))
//     }
//     getFriendsList(this.state.token)
//       .then(data => this.setState({ friends: data.friends }))
//   }

//   componentDidUpdate (prevProps, prevState) {
//     if (this.state.token && this.state.token !== prevState.token) {
//       getFriendsCards(this.state.token).then(cards => this.setState({ cards: cards }))
//     }
//   }

//   render () {
//     return (
//       <div>
//         <div>
//           <ul>
//             <li>
//               {this.state.friends.map(friend => <p key={friend.id}>Friends: {friend.username}</p>)}
//             </li>
//           </ul>
//         </div>
//         <div>
//           {this.state.cards.map(card => <p className='container' key={card.id}> Title: {card.title}  <br />  Card: {card.message}</p>)}
//         </div>
//       </div>

//     )
//   }
// }

// export default FollowFriends
