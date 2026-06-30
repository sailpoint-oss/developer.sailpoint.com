---
id: v1-get-attestation-document-v1429-response
title: GetAttestationDocumentV1429Response
pagination_label: GetAttestationDocumentV1429Response
sidebar_label: GetAttestationDocumentV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAttestationDocumentV1429Response', 'V1GetAttestationDocumentV1429Response'] 
slug: /tools/sdk/go/parameterstorage/models/get-attestation-document-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAttestationDocumentV1429Response', 'V1GetAttestationDocumentV1429Response']
---

# GetAttestationDocumentV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAttestationDocumentV1429Response

`func NewGetAttestationDocumentV1429Response() *GetAttestationDocumentV1429Response`

NewGetAttestationDocumentV1429Response instantiates a new GetAttestationDocumentV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAttestationDocumentV1429ResponseWithDefaults

`func NewGetAttestationDocumentV1429ResponseWithDefaults() *GetAttestationDocumentV1429Response`

NewGetAttestationDocumentV1429ResponseWithDefaults instantiates a new GetAttestationDocumentV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAttestationDocumentV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAttestationDocumentV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAttestationDocumentV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAttestationDocumentV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAttestationDocumentV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAttestationDocumentV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

