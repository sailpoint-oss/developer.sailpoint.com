---
id: create-scheduled-search-request
title: CreateScheduledSearchRequest
pagination_label: CreateScheduledSearchRequest
sidebar_label: CreateScheduledSearchRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CreateScheduledSearchRequest'] 
slug: /tools/sdk/go/v3/models/create-scheduled-search-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchRequest']
---

# CreateScheduledSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **NullableString** | The name of the scheduled search.  | [optional] 
**Description** |  Pointer to **NullableString** | The description of the scheduled search.  | [optional] 
**SavedSearchId** |  **string** | The ID of the saved search that will be executed. | 
**Created** |  Pointer to **NullableTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** |  Pointer to **NullableTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** |  [**Schedule1**](schedule1) |  | 
**Recipients** |  [**[]SearchScheduleRecipientsInner**](search-schedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | 
**Enabled** |  Pointer to **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to false]
**EmailEmptyResults** |  Pointer to **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to false]
**DisplayQueryDetails** |  Pointer to **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to false]

## Methods

### NewCreateScheduledSearchRequest

`func NewCreateScheduledSearchRequest(savedSearchId string, schedule Schedule1, recipients []SearchScheduleRecipientsInner, ) *CreateScheduledSearchRequest`

NewCreateScheduledSearchRequest instantiates a new CreateScheduledSearchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateScheduledSearchRequestWithDefaults

`func NewCreateScheduledSearchRequestWithDefaults() *CreateScheduledSearchRequest`

NewCreateScheduledSearchRequestWithDefaults instantiates a new CreateScheduledSearchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateScheduledSearchRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateScheduledSearchRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateScheduledSearchRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateScheduledSearchRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *CreateScheduledSearchRequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreateScheduledSearchRequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *CreateScheduledSearchRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateScheduledSearchRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateScheduledSearchRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateScheduledSearchRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CreateScheduledSearchRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateScheduledSearchRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSavedSearchId

`func (o *CreateScheduledSearchRequest) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *CreateScheduledSearchRequest) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *CreateScheduledSearchRequest) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *CreateScheduledSearchRequest) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreateScheduledSearchRequest) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreateScheduledSearchRequest) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CreateScheduledSearchRequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *CreateScheduledSearchRequest) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *CreateScheduledSearchRequest) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *CreateScheduledSearchRequest) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CreateScheduledSearchRequest) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CreateScheduledSearchRequest) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CreateScheduledSearchRequest) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CreateScheduledSearchRequest) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CreateScheduledSearchRequest) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *CreateScheduledSearchRequest) GetSchedule() Schedule1`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *CreateScheduledSearchRequest) GetScheduleOk() (*Schedule1, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *CreateScheduledSearchRequest) SetSchedule(v Schedule1)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *CreateScheduledSearchRequest) GetRecipients() []SearchScheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *CreateScheduledSearchRequest) GetRecipientsOk() (*[]SearchScheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *CreateScheduledSearchRequest) SetRecipients(v []SearchScheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *CreateScheduledSearchRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreateScheduledSearchRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreateScheduledSearchRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *CreateScheduledSearchRequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *CreateScheduledSearchRequest) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *CreateScheduledSearchRequest) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *CreateScheduledSearchRequest) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *CreateScheduledSearchRequest) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *CreateScheduledSearchRequest) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *CreateScheduledSearchRequest) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *CreateScheduledSearchRequest) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *CreateScheduledSearchRequest) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.


[[Back to top]](#) 


