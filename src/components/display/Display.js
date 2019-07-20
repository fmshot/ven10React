import React, {Component} from 'react';

class Display extends Component {

  render (){
    return (
      <div>
        <div className="wizard-navigation">
          <ul>
            <li><a href="#about" data-toggle="tab">Item</a></li>
            <li><a href="#account" data-toggle="tab">Pricing &amp; Uplaod</a></li>
            <li><a href="#address" data-toggle="tab">Additional Info</a></li>
            <li><a href="#about" data-toggle="tab">Form</a></li>
            <li><a href="#account" data-toggle="tab">Options</a></li>
            <li><a href="#address" data-toggle="tab">Social</a></li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane" id="about">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="picture-container">
                  <div className="picture">
                    <img src="assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title />
                    <input type="file" id="wizard-picture" />
                  </div>
                  <h6>Choose Picture</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <h5 className>EDIT DIGITAL PRODUCT</h5>
                <h6 className>EDIT DIGITAL PRODUCT</h6>
                <h5 className>INFINITE SUPPORT. TOTAL CONTROL</h5>
                <p className="f">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. ... The text is derived from Cicero's De finibus bonorum et malorum</p>
                <i className="fas fa-band-aid" />
                
              </div>
              <div className="col-sm-10 col-sm-offset-1">
               
              </div>
            </div>
          </div>
          <div className="tab-pane" id="account">
            <h4 className="info-text"> What are you doing? (checkboxes) </h4>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <div className="col-sm-4">
                  <div className="choice" data-toggle="wizard-checkbox">
                    <input type="checkbox" name="jobb" defaultValue="Design" />
                    <div className="icon">
                      <i className="fa fa-pencil" />
                    </div>
                    <h6>Design</h6>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="choice" data-toggle="wizard-checkbox">
                    <input type="checkbox" name="jobb" defaultValue="Code" />
                    <div className="icon">
                      <i className="fa fa-terminal" />
                    </div>
                    <h6>Code</h6>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="choice" data-toggle="wizard-checkbox">
                    <input type="checkbox" name="jobb" defaultValue="Develop" />
                    <div className="icon">
                      <i className="fa fa-laptop" />
                    </div>
                    <h6>Develop</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="wizard-footer height-wizard">
          <div className="pull-right">
            <input type="button" className="btn btn-next btn-fill btn-warning btn-wd btn-sm" name="next" defaultValue="Next" />
            <input type="button" className="btn btn-finish btn-fill btn-warning btn-wd btn-sm" name="finish" defaultValue="Finish" />
          </div>
          <div className="pull-left">
            <input type="button" className="btn btn-previous btn-fill btn-default btn-wd btn-sm" name="previous" defaultValue="Previous" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default Display;


