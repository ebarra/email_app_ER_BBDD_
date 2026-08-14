import React from 'react';

export default class Inbox extends React.Component {
  render(){
    let {profile, email} = this.props;
    let attachment = ((email && email.attachment) ? (
      <a href={email.attachment.url} rel="noopener noreferrer" target="_blank">
        <div className="document">
          <div className="fa fa-file" />
          <div className="name">{email.attachment.title}</div>
        </div>
      </a>
    ) : "");

    return <div className="col3">
      {email ? (
        [<div key="0" className="mail_header">
          <div className="mail_issue"><span><i className={(email.categories.indexOf("highlighted") !== -1 ? "fas" : "far") + " fa-star"} onClick={e=>this.props.highlightEmail()}/></span>
            <h1>{ email.issue }</h1>
          </div>
          <div className="mail_icons" style={{visibility:"hidden"}}>
            <i className="far fa-clock" />
            <i className="far fa-trash-alt" />
            <i className="far fa-bookmark" />
            <i className="fas fa-inbox" />
          </div>
        </div>,
        <div key="1" className="mail_main">
          <div className="mail_top">
            <div className="info">
              <div className="profile_img">
                <img src={ email.picture } alt=""/>
              </div>
              <div className="contact">
                <div className="name">
                  <h2>{ email.name }</h2><span>&#60;{email.from}&#62;</span>
                </div>
                <div className="recipient">
                Para: {profile.email}
                </div>
              </div>
            </div>
            <div className="date">{ email.date }</div>
          </div>
          <div className="mail_content" >
            <div dangerouslySetInnerHTML={{__html:email.content}}/>
            {attachment}
            <div className="mail_actions" style={{visibility:"hidden"}}>
              <div className="action"><span><i className="fas fa-reply" /></span>Responder</div>
              <div className="action"><span><i className="fas fa-share" /></span>Reenviar</div>
            </div>
          </div>
        </div>]
      ) : (
        <div key="2"className="no_mail">
          <div className="nm_img">
            <img src="assets/images/mail_icon.png"/>
          </div>
          <div className="nm_text">No has seleccionado ningún correo</div>
        </div>
      ) }
    </div>;
  }
}