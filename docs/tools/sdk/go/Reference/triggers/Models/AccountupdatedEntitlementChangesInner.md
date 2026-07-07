---
id: v1-accountupdated-entitlement-changes-inner
title: AccountupdatedEntitlementChangesInner
pagination_label: AccountupdatedEntitlementChangesInner
sidebar_label: AccountupdatedEntitlementChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountupdatedEntitlementChangesInner', 'V1AccountupdatedEntitlementChangesInner'] 
slug: /tools/sdk/go/triggers/models/accountupdated-entitlement-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEntitlementChangesInner', 'V1AccountupdatedEntitlementChangesInner']
---

# AccountupdatedEntitlementChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **string** | The name of the entitlement attribute that was changed. | 
**Added** | [**[]AccountupdatedEntitlementChangesInnerAddedInner**](accountupdated-entitlement-changes-inner-added-inner) | The entitlements that were added. | 
**Removed** | [**[]AccountupdatedEntitlementChangesInnerAddedInner**](accountupdated-entitlement-changes-inner-added-inner) | The entitlements that were removed. | 

## Methods

### NewAccountupdatedEntitlementChangesInner

`func NewAccountupdatedEntitlementChangesInner(attributeName string, added []AccountupdatedEntitlementChangesInnerAddedInner, removed []AccountupdatedEntitlementChangesInnerAddedInner, ) *AccountupdatedEntitlementChangesInner`

NewAccountupdatedEntitlementChangesInner instantiates a new AccountupdatedEntitlementChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedEntitlementChangesInnerWithDefaults

`func NewAccountupdatedEntitlementChangesInnerWithDefaults() *AccountupdatedEntitlementChangesInner`

NewAccountupdatedEntitlementChangesInnerWithDefaults instantiates a new AccountupdatedEntitlementChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *AccountupdatedEntitlementChangesInner) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *AccountupdatedEntitlementChangesInner) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *AccountupdatedEntitlementChangesInner) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetAdded

`func (o *AccountupdatedEntitlementChangesInner) GetAdded() []AccountupdatedEntitlementChangesInnerAddedInner`

GetAdded returns the Added field if non-nil, zero value otherwise.

### GetAddedOk

`func (o *AccountupdatedEntitlementChangesInner) GetAddedOk() (*[]AccountupdatedEntitlementChangesInnerAddedInner, bool)`

GetAddedOk returns a tuple with the Added field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdded

`func (o *AccountupdatedEntitlementChangesInner) SetAdded(v []AccountupdatedEntitlementChangesInnerAddedInner)`

SetAdded sets Added field to given value.


### SetAddedNil

`func (o *AccountupdatedEntitlementChangesInner) SetAddedNil(b bool)`

 SetAddedNil sets the value for Added to be an explicit nil

### UnsetAdded
`func (o *AccountupdatedEntitlementChangesInner) UnsetAdded()`

UnsetAdded ensures that no value is present for Added, not even an explicit nil
### GetRemoved

`func (o *AccountupdatedEntitlementChangesInner) GetRemoved() []AccountupdatedEntitlementChangesInnerAddedInner`

GetRemoved returns the Removed field if non-nil, zero value otherwise.

### GetRemovedOk

`func (o *AccountupdatedEntitlementChangesInner) GetRemovedOk() (*[]AccountupdatedEntitlementChangesInnerAddedInner, bool)`

GetRemovedOk returns a tuple with the Removed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoved

`func (o *AccountupdatedEntitlementChangesInner) SetRemoved(v []AccountupdatedEntitlementChangesInnerAddedInner)`

SetRemoved sets Removed field to given value.


### SetRemovedNil

`func (o *AccountupdatedEntitlementChangesInner) SetRemovedNil(b bool)`

 SetRemovedNil sets the value for Removed to be an explicit nil

### UnsetRemoved
`func (o *AccountupdatedEntitlementChangesInner) UnsetRemoved()`

UnsetRemoved ensures that no value is present for Removed, not even an explicit nil

