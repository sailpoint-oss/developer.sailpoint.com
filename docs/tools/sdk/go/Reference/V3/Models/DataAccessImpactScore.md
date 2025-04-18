---
id: data-access-impact-score
title: DataAccessImpactScore
pagination_label: DataAccessImpactScore
sidebar_label: DataAccessImpactScore
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataAccessImpactScore', 'DataAccessImpactScore'] 
slug: /tools/sdk/go/v3/models/data-access-impact-score
tags: ['SDK', 'Software Development Kit', 'DataAccessImpactScore', 'DataAccessImpactScore']
---

# DataAccessImpactScore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Impact Score for this data | [optional] 

## Methods

### NewDataAccessImpactScore

`func NewDataAccessImpactScore() *DataAccessImpactScore`

NewDataAccessImpactScore instantiates a new DataAccessImpactScore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataAccessImpactScoreWithDefaults

`func NewDataAccessImpactScoreWithDefaults() *DataAccessImpactScore`

NewDataAccessImpactScoreWithDefaults instantiates a new DataAccessImpactScore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *DataAccessImpactScore) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DataAccessImpactScore) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DataAccessImpactScore) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DataAccessImpactScore) HasValue() bool`

HasValue returns a boolean if a field has been set.


