---
id: v1-get-identity-outlier-snapshots-v1429-response
title: GetIdentityOutlierSnapshotsV1429Response
pagination_label: GetIdentityOutlierSnapshotsV1429Response
sidebar_label: GetIdentityOutlierSnapshotsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetIdentityOutlierSnapshotsV1429Response', 'V1GetIdentityOutlierSnapshotsV1429Response'] 
slug: /tools/sdk/go/iaioutliers/models/get-identity-outlier-snapshots-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetIdentityOutlierSnapshotsV1429Response', 'V1GetIdentityOutlierSnapshotsV1429Response']
---

# GetIdentityOutlierSnapshotsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetIdentityOutlierSnapshotsV1429Response

`func NewGetIdentityOutlierSnapshotsV1429Response() *GetIdentityOutlierSnapshotsV1429Response`

NewGetIdentityOutlierSnapshotsV1429Response instantiates a new GetIdentityOutlierSnapshotsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetIdentityOutlierSnapshotsV1429ResponseWithDefaults

`func NewGetIdentityOutlierSnapshotsV1429ResponseWithDefaults() *GetIdentityOutlierSnapshotsV1429Response`

NewGetIdentityOutlierSnapshotsV1429ResponseWithDefaults instantiates a new GetIdentityOutlierSnapshotsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetIdentityOutlierSnapshotsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetIdentityOutlierSnapshotsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetIdentityOutlierSnapshotsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetIdentityOutlierSnapshotsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetIdentityOutlierSnapshotsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetIdentityOutlierSnapshotsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

