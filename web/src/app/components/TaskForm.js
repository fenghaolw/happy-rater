import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const formStyle = {
  margin: 10
};

const longFieldStyle = {
  margin: 10
};

const shortFieldStyle = {
  margin: 10,
  width: '30%'
};

const selectStyle = {
  width: '30%',
  margin: 10,
  top: 15
};

export default class TaskForm extends Component {
  state = {
    taskRequesterId: this.props.formData.requester_id,
    taskName: this.props.formData.name,
    taskType: this.props.formData.type,
    taskInstruction: this.props.formData.instruction,
    taskQuestion: this.props.formData.question_string
  };

  onTaskNameChange = (e) => {
    this.setState({taskName: e.target.value});
    this.props.callback('name', e.target.value);
  };

  onTaskTypeChange = (e, idx, v) => {
    this.setState({taskType: v});
    this.props.callback('type', v);
  };

  onTaskInstructionChange = (e) => {
    this.setState({taskInstruction: e.target.value});
    this.props.callback('instruction', e.target.value);
  };

  onTaskQuestionChange = (e) => {
    this.setState({taskQuestion: e.target.value});
    this.props.callback('question_string', e.target.value);
  };

  render() {
    return (
      <div style={formStyle}>
        <TextField
          id="taskRequesterId"
          floatingLabelText="Requester Id"
          style={shortFieldStyle}
          disabled={true}
          value={this.state.taskRequesterId}
        />
        <TextField
          id="taskName"
          floatingLabelText="Task Name"
          style={shortFieldStyle}
          value={this.state.taskName}
          onChange={this.onTaskNameChange}
        />
        <SelectField
          floatingLabelText="Task Type"
          value={this.state.taskType}
          onChange={this.onTaskTypeChange}
          style={selectStyle}
        >
          <MenuItem value={1} primaryText="Object Detection" />
          <MenuItem value={2} primaryText="Classification" />
          <MenuItem value={3} primaryText="Segmentation" />
        </SelectField>
        <br />
        <TextField
          id="taskInstruction"
          floatingLabelText="Task Instruction"
          multiLine={true}
          rows={3}
          fullWidth={true}
          value={this.state.taskInstruction}
          onChange={this.onTaskInstructionChange}
        />
        <br />
        <TextField
          id="taskQuestion"
          floatingLabelText="Task Question"
          multiLine={true}
          rows={3}
          fullWidth={true}
          value={this.state.taskQuestion}
          onChange={this.onTaskQuestionChange}
        />
        <br />
        Created: {this.props.formData.created_timestamp}
        <br />
        Modified: {this.props.formData.modified_timestamp}
      </div>
    );
  }
}
