export default {

   


login({Meteor, LocalState, FlowRouter}, user, password) {


    LocalState.set('LOGIN_ERROR', null);


        FlowRouter.go('/app');

    return false;
},

clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
},


logout({Meteor, LocalState, FlowRouter}){
    Meteor.logout(function (error) {
        if (error){
            return LocalState.set('LOGOUT_ERROR', 'Logout failed with: '+ error)
        }

    });
}
}
