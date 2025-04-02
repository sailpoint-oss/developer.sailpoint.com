---
id: feature-value-dto
title: FeatureValueDto
pagination_label: FeatureValueDto
sidebar_label: FeatureValueDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FeatureValueDto', 'FeatureValueDto'] 
slug: /tools/sdk/go//models/feature-value-dto
tags: ['SDK', 'Software Development Kit', 'FeatureValueDto', 'FeatureValueDto']
---

# FeatureValueDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** | Pointer to **string** | The type of feature | [optional] 
**Numerator** | Pointer to **int32** | The number of identities that have access to the feature | [optional] 
**Denominator** | Pointer to **int32** | The number of identities with the corresponding feature | [optional] 

## Methods

### NewFeatureValueDto

`func NewFeatureValueDto() *FeatureValueDto`

NewFeatureValueDto instantiates a new FeatureValueDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeatureValueDtoWithDefaults

`func NewFeatureValueDtoWithDefaults() *FeatureValueDto`

NewFeatureValueDtoWithDefaults instantiates a new FeatureValueDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFeature

`func (o *FeatureValueDto) GetFeature() string`

GetFeature returns the Feature field if non-nil, zero value otherwise.

### GetFeatureOk

`func (o *FeatureValueDto) GetFeatureOk() (*string, bool)`

GetFeatureOk returns a tuple with the Feature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeature

`func (o *FeatureValueDto) SetFeature(v string)`

SetFeature sets Feature field to given value.

### HasFeature

`func (o *FeatureValueDto) HasFeature() bool`

HasFeature returns a boolean if a field has been set.

### GetNumerator

`func (o *FeatureValueDto) GetNumerator() int32`

GetNumerator returns the Numerator field if non-nil, zero value otherwise.

### GetNumeratorOk

`func (o *FeatureValueDto) GetNumeratorOk() (*int32, bool)`

GetNumeratorOk returns a tuple with the Numerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumerator

`func (o *FeatureValueDto) SetNumerator(v int32)`

SetNumerator sets Numerator field to given value.

### HasNumerator

`func (o *FeatureValueDto) HasNumerator() bool`

HasNumerator returns a boolean if a field has been set.

### GetDenominator

`func (o *FeatureValueDto) GetDenominator() int32`

GetDenominator returns the Denominator field if non-nil, zero value otherwise.

### GetDenominatorOk

`func (o *FeatureValueDto) GetDenominatorOk() (*int32, bool)`

GetDenominatorOk returns a tuple with the Denominator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenominator

`func (o *FeatureValueDto) SetDenominator(v int32)`

SetDenominator sets Denominator field to given value.

### HasDenominator

`func (o *FeatureValueDto) HasDenominator() bool`

HasDenominator returns a boolean if a field has been set.


