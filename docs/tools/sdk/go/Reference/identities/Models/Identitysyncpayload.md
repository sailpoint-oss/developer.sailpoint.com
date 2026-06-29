---
id: v1-identitysyncpayload
title: Identitysyncpayload
pagination_label: Identitysyncpayload
sidebar_label: Identitysyncpayload
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitysyncpayload', 'V1Identitysyncpayload'] 
slug: /tools/sdk/go/identities/models/identitysyncpayload
tags: ['SDK', 'Software Development Kit', 'Identitysyncpayload', 'V1Identitysyncpayload']
---

# Identitysyncpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Payload type. | 
**DataJson** | **string** | Payload type. | 

## Methods

### NewIdentitysyncpayload

`func NewIdentitysyncpayload(type_ string, dataJson string, ) *Identitysyncpayload`

NewIdentitysyncpayload instantiates a new Identitysyncpayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitysyncpayloadWithDefaults

`func NewIdentitysyncpayloadWithDefaults() *Identitysyncpayload`

NewIdentitysyncpayloadWithDefaults instantiates a new Identitysyncpayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Identitysyncpayload) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitysyncpayload) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitysyncpayload) SetType(v string)`

SetType sets Type field to given value.


### GetDataJson

`func (o *Identitysyncpayload) GetDataJson() string`

GetDataJson returns the DataJson field if non-nil, zero value otherwise.

### GetDataJsonOk

`func (o *Identitysyncpayload) GetDataJsonOk() (*string, bool)`

GetDataJsonOk returns a tuple with the DataJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataJson

`func (o *Identitysyncpayload) SetDataJson(v string)`

SetDataJson sets DataJson field to given value.



