import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalPageCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalPageCount(data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(p, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
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

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalPageCount,
    toggleIsFetching,
  }
)(UsersContainer);
