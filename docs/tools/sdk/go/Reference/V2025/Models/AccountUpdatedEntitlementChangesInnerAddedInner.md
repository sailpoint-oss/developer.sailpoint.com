---
id: v2025-account-updated-entitlement-changes-inner-added-inner
title: AccountUpdatedEntitlementChangesInnerAddedInner
pagination_label: AccountUpdatedEntitlementChangesInnerAddedInner
sidebar_label: AccountUpdatedEntitlementChangesInnerAddedInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdatedEntitlementChangesInnerAddedInner', 'V2025AccountUpdatedEntitlementChangesInnerAddedInner'] 
slug: /tools/sdk/go/v2025/models/account-updated-entitlement-changes-inner-added-inner
tags: ['SDK', 'Software Development Kit', 'AccountUpdatedEntitlementChangesInnerAddedInner', 'V2025AccountUpdatedEntitlementChangesInnerAddedInner']
---

# AccountUpdatedEntitlementChangesInnerAddedInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The unique identifier of the entitlement. | [optional] 
**Name** | Pointer to **NullableString** | The name of the entitlement. | [optional] 
**Owner** | Pointer to [**AccountUpdatedEntitlementChangesInnerAddedInnerOwner**](account-updated-entitlement-changes-inner-added-inner-owner) |  | [optional] 
**Value** | Pointer to **string** | The value of the entitlement. | [optional] 

## Methods

### NewAccountUpdatedEntitlementChangesInnerAddedInner

`func NewAccountUpdatedEntitlementChangesInnerAddedInner() *AccountUpdatedEntitlementChangesInnerAddedInner`

NewAccountUpdatedEntitlementChangesInnerAddedInner instantiates a new AccountUpdatedEntitlementChangesInnerAddedInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedEntitlementChangesInnerAddedInnerWithDefaults

`func NewAccountUpdatedEntitlementChangesInnerAddedInnerWithDefaults() *AccountUpdatedEntitlementChangesInnerAddedInner`

NewAccountUpdatedEntitlementChangesInnerAddedInnerWithDefaults instantiates a new AccountUpdatedEntitlementChangesInnerAddedInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetOwner

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetOwner() AccountUpdatedEntitlementChangesInnerAddedInnerOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetOwnerOk() (*AccountUpdatedEntitlementChangesInnerAddedInnerOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetOwner(v AccountUpdatedEntitlementChangesInnerAddedInnerOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetValue

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccountUpdatedEntitlementChangesInnerAddedInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


