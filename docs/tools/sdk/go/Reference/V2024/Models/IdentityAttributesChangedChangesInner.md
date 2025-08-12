---
id: v2024-identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributesChangedChangesInner', 'V2024IdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/go/v2024/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner', 'V2024IdentityAttributesChangedChangesInner']
---

# IdentityAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | The name of the identity attribute that changed. | 
**OldValue** | Pointer to [**NullableIdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**NewValue** | Pointer to [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 

## Methods

### NewIdentityAttributesChangedChangesInner

`func NewIdentityAttributesChangedChangesInner(attribute string, ) *IdentityAttributesChangedChangesInner`

NewIdentityAttributesChangedChangesInner instantiates a new IdentityAttributesChangedChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributesChangedChangesInnerWithDefaults

`func NewIdentityAttributesChangedChangesInnerWithDefaults() *IdentityAttributesChangedChangesInner`

NewIdentityAttributesChangedChangesInnerWithDefaults instantiates a new IdentityAttributesChangedChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *IdentityAttributesChangedChangesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *IdentityAttributesChangedChangesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *IdentityAttributesChangedChangesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetOldValue

`func (o *IdentityAttributesChangedChangesInner) GetOldValue() IdentityAttributesChangedChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *IdentityAttributesChangedChangesInner) GetOldValueOk() (*IdentityAttributesChangedChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *IdentityAttributesChangedChangesInner) SetOldValue(v IdentityAttributesChangedChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.

### HasOldValue

`func (o *IdentityAttributesChangedChangesInner) HasOldValue() bool`

HasOldValue returns a boolean if a field has been set.

### SetOldValueNil

`func (o *IdentityAttributesChangedChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *IdentityAttributesChangedChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *IdentityAttributesChangedChangesInner) GetNewValue() IdentityAttributesChangedChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *IdentityAttributesChangedChangesInner) GetNewValueOk() (*IdentityAttributesChangedChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *IdentityAttributesChangedChangesInner) SetNewValue(v IdentityAttributesChangedChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.

### HasNewValue

`func (o *IdentityAttributesChangedChangesInner) HasNewValue() bool`

HasNewValue returns a boolean if a field has been set.


