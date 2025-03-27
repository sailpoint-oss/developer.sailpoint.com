---
id: beta-account-attributes-changed-changes-inner
title: AccountAttributesChangedChangesInner
pagination_label: AccountAttributesChangedChangesInner
sidebar_label: AccountAttributesChangedChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesChangedChangesInner', 'BetaAccountAttributesChangedChangesInner'] 
slug: /tools/sdk/go/beta/models/account-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedChangesInner', 'BetaAccountAttributesChangedChangesInner']
---

# AccountAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The name of the attribute. | 
**OldValue** | [**NullableAccountAttributesChangedChangesInnerOldValue**](account-attributes-changed-changes-inner-old-value) |  | 
**NewValue** | [**NullableAccountAttributesChangedChangesInnerNewValue**](account-attributes-changed-changes-inner-new-value) |  | 

## Methods

### NewAccountAttributesChangedChangesInner

`func NewAccountAttributesChangedChangesInner(attribute string, oldValue NullableAccountAttributesChangedChangesInnerOldValue, newValue NullableAccountAttributesChangedChangesInnerNewValue, ) *AccountAttributesChangedChangesInner`

NewAccountAttributesChangedChangesInner instantiates a new AccountAttributesChangedChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesChangedChangesInnerWithDefaults

`func NewAccountAttributesChangedChangesInnerWithDefaults() *AccountAttributesChangedChangesInner`

NewAccountAttributesChangedChangesInnerWithDefaults instantiates a new AccountAttributesChangedChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *AccountAttributesChangedChangesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccountAttributesChangedChangesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccountAttributesChangedChangesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetOldValue

`func (o *AccountAttributesChangedChangesInner) GetOldValue() AccountAttributesChangedChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *AccountAttributesChangedChangesInner) GetOldValueOk() (*AccountAttributesChangedChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *AccountAttributesChangedChangesInner) SetOldValue(v AccountAttributesChangedChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *AccountAttributesChangedChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *AccountAttributesChangedChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *AccountAttributesChangedChangesInner) GetNewValue() AccountAttributesChangedChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *AccountAttributesChangedChangesInner) GetNewValueOk() (*AccountAttributesChangedChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *AccountAttributesChangedChangesInner) SetNewValue(v AccountAttributesChangedChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *AccountAttributesChangedChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *AccountAttributesChangedChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

