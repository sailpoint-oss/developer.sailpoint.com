---
id: v1-approverdto
title: Approverdto
pagination_label: Approverdto
sidebar_label: Approverdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approverdto', 'V1Approverdto'] 
slug: /tools/sdk/go/accountdeletionrequests/models/approverdto
tags: ['SDK', 'Software Development Kit', 'Approverdto', 'V1Approverdto']
---

# Approverdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Identity ID and it cannot be null. | [optional] 
**Id** | Pointer to **NullableString** | Optional id | [optional] 
**Name** | Pointer to **string** | Identity display name | [optional] 
**Email** | Pointer to **string** | Email address of identity | [optional] 
**Type** | Pointer to **string** | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [optional] 
**OwnerOf** | Pointer to [**[]Approverreference**](approverreference) | List of reference of identity type dto for account owner identities | [optional] 
**ActionedAs** | Pointer to [**[]Approverreference**](approverreference) | List of reference of identity type dto who acted on behalf of other identities. | [optional] 
**Members** | Pointer to [**[]Approverreference**](approverreference) | List of reference of identity type dto for member identities. | [optional] 

## Methods

### NewApproverdto

`func NewApproverdto() *Approverdto`

NewApproverdto instantiates a new Approverdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproverdtoWithDefaults

`func NewApproverdtoWithDefaults() *Approverdto`

NewApproverdtoWithDefaults instantiates a new Approverdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *Approverdto) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *Approverdto) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *Approverdto) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *Approverdto) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetId

`func (o *Approverdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approverdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approverdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approverdto) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Approverdto) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Approverdto) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Approverdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approverdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approverdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approverdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *Approverdto) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Approverdto) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Approverdto) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Approverdto) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetType

`func (o *Approverdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approverdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approverdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approverdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwnerOf

`func (o *Approverdto) GetOwnerOf() []Approverreference`

GetOwnerOf returns the OwnerOf field if non-nil, zero value otherwise.

### GetOwnerOfOk

`func (o *Approverdto) GetOwnerOfOk() (*[]Approverreference, bool)`

GetOwnerOfOk returns a tuple with the OwnerOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOf

`func (o *Approverdto) SetOwnerOf(v []Approverreference)`

SetOwnerOf sets OwnerOf field to given value.

### HasOwnerOf

`func (o *Approverdto) HasOwnerOf() bool`

HasOwnerOf returns a boolean if a field has been set.

### SetOwnerOfNil

`func (o *Approverdto) SetOwnerOfNil(b bool)`

 SetOwnerOfNil sets the value for OwnerOf to be an explicit nil

### UnsetOwnerOf
`func (o *Approverdto) UnsetOwnerOf()`

UnsetOwnerOf ensures that no value is present for OwnerOf, not even an explicit nil
### GetActionedAs

`func (o *Approverdto) GetActionedAs() []Approverreference`

GetActionedAs returns the ActionedAs field if non-nil, zero value otherwise.

### GetActionedAsOk

`func (o *Approverdto) GetActionedAsOk() (*[]Approverreference, bool)`

GetActionedAsOk returns a tuple with the ActionedAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionedAs

`func (o *Approverdto) SetActionedAs(v []Approverreference)`

SetActionedAs sets ActionedAs field to given value.

### HasActionedAs

`func (o *Approverdto) HasActionedAs() bool`

HasActionedAs returns a boolean if a field has been set.

### SetActionedAsNil

`func (o *Approverdto) SetActionedAsNil(b bool)`

 SetActionedAsNil sets the value for ActionedAs to be an explicit nil

### UnsetActionedAs
`func (o *Approverdto) UnsetActionedAs()`

UnsetActionedAs ensures that no value is present for ActionedAs, not even an explicit nil
### GetMembers

`func (o *Approverdto) GetMembers() []Approverreference`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *Approverdto) GetMembersOk() (*[]Approverreference, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *Approverdto) SetMembers(v []Approverreference)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *Approverdto) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### SetMembersNil

`func (o *Approverdto) SetMembersNil(b bool)`

 SetMembersNil sets the value for Members to be an explicit nil

### UnsetMembers
`func (o *Approverdto) UnsetMembers()`

UnsetMembers ensures that no value is present for Members, not even an explicit nil

