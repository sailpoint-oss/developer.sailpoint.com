---
id: v1-scheduledsearch
title: Scheduledsearch
pagination_label: Scheduledsearch
sidebar_label: Scheduledsearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Scheduledsearch', 'V1Scheduledsearch'] 
slug: /tools/sdk/go/scheduledsearch/models/scheduledsearch
tags: ['SDK', 'Software Development Kit', 'Scheduledsearch', 'V1Scheduledsearch']
---

# Scheduledsearch

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
**Id** | **string** | The scheduled search ID. | [readonly] 
**Owner** | [**ScheduledsearchAllOfOwner**](scheduledsearch-all-of-owner) |  | 
**OwnerId** | **string** | The ID of the scheduled search owner.  Please use the `id` in the `owner` object instead.  | [readonly] 

## Methods

### NewScheduledsearch

`func NewScheduledsearch(savedSearchId string, schedule Schedule, recipients []SearchscheduleRecipientsInner, id string, owner ScheduledsearchAllOfOwner, ownerId string, ) *Scheduledsearch`

NewScheduledsearch instantiates a new Scheduledsearch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledsearchWithDefaults

`func NewScheduledsearchWithDefaults() *Scheduledsearch`

NewScheduledsearchWithDefaults instantiates a new Scheduledsearch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Scheduledsearch) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Scheduledsearch) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Scheduledsearch) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Scheduledsearch) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Scheduledsearch) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Scheduledsearch) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *Scheduledsearch) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Scheduledsearch) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Scheduledsearch) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Scheduledsearch) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Scheduledsearch) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Scheduledsearch) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSavedSearchId

`func (o *Scheduledsearch) GetSavedSearchId() string`

GetSavedSearchId returns the SavedSearchId field if non-nil, zero value otherwise.

### GetSavedSearchIdOk

`func (o *Scheduledsearch) GetSavedSearchIdOk() (*string, bool)`

GetSavedSearchIdOk returns a tuple with the SavedSearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSavedSearchId

`func (o *Scheduledsearch) SetSavedSearchId(v string)`

SetSavedSearchId sets SavedSearchId field to given value.


### GetCreated

`func (o *Scheduledsearch) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Scheduledsearch) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Scheduledsearch) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Scheduledsearch) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Scheduledsearch) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Scheduledsearch) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Scheduledsearch) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Scheduledsearch) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Scheduledsearch) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Scheduledsearch) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Scheduledsearch) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Scheduledsearch) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSchedule

`func (o *Scheduledsearch) GetSchedule() Schedule`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *Scheduledsearch) GetScheduleOk() (*Schedule, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *Scheduledsearch) SetSchedule(v Schedule)`

SetSchedule sets Schedule field to given value.


### GetRecipients

`func (o *Scheduledsearch) GetRecipients() []SearchscheduleRecipientsInner`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Scheduledsearch) GetRecipientsOk() (*[]SearchscheduleRecipientsInner, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Scheduledsearch) SetRecipients(v []SearchscheduleRecipientsInner)`

SetRecipients sets Recipients field to given value.


### GetEnabled

`func (o *Scheduledsearch) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Scheduledsearch) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Scheduledsearch) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Scheduledsearch) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *Scheduledsearch) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *Scheduledsearch) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *Scheduledsearch) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *Scheduledsearch) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetDisplayQueryDetails

`func (o *Scheduledsearch) GetDisplayQueryDetails() bool`

GetDisplayQueryDetails returns the DisplayQueryDetails field if non-nil, zero value otherwise.

### GetDisplayQueryDetailsOk

`func (o *Scheduledsearch) GetDisplayQueryDetailsOk() (*bool, bool)`

GetDisplayQueryDetailsOk returns a tuple with the DisplayQueryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayQueryDetails

`func (o *Scheduledsearch) SetDisplayQueryDetails(v bool)`

SetDisplayQueryDetails sets DisplayQueryDetails field to given value.

### HasDisplayQueryDetails

`func (o *Scheduledsearch) HasDisplayQueryDetails() bool`

HasDisplayQueryDetails returns a boolean if a field has been set.

### GetId

`func (o *Scheduledsearch) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Scheduledsearch) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Scheduledsearch) SetId(v string)`

SetId sets Id field to given value.


### GetOwner

`func (o *Scheduledsearch) GetOwner() ScheduledsearchAllOfOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Scheduledsearch) GetOwnerOk() (*ScheduledsearchAllOfOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Scheduledsearch) SetOwner(v ScheduledsearchAllOfOwner)`

SetOwner sets Owner field to given value.


### GetOwnerId

`func (o *Scheduledsearch) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Scheduledsearch) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Scheduledsearch) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.



