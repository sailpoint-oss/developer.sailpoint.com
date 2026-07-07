---
id: v1-entitlementattributebulkupdatefilterrequest
title: Entitlementattributebulkupdatefilterrequest
pagination_label: Entitlementattributebulkupdatefilterrequest
sidebar_label: Entitlementattributebulkupdatefilterrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementattributebulkupdatefilterrequest', 'V1Entitlementattributebulkupdatefilterrequest'] 
slug: /tools/sdk/go/accessmodelmetadata/models/entitlementattributebulkupdatefilterrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatefilterrequest', 'V1Entitlementattributebulkupdatefilterrequest']
---

# Entitlementattributebulkupdatefilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementattributebulkupdatefilterrequest

`func NewEntitlementattributebulkupdatefilterrequest() *Entitlementattributebulkupdatefilterrequest`

NewEntitlementattributebulkupdatefilterrequest instantiates a new Entitlementattributebulkupdatefilterrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementattributebulkupdatefilterrequestWithDefaults

`func NewEntitlementattributebulkupdatefilterrequestWithDefaults() *Entitlementattributebulkupdatefilterrequest`

NewEntitlementattributebulkupdatefilterrequestWithDefaults instantiates a new Entitlementattributebulkupdatefilterrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *Entitlementattributebulkupdatefilterrequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Entitlementattributebulkupdatefilterrequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Entitlementattributebulkupdatefilterrequest) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Entitlementattributebulkupdatefilterrequest) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetOperation

`func (o *Entitlementattributebulkupdatefilterrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementattributebulkupdatefilterrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementattributebulkupdatefilterrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Entitlementattributebulkupdatefilterrequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *Entitlementattributebulkupdatefilterrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementattributebulkupdatefilterrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementattributebulkupdatefilterrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementattributebulkupdatefilterrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementattributebulkupdatefilterrequest) GetValues() []BulkupdateammkeyvalueInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementattributebulkupdatefilterrequest) GetValuesOk() (*[]BulkupdateammkeyvalueInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementattributebulkupdatefilterrequest) SetValues(v []BulkupdateammkeyvalueInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *Entitlementattributebulkupdatefilterrequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


