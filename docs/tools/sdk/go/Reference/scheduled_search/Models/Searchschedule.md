---
id: v1-searchschedule
title: Searchschedule
pagination_label: Searchschedule
sidebar_label: Searchschedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Searchschedule', 'V1Searchschedule'] 
slug: /tools/sdk/go/scheduledsearch/models/searchschedule
tags: ['SDK', 'Software Development Kit', 'Searchschedule', 'V1Searchschedule']
---

# Searchschedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SavedSearchId** | **string** | The ID of the saved search that will be executed. | 
**Created** | Pointer to **NullableTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** | [**Schedule**](schedule) |  | 
**Recipients** | [**[]SearchscheduleRecipientsInner**](searchschedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | 
**Enabled** | Pointer to **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to false]
**EmailEmptyResults** | Pointer to **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to false]
**DisplayQueryDetails** | Pointer to **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to false]

## Methods

### NewSearchschedule

`func NewSearchschedule(savedSearchId string, schedule Schedule, recipients []SearchscheduleRecipientsInner, ) *Searchschedule`

NewSearchschedule instantiates a new Searchschedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchscheduleWithDefaults

`func NewSearchscheduleWithDefaults() *Searchschedule`

NewSearchscheduleWithDefaults instantiates a new Searchschedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSavedSearchId

`func (o *Searchschedule) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *Searchschedule) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *Searchschedule) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *Searchschedule) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Searchschedule) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Searchschedule) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Searchschedule) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Searchschedule) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Searchschedule) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Searchschedule) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Searchschedule) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Searchschedule) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Searchschedule) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Searchschedule) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Searchschedule) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *Searchschedule) GetSchedule() Schedule`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *Searchschedule) GetScheduleOk() (*Schedule, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *Searchschedule) SetSchedule(v Schedule)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *Searchschedule) GetRecipients() []SearchscheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Searchschedule) GetRecipientsOk() (*[]SearchscheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Searchschedule) SetRecipients(v []SearchscheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *Searchschedule) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Searchschedule) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Searchschedule) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Searchschedule) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *Searchschedule) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *Searchschedule) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *Searchschedule) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *Searchschedule) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *Searchschedule) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *Searchschedule) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *Searchschedule) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *Searchschedule) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.


