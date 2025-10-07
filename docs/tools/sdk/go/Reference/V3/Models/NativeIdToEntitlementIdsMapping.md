---
id: native-id-to-entitlement-ids-mapping
title: NativeIdToEntitlementIdsMapping
pagination_label: NativeIdToEntitlementIdsMapping
sidebar_label: NativeIdToEntitlementIdsMapping
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NativeIdToEntitlementIdsMapping', 'NativeIdToEntitlementIdsMapping'] 
slug: /tools/sdk/go/v3/models/native-id-to-entitlement-ids-mapping
tags: ['SDK', 'Software Development Kit', 'NativeIdToEntitlementIdsMapping', 'NativeIdToEntitlementIdsMapping']
---

# NativeIdToEntitlementIdsMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeId** | **string** | The native ID in the source system. | 
**EntitlementIds** | **[]string** | The list of entitlement IDs associated with the native ID in the source system. | 

## Methods

### NewNativeIdToEntitlementIdsMapping

`func NewNativeIdToEntitlementIdsMapping(nativeId string, entitlementIds []string, ) *NativeIdToEntitlementIdsMapping`

NewNativeIdToEntitlementIdsMapping instantiates a new NativeIdToEntitlementIdsMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNativeIdToEntitlementIdsMappingWithDefaults

`func NewNativeIdToEntitlementIdsMappingWithDefaults() *NativeIdToEntitlementIdsMapping`

NewNativeIdToEntitlementIdsMappingWithDefaults instantiates a new NativeIdToEntitlementIdsMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNativeId

`func (o *NativeIdToEntitlementIdsMapping) GetNativeId() string`

GetNativeId returns the NativeId field if non-nil, zero value otherwise.

### GetNativeIdOk

`func (o *NativeIdToEntitlementIdsMapping) GetNativeIdOk() (*string, bool)`

GetNativeIdOk returns a tuple with the NativeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeId

`func (o *NativeIdToEntitlementIdsMapping) SetNativeId(v string)`

SetNativeId sets NativeId field to given value.


### GetEntitlementIds

`func (o *NativeIdToEntitlementIdsMapping) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *NativeIdToEntitlementIdsMapping) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *NativeIdToEntitlementIdsMapping) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.



