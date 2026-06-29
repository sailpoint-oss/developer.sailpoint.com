---
id: v1-get-multi-host-integrations-list-v1401-response
title: GetMultiHostIntegrationsListV1401Response
pagination_label: GetMultiHostIntegrationsListV1401Response
sidebar_label: GetMultiHostIntegrationsListV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetMultiHostIntegrationsListV1401Response', 'V1GetMultiHostIntegrationsListV1401Response'] 
slug: /tools/sdk/go/multihostintegration/models/get-multi-host-integrations-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMultiHostIntegrationsListV1401Response', 'V1GetMultiHostIntegrationsListV1401Response']
---

# GetMultiHostIntegrationsListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetMultiHostIntegrationsListV1401Response

`func NewGetMultiHostIntegrationsListV1401Response() *GetMultiHostIntegrationsListV1401Response`

NewGetMultiHostIntegrationsListV1401Response instantiates a new GetMultiHostIntegrationsListV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMultiHostIntegrationsListV1401ResponseWithDefaults

`func NewGetMultiHostIntegrationsListV1401ResponseWithDefaults() *GetMultiHostIntegrationsListV1401Response`

NewGetMultiHostIntegrationsListV1401ResponseWithDefaults instantiates a new GetMultiHostIntegrationsListV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetMultiHostIntegrationsListV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetMultiHostIntegrationsListV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetMultiHostIntegrationsListV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetMultiHostIntegrationsListV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetMultiHostIntegrationsListV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetMultiHostIntegrationsListV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

