---
id: v2025-nested-config
title: NestedConfig
pagination_label: NestedConfig
sidebar_label: NestedConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NestedConfig', 'V2025NestedConfig'] 
slug: /tools/sdk/go/v2025/models/nested-config
tags: ['SDK', 'Software Development Kit', 'NestedConfig', 'V2025NestedConfig']
---

# NestedConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AncestorId** | Pointer to **string** | The unique identifier of the ancestor RightSet. | [optional] 
**Depth** | Pointer to **int32** | The depth level of the configuration. | [optional] 
**ParentId** | Pointer to **NullableString** | The unique identifier of the parent RightSet. | [optional] 
**ChildrenIds** | Pointer to **[]string** | List of unique identifiers for child configurations. | [optional] 

## Methods

### NewNestedConfig

`func NewNestedConfig() *NestedConfig`

NewNestedConfig instantiates a new NestedConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNestedConfigWithDefaults

`func NewNestedConfigWithDefaults() *NestedConfig`

NewNestedConfigWithDefaults instantiates a new NestedConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAncestorId

`func (o *NestedConfig) GetAncestorId() string`

GetAncestorId returns the AncestorId field if non-nil, zero value otherwise.

### GetAncestorIdOk

`func (o *NestedConfig) GetAncestorIdOk() (*string, bool)`

GetAncestorIdOk returns a tuple with the AncestorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAncestorId

`func (o *NestedConfig) SetAncestorId(v string)`

SetAncestorId sets AncestorId field to given value.

### HasAncestorId

`func (o *NestedConfig) HasAncestorId() bool`

HasAncestorId returns a boolean if a field has been set.

### GetDepth

`func (o *NestedConfig) GetDepth() int32`

GetDepth returns the Depth field if non-nil, zero value otherwise.

### GetDepthOk

`func (o *NestedConfig) GetDepthOk() (*int32, bool)`

GetDepthOk returns a tuple with the Depth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepth

`func (o *NestedConfig) SetDepth(v int32)`

SetDepth sets Depth field to given value.

### HasDepth

`func (o *NestedConfig) HasDepth() bool`

HasDepth returns a boolean if a field has been set.

### GetParentId

`func (o *NestedConfig) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *NestedConfig) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *NestedConfig) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *NestedConfig) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### SetParentIdNil

`func (o *NestedConfig) SetParentIdNil(b bool)`

 SetParentIdNil sets the value for ParentId to be an explicit nil

### UnsetParentId
`func (o *NestedConfig) UnsetParentId()`

UnsetParentId ensures that no value is present for ParentId, not even an explicit nil
### GetChildrenIds

`func (o *NestedConfig) GetChildrenIds() []string`

GetChildrenIds returns the ChildrenIds field if non-nil, zero value otherwise.

### GetChildrenIdsOk

`func (o *NestedConfig) GetChildrenIdsOk() (*[]string, bool)`

GetChildrenIdsOk returns a tuple with the ChildrenIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildrenIds

`func (o *NestedConfig) SetChildrenIds(v []string)`

SetChildrenIds sets ChildrenIds field to given value.

### HasChildrenIds

`func (o *NestedConfig) HasChildrenIds() bool`

HasChildrenIds returns a boolean if a field has been set.


