---
id: v1-preferencesdto
title: Preferencesdto
pagination_label: Preferencesdto
sidebar_label: Preferencesdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Preferencesdto', 'V1Preferencesdto'] 
slug: /tools/sdk/go/notifications/models/preferencesdto
tags: ['SDK', 'Software Development Kit', 'Preferencesdto', 'V1Preferencesdto']
---

# Preferencesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The template notification key. | [optional] 
**Mediums** | Pointer to [**[]Medium**](medium) | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. More mediums may be added in the future. | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified date of preference | [optional] 

## Methods

### NewPreferencesdto

`func NewPreferencesdto() *Preferencesdto`

NewPreferencesdto instantiates a new Preferencesdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferencesdtoWithDefaults

`func NewPreferencesdtoWithDefaults() *Preferencesdto`

NewPreferencesdtoWithDefaults instantiates a new Preferencesdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Preferencesdto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Preferencesdto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Preferencesdto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Preferencesdto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMediums

`func (o *Preferencesdto) GetMediums() []Medium`

GetMediums returns the Mediums field if non-nil, zero value otherwise.

### GetMediumsOk

`func (o *Preferencesdto) GetMediumsOk() (*[]Medium, bool)`

GetMediumsOk returns a tuple with the Mediums field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediums

`func (o *Preferencesdto) SetMediums(v []Medium)`

SetMediums sets Mediums field to given value.

### HasMediums

`func (o *Preferencesdto) HasMediums() bool`

HasMediums returns a boolean if a field has been set.

### GetModified

`func (o *Preferencesdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Preferencesdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Preferencesdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Preferencesdto) HasModified() bool`

HasModified returns a boolean if a field has been set.


