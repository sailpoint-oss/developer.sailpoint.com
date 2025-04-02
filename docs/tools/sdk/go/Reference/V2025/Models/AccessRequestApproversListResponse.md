---
id: access-request-approvers-list-response
title: AccessRequestApproversListResponse
pagination_label: AccessRequestApproversListResponse
sidebar_label: AccessRequestApproversListResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestApproversListResponse', 'AccessRequestApproversListResponse'] 
slug: /tools/sdk/go//models/access-request-approvers-list-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestApproversListResponse', 'AccessRequestApproversListResponse']
---

# AccessRequestApproversListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Approver id. | [optional] 
**Email** | Pointer to **string** | Email of the approver. | [optional] 
**Name** | Pointer to **string** | Name of the approver. | [optional] 
**ApprovalId** | Pointer to **string** | Id of the approval item. | [optional] 
**Type** | Pointer to **string** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 

## Methods

### NewAccessRequestApproversListResponse

`func NewAccessRequestApproversListResponse() *AccessRequestApproversListResponse`

NewAccessRequestApproversListResponse instantiates a new AccessRequestApproversListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestApproversListResponseWithDefaults

`func NewAccessRequestApproversListResponseWithDefaults() *AccessRequestApproversListResponse`

NewAccessRequestApproversListResponseWithDefaults instantiates a new AccessRequestApproversListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestApproversListResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestApproversListResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestApproversListResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessRequestApproversListResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEmail

`func (o *AccessRequestApproversListResponse) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AccessRequestApproversListResponse) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AccessRequestApproversListResponse) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *AccessRequestApproversListResponse) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetName

`func (o *AccessRequestApproversListResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestApproversListResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestApproversListResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessRequestApproversListResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetApprovalId

`func (o *AccessRequestApproversListResponse) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *AccessRequestApproversListResponse) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *AccessRequestApproversListResponse) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *AccessRequestApproversListResponse) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### GetType

`func (o *AccessRequestApproversListResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestApproversListResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestApproversListResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessRequestApproversListResponse) HasType() bool`

HasType returns a boolean if a field has been set.


