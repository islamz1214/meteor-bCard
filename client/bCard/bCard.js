Template.bCard.helpers ({

	firstName: function() {
		return Session.get('firstName');
	},

	lastName: function() {
		return Session.get('lastName');
	},

	quote: function() {
		return Session.get('quote');
	},

	genderName: function() {
		return Session.get('genderName');
	},
	githubLink: function() {
		return Session.get('githubLink');
	}

})