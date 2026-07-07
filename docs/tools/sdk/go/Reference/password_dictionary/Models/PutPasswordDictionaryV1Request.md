---
id: v1-put-password-dictionary-v1-request
title: PutPasswordDictionaryV1Request
pagination_label: PutPasswordDictionaryV1Request
sidebar_label: PutPasswordDictionaryV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutPasswordDictionaryV1Request', 'V1PutPasswordDictionaryV1Request'] 
slug: /tools/sdk/go/passworddictionary/models/put-password-dictionary-v1-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryV1Request', 'V1PutPasswordDictionaryV1Request']
---

# PutPasswordDictionaryV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** |  | [optional] 

## Methods

### NewPutPasswordDictionaryV1Request

`func NewPutPasswordDictionaryV1Request() *PutPasswordDictionaryV1Request`

NewPutPasswordDictionaryV1Request instantiates a new PutPasswordDictionaryV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPasswordDictionaryV1RequestWithDefaults

`func NewPutPasswordDictionaryV1RequestWithDefaults() *PutPasswordDictionaryV1Request`

NewPutPasswordDictionaryV1RequestWithDefaults instantiates a new PutPasswordDictionaryV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutPasswordDictionaryV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutPasswordDictionaryV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutPasswordDictionaryV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *PutPasswordDictionaryV1Request) HasFile() bool`

HasFile returns a boolean if a field has been set.


