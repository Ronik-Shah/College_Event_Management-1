import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  
  alerts !== null &&
  alerts.length > 0 &&
 <div>alerts.msg {console.log(alerts.msg)}</div>

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.error
});

export default connect(mapStateToProps)(Alert);