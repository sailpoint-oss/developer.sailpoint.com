---
id: v1-get-data-segment-identity-membership-v1429-response
title: GetDataSegmentIdentityMembershipV1429Response
pagination_label: GetDataSegmentIdentityMembershipV1429Response
sidebar_label: GetDataSegmentIdentityMembershipV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetDataSegmentIdentityMembershipV1429Response', 'V1GetDataSegmentIdentityMembershipV1429Response'] 
slug: /tools/sdk/go/datasegmentation/models/get-data-segment-identity-membership-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetDataSegmentIdentityMembershipV1429Response', 'V1GetDataSegmentIdentityMembershipV1429Response']
---

# GetDataSegmentIdentityMembershipV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetDataSegmentIdentityMembershipV1429Response

`func NewGetDataSegmentIdentityMembershipV1429Response() *GetDataSegmentIdentityMembershipV1429Response`

NewGetDataSegmentIdentityMembershipV1429Response instantiates a new GetDataSegmentIdentityMembershipV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetDataSegmentIdentityMembershipV1429ResponseWithDefaults

`func NewGetDataSegmentIdentityMembershipV1429ResponseWithDefaults() *GetDataSegmentIdentityMembershipV1429Response`

NewGetDataSegmentIdentityMembershipV1429ResponseWithDefaults instantiates a new GetDataSegmentIdentityMembershipV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetDataSegmentIdentityMembershipV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetDataSegmentIdentityMembershipV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetDataSegmentIdentityMembershipV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetDataSegmentIdentityMembershipV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetDataSegmentIdentityMembershipV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetDataSegmentIdentityMembershipV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

