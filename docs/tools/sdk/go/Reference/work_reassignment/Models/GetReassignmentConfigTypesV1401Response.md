---
id: v1-get-reassignment-config-types-v1401-response
title: GetReassignmentConfigTypesV1401Response
pagination_label: GetReassignmentConfigTypesV1401Response
sidebar_label: GetReassignmentConfigTypesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetReassignmentConfigTypesV1401Response', 'V1GetReassignmentConfigTypesV1401Response'] 
slug: /tools/sdk/go/workreassignment/models/get-reassignment-config-types-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetReassignmentConfigTypesV1401Response', 'V1GetReassignmentConfigTypesV1401Response']
---

# GetReassignmentConfigTypesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetReassignmentConfigTypesV1401Response

`func NewGetReassignmentConfigTypesV1401Response() *GetReassignmentConfigTypesV1401Response`

NewGetReassignmentConfigTypesV1401Response instantiates a new GetReassignmentConfigTypesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReassignmentConfigTypesV1401ResponseWithDefaults

`func NewGetReassignmentConfigTypesV1401ResponseWithDefaults() *GetReassignmentConfigTypesV1401Response`

NewGetReassignmentConfigTypesV1401ResponseWithDefaults instantiates a new GetReassignmentConfigTypesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetReassignmentConfigTypesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetReassignmentConfigTypesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetReassignmentConfigTypesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetReassignmentConfigTypesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetReassignmentConfigTypesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetReassignmentConfigTypesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

