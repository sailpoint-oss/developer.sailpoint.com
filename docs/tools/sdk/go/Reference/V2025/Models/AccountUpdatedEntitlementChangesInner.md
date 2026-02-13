---
id: v2025-account-updated-entitlement-changes-inner
title: AccountUpdatedEntitlementChangesInner
pagination_label: AccountUpdatedEntitlementChangesInner
sidebar_label: AccountUpdatedEntitlementChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdatedEntitlementChangesInner', 'V2025AccountUpdatedEntitlementChangesInner'] 
slug: /tools/sdk/go/v2025/models/account-updated-entitlement-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountUpdatedEntitlementChangesInner', 'V2025AccountUpdatedEntitlementChangesInner']
---

# AccountUpdatedEntitlementChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **string** | The name of the entitlement attribute that was changed. | 
**Added** | [**[]AccountUpdatedEntitlementChangesInnerAddedInner**](account-updated-entitlement-changes-inner-added-inner) | The entitlements that were added. | 
**Removed** | [**[]AccountUpdatedEntitlementChangesInnerAddedInner**](account-updated-entitlement-changes-inner-added-inner) | The entitlements that were removed. | 

## Methods

### NewAccountUpdatedEntitlementChangesInner

`func NewAccountUpdatedEntitlementChangesInner(attributeName string, added []AccountUpdatedEntitlementChangesInnerAddedInner, removed []AccountUpdatedEntitlementChangesInnerAddedInner, ) *AccountUpdatedEntitlementChangesInner`

NewAccountUpdatedEntitlementChangesInner instantiates a new AccountUpdatedEntitlementChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedEntitlementChangesInnerWithDefaults

`func NewAccountUpdatedEntitlementChangesInnerWithDefaults() *AccountUpdatedEntitlementChangesInner`

NewAccountUpdatedEntitlementChangesInnerWithDefaults instantiates a new AccountUpdatedEntitlementChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *AccountUpdatedEntitlementChangesInner) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *AccountUpdatedEntitlementChangesInner) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *AccountUpdatedEntitlementChangesInner) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetAdded

`func (o *AccountUpdatedEntitlementChangesInner) GetAdded() []AccountUpdatedEntitlementChangesInnerAddedInner`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *AccountUpdatedEntitlementChangesInner) GetAddedOk() (*[]AccountUpdatedEntitlementChangesInnerAddedInner, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *AccountUpdatedEntitlementChangesInner) SetAdded(v []AccountUpdatedEntitlementChangesInnerAddedInner)`

SetAdded sets Added field to given value.


### SetAddedNil

`func (o *AccountUpdatedEntitlementChangesInner) SetAddedNil(b bool)`

 SetAddedNil sets the value for Added to be an explicit nil

### UnsetAdded
`func (o *AccountUpdatedEntitlementChangesInner) UnsetAdded()`

UnsetAdded ensures that no value is present for Added, not even an explicit nil
### GetRemoved

`func (o *AccountUpdatedEntitlementChangesInner) GetRemoved() []AccountUpdatedEntitlementChangesInnerAddedInner`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *AccountUpdatedEntitlementChangesInner) GetRemovedOk() (*[]AccountUpdatedEntitlementChangesInnerAddedInner, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *AccountUpdatedEntitlementChangesInner) SetRemoved(v []AccountUpdatedEntitlementChangesInnerAddedInner)`

SetRemoved sets Removed field to given value.


### SetRemovedNil

`func (o *AccountUpdatedEntitlementChangesInner) SetRemovedNil(b bool)`

 SetRemovedNil sets the value for Removed to be an explicit nil

### UnsetRemoved
`func (o *AccountUpdatedEntitlementChangesInner) UnsetRemoved()`

UnsetRemoved ensures that no value is present for Removed, not even an explicit nil

