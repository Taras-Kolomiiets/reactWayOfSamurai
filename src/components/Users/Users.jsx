import React from "react";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
        followed: true,
        fullName: "Taras K",
        status: "I will be programmer",
        location: { city: "Lviv", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
        followed: false,
        fullName: "Slavik I",
        status: "Hello my friend",
        location: { city: "Lviv", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
        followed: true,
        fullName: "Nazar S",
        status: "I am a lawyer",
        location: { city: "Kyiv", country: "Ukraine" },
      },
      {
        id: 4,
        photoUrl: "https://image.flaticon.com/icons/png/128/924/924874.png",
        followed: true,
        fullName: "Sergey S",
        status: "I am a programmer",
        location: { city: "Kyiv", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
