import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15;
    }

    this.props.getUserProfile(userId);
  }

  render() {
    if (this.props.isAuth === false) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  { getUserProfile }
)(WithUrlDataContainerComponent);
