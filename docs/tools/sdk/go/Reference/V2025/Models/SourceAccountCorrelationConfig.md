---
id: v2025-source-account-correlation-config
title: SourceAccountCorrelationConfig
pagination_label: SourceAccountCorrelationConfig
sidebar_label: SourceAccountCorrelationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountCorrelationConfig', 'V2025SourceAccountCorrelationConfig'] 
slug: /tools/sdk/go/v2025/models/source-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationConfig', 'V2025SourceAccountCorrelationConfig']
---

# SourceAccountCorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Account correlation config ID. | [optional] 
**Name** | Pointer to **string** | Account correlation config's human-readable display name. | [optional] 

## Methods

### NewSourceAccountCorrelationConfig

`func NewSourceAccountCorrelationConfig() *SourceAccountCorrelationConfig`

NewSourceAccountCorrelationConfig instantiates a new SourceAccountCorrelationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountCorrelationConfigWithDefaults

`func NewSourceAccountCorrelationConfigWithDefaults() *SourceAccountCorrelationConfig`

NewSourceAccountCorrelationConfigWithDefaults instantiates a new SourceAccountCorrelationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceAccountCorrelationConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAccountCorrelationConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAccountCorrelationConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAccountCorrelationConfig) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceAccountCorrelationConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountCorrelationConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountCorrelationConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAccountCorrelationConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceAccountCorrelationConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAccountCorrelationConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAccountCorrelationConfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAccountCorrelationConfig) HasName() bool`

HasName returns a boolean if a field has been set.


