---
id: v2024-put-password-dictionary-request
title: PutPasswordDictionaryRequest
pagination_label: PutPasswordDictionaryRequest
sidebar_label: PutPasswordDictionaryRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutPasswordDictionaryRequest', 'V2024PutPasswordDictionaryRequest'] 
slug: /tools/sdk/go/v2024/models/put-password-dictionary-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryRequest', 'V2024PutPasswordDictionaryRequest']
---

# PutPasswordDictionaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** |  | [optional] 

## Methods

### NewPutPasswordDictionaryRequest

`func NewPutPasswordDictionaryRequest() *PutPasswordDictionaryRequest`

NewPutPasswordDictionaryRequest instantiates a new PutPasswordDictionaryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPasswordDictionaryRequestWithDefaults

`func NewPutPasswordDictionaryRequestWithDefaults() *PutPasswordDictionaryRequest`

NewPutPasswordDictionaryRequestWithDefaults instantiates a new PutPasswordDictionaryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutPasswordDictionaryRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutPasswordDictionaryRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutPasswordDictionaryRequest) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *PutPasswordDictionaryRequest) HasFile() bool`

HasFile returns a boolean if a field has been set.


