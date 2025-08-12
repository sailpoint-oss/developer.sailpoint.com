---
id: v2025-approval-identity-record
title: ApprovalIdentityRecord
pagination_label: ApprovalIdentityRecord
sidebar_label: ApprovalIdentityRecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalIdentityRecord', 'V2025ApprovalIdentityRecord'] 
slug: /tools/sdk/go/v2025/models/approval-identity-record
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityRecord', 'V2025ApprovalIdentityRecord']
---

# ApprovalIdentityRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Identity ID. | [optional] 
**Type** | Pointer to **string** | Type of identity. | [optional] 
**Name** | Pointer to **string** | Name of the identity. | [optional] 
**ActionedAs** | Pointer to [**[]ApprovalReference**](approval-reference) | List of references representing actions taken by the identity. | [optional] 
**Members** | Pointer to [**[]ApprovalReference**](approval-reference) | List of references representing members of the identity. | [optional] 
**DecisionDate** | Pointer to **SailPointTime** | Date when the decision was made. | [optional] 
**Email** | Pointer to **string** | Email associated with the identity. | [optional] 

## Methods

### NewApprovalIdentityRecord

`func NewApprovalIdentityRecord() *ApprovalIdentityRecord`

NewApprovalIdentityRecord instantiates a new ApprovalIdentityRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalIdentityRecordWithDefaults

`func NewApprovalIdentityRecordWithDefaults() *ApprovalIdentityRecord`

NewApprovalIdentityRecordWithDefaults instantiates a new ApprovalIdentityRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *ApprovalIdentityRecord) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *ApprovalIdentityRecord) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *ApprovalIdentityRecord) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *ApprovalIdentityRecord) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetType

`func (o *ApprovalIdentityRecord) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalIdentityRecord) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalIdentityRecord) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalIdentityRecord) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *ApprovalIdentityRecord) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalIdentityRecord) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalIdentityRecord) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalIdentityRecord) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActionedAs

`func (o *ApprovalIdentityRecord) GetActionedAs() []ApprovalReference`

GetActionedAs returns the ActionedAs field if non-nil, zero value otherwise.

### GetActionedAsOk

`func (o *ApprovalIdentityRecord) GetActionedAsOk() (*[]ApprovalReference, bool)`

GetActionedAsOk returns a tuple with the ActionedAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionedAs

`func (o *ApprovalIdentityRecord) SetActionedAs(v []ApprovalReference)`

SetActionedAs sets ActionedAs field to given value.

### HasActionedAs

`func (o *ApprovalIdentityRecord) HasActionedAs() bool`

HasActionedAs returns a boolean if a field has been set.

### GetMembers

`func (o *ApprovalIdentityRecord) GetMembers() []ApprovalReference`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *ApprovalIdentityRecord) GetMembersOk() (*[]ApprovalReference, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *ApprovalIdentityRecord) SetMembers(v []ApprovalReference)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *ApprovalIdentityRecord) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### GetDecisionDate

`func (o *ApprovalIdentityRecord) GetDecisionDate() SailPointTime`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *ApprovalIdentityRecord) GetDecisionDateOk() (*SailPointTime, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *ApprovalIdentityRecord) SetDecisionDate(v SailPointTime)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *ApprovalIdentityRecord) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetEmail

`func (o *ApprovalIdentityRecord) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApprovalIdentityRecord) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApprovalIdentityRecord) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApprovalIdentityRecord) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


