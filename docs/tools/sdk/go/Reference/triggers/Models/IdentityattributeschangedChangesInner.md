---
id: v1-identityattributeschanged-changes-inner
title: IdentityattributeschangedChangesInner
pagination_label: IdentityattributeschangedChangesInner
sidebar_label: IdentityattributeschangedChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityattributeschangedChangesInner', 'V1IdentityattributeschangedChangesInner'] 
slug: /tools/sdk/go/triggers/models/identityattributeschanged-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedChangesInner', 'V1IdentityattributeschangedChangesInner']
---

# IdentityattributeschangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The name of the identity attribute that changed. | 
**OldValue** | Pointer to [**NullableIdentityattributeschangedChangesInnerOldValue**](identityattributeschanged-changes-inner-old-value) |  | [optional] 
**NewValue** | Pointer to [**IdentityattributeschangedChangesInnerNewValue**](identityattributeschanged-changes-inner-new-value) |  | [optional] 

## Methods

### NewIdentityattributeschangedChangesInner

`func NewIdentityattributeschangedChangesInner(attribute string, ) *IdentityattributeschangedChangesInner`

NewIdentityattributeschangedChangesInner instantiates a new IdentityattributeschangedChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributeschangedChangesInnerWithDefaults

`func NewIdentityattributeschangedChangesInnerWithDefaults() *IdentityattributeschangedChangesInner`

NewIdentityattributeschangedChangesInnerWithDefaults instantiates a new IdentityattributeschangedChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *IdentityattributeschangedChangesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *IdentityattributeschangedChangesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *IdentityattributeschangedChangesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetOldValue

`func (o *IdentityattributeschangedChangesInner) GetOldValue() IdentityattributeschangedChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *IdentityattributeschangedChangesInner) GetOldValueOk() (*IdentityattributeschangedChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *IdentityattributeschangedChangesInner) SetOldValue(v IdentityattributeschangedChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.

### HasOldValue

`func (o *IdentityattributeschangedChangesInner) HasOldValue() bool`

HasOldValue returns a boolean if a field has been set.

### SetOldValueNil

`func (o *IdentityattributeschangedChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *IdentityattributeschangedChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *IdentityattributeschangedChangesInner) GetNewValue() IdentityattributeschangedChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *IdentityattributeschangedChangesInner) GetNewValueOk() (*IdentityattributeschangedChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *IdentityattributeschangedChangesInner) SetNewValue(v IdentityattributeschangedChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.

### HasNewValue

`func (o *IdentityattributeschangedChangesInner) HasNewValue() bool`

HasNewValue returns a boolean if a field has been set.


