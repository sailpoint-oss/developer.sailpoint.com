---
id: v1-sourceusage
title: Sourceusage
pagination_label: Sourceusage
sidebar_label: Sourceusage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceusage', 'V1Sourceusage'] 
slug: /tools/sdk/go/sourceusages/models/sourceusage
tags: ['SDK', 'Software Development Kit', 'Sourceusage', 'V1Sourceusage']
---

# Sourceusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | Pointer to **float32** | The average number of days that accounts were active within this source, for the month. | [optional] 

## Methods

### NewSourceusage

`func NewSourceusage() *Sourceusage`

NewSourceusage instantiates a new Sourceusage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceusageWithDefaults

`func NewSourceusageWithDefaults() *Sourceusage`

NewSourceusageWithDefaults instantiates a new Sourceusage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *Sourceusage) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *Sourceusage) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *Sourceusage) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *Sourceusage) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetCount

`func (o *Sourceusage) GetCount() float32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *Sourceusage) GetCountOk() (*float32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *Sourceusage) SetCount(v float32)`

SetCount sets Count field to given value.

### HasCount

`func (o *Sourceusage) HasCount() bool`

HasCount returns a boolean if a field has been set.


