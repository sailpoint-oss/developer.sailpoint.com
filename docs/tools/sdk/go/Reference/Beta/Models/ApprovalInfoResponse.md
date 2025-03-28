---
id: beta-approval-info-response
title: ApprovalInfoResponse
pagination_label: ApprovalInfoResponse
sidebar_label: ApprovalInfoResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalInfoResponse', 'BetaApprovalInfoResponse'] 
slug: /tools/sdk/go/beta/models/approval-info-response
tags: ['SDK', 'Software Development Kit', 'ApprovalInfoResponse', 'BetaApprovalInfoResponse']
---

# ApprovalInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of approver | [optional] 
**Name** | Pointer to **string** | the name of approver | [optional] 
**Status** | Pointer to **string** | the status of the approval request | [optional] 

## Methods

### NewApprovalInfoResponse

`func NewApprovalInfoResponse() *ApprovalInfoResponse`

NewApprovalInfoResponse instantiates a new ApprovalInfoResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalInfoResponseWithDefaults

`func NewApprovalInfoResponseWithDefaults() *ApprovalInfoResponse`

NewApprovalInfoResponseWithDefaults instantiates a new ApprovalInfoResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApprovalInfoResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalInfoResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalInfoResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalInfoResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalInfoResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalInfoResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalInfoResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalInfoResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *ApprovalInfoResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApprovalInfoResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApprovalInfoResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApprovalInfoResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


