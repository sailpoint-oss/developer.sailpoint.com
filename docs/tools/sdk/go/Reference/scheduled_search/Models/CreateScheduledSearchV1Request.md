---
id: v1-create-scheduled-search-v1-request
title: CreateScheduledSearchV1Request
pagination_label: CreateScheduledSearchV1Request
sidebar_label: CreateScheduledSearchV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateScheduledSearchV1Request', 'V1CreateScheduledSearchV1Request'] 
slug: /tools/sdk/go/scheduledsearch/models/create-scheduled-search-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchV1Request', 'V1CreateScheduledSearchV1Request']
---

# CreateScheduledSearchV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | The name of the scheduled search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the scheduled search.  | [optional] 
**SavedSearchId** | **string** | The ID of the saved search that will be executed. | 
**Created** | Pointer to **NullableTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** | [**Schedule**](schedule) |  | 
**Recipients** | [**[]SearchscheduleRecipientsInner**](searchschedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | 
**Enabled** | Pointer to **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to false]
**EmailEmptyResults** | Pointer to **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to false]
**DisplayQueryDetails** | Pointer to **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to false]

## Methods

### NewCreateScheduledSearchV1Request

`func NewCreateScheduledSearchV1Request(savedSearchId string, schedule Schedule, recipients []SearchscheduleRecipientsInner, ) *CreateScheduledSearchV1Request`

NewCreateScheduledSearchV1Request instantiates a new CreateScheduledSearchV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateScheduledSearchV1RequestWithDefaults

`func NewCreateScheduledSearchV1RequestWithDefaults() *CreateScheduledSearchV1Request`

NewCreateScheduledSearchV1RequestWithDefaults instantiates a new CreateScheduledSearchV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateScheduledSearchV1Request) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateScheduledSearchV1Request) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateScheduledSearchV1Request) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateScheduledSearchV1Request) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *CreateScheduledSearchV1Request) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreateScheduledSearchV1Request) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *CreateScheduledSearchV1Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateScheduledSearchV1Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateScheduledSearchV1Request) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateScheduledSearchV1Request) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CreateScheduledSearchV1Request) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateScheduledSearchV1Request) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSavedSearchId

`func (o *CreateScheduledSearchV1Request) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *CreateScheduledSearchV1Request) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *CreateScheduledSearchV1Request) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *CreateScheduledSearchV1Request) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreateScheduledSearchV1Request) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreateScheduledSearchV1Request) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CreateScheduledSearchV1Request) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *CreateScheduledSearchV1Request) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *CreateScheduledSearchV1Request) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *CreateScheduledSearchV1Request) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CreateScheduledSearchV1Request) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CreateScheduledSearchV1Request) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CreateScheduledSearchV1Request) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CreateScheduledSearchV1Request) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CreateScheduledSearchV1Request) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *CreateScheduledSearchV1Request) GetSchedule() Schedule`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *CreateScheduledSearchV1Request) GetScheduleOk() (*Schedule, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *CreateScheduledSearchV1Request) SetSchedule(v Schedule)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *CreateScheduledSearchV1Request) GetRecipients() []SearchscheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *CreateScheduledSearchV1Request) GetRecipientsOk() (*[]SearchscheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *CreateScheduledSearchV1Request) SetRecipients(v []SearchscheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *CreateScheduledSearchV1Request) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateScheduledSearchV1Request) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateScheduledSearchV1Request) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *CreateScheduledSearchV1Request) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *CreateScheduledSearchV1Request) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *CreateScheduledSearchV1Request) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *CreateScheduledSearchV1Request) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *CreateScheduledSearchV1Request) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *CreateScheduledSearchV1Request) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *CreateScheduledSearchV1Request) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *CreateScheduledSearchV1Request) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *CreateScheduledSearchV1Request) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.


