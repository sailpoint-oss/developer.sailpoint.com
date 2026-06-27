---
id: v1-taskresultdetails
title: Taskresultdetails
pagination_label: Taskresultdetails
sidebar_label: Taskresultdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskresultdetails', 'V1Taskresultdetails'] 
slug: /tools/sdk/go/reportsdataextraction/models/taskresultdetails
tags: ['SDK', 'Software Development Kit', 'Taskresultdetails', 'V1Taskresultdetails']
---

# Taskresultdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task. | [optional] 
**Id** | Pointer to **string** | Unique task definition identifier. | [optional] 
**ReportType** | Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**Description** | Pointer to **string** | Description of the report purpose and/or contents. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent task/report if exists. | [optional] 
**Launcher** | Pointer to **string** | Name of the report processing initiator. | [optional] 
**Created** | Pointer to **SailPointTime** | Report creation date | [optional] 
**Launched** | Pointer to **NullableTime** | Report start date | [optional] 
**Completed** | Pointer to **NullableTime** | Report completion date | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Report completion status. | [optional] 
**Messages** | Pointer to [**[]TaskresultdetailsMessagesInner**](taskresultdetails-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Returns** | Pointer to [**[]TaskresultdetailsReturnsInner**](taskresultdetails-returns-inner) | Task definition results, if necessary. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Extra attributes map(dictionary) needed for the report. | [optional] 
**Progress** | Pointer to **NullableString** | Current report state. | [optional] 

## Methods

### NewTaskresultdetails

`func NewTaskresultdetails() *Taskresultdetails`

NewTaskresultdetails instantiates a new Taskresultdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskresultdetailsWithDefaults

`func NewTaskresultdetailsWithDefaults() *Taskresultdetails`

NewTaskresultdetailsWithDefaults instantiates a new Taskresultdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Taskresultdetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taskresultdetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taskresultdetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Taskresultdetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Taskresultdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskresultdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskresultdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Taskresultdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetReportType

`func (o *Taskresultdetails) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *Taskresultdetails) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *Taskresultdetails) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *Taskresultdetails) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetDescription

`func (o *Taskresultdetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Taskresultdetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Taskresultdetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Taskresultdetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *Taskresultdetails) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *Taskresultdetails) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *Taskresultdetails) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *Taskresultdetails) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *Taskresultdetails) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *Taskresultdetails) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *Taskresultdetails) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Taskresultdetails) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Taskresultdetails) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *Taskresultdetails) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *Taskresultdetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Taskresultdetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Taskresultdetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Taskresultdetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *Taskresultdetails) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *Taskresultdetails) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *Taskresultdetails) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *Taskresultdetails) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *Taskresultdetails) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *Taskresultdetails) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *Taskresultdetails) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Taskresultdetails) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Taskresultdetails) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Taskresultdetails) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *Taskresultdetails) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *Taskresultdetails) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *Taskresultdetails) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Taskresultdetails) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Taskresultdetails) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *Taskresultdetails) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *Taskresultdetails) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *Taskresultdetails) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *Taskresultdetails) GetMessages() []TaskresultdetailsMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Taskresultdetails) GetMessagesOk() (*[]TaskresultdetailsMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Taskresultdetails) SetMessages(v []TaskresultdetailsMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Taskresultdetails) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *Taskresultdetails) GetReturns() []TaskresultdetailsReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *Taskresultdetails) GetReturnsOk() (*[]TaskresultdetailsReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *Taskresultdetails) SetReturns(v []TaskresultdetailsReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *Taskresultdetails) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *Taskresultdetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Taskresultdetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Taskresultdetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Taskresultdetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *Taskresultdetails) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *Taskresultdetails) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *Taskresultdetails) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *Taskresultdetails) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *Taskresultdetails) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *Taskresultdetails) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil

