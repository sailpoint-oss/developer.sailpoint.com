---
id: search-schedule
title: SearchSchedule
pagination_label: SearchSchedule
sidebar_label: SearchSchedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchSchedule', 'SearchSchedule'] 
slug: /tools/sdk/go/v3/models/search-schedule
tags: ['SDK', 'Software Development Kit', 'SearchSchedule', 'SearchSchedule']
---

# SearchSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SavedSearchId** | **string** | The ID of the saved search that will be executed. | 
**Created** | Pointer to **NullableTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** | [**Schedule1**](schedule1) |  | 
**Recipients** | [**[]SearchScheduleRecipientsInner**](search-schedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | 
**Enabled** | Pointer to **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to false]
**EmailEmptyResults** | Pointer to **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to false]
**DisplayQueryDetails** | Pointer to **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to false]

## Methods

### NewSearchSchedule

`func NewSearchSchedule(savedSearchId string, schedule Schedule1, recipients []SearchScheduleRecipientsInner, ) *SearchSchedule`

NewSearchSchedule instantiates a new SearchSchedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchScheduleWithDefaults

`func NewSearchScheduleWithDefaults() *SearchSchedule`

NewSearchScheduleWithDefaults instantiates a new SearchSchedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSavedSearchId

`func (o *SearchSchedule) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *SearchSchedule) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *SearchSchedule) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *SearchSchedule) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SearchSchedule) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SearchSchedule) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SearchSchedule) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SearchSchedule) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SearchSchedule) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SearchSchedule) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SearchSchedule) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SearchSchedule) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SearchSchedule) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SearchSchedule) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SearchSchedule) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *SearchSchedule) GetSchedule() Schedule1`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *SearchSchedule) GetScheduleOk() (*Schedule1, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *SearchSchedule) SetSchedule(v Schedule1)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *SearchSchedule) GetRecipients() []SearchScheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *SearchSchedule) GetRecipientsOk() (*[]SearchScheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *SearchSchedule) SetRecipients(v []SearchScheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *SearchSchedule) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *SearchSchedule) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *SearchSchedule) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *SearchSchedule) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *SearchSchedule) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *SearchSchedule) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *SearchSchedule) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *SearchSchedule) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *SearchSchedule) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *SearchSchedule) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *SearchSchedule) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *SearchSchedule) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.


