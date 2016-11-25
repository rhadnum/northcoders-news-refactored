import {expect} from 'chai';
import * as actions from '../actions/actions';
import reducer from '../reducer/reducer';


describe('Reducer', function () {
  it('should be a function', function () {
    expect(reducer).to.be.a('function');
  });
  it('should take 2 arguments', function () {
    expect(reducer.length).to.equal(2);
  });
  describe('Fetch articles', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        articles:[]
      }
      var article = [{title:'today', created_at: '4:30'}, {title:'yesterday', created_at:'2:45'}];
      var myAction = actions.fetchArticlesSuccess(article);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({articles:[{title:'today', created_at: '4:30'}, {title:'yesterday', created_at:'2:45'}]});
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.fetchArticlesError('No articles found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No articles found'});
    });
  });
  describe('Fetch topics', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        topics:[]
      }
      var topics = ['Cooking', 'Football', 'Coding'];
      var myAction = actions.fetchTopicsSuccess(topics);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({topics:['Cooking', 'Football', 'Coding']});
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.fetchTopicsError('No topics found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No topics found'});
    });
  });
  describe('Fetch article', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        currArticle:[]
      }
      var article = {title:'coding today', created_at:'8:42'};
      var myAction = actions.fetchArticleSuccess(article);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({currArticle:{title:'coding today', created_at:'8:42'}});
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.fetchArticleError('No article found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No article found'});
    });
  });
  describe('Fetch comments', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        currArticleComments: []
      }
      var comments = [{body:'coding today', created_at:'8:42'}, {body:'coding today', created_at:'8:44'}];
      var myAction = actions.fetchCommentsSuccess(comments);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({currArticleComments:[{body:'coding today', created_at:'8:42'}, {body:'coding today', created_at:'8:44'}]});
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.fetchArticleError('No comments found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No comments found'});
    });
  });
  describe('Post comments', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        currArticleComments: [{body: 'first comment', created_at:'23:32'}]
      };
      var comment = [{body:'coding today', created_at:'8:42'}];
      var myAction = actions.postCommentSuccess(comment);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({
        currArticleComments: [{body: 'first comment', created_at:'23:32'}, [{body:'coding today', created_at:'8:42'}]]
      });
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.postCommentError('No comment found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No comment found'});
    });
  });
  describe('Delete comments', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        currArticleComments: [{body: 'first comment', created_at:'23:54', id:2}]
      };
      var myAction = actions.deleteCommentSuccess(2);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({
        currArticleComments: [{body: 'first comment', created_at:'23:54', id:2}]
      });
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.deleteCommentError('No comment found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No comment found'});
    });
  });
  describe('Fetch User data', function () {
    it('should handle the SUCCESS action correctly', function () {
      var initialState = {
        currUserProfile: {}
      };
      var profile = {name: 'rohan', username:'rhadnum'};
      var myAction = actions.fetchUserSuccess(profile);
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({
        currUserProfile: profile
      });
    });
    it('should handle the ERROR action successfully', function () {
      var initialState = {
        error:''
      }
      var myAction = actions.deleteCommentError('No user found');
      var newState = reducer(initialState, myAction);
      expect(newState).to.eql({error: 'No user found'});
    });
  })
});