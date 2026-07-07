---
id: v1-accessrequestapproverslistresponse
title: Accessrequestapproverslistresponse
pagination_label: Accessrequestapproverslistresponse
sidebar_label: Accessrequestapproverslistresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestapproverslistresponse', 'V1Accessrequestapproverslistresponse'] 
slug: /tools/sdk/go/accessrequestapprovals/models/accessrequestapproverslistresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestapproverslistresponse', 'V1Accessrequestapproverslistresponse']
---

# Accessrequestapproverslistresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Approver id. | [optional] 
**Email** | Pointer to **string** | Email of the approver. | [optional] 
**Name** | Pointer to **string** | Name of the approver. | [optional] 
**ApprovalId** | Pointer to **string** | Id of the approval item. | [optional] 
**Type** | Pointer to **string** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 

## Methods

### NewAccessrequestapproverslistresponse

`func NewAccessrequestapproverslistresponse() *Accessrequestapproverslistresponse`

NewAccessrequestapproverslistresponse instantiates a new Accessrequestapproverslistresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestapproverslistresponseWithDefaults

`func NewAccessrequestapproverslistresponseWithDefaults() *Accessrequestapproverslistresponse`

NewAccessrequestapproverslistresponseWithDefaults instantiates a new Accessrequestapproverslistresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessrequestapproverslistresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessrequestapproverslistresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessrequestapproverslistresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessrequestapproverslistresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEmail

`func (o *Accessrequestapproverslistresponse) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Accessrequestapproverslistresponse) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Accessrequestapproverslistresponse) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Accessrequestapproverslistresponse) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetName

`func (o *Accessrequestapproverslistresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessrequestapproverslistresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessrequestapproverslistresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessrequestapproverslistresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetApprovalId

`func (o *Accessrequestapproverslistresponse) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *Accessrequestapproverslistresponse) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *Accessrequestapproverslistresponse) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *Accessrequestapproverslistresponse) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### GetType

`func (o *Accessrequestapproverslistresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessrequestapproverslistresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessrequestapproverslistresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessrequestapproverslistresponse) HasType() bool`

HasType returns a boolean if a field has been set.


