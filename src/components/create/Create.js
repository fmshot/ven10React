import React, {Component} from 'react';

class Create extends Component {
  render (){
    return (

      <div>
        <form action method>
          <div className="tab-content">
            <div className="tab-pane" id="about">
              <div className="row">
                {/* <h4 class="info-text"> Let's start with the basic information (with validation)</h4> */}
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
                  <div className="form-group">
                    <label>First Name <small>(required)</small></label>
                    <input name="firstname" type="text" className="form-control" placeholder="Enter a digital product name" />
                  </div>
                  <div className="form-group">
                    <label>Pricing <small>(required)</small></label>
                    <input name="lastname" type="text" className="form-control" placeholder="Smith..." />
                  </div>
                  <div className="form-group">
                    <textarea rows={7} cols={48} id="basic-example" defaultValue={"                                        <p style=\"text-align: center;\">\n                                          <img title=\"TinyMCE Logo\" src=\"//www.tiny.cloud/images/glyph-tinymce@2x.png\" alt=\"TinyMCE Logo\" width=\"110\" height=\"97\" />\n                                        </p>\n\n                                        <h2>A simple table to play with</h2>\n\n                                      "} />                                      
                  </div>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                  <div className="form-group">
                    <label>Email <small>(required)</small></label>
                    <input name="email" type="email" className="form-control" placeholder="andrew@creative-tim.com" />
                  </div>
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
                        <i className="fa fa-heart" aria-hidden="true" />
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
            <div className="tab-pane" id="address">
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="info-text"> Are you living in a nice area? </h4>
                </div>
                <div className="col-sm-7 col-sm-offset-1">
                  <div className="form-group">
                    <label>Street Name</label>
                    <input type="text" className="form-control" placeholder="5h Avenue" />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Street Number</label>
                    <input type="text" className="form-control" placeholder={242} />
                  </div>
                </div>
                <div className="col-sm-5 col-sm-offset-1">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="New York..." />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <label>Country</label><br />
                    <select name="country" className="form-control">
                      <option value="Afghanistan"> Afghanistan </option>
                      <option value="Albania"> Albania </option>
                      <option value="Algeria"> Algeria </option>
                      <option value="American Samoa"> American Samoa </option>
                      <option value="Andorra"> Andorra </option>
                      <option value="Angola"> Angola </option>
                      <option value="Anguilla"> Anguilla </option>
                      <option value="Antarctica"> Antarctica </option>
                      <option value="...">...</option>
                    </select>
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
        </form>
      </div>
    );
  }
}

export default Create;


