---
id: v1-list-identity-attributes-v1401-response
title: ListIdentityAttributesV1401Response
pagination_label: ListIdentityAttributesV1401Response
sidebar_label: ListIdentityAttributesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListIdentityAttributesV1401Response', 'V1ListIdentityAttributesV1401Response'] 
slug: /tools/sdk/go/identityattributes/models/list-identity-attributes-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityAttributesV1401Response', 'V1ListIdentityAttributesV1401Response']
---

# ListIdentityAttributesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListIdentityAttributesV1401Response

`func NewListIdentityAttributesV1401Response() *ListIdentityAttributesV1401Response`

NewListIdentityAttributesV1401Response instantiates a new ListIdentityAttributesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListIdentityAttributesV1401ResponseWithDefaults

`func NewListIdentityAttributesV1401ResponseWithDefaults() *ListIdentityAttributesV1401Response`

NewListIdentityAttributesV1401ResponseWithDefaults instantiates a new ListIdentityAttributesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListIdentityAttributesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListIdentityAttributesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListIdentityAttributesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListIdentityAttributesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListIdentityAttributesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListIdentityAttributesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

