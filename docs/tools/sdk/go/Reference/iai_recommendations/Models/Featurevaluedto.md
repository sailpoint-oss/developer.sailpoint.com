---
id: v1-featurevaluedto
title: Featurevaluedto
pagination_label: Featurevaluedto
sidebar_label: Featurevaluedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Featurevaluedto', 'V1Featurevaluedto'] 
slug: /tools/sdk/go/iairecommendations/models/featurevaluedto
tags: ['SDK', 'Software Development Kit', 'Featurevaluedto', 'V1Featurevaluedto']
---

# Featurevaluedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** | Pointer to **string** | The type of feature | [optional] 
**Numerator** | Pointer to **int32** | The number of identities that have access to the feature | [optional] 
**Denominator** | Pointer to **int32** | The number of identities with the corresponding feature | [optional] 

## Methods

### NewFeaturevaluedto

`func NewFeaturevaluedto() *Featurevaluedto`

NewFeaturevaluedto instantiates a new Featurevaluedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeaturevaluedtoWithDefaults

`func NewFeaturevaluedtoWithDefaults() *Featurevaluedto`

NewFeaturevaluedtoWithDefaults instantiates a new Featurevaluedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFeature

`func (o *Featurevaluedto) GetFeature() string`

GetFeature returns the Feature field if non-nil, zero value otherwise.

### GetFeatureOk

`func (o *Featurevaluedto) GetFeatureOk() (*string, bool)`

GetFeatureOk returns a tuple with the Feature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeature

`func (o *Featurevaluedto) SetFeature(v string)`

SetFeature sets Feature field to given value.

### HasFeature

`func (o *Featurevaluedto) HasFeature() bool`

HasFeature returns a boolean if a field has been set.

### GetNumerator

`func (o *Featurevaluedto) GetNumerator() int32`

GetNumerator returns the Numerator field if non-nil, zero value otherwise.

### GetNumeratorOk

`func (o *Featurevaluedto) GetNumeratorOk() (*int32, bool)`

GetNumeratorOk returns a tuple with the Numerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumerator

`func (o *Featurevaluedto) SetNumerator(v int32)`

SetNumerator sets Numerator field to given value.

### HasNumerator

`func (o *Featurevaluedto) HasNumerator() bool`

HasNumerator returns a boolean if a field has been set.

### GetDenominator

`func (o *Featurevaluedto) GetDenominator() int32`

GetDenominator returns the Denominator field if non-nil, zero value otherwise.

### GetDenominatorOk

`func (o *Featurevaluedto) GetDenominatorOk() (*int32, bool)`

GetDenominatorOk returns a tuple with the Denominator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenominator

`func (o *Featurevaluedto) SetDenominator(v int32)`

SetDenominator sets Denominator field to given value.

### HasDenominator

`func (o *Featurevaluedto) HasDenominator() bool`

HasDenominator returns a boolean if a field has been set.


