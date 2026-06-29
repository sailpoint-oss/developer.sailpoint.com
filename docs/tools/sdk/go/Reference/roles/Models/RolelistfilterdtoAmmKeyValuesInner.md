---
id: v1-rolelistfilterdto-amm-key-values-inner
title: RolelistfilterdtoAmmKeyValuesInner
pagination_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolelistfilterdtoAmmKeyValuesInner', 'V1RolelistfilterdtoAmmKeyValuesInner'] 
slug: /tools/sdk/go/roles/models/rolelistfilterdto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RolelistfilterdtoAmmKeyValuesInner', 'V1RolelistfilterdtoAmmKeyValuesInner']
---

# RolelistfilterdtoAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** | attribute key of a metadata. | [optional] 
**Values** | Pointer to **[]string** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Methods

### NewRolelistfilterdtoAmmKeyValuesInner

`func NewRolelistfilterdtoAmmKeyValuesInner() *RolelistfilterdtoAmmKeyValuesInner`

NewRolelistfilterdtoAmmKeyValuesInner instantiates a new RolelistfilterdtoAmmKeyValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolelistfilterdtoAmmKeyValuesInnerWithDefaults

`func NewRolelistfilterdtoAmmKeyValuesInnerWithDefaults() *RolelistfilterdtoAmmKeyValuesInner`

NewRolelistfilterdtoAmmKeyValuesInnerWithDefaults instantiates a new RolelistfilterdtoAmmKeyValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *RolelistfilterdtoAmmKeyValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RolelistfilterdtoAmmKeyValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RolelistfilterdtoAmmKeyValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RolelistfilterdtoAmmKeyValuesInner) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValues

`func (o *RolelistfilterdtoAmmKeyValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RolelistfilterdtoAmmKeyValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RolelistfilterdtoAmmKeyValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *RolelistfilterdtoAmmKeyValuesInner) HasValues() bool`

HasValues returns a boolean if a field has been set.


