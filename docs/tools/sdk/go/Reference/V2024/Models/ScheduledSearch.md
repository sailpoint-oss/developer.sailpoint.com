---
id: v2024-scheduled-search
title: ScheduledSearch
pagination_label: ScheduledSearch
sidebar_label: ScheduledSearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledSearch', 'V2024ScheduledSearch'] 
slug: /tools/sdk/go/v2024/models/scheduled-search
tags: ['SDK', 'Software Development Kit', 'ScheduledSearch', 'V2024ScheduledSearch']
---

# ScheduledSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | The name of the scheduled search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the scheduled search.  | [optional] 
**SavedSearchId** | **string** | The ID of the saved search that will be executed. | 
**Created** | Pointer to **NullableTime** | The date the scheduled search was initially created. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | The last date the scheduled search was modified. | [optional] [readonly] 
**Schedule** | [**Schedule2**](schedule2) |  | 
**Recipients** | [**[]SearchScheduleRecipientsInner**](search-schedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | 
**Enabled** | Pointer to **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to false]
**EmailEmptyResults** | Pointer to **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to false]
**DisplayQueryDetails** | Pointer to **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to false]
**Id** | **string** | The scheduled search ID. | [readonly] 
**Owner** | [**ScheduledSearchAllOfOwner**](scheduled-search-all-of-owner) |  | 
**OwnerId** | **string** | The ID of the scheduled search owner.  Please use the &#x60;id&#x60; in the &#x60;owner&#x60; object instead.  | [readonly] 

## Methods

### NewScheduledSearch

`func NewScheduledSearch(savedSearchId string, schedule Schedule2, recipients []SearchScheduleRecipientsInner, id string, owner ScheduledSearchAllOfOwner, ownerId string, ) *ScheduledSearch`

NewScheduledSearch instantiates a new ScheduledSearch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledSearchWithDefaults

`func NewScheduledSearchWithDefaults() *ScheduledSearch`

NewScheduledSearchWithDefaults instantiates a new ScheduledSearch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ScheduledSearch) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScheduledSearch) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScheduledSearch) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ScheduledSearch) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ScheduledSearch) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ScheduledSearch) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *ScheduledSearch) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ScheduledSearch) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ScheduledSearch) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ScheduledSearch) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ScheduledSearch) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ScheduledSearch) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSavedSearchId

`func (o *ScheduledSearch) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *ScheduledSearch) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *ScheduledSearch) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *ScheduledSearch) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ScheduledSearch) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ScheduledSearch) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ScheduledSearch) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *ScheduledSearch) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ScheduledSearch) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *ScheduledSearch) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ScheduledSearch) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ScheduledSearch) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ScheduledSearch) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *ScheduledSearch) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *ScheduledSearch) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *ScheduledSearch) GetSchedule() Schedule2`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *ScheduledSearch) GetScheduleOk() (*Schedule2, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *ScheduledSearch) SetSchedule(v Schedule2)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *ScheduledSearch) GetRecipients() []SearchScheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *ScheduledSearch) GetRecipientsOk() (*[]SearchScheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *ScheduledSearch) SetRecipients(v []SearchScheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *ScheduledSearch) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ScheduledSearch) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ScheduledSearch) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ScheduledSearch) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *ScheduledSearch) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *ScheduledSearch) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *ScheduledSearch) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *ScheduledSearch) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *ScheduledSearch) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *ScheduledSearch) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *ScheduledSearch) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *ScheduledSearch) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.

### GetId

`func (o *ScheduledSearch) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ScheduledSearch) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ScheduledSearch) SetId(v string)`

SetId sets Id field to given value.


### GetOwner

`func (o *ScheduledSearch) GetOwner() ScheduledSearchAllOfOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ScheduledSearch) GetOwnerOk() (*ScheduledSearchAllOfOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ScheduledSearch) SetOwner(v ScheduledSearchAllOfOwner)`

SetOwner sets Owner field to given value.


### GetOwnerId

`func (o *ScheduledSearch) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *ScheduledSearch) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *ScheduledSearch) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.



