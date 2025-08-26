---
id: v2025-machine-identity-aggregation-response
title: MachineIdentityAggregationResponse
pagination_label: MachineIdentityAggregationResponse
sidebar_label: MachineIdentityAggregationResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse'] 
slug: /tools/sdk/go/v2025/models/machine-identity-aggregation-response
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse']
---

# MachineIdentityAggregationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**Type** | Pointer to **string** | Type of task for aggregation | [optional] 
**UniqueName** | Pointer to **string** | Name of the task for aggregation | [optional] 
**Description** | Pointer to **string** | Description of the aggregation | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent of the task for aggregation | [optional] 
**Launcher** | Pointer to **string** | Service to execute the aggregation | [optional] 
**Target** | Pointer to [**MachineIdentityAggregationResponseTarget**](machine-identity-aggregation-response-target) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of the aggregation | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the aggregation | [optional] 
**Launched** | Pointer to **NullableTime** | Launch date of the aggregation | [optional] 
**Completed** | Pointer to **NullableTime** | Completion date of the aggregation | [optional] 
**TaskDefinitionSummary** | Pointer to [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Completion status of the aggregation | [optional] 
**Messages** | Pointer to [**[]TaskStatusMessage**](task-status-message) | Messages associated with the aggregation | [optional] 
**Returns** | Pointer to [**[]TaskReturnDetails**](task-return-details) | Return values associated with the aggregation | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of the aggregation | [optional] 
**Progress** | Pointer to **NullableString** | Current progress of aggregation | [optional] 
**PercentComplete** | Pointer to **int32** | Current percentage completion of aggregation | [optional] 

## Methods

### NewMachineIdentityAggregationResponse

`func NewMachineIdentityAggregationResponse() *MachineIdentityAggregationResponse`

NewMachineIdentityAggregationResponse instantiates a new MachineIdentityAggregationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAggregationResponseWithDefaults

`func NewMachineIdentityAggregationResponseWithDefaults() *MachineIdentityAggregationResponse`

NewMachineIdentityAggregationResponseWithDefaults instantiates a new MachineIdentityAggregationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityAggregationResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityAggregationResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityAggregationResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityAggregationResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *MachineIdentityAggregationResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MachineIdentityAggregationResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MachineIdentityAggregationResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MachineIdentityAggregationResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *MachineIdentityAggregationResponse) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *MachineIdentityAggregationResponse) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *MachineIdentityAggregationResponse) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *MachineIdentityAggregationResponse) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *MachineIdentityAggregationResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentityAggregationResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentityAggregationResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentityAggregationResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *MachineIdentityAggregationResponse) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *MachineIdentityAggregationResponse) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *MachineIdentityAggregationResponse) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *MachineIdentityAggregationResponse) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *MachineIdentityAggregationResponse) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *MachineIdentityAggregationResponse) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *MachineIdentityAggregationResponse) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *MachineIdentityAggregationResponse) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *MachineIdentityAggregationResponse) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *MachineIdentityAggregationResponse) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetTarget

`func (o *MachineIdentityAggregationResponse) GetTarget() MachineIdentityAggregationResponseTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *MachineIdentityAggregationResponse) GetTargetOk() (*MachineIdentityAggregationResponseTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *MachineIdentityAggregationResponse) SetTarget(v MachineIdentityAggregationResponseTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *MachineIdentityAggregationResponse) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetCreated

`func (o *MachineIdentityAggregationResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityAggregationResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityAggregationResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineIdentityAggregationResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineIdentityAggregationResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentityAggregationResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentityAggregationResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineIdentityAggregationResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetLaunched

`func (o *MachineIdentityAggregationResponse) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *MachineIdentityAggregationResponse) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *MachineIdentityAggregationResponse) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *MachineIdentityAggregationResponse) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *MachineIdentityAggregationResponse) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *MachineIdentityAggregationResponse) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *MachineIdentityAggregationResponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *MachineIdentityAggregationResponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *MachineIdentityAggregationResponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *MachineIdentityAggregationResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *MachineIdentityAggregationResponse) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *MachineIdentityAggregationResponse) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetTaskDefinitionSummary

`func (o *MachineIdentityAggregationResponse) GetTaskDefinitionSummary() TaskDefinitionSummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *MachineIdentityAggregationResponse) GetTaskDefinitionSummaryOk() (*TaskDefinitionSummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *MachineIdentityAggregationResponse) SetTaskDefinitionSummary(v TaskDefinitionSummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *MachineIdentityAggregationResponse) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *MachineIdentityAggregationResponse) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *MachineIdentityAggregationResponse) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *MachineIdentityAggregationResponse) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *MachineIdentityAggregationResponse) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *MachineIdentityAggregationResponse) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *MachineIdentityAggregationResponse) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *MachineIdentityAggregationResponse) GetMessages() []TaskStatusMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *MachineIdentityAggregationResponse) GetMessagesOk() (*[]TaskStatusMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *MachineIdentityAggregationResponse) SetMessages(v []TaskStatusMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *MachineIdentityAggregationResponse) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *MachineIdentityAggregationResponse) GetReturns() []TaskReturnDetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *MachineIdentityAggregationResponse) GetReturnsOk() (*[]TaskReturnDetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *MachineIdentityAggregationResponse) SetReturns(v []TaskReturnDetails)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *MachineIdentityAggregationResponse) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentityAggregationResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentityAggregationResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentityAggregationResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentityAggregationResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *MachineIdentityAggregationResponse) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *MachineIdentityAggregationResponse) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *MachineIdentityAggregationResponse) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *MachineIdentityAggregationResponse) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *MachineIdentityAggregationResponse) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *MachineIdentityAggregationResponse) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *MachineIdentityAggregationResponse) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *MachineIdentityAggregationResponse) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *MachineIdentityAggregationResponse) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.

### HasPercentComplete

`func (o *MachineIdentityAggregationResponse) HasPercentComplete() bool`

HasPercentComplete returns a boolean if a field has been set.


