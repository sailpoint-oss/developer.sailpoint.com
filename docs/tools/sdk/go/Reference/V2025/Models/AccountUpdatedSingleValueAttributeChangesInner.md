---
id: v2025-account-updated-single-value-attribute-changes-inner
title: AccountUpdatedSingleValueAttributeChangesInner
pagination_label: AccountUpdatedSingleValueAttributeChangesInner
sidebar_label: AccountUpdatedSingleValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdatedSingleValueAttributeChangesInner', 'V2025AccountUpdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/go/v2025/models/account-updated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountUpdatedSingleValueAttributeChangesInner', 'V2025AccountUpdatedSingleValueAttributeChangesInner']
---

# AccountUpdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**OldValue** | [**NullableAccountUpdatedSingleValueAttributeChangesInnerOldValue**](account-updated-single-value-attribute-changes-inner-old-value) |  | 
**NewValue** | [**NullableAccountUpdatedSingleValueAttributeChangesInnerNewValue**](account-updated-single-value-attribute-changes-inner-new-value) |  | 

## Methods

### NewAccountUpdatedSingleValueAttributeChangesInner

`func NewAccountUpdatedSingleValueAttributeChangesInner(name string, oldValue NullableAccountUpdatedSingleValueAttributeChangesInnerOldValue, newValue NullableAccountUpdatedSingleValueAttributeChangesInnerNewValue, ) *AccountUpdatedSingleValueAttributeChangesInner`

NewAccountUpdatedSingleValueAttributeChangesInner instantiates a new AccountUpdatedSingleValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedSingleValueAttributeChangesInnerWithDefaults

`func NewAccountUpdatedSingleValueAttributeChangesInnerWithDefaults() *AccountUpdatedSingleValueAttributeChangesInner`

NewAccountUpdatedSingleValueAttributeChangesInnerWithDefaults instantiates a new AccountUpdatedSingleValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountUpdatedSingleValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetOldValue

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetOldValue() AccountUpdatedSingleValueAttributeChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetOldValueOk() (*AccountUpdatedSingleValueAttributeChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *AccountUpdatedSingleValueAttributeChangesInner) SetOldValue(v AccountUpdatedSingleValueAttributeChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *AccountUpdatedSingleValueAttributeChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *AccountUpdatedSingleValueAttributeChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetNewValue() AccountUpdatedSingleValueAttributeChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *AccountUpdatedSingleValueAttributeChangesInner) GetNewValueOk() (*AccountUpdatedSingleValueAttributeChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *AccountUpdatedSingleValueAttributeChangesInner) SetNewValue(v AccountUpdatedSingleValueAttributeChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *AccountUpdatedSingleValueAttributeChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *AccountUpdatedSingleValueAttributeChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

