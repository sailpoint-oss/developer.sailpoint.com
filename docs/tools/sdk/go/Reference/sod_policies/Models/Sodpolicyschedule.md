---
id: v1-sodpolicyschedule
title: Sodpolicyschedule
pagination_label: Sodpolicyschedule
sidebar_label: Sodpolicyschedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodpolicyschedule', 'V1Sodpolicyschedule'] 
slug: /tools/sdk/go/sodpolicies/models/sodpolicyschedule
tags: ['SDK', 'Software Development Kit', 'Sodpolicyschedule', 'V1Sodpolicyschedule']
---

# Sodpolicyschedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | SOD Policy schedule name | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this SOD policy schedule is created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | The time when this SOD policy schedule is modified. | [optional] [readonly] 
**Description** | Pointer to **string** | SOD Policy schedule description | [optional] 
**Schedule** | Pointer to [**Schedule**](schedule) |  | [optional] 
**Recipients** | Pointer to [**[]Sodrecipient**](sodrecipient) |  | [optional] 
**EmailEmptyResults** | Pointer to **bool** | Indicates if empty results need to be emailed | [optional] [default to false]
**CreatorId** | Pointer to **string** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | Pointer to **string** | Policy's modifier ID | [optional] [readonly] 

## Methods

### NewSodpolicyschedule

`func NewSodpolicyschedule() *Sodpolicyschedule`

NewSodpolicyschedule instantiates a new Sodpolicyschedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodpolicyscheduleWithDefaults

`func NewSodpolicyscheduleWithDefaults() *Sodpolicyschedule`

NewSodpolicyscheduleWithDefaults instantiates a new Sodpolicyschedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Sodpolicyschedule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sodpolicyschedule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sodpolicyschedule) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sodpolicyschedule) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Sodpolicyschedule) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sodpolicyschedule) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sodpolicyschedule) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sodpolicyschedule) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sodpolicyschedule) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sodpolicyschedule) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sodpolicyschedule) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sodpolicyschedule) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Sodpolicyschedule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sodpolicyschedule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sodpolicyschedule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sodpolicyschedule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSchedule

`func (o *Sodpolicyschedule) GetSchedule() Schedule`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *Sodpolicyschedule) GetScheduleOk() (*Schedule, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *Sodpolicyschedule) SetSchedule(v Schedule)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *Sodpolicyschedule) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.

### GetRecipients

`func (o *Sodpolicyschedule) GetRecipients() []Sodrecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Sodpolicyschedule) GetRecipientsOk() (*[]Sodrecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Sodpolicyschedule) SetRecipients(v []Sodrecipient)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *Sodpolicyschedule) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *Sodpolicyschedule) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *Sodpolicyschedule) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *Sodpolicyschedule) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *Sodpolicyschedule) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetCreatorId

`func (o *Sodpolicyschedule) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *Sodpolicyschedule) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *Sodpolicyschedule) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *Sodpolicyschedule) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *Sodpolicyschedule) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *Sodpolicyschedule) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *Sodpolicyschedule) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *Sodpolicyschedule) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.


