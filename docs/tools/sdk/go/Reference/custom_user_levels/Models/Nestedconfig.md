---
id: v1-nestedconfig
title: Nestedconfig
pagination_label: Nestedconfig
sidebar_label: Nestedconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nestedconfig', 'V1Nestedconfig'] 
slug: /tools/sdk/go/customuserlevels/models/nestedconfig
tags: ['SDK', 'Software Development Kit', 'Nestedconfig', 'V1Nestedconfig']
---

# Nestedconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AncestorId** | Pointer to **string** | The unique identifier of the ancestor RightSet. | [optional] 
**Depth** | Pointer to **int32** | The depth level of the configuration. | [optional] 
**ParentId** | Pointer to **NullableString** | The unique identifier of the parent RightSet. | [optional] 
**ChildrenIds** | Pointer to **[]string** | List of unique identifiers for child configurations. | [optional] 

## Methods

### NewNestedconfig

`func NewNestedconfig() *Nestedconfig`

NewNestedconfig instantiates a new Nestedconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNestedconfigWithDefaults

`func NewNestedconfigWithDefaults() *Nestedconfig`

NewNestedconfigWithDefaults instantiates a new Nestedconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAncestorId

`func (o *Nestedconfig) GetAncestorId() string`

GetAncestorId returns the AncestorId field if non-nil, zero value otherwise.

### GetAncestorIdOk

`func (o *Nestedconfig) GetAncestorIdOk() (*string, bool)`

GetAncestorIdOk returns a tuple with the AncestorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAncestorId

`func (o *Nestedconfig) SetAncestorId(v string)`

SetAncestorId sets AncestorId field to given value.

### HasAncestorId

`func (o *Nestedconfig) HasAncestorId() bool`

HasAncestorId returns a boolean if a field has been set.

### GetDepth

`func (o *Nestedconfig) GetDepth() int32`

GetDepth returns the Depth field if non-nil, zero value otherwise.

### GetDepthOk

`func (o *Nestedconfig) GetDepthOk() (*int32, bool)`

GetDepthOk returns a tuple with the Depth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepth

`func (o *Nestedconfig) SetDepth(v int32)`

SetDepth sets Depth field to given value.

### HasDepth

`func (o *Nestedconfig) HasDepth() bool`

HasDepth returns a boolean if a field has been set.

### GetParentId

`func (o *Nestedconfig) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *Nestedconfig) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *Nestedconfig) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *Nestedconfig) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### SetParentIdNil

`func (o *Nestedconfig) SetParentIdNil(b bool)`

 SetParentIdNil sets the value for ParentId to be an explicit nil

### UnsetParentId
`func (o *Nestedconfig) UnsetParentId()`

UnsetParentId ensures that no value is present for ParentId, not even an explicit nil
### GetChildrenIds

`func (o *Nestedconfig) GetChildrenIds() []string`

GetChildrenIds returns the ChildrenIds field if non-nil, zero value otherwise.

### GetChildrenIdsOk

`func (o *Nestedconfig) GetChildrenIdsOk() (*[]string, bool)`

GetChildrenIdsOk returns a tuple with the ChildrenIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildrenIds

`func (o *Nestedconfig) SetChildrenIds(v []string)`

SetChildrenIds sets ChildrenIds field to given value.

### HasChildrenIds

`func (o *Nestedconfig) HasChildrenIds() bool`

HasChildrenIds returns a boolean if a field has been set.


