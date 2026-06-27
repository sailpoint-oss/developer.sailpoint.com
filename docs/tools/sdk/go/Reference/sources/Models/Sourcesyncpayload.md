---
id: v1-sourcesyncpayload
title: Sourcesyncpayload
pagination_label: Sourcesyncpayload
sidebar_label: Sourcesyncpayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcesyncpayload', 'V1Sourcesyncpayload'] 
slug: /tools/sdk/go/sources/models/sourcesyncpayload
tags: ['SDK', 'Software Development Kit', 'Sourcesyncpayload', 'V1Sourcesyncpayload']
---

# Sourcesyncpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Payload type. | 
**DataJson** | **string** | Payload type. | 

## Methods

### NewSourcesyncpayload

`func NewSourcesyncpayload(type_ string, dataJson string, ) *Sourcesyncpayload`

NewSourcesyncpayload instantiates a new Sourcesyncpayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesyncpayloadWithDefaults

`func NewSourcesyncpayloadWithDefaults() *Sourcesyncpayload`

NewSourcesyncpayloadWithDefaults instantiates a new Sourcesyncpayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Sourcesyncpayload) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcesyncpayload) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcesyncpayload) SetType(v string)`

SetType sets Type field to given value.


### GetDataJson

`func (o *Sourcesyncpayload) GetDataJson() string`

GetDataJson returns the DataJson field if non-nil, zero value otherwise.

### GetDataJsonOk

`func (o *Sourcesyncpayload) GetDataJsonOk() (*string, bool)`

GetDataJsonOk returns a tuple with the DataJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataJson

`func (o *Sourcesyncpayload) SetDataJson(v string)`

SetDataJson sets DataJson field to given value.



