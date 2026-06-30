---
id: v1-publicidentityconfig
title: Publicidentityconfig
pagination_label: Publicidentityconfig
sidebar_label: Publicidentityconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Publicidentityconfig', 'V1Publicidentityconfig'] 
slug: /tools/sdk/go/publicidentitiesconfig/models/publicidentityconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityconfig', 'V1Publicidentityconfig']
---

# Publicidentityconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]Publicidentityattributeconfig**](publicidentityattributeconfig) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**Modified** | Pointer to **NullableTime** | When this configuration was last modified. | [optional] 
**ModifiedBy** | Pointer to [**NullableIdentityreference**](identityreference) |  | [optional] 

## Methods

### NewPublicidentityconfig

`func NewPublicidentityconfig() *Publicidentityconfig`

NewPublicidentityconfig instantiates a new Publicidentityconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicidentityconfigWithDefaults

`func NewPublicidentityconfigWithDefaults() *Publicidentityconfig`

NewPublicidentityconfigWithDefaults instantiates a new Publicidentityconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *Publicidentityconfig) GetAttributes() []Publicidentityattributeconfig`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Publicidentityconfig) GetAttributesOk() (*[]Publicidentityattributeconfig, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Publicidentityconfig) SetAttributes(v []Publicidentityattributeconfig)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Publicidentityconfig) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetModified

`func (o *Publicidentityconfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Publicidentityconfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Publicidentityconfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Publicidentityconfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Publicidentityconfig) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Publicidentityconfig) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetModifiedBy

`func (o *Publicidentityconfig) GetModifiedBy() Identityreference`

GetModifiedBy returns the ModifiedBy field if non-nil, zero value otherwise.

### GetModifiedByOk

`func (o *Publicidentityconfig) GetModifiedByOk() (*Identityreference, bool)`

GetModifiedByOk returns a tuple with the ModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedBy

`func (o *Publicidentityconfig) SetModifiedBy(v Identityreference)`

SetModifiedBy sets ModifiedBy field to given value.

### HasModifiedBy

`func (o *Publicidentityconfig) HasModifiedBy() bool`

HasModifiedBy returns a boolean if a field has been set.

### SetModifiedByNil

`func (o *Publicidentityconfig) SetModifiedByNil(b bool)`

 SetModifiedByNil sets the value for ModifiedBy to be an explicit nil

### UnsetModifiedBy
`func (o *Publicidentityconfig) UnsetModifiedBy()`

UnsetModifiedBy ensures that no value is present for ModifiedBy, not even an explicit nil

