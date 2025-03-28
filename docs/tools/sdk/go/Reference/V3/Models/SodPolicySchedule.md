---
id: sod-policy-schedule
title: SodPolicySchedule
pagination_label: SodPolicySchedule
sidebar_label: SodPolicySchedule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicySchedule', 'SodPolicySchedule'] 
slug: /tools/sdk/go/v3/models/sod-policy-schedule
tags: ['SDK', 'Software Development Kit', 'SodPolicySchedule', 'SodPolicySchedule']
---

# SodPolicySchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | SOD Policy schedule name | [optional] 
**Created** | Pointer to **time.Time** | The time when this SOD policy schedule is created. | [optional] [readonly] 
**Modified** | Pointer to **time.Time** | The time when this SOD policy schedule is modified. | [optional] [readonly] 
**Description** | Pointer to **string** | SOD Policy schedule description | [optional] 
**Schedule** | Pointer to [**Schedule1**](schedule1) |  | [optional] 
**Recipients** | Pointer to [**[]SodRecipient**](sod-recipient) |  | [optional] 
**EmailEmptyResults** | Pointer to **bool** | Indicates if empty results need to be emailed | [optional] [default to false]
**CreatorId** | Pointer to **string** | Policy&#39;s creator ID | [optional] [readonly] 
**ModifierId** | Pointer to **string** | Policy&#39;s modifier ID | [optional] [readonly] 

## Methods

### NewSodPolicySchedule

`func NewSodPolicySchedule() *SodPolicySchedule`

NewSodPolicySchedule instantiates a new SodPolicySchedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyScheduleWithDefaults

`func NewSodPolicyScheduleWithDefaults() *SodPolicySchedule`

NewSodPolicyScheduleWithDefaults instantiates a new SodPolicySchedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SodPolicySchedule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicySchedule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicySchedule) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicySchedule) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SodPolicySchedule) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SodPolicySchedule) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SodPolicySchedule) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SodPolicySchedule) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SodPolicySchedule) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SodPolicySchedule) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SodPolicySchedule) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SodPolicySchedule) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *SodPolicySchedule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SodPolicySchedule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SodPolicySchedule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SodPolicySchedule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSchedule

`func (o *SodPolicySchedule) GetSchedule() Schedule1`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *SodPolicySchedule) GetScheduleOk() (*Schedule1, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *SodPolicySchedule) SetSchedule(v Schedule1)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *SodPolicySchedule) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.

### GetRecipients

`func (o *SodPolicySchedule) GetRecipients() []SodRecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *SodPolicySchedule) GetRecipientsOk() (*[]SodRecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *SodPolicySchedule) SetRecipients(v []SodRecipient)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *SodPolicySchedule) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.

### GetEmailEmptyResults

`func (o *SodPolicySchedule) GetEmailEmptyResults() bool`

GetEmailEmptyResults returns the EmailEmptyResults field if non-nil, zero value otherwise.

### GetEmailEmptyResultsOk

`func (o *SodPolicySchedule) GetEmailEmptyResultsOk() (*bool, bool)`

GetEmailEmptyResultsOk returns a tuple with the EmailEmptyResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailEmptyResults

`func (o *SodPolicySchedule) SetEmailEmptyResults(v bool)`

SetEmailEmptyResults sets EmailEmptyResults field to given value.

### HasEmailEmptyResults

`func (o *SodPolicySchedule) HasEmailEmptyResults() bool`

HasEmailEmptyResults returns a boolean if a field has been set.

### GetCreatorId

`func (o *SodPolicySchedule) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *SodPolicySchedule) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *SodPolicySchedule) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *SodPolicySchedule) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *SodPolicySchedule) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *SodPolicySchedule) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *SodPolicySchedule) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *SodPolicySchedule) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.


