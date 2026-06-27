---
id: v1-provisioningpolicydto
title: Provisioningpolicydto
pagination_label: Provisioningpolicydto
sidebar_label: Provisioningpolicydto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningpolicydto', 'V1Provisioningpolicydto'] 
slug: /tools/sdk/go/sources/models/provisioningpolicydto
tags: ['SDK', 'Software Development Kit', 'Provisioningpolicydto', 'V1Provisioningpolicydto']
---

# Provisioningpolicydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **NullableString** | the provisioning policy name | 
**Description** | Pointer to **string** | the description of the provisioning policy | [optional] 
**UsageType** | Pointer to [**Usagetype**](usagetype) |  | [optional] 
**Fields** | Pointer to [**[]Fielddetailsdto**](fielddetailsdto) |  | [optional] 

## Methods

### NewProvisioningpolicydto

`func NewProvisioningpolicydto(name NullableString, ) *Provisioningpolicydto`

NewProvisioningpolicydto instantiates a new Provisioningpolicydto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningpolicydtoWithDefaults

`func NewProvisioningpolicydtoWithDefaults() *Provisioningpolicydto`

NewProvisioningpolicydtoWithDefaults instantiates a new Provisioningpolicydto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Provisioningpolicydto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Provisioningpolicydto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Provisioningpolicydto) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Provisioningpolicydto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Provisioningpolicydto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDescription

`func (o *Provisioningpolicydto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Provisioningpolicydto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Provisioningpolicydto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Provisioningpolicydto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUsageType

`func (o *Provisioningpolicydto) GetUsageType() Usagetype`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *Provisioningpolicydto) GetUsageTypeOk() (*Usagetype, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *Provisioningpolicydto) SetUsageType(v Usagetype)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *Provisioningpolicydto) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetFields

`func (o *Provisioningpolicydto) GetFields() []Fielddetailsdto`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *Provisioningpolicydto) GetFieldsOk() (*[]Fielddetailsdto, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *Provisioningpolicydto) SetFields(v []Fielddetailsdto)`

SetFields sets Fields field to given value.

### HasFields

`func (o *Provisioningpolicydto) HasFields() bool`

HasFields returns a boolean if a field has been set.


