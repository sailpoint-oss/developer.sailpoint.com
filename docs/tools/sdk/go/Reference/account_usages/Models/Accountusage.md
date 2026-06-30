---
id: v1-accountusage
title: Accountusage
pagination_label: Accountusage
sidebar_label: Accountusage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountusage', 'V1Accountusage'] 
slug: /tools/sdk/go/accountusages/models/accountusage
tags: ['SDK', 'Software Development Kit', 'Accountusage', 'V1Accountusage']
---

# Accountusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | Pointer to **int64** | The number of days within the month that the account was active in a source. | [optional] 

## Methods

### NewAccountusage

`func NewAccountusage() *Accountusage`

NewAccountusage instantiates a new Accountusage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountusageWithDefaults

`func NewAccountusageWithDefaults() *Accountusage`

NewAccountusageWithDefaults instantiates a new Accountusage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *Accountusage) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *Accountusage) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *Accountusage) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *Accountusage) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetCount

`func (o *Accountusage) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *Accountusage) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *Accountusage) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *Accountusage) HasCount() bool`

HasCount returns a boolean if a field has been set.


