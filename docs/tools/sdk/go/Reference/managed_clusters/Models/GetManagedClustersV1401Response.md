---
id: v1-get-managed-clusters-v1401-response
title: GetManagedClustersV1401Response
pagination_label: GetManagedClustersV1401Response
sidebar_label: GetManagedClustersV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetManagedClustersV1401Response', 'V1GetManagedClustersV1401Response'] 
slug: /tools/sdk/go/managedclusters/models/get-managed-clusters-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClustersV1401Response', 'V1GetManagedClustersV1401Response']
---

# GetManagedClustersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetManagedClustersV1401Response

`func NewGetManagedClustersV1401Response() *GetManagedClustersV1401Response`

NewGetManagedClustersV1401Response instantiates a new GetManagedClustersV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetManagedClustersV1401ResponseWithDefaults

`func NewGetManagedClustersV1401ResponseWithDefaults() *GetManagedClustersV1401Response`

NewGetManagedClustersV1401ResponseWithDefaults instantiates a new GetManagedClustersV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetManagedClustersV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetManagedClustersV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetManagedClustersV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetManagedClustersV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetManagedClustersV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetManagedClustersV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

