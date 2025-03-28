---
id: beta-close-access-request
title: CloseAccessRequest
pagination_label: CloseAccessRequest
sidebar_label: CloseAccessRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CloseAccessRequest', 'BetaCloseAccessRequest'] 
slug: /tools/sdk/go/beta/models/close-access-request
tags: ['SDK', 'Software Development Kit', 'CloseAccessRequest', 'BetaCloseAccessRequest']
---

# CloseAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]string** | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | 
**Message** | Pointer to **string** | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [optional] [default to "The IdentityNow Administrator manually closed this request."]
**ExecutionStatus** | Pointer to **string** | The request&#39;s provisioning status. Displayed as Stage in IdentityNow. | [optional] [default to "Terminated"]
**CompletionStatus** | Pointer to **string** | The request&#39;s overall status. Displayed as Status in IdentityNow. | [optional] [default to "Failure"]

## Methods

### NewCloseAccessRequest

`func NewCloseAccessRequest(accessRequestIds []string, ) *CloseAccessRequest`

NewCloseAccessRequest instantiates a new CloseAccessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloseAccessRequestWithDefaults

`func NewCloseAccessRequestWithDefaults() *CloseAccessRequest`

NewCloseAccessRequestWithDefaults instantiates a new CloseAccessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestIds

`func (o *CloseAccessRequest) GetAccessRequestIds() []string`

GetAccessRequestIds returns the AccessRequestIds field if non-nil, zero value otherwise.

### GetAccessRequestIdsOk

`func (o *CloseAccessRequest) GetAccessRequestIdsOk() (*[]string, bool)`

GetAccessRequestIdsOk returns a tuple with the AccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestIds

`func (o *CloseAccessRequest) SetAccessRequestIds(v []string)`

SetAccessRequestIds sets AccessRequestIds field to given value.


### GetMessage

`func (o *CloseAccessRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CloseAccessRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CloseAccessRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CloseAccessRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetExecutionStatus

`func (o *CloseAccessRequest) GetExecutionStatus() string`

GetExecutionStatus returns the ExecutionStatus field if non-nil, zero value otherwise.

### GetExecutionStatusOk

`func (o *CloseAccessRequest) GetExecutionStatusOk() (*string, bool)`

GetExecutionStatusOk returns a tuple with the ExecutionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionStatus

`func (o *CloseAccessRequest) SetExecutionStatus(v string)`

SetExecutionStatus sets ExecutionStatus field to given value.

### HasExecutionStatus

`func (o *CloseAccessRequest) HasExecutionStatus() bool`

HasExecutionStatus returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *CloseAccessRequest) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *CloseAccessRequest) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *CloseAccessRequest) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *CloseAccessRequest) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.


