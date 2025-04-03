---
id: v2025-search-attribute-config
title: SearchAttributeConfig
pagination_label: SearchAttributeConfig
sidebar_label: SearchAttributeConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchAttributeConfig', 'V2025SearchAttributeConfig'] 
slug: /tools/sdk/go/v2025/models/search-attribute-config
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfig', 'V2025SearchAttributeConfig']
---

# SearchAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the new attribute | [optional] 
**DisplayName** | Pointer to **string** | The display name of the new attribute | [optional] 
**ApplicationAttributes** | Pointer to **map[string]interface{}** | Map of application id and their associated attribute. | [optional] 

## Methods

### NewSearchAttributeConfig

`func NewSearchAttributeConfig() *SearchAttributeConfig`

NewSearchAttributeConfig instantiates a new SearchAttributeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAttributeConfigWithDefaults

`func NewSearchAttributeConfigWithDefaults() *SearchAttributeConfig`

NewSearchAttributeConfigWithDefaults instantiates a new SearchAttributeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SearchAttributeConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SearchAttributeConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SearchAttributeConfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SearchAttributeConfig) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *SearchAttributeConfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SearchAttributeConfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SearchAttributeConfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *SearchAttributeConfig) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetApplicationAttributes

`func (o *SearchAttributeConfig) GetApplicationAttributes() map[string]interface{}`

GetApplicationAttributes returns the ApplicationAttributes field if non-nil, zero value otherwise.

### GetApplicationAttributesOk

`func (o *SearchAttributeConfig) GetApplicationAttributesOk() (*map[string]interface{}, bool)`

GetApplicationAttributesOk returns a tuple with the ApplicationAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAttributes

`func (o *SearchAttributeConfig) SetApplicationAttributes(v map[string]interface{})`

SetApplicationAttributes sets ApplicationAttributes field to given value.

### HasApplicationAttributes

`func (o *SearchAttributeConfig) HasApplicationAttributes() bool`

HasApplicationAttributes returns a boolean if a field has been set.


