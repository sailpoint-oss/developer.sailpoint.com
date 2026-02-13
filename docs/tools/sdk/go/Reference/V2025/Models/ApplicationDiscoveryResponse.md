---
id: v2025-application-discovery-response
title: ApplicationDiscoveryResponse
pagination_label: ApplicationDiscoveryResponse
sidebar_label: ApplicationDiscoveryResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationDiscoveryResponse', 'V2025ApplicationDiscoveryResponse'] 
slug: /tools/sdk/go/v2025/models/application-discovery-response
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscoveryResponse', 'V2025ApplicationDiscoveryResponse']
---

# ApplicationDiscoveryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**Type** | Pointer to **string** | Type of task for app discovery | [optional] 
**UniqueName** | Pointer to **string** | Name of the task for app discovery | [optional] 
**Description** | Pointer to **string** | Description of the app discovery aggregation | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent of the task for app discovery | [optional] 
**Launcher** | Pointer to **string** | Service to execute app discovery | [optional] 
**Target** | Pointer to [**ApplicationDiscoveryResponseTarget**](application-discovery-response-target) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of app discovery task | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modification date of app discovery task | [optional] 
**Launched** | Pointer to **NullableTime** | Launch date of app discovery task | [optional] 
**Completed** | Pointer to **NullableTime** | Completion date of app discovery task | [optional] 
**TaskDefinitionSummary** | Pointer to [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Completion status of app discovery task | [optional] 
**Messages** | Pointer to [**[]TaskStatusMessage**](task-status-message) | Messages associated with the app discovery task | [optional] 
**Returns** | Pointer to [**[]TaskReturnDetails**](task-return-details) | Return values associated with the app discovery task | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of the app discovery task | [optional] 
**Progress** | Pointer to **NullableString** | Current progress of aggregation | [optional] 
**PercentComplete** | Pointer to **int32** | Current percentage completion of app discovery task | [optional] 

## Methods

### NewApplicationDiscoveryResponse

`func NewApplicationDiscoveryResponse() *ApplicationDiscoveryResponse`

NewApplicationDiscoveryResponse instantiates a new ApplicationDiscoveryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationDiscoveryResponseWithDefaults

`func NewApplicationDiscoveryResponseWithDefaults() *ApplicationDiscoveryResponse`

NewApplicationDiscoveryResponseWithDefaults instantiates a new ApplicationDiscoveryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApplicationDiscoveryResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApplicationDiscoveryResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApplicationDiscoveryResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApplicationDiscoveryResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ApplicationDiscoveryResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApplicationDiscoveryResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApplicationDiscoveryResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApplicationDiscoveryResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *ApplicationDiscoveryResponse) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *ApplicationDiscoveryResponse) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *ApplicationDiscoveryResponse) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *ApplicationDiscoveryResponse) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *ApplicationDiscoveryResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApplicationDiscoveryResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApplicationDiscoveryResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ApplicationDiscoveryResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *ApplicationDiscoveryResponse) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *ApplicationDiscoveryResponse) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *ApplicationDiscoveryResponse) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *ApplicationDiscoveryResponse) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *ApplicationDiscoveryResponse) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *ApplicationDiscoveryResponse) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *ApplicationDiscoveryResponse) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *ApplicationDiscoveryResponse) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *ApplicationDiscoveryResponse) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *ApplicationDiscoveryResponse) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetTarget

`func (o *ApplicationDiscoveryResponse) GetTarget() ApplicationDiscoveryResponseTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *ApplicationDiscoveryResponse) GetTargetOk() (*ApplicationDiscoveryResponseTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *ApplicationDiscoveryResponse) SetTarget(v ApplicationDiscoveryResponseTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *ApplicationDiscoveryResponse) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetCreated

`func (o *ApplicationDiscoveryResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ApplicationDiscoveryResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ApplicationDiscoveryResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ApplicationDiscoveryResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *ApplicationDiscoveryResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ApplicationDiscoveryResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ApplicationDiscoveryResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ApplicationDiscoveryResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetLaunched

`func (o *ApplicationDiscoveryResponse) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *ApplicationDiscoveryResponse) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *ApplicationDiscoveryResponse) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *ApplicationDiscoveryResponse) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *ApplicationDiscoveryResponse) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *ApplicationDiscoveryResponse) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *ApplicationDiscoveryResponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *ApplicationDiscoveryResponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *ApplicationDiscoveryResponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *ApplicationDiscoveryResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *ApplicationDiscoveryResponse) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *ApplicationDiscoveryResponse) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetTaskDefinitionSummary

`func (o *ApplicationDiscoveryResponse) GetTaskDefinitionSummary() TaskDefinitionSummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *ApplicationDiscoveryResponse) GetTaskDefinitionSummaryOk() (*TaskDefinitionSummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *ApplicationDiscoveryResponse) SetTaskDefinitionSummary(v TaskDefinitionSummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *ApplicationDiscoveryResponse) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *ApplicationDiscoveryResponse) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *ApplicationDiscoveryResponse) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *ApplicationDiscoveryResponse) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *ApplicationDiscoveryResponse) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *ApplicationDiscoveryResponse) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *ApplicationDiscoveryResponse) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *ApplicationDiscoveryResponse) GetMessages() []TaskStatusMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ApplicationDiscoveryResponse) GetMessagesOk() (*[]TaskStatusMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ApplicationDiscoveryResponse) SetMessages(v []TaskStatusMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *ApplicationDiscoveryResponse) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *ApplicationDiscoveryResponse) GetReturns() []TaskReturnDetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *ApplicationDiscoveryResponse) GetReturnsOk() (*[]TaskReturnDetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *ApplicationDiscoveryResponse) SetReturns(v []TaskReturnDetails)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *ApplicationDiscoveryResponse) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *ApplicationDiscoveryResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ApplicationDiscoveryResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ApplicationDiscoveryResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ApplicationDiscoveryResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *ApplicationDiscoveryResponse) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *ApplicationDiscoveryResponse) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *ApplicationDiscoveryResponse) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *ApplicationDiscoveryResponse) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *ApplicationDiscoveryResponse) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *ApplicationDiscoveryResponse) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *ApplicationDiscoveryResponse) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *ApplicationDiscoveryResponse) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *ApplicationDiscoveryResponse) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.

### HasPercentComplete

`func (o *ApplicationDiscoveryResponse) HasPercentComplete() bool`

HasPercentComplete returns a boolean if a field has been set.


