---
id: v1-machineidentityaggregationresponse
title: Machineidentityaggregationresponse
pagination_label: Machineidentityaggregationresponse
sidebar_label: Machineidentityaggregationresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityaggregationresponse', 'V1Machineidentityaggregationresponse'] 
slug: /tools/sdk/go/machineidentities/models/machineidentityaggregationresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityaggregationresponse', 'V1Machineidentityaggregationresponse']
---

# Machineidentityaggregationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**Type** | Pointer to **string** | Type of task for aggregation | [optional] 
**UniqueName** | Pointer to **string** | Name of the task for aggregation | [optional] 
**Description** | Pointer to **string** | Description of the aggregation | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent of the task for aggregation | [optional] 
**Launcher** | Pointer to **string** | Service to execute the aggregation | [optional] 
**Target** | Pointer to [**MachineidentityaggregationresponseTarget**](machineidentityaggregationresponse-target) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of the aggregation | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the aggregation | [optional] 
**Launched** | Pointer to **NullableTime** | Launch date of the aggregation | [optional] 
**Completed** | Pointer to **NullableTime** | Completion date of the aggregation | [optional] 
**TaskDefinitionSummary** | Pointer to [**Taskdefinitionsummary**](taskdefinitionsummary) |  | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Completion status of the aggregation | [optional] 
**Messages** | Pointer to [**[]Taskstatusmessage**](taskstatusmessage) | Messages associated with the aggregation | [optional] 
**Returns** | Pointer to [**[]Taskreturndetails**](taskreturndetails) | Return values associated with the aggregation | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of the aggregation | [optional] 
**Progress** | Pointer to **NullableString** | Current progress of aggregation | [optional] 
**PercentComplete** | Pointer to **int32** | Current percentage completion of aggregation | [optional] 

## Methods

### NewMachineidentityaggregationresponse

`func NewMachineidentityaggregationresponse() *Machineidentityaggregationresponse`

NewMachineidentityaggregationresponse instantiates a new Machineidentityaggregationresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityaggregationresponseWithDefaults

`func NewMachineidentityaggregationresponseWithDefaults() *Machineidentityaggregationresponse`

NewMachineidentityaggregationresponseWithDefaults instantiates a new Machineidentityaggregationresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentityaggregationresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityaggregationresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityaggregationresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentityaggregationresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Machineidentityaggregationresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Machineidentityaggregationresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Machineidentityaggregationresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Machineidentityaggregationresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *Machineidentityaggregationresponse) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *Machineidentityaggregationresponse) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *Machineidentityaggregationresponse) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *Machineidentityaggregationresponse) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *Machineidentityaggregationresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentityaggregationresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentityaggregationresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentityaggregationresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *Machineidentityaggregationresponse) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *Machineidentityaggregationresponse) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *Machineidentityaggregationresponse) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *Machineidentityaggregationresponse) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *Machineidentityaggregationresponse) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *Machineidentityaggregationresponse) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *Machineidentityaggregationresponse) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Machineidentityaggregationresponse) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Machineidentityaggregationresponse) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *Machineidentityaggregationresponse) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetTarget

`func (o *Machineidentityaggregationresponse) GetTarget() MachineidentityaggregationresponseTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Machineidentityaggregationresponse) GetTargetOk() (*MachineidentityaggregationresponseTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Machineidentityaggregationresponse) SetTarget(v MachineidentityaggregationresponseTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *Machineidentityaggregationresponse) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetCreated

`func (o *Machineidentityaggregationresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentityaggregationresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentityaggregationresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentityaggregationresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentityaggregationresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentityaggregationresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentityaggregationresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentityaggregationresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetLaunched

`func (o *Machineidentityaggregationresponse) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *Machineidentityaggregationresponse) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *Machineidentityaggregationresponse) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *Machineidentityaggregationresponse) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *Machineidentityaggregationresponse) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *Machineidentityaggregationresponse) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *Machineidentityaggregationresponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Machineidentityaggregationresponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Machineidentityaggregationresponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Machineidentityaggregationresponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Machineidentityaggregationresponse) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Machineidentityaggregationresponse) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetTaskDefinitionSummary

`func (o *Machineidentityaggregationresponse) GetTaskDefinitionSummary() Taskdefinitionsummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *Machineidentityaggregationresponse) GetTaskDefinitionSummaryOk() (*Taskdefinitionsummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *Machineidentityaggregationresponse) SetTaskDefinitionSummary(v Taskdefinitionsummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *Machineidentityaggregationresponse) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *Machineidentityaggregationresponse) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Machineidentityaggregationresponse) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Machineidentityaggregationresponse) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *Machineidentityaggregationresponse) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *Machineidentityaggregationresponse) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *Machineidentityaggregationresponse) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *Machineidentityaggregationresponse) GetMessages() []Taskstatusmessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Machineidentityaggregationresponse) GetMessagesOk() (*[]Taskstatusmessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Machineidentityaggregationresponse) SetMessages(v []Taskstatusmessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Machineidentityaggregationresponse) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *Machineidentityaggregationresponse) GetReturns() []Taskreturndetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *Machineidentityaggregationresponse) GetReturnsOk() (*[]Taskreturndetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *Machineidentityaggregationresponse) SetReturns(v []Taskreturndetails)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *Machineidentityaggregationresponse) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *Machineidentityaggregationresponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Machineidentityaggregationresponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Machineidentityaggregationresponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Machineidentityaggregationresponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *Machineidentityaggregationresponse) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *Machineidentityaggregationresponse) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *Machineidentityaggregationresponse) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *Machineidentityaggregationresponse) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *Machineidentityaggregationresponse) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *Machineidentityaggregationresponse) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *Machineidentityaggregationresponse) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *Machineidentityaggregationresponse) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *Machineidentityaggregationresponse) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.

### HasPercentComplete

`func (o *Machineidentityaggregationresponse) HasPercentComplete() bool`

HasPercentComplete returns a boolean if a field has been set.


