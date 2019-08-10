import TodoListFilterComponent from "../../components/TodoListFilter.js";
import * as filterAction from "../actions/filter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    filter: state.filter.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(filterAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListFilterComponent);
