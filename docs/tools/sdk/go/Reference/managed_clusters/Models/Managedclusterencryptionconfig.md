---
id: v1-managedclusterencryptionconfig
title: Managedclusterencryptionconfig
pagination_label: Managedclusterencryptionconfig
sidebar_label: Managedclusterencryptionconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterencryptionconfig', 'V1Managedclusterencryptionconfig'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterencryptionconfig
tags: ['SDK', 'Software Development Kit', 'Managedclusterencryptionconfig', 'V1Managedclusterencryptionconfig']
---

# Managedclusterencryptionconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** | Pointer to **string** | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 

## Methods

### NewManagedclusterencryptionconfig

`func NewManagedclusterencryptionconfig() *Managedclusterencryptionconfig`

NewManagedclusterencryptionconfig instantiates a new Managedclusterencryptionconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterencryptionconfigWithDefaults

`func NewManagedclusterencryptionconfigWithDefaults() *Managedclusterencryptionconfig`

NewManagedclusterencryptionconfigWithDefaults instantiates a new Managedclusterencryptionconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormat

`func (o *Managedclusterencryptionconfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *Managedclusterencryptionconfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *Managedclusterencryptionconfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *Managedclusterencryptionconfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.


