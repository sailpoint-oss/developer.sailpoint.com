---
id: v1-sodrecipient
title: Sodrecipient
pagination_label: Sodrecipient
sidebar_label: Sodrecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodrecipient', 'V1Sodrecipient'] 
slug: /tools/sdk/go/sodpolicies/models/sodrecipient
tags: ['SDK', 'Software Development Kit', 'Sodrecipient', 'V1Sodrecipient']
---

# Sodrecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | SOD policy recipient DTO type. | [optional] 
**Id** | Pointer to **string** | SOD policy recipient's identity ID. | [optional] 
**Name** | Pointer to **string** | SOD policy recipient's display name. | [optional] 

## Methods

### NewSodrecipient

`func NewSodrecipient() *Sodrecipient`

NewSodrecipient instantiates a new Sodrecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodrecipientWithDefaults

`func NewSodrecipientWithDefaults() *Sodrecipient`

NewSodrecipientWithDefaults instantiates a new Sodrecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Sodrecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sodrecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sodrecipient) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sodrecipient) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Sodrecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sodrecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sodrecipient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sodrecipient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Sodrecipient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sodrecipient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sodrecipient) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sodrecipient) HasName() bool`

HasName returns a boolean if a field has been set.


