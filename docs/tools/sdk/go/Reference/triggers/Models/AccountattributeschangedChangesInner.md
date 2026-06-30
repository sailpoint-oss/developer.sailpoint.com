---
id: v1-accountattributeschanged-changes-inner
title: AccountattributeschangedChangesInner
pagination_label: AccountattributeschangedChangesInner
sidebar_label: AccountattributeschangedChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountattributeschangedChangesInner', 'V1AccountattributeschangedChangesInner'] 
slug: /tools/sdk/go/triggers/models/accountattributeschanged-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedChangesInner', 'V1AccountattributeschangedChangesInner']
---

# AccountattributeschangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The name of the attribute. | 
**OldValue** | [**NullableAccountattributeschangedChangesInnerOldValue**](accountattributeschanged-changes-inner-old-value) |  | 
**NewValue** | [**NullableAccountattributeschangedChangesInnerNewValue**](accountattributeschanged-changes-inner-new-value) |  | 

## Methods

### NewAccountattributeschangedChangesInner

`func NewAccountattributeschangedChangesInner(attribute string, oldValue NullableAccountattributeschangedChangesInnerOldValue, newValue NullableAccountattributeschangedChangesInnerNewValue, ) *AccountattributeschangedChangesInner`

NewAccountattributeschangedChangesInner instantiates a new AccountattributeschangedChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountattributeschangedChangesInnerWithDefaults

`func NewAccountattributeschangedChangesInnerWithDefaults() *AccountattributeschangedChangesInner`

NewAccountattributeschangedChangesInnerWithDefaults instantiates a new AccountattributeschangedChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *AccountattributeschangedChangesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccountattributeschangedChangesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccountattributeschangedChangesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetOldValue

`func (o *AccountattributeschangedChangesInner) GetOldValue() AccountattributeschangedChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *AccountattributeschangedChangesInner) GetOldValueOk() (*AccountattributeschangedChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *AccountattributeschangedChangesInner) SetOldValue(v AccountattributeschangedChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *AccountattributeschangedChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *AccountattributeschangedChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *AccountattributeschangedChangesInner) GetNewValue() AccountattributeschangedChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *AccountattributeschangedChangesInner) GetNewValueOk() (*AccountattributeschangedChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *AccountattributeschangedChangesInner) SetNewValue(v AccountattributeschangedChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *AccountattributeschangedChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *AccountattributeschangedChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

