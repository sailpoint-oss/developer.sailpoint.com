---
id: v1-loadaccountstask-task
title: LoadaccountstaskTask
pagination_label: LoadaccountstaskTask
sidebar_label: LoadaccountstaskTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadaccountstaskTask', 'V1LoadaccountstaskTask'] 
slug: /tools/sdk/go/sources/models/loadaccountstask-task
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTask', 'V1LoadaccountstaskTask']
---

# LoadaccountstaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | Pointer to **string** | Type of task this task represents | [optional] 
**Name** | Pointer to **string** | The name of the aggregation process | [optional] 
**Description** | Pointer to **string** | The description of the task | [optional] 
**Launcher** | Pointer to **string** | The user who initiated the task | [optional] 
**Created** | Pointer to **SailPointTime** | The Task creation date | [optional] 
**Launched** | Pointer to **NullableTime** | The task start date | [optional] 
**Completed** | Pointer to **NullableTime** | The task completion date | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Task completion status. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent task if exists. | [optional] 
**Messages** | Pointer to [**[]LoadaccountstaskTaskMessagesInner**](loadaccountstask-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | Pointer to **NullableString** | Current task state. | [optional] 
**Attributes** | Pointer to [**LoadaccountstaskTaskAttributes**](loadaccountstask-task-attributes) |  | [optional] 
**Returns** | Pointer to [**[]LoadaccountstaskTaskReturnsInner**](loadaccountstask-task-returns-inner) | Return values from the task | [optional] 

## Methods

### NewLoadaccountstaskTask

`func NewLoadaccountstaskTask() *LoadaccountstaskTask`

NewLoadaccountstaskTask instantiates a new LoadaccountstaskTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadaccountstaskTaskWithDefaults

`func NewLoadaccountstaskTaskWithDefaults() *LoadaccountstaskTask`

NewLoadaccountstaskTaskWithDefaults instantiates a new LoadaccountstaskTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LoadaccountstaskTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LoadaccountstaskTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LoadaccountstaskTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LoadaccountstaskTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LoadaccountstaskTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadaccountstaskTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadaccountstaskTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadaccountstaskTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LoadaccountstaskTask) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LoadaccountstaskTask) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LoadaccountstaskTask) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LoadaccountstaskTask) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *LoadaccountstaskTask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LoadaccountstaskTask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LoadaccountstaskTask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LoadaccountstaskTask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *LoadaccountstaskTask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *LoadaccountstaskTask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *LoadaccountstaskTask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *LoadaccountstaskTask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *LoadaccountstaskTask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LoadaccountstaskTask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LoadaccountstaskTask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LoadaccountstaskTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *LoadaccountstaskTask) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *LoadaccountstaskTask) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *LoadaccountstaskTask) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *LoadaccountstaskTask) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *LoadaccountstaskTask) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *LoadaccountstaskTask) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *LoadaccountstaskTask) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *LoadaccountstaskTask) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *LoadaccountstaskTask) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *LoadaccountstaskTask) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *LoadaccountstaskTask) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *LoadaccountstaskTask) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *LoadaccountstaskTask) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *LoadaccountstaskTask) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *LoadaccountstaskTask) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *LoadaccountstaskTask) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *LoadaccountstaskTask) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *LoadaccountstaskTask) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetParentName

`func (o *LoadaccountstaskTask) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *LoadaccountstaskTask) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *LoadaccountstaskTask) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *LoadaccountstaskTask) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *LoadaccountstaskTask) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *LoadaccountstaskTask) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetMessages

`func (o *LoadaccountstaskTask) GetMessages() []LoadaccountstaskTaskMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *LoadaccountstaskTask) GetMessagesOk() (*[]LoadaccountstaskTaskMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *LoadaccountstaskTask) SetMessages(v []LoadaccountstaskTaskMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *LoadaccountstaskTask) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetProgress

`func (o *LoadaccountstaskTask) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *LoadaccountstaskTask) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *LoadaccountstaskTask) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *LoadaccountstaskTask) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *LoadaccountstaskTask) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *LoadaccountstaskTask) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetAttributes

`func (o *LoadaccountstaskTask) GetAttributes() LoadaccountstaskTaskAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *LoadaccountstaskTask) GetAttributesOk() (*LoadaccountstaskTaskAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *LoadaccountstaskTask) SetAttributes(v LoadaccountstaskTaskAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *LoadaccountstaskTask) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetReturns

`func (o *LoadaccountstaskTask) GetReturns() []LoadaccountstaskTaskReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *LoadaccountstaskTask) GetReturnsOk() (*[]LoadaccountstaskTaskReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *LoadaccountstaskTask) SetReturns(v []LoadaccountstaskTaskReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *LoadaccountstaskTask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


