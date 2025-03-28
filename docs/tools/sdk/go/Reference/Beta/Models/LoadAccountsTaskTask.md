---
id: beta-load-accounts-task-task
title: LoadAccountsTaskTask
pagination_label: LoadAccountsTaskTask
sidebar_label: LoadAccountsTaskTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadAccountsTaskTask', 'BetaLoadAccountsTaskTask'] 
slug: /tools/sdk/go/beta/models/load-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTask', 'BetaLoadAccountsTaskTask']
---

# LoadAccountsTaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | Pointer to **string** | Type of task this task represents | [optional] 
**Name** | Pointer to **string** | The name of the aggregation process | [optional] 
**Description** | Pointer to **string** | The description of the task | [optional] 
**Launcher** | Pointer to **string** | The user who initiated the task | [optional] 
**Created** | Pointer to **time.Time** | The Task creation date | [optional] 
**Launched** | Pointer to **NullableTime** | The task start date | [optional] 
**Completed** | Pointer to **NullableTime** | The task completion date | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Task completion status. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent task if exists. | [optional] 
**Messages** | Pointer to [**[]LoadAccountsTaskTaskMessagesInner**](load-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | Pointer to **NullableString** | Current task state. | [optional] 
**Attributes** | Pointer to [**LoadAccountsTaskTaskAttributes**](load-accounts-task-task-attributes) |  | [optional] 
**Returns** | Pointer to [**[]LoadAccountsTaskTaskReturnsInner**](load-accounts-task-task-returns-inner) | Return values from the task | [optional] 

## Methods

### NewLoadAccountsTaskTask

`func NewLoadAccountsTaskTask() *LoadAccountsTaskTask`

NewLoadAccountsTaskTask instantiates a new LoadAccountsTaskTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadAccountsTaskTaskWithDefaults

`func NewLoadAccountsTaskTaskWithDefaults() *LoadAccountsTaskTask`

NewLoadAccountsTaskTaskWithDefaults instantiates a new LoadAccountsTaskTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LoadAccountsTaskTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LoadAccountsTaskTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LoadAccountsTaskTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LoadAccountsTaskTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LoadAccountsTaskTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadAccountsTaskTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadAccountsTaskTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadAccountsTaskTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LoadAccountsTaskTask) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LoadAccountsTaskTask) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LoadAccountsTaskTask) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LoadAccountsTaskTask) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *LoadAccountsTaskTask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LoadAccountsTaskTask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LoadAccountsTaskTask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LoadAccountsTaskTask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *LoadAccountsTaskTask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *LoadAccountsTaskTask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *LoadAccountsTaskTask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *LoadAccountsTaskTask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *LoadAccountsTaskTask) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LoadAccountsTaskTask) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LoadAccountsTaskTask) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LoadAccountsTaskTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *LoadAccountsTaskTask) GetLaunched() time.Time`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *LoadAccountsTaskTask) GetLaunchedOk() (*time.Time, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *LoadAccountsTaskTask) SetLaunched(v time.Time)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *LoadAccountsTaskTask) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *LoadAccountsTaskTask) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *LoadAccountsTaskTask) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *LoadAccountsTaskTask) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *LoadAccountsTaskTask) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *LoadAccountsTaskTask) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *LoadAccountsTaskTask) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *LoadAccountsTaskTask) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *LoadAccountsTaskTask) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *LoadAccountsTaskTask) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *LoadAccountsTaskTask) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *LoadAccountsTaskTask) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *LoadAccountsTaskTask) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *LoadAccountsTaskTask) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *LoadAccountsTaskTask) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetParentName

`func (o *LoadAccountsTaskTask) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *LoadAccountsTaskTask) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *LoadAccountsTaskTask) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *LoadAccountsTaskTask) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *LoadAccountsTaskTask) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *LoadAccountsTaskTask) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetMessages

`func (o *LoadAccountsTaskTask) GetMessages() []LoadAccountsTaskTaskMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *LoadAccountsTaskTask) GetMessagesOk() (*[]LoadAccountsTaskTaskMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *LoadAccountsTaskTask) SetMessages(v []LoadAccountsTaskTaskMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *LoadAccountsTaskTask) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetProgress

`func (o *LoadAccountsTaskTask) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *LoadAccountsTaskTask) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *LoadAccountsTaskTask) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *LoadAccountsTaskTask) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *LoadAccountsTaskTask) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *LoadAccountsTaskTask) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetAttributes

`func (o *LoadAccountsTaskTask) GetAttributes() LoadAccountsTaskTaskAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *LoadAccountsTaskTask) GetAttributesOk() (*LoadAccountsTaskTaskAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *LoadAccountsTaskTask) SetAttributes(v LoadAccountsTaskTaskAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *LoadAccountsTaskTask) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetReturns

`func (o *LoadAccountsTaskTask) GetReturns() []LoadAccountsTaskTaskReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *LoadAccountsTaskTask) GetReturnsOk() (*[]LoadAccountsTaskTaskReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *LoadAccountsTaskTask) SetReturns(v []LoadAccountsTaskTaskReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *LoadAccountsTaskTask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


