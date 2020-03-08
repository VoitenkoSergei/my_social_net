import { connect } from 'react-redux'
import Users from './users'
import { followCreator, unFollowCreator } from '../../../Redux/usersReducer'

const mapStateToProps = state => {
    return{
        users: state.usersPage.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: id => dispatch(followCreator(id)),
        unfollow: id => dispatch(unFollowCreator(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)