'use strict';

import React from 'react';
import { Link } from 'react-router';

import ProfileBox from './ProfileBox.jsx';

const ProfileList = ({results}) => {
  if (results === null) {
    return (
      <p>
        Just search for a Github user or organization ... or access directly to <Link to="/github/user/topheman">my profile</Link>.
      </p>
    )
  }
  else if(results.error){
    return (
      <div>
        {results.error}
      </div>
    )
  }
  else if(results.total_count === 0){
    return (
      <div>
        No results.
      </div>
    )
  }
  else {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Total result : {results.total_count} / showing : {results.items.length}</div>
        <div className="list-group">
          {results.items.map(function (user) {
            user.$avatar_url = user.avatar_url+"&s=40";
            return <ProfileBox key={user.id} user={user}/>
          })}
        </div>
      </div>
    )
  }
}

export default ProfileList;