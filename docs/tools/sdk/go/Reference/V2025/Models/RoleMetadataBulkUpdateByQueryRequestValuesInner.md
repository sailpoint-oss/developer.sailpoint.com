---
id: v2025-role-metadata-bulk-update-by-query-request-values-inner
title: RoleMetadataBulkUpdateByQueryRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2025RoleMetadataBulkUpdateByQueryRequestValuesInner'] 
slug: /tools/sdk/go/v2025/models/role-metadata-bulk-update-by-query-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2025RoleMetadataBulkUpdateByQueryRequestValuesInner']
---

# RoleMetadataBulkUpdateByQueryRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | Pointer to **string** | the key of metadata attribute | [optional] 
**AttributeValue** | Pointer to **[]string** | the values of attribute to be updated | [optional] 

## Methods

### NewRoleMetadataBulkUpdateByQueryRequestValuesInner

`func NewRoleMetadataBulkUpdateByQueryRequestValuesInner() *RoleMetadataBulkUpdateByQueryRequestValuesInner`

NewRoleMetadataBulkUpdateByQueryRequestValuesInner instantiates a new RoleMetadataBulkUpdateByQueryRequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMetadataBulkUpdateByQueryRequestValuesInnerWithDefaults

`func NewRoleMetadataBulkUpdateByQueryRequestValuesInnerWithDefaults() *RoleMetadataBulkUpdateByQueryRequestValuesInner`

NewRoleMetadataBulkUpdateByQueryRequestValuesInnerWithDefaults instantiates a new RoleMetadataBulkUpdateByQueryRequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeKey

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) GetAttributeKey() string`

GetAttributeKey returns the AttributeKey field if non-nil, zero value otherwise.

### GetAttributeKeyOk

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) GetAttributeKeyOk() (*string, bool)`

GetAttributeKeyOk returns a tuple with the AttributeKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeKey

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) SetAttributeKey(v string)`

SetAttributeKey sets AttributeKey field to given value.

### HasAttributeKey

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) HasAttributeKey() bool`

HasAttributeKey returns a boolean if a field has been set.

### GetAttributeValue

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) GetAttributeValue() []string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) GetAttributeValueOk() (*[]string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) SetAttributeValue(v []string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *RoleMetadataBulkUpdateByQueryRequestValuesInner) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.


