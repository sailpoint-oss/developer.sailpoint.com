---
id: v1-list-machine-identities-v1401-response
title: ListMachineIdentitiesV1401Response
pagination_label: ListMachineIdentitiesV1401Response
sidebar_label: ListMachineIdentitiesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListMachineIdentitiesV1401Response', 'V1ListMachineIdentitiesV1401Response'] 
slug: /tools/sdk/go/machineidentities/models/list-machine-identities-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListMachineIdentitiesV1401Response', 'V1ListMachineIdentitiesV1401Response']
---

# ListMachineIdentitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListMachineIdentitiesV1401Response

`func NewListMachineIdentitiesV1401Response() *ListMachineIdentitiesV1401Response`

NewListMachineIdentitiesV1401Response instantiates a new ListMachineIdentitiesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListMachineIdentitiesV1401ResponseWithDefaults

`func NewListMachineIdentitiesV1401ResponseWithDefaults() *ListMachineIdentitiesV1401Response`

NewListMachineIdentitiesV1401ResponseWithDefaults instantiates a new ListMachineIdentitiesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListMachineIdentitiesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListMachineIdentitiesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListMachineIdentitiesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListMachineIdentitiesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListMachineIdentitiesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListMachineIdentitiesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

