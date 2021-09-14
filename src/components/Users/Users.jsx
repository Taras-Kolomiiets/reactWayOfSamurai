import React from "react";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" />
            </div>
            <div>
              <button>Follow</button>
            </div>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
