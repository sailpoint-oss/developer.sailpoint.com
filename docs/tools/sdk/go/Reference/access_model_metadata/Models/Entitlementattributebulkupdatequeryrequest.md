---
id: v1-entitlementattributebulkupdatequeryrequest
title: Entitlementattributebulkupdatequeryrequest
pagination_label: Entitlementattributebulkupdatequeryrequest
sidebar_label: Entitlementattributebulkupdatequeryrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementattributebulkupdatequeryrequest', 'V1Entitlementattributebulkupdatequeryrequest'] 
slug: /tools/sdk/go/accessmodelmetadata/models/entitlementattributebulkupdatequeryrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdatequeryrequest', 'V1Entitlementattributebulkupdatequeryrequest']
---

# Entitlementattributebulkupdatequeryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to [**Search**](search) |  | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementattributebulkupdatequeryrequest

`func NewEntitlementattributebulkupdatequeryrequest() *Entitlementattributebulkupdatequeryrequest`

NewEntitlementattributebulkupdatequeryrequest instantiates a new Entitlementattributebulkupdatequeryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementattributebulkupdatequeryrequestWithDefaults

`func NewEntitlementattributebulkupdatequeryrequestWithDefaults() *Entitlementattributebulkupdatequeryrequest`

NewEntitlementattributebulkupdatequeryrequestWithDefaults instantiates a new Entitlementattributebulkupdatequeryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Entitlementattributebulkupdatequeryrequest) GetQuery() Search`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Entitlementattributebulkupdatequeryrequest) GetQueryOk() (*Search, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Entitlementattributebulkupdatequeryrequest) SetQuery(v Search)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *Entitlementattributebulkupdatequeryrequest) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetOperation

`func (o *Entitlementattributebulkupdatequeryrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementattributebulkupdatequeryrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementattributebulkupdatequeryrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Entitlementattributebulkupdatequeryrequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *Entitlementattributebulkupdatequeryrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementattributebulkupdatequeryrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementattributebulkupdatequeryrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementattributebulkupdatequeryrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementattributebulkupdatequeryrequest) GetValues() []BulkupdateammkeyvalueInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementattributebulkupdatequeryrequest) GetValuesOk() (*[]BulkupdateammkeyvalueInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementattributebulkupdatequeryrequest) SetValues(v []BulkupdateammkeyvalueInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *Entitlementattributebulkupdatequeryrequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


