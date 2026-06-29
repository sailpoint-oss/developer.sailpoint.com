---
id: v1-sedbatchresponse
title: Sedbatchresponse
pagination_label: Sedbatchresponse
sidebar_label: Sedbatchresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedbatchresponse', 'V1Sedbatchresponse'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedbatchresponse
tags: ['SDK', 'Software Development Kit', 'Sedbatchresponse', 'V1Sedbatchresponse']
---

# Sedbatchresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | BatchId that groups all the ids together | [optional] 

## Methods

### NewSedbatchresponse

`func NewSedbatchresponse() *Sedbatchresponse`

NewSedbatchresponse instantiates a new Sedbatchresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedbatchresponseWithDefaults

`func NewSedbatchresponseWithDefaults() *Sedbatchresponse`

NewSedbatchresponseWithDefaults instantiates a new Sedbatchresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *Sedbatchresponse) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *Sedbatchresponse) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *Sedbatchresponse) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *Sedbatchresponse) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.


