---
id: source-sync-payload
title: SourceSyncPayload
pagination_label: SourceSyncPayload
sidebar_label: SourceSyncPayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSyncPayload', 'SourceSyncPayload'] 
slug: /tools/sdk/go//models/source-sync-payload
tags: ['SDK', 'Software Development Kit', 'SourceSyncPayload', 'SourceSyncPayload']
---

# SourceSyncPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Payload type. | 
**DataJson** | **string** | Payload type. | 

## Methods

### NewSourceSyncPayload

`func NewSourceSyncPayload(type_ string, dataJson string, ) *SourceSyncPayload`

NewSourceSyncPayload instantiates a new SourceSyncPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSyncPayloadWithDefaults

`func NewSourceSyncPayloadWithDefaults() *SourceSyncPayload`

NewSourceSyncPayloadWithDefaults instantiates a new SourceSyncPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceSyncPayload) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSyncPayload) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSyncPayload) SetType(v string)`

SetType sets Type field to given value.


### GetDataJson

`func (o *SourceSyncPayload) GetDataJson() string`

GetDataJson returns the DataJson field if non-nil, zero value otherwise.

### GetDataJsonOk

`func (o *SourceSyncPayload) GetDataJsonOk() (*string, bool)`

GetDataJsonOk returns a tuple with the DataJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataJson

`func (o *SourceSyncPayload) SetDataJson(v string)`

SetDataJson sets DataJson field to given value.



