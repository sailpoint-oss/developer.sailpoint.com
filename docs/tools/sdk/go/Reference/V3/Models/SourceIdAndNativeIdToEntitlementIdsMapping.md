---
id: source-id-and-native-id-to-entitlement-ids-mapping
title: SourceIdAndNativeIdToEntitlementIdsMapping
pagination_label: SourceIdAndNativeIdToEntitlementIdsMapping
sidebar_label: SourceIdAndNativeIdToEntitlementIdsMapping
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceIdAndNativeIdToEntitlementIdsMapping', 'SourceIdAndNativeIdToEntitlementIdsMapping'] 
slug: /tools/sdk/go/v3/models/source-id-and-native-id-to-entitlement-ids-mapping
tags: ['SDK', 'Software Development Kit', 'SourceIdAndNativeIdToEntitlementIdsMapping', 'SourceIdAndNativeIdToEntitlementIdsMapping']
---

# SourceIdAndNativeIdToEntitlementIdsMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **string** | The ID of the source system. | 
**NativeIdToEntitlementIdsMappings** | [**[]NativeIdToEntitlementIdsMapping**](native-id-to-entitlement-ids-mapping) | The native ID and entitlement IDs mapping in the source system. | 

## Methods

### NewSourceIdAndNativeIdToEntitlementIdsMapping

`func NewSourceIdAndNativeIdToEntitlementIdsMapping(sourceId string, nativeIdToEntitlementIdsMappings []NativeIdToEntitlementIdsMapping, ) *SourceIdAndNativeIdToEntitlementIdsMapping`

NewSourceIdAndNativeIdToEntitlementIdsMapping instantiates a new SourceIdAndNativeIdToEntitlementIdsMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceIdAndNativeIdToEntitlementIdsMappingWithDefaults

`func NewSourceIdAndNativeIdToEntitlementIdsMappingWithDefaults() *SourceIdAndNativeIdToEntitlementIdsMapping`

NewSourceIdAndNativeIdToEntitlementIdsMappingWithDefaults instantiates a new SourceIdAndNativeIdToEntitlementIdsMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetNativeIdToEntitlementIdsMappings

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) GetNativeIdToEntitlementIdsMappings() []NativeIdToEntitlementIdsMapping`

GetNativeIdToEntitlementIdsMappings returns the NativeIdToEntitlementIdsMappings field if non-nil, zero value otherwise.

### GetNativeIdToEntitlementIdsMappingsOk

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) GetNativeIdToEntitlementIdsMappingsOk() (*[]NativeIdToEntitlementIdsMapping, bool)`

GetNativeIdToEntitlementIdsMappingsOk returns a tuple with the NativeIdToEntitlementIdsMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdToEntitlementIdsMappings

`func (o *SourceIdAndNativeIdToEntitlementIdsMapping) SetNativeIdToEntitlementIdsMappings(v []NativeIdToEntitlementIdsMapping)`

SetNativeIdToEntitlementIdsMappings sets NativeIdToEntitlementIdsMappings field to given value.



