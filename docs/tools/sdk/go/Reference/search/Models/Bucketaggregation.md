---
id: v1-bucketaggregation
title: Bucketaggregation
pagination_label: Bucketaggregation
sidebar_label: Bucketaggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bucketaggregation', 'V1Bucketaggregation'] 
slug: /tools/sdk/go/search/models/bucketaggregation
tags: ['SDK', 'Software Development Kit', 'Bucketaggregation', 'V1Bucketaggregation']
---

# Bucketaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the bucket aggregate to be included in the result. | 
**Type** | Pointer to [**Buckettype**](buckettype) |  | [optional] [default to BUCKETTYPE_TERMS]
**Field** | **string** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | 
**Size** | Pointer to **int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** | Pointer to **int32** | Minimum number of documents a bucket should have. | [optional] 

## Methods

### NewBucketaggregation

`func NewBucketaggregation(name string, field string, ) *Bucketaggregation`

NewBucketaggregation instantiates a new Bucketaggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBucketaggregationWithDefaults

`func NewBucketaggregationWithDefaults() *Bucketaggregation`

NewBucketaggregationWithDefaults instantiates a new Bucketaggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Bucketaggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Bucketaggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Bucketaggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Bucketaggregation) GetType() Buckettype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Bucketaggregation) GetTypeOk() (*Buckettype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Bucketaggregation) SetType(v Buckettype)`

SetType sets Type field to given value.

### HasType

`func (o *Bucketaggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *Bucketaggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *Bucketaggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *Bucketaggregation) SetField(v string)`

SetField sets Field field to given value.


### GetSize

`func (o *Bucketaggregation) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *Bucketaggregation) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *Bucketaggregation) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *Bucketaggregation) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetMinDocCount

`func (o *Bucketaggregation) GetMinDocCount() int32`

GetMinDocCount returns the MinDocCount field if non-nil, zero value otherwise.

### GetMinDocCountOk

`func (o *Bucketaggregation) GetMinDocCountOk() (*int32, bool)`

GetMinDocCountOk returns a tuple with the MinDocCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDocCount

`func (o *Bucketaggregation) SetMinDocCount(v int32)`

SetMinDocCount sets MinDocCount field to given value.

### HasMinDocCount

`func (o *Bucketaggregation) HasMinDocCount() bool`

HasMinDocCount returns a boolean if a field has been set.


