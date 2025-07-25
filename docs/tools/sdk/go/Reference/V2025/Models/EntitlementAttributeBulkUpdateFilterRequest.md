---
id: v2025-entitlement-attribute-bulk-update-filter-request
title: EntitlementAttributeBulkUpdateFilterRequest
pagination_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_label: EntitlementAttributeBulkUpdateFilterRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest'] 
slug: /tools/sdk/go/v2025/models/entitlement-attribute-bulk-update-filter-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateFilterRequest', 'V2025EntitlementAttributeBulkUpdateFilterRequest']
---

# EntitlementAttributeBulkUpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementAttributeBulkUpdateFilterRequest

`func NewEntitlementAttributeBulkUpdateFilterRequest() *EntitlementAttributeBulkUpdateFilterRequest`

NewEntitlementAttributeBulkUpdateFilterRequest instantiates a new EntitlementAttributeBulkUpdateFilterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementAttributeBulkUpdateFilterRequestWithDefaults

`func NewEntitlementAttributeBulkUpdateFilterRequestWithDefaults() *EntitlementAttributeBulkUpdateFilterRequest`

NewEntitlementAttributeBulkUpdateFilterRequestWithDefaults instantiates a new EntitlementAttributeBulkUpdateFilterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *EntitlementAttributeBulkUpdateFilterRequest) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *EntitlementAttributeBulkUpdateFilterRequest) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetOperation

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *EntitlementAttributeBulkUpdateFilterRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *EntitlementAttributeBulkUpdateFilterRequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *EntitlementAttributeBulkUpdateFilterRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *EntitlementAttributeBulkUpdateFilterRequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetValues() []RoleMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntitlementAttributeBulkUpdateFilterRequest) GetValuesOk() (*[]RoleMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntitlementAttributeBulkUpdateFilterRequest) SetValues(v []RoleMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *EntitlementAttributeBulkUpdateFilterRequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


