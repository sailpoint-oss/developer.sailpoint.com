---
id: v1-roleminingidentitydistribution
title: Roleminingidentitydistribution
pagination_label: Roleminingidentitydistribution
sidebar_label: Roleminingidentitydistribution
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingidentitydistribution', 'V1Roleminingidentitydistribution'] 
slug: /tools/sdk/go/iairolemining/models/roleminingidentitydistribution
tags: ['SDK', 'Software Development Kit', 'Roleminingidentitydistribution', 'V1Roleminingidentitydistribution']
---

# Roleminingidentitydistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** | Id of the potential role | [optional] 
**Distribution** | Pointer to [**[]RoleminingidentitydistributionDistributionInner**](roleminingidentitydistribution-distribution-inner) |  | [optional] 

## Methods

### NewRoleminingidentitydistribution

`func NewRoleminingidentitydistribution() *Roleminingidentitydistribution`

NewRoleminingidentitydistribution instantiates a new Roleminingidentitydistribution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingidentitydistributionWithDefaults

`func NewRoleminingidentitydistributionWithDefaults() *Roleminingidentitydistribution`

NewRoleminingidentitydistributionWithDefaults instantiates a new Roleminingidentitydistribution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *Roleminingidentitydistribution) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Roleminingidentitydistribution) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Roleminingidentitydistribution) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *Roleminingidentitydistribution) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetDistribution

`func (o *Roleminingidentitydistribution) GetDistribution() []RoleminingidentitydistributionDistributionInner`

GetDistribution returns the Distribution field if non-nil, zero value otherwise.

### GetDistributionOk

`func (o *Roleminingidentitydistribution) GetDistributionOk() (*[]RoleminingidentitydistributionDistributionInner, bool)`

GetDistributionOk returns a tuple with the Distribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistribution

`func (o *Roleminingidentitydistribution) SetDistribution(v []RoleminingidentitydistributionDistributionInner)`

SetDistribution sets Distribution field to given value.

### HasDistribution

`func (o *Roleminingidentitydistribution) HasDistribution() bool`

HasDistribution returns a boolean if a field has been set.


