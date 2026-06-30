---
id: v1-roleminingidentitydistribution-distribution-inner
title: RoleminingidentitydistributionDistributionInner
pagination_label: RoleminingidentitydistributionDistributionInner
sidebar_label: RoleminingidentitydistributionDistributionInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleminingidentitydistributionDistributionInner', 'V1RoleminingidentitydistributionDistributionInner'] 
slug: /tools/sdk/go/iairolemining/models/roleminingidentitydistribution-distribution-inner
tags: ['SDK', 'Software Development Kit', 'RoleminingidentitydistributionDistributionInner', 'V1RoleminingidentitydistributionDistributionInner']
---

# RoleminingidentitydistributionDistributionInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeValue** | Pointer to **NullableString** | The attribute value that identities are grouped by | [optional] 
**Count** | Pointer to **int32** | The number of identities that have this attribute value | [optional] 

## Methods

### NewRoleminingidentitydistributionDistributionInner

`func NewRoleminingidentitydistributionDistributionInner() *RoleminingidentitydistributionDistributionInner`

NewRoleminingidentitydistributionDistributionInner instantiates a new RoleminingidentitydistributionDistributionInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingidentitydistributionDistributionInnerWithDefaults

`func NewRoleminingidentitydistributionDistributionInnerWithDefaults() *RoleminingidentitydistributionDistributionInner`

NewRoleminingidentitydistributionDistributionInnerWithDefaults instantiates a new RoleminingidentitydistributionDistributionInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeValue

`func (o *RoleminingidentitydistributionDistributionInner) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *RoleminingidentitydistributionDistributionInner) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *RoleminingidentitydistributionDistributionInner) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *RoleminingidentitydistributionDistributionInner) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### SetAttributeValueNil

`func (o *RoleminingidentitydistributionDistributionInner) SetAttributeValueNil(b bool)`

 SetAttributeValueNil sets the value for AttributeValue to be an explicit nil

### UnsetAttributeValue
`func (o *RoleminingidentitydistributionDistributionInner) UnsetAttributeValue()`

UnsetAttributeValue ensures that no value is present for AttributeValue, not even an explicit nil
### GetCount

`func (o *RoleminingidentitydistributionDistributionInner) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoleminingidentitydistributionDistributionInner) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoleminingidentitydistributionDistributionInner) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoleminingidentitydistributionDistributionInner) HasCount() bool`

HasCount returns a boolean if a field has been set.


