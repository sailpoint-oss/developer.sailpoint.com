---
id: v1-approvalidentityrecord
title: Approvalidentityrecord
pagination_label: Approvalidentityrecord
sidebar_label: Approvalidentityrecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalidentityrecord', 'V1Approvalidentityrecord'] 
slug: /tools/sdk/go/approvals/models/approvalidentityrecord
tags: ['SDK', 'Software Development Kit', 'Approvalidentityrecord', 'V1Approvalidentityrecord']
---

# Approvalidentityrecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Identity ID. | [optional] 
**Type** | Pointer to **string** | Type of identity. | [optional] 
**Name** | Pointer to **string** | Name of the identity. | [optional] 
**ActionedAs** | Pointer to [**[]Approvalreference**](approvalreference) | List of references representing actions taken by the identity. | [optional] 
**Members** | Pointer to [**[]Approvalreference**](approvalreference) | List of references representing members of the identity. | [optional] 
**DecisionDate** | Pointer to **SailPointTime** | Date when the decision was made. | [optional] 
**Email** | Pointer to **string** | Email associated with the identity. | [optional] 

## Methods

### NewApprovalidentityrecord

`func NewApprovalidentityrecord() *Approvalidentityrecord`

NewApprovalidentityrecord instantiates a new Approvalidentityrecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalidentityrecordWithDefaults

`func NewApprovalidentityrecordWithDefaults() *Approvalidentityrecord`

NewApprovalidentityrecordWithDefaults instantiates a new Approvalidentityrecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *Approvalidentityrecord) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *Approvalidentityrecord) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *Approvalidentityrecord) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *Approvalidentityrecord) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetType

`func (o *Approvalidentityrecord) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approvalidentityrecord) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approvalidentityrecord) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approvalidentityrecord) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Approvalidentityrecord) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalidentityrecord) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalidentityrecord) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalidentityrecord) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActionedAs

`func (o *Approvalidentityrecord) GetActionedAs() []Approvalreference`

GetActionedAs returns the ActionedAs field if non-nil, zero value otherwise.

### GetActionedAsOk

`func (o *Approvalidentityrecord) GetActionedAsOk() (*[]Approvalreference, bool)`

GetActionedAsOk returns a tuple with the ActionedAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionedAs

`func (o *Approvalidentityrecord) SetActionedAs(v []Approvalreference)`

SetActionedAs sets ActionedAs field to given value.

### HasActionedAs

`func (o *Approvalidentityrecord) HasActionedAs() bool`

HasActionedAs returns a boolean if a field has been set.

### GetMembers

`func (o *Approvalidentityrecord) GetMembers() []Approvalreference`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *Approvalidentityrecord) GetMembersOk() (*[]Approvalreference, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *Approvalidentityrecord) SetMembers(v []Approvalreference)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *Approvalidentityrecord) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### GetDecisionDate

`func (o *Approvalidentityrecord) GetDecisionDate() SailPointTime`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *Approvalidentityrecord) GetDecisionDateOk() (*SailPointTime, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *Approvalidentityrecord) SetDecisionDate(v SailPointTime)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *Approvalidentityrecord) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetEmail

`func (o *Approvalidentityrecord) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Approvalidentityrecord) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Approvalidentityrecord) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Approvalidentityrecord) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


