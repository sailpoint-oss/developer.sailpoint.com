---
id: v1-loaduncorrelatedaccountstask-task
title: LoaduncorrelatedaccountstaskTask
pagination_label: LoaduncorrelatedaccountstaskTask
sidebar_label: LoaduncorrelatedaccountstaskTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoaduncorrelatedaccountstaskTask', 'V1LoaduncorrelatedaccountstaskTask'] 
slug: /tools/sdk/go/sources/models/loaduncorrelatedaccountstask-task
tags: ['SDK', 'Software Development Kit', 'LoaduncorrelatedaccountstaskTask', 'V1LoaduncorrelatedaccountstaskTask']
---

# LoaduncorrelatedaccountstaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | Pointer to **string** | Type of task this task represents | [optional] 
**Name** | Pointer to **string** | The name of uncorrelated accounts process | [optional] 
**Description** | Pointer to **string** | The description of the task | [optional] 
**Launcher** | Pointer to **string** | The user who initiated the task | [optional] 
**Created** | Pointer to **SailPointTime** | The Task creation date | [optional] 
**Launched** | Pointer to **NullableTime** | The task start date | [optional] 
**Completed** | Pointer to **NullableTime** | The task completion date | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Task completion status. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent task if exists. | [optional] 
**Messages** | Pointer to [**[]LoaduncorrelatedaccountstaskTaskMessagesInner**](loaduncorrelatedaccountstask-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | Pointer to **NullableString** | Current task state. | [optional] 
**Attributes** | Pointer to [**LoaduncorrelatedaccountstaskTaskAttributes**](loaduncorrelatedaccountstask-task-attributes) |  | [optional] 
**Returns** | Pointer to **map[string]interface{}** | Return values from the task | [optional] 

## Methods

### NewLoaduncorrelatedaccountstaskTask

`func NewLoaduncorrelatedaccountstaskTask() *LoaduncorrelatedaccountstaskTask`

NewLoaduncorrelatedaccountstaskTask instantiates a new LoaduncorrelatedaccountstaskTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoaduncorrelatedaccountstaskTaskWithDefaults

`func NewLoaduncorrelatedaccountstaskTaskWithDefaults() *LoaduncorrelatedaccountstaskTask`

NewLoaduncorrelatedaccountstaskTaskWithDefaults instantiates a new LoaduncorrelatedaccountstaskTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LoaduncorrelatedaccountstaskTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LoaduncorrelatedaccountstaskTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LoaduncorrelatedaccountstaskTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LoaduncorrelatedaccountstaskTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LoaduncorrelatedaccountstaskTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoaduncorrelatedaccountstaskTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoaduncorrelatedaccountstaskTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoaduncorrelatedaccountstaskTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LoaduncorrelatedaccountstaskTask) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LoaduncorrelatedaccountstaskTask) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LoaduncorrelatedaccountstaskTask) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LoaduncorrelatedaccountstaskTask) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *LoaduncorrelatedaccountstaskTask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LoaduncorrelatedaccountstaskTask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LoaduncorrelatedaccountstaskTask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LoaduncorrelatedaccountstaskTask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *LoaduncorrelatedaccountstaskTask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *LoaduncorrelatedaccountstaskTask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *LoaduncorrelatedaccountstaskTask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *LoaduncorrelatedaccountstaskTask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *LoaduncorrelatedaccountstaskTask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LoaduncorrelatedaccountstaskTask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LoaduncorrelatedaccountstaskTask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LoaduncorrelatedaccountstaskTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *LoaduncorrelatedaccountstaskTask) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *LoaduncorrelatedaccountstaskTask) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *LoaduncorrelatedaccountstaskTask) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *LoaduncorrelatedaccountstaskTask) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *LoaduncorrelatedaccountstaskTask) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *LoaduncorrelatedaccountstaskTask) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *LoaduncorrelatedaccountstaskTask) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *LoaduncorrelatedaccountstaskTask) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *LoaduncorrelatedaccountstaskTask) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *LoaduncorrelatedaccountstaskTask) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *LoaduncorrelatedaccountstaskTask) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *LoaduncorrelatedaccountstaskTask) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *LoaduncorrelatedaccountstaskTask) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *LoaduncorrelatedaccountstaskTask) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *LoaduncorrelatedaccountstaskTask) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *LoaduncorrelatedaccountstaskTask) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *LoaduncorrelatedaccountstaskTask) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *LoaduncorrelatedaccountstaskTask) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetParentName

`func (o *LoaduncorrelatedaccountstaskTask) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *LoaduncorrelatedaccountstaskTask) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *LoaduncorrelatedaccountstaskTask) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *LoaduncorrelatedaccountstaskTask) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *LoaduncorrelatedaccountstaskTask) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *LoaduncorrelatedaccountstaskTask) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetMessages

`func (o *LoaduncorrelatedaccountstaskTask) GetMessages() []LoaduncorrelatedaccountstaskTaskMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *LoaduncorrelatedaccountstaskTask) GetMessagesOk() (*[]LoaduncorrelatedaccountstaskTaskMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *LoaduncorrelatedaccountstaskTask) SetMessages(v []LoaduncorrelatedaccountstaskTaskMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *LoaduncorrelatedaccountstaskTask) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetProgress

`func (o *LoaduncorrelatedaccountstaskTask) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *LoaduncorrelatedaccountstaskTask) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *LoaduncorrelatedaccountstaskTask) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *LoaduncorrelatedaccountstaskTask) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *LoaduncorrelatedaccountstaskTask) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *LoaduncorrelatedaccountstaskTask) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetAttributes

`func (o *LoaduncorrelatedaccountstaskTask) GetAttributes() LoaduncorrelatedaccountstaskTaskAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *LoaduncorrelatedaccountstaskTask) GetAttributesOk() (*LoaduncorrelatedaccountstaskTaskAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *LoaduncorrelatedaccountstaskTask) SetAttributes(v LoaduncorrelatedaccountstaskTaskAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *LoaduncorrelatedaccountstaskTask) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetReturns

`func (o *LoaduncorrelatedaccountstaskTask) GetReturns() map[string]interface{}`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *LoaduncorrelatedaccountstaskTask) GetReturnsOk() (*map[string]interface{}, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *LoaduncorrelatedaccountstaskTask) SetReturns(v map[string]interface{})`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *LoaduncorrelatedaccountstaskTask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


