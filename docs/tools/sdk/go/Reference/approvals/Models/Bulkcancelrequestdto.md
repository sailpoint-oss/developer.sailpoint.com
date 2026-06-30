---
id: v1-bulkcancelrequestdto
title: Bulkcancelrequestdto
pagination_label: Bulkcancelrequestdto
sidebar_label: Bulkcancelrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkcancelrequestdto', 'V1Bulkcancelrequestdto'] 
slug: /tools/sdk/go/approvals/models/bulkcancelrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkcancelrequestdto', 'V1Bulkcancelrequestdto']
---

# Bulkcancelrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | Pointer to **[]string** | Array of Approval IDs to be bulk cancelled | [optional] 
**Comment** | Pointer to **string** | Optional comment to include with the bulk cancellation request | [optional] 

## Methods

### NewBulkcancelrequestdto

`func NewBulkcancelrequestdto() *Bulkcancelrequestdto`

NewBulkcancelrequestdto instantiates a new Bulkcancelrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkcancelrequestdtoWithDefaults

`func NewBulkcancelrequestdtoWithDefaults() *Bulkcancelrequestdto`

NewBulkcancelrequestdtoWithDefaults instantiates a new Bulkcancelrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *Bulkcancelrequestdto) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Bulkcancelrequestdto) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Bulkcancelrequestdto) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *Bulkcancelrequestdto) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### GetComment

`func (o *Bulkcancelrequestdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Bulkcancelrequestdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Bulkcancelrequestdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Bulkcancelrequestdto) HasComment() bool`

HasComment returns a boolean if a field has been set.


