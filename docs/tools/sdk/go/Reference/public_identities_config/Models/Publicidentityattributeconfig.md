---
id: v1-publicidentityattributeconfig
title: Publicidentityattributeconfig
pagination_label: Publicidentityattributeconfig
sidebar_label: Publicidentityattributeconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Publicidentityattributeconfig', 'V1Publicidentityattributeconfig'] 
slug: /tools/sdk/go/publicidentitiesconfig/models/publicidentityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityattributeconfig', 'V1Publicidentityattributeconfig']
---

# Publicidentityattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The attribute key | [optional] 
**Name** | Pointer to **string** | The attribute display name | [optional] 

## Methods

### NewPublicidentityattributeconfig

`func NewPublicidentityattributeconfig() *Publicidentityattributeconfig`

NewPublicidentityattributeconfig instantiates a new Publicidentityattributeconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicidentityattributeconfigWithDefaults

`func NewPublicidentityattributeconfigWithDefaults() *Publicidentityattributeconfig`

NewPublicidentityattributeconfigWithDefaults instantiates a new Publicidentityattributeconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Publicidentityattributeconfig) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Publicidentityattributeconfig) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Publicidentityattributeconfig) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Publicidentityattributeconfig) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetName

`func (o *Publicidentityattributeconfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Publicidentityattributeconfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Publicidentityattributeconfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Publicidentityattributeconfig) HasName() bool`

HasName returns a boolean if a field has been set.


