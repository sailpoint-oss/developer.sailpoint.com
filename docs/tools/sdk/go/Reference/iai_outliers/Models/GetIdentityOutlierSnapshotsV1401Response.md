---
id: v1-get-identity-outlier-snapshots-v1401-response
title: GetIdentityOutlierSnapshotsV1401Response
pagination_label: GetIdentityOutlierSnapshotsV1401Response
sidebar_label: GetIdentityOutlierSnapshotsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetIdentityOutlierSnapshotsV1401Response', 'V1GetIdentityOutlierSnapshotsV1401Response'] 
slug: /tools/sdk/go/iaioutliers/models/get-identity-outlier-snapshots-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetIdentityOutlierSnapshotsV1401Response', 'V1GetIdentityOutlierSnapshotsV1401Response']
---

# GetIdentityOutlierSnapshotsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetIdentityOutlierSnapshotsV1401Response

`func NewGetIdentityOutlierSnapshotsV1401Response() *GetIdentityOutlierSnapshotsV1401Response`

NewGetIdentityOutlierSnapshotsV1401Response instantiates a new GetIdentityOutlierSnapshotsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetIdentityOutlierSnapshotsV1401ResponseWithDefaults

`func NewGetIdentityOutlierSnapshotsV1401ResponseWithDefaults() *GetIdentityOutlierSnapshotsV1401Response`

NewGetIdentityOutlierSnapshotsV1401ResponseWithDefaults instantiates a new GetIdentityOutlierSnapshotsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetIdentityOutlierSnapshotsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetIdentityOutlierSnapshotsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetIdentityOutlierSnapshotsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetIdentityOutlierSnapshotsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetIdentityOutlierSnapshotsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetIdentityOutlierSnapshotsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

