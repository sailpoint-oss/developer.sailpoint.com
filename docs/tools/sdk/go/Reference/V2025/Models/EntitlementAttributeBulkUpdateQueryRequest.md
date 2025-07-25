---
id: v2025-entitlement-attribute-bulk-update-query-request
title: EntitlementAttributeBulkUpdateQueryRequest
pagination_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest'] 
slug: /tools/sdk/go/v2025/models/entitlement-attribute-bulk-update-query-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest']
---

# EntitlementAttributeBulkUpdateQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to [**Search**](search) |  | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementAttributeBulkUpdateQueryRequest

`func NewEntitlementAttributeBulkUpdateQueryRequest() *EntitlementAttributeBulkUpdateQueryRequest`

NewEntitlementAttributeBulkUpdateQueryRequest instantiates a new EntitlementAttributeBulkUpdateQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementAttributeBulkUpdateQueryRequestWithDefaults

`func NewEntitlementAttributeBulkUpdateQueryRequestWithDefaults() *EntitlementAttributeBulkUpdateQueryRequest`

NewEntitlementAttributeBulkUpdateQueryRequestWithDefaults instantiates a new EntitlementAttributeBulkUpdateQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetQuery() Search`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetQueryOk() (*Search, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *EntitlementAttributeBulkUpdateQueryRequest) SetQuery(v Search)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *EntitlementAttributeBulkUpdateQueryRequest) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetOperation

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *EntitlementAttributeBulkUpdateQueryRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *EntitlementAttributeBulkUpdateQueryRequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *EntitlementAttributeBulkUpdateQueryRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *EntitlementAttributeBulkUpdateQueryRequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetValues() []RoleMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntitlementAttributeBulkUpdateQueryRequest) GetValuesOk() (*[]RoleMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntitlementAttributeBulkUpdateQueryRequest) SetValues(v []RoleMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *EntitlementAttributeBulkUpdateQueryRequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


