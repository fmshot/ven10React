import React, {Component} from 'react';

class Header extends Component {

  render (){
    return (
      <div>
        <div>                      
          <p className="firstlettering">EDIT DIGITAL PRODUCT</p>
        </div>
        <div className="wizard-navigation">
          <ul>
            <li><a href="#about" data-toggle="tab">Item</a></li>
            <li><a href="#account" data-toggle="tab">Pricing &amp; Upload</a></li>
            <li><a href="#address" data-toggle="tab">Additional Info</a></li>
            <li><a href="#about" data-toggle="tab">Form</a></li>
            <li><a href="#account" data-toggle="tab">Options</a></li>
            <li><a href="#address" data-toggle="tab">Social</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

