---
id: v1-bulkrejectrequestdto
title: Bulkrejectrequestdto
pagination_label: Bulkrejectrequestdto
sidebar_label: Bulkrejectrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkrejectrequestdto', 'V1Bulkrejectrequestdto'] 
slug: /tools/sdk/go/approvals/models/bulkrejectrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkrejectrequestdto', 'V1Bulkrejectrequestdto']
---

# Bulkrejectrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk rejected | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk reject request | [optional] 

## Methods

### NewBulkrejectrequestdto

`func NewBulkrejectrequestdto() *Bulkrejectrequestdto`

NewBulkrejectrequestdto instantiates a new Bulkrejectrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkrejectrequestdtoWithDefaults

`func NewBulkrejectrequestdtoWithDefaults() *Bulkrejectrequestdto`

NewBulkrejectrequestdtoWithDefaults instantiates a new Bulkrejectrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *Bulkrejectrequestdto) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Bulkrejectrequestdto) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Bulkrejectrequestdto) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *Bulkrejectrequestdto) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *Bulkrejectrequestdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkrejectrequestdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkrejectrequestdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Bulkrejectrequestdto) HasComment() bool`

HasComment returns a boolean if a field has been set.


