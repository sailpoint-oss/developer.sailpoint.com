---
id: v2025-role-metadata-bulk-update-by-filter-request
title: RoleMetadataBulkUpdateByFilterRequest
pagination_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMetadataBulkUpdateByFilterRequest', 'V2025RoleMetadataBulkUpdateByFilterRequest'] 
slug: /tools/sdk/go/v2025/models/role-metadata-bulk-update-by-filter-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByFilterRequest', 'V2025RoleMetadataBulkUpdateByFilterRequest']
---

# RoleMetadataBulkUpdateByFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **string** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByFilterRequestValuesInner**](role-metadata-bulk-update-by-filter-request-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewRoleMetadataBulkUpdateByFilterRequest

`func NewRoleMetadataBulkUpdateByFilterRequest(filters string, operation string, values []RoleMetadataBulkUpdateByFilterRequestValuesInner, ) *RoleMetadataBulkUpdateByFilterRequest`

NewRoleMetadataBulkUpdateByFilterRequest instantiates a new RoleMetadataBulkUpdateByFilterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMetadataBulkUpdateByFilterRequestWithDefaults

`func NewRoleMetadataBulkUpdateByFilterRequestWithDefaults() *RoleMetadataBulkUpdateByFilterRequest`

NewRoleMetadataBulkUpdateByFilterRequestWithDefaults instantiates a new RoleMetadataBulkUpdateByFilterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *RoleMetadataBulkUpdateByFilterRequest) SetFilters(v string)`

SetFilters sets Filters field to given value.


### GetOperation

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *RoleMetadataBulkUpdateByFilterRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *RoleMetadataBulkUpdateByFilterRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *RoleMetadataBulkUpdateByFilterRequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetValues() []RoleMetadataBulkUpdateByFilterRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RoleMetadataBulkUpdateByFilterRequest) GetValuesOk() (*[]RoleMetadataBulkUpdateByFilterRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RoleMetadataBulkUpdateByFilterRequest) SetValues(v []RoleMetadataBulkUpdateByFilterRequestValuesInner)`

SetValues sets Values field to given value.



