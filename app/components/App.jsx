import React from 'react';
import {connect} from 'react-redux';
import {restoreState, loaded, logged, updateProfile, updateEmails, updateChats} from '../reducers/actions.jsx';
import './../assets/scss/main.scss';
import './../assets/scss/fontroboto.scss';

import {GLOBAL_CONFIG} from '../config/config';
import {CATEGORIES} from '../constants/constants';

import Inbox from './Inbox';

export class App extends React.Component {
  constructor(props){
    super(props);

    // Init profile
    let profile = GLOBAL_CONFIG.profile;
    profile.email = profile.username + "@" + profile.domain;
    this.props.dispatch(updateProfile(profile));

    // Init emails
    let emails = GLOBAL_CONFIG.emails;
    for(let j = 0; j < emails.length; j++){
      // Add id to each email
      emails[j].id = (j + 1);
      // Add unreaded boolean if not present
      emails[j].unread = (typeof emails[j].unread === "undefined" ? true : emails[j].unread);
      // Add default category if no category is specified
      if((!(emails[j].categories instanceof Array)) || (emails[j].categories.length === 0)){
        emails[j].categories = ["received"];
      }
    }
    this.props.dispatch(updateEmails(emails));

    // Init chats
    this.props.dispatch(updateChats(GLOBAL_CONFIG.chats));
  }
  componentDidMount(){
    this.props.dispatch(loaded(true));
  }
  render(){
    if((this.props.loading === true) || (this.props.profile === {}) || (typeof this.props.emails === "undefined")){
      return null;
    }
    return (
      <div id="container">
        {<Inbox dispatch={this.props.dispatch} config={GLOBAL_CONFIG} profile={this.props.profile} emails={this.props.emails} chats={this.props.chats} saveState={this.saveState} />}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);