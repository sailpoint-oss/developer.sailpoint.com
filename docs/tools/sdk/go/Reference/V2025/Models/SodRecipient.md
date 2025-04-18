---
id: v2025-sod-recipient
title: SodRecipient
pagination_label: SodRecipient
sidebar_label: SodRecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodRecipient', 'V2025SodRecipient'] 
slug: /tools/sdk/go/v2025/models/sod-recipient
tags: ['SDK', 'Software Development Kit', 'SodRecipient', 'V2025SodRecipient']
---

# SodRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy recipient DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy recipient's identity ID. | [optional] 
**Name** | Pointer to **string** | SOD policy recipient's display name. | [optional] 

## Methods

### NewSodRecipient

`func NewSodRecipient() *SodRecipient`

NewSodRecipient instantiates a new SodRecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodRecipientWithDefaults

`func NewSodRecipientWithDefaults() *SodRecipient`

NewSodRecipientWithDefaults instantiates a new SodRecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SodRecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodRecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodRecipient) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodRecipient) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodRecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodRecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodRecipient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodRecipient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodRecipient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodRecipient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodRecipient) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodRecipient) HasName() bool`

HasName returns a boolean if a field has been set.


