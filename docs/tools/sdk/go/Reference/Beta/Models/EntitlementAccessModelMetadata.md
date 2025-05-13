---
id: beta-entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementAccessModelMetadata', 'BetaEntitlementAccessModelMetadata'] 
slug: /tools/sdk/go/beta/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata', 'BetaEntitlementAccessModelMetadata']
---

# EntitlementAccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Methods

### NewEntitlementAccessModelMetadata

`func NewEntitlementAccessModelMetadata() *EntitlementAccessModelMetadata`

NewEntitlementAccessModelMetadata instantiates a new EntitlementAccessModelMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementAccessModelMetadataWithDefaults

`func NewEntitlementAccessModelMetadataWithDefaults() *EntitlementAccessModelMetadata`

NewEntitlementAccessModelMetadataWithDefaults instantiates a new EntitlementAccessModelMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *EntitlementAccessModelMetadata) GetAttributes() []AttributeDTO`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *EntitlementAccessModelMetadata) GetAttributesOk() (*[]AttributeDTO, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *EntitlementAccessModelMetadata) SetAttributes(v []AttributeDTO)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *EntitlementAccessModelMetadata) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *EntitlementAccessModelMetadata) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *EntitlementAccessModelMetadata) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

