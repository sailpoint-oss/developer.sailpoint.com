---
id: v2024-managed-cluster-encryption-config
title: ManagedClusterEncryptionConfig
pagination_label: ManagedClusterEncryptionConfig
sidebar_label: ManagedClusterEncryptionConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterEncryptionConfig', 'V2024ManagedClusterEncryptionConfig'] 
slug: /tools/sdk/go/v2024/models/managed-cluster-encryption-config
tags: ['SDK', 'Software Development Kit', 'ManagedClusterEncryptionConfig', 'V2024ManagedClusterEncryptionConfig']
---

# ManagedClusterEncryptionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** | Pointer to **string** | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 

## Methods

### NewManagedClusterEncryptionConfig

`func NewManagedClusterEncryptionConfig() *ManagedClusterEncryptionConfig`

NewManagedClusterEncryptionConfig instantiates a new ManagedClusterEncryptionConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterEncryptionConfigWithDefaults

`func NewManagedClusterEncryptionConfigWithDefaults() *ManagedClusterEncryptionConfig`

NewManagedClusterEncryptionConfigWithDefaults instantiates a new ManagedClusterEncryptionConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormat

`func (o *ManagedClusterEncryptionConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *ManagedClusterEncryptionConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *ManagedClusterEncryptionConfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *ManagedClusterEncryptionConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.


