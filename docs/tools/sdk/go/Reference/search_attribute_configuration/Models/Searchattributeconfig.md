---
id: v1-searchattributeconfig
title: Searchattributeconfig
pagination_label: Searchattributeconfig
sidebar_label: Searchattributeconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Searchattributeconfig', 'V1Searchattributeconfig'] 
slug: /tools/sdk/go/searchattributeconfiguration/models/searchattributeconfig
tags: ['SDK', 'Software Development Kit', 'Searchattributeconfig', 'V1Searchattributeconfig']
---

# Searchattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the new attribute | [optional] 
**DisplayName** | Pointer to **string** | The display name of the new attribute | [optional] 
**ApplicationAttributes** | Pointer to **map[string]interface{}** | Map of application id and their associated attribute. | [optional] 

## Methods

### NewSearchattributeconfig

`func NewSearchattributeconfig() *Searchattributeconfig`

NewSearchattributeconfig instantiates a new Searchattributeconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchattributeconfigWithDefaults

`func NewSearchattributeconfigWithDefaults() *Searchattributeconfig`

NewSearchattributeconfigWithDefaults instantiates a new Searchattributeconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Searchattributeconfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Searchattributeconfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Searchattributeconfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Searchattributeconfig) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Searchattributeconfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Searchattributeconfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Searchattributeconfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Searchattributeconfig) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetApplicationAttributes

`func (o *Searchattributeconfig) GetApplicationAttributes() map[string]interface{}`

GetApplicationAttributes returns the ApplicationAttributes field if non-nil, zero value otherwise.

### GetApplicationAttributesOk

`func (o *Searchattributeconfig) GetApplicationAttributesOk() (*map[string]interface{}, bool)`

GetApplicationAttributesOk returns a tuple with the ApplicationAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAttributes

`func (o *Searchattributeconfig) SetApplicationAttributes(v map[string]interface{})`

SetApplicationAttributes sets ApplicationAttributes field to given value.

### HasApplicationAttributes

`func (o *Searchattributeconfig) HasApplicationAttributes() bool`

HasApplicationAttributes returns a boolean if a field has been set.


