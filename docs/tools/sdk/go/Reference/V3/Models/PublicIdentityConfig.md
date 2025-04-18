---
id: public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PublicIdentityConfig', 'PublicIdentityConfig'] 
slug: /tools/sdk/go/v3/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig', 'PublicIdentityConfig']
---

# PublicIdentityConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**Modified** | Pointer to **NullableTime** | When this configuration was last modified. | [optional] 
**ModifiedBy** | Pointer to [**NullableIdentityReference**](identity-reference) |  | [optional] 

## Methods

### NewPublicIdentityConfig

`func NewPublicIdentityConfig() *PublicIdentityConfig`

NewPublicIdentityConfig instantiates a new PublicIdentityConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicIdentityConfigWithDefaults

`func NewPublicIdentityConfigWithDefaults() *PublicIdentityConfig`

NewPublicIdentityConfigWithDefaults instantiates a new PublicIdentityConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *PublicIdentityConfig) GetAttributes() []PublicIdentityAttributeConfig`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PublicIdentityConfig) GetAttributesOk() (*[]PublicIdentityAttributeConfig, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PublicIdentityConfig) SetAttributes(v []PublicIdentityAttributeConfig)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PublicIdentityConfig) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetModified

`func (o *PublicIdentityConfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PublicIdentityConfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PublicIdentityConfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PublicIdentityConfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *PublicIdentityConfig) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *PublicIdentityConfig) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetModifiedBy

`func (o *PublicIdentityConfig) GetModifiedBy() IdentityReference`

GetModifiedBy returns the ModifiedBy field if non-nil, zero value otherwise.

### GetModifiedByOk

`func (o *PublicIdentityConfig) GetModifiedByOk() (*IdentityReference, bool)`

GetModifiedByOk returns a tuple with the ModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedBy

`func (o *PublicIdentityConfig) SetModifiedBy(v IdentityReference)`

SetModifiedBy sets ModifiedBy field to given value.

### HasModifiedBy

`func (o *PublicIdentityConfig) HasModifiedBy() bool`

HasModifiedBy returns a boolean if a field has been set.

### SetModifiedByNil

`func (o *PublicIdentityConfig) SetModifiedByNil(b bool)`

 SetModifiedByNil sets the value for ModifiedBy to be an explicit nil

### UnsetModifiedBy
`func (o *PublicIdentityConfig) UnsetModifiedBy()`

UnsetModifiedBy ensures that no value is present for ModifiedBy, not even an explicit nil

