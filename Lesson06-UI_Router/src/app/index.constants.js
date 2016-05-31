/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')
    .constant('STATES', {
    	kHomeState: 'home',
    	kContactsState: 'contacts',
    	kStoreState: 'store',

    	// Contacts child states
    	kCEOState: 'contacts.ceo',
    	kPresidentState: 'contacts.president',
    	kFounderState: 'contacts.founder',

    	// Store child states
    	kShoesState: 'store.shoes',
    	kPantsState: 'store.pants',
    	kShirtsState: 'store.shirts'
    });

})();
