---
id: v1-updateidentitycollectorrequest
title: Updateidentitycollectorrequest
pagination_label: Updateidentitycollectorrequest
sidebar_label: Updateidentitycollectorrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Updateidentitycollectorrequest', 'V1Updateidentitycollectorrequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/updateidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Updateidentitycollectorrequest', 'V1Updateidentitycollectorrequest']
---

# Updateidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The display name of the identity collector. Must be unique within the tenant. | 
**SourceId** | **string** | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | 
**Type** | **string** | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | 

## Methods

### NewUpdateidentitycollectorrequest

`func NewUpdateidentitycollectorrequest(name string, sourceId string, type_ string, ) *Updateidentitycollectorrequest`

NewUpdateidentitycollectorrequest instantiates a new Updateidentitycollectorrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateidentitycollectorrequestWithDefaults

`func NewUpdateidentitycollectorrequestWithDefaults() *Updateidentitycollectorrequest`

NewUpdateidentitycollectorrequestWithDefaults instantiates a new Updateidentitycollectorrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Updateidentitycollectorrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Updateidentitycollectorrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Updateidentitycollectorrequest) SetName(v string)`

SetName sets Name field to given value.


### GetSourceId

`func (o *Updateidentitycollectorrequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Updateidentitycollectorrequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Updateidentitycollectorrequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetType

`func (o *Updateidentitycollectorrequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Updateidentitycollectorrequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Updateidentitycollectorrequest) SetType(v string)`

SetType sets Type field to given value.



