---
id: v2025-role-metadata-bulk-update-by-query-request
title: RoleMetadataBulkUpdateByQueryRequest
pagination_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMetadataBulkUpdateByQueryRequest', 'V2025RoleMetadataBulkUpdateByQueryRequest'] 
slug: /tools/sdk/go/v2025/models/role-metadata-bulk-update-by-query-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequest', 'V2025RoleMetadataBulkUpdateByQueryRequest']
---

# RoleMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **map[string]interface{}** | query the identities to be updated | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByQueryRequestValuesInner**](role-metadata-bulk-update-by-query-request-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewRoleMetadataBulkUpdateByQueryRequest

`func NewRoleMetadataBulkUpdateByQueryRequest(query map[string]interface{}, operation string, values []RoleMetadataBulkUpdateByQueryRequestValuesInner, ) *RoleMetadataBulkUpdateByQueryRequest`

NewRoleMetadataBulkUpdateByQueryRequest instantiates a new RoleMetadataBulkUpdateByQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMetadataBulkUpdateByQueryRequestWithDefaults

`func NewRoleMetadataBulkUpdateByQueryRequestWithDefaults() *RoleMetadataBulkUpdateByQueryRequest`

NewRoleMetadataBulkUpdateByQueryRequestWithDefaults instantiates a new RoleMetadataBulkUpdateByQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetQuery() map[string]interface{}`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetQueryOk() (*map[string]interface{}, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *RoleMetadataBulkUpdateByQueryRequest) SetQuery(v map[string]interface{})`

SetQuery sets Query field to given value.


### GetOperation

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *RoleMetadataBulkUpdateByQueryRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *RoleMetadataBulkUpdateByQueryRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *RoleMetadataBulkUpdateByQueryRequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetValues() []RoleMetadataBulkUpdateByQueryRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RoleMetadataBulkUpdateByQueryRequest) GetValuesOk() (*[]RoleMetadataBulkUpdateByQueryRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RoleMetadataBulkUpdateByQueryRequest) SetValues(v []RoleMetadataBulkUpdateByQueryRequestValuesInner)`

SetValues sets Values field to given value.



