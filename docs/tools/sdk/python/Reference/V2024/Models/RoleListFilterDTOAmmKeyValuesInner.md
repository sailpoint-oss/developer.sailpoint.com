---
id: v2024-role-list-filter-dto-amm-key-values-inner
title: RoleListFilterDTOAmmKeyValuesInner
pagination_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleListFilterDTOAmmKeyValuesInner', 'V2024RoleListFilterDTOAmmKeyValuesInner'] 
slug: /tools/sdk/go/v2024/models/role-list-filter-dto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTOAmmKeyValuesInner', 'V2024RoleListFilterDTOAmmKeyValuesInner']
---

# RoleListFilterDTOAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** | attribute key of a metadata. | [optional] 
**Values** | Pointer to **[]string** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Methods

### NewRoleListFilterDTOAmmKeyValuesInner

`func NewRoleListFilterDTOAmmKeyValuesInner() *RoleListFilterDTOAmmKeyValuesInner`

NewRoleListFilterDTOAmmKeyValuesInner instantiates a new RoleListFilterDTOAmmKeyValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleListFilterDTOAmmKeyValuesInnerWithDefaults

`func NewRoleListFilterDTOAmmKeyValuesInnerWithDefaults() *RoleListFilterDTOAmmKeyValuesInner`

NewRoleListFilterDTOAmmKeyValuesInnerWithDefaults instantiates a new RoleListFilterDTOAmmKeyValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *RoleListFilterDTOAmmKeyValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleListFilterDTOAmmKeyValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleListFilterDTOAmmKeyValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleListFilterDTOAmmKeyValuesInner) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValues

`func (o *RoleListFilterDTOAmmKeyValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RoleListFilterDTOAmmKeyValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RoleListFilterDTOAmmKeyValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *RoleListFilterDTOAmmKeyValuesInner) HasValues() bool`

HasValues returns a boolean if a field has been set.


