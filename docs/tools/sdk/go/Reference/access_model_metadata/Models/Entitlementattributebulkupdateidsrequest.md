---
id: v1-entitlementattributebulkupdateidsrequest
title: Entitlementattributebulkupdateidsrequest
pagination_label: Entitlementattributebulkupdateidsrequest
sidebar_label: Entitlementattributebulkupdateidsrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementattributebulkupdateidsrequest', 'V1Entitlementattributebulkupdateidsrequest'] 
slug: /tools/sdk/go/accessmodelmetadata/models/entitlementattributebulkupdateidsrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementattributebulkupdateidsrequest', 'V1Entitlementattributebulkupdateidsrequest']
---

# Entitlementattributebulkupdateidsrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | Pointer to **[]string** | List of entitlement IDs to update. | [optional] 
**Operation** | Pointer to **string** | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | Pointer to [**[]BulkupdateammkeyvalueInner**](bulkupdateammkeyvalue-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Methods

### NewEntitlementattributebulkupdateidsrequest

`func NewEntitlementattributebulkupdateidsrequest() *Entitlementattributebulkupdateidsrequest`

NewEntitlementattributebulkupdateidsrequest instantiates a new Entitlementattributebulkupdateidsrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementattributebulkupdateidsrequestWithDefaults

`func NewEntitlementattributebulkupdateidsrequestWithDefaults() *Entitlementattributebulkupdateidsrequest`

NewEntitlementattributebulkupdateidsrequestWithDefaults instantiates a new Entitlementattributebulkupdateidsrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlements

`func (o *Entitlementattributebulkupdateidsrequest) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Entitlementattributebulkupdateidsrequest) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Entitlementattributebulkupdateidsrequest) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Entitlementattributebulkupdateidsrequest) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetOperation

`func (o *Entitlementattributebulkupdateidsrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Entitlementattributebulkupdateidsrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Entitlementattributebulkupdateidsrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Entitlementattributebulkupdateidsrequest) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReplaceScope

`func (o *Entitlementattributebulkupdateidsrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Entitlementattributebulkupdateidsrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Entitlementattributebulkupdateidsrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Entitlementattributebulkupdateidsrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Entitlementattributebulkupdateidsrequest) GetValues() []BulkupdateammkeyvalueInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Entitlementattributebulkupdateidsrequest) GetValuesOk() (*[]BulkupdateammkeyvalueInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Entitlementattributebulkupdateidsrequest) SetValues(v []BulkupdateammkeyvalueInner)`

SetValues sets Values field to given value.

### HasValues

`func (o *Entitlementattributebulkupdateidsrequest) HasValues() bool`

HasValues returns a boolean if a field has been set.


