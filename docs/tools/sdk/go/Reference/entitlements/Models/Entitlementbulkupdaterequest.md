---
id: v1-entitlementbulkupdaterequest
title: Entitlementbulkupdaterequest
pagination_label: Entitlementbulkupdaterequest
sidebar_label: Entitlementbulkupdaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementbulkupdaterequest', 'V1Entitlementbulkupdaterequest'] 
slug: /tools/sdk/go/entitlements/models/entitlementbulkupdaterequest
tags: ['SDK', 'Software Development Kit', 'Entitlementbulkupdaterequest', 'V1Entitlementbulkupdaterequest']
---

# Entitlementbulkupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** | **[]string** | List of entitlement ids to update | 
**JsonPatch** | [**[]Jsonpatchoperation**](jsonpatchoperation) |  | 

## Methods

### NewEntitlementbulkupdaterequest

`func NewEntitlementbulkupdaterequest(entitlementIds []string, jsonPatch []Jsonpatchoperation, ) *Entitlementbulkupdaterequest`

NewEntitlementbulkupdaterequest instantiates a new Entitlementbulkupdaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementbulkupdaterequestWithDefaults

`func NewEntitlementbulkupdaterequestWithDefaults() *Entitlementbulkupdaterequest`

NewEntitlementbulkupdaterequestWithDefaults instantiates a new Entitlementbulkupdaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementIds

`func (o *Entitlementbulkupdaterequest) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *Entitlementbulkupdaterequest) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *Entitlementbulkupdaterequest) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.


### GetJsonPatch

`func (o *Entitlementbulkupdaterequest) GetJsonPatch() []Jsonpatchoperation`

GetJsonPatch returns the JsonPatch field if non-nil, zero value otherwise.

### GetJsonPatchOk

`func (o *Entitlementbulkupdaterequest) GetJsonPatchOk() (*[]Jsonpatchoperation, bool)`

GetJsonPatchOk returns a tuple with the JsonPatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPatch

`func (o *Entitlementbulkupdaterequest) SetJsonPatch(v []Jsonpatchoperation)`

SetJsonPatch sets JsonPatch field to given value.



