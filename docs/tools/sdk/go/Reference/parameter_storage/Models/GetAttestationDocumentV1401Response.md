---
id: v1-get-attestation-document-v1401-response
title: GetAttestationDocumentV1401Response
pagination_label: GetAttestationDocumentV1401Response
sidebar_label: GetAttestationDocumentV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAttestationDocumentV1401Response', 'V1GetAttestationDocumentV1401Response'] 
slug: /tools/sdk/go/parameterstorage/models/get-attestation-document-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAttestationDocumentV1401Response', 'V1GetAttestationDocumentV1401Response']
---

# GetAttestationDocumentV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAttestationDocumentV1401Response

`func NewGetAttestationDocumentV1401Response() *GetAttestationDocumentV1401Response`

NewGetAttestationDocumentV1401Response instantiates a new GetAttestationDocumentV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAttestationDocumentV1401ResponseWithDefaults

`func NewGetAttestationDocumentV1401ResponseWithDefaults() *GetAttestationDocumentV1401Response`

NewGetAttestationDocumentV1401ResponseWithDefaults instantiates a new GetAttestationDocumentV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAttestationDocumentV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAttestationDocumentV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAttestationDocumentV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAttestationDocumentV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAttestationDocumentV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAttestationDocumentV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

