import PropTypes from 'prop-types';

function Congrats({success}) {

    if (success) {
        return (<div data-test={'component-congrats'} className={'alert alert-success'}>
              <span data-test={'component-message'}>
                  Congratulations! You guessed the word!
              </span>
        </div>)
    } else {
      return  <div data-test={'component-congrats'}/>
    };

}

export default Congrats;