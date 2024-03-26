---
id: external-attributes
title: ExternalAttributes
pagination_label: ExternalAttributes
sidebar_label: ExternalAttributes
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ExternalAttributes'] 
slug: /tools/sdk/go/v3/models/external-attributes
tags: ['SDK', 'Software Development Kit', 'ExternalAttributes']
---

# ExternalAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **string** | A unique name for the external trigger | 
**Description** |  Pointer to **string** | Additonal context about the external trigger | [optional] 

## Methods

### NewExternalAttributes

`func NewExternalAttributes(name string, ) *ExternalAttributes`

NewExternalAttributes instantiates a new ExternalAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalAttributesWithDefaults

`func NewExternalAttributesWithDefaults() *ExternalAttributes`

NewExternalAttributesWithDefaults instantiates a new ExternalAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExternalAttributes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalAttributes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalAttributes) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ExternalAttributes) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExternalAttributes) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExternalAttributes) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExternalAttributes) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to top]](#) 


