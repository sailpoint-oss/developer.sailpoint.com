---
id: beta-identity-sync-payload
title: IdentitySyncPayload
pagination_label: IdentitySyncPayload
sidebar_label: IdentitySyncPayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitySyncPayload', 'BetaIdentitySyncPayload'] 
slug: /tools/sdk/go/beta/models/identity-sync-payload
tags: ['SDK', 'Software Development Kit', 'IdentitySyncPayload', 'BetaIdentitySyncPayload']
---

# IdentitySyncPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Payload type. | 
**DataJson** | **string** | Payload type. | 

## Methods

### NewIdentitySyncPayload

`func NewIdentitySyncPayload(type_ string, dataJson string, ) *IdentitySyncPayload`

NewIdentitySyncPayload instantiates a new IdentitySyncPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitySyncPayloadWithDefaults

`func NewIdentitySyncPayloadWithDefaults() *IdentitySyncPayload`

NewIdentitySyncPayloadWithDefaults instantiates a new IdentitySyncPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentitySyncPayload) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentitySyncPayload) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentitySyncPayload) SetType(v string)`

SetType sets Type field to given value.


### GetDataJson

`func (o *IdentitySyncPayload) GetDataJson() string`

GetDataJson returns the DataJson field if non-nil, zero value otherwise.

### GetDataJsonOk

`func (o *IdentitySyncPayload) GetDataJsonOk() (*string, bool)`

GetDataJsonOk returns a tuple with the DataJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataJson

`func (o *IdentitySyncPayload) SetDataJson(v string)`

SetDataJson sets DataJson field to given value.



