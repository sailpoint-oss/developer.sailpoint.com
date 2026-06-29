---
id: v1-applicationdiscoveryresponse
title: Applicationdiscoveryresponse
pagination_label: Applicationdiscoveryresponse
sidebar_label: Applicationdiscoveryresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Applicationdiscoveryresponse', 'V1Applicationdiscoveryresponse'] 
slug: /tools/sdk/go/applicationdiscovery/models/applicationdiscoveryresponse
tags: ['SDK', 'Software Development Kit', 'Applicationdiscoveryresponse', 'V1Applicationdiscoveryresponse']
---

# Applicationdiscoveryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**Type** | Pointer to **string** | Type of task for app discovery | [optional] 
**UniqueName** | Pointer to **string** | Name of the task for app discovery | [optional] 
**Description** | Pointer to **string** | Description of the app discovery aggregation | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent of the task for app discovery | [optional] 
**Launcher** | Pointer to **string** | Service to execute app discovery | [optional] 
**Target** | Pointer to [**ApplicationdiscoveryresponseTarget**](applicationdiscoveryresponse-target) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of app discovery task | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modification date of app discovery task | [optional] 
**Launched** | Pointer to **NullableTime** | Launch date of app discovery task | [optional] 
**Completed** | Pointer to **NullableTime** | Completion date of app discovery task | [optional] 
**TaskDefinitionSummary** | Pointer to [**Taskdefinitionsummary**](taskdefinitionsummary) |  | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Completion status of app discovery task | [optional] 
**Messages** | Pointer to [**[]Taskstatusmessage**](taskstatusmessage) | Messages associated with the app discovery task | [optional] 
**Returns** | Pointer to [**[]Taskreturndetails**](taskreturndetails) | Return values associated with the app discovery task | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of the app discovery task | [optional] 
**Progress** | Pointer to **NullableString** | Current progress of aggregation | [optional] 
**PercentComplete** | Pointer to **int32** | Current percentage completion of app discovery task | [optional] 

## Methods

### NewApplicationdiscoveryresponse

`func NewApplicationdiscoveryresponse() *Applicationdiscoveryresponse`

NewApplicationdiscoveryresponse instantiates a new Applicationdiscoveryresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationdiscoveryresponseWithDefaults

`func NewApplicationdiscoveryresponseWithDefaults() *Applicationdiscoveryresponse`

NewApplicationdiscoveryresponseWithDefaults instantiates a new Applicationdiscoveryresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Applicationdiscoveryresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Applicationdiscoveryresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Applicationdiscoveryresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Applicationdiscoveryresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Applicationdiscoveryresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Applicationdiscoveryresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Applicationdiscoveryresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Applicationdiscoveryresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *Applicationdiscoveryresponse) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *Applicationdiscoveryresponse) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *Applicationdiscoveryresponse) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *Applicationdiscoveryresponse) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *Applicationdiscoveryresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Applicationdiscoveryresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Applicationdiscoveryresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Applicationdiscoveryresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *Applicationdiscoveryresponse) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *Applicationdiscoveryresponse) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *Applicationdiscoveryresponse) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *Applicationdiscoveryresponse) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *Applicationdiscoveryresponse) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *Applicationdiscoveryresponse) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *Applicationdiscoveryresponse) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Applicationdiscoveryresponse) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Applicationdiscoveryresponse) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *Applicationdiscoveryresponse) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetTarget

`func (o *Applicationdiscoveryresponse) GetTarget() ApplicationdiscoveryresponseTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Applicationdiscoveryresponse) GetTargetOk() (*ApplicationdiscoveryresponseTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Applicationdiscoveryresponse) SetTarget(v ApplicationdiscoveryresponseTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *Applicationdiscoveryresponse) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetCreated

`func (o *Applicationdiscoveryresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Applicationdiscoveryresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Applicationdiscoveryresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Applicationdiscoveryresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Applicationdiscoveryresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Applicationdiscoveryresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Applicationdiscoveryresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Applicationdiscoveryresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetLaunched

`func (o *Applicationdiscoveryresponse) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *Applicationdiscoveryresponse) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *Applicationdiscoveryresponse) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *Applicationdiscoveryresponse) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *Applicationdiscoveryresponse) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *Applicationdiscoveryresponse) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *Applicationdiscoveryresponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Applicationdiscoveryresponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Applicationdiscoveryresponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Applicationdiscoveryresponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Applicationdiscoveryresponse) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Applicationdiscoveryresponse) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetTaskDefinitionSummary

`func (o *Applicationdiscoveryresponse) GetTaskDefinitionSummary() Taskdefinitionsummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *Applicationdiscoveryresponse) GetTaskDefinitionSummaryOk() (*Taskdefinitionsummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *Applicationdiscoveryresponse) SetTaskDefinitionSummary(v Taskdefinitionsummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *Applicationdiscoveryresponse) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *Applicationdiscoveryresponse) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Applicationdiscoveryresponse) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Applicationdiscoveryresponse) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *Applicationdiscoveryresponse) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *Applicationdiscoveryresponse) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *Applicationdiscoveryresponse) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *Applicationdiscoveryresponse) GetMessages() []Taskstatusmessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Applicationdiscoveryresponse) GetMessagesOk() (*[]Taskstatusmessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Applicationdiscoveryresponse) SetMessages(v []Taskstatusmessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Applicationdiscoveryresponse) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *Applicationdiscoveryresponse) GetReturns() []Taskreturndetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *Applicationdiscoveryresponse) GetReturnsOk() (*[]Taskreturndetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *Applicationdiscoveryresponse) SetReturns(v []Taskreturndetails)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *Applicationdiscoveryresponse) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *Applicationdiscoveryresponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Applicationdiscoveryresponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Applicationdiscoveryresponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Applicationdiscoveryresponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *Applicationdiscoveryresponse) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *Applicationdiscoveryresponse) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *Applicationdiscoveryresponse) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *Applicationdiscoveryresponse) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *Applicationdiscoveryresponse) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *Applicationdiscoveryresponse) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *Applicationdiscoveryresponse) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *Applicationdiscoveryresponse) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *Applicationdiscoveryresponse) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.

### HasPercentComplete

`func (o *Applicationdiscoveryresponse) HasPercentComplete() bool`

HasPercentComplete returns a boolean if a field has been set.


