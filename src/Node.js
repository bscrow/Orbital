import React from 'react';
import Modal from 'react-modal';

class Node extends React.Component {
    constructor(props) {
      super()
      this.state = { moduleID: props.id, equivalent: props.equivalent, added: false, showModal:false, showEditForm: false }
      this.handleClickForAddButton = this.handleClickForAddButton.bind(this)
      this.handleClickForEditButton = this.handleClickForEditButton.bind(this)
      this.showModal = this.showModal.bind(this)
      this.modalButton = this.modalButton.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.showEditForm = this.showEditForm.bind(this)
      this.closeEditForm = this.closeEditForm.bind(this)
      this.handleOnChangeEditForm = this.handleOnChangeEditForm.bind(this)
    }

    showEditForm() {
      const equivalentModules = this.state.equivalent.map(mod => {
        return (
          <option value={mod}>{mod}</option>
        )
      })
      return (
        <form>
          <label>
          Pick another equivalent module: <br></br>
            <select value={this.state.moduleID} onChange={this.handleOnChangeEditForm}>
            {equivalentModules}
            </select>
          </label>
        </form>
      )
    }

    handleOnChangeEditForm(event) {
      //Must create constant to store value of event.target.value because it is asynchronous
      const updatedName = event.target.value;
      if (this.state.added) {
        const yearSem = this.props.findModule(this.state.moduleID);
        this.props.removeFromTimeline(this.state.moduleID);
        this.props.addToTimeline(updatedName, yearSem[0], yearSem[1]);
      }
      this.setState(prevState => {
        return {moduleID: updatedName, equivalent: prevState.equivalent, added: prevState.added, showModal: false, showEditForm: false}
      })
    }

    //Button that handles event when the edit button in the ui is clicked
    handleClickForEditButton() {
      this.setState(prevState => {
        return {  moduleID: prevState.moduleID, 
                  equivalent: prevState.equivalent,
                  added: prevState.added,
                  showModal: false,
                  showEditForm: true
        }
      })
    }

    //Closes edit form when the user clicks outside the form
    closeEditForm() {
      this.setState(prevState => {
        return {moduleID: prevState.moduleID, added: prevState.added, showEditForm: false}
      })
    }

    //Button that passes information when clicked to the timeline
    modalButton(module, year, semester) {
      this.setState(prevState => {
        return {moduleID: prevState.moduleID, added: true, showModal: false};
      })
      this.props.addToTimeline(module, year, semester);
    }

    //Closes modal when user clicks outside the white box
    closeModal() {
      this.setState(prevState => {
        return { moduleID: prevState.moduleID, added: prevState.added, showModal: false}
      })
    }

    //Displays the pop-up modal for user to interact
    showModal(module) {
      return (<div className="modal-content">
          <div class="modal-msg">{"You are adding " + module + " to:"}</div>
          <button onClick={() => this.modalButton(module, 1, 1)}>Year 1 Sem 1</button>
          <button onClick={() => this.modalButton(module, 1, 2)}>Year 1 Sem 2</button>
          <button onClick={() => this.modalButton(module, 2, 1)}>Year 2 Sem 1</button>
          <button onClick={() => this.modalButton(module, 2, 2)}>Year 2 Sem 2</button>
          <button onClick={() => this.modalButton(module, 3, 1)}>Year 3 Sem 1</button>
          <button onClick={() => this.modalButton(module, 3, 2)}>Year 3 Sem 2</button>
          <button onClick={() => this.modalButton(module, 4, 1)}>Year 4 Sem 1</button>
          <button onClick={() => this.modalButton(module, 4, 2)}>Year 4 Sem 2</button>
          </div>
      );
    }
    
    //Button that handles the click event when the 'add' or 'remove' button in the ui is clicked.
    handleClickForAddButton() {
      if (this.state.added) { //function of the removeButton
        this.setState(prevState => { return { moduleID: prevState.moduleID, added : false, showModal : false } })
        this.props.removeFromTimeline(this.state.moduleID);
      } else { //display modal
        this.setState(prevState => {return { moduleID: prevState.moduleID, added : prevState.added, showModal : true } })
      }
    }

    render() {
      return (
        <div class="NodeBox">
          <div class="NodeName">{this.state.moduleID}</div>
          <div class="NodeEditButton"><button id={this.state.moduleID} onClick={() => this.handleClickForEditButton()}>Edit</button>
            <Modal isOpen={this.state.showEditForm} overlayClassName="modal-bg" className="modal-content-2" onRequestClose={this.closeEditForm}>
            {this.showEditForm()}
            </Modal>
          </div>
          <div class="NodeAddButton">
            <button id={this.state.moduleID + 'AddButton'} onClick={() => this.handleClickForAddButton()}>{
              this.state.added ? "Remove" : "Add" }
            </button>
            <Modal isOpen={this.state.showModal} overlayClassName="modal-bg" className="modal-content" onRequestClose={this.closeModal}>
            {this.showModal(this.state.moduleID)}
            </Modal>
          </div>
        </div>
      )
    }
}

export default Node;