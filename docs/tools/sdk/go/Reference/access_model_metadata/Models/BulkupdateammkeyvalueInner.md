---
id: v1-bulkupdateammkeyvalue-inner
title: BulkupdateammkeyvalueInner
pagination_label: BulkupdateammkeyvalueInner
sidebar_label: BulkupdateammkeyvalueInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkupdateammkeyvalueInner', 'V1BulkupdateammkeyvalueInner'] 
slug: /tools/sdk/go/accessmodelmetadata/models/bulkupdateammkeyvalue-inner
tags: ['SDK', 'Software Development Kit', 'BulkupdateammkeyvalueInner', 'V1BulkupdateammkeyvalueInner']
---

# BulkupdateammkeyvalueInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | the key of metadata attribute | 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewBulkupdateammkeyvalueInner

`func NewBulkupdateammkeyvalueInner(attribute string, values []string, ) *BulkupdateammkeyvalueInner`

NewBulkupdateammkeyvalueInner instantiates a new BulkupdateammkeyvalueInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkupdateammkeyvalueInnerWithDefaults

`func NewBulkupdateammkeyvalueInnerWithDefaults() *BulkupdateammkeyvalueInner`

NewBulkupdateammkeyvalueInnerWithDefaults instantiates a new BulkupdateammkeyvalueInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *BulkupdateammkeyvalueInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *BulkupdateammkeyvalueInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *BulkupdateammkeyvalueInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *BulkupdateammkeyvalueInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *BulkupdateammkeyvalueInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *BulkupdateammkeyvalueInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *BulkupdateammkeyvalueInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *BulkupdateammkeyvalueInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

