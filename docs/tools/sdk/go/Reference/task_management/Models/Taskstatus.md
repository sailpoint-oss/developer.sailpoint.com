---
id: v1-taskstatus
title: Taskstatus
pagination_label: Taskstatus
sidebar_label: Taskstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskstatus', 'V1Taskstatus'] 
slug: /tools/sdk/go/taskmanagement/models/taskstatus
tags: ['SDK', 'Software Development Kit', 'Taskstatus', 'V1Taskstatus']
---

# Taskstatus

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
**Created** | **SailPointTime** | Creation date of the task this TaskStatus represents | 
**Modified** | **NullableTime** | Last modification date of the task this TaskStatus represents | 
**Launched** | **NullableTime** | Launch date of the task this TaskStatus represents | 
**Completed** | **NullableTime** | Completion date of the task this TaskStatus represents | 
**CompletionStatus** | **NullableString** | Completion status of the task this TaskStatus represents | 
**Messages** | [**[]Taskstatusmessage**](taskstatusmessage) | Messages associated with the task this TaskStatus represents | 
**Returns** | [**[]Taskreturndetails**](taskreturndetails) | Return values from the task this TaskStatus represents | 
**Attributes** | **map[string]interface{}** | Attributes of the task this TaskStatus represents | 
**Progress** | **NullableString** | Current progress of the task this TaskStatus represents | 
**PercentComplete** | **int32** | Current percentage completion of the task this TaskStatus represents | 
**TaskDefinitionSummary** | Pointer to [**Taskdefinitionsummary**](taskdefinitionsummary) |  | [optional] 

## Methods

### NewTaskstatus

`func NewTaskstatus(id string, type_ string, uniqueName string, description string, parentName NullableString, launcher string, created SailPointTime, modified NullableTime, launched NullableTime, completed NullableTime, completionStatus NullableString, messages []Taskstatusmessage, returns []Taskreturndetails, attributes map[string]interface{}, progress NullableString, percentComplete int32, ) *Taskstatus`

NewTaskstatus instantiates a new Taskstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskstatusWithDefaults

`func NewTaskstatusWithDefaults() *Taskstatus`

NewTaskstatusWithDefaults instantiates a new Taskstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Taskstatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskstatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskstatus) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *Taskstatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taskstatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taskstatus) SetType(v string)`

SetType sets Type field to given value.


### GetUniqueName

`func (o *Taskstatus) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *Taskstatus) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *Taskstatus) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.


### GetDescription

`func (o *Taskstatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Taskstatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Taskstatus) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetParentName

`func (o *Taskstatus) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *Taskstatus) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *Taskstatus) SetParentName(v string)`

SetParentName sets ParentName field to given value.


### SetParentNameNil

`func (o *Taskstatus) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *Taskstatus) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *Taskstatus) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Taskstatus) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Taskstatus) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.


### GetTarget

`func (o *Taskstatus) GetTarget() Target`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Taskstatus) GetTargetOk() (*Target, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Taskstatus) SetTarget(v Target)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *Taskstatus) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### SetTargetNil

`func (o *Taskstatus) SetTargetNil(b bool)`

 SetTargetNil sets the value for Target to be an explicit nil

### UnsetTarget
`func (o *Taskstatus) UnsetTarget()`

UnsetTarget ensures that no value is present for Target, not even an explicit nil
### GetCreated

`func (o *Taskstatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Taskstatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Taskstatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Taskstatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Taskstatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Taskstatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### SetModifiedNil

`func (o *Taskstatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Taskstatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetLaunched

`func (o *Taskstatus) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *Taskstatus) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *Taskstatus) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.


### SetLaunchedNil

`func (o *Taskstatus) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *Taskstatus) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *Taskstatus) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Taskstatus) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Taskstatus) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.


### SetCompletedNil

`func (o *Taskstatus) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Taskstatus) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *Taskstatus) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Taskstatus) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Taskstatus) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.


### SetCompletionStatusNil

`func (o *Taskstatus) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *Taskstatus) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *Taskstatus) GetMessages() []Taskstatusmessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Taskstatus) GetMessagesOk() (*[]Taskstatusmessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Taskstatus) SetMessages(v []Taskstatusmessage)`

SetMessages sets Messages field to given value.


### GetReturns

`func (o *Taskstatus) GetReturns() []Taskreturndetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *Taskstatus) GetReturnsOk() (*[]Taskreturndetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *Taskstatus) SetReturns(v []Taskreturndetails)`

SetReturns sets Returns field to given value.


### GetAttributes

`func (o *Taskstatus) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Taskstatus) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Taskstatus) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetProgress

`func (o *Taskstatus) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *Taskstatus) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *Taskstatus) SetProgress(v string)`

SetProgress sets Progress field to given value.


### SetProgressNil

`func (o *Taskstatus) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *Taskstatus) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *Taskstatus) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *Taskstatus) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *Taskstatus) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.


### GetTaskDefinitionSummary

`func (o *Taskstatus) GetTaskDefinitionSummary() Taskdefinitionsummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *Taskstatus) GetTaskDefinitionSummaryOk() (*Taskdefinitionsummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *Taskstatus) SetTaskDefinitionSummary(v Taskdefinitionsummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *Taskstatus) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.


