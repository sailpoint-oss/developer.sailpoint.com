---
id: v2024-role-metadata-bulk-update-by-id-request-values-inner
title: RoleMetadataBulkUpdateByIdRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner'] 
slug: /tools/sdk/go/v2024/models/role-metadata-bulk-update-by-id-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner']
---

# RoleMetadataBulkUpdateByIdRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | the key of metadata attribute | 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewRoleMetadataBulkUpdateByIdRequestValuesInner

`func NewRoleMetadataBulkUpdateByIdRequestValuesInner(attribute string, values []string, ) *RoleMetadataBulkUpdateByIdRequestValuesInner`

NewRoleMetadataBulkUpdateByIdRequestValuesInner instantiates a new RoleMetadataBulkUpdateByIdRequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMetadataBulkUpdateByIdRequestValuesInnerWithDefaults

`func NewRoleMetadataBulkUpdateByIdRequestValuesInnerWithDefaults() *RoleMetadataBulkUpdateByIdRequestValuesInner`

NewRoleMetadataBulkUpdateByIdRequestValuesInnerWithDefaults instantiates a new RoleMetadataBulkUpdateByIdRequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *RoleMetadataBulkUpdateByIdRequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

