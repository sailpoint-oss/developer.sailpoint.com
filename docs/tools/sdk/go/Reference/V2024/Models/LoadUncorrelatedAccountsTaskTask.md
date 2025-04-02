---
id: v2024-load-uncorrelated-accounts-task-task
title: LoadUncorrelatedAccountsTaskTask
pagination_label: LoadUncorrelatedAccountsTaskTask
sidebar_label: LoadUncorrelatedAccountsTaskTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadUncorrelatedAccountsTaskTask', 'V2024LoadUncorrelatedAccountsTaskTask'] 
slug: /tools/sdk/go/v2024/models/load-uncorrelated-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTask', 'V2024LoadUncorrelatedAccountsTaskTask']
---

# LoadUncorrelatedAccountsTaskTask

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
**Messages** | Pointer to [**[]LoadUncorrelatedAccountsTaskTaskMessagesInner**](load-uncorrelated-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | Pointer to **NullableString** | Current task state. | [optional] 
**Attributes** | Pointer to [**LoadUncorrelatedAccountsTaskTaskAttributes**](load-uncorrelated-accounts-task-task-attributes) |  | [optional] 
**Returns** | Pointer to **map[string]interface{}** | Return values from the task | [optional] 

## Methods

### NewLoadUncorrelatedAccountsTaskTask

`func NewLoadUncorrelatedAccountsTaskTask() *LoadUncorrelatedAccountsTaskTask`

NewLoadUncorrelatedAccountsTaskTask instantiates a new LoadUncorrelatedAccountsTaskTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadUncorrelatedAccountsTaskTaskWithDefaults

`func NewLoadUncorrelatedAccountsTaskTaskWithDefaults() *LoadUncorrelatedAccountsTaskTask`

NewLoadUncorrelatedAccountsTaskTaskWithDefaults instantiates a new LoadUncorrelatedAccountsTaskTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LoadUncorrelatedAccountsTaskTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LoadUncorrelatedAccountsTaskTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LoadUncorrelatedAccountsTaskTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LoadUncorrelatedAccountsTaskTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadUncorrelatedAccountsTaskTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadUncorrelatedAccountsTaskTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LoadUncorrelatedAccountsTaskTask) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LoadUncorrelatedAccountsTaskTask) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LoadUncorrelatedAccountsTaskTask) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *LoadUncorrelatedAccountsTaskTask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LoadUncorrelatedAccountsTaskTask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LoadUncorrelatedAccountsTaskTask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *LoadUncorrelatedAccountsTaskTask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *LoadUncorrelatedAccountsTaskTask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *LoadUncorrelatedAccountsTaskTask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *LoadUncorrelatedAccountsTaskTask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LoadUncorrelatedAccountsTaskTask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LoadUncorrelatedAccountsTaskTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *LoadUncorrelatedAccountsTaskTask) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *LoadUncorrelatedAccountsTaskTask) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *LoadUncorrelatedAccountsTaskTask) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *LoadUncorrelatedAccountsTaskTask) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *LoadUncorrelatedAccountsTaskTask) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *LoadUncorrelatedAccountsTaskTask) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *LoadUncorrelatedAccountsTaskTask) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *LoadUncorrelatedAccountsTaskTask) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *LoadUncorrelatedAccountsTaskTask) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *LoadUncorrelatedAccountsTaskTask) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *LoadUncorrelatedAccountsTaskTask) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *LoadUncorrelatedAccountsTaskTask) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *LoadUncorrelatedAccountsTaskTask) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *LoadUncorrelatedAccountsTaskTask) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *LoadUncorrelatedAccountsTaskTask) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetParentName

`func (o *LoadUncorrelatedAccountsTaskTask) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *LoadUncorrelatedAccountsTaskTask) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *LoadUncorrelatedAccountsTaskTask) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *LoadUncorrelatedAccountsTaskTask) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *LoadUncorrelatedAccountsTaskTask) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetMessages

`func (o *LoadUncorrelatedAccountsTaskTask) GetMessages() []LoadUncorrelatedAccountsTaskTaskMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetMessagesOk() (*[]LoadUncorrelatedAccountsTaskTaskMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *LoadUncorrelatedAccountsTaskTask) SetMessages(v []LoadUncorrelatedAccountsTaskTaskMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *LoadUncorrelatedAccountsTaskTask) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetProgress

`func (o *LoadUncorrelatedAccountsTaskTask) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *LoadUncorrelatedAccountsTaskTask) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *LoadUncorrelatedAccountsTaskTask) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *LoadUncorrelatedAccountsTaskTask) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *LoadUncorrelatedAccountsTaskTask) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetAttributes

`func (o *LoadUncorrelatedAccountsTaskTask) GetAttributes() LoadUncorrelatedAccountsTaskTaskAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetAttributesOk() (*LoadUncorrelatedAccountsTaskTaskAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *LoadUncorrelatedAccountsTaskTask) SetAttributes(v LoadUncorrelatedAccountsTaskTaskAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *LoadUncorrelatedAccountsTaskTask) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetReturns

`func (o *LoadUncorrelatedAccountsTaskTask) GetReturns() map[string]interface{}`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *LoadUncorrelatedAccountsTaskTask) GetReturnsOk() (*map[string]interface{}, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *LoadUncorrelatedAccountsTaskTask) SetReturns(v map[string]interface{})`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *LoadUncorrelatedAccountsTaskTask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


