---
id: v1-attributedefinition
title: Attributedefinition
pagination_label: Attributedefinition
sidebar_label: Attributedefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributedefinition', 'V1Attributedefinition'] 
slug: /tools/sdk/go/sources/models/attributedefinition
tags: ['SDK', 'Software Development Kit', 'Attributedefinition', 'V1Attributedefinition']
---

# Attributedefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the attribute. | [optional] 
**NativeName** | Pointer to **NullableString** | Attribute name in the native system. | [optional] 
**Type** | Pointer to [**Attributedefinitiontype**](attributedefinitiontype) |  | [optional] 
**Schema** | Pointer to [**NullableAttributedefinitionSchema**](attributedefinition-schema) |  | [optional] 
**Description** | Pointer to **string** | A human-readable description of the attribute. | [optional] 
**IsMulti** | Pointer to **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to false]
**IsEntitlement** | Pointer to **bool** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to false]
**IsGroup** | Pointer to **bool** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [optional] [default to false]

## Methods

### NewAttributedefinition

`func NewAttributedefinition() *Attributedefinition`

NewAttributedefinition instantiates a new Attributedefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributedefinitionWithDefaults

`func NewAttributedefinitionWithDefaults() *Attributedefinition`

NewAttributedefinitionWithDefaults instantiates a new Attributedefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Attributedefinition) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attributedefinition) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attributedefinition) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Attributedefinition) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNativeName

`func (o *Attributedefinition) GetNativeName() string`

GetNativeName returns the NativeName field if non-nil, zero value otherwise.

### GetNativeNameOk

`func (o *Attributedefinition) GetNativeNameOk() (*string, bool)`

GetNativeNameOk returns a tuple with the NativeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeName

`func (o *Attributedefinition) SetNativeName(v string)`

SetNativeName sets NativeName field to given value.

### HasNativeName

`func (o *Attributedefinition) HasNativeName() bool`

HasNativeName returns a boolean if a field has been set.

### SetNativeNameNil

`func (o *Attributedefinition) SetNativeNameNil(b bool)`

 SetNativeNameNil sets the value for NativeName to be an explicit nil

### UnsetNativeName
`func (o *Attributedefinition) UnsetNativeName()`

UnsetNativeName ensures that no value is present for NativeName, not even an explicit nil
### GetType

`func (o *Attributedefinition) GetType() Attributedefinitiontype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Attributedefinition) GetTypeOk() (*Attributedefinitiontype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Attributedefinition) SetType(v Attributedefinitiontype)`

SetType sets Type field to given value.

### HasType

`func (o *Attributedefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSchema

`func (o *Attributedefinition) GetSchema() AttributedefinitionSchema`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *Attributedefinition) GetSchemaOk() (*AttributedefinitionSchema, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *Attributedefinition) SetSchema(v AttributedefinitionSchema)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *Attributedefinition) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### SetSchemaNil

`func (o *Attributedefinition) SetSchemaNil(b bool)`

 SetSchemaNil sets the value for Schema to be an explicit nil

### UnsetSchema
`func (o *Attributedefinition) UnsetSchema()`

UnsetSchema ensures that no value is present for Schema, not even an explicit nil
### GetDescription

`func (o *Attributedefinition) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Attributedefinition) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Attributedefinition) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Attributedefinition) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsMulti

`func (o *Attributedefinition) GetIsMulti() bool`

GetIsMulti returns the IsMulti field if non-nil, zero value otherwise.

### GetIsMultiOk

`func (o *Attributedefinition) GetIsMultiOk() (*bool, bool)`

GetIsMultiOk returns a tuple with the IsMulti field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMulti

`func (o *Attributedefinition) SetIsMulti(v bool)`

SetIsMulti sets IsMulti field to given value.

### HasIsMulti

`func (o *Attributedefinition) HasIsMulti() bool`

HasIsMulti returns a boolean if a field has been set.

### GetIsEntitlement

`func (o *Attributedefinition) GetIsEntitlement() bool`

GetIsEntitlement returns the IsEntitlement field if non-nil, zero value otherwise.

### GetIsEntitlementOk

`func (o *Attributedefinition) GetIsEntitlementOk() (*bool, bool)`

GetIsEntitlementOk returns a tuple with the IsEntitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEntitlement

`func (o *Attributedefinition) SetIsEntitlement(v bool)`

SetIsEntitlement sets IsEntitlement field to given value.

### HasIsEntitlement

`func (o *Attributedefinition) HasIsEntitlement() bool`

HasIsEntitlement returns a boolean if a field has been set.

### GetIsGroup

`func (o *Attributedefinition) GetIsGroup() bool`

GetIsGroup returns the IsGroup field if non-nil, zero value otherwise.

### GetIsGroupOk

`func (o *Attributedefinition) GetIsGroupOk() (*bool, bool)`

GetIsGroupOk returns a tuple with the IsGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsGroup

`func (o *Attributedefinition) SetIsGroup(v bool)`

SetIsGroup sets IsGroup field to given value.

### HasIsGroup

`func (o *Attributedefinition) HasIsGroup() bool`

HasIsGroup returns a boolean if a field has been set.


