/**
 * FormContainer
 * @module containers/form-container
 */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SetContainer from '../set-container';
import { getUsers } from '../../selectors/users-selector';
import { getRoles } from '../../selectors/roles-selector';
import { getProjects } from '../../selectors/projects-selector';
import { checkError } from '../../selectors/error-selector';
import { getSelectedData } from '../../selectors/selected-selector';
import { fetchData } from '../../actions/fetch-actions'
import styled from 'styled-components';

const SubmitButton = styled.button`
  padding: 20px 40px;
  width: 200px;
  border: none;
  border-radius: 2px;
  background-color: #388E3C;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin: 30px auto;
  display: block;
`;

const ErrorContainer = styled.div`
  color: #B71C1C;
  text-align: center;
  margin-top: 20px;
`;

const OutputContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
`;

/**
 * @class FromContainer
 * @extends {React.Component}
 */

export class FromContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: '',
      showErr: false,
      submitOutput: '',
      showOutput: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.doublePresent = this.doublePresent.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  processDataforOutput() {
    const { selected, users, roles, projects } = this.props;

    let data = {};
    Object.keys(selected.users).map(set => (
      data[set] = {
        user: users.usersHash[selected.users[set]],
      }
    ));

    Object.keys(selected.roles).map(set => (
      data[set] = {
        ...data[set],
        role: roles.rolesHash[selected.roles[set]],
      }
    ));

    Object.keys(selected.projects).map(set => (
      data[set] = {
        ...data[set],
        project: projects.projectsHash[selected.projects[set]],
      }
    ));

    this.setState({
      submitOutput: JSON.stringify(data),
      showOutput: true,
    })
    // console.log(data);
  }

  allSelected() {
    const { selected, users, roles, projects } = this.props;
    if (
      Object.keys(selected.users).length === (users.usersID).length &&
      Object.keys(selected.roles).length === (roles.rolesID).length &&
      Object.keys(selected.projects).length === (projects.projectsID).length
    ) {
      return true;
    }

    return false;
  }

  doublePresent(obj) {
    let flag = {};
    for (let id in  obj) {
      if (!flag[obj[id]]) {
        flag[obj[id]] = true
      } else {
        return true
      }
    }
    return false;
  }

  _showForm() {
    const { showErr, errMsg, showOutput, submitOutput } = this.state;
    const { users } = this.props;
    const { usersID } = users;

    return (
      <Fragment>
        {
          usersID.map(id => (
            <SetContainer
              key={`set-${id}`}
              setID={id}
            />
          ))
        }
        {
          showErr ?
            <ErrorContainer>
              { errMsg }
            </ErrorContainer>
          :
            null
        } 
        <SubmitButton
          onClick={this.handleSubmit}
        >
          Submit
        </SubmitButton>
        {
          showOutput && !showErr?
            <OutputContainer>
              {submitOutput}
            </OutputContainer>
          :
            null
        }
      </Fragment>
    )
  }

  handleSubmit() {
    const { selected } = this.props;
    const { users, roles, projects } = selected;

    if (!this.allSelected()) {
      this.setState({
        errMsg: 'You need to select the options before submit.',
        showErr: true,
      })
      return;
    }

    let userDoublePresent = this.doublePresent(users);
    let rolesDoublePresent = this.doublePresent(roles);
    let projectDoublePresent = this.doublePresent(projects);

    if (userDoublePresent || rolesDoublePresent || projectDoublePresent) {
      this.setState({
        errMsg: 'Each user can be assigned just one role per project.',
        showErr: true,
      })
      return;
    }

    this.setState({
      showErr: false,
    })

    this.processDataforOutput();
  }

  render () {
    const { fetchError } = this.props;
    const { error, message } = fetchError;

    return (
      <Fragment>
        {
          error ?
            <ErrorContainer>
              {message}
            </ErrorContainer>
          :
            this._showForm()
        }
      </Fragment>
    );
  }
}

FromContainer.propTypes = {
  users: PropTypes.object,
  roles: PropTypes.object,
  projects: PropTypes.object,
  fetchError: PropTypes.object,
  selected: PropTypes.object,
  fetchData: PropTypes.func,
}

const mapStateToProps = state => ({
  users: getUsers(state),
  roles: getRoles(state),
  projects: getProjects(state),
  fetchError: checkError(state),
  selected: getSelectedData(state),
})

const mapDispatchToProps = {
  fetchData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FromContainer);
