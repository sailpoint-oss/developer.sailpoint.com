---
id: v2025-entitlement-attribute-bulk-update-ids-request
title: EntitlementAttributeBulkUpdateIdsRequest
pagination_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_label: EntitlementAttributeBulkUpdateIdsRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementAttributeBulkUpdateIdsRequest', 'V2025EntitlementAttributeBulkUpdateIdsRequest'] 
slug: /tools/sdk/go/v2025/models/entitlement-attribute-bulk-update-ids-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateIdsRequest', 'V2025EntitlementAttributeBulkUpdateIdsRequest']
---

# EntitlementAttributeBulkUpdateIdsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | Pointer to **[]string** | List of entitlement IDs to update. | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementAttributeBulkUpdateIdsRequest

`func NewEntitlementAttributeBulkUpdateIdsRequest() *EntitlementAttributeBulkUpdateIdsRequest`

NewEntitlementAttributeBulkUpdateIdsRequest instantiates a new EntitlementAttributeBulkUpdateIdsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementAttributeBulkUpdateIdsRequestWithDefaults

`func NewEntitlementAttributeBulkUpdateIdsRequestWithDefaults() *EntitlementAttributeBulkUpdateIdsRequest`

NewEntitlementAttributeBulkUpdateIdsRequestWithDefaults instantiates a new EntitlementAttributeBulkUpdateIdsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlements

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *EntitlementAttributeBulkUpdateIdsRequest) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *EntitlementAttributeBulkUpdateIdsRequest) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetOperation

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *EntitlementAttributeBulkUpdateIdsRequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *EntitlementAttributeBulkUpdateIdsRequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *EntitlementAttributeBulkUpdateIdsRequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *EntitlementAttributeBulkUpdateIdsRequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetValues() []RoleMetadataBulkUpdateByIdRequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntitlementAttributeBulkUpdateIdsRequest) GetValuesOk() (*[]RoleMetadataBulkUpdateByIdRequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntitlementAttributeBulkUpdateIdsRequest) SetValues(v []RoleMetadataBulkUpdateByIdRequestValuesInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *EntitlementAttributeBulkUpdateIdsRequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


