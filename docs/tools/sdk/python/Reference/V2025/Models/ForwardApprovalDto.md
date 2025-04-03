---
id: v2025-forward-approval-dto
title: ForwardApprovalDto
pagination_label: ForwardApprovalDto
sidebar_label: ForwardApprovalDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ForwardApprovalDto', 'V2025ForwardApprovalDto'] 
slug: /tools/sdk/go/v2025/models/forward-approval-dto
tags: ['SDK', 'Software Development Kit', 'ForwardApprovalDto', 'V2025ForwardApprovalDto']
---

# ForwardApprovalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewOwnerId** | **string** | The Id of the new owner | 
**Comment** | **string** | The comment provided by the forwarder | 

## Methods

### NewForwardApprovalDto

`func NewForwardApprovalDto(newOwnerId string, comment string, ) *ForwardApprovalDto`

NewForwardApprovalDto instantiates a new ForwardApprovalDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForwardApprovalDtoWithDefaults

`func NewForwardApprovalDtoWithDefaults() *ForwardApprovalDto`

NewForwardApprovalDtoWithDefaults instantiates a new ForwardApprovalDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewOwnerId

`func (o *ForwardApprovalDto) GetNewOwnerId() string`

GetNewOwnerId returns the NewOwnerId field if non-nil, zero value otherwise.

### GetNewOwnerIdOk

`func (o *ForwardApprovalDto) GetNewOwnerIdOk() (*string, bool)`

GetNewOwnerIdOk returns a tuple with the NewOwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewOwnerId

`func (o *ForwardApprovalDto) SetNewOwnerId(v string)`

SetNewOwnerId sets NewOwnerId field to given value.


### GetComment

`func (o *ForwardApprovalDto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ForwardApprovalDto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ForwardApprovalDto) SetComment(v string)`

SetComment sets Comment field to given value.



