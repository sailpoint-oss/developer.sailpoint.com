---
id: beta-task-status
title: TaskStatus
pagination_label: TaskStatus
sidebar_label: TaskStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskStatus', 'BetaTaskStatus'] 
slug: /tools/sdk/go/beta/models/task-status
tags: ['SDK', 'Software Development Kit', 'TaskStatus', 'BetaTaskStatus']
---

# TaskStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | System-generated unique ID of the task this TaskStatus represents | 
**Type** | **string** | Type of task this TaskStatus represents | 
**UniqueName** | **string** | Name of the task this TaskStatus represents | 
**Description** | **string** | Description of the task this TaskStatus represents | 
**ParentName** | **NullableString** | Name of the parent of the task this TaskStatus represents | 
**Launcher** | **string** | Service to execute the task this TaskStatus represents | 
**Target** | Pointer to [**NullableTarget**](target) |  | [optional] 
**Created** | **time.Time** | Creation date of the task this TaskStatus represents | 
**Modified** | **time.Time** | Last modification date of the task this TaskStatus represents | 
**Launched** | **NullableTime** | Launch date of the task this TaskStatus represents | 
**Completed** | **NullableTime** | Completion date of the task this TaskStatus represents | 
**CompletionStatus** | **NullableString** | Completion status of the task this TaskStatus represents | 
**Messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the task this TaskStatus represents | 
**Returns** | [**[]TaskReturnDetails**](task-return-details) | Return values from the task this TaskStatus represents | 
**Attributes** | **map[string]interface{}** | Attributes of the task this TaskStatus represents | 
**Progress** | **NullableString** | Current progress of the task this TaskStatus represents | 
**PercentComplete** | **int32** | Current percentage completion of the task this TaskStatus represents | 
**TaskDefinitionSummary** | Pointer to [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 

## Methods

### NewTaskStatus

`func NewTaskStatus(id string, type_ string, uniqueName string, description string, parentName NullableString, launcher string, created time.Time, modified time.Time, launched NullableTime, completed NullableTime, completionStatus NullableString, messages []TaskStatusMessage, returns []TaskReturnDetails, attributes map[string]interface{}, progress NullableString, percentComplete int32, ) *TaskStatus`

NewTaskStatus instantiates a new TaskStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskStatusWithDefaults

`func NewTaskStatusWithDefaults() *TaskStatus`

NewTaskStatusWithDefaults instantiates a new TaskStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TaskStatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskStatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskStatus) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *TaskStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskStatus) SetType(v string)`

SetType sets Type field to given value.


### GetUniqueName

`func (o *TaskStatus) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *TaskStatus) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *TaskStatus) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.


### GetDescription

`func (o *TaskStatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaskStatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaskStatus) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetParentName

`func (o *TaskStatus) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *TaskStatus) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *TaskStatus) SetParentName(v string)`

SetParentName sets ParentName field to given value.


### SetParentNameNil

`func (o *TaskStatus) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *TaskStatus) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *TaskStatus) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *TaskStatus) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *TaskStatus) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.


### GetTarget

`func (o *TaskStatus) GetTarget() Target`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *TaskStatus) GetTargetOk() (*Target, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *TaskStatus) SetTarget(v Target)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *TaskStatus) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### SetTargetNil

`func (o *TaskStatus) SetTargetNil(b bool)`

 SetTargetNil sets the value for Target to be an explicit nil

### UnsetTarget
`func (o *TaskStatus) UnsetTarget()`

UnsetTarget ensures that no value is present for Target, not even an explicit nil
### GetCreated

`func (o *TaskStatus) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TaskStatus) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TaskStatus) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *TaskStatus) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *TaskStatus) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *TaskStatus) SetModified(v time.Time)`

SetModified sets Modified field to given value.


### GetLaunched

`func (o *TaskStatus) GetLaunched() time.Time`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *TaskStatus) GetLaunchedOk() (*time.Time, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *TaskStatus) SetLaunched(v time.Time)`

SetLaunched sets Launched field to given value.


### SetLaunchedNil

`func (o *TaskStatus) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *TaskStatus) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *TaskStatus) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *TaskStatus) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *TaskStatus) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.


### SetCompletedNil

`func (o *TaskStatus) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *TaskStatus) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *TaskStatus) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *TaskStatus) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *TaskStatus) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.


### SetCompletionStatusNil

`func (o *TaskStatus) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *TaskStatus) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *TaskStatus) GetMessages() []TaskStatusMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *TaskStatus) GetMessagesOk() (*[]TaskStatusMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *TaskStatus) SetMessages(v []TaskStatusMessage)`

SetMessages sets Messages field to given value.


### GetReturns

`func (o *TaskStatus) GetReturns() []TaskReturnDetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *TaskStatus) GetReturnsOk() (*[]TaskReturnDetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *TaskStatus) SetReturns(v []TaskReturnDetails)`

SetReturns sets Returns field to given value.


### GetAttributes

`func (o *TaskStatus) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TaskStatus) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TaskStatus) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetProgress

`func (o *TaskStatus) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *TaskStatus) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *TaskStatus) SetProgress(v string)`

SetProgress sets Progress field to given value.


### SetProgressNil

`func (o *TaskStatus) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *TaskStatus) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *TaskStatus) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *TaskStatus) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *TaskStatus) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.


### GetTaskDefinitionSummary

`func (o *TaskStatus) GetTaskDefinitionSummary() TaskDefinitionSummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *TaskStatus) GetTaskDefinitionSummaryOk() (*TaskDefinitionSummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *TaskStatus) SetTaskDefinitionSummary(v TaskDefinitionSummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *TaskStatus) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.


