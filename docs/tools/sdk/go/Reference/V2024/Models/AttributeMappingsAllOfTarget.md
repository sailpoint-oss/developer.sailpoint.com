---
id: v2024-attribute-mappings-all-of-target
title: AttributeMappingsAllOfTarget
pagination_label: AttributeMappingsAllOfTarget
sidebar_label: AttributeMappingsAllOfTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeMappingsAllOfTarget', 'V2024AttributeMappingsAllOfTarget'] 
slug: /tools/sdk/go/v2024/models/attribute-mappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTarget', 'V2024AttributeMappingsAllOfTarget']
---

# AttributeMappingsAllOfTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of target entity | [optional] 
**AttributeName** | Pointer to **string** | Name of the targeted attribute | [optional] 
**SourceId** | Pointer to **string** | The ID of Source | [optional] 

## Methods

### NewAttributeMappingsAllOfTarget

`func NewAttributeMappingsAllOfTarget() *AttributeMappingsAllOfTarget`

NewAttributeMappingsAllOfTarget instantiates a new AttributeMappingsAllOfTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeMappingsAllOfTargetWithDefaults

`func NewAttributeMappingsAllOfTargetWithDefaults() *AttributeMappingsAllOfTarget`

NewAttributeMappingsAllOfTargetWithDefaults instantiates a new AttributeMappingsAllOfTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributeMappingsAllOfTarget) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeMappingsAllOfTarget) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeMappingsAllOfTarget) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeMappingsAllOfTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributeName

`func (o *AttributeMappingsAllOfTarget) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *AttributeMappingsAllOfTarget) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *AttributeMappingsAllOfTarget) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *AttributeMappingsAllOfTarget) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetSourceId

`func (o *AttributeMappingsAllOfTarget) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AttributeMappingsAllOfTarget) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AttributeMappingsAllOfTarget) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AttributeMappingsAllOfTarget) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.


