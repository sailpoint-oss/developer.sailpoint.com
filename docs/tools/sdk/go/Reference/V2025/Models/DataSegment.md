---
id: v2025-data-segment
title: DataSegment
pagination_label: DataSegment
sidebar_label: DataSegment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataSegment', 'V2025DataSegment'] 
slug: /tools/sdk/go/v2025/models/data-segment
tags: ['SDK', 'Software Development Kit', 'DataSegment', 'V2025DataSegment']
---

# DataSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The segment's ID. | [optional] 
**Name** | Pointer to **string** | The segment's business name. | [optional] 
**Created** | Pointer to **SailPointTime** | The time when the segment is created. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time when the segment is modified. | [optional] 
**Description** | Pointer to **string** | The segment's optional description. | [optional] 
**Scopes** | Pointer to [**[]Scope**](scope) | List of Scopes that are assigned to the segment | [optional] 
**MemberSelection** | Pointer to [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 
**MemberFilter** | Pointer to [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**Membership** | Pointer to [**MembershipType**](membership-type) |  | [optional] 
**Enabled** | Pointer to **bool** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to false]
**Published** | Pointer to **bool** | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified to until published | [optional] [default to false]

## Methods

### NewDataSegment

`func NewDataSegment() *DataSegment`

NewDataSegment instantiates a new DataSegment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataSegmentWithDefaults

`func NewDataSegmentWithDefaults() *DataSegment`

NewDataSegmentWithDefaults instantiates a new DataSegment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DataSegment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DataSegment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DataSegment) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DataSegment) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DataSegment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataSegment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataSegment) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DataSegment) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *DataSegment) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *DataSegment) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *DataSegment) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *DataSegment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *DataSegment) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *DataSegment) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *DataSegment) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *DataSegment) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *DataSegment) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DataSegment) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DataSegment) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DataSegment) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetScopes

`func (o *DataSegment) GetScopes() []Scope`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *DataSegment) GetScopesOk() (*[]Scope, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *DataSegment) SetScopes(v []Scope)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *DataSegment) HasScopes() bool`

HasScopes returns a boolean if a field has been set.

### GetMemberSelection

`func (o *DataSegment) GetMemberSelection() []Ref`

GetMemberSelection returns the MemberSelection field if non-nil, zero value otherwise.

### GetMemberSelectionOk

`func (o *DataSegment) GetMemberSelectionOk() (*[]Ref, bool)`

GetMemberSelectionOk returns a tuple with the MemberSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberSelection

`func (o *DataSegment) SetMemberSelection(v []Ref)`

SetMemberSelection sets MemberSelection field to given value.

### HasMemberSelection

`func (o *DataSegment) HasMemberSelection() bool`

HasMemberSelection returns a boolean if a field has been set.

### GetMemberFilter

`func (o *DataSegment) GetMemberFilter() VisibilityCriteria`

GetMemberFilter returns the MemberFilter field if non-nil, zero value otherwise.

### GetMemberFilterOk

`func (o *DataSegment) GetMemberFilterOk() (*VisibilityCriteria, bool)`

GetMemberFilterOk returns a tuple with the MemberFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberFilter

`func (o *DataSegment) SetMemberFilter(v VisibilityCriteria)`

SetMemberFilter sets MemberFilter field to given value.

### HasMemberFilter

`func (o *DataSegment) HasMemberFilter() bool`

HasMemberFilter returns a boolean if a field has been set.

### GetMembership

`func (o *DataSegment) GetMembership() MembershipType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *DataSegment) GetMembershipOk() (*MembershipType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *DataSegment) SetMembership(v MembershipType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *DataSegment) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetEnabled

`func (o *DataSegment) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *DataSegment) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *DataSegment) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *DataSegment) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetPublished

`func (o *DataSegment) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *DataSegment) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *DataSegment) SetPublished(v bool)`

SetPublished sets Published field to given value.

### HasPublished

`func (o *DataSegment) HasPublished() bool`

HasPublished returns a boolean if a field has been set.


