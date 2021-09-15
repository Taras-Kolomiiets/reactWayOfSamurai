import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setTotalPageCountAC,
  toggleIsFetchingAC,
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${
          this.props.pageSize
        }`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalPageCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
