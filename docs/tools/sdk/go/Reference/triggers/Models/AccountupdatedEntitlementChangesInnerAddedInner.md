---
id: v1-accountupdated-entitlement-changes-inner-added-inner
title: AccountupdatedEntitlementChangesInnerAddedInner
pagination_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_label: AccountupdatedEntitlementChangesInnerAddedInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountupdatedEntitlementChangesInnerAddedInner', 'V1AccountupdatedEntitlementChangesInnerAddedInner'] 
slug: /tools/sdk/go/triggers/models/accountupdated-entitlement-changes-inner-added-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInnerAddedInner', 'V1AccountupdatedEntitlementChangesInnerAddedInner']
---

# AccountupdatedEntitlementChangesInnerAddedInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The unique identifier of the entitlement. | [optional] 
**Name** | Pointer to **NullableString** | The name of the entitlement. | [optional] 
**Owner** | Pointer to [**AccountupdatedEntitlementChangesInnerAddedInnerOwner**](accountupdated-entitlement-changes-inner-added-inner-owner) |  | [optional] 
**Value** | Pointer to **string** | The value of the entitlement. | [optional] 

## Methods

### NewAccountupdatedEntitlementChangesInnerAddedInner

`func NewAccountupdatedEntitlementChangesInnerAddedInner() *AccountupdatedEntitlementChangesInnerAddedInner`

NewAccountupdatedEntitlementChangesInnerAddedInner instantiates a new AccountupdatedEntitlementChangesInnerAddedInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedEntitlementChangesInnerAddedInnerWithDefaults

`func NewAccountupdatedEntitlementChangesInnerAddedInnerWithDefaults() *AccountupdatedEntitlementChangesInnerAddedInner`

NewAccountupdatedEntitlementChangesInnerAddedInnerWithDefaults instantiates a new AccountupdatedEntitlementChangesInnerAddedInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccountupdatedEntitlementChangesInnerAddedInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccountupdatedEntitlementChangesInnerAddedInner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetOwner

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetOwner() AccountupdatedEntitlementChangesInnerAddedInnerOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetOwnerOk() (*AccountupdatedEntitlementChangesInnerAddedInnerOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetOwner(v AccountupdatedEntitlementChangesInnerAddedInnerOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetValue

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccountupdatedEntitlementChangesInnerAddedInner) HasValue() bool`

HasValue returns a boolean if a field has been set.


