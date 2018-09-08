import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shallowCompare from 'react-addons-shallow-compare';

import SelectComponent from '../../components/select-component';
import { saveSelectData } from '../../actions/select-actions';
import { getUsers } from '../../selectors/users-selector';
import { getRoles } from '../../selectors/roles-selector';
import { getProjects } from '../../selectors/projects-selector';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  width: 80%;
`;

const Header = styled.h2`
  font-size: 20px;
  font-weight: normal;
  width: 80%;
  margin: 30px auto;
`;

export class SetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    const { setID, users, roles, projects, saveSelectData } = this.props;
    const { usersID, usersHash } = users;
    const { rolesID, rolesHash } = roles; 
    const { projectsID, projectsHash } = projects; 

    return (
      <Fragment>
        <Header>
          Set Number {setID} 
        </Header>
        <FlexContainer>
          <SelectComponent
            key={`set${setID}-users`}
            IDList={usersID}
            data={usersHash}
            type='users'
            setID={setID}
            saveSelectData={saveSelectData}
          />
          <SelectComponent
            key={`set${setID}-roles`}
            IDList={rolesID}
            data={rolesHash}
            type='roles'
            setID={setID}
            saveSelectData={saveSelectData}
          />
          <SelectComponent
            key={`set${setID}-projects`}
            IDList={projectsID}
            data={projectsHash}
            type='projects'
            setID={setID}
            saveSelectData={saveSelectData}
          />
        </FlexContainer>
      </Fragment>
    );
  }
}

SetContainer.propTypes = {
  setID: PropTypes.number, 
  saveSelectData: PropTypes.func,
  users: PropTypes.object.isRequired,
  roles: PropTypes.object,
  projects: PropTypes.object,
}

const mapDispatchToProps = {
  saveSelectData,
}

const mapStateToProps = state => ({
  users: getUsers(state),
  roles: getRoles(state),
  projects: getProjects(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetContainer);
