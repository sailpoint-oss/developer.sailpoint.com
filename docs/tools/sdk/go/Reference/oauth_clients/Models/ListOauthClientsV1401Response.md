---
id: v1-list-oauth-clients-v1401-response
title: ListOauthClientsV1401Response
pagination_label: ListOauthClientsV1401Response
sidebar_label: ListOauthClientsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListOauthClientsV1401Response', 'V1ListOauthClientsV1401Response'] 
slug: /tools/sdk/go/oauthclients/models/list-oauth-clients-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListOauthClientsV1401Response', 'V1ListOauthClientsV1401Response']
---

# ListOauthClientsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListOauthClientsV1401Response

`func NewListOauthClientsV1401Response() *ListOauthClientsV1401Response`

NewListOauthClientsV1401Response instantiates a new ListOauthClientsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListOauthClientsV1401ResponseWithDefaults

`func NewListOauthClientsV1401ResponseWithDefaults() *ListOauthClientsV1401Response`

NewListOauthClientsV1401ResponseWithDefaults instantiates a new ListOauthClientsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListOauthClientsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListOauthClientsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListOauthClientsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListOauthClientsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListOauthClientsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListOauthClientsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

