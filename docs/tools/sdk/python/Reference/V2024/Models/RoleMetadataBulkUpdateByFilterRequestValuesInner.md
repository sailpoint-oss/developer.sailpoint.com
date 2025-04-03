---
id: v2024-role-metadata-bulk-update-by-filter-request-values-inner
title: RoleMetadataBulkUpdateByFilterRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByFilterRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByFilterRequestValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMetadataBulkUpdateByFilterRequestValuesInner', 'V2024RoleMetadataBulkUpdateByFilterRequestValuesInner'] 
slug: /tools/sdk/go/v2024/models/role-metadata-bulk-update-by-filter-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByFilterRequestValuesInner', 'V2024RoleMetadataBulkUpdateByFilterRequestValuesInner']
---

# RoleMetadataBulkUpdateByFilterRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | Pointer to **string** | the key of metadata attribute | [optional] 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewRoleMetadataBulkUpdateByFilterRequestValuesInner

`func NewRoleMetadataBulkUpdateByFilterRequestValuesInner(values []string, ) *RoleMetadataBulkUpdateByFilterRequestValuesInner`

NewRoleMetadataBulkUpdateByFilterRequestValuesInner instantiates a new RoleMetadataBulkUpdateByFilterRequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMetadataBulkUpdateByFilterRequestValuesInnerWithDefaults

`func NewRoleMetadataBulkUpdateByFilterRequestValuesInnerWithDefaults() *RoleMetadataBulkUpdateByFilterRequestValuesInner`

NewRoleMetadataBulkUpdateByFilterRequestValuesInnerWithDefaults instantiates a new RoleMetadataBulkUpdateByFilterRequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeKey

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) GetAttributeKey() string`

GetAttributeKey returns the AttributeKey field if non-nil, zero value otherwise.

### GetAttributeKeyOk

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) GetAttributeKeyOk() (*string, bool)`

GetAttributeKeyOk returns a tuple with the AttributeKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeKey

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) SetAttributeKey(v string)`

SetAttributeKey sets AttributeKey field to given value.

### HasAttributeKey

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) HasAttributeKey() bool`

HasAttributeKey returns a boolean if a field has been set.

### GetValues

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *RoleMetadataBulkUpdateByFilterRequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

