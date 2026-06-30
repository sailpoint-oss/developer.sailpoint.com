---
id: v1-accountupdated-single-value-attribute-changes-inner
title: AccountupdatedSingleValueAttributeChangesInner
pagination_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountupdatedSingleValueAttributeChangesInner', 'V1AccountupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/go/triggers/models/accountupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedSingleValueAttributeChangesInner', 'V1AccountupdatedSingleValueAttributeChangesInner']
---

# AccountupdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**OldValue** | [**NullableAccountupdatedSingleValueAttributeChangesInnerOldValue**](accountupdated-single-value-attribute-changes-inner-old-value) |  | 
**NewValue** | [**NullableAccountupdatedSingleValueAttributeChangesInnerNewValue**](accountupdated-single-value-attribute-changes-inner-new-value) |  | 

## Methods

### NewAccountupdatedSingleValueAttributeChangesInner

`func NewAccountupdatedSingleValueAttributeChangesInner(name string, oldValue NullableAccountupdatedSingleValueAttributeChangesInnerOldValue, newValue NullableAccountupdatedSingleValueAttributeChangesInnerNewValue, ) *AccountupdatedSingleValueAttributeChangesInner`

NewAccountupdatedSingleValueAttributeChangesInner instantiates a new AccountupdatedSingleValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedSingleValueAttributeChangesInnerWithDefaults

`func NewAccountupdatedSingleValueAttributeChangesInnerWithDefaults() *AccountupdatedSingleValueAttributeChangesInner`

NewAccountupdatedSingleValueAttributeChangesInnerWithDefaults instantiates a new AccountupdatedSingleValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountupdatedSingleValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetOldValue

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetOldValue() AccountupdatedSingleValueAttributeChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetOldValueOk() (*AccountupdatedSingleValueAttributeChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *AccountupdatedSingleValueAttributeChangesInner) SetOldValue(v AccountupdatedSingleValueAttributeChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *AccountupdatedSingleValueAttributeChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *AccountupdatedSingleValueAttributeChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetNewValue() AccountupdatedSingleValueAttributeChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *AccountupdatedSingleValueAttributeChangesInner) GetNewValueOk() (*AccountupdatedSingleValueAttributeChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *AccountupdatedSingleValueAttributeChangesInner) SetNewValue(v AccountupdatedSingleValueAttributeChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *AccountupdatedSingleValueAttributeChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *AccountupdatedSingleValueAttributeChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

