---
id: task-result-details
title: TaskResultDetails
pagination_label: TaskResultDetails
sidebar_label: TaskResultDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskResultDetails', 'TaskResultDetails'] 
slug: /tools/sdk/go/v3/models/task-result-details
tags: ['SDK', 'Software Development Kit', 'TaskResultDetails', 'TaskResultDetails']
---

# TaskResultDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task. | [optional] 
**Id** | Pointer to **string** | Unique task definition identifier. | [optional] 
**ReportType** | Pointer to **string** | Use this property to define what report should be processed in the RDE service. | [optional] 
**Description** | Pointer to **string** | Description of the report purpose and/or contents. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent task/report if exists. | [optional] 
**Launcher** | Pointer to **string** | Name of the report processing initiator. | [optional] 
**Created** | Pointer to **time.Time** | Report creation date | [optional] 
**Launched** | Pointer to **NullableTime** | Report start date | [optional] 
**Completed** | Pointer to **NullableTime** | Report completion date | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Report completion status. | [optional] 
**Messages** | Pointer to [**[]TaskResultDetailsMessagesInner**](task-result-details-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Returns** | Pointer to [**[]TaskResultDetailsReturnsInner**](task-result-details-returns-inner) | Task definition results, if necessary. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Extra attributes map(dictionary) needed for the report. | [optional] 
**Progress** | Pointer to **NullableString** | Current report state. | [optional] 

## Methods

### NewTaskResultDetails

`func NewTaskResultDetails() *TaskResultDetails`

NewTaskResultDetails instantiates a new TaskResultDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskResultDetailsWithDefaults

`func NewTaskResultDetailsWithDefaults() *TaskResultDetails`

NewTaskResultDetailsWithDefaults instantiates a new TaskResultDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskResultDetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskResultDetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskResultDetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaskResultDetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TaskResultDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskResultDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskResultDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaskResultDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetReportType

`func (o *TaskResultDetails) GetReportType() string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *TaskResultDetails) GetReportTypeOk() (*string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *TaskResultDetails) SetReportType(v string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *TaskResultDetails) HasReportType() bool`

HasReportType returns a boolean if a field has been set.

### GetDescription

`func (o *TaskResultDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaskResultDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaskResultDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaskResultDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *TaskResultDetails) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *TaskResultDetails) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *TaskResultDetails) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *TaskResultDetails) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *TaskResultDetails) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *TaskResultDetails) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *TaskResultDetails) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *TaskResultDetails) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *TaskResultDetails) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *TaskResultDetails) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *TaskResultDetails) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TaskResultDetails) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TaskResultDetails) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *TaskResultDetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetLaunched

`func (o *TaskResultDetails) GetLaunched() time.Time`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *TaskResultDetails) GetLaunchedOk() (*time.Time, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *TaskResultDetails) SetLaunched(v time.Time)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *TaskResultDetails) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *TaskResultDetails) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *TaskResultDetails) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *TaskResultDetails) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *TaskResultDetails) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *TaskResultDetails) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *TaskResultDetails) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *TaskResultDetails) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *TaskResultDetails) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetCompletionStatus

`func (o *TaskResultDetails) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *TaskResultDetails) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *TaskResultDetails) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *TaskResultDetails) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *TaskResultDetails) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *TaskResultDetails) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *TaskResultDetails) GetMessages() []TaskResultDetailsMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *TaskResultDetails) GetMessagesOk() (*[]TaskResultDetailsMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *TaskResultDetails) SetMessages(v []TaskResultDetailsMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *TaskResultDetails) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *TaskResultDetails) GetReturns() []TaskResultDetailsReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *TaskResultDetails) GetReturnsOk() (*[]TaskResultDetailsReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *TaskResultDetails) SetReturns(v []TaskResultDetailsReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *TaskResultDetails) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *TaskResultDetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TaskResultDetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TaskResultDetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *TaskResultDetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *TaskResultDetails) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *TaskResultDetails) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *TaskResultDetails) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *TaskResultDetails) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *TaskResultDetails) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *TaskResultDetails) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil

