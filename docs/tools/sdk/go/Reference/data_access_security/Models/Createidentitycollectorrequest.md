---
id: v1-createidentitycollectorrequest
title: Createidentitycollectorrequest
pagination_label: Createidentitycollectorrequest
sidebar_label: Createidentitycollectorrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createidentitycollectorrequest', 'V1Createidentitycollectorrequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/createidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Createidentitycollectorrequest', 'V1Createidentitycollectorrequest']
---

# Createidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The display name for the new identity collector. Must be unique within the tenant. | 
**SourceId** | **string** | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | 

## Methods

### NewCreateidentitycollectorrequest

`func NewCreateidentitycollectorrequest(name string, sourceId string, ) *Createidentitycollectorrequest`

NewCreateidentitycollectorrequest instantiates a new Createidentitycollectorrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateidentitycollectorrequestWithDefaults

`func NewCreateidentitycollectorrequestWithDefaults() *Createidentitycollectorrequest`

NewCreateidentitycollectorrequestWithDefaults instantiates a new Createidentitycollectorrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Createidentitycollectorrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Createidentitycollectorrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Createidentitycollectorrequest) SetName(v string)`

SetName sets Name field to given value.


### GetSourceId

`func (o *Createidentitycollectorrequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Createidentitycollectorrequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Createidentitycollectorrequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.



