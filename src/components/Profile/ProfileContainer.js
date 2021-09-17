import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const authRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(authRedirectComponent);

export default connect(
  mapStateToProps,
  { getUserProfile }
)(WithUrlDataContainerComponent);
