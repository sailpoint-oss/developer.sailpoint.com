---
id: bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BucketAggregation', 'BucketAggregation'] 
slug: /tools/sdk/go/v3/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation', 'BucketAggregation']
---

# BucketAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the bucket aggregate to be included in the result. | 
**Type** | Pointer to [**BucketType**](bucket-type) |  | [optional] [default to BUCKETTYPE_TERMS]
**Field** | **string** | The field to bucket on. Prefix the field name with &#39;@&#39; to reference a nested object. | 
**Size** | Pointer to **int32** | Maximum number of buckets to include. | [optional] 
**MinDocCount** | Pointer to **int32** | Minimum number of documents a bucket should have. | [optional] 

## Methods

### NewBucketAggregation

`func NewBucketAggregation(name string, field string, ) *BucketAggregation`

NewBucketAggregation instantiates a new BucketAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBucketAggregationWithDefaults

`func NewBucketAggregationWithDefaults() *BucketAggregation`

NewBucketAggregationWithDefaults instantiates a new BucketAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *BucketAggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BucketAggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BucketAggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *BucketAggregation) GetType() BucketType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BucketAggregation) GetTypeOk() (*BucketType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BucketAggregation) SetType(v BucketType)`

SetType sets Type field to given value.

### HasType

`func (o *BucketAggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *BucketAggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *BucketAggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *BucketAggregation) SetField(v string)`

SetField sets Field field to given value.


### GetSize

`func (o *BucketAggregation) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *BucketAggregation) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *BucketAggregation) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *BucketAggregation) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetMinDocCount

`func (o *BucketAggregation) GetMinDocCount() int32`

GetMinDocCount returns the MinDocCount field if non-nil, zero value otherwise.

### GetMinDocCountOk

`func (o *BucketAggregation) GetMinDocCountOk() (*int32, bool)`

GetMinDocCountOk returns a tuple with the MinDocCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDocCount

`func (o *BucketAggregation) SetMinDocCount(v int32)`

SetMinDocCount sets MinDocCount field to given value.

### HasMinDocCount

`func (o *BucketAggregation) HasMinDocCount() bool`

HasMinDocCount returns a boolean if a field has been set.


