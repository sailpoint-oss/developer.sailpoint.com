---
id: v1-attributemappings-all-of-target
title: AttributemappingsAllOfTarget
pagination_label: AttributemappingsAllOfTarget
sidebar_label: AttributemappingsAllOfTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributemappingsAllOfTarget', 'V1AttributemappingsAllOfTarget'] 
slug: /tools/sdk/go/machineaccountmappings/models/attributemappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTarget', 'V1AttributemappingsAllOfTarget']
---

# AttributemappingsAllOfTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of target entity | [optional] 
**AttributeName** | Pointer to **string** | Name of the targeted attribute | [optional] 
**SourceId** | Pointer to **string** | The ID of Source | [optional] 

## Methods

### NewAttributemappingsAllOfTarget

`func NewAttributemappingsAllOfTarget() *AttributemappingsAllOfTarget`

NewAttributemappingsAllOfTarget instantiates a new AttributemappingsAllOfTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributemappingsAllOfTargetWithDefaults

`func NewAttributemappingsAllOfTargetWithDefaults() *AttributemappingsAllOfTarget`

NewAttributemappingsAllOfTargetWithDefaults instantiates a new AttributemappingsAllOfTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttributemappingsAllOfTarget) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributemappingsAllOfTarget) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributemappingsAllOfTarget) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttributemappingsAllOfTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributeName

`func (o *AttributemappingsAllOfTarget) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *AttributemappingsAllOfTarget) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *AttributemappingsAllOfTarget) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *AttributemappingsAllOfTarget) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetSourceId

`func (o *AttributemappingsAllOfTarget) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AttributemappingsAllOfTarget) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AttributemappingsAllOfTarget) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AttributemappingsAllOfTarget) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.


