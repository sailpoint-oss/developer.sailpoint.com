---
id: beta-source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceUsage', 'BetaSourceUsage'] 
slug: /tools/sdk/go/beta/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage', 'BetaSourceUsage']
---

# SourceUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | Pointer to **float32** | The average number of days that accounts were active within this source, for the month. | [optional] 

## Methods

### NewSourceUsage

`func NewSourceUsage() *SourceUsage`

NewSourceUsage instantiates a new SourceUsage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceUsageWithDefaults

`func NewSourceUsageWithDefaults() *SourceUsage`

NewSourceUsageWithDefaults instantiates a new SourceUsage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *SourceUsage) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *SourceUsage) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *SourceUsage) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *SourceUsage) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetCount

`func (o *SourceUsage) GetCount() float32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SourceUsage) GetCountOk() (*float32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SourceUsage) SetCount(v float32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SourceUsage) HasCount() bool`

HasCount returns a boolean if a field has been set.


